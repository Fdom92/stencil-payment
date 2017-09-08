exports.config = {
  generateCollection: true,
  bundles: [
    { components: ['st-payment'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
