# Software Build
A process of converting source code into an artifact that is usable (usually single unit or coordinating component of a unit piece of software).

    It is a process of creating application binaries/artefacts for software release, by processing, pre-processing  all source files and generating a deployable version thus creating a build artefact.

Building a software is a tedious and labroiously complex process, involving ;
- Version Control
- Code Quality
- Compilation
- Packaging

## Build automation 
is the process of automating the creation of a software build and the associated processes including: 

 - Compiling (Source code).
 - Packaging (Binary code).
 - Testing (Automated).

## Build Tools (a.k.a Task Runners)
is a utility that coordinates and controls other programs i.e (compiler, linker, packager etc), it helps perform common tasks repeatedly in a scripted and autonomous fashion, examples are;
- [Make &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://www.gnu.org/graphics/heckert_gnu.transp.small.png" width=15 height=15>](https://www.gnu.org/software/make/)
- [Gulp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp.png" width=10 height=20>](https://gulpjs.com/)
- [Grunt &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://camo.githubusercontent.com/2bcb3bd09e6bd9b04773d1e1d5e7ef052a697ee9babe022d8859e3c817aaa6d3/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667" width=15 height=20>](https://gruntjs.com/)

- [Broccoli <img src="https://github.com/broccolijs/broccoli/raw/master/logo/broccoli-logo.generated.png" width=15 height=20>](https://github.com/broccolijs/broccoli)

All build tools manages build with a some form of task system, allowing developers source code maintainers to define exactly how the source code should be build. 

#### Building
Build tools provide abstract wrappers over undelying native/platform dependent tools.
####Bundling
Bundler is designed to link pieces of source code ia logically related/linked fashion, identifying dependencies across code units/files.

