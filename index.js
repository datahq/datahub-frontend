'use strict'

const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const config = require('./config')
const routes = require('./routes')

module.exports.makeApp = function () {
  const app = express()

  app.set('config', config)
  app.set('port', config.get('app:port'))
  app.set('views', path.join(__dirname, '/views'))

  // Middlewares
  app.use('/static', express.static(path.join(__dirname, '/public')))
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  app.use(cookieParser())

  // Check if looged in and set locals for nunjucks
  app.use((req, res, next) => {
    if (req.cookies.jwt) {
      res.locals.login = true
    } else {
      res.locals.login = false
    }
    next()
  })

  // Controllers
  app.use([
    routes()
  ])

  app.use((err, req, res) => {
    console.error(err.stack)
    res.status(500).send('Something failed. Please, try again later.')
  })

	// eslint-disable-next-line no-unused-vars
  const env = nunjucks.configure(app.get('views'), {
    autoescape: true,
    express: app
  })

  return app
}

module.exports.start = function () {
	// eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    const app = module.exports.makeApp()

    let server = app.listen(app.get('port'), () => {
      console.log('Listening on :' + app.get('port'))
      resolve(server)
    })
    app.shutdown = function () {
      server.close()
      server = null
    }
  })
}

module.exports.start()
