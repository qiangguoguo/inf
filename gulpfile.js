/**
 * Created by beiwp on 2016/9/2.
 */
'use strict';

var config = require('./config/config');
var gulp = require('gulp'),
    uglify = require('gulp-uglify');    //压缩js文件

var devFlag = config.dev;
var buildPath = devFlag === 'development' ? './build/dev' : './build/dist';


/**
 * 处理bin
 */
gulp.task('bin', function () {
    gulp.src('./bin/*.js')
        .pipe(uglify({
            mangle: false //类型：Boolean 默  认：true(修改) 是否修改变量名
        }))
        .pipe(gulp.dest(buildPath + '/bin'));
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
 * 默认任务
 */
gulp.task('default', ['bin', 'controllers', 'routes']);