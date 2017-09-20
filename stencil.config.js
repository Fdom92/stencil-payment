exports.config = {
  namespace: 'stpayment',
  generateDistribution: true,
  generateWWW: false,
  bundles: [
    { components: ['st-payment'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}