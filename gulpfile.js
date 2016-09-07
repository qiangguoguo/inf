/**
 * Created by beiwp on 2016/9/2.
 */
'use strict';

// npm install gulp gulp-imagemin  imagemin-pngquant gulp-htmlmin gulp-uglify --save-dev
var config = require('./config/config');
var gulp = require('gulp'),
    pngquant = require('imagemin-pngquant'),//深度压缩图片
    imagemin = require('gulp-imagemin'),//压缩图片
    htmlmin = require('gulp-htmlmin'),  //压缩html
    cssMin = require('gulp-clean-css'), // 压缩css
    concat = require('gulp-concat'),    //合并文件
    rev = require('gulp-rev-append'),   //文件Hash
    replace = require('gulp-replace'),  //替换
    uglify = require('gulp-uglify');    //压缩js文件

var devFlag = config.dev;
var buildPath = devFlag === 'development' ? './build/dev' : './build/dist';


/**
 * 处理bin
 */
gulp.task('bin', function () {
    gulp.src('bin/**')
        .pipe(uglify({
            mangle: false //类型：Boolean 默  认：true(修改) 是否修改变量名
        }))
        .pipe(gulp.dest(buildPath + '/bin'));
});

/**
 * 处理config
 */
gulp.task('config', function () {
    gulp.src('config/**')
        .pipe(uglify({
            mangle: false //类型：Boolean 默  认：true(修改) 是否修改变量名
        }))
        .pipe(gulp.dest(buildPath + '/config'));
});

/**
 * 处理controllers
 */
gulp.task('controllers', function () {
    gulp.src('controllers/*.js')
        .pipe(uglify({
            mangle: false //类型：Boolean 默  认：true(修改) 是否修改变量名
        }))
        .pipe(gulp.dest(buildPath + '/controllers'));
});

/**
 * 处理node-modules
 */
gulp.task('node', function () {
    gulp.src('node_modules/**')
        .pipe(gulp.dest(buildPath + '/node-modules'));
});

/**
 * 处理public components
 */
gulp.task('components', function () {
    gulp.src('public/components/*/dist/**.min.js')
        .pipe(uglify({
            mangle: false //类型：Boolean 默  认：true(修改) 是否修改变量名
        }))
        .pipe(gulp.dest(buildPath + '/public/components'));
});

gulp.task('controllers', function () {
    gulp.src('controllers/*.js')
        .pipe(uglify({
            mangle: false //类型：Boolean 默  认：true(修改) 是否修改变量名
        }))
        .pipe(gulp.dest(buildPath + '/controllers'));
});

/**
 * 处理routes
 */
gulp.task('routes', function () {
    gulp.src('routes/*.js')
        .pipe(uglify({
            mangle: false //类型：Boolean 默  认：true(修改) 是否修改变量名
        }))
        .pipe(gulp.dest(buildPath + '/routes'));
});

/**
 * 处理html
 */
gulp.task('template', function () {
    gulp.src('views/**.{ejs,html}')
        .pipe(replace('src="','src="../public/')) //rev() 要找对正确的根路径
        .pipe(rev())
        .pipe(replace('../public/',''))
        .pipe(htmlmin({
            collapseWhitespace: true,          //清除空格
            collapseBooleanAttributes: true,   //省略布尔属性的值
            removeComments: true,              //清除html中注释的部分
            removeEmptyAttributes: true,       //清除所有的空属性
            removeScriptTypeAttributes: true,  //清空script type属性
            removeStyleLinkTypeAttributes: true, //清楚所有Link标签上的type属性
            minifyJS: true,                      //压缩html中的javascript代码。
            minifyCSS: true                      //压缩html中的css代码。
        }))
        .pipe(gulp.dest(buildPath + '/views'));
});

/**
 * 处理图片
 */
gulp.task('images', function () {
    gulp.src('public/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest(buildPath + '/public/images'));
});


gulp.task('css', function () {
    gulp.src('public/stylesheets/**.css')
        .pipe(cssMin())
        .pipe(concat('inf.min.css'))
        .pipe(gulp.dest(buildPath + '/public/stylesheets'))
});

/*gulp.task('node', function () {
    //['node_modules/!**!/!*.less','!less/{extend,page}/!*.less']
    gulp.src(['node_modules/','node_modules/{!gulp-**,!imagemin-pngquant}'])
        .pipe(gulp.dest(buildPath + '/node_modules'))
});*/

/**
 * 默认任务
 */
gulp.task('default', ['bin', 'config', 'controllers', 'components', 'routes', 'template', 'images', 'css'], function () {
    gulp.src('./app.js')
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(buildPath));
    gulp.src('./package.json')
        .pipe(gulp.dest(buildPath));
});