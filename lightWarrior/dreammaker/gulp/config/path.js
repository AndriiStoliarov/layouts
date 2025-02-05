// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const buildAssetsFolder = `./dist/assets`;
const srcFolder = `./src`;
const srcAssetsFolder = `./src/assets`;

export const path = {
    build: {
        js: `${buildFolder}/assets/js/`,
        css: `${buildAssetsFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildAssetsFolder}/images/`,
        fonts: `${buildAssetsFolder}/fonts/`,
        files: `${buildAssetsFolder}/files/`,
    },
    src: {
        js: `${srcAssetsFolder}/js/app.js`,
        images: `${srcAssetsFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcAssetsFolder}/images/**/*.svg`,
        less: `${srcAssetsFolder}/less/style.less`,
        html: `${srcFolder}/*.html`,
        tpl: `${srcFolder}/tpl`,
        files: `${srcAssetsFolder}/files/**/*.*`,
        svgicons: `${srcAssetsFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcAssetsFolder}/js/**/*.js`,
        less: `${srcAssetsFolder}/less/**/*.less`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcAssetsFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcAssetsFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`
}