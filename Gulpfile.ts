const gulp = require("gulp");
const cheerio = require("gulp-cheerio");
const es = require("event-stream");
const fs = require("fs");
const path = require("path");
const replace = require("gulp-replace");
const svgSprite = require("gulp-svg-sprites");
const svgmin = require("gulp-svgmin");

type FileError = NodeJS.ErrnoException | null;

enum IconMode {
    Default,
    Stroke,
    Colorful,
}

gulp.task("build-svgs", () => {
    const imageHolderFolder = "src/app/components/lib/icon/icon-holder";
    const imageHolderTemplateName = "icon-holder.component.html";
    const iconsFolder = "src/assets/images/icons";
    const iconsPath = iconsFolder + "/*.svg";
    const iconsColorfulFolder = "src/assets/images/icons/colorful";
    const iconsColorfulPath = iconsColorfulFolder + "/*.svg";
    const iconsStrokeFolder = "src/assets/images/icons/stroke";
    const iconsStrokePath = iconsStrokeFolder + "/*.svg";

    function updateIconsList() {
        const iconsListPath = "src/app/components/lib/icon/icons.list.ts";

        const error = () => console.error("Icons list doesn't updated.");

        const writeSvgNamesList = (simpleSvgFileNames: string[], colorfulSvgFileNames?: string[], strokeSvgFileNames?: string[]) => {
            const svgExtension = ".svg";

            const getNames = (svgFileNames: string[]): string => svgFileNames
                .filter(file => path.extname(file) === svgExtension)
                .map(file => `"${file.replace(svgExtension, "")}"`)
                .join(", ");

            const fileContent =
                `export const etsSimpleIconList = [${getNames(simpleSvgFileNames)}] as const;
export const etsColoredIconList = [${getNames(colorfulSvgFileNames)}] as const;
export const etsStrokeIconList = [${getNames(strokeSvgFileNames)}] as const;
export const etsIconList = [...etsSimpleIconList, ...etsColoredIconList, ...etsStrokeIconList] as const;`;

            fs.writeFile(iconsListPath, fileContent, (err: FileError) =>
                err ? error() : console.log(`Icons list array was updated in "${iconsListPath}"`));
        };

        fs.readdir(iconsFolder, (err: FileError, iconsFiles: string[]) =>
            fs.readdir(iconsColorfulFolder, (errCol: FileError, iconsColorfulFiles: string[]) =>
                fs.readdir(iconsStrokeFolder, (errStroke: FileError, iconsStrokeFiles: string[]) =>
                    err || errCol || errStroke ? error() : writeSvgNamesList(iconsFiles, iconsColorfulFiles, iconsStrokeFiles),
                )));
    }

    updateIconsList();

    const getIcons = (iconsPath: string, mode: IconMode = IconMode.Default): NodeJS.ReadWriteStream => {
        switch (mode) {
            case IconMode.Default:
                // here remove redundant "fill", "style" attrs
                return gulp.src(iconsPath)
                    .pipe(cheerio({
                        run: function($: any) {
                            $("[fill]").removeAttr("fill");
                            $("[style]").removeAttr("style");
                        },
                        parserOptions: {xmlMode: true},
                    }))
                    // cheerio plugin create unnecessary string '>', so replace it.
                    .pipe(replace("&gt;", ">"));
            case IconMode.Stroke:
                return gulp.src(iconsPath)
                    .pipe(cheerio({
                        run: function($: any) {
                            $("[stroke]").removeAttr("stroke");
                            $("[stroke-width]").removeAttr("stroke-width");
                            $("[fill]").removeAttr("fill");
                        },
                        parserOptions: {xmlMode: true},
                    }))
                    // cheerio plugin create unnecessary string '>', so replace it.
                    .pipe(replace("&gt;", ">"));
            case IconMode.Colorful:
            default:
                return gulp.src(iconsPath);
        }
    };

    const plugins = [
        "cleanupAttrs",
        "cleanupEnableBackground",
        "cleanupNumericValues",
        "collapseGroups",
        "convertColors",
        "convertEllipseToCircle",
        "convertPathData",
        "convertShapeToPath",
        "convertTransform",
        "inlineStyles",
        "mergePaths",
        "mergeStyles",
        "minifyStyles",
        "moveElemsAttrsToGroup",
        "moveGroupAttrsToElems",
        "removeComments",
        "removeDesc",
        "removeDimensions",
        "removeDoctype",
        "removeEditorsNSData",
        "removeEmptyAttrs",
        "removeEmptyContainers",
        "removeEmptyText",
        "removeHiddenElems",
        "removeMetadata",
        "removeNonInheritableGroupAttrs",
        "removeTitle",
        "removeUnknownsAndDefaults",
        "removeUnusedNS",
        "removeUselessDefs",
        "removeUselessStrokeAndFill",
        "removeViewBox",
        "removeXMLProcInst",
        "sortAttrs",
        "sortDefsChildren",
    ]; // to disable: .map(plugin => ({name: plugin, active: false}));

    return es.merge(getIcons(iconsPath), getIcons(iconsColorfulPath, IconMode.Colorful), getIcons(iconsStrokePath, IconMode.Stroke))
        // minify svg
        .pipe(svgmin({
            multipass: true,
            full: true,
            js2svg: {
                pretty: true,
                indent: 2,
            },
            plugins, // enable all
        }))
        // build svg sprite
        .pipe(svgSprite({
            mode: "symbols",
            preview: false,
            selector: "icon-%f",
            svg: {
                symbols: imageHolderTemplateName,
            },
        }))
        .pipe(gulp.dest(imageHolderFolder));
});
