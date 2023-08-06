const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const svgSprite = require("gulp-svg-sprites");
const svgmin = require("gulp-svgmin");
const cheerio = require("gulp-cheerio");
const replace = require("gulp-replace");
const gulpUtil = require('gulp-util');

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
        // remove redundant(for us) prop
        .pipe(cheerio({
            run: function ($) {
                if (gulpUtil.env.colorless) {
                    $('[fill]').removeAttr('fill');
                    $('[style]').removeAttr('style');
                }
            },
            parserOptions: { xmlMode: true }
        }))
        // cheerio plugin create unnecessary string '>', so replace it.
        .pipe(replace('&gt;', '>'))
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
