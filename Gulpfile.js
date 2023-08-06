const gulp = require("gulp");
const svgmin = require("gulp-svgmin");
const svgSprite = require("gulp-svg-sprites");

gulp.task("build-svgs", function () {
    const imageHolderFolder = "src/app/components/lib/icon/icon-holder";
    const imageHolderTemplateName = "icon-holder.component.html";
    const iconsPath = "src/assets/images/icons/*.svg";

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
