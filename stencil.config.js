exports.config = {
  namespace: 'payment',
  generateDistribution: true,
  bundles: [
    { components: ['st-payment'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}