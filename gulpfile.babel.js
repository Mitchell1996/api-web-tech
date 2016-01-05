import gulp from 'gulp';
import shell from 'gulp-shell';
import babel from 'gulp-babel';

gulp.task('default', ['watch']);

gulp.task('babel', () => {
    return gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['babel']);
});
