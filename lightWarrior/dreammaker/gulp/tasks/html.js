import panini from "panini";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
    panini.refresh();
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(panini({
            root: app.path.src.html,
            layouts: `${app.path.src.tpl}/layouts/`,
            partials: `${app.path.src.tpl}/partials/`,
            helpers: `${app.path.src.tpl}/helpers/`,
            data: `${app.path.src.tpl}/data/`
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
        .pipe(app.plugins.if(app.isBuild, versionNumber({
            'value': '%DT%',
            'append': {
                'key': '_v',
                'cover': 0,
                'to': [
                    'css',
                    'js',
                ]
            },
            'output': {
                'file': 'gulp/version.json'
            }
        })))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}