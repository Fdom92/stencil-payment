exports.config = {
  namespace: 'payment',
  bundles: [
    { components: ['wc-payment'] }
  ],
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ]
};