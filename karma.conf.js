module.exports = function(config) {
  config.set({
    frameworks: ['browserify', 'jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*_spec.js'
    ], 
    preprocessors: {
      'test/**/*.js': ['jshint', 'browserify'],
      'src/**/*.js': ['jshint', 'browserify']
    },
    browsers: ['PhantomJS', 'Chrome'/*'PhantomJS', 'Chrome', 'Chrome_without_security', 'Firefox', 'FirefoxDeveloper', 'FirefoxAurora', 'FirefoxNightly', 'IE'*/],
    // you can define custom flags 
    //customLaunchers: {
    //  Chrome_without_security: {
    //    base: 'Chrome',
    //    flags: ['--disable-web-security']
    //  }.
    //IE9: {
    //  base: 'IE',
    //  'x-ua-compatible': 'IE=EmulateIE9'
    //},
    //IE8: {
    //  base: 'IE',
    //  'x-ua-compatible': 'IE=EmulateIE8'
    //}
    //},
    browserify: {
      debug: true,
      //bundleDelay: 2000
    }
  })
}