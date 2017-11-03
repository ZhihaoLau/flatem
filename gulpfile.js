const gulp = require('gulp')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const mocha = require('gulp-mocha')
const gutil = require('gulp-util')

/**
 * Rollup's doc 
 * https://rollupjs.org/
 * https://github.com/rollup/rollup-plugin-babel/issues/42
 */ 
const inputOptions = {
    input: './src/index.js',
    plugins: [
        babel({
            babelrc: false,   // stops babel from using .babelrc files
            plugins: ['external-helpers'],
            presets: [
                ["env", {
                    "modules": false
                }]
            ],
            exclude: [
                'node_modules/**'
            ] 
        })
    ]
}
const outputOptions = {
    file: './dist/flatem.js',
    name: 'flatem',
    format: 'umd',
    sourcemap: true
}

/**
 * Gulp-mocha's doc
 * https://www.npmjs.com/package/gulp-mocha
 */
const mochaOptions = {
    require: 'babel-register',
    reporter: 'spec'
}


// build scripts
gulp.task('scripts', async function () {
    const bundle = await rollup.rollup(inputOptions)
    await bundle.write(outputOptions)
}) 


// unit tests
gulp.task('unit', function () {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha(mochaOptions))
        .once('error', () => {
            console.log('Unit test fail!')
            process.exit(1);
        })
})


gulp.task('watch', () => {
    gulp.watch('src/*', ['unit', 'scripts'])
})


gulp.task('default', ['unit', 'scripts'])
















