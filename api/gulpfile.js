const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('default', ['server']);

gulp.task('server', function() {
	nodemon({
		script: 'master.js',
		ext: 'js html',
		execMap: {
			js: 'node'
		}
	})
});