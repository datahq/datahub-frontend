'use strict'

const nconf = require('nconf')
require('dotenv').config()

nconf.argv()
  .env()

// This is the object that you want to override in your own local config
nconf.defaults({
  env: process.env.NODE_ENV || 'development',
  debug: process.env.DEBUG || false,
  app: {
    port: process.env.PORT || 4000
  },
  API_URL: process.env.API_URL || 'http://0.0.0.0:4000',
  SITE_URL: process.env.SITE_URL || 'http://0.0.0.0:4000',
  BITSTORE_URL: process.env.BITSTORE_URL || 'http://0.0.0.0:4000/static/fixtures/',
  showcasePackages: [
    {owner: 'core', name: 's-and-p-500-companies'},
    {owner: 'core', name: 'house-prices-us'},
    {owner: 'core', name: 'gold-prices'}
  ],
  tutorialPackages: [
    {owner: 'examples', name: 'simple-graph-spec'},
    {owner: 'examples', name: 'vega-views-tutorial-lines'},
    {owner: 'examples', name: 'geojson-tutorial'}
  ]
})

module.exports = {
  get: nconf.get.bind(nconf),
  set: nconf.set.bind(nconf),
  reset: nconf.reset.bind(nconf)
}
