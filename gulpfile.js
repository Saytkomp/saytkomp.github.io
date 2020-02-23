var gulp = require('gulp'),
		gutil = require('gulp-util'),
ftp = require('vinyl-ftp');

	gulp.task('deploy', function() {
		var conn = ftp.create({
		host:      'wwwalenn.beget.tech',
		user:      'wwwalenn_sayt',
		password:  'jhlghjlfkdgh12nd32tdttytyn123hn',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
		'public/**',
		'public/.htaccess',
		];
		return gulp.src(globs, {buffer: false})
		.pipe(conn.dest(''));
	});