/* eslint-disable @typescript-eslint/no-var-requires */
import gulp, { Gulp } from "gulp";
import { series, parallel } from "gulp";

const assembler = require("assemble");
const extname = require("gulp-extname");
const inject = require("gulp-inject");
const less = require("gulp-less");
const sourcemaps = require("gulp-sourcemaps");
const assemble = assembler();
const ts = require("gulp-typescript");
const prefix = require("gulp-autoprefixer");

const del = require("del");
const jsdoc = require("gulp-jsdoc3");

gulp.task("compile-ts", function () {
  return gulp.src("src/scripts/*.ts")
             .pipe(ts({noImplicitAny: true}))
             .pipe(sourcemaps.init())
             .pipe(gulp.dest("build/js"));
});

gulp.task("compile-css", function () {
  return gulp
    .src("src/styles/**/*.less")
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(prefix())
    .pipe(gulp.dest("build/css"));
});
/**
 *
 */
gulp.task("assemble", function () {
  assemble.partials("src/views/partials/*.hbs");
  assemble.layouts("src/views/layouts/default.hbs");
  assemble.pages("src/views/pages/*.hbs");

  const stylesheets = gulp.src(["./build/css/*.css"], { read: false });

  return (
    assemble
      .toStream("pages")
      .pipe(assemble.renderFile())
      //.pipe(htmlmin(htmlMinifierOptions))
      .pipe(extname())
      .pipe(
        inject(stylesheets, {
          relative: false,
          addRootSlash: false,
          ignorePath: ["build"],
        })
      )
      //.pipe(gulpDebug())
      .pipe(gulp.dest("build"))
  );
});

gulp.task("clean", () => {
  return del(["build"]);
});
gulp.task("build", series(parallel("compile-ts", "compile-css"), "assemble"));
gulp.task("default", series("clean","build"));
