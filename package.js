Package.describe({
    summary: "A reactive blaze component for rendering live jQuery Sparklines.",
    version: '1.1.0',
    git: 'https://github.com/benmgreene/meteor-jquery-sparklines',
    name: "phrjca:jquery-sparklines"

});

Package.on_use(function (api) {
  api.use([
    'coffeescript'
  ],['client', 'server']);

  // for helpers
  api.use([
    'jquery',
    'ui',
    'templating',
    'spacebars'
  ], 'client');

  api.add_files([
    'vendor/jquery.sparklines.js',
    'lib/sparklines.html',
    'lib/sparklines.coffee'
  ], [ 'client' ]);
});

Package.on_test(function (api) {
  api.use([
    'coffeescript',
    'benmgreene:jquery-sparklines',
    'tinytest',
    'test-helpers'
  ], ['client', 'server']);

  api.add_files([
    'tests/sparklines.tests.coffee'
  ], ['client', 'server']);
});