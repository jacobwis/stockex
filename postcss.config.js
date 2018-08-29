module.exports = {
  plugins: [
    require('autoprefixer'),
    require('./postprocessor')({
      hoverSelectorPrefix: '.true-hover'
    })
    // require('mq4-hover-shim').postprocessorFor({
    //   hoverSelectorPrefix: '.true-hover '
    // })
  ]
};
