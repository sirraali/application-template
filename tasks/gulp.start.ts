import gulp from "gulp";
import { series } from "gulp";
import nodemon from "gulp-nodemon";

gulp.task("watch", ()=> {
    return nodemon({ script: "src/index.ts" });
})

gulp.task("start", series("build", "watch"));