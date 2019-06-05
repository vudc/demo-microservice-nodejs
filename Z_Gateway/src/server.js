var express = require('express')
var HttpsProxyAgent = require('https-proxy-agent');
var proxy = require('http-proxy-middleware')
var proxyServer = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
var app = express()

app.use(proxy('/movie', { target: 'http://127.0.0.1:3004', changeOrigin: true, secure: false }))
app.use(proxy('/catalog', { target: 'http://localhost:3003', changeOrigin: true, secure: false }))
app.use(proxy('/booking', { target: 'http://localhost:3001', changeOrigin: true, secure: false }))
app.use(proxy('/notification', { target: 'http://localhost:3002', changeOrigin: true, secure: false }))
app.listen(8080)