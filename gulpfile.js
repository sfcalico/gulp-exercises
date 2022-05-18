const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
    return gulp.src('./style.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(gulp.dest('build'))
});

gulp.task('watch', () => {
    gulp.watch('./style.css', gulp.series('styles'));
});