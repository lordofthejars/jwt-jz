var bespoke = require('bespoke'),
  nebula = require('bespoke-theme-nebula'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  backdrop = require('bespoke-backdrop'),
  overview = require('bespoke-overview'),
  hash = require('bespoke-hash');

bespoke.from('article', [
  nebula(),
  keys(),
  overview(),
  touch(),
  bullets('ul:not(.no-bullets) li, ol:not(.no-bullets) li, .bullet'),
  scale(),
  backdrop(),
  hash()
]);

require('prism');
require('prism-clojure/prism.clojure.js');
