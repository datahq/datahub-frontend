'use strict';

var assert = require('assert')

var config = require('../config')
var lib = require('../lib/')
var mocks = require('./fixtures')

mocks.initMocks()

describe('Lib', () => {
  const api = new lib.DataHubApi(config)

  it('Gets datapackage.json', async () => {
    let dpjson = await api.getPackage('admin', 'demo-package')
    assert.equal(dpjson.name, 'demo-package')
    assert.equal(dpjson.resources.length, 1)
  })

  it('Gets README', async () => {
    let readme = await api.getPackageFile('admin', 'demo-package', 'README.md')
    assert.equal(readme.slice(0,27), 'This README and datapackage')
  })

  it('Authenticate function returns urls for login - GitHub and Google', async () => {
    const res = await api.authenticate() // Without jwt so we get urls for login
    assert.equal(res.authenticated, false)
    assert(res.providers.github)
    assert(res.providers.google)
  })

  it('Authenticates with GitHub using given jwt and returns user info', async () => {
    const jwt = '1a2b3c'
    const res = await api.authenticate(jwt)
    assert.equal(res.authenticated, true)
    assert.equal(res.profile.email, 'test_username_but_not_email')
    assert.equal(res.profile.name, 'Firstname Secondname')
  })

  it('Authenticates with GOOGLE using given jwt and returns user info', async () => {
    const jwt = '1a2b3c4d'
    const res = await api.authenticate(jwt)
    assert.equal(res.authenticated, true)
    assert.equal(res.profile.email, 'actual_email@gmail.com')
    assert.equal(res.profile.name, 'Firstname Secondname')
  })
})
