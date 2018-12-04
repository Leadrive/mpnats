const gulp = require('gulp')
const rollup = require('rollup')
const rollupConfig = require('./rollup.config')
const cp = require('cp-file')

const path = require('path')

gulp.task('rollup-wx', function () {
    const inputConfig = rollupConfig.getInputConfig('wx')
    const outputCoinfig = rollupConfig.getOutputConfig('wx')
    return rollup.rollup(inputConfig)
        .then(function (bundle) {
            bundle.write(outputCoinfig)
        })
        .then(() => {
            return cp(path.resolve(__dirname, './dist/wx-nats.js'), path.resolve(__dirname, './examples/mp-fragment/utils/', 'wx-nats.js'))
        })
})

gulp.task('default', ['rollup-wx'])