/* eslint @typescript-eslint/no-var-requires: "off" */
import * as gulp from "gulp";
import { series } from "gulp";

const Assembler = require("assemble");
const assemble = Assembler();
/**
 *
 */
gulp.task("load-templates", () => {
  assemble.partials("src/views/partials/*.hbs");
  assemble.layouts("src/views/layouts/default.hbs");
  assemble.pages("src/views/pages/*.hbs");
  return assemble;
});

gulp.task("process-templates", () => {
  return assemble
    .toStream("pages")
    .pipe(assemble.renderFile())
    .pipe(assemble.dest("build"));
});

gulp.task("assemble", series(["load-templates", "process-templates"]));
