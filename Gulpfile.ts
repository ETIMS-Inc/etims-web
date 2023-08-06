const gulp = require("gulp");
const cheerio = require("gulp-cheerio");
const es = require("event-stream");
const fs = require("fs");
const path = require("path");
const replace = require("gulp-replace");
const svgSprite = require("gulp-svg-sprites");
const svgmin = require("gulp-svgmin");

type FileError = NodeJS.ErrnoException | null;

gulp.task("build-svgs", () => {
    const imageHolderFolder = "src/app/components/lib/icon/icon-holder";
    const imageHolderTemplateName = "icon-holder.component.html";
    const iconsPath = "src/assets/images/icons/*.svg";
    const iconsColorfulPath = "src/assets/images/icons/colorful/*.svg";

    function updateIconsList() {
        const dirIconsPath = "src/assets/images/icons";
        const dirIconsColorfulPath = "src/assets/images/icons/colorful";
        const iconsListPath = "src/app/components/lib/icon/icons.list.ts";

        const error = () => console.error("Icons list doesn't updated.")

        const writeSvgNamesList = (svgNames: string[]) => {
            const svgExtension = ".svg";
            const codeSvgNamesList = "export const etsIconList = [" +
                svgNames.filter(file => path.extname(file) === svgExtension).map(file => `"${file.replace(svgExtension, "")}"`).join(", ") +
                "] as const;";

            fs.writeFile(iconsListPath, codeSvgNamesList, (err: FileError) =>
                err ? error() : console.log(`Icons list array was updated in "${iconsListPath}"`));
        }

        fs.readdir(dirIconsPath, (err: FileError, iconsFiles: string[]) =>
            fs.readdir(dirIconsColorfulPath, (errCol: FileError, iconsColorfulFiles: string[]) =>
                err || errCol ? error() : writeSvgNamesList([
                    ...iconsFiles,
                    ...iconsColorfulFiles,
                ]),
            ));
    }

    const getIcons = (iconsPath: string, removeColors: boolean = false): NodeJS.ReadWriteStream => {
        if (removeColors) {
            // remove redundant "fill", "style" props
            return gulp.src(iconsPath)
                .pipe(cheerio({
                    run: function ($: any) {
                        $("[fill]").removeAttr("fill");
                        $("[style]").removeAttr("style");
                    },
                    parserOptions: {xmlMode: true},
                }))
        }
        return gulp.src(iconsPath);
    }

    updateIconsList();

    const disabledPlugins = [
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

    return es.merge(getIcons(iconsPath, true), getIcons(iconsColorfulPath))
        // minify svg
        .pipe(svgmin({
            multipass: true,
            full: true,
            js2svg: {
                pretty: true,
                indent: 2,
            },
            plugins: [
                ...disabledPlugins,
            ],
        }))
        // cheerio plugin create unnecessary string '>', so replace it.
        .pipe(replace("&gt;", ">"))
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
