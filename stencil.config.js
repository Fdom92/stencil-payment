exports.config = {
  bundles: [
    { components: ['st-payment', 'demo-payment'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}