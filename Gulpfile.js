const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const svgSprite = require("gulp-svg-sprites");
const svgmin = require("gulp-svgmin");

gulp.task("build-svgs", function () {
    const imageHolderFolder = "src/app/components/lib/icon/icon-holder";
    const imageHolderTemplateName = "icon-holder.component.html";
    const iconsPath = "src/assets/images/icons/*.svg";

    function updateIconsList() {
        const directoryPath = "src/assets/images/icons";
        const iconsListPath = "src/app/components/lib/icon/icons.list.ts";

        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                console.error("Icons list doesn't updated.")
                return;
            }

            const svgExtension = ".svg";
            const codeSvgNamesList = "export const etsIconList = [" +
                files.filter(file => path.extname(file) === svgExtension).map(file => `"${file.replace(svgExtension, "")}"`).join(", ") +
                "] as const;";

            fs.writeFile(iconsListPath, codeSvgNamesList, function (err) {
                if (err) {
                    console.error("Icons list doesn't updated.")
                    return;
                }
                console.log(`Icons list array was updated in "${iconsListPath}"`);
            });
        });
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

    // NOTE: "cheerio" allows remove fill/style attrs, in this case we should use also "replace('&gt;', '>')" (it's a cheerio bug)
    return gulp.src(iconsPath)
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
