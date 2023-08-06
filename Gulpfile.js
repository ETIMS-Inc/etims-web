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
            const codeSvgNamesList = "export const etsIconList: string[] = [" +
                files.filter(file => path.extname(file) === svgExtension).map(file => `"${file.replace(svgExtension, "")}"`).join(", ") +
                "];";

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

    // NOTE: "cheerio" allows remove fill/style attrs, in this case we should use also "replace('&gt;', '>')" (it's a cheerio bug)
    return gulp.src(iconsPath)
        // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true,
            },
        }))
        // build svg sprite
        .pipe(svgSprite({
            mode: "symbols", preview: false, selector: "icon-%f", svg: {
                symbols: imageHolderTemplateName,
            },
        }))
        .pipe(gulp.dest(imageHolderFolder));
});

gulp.task("get-file-names", function (done) {
    const directoryPath = "src/assets/images/icons";
    const iconsListPath = "src/app/components/lib/icon/icons.list.ts";

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return done(err);
        }

        const svgExtension = ".svg";
        const codeSvgNamesList = "export const etsIconList = [" +
            files.filter(file => path.extname(file) === svgExtension).map(file => `"${file.replace(svgExtension, "")}"`).join(", ") +
            "];";

        fs.writeFile(iconsListPath, codeSvgNamesList, function (err) {
            if (err) {
                console.error("Icons list doesn't updated.")
                return done(err);
            }
            console.log(`Icons list array was updated in "${iconsListPath}"`);
            done();
        });
    });
});
