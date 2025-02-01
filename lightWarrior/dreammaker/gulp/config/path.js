// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/assets/js/`,
        css: `${buildFolder}/assets/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/assets/img/`,
        fonts: `${buildFolder}/assets/fonts/`,
        files: `${buildFolder}/assets/files/`,
    },
    src: {
        js: `${srcFolder}/assets/js/app.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/assets/img/**/*.svg`,
        less: `${srcFolder}/assets/less/style.less`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/assets/files/**/*.*`,
        svgicons: `${srcFolder}/assets/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/assets/js/**/*.js`,
        less: `${srcFolder}/assets/less/**/*.less`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/assets/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`
}