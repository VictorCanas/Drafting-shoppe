'use strict';

var express = require('express');
var app = express();
var helmet = require('helmet');
var responseTime = require('response-time');
var path = require('path');
var cookieParser = require('cookie-parser');
var winston = require('winston');
var settings = require('../../../config/server');
var logger = require('./logger').default;
var robotsRendering = require('./robotsRendering').default;
var sitemapRendering = require('./sitemapRendering').default;
var redirects = require('./redirects').default;
var pageRendering = require('./pageRendering').default;

var ADMIN_INDEX_PATH = path.resolve('public/admin/index.html');
var STATIC_OPTIONS = {
  maxAge: 31536000000 // One year
};

app.set('trust proxy', 1);
app.use(helmet());
app.get('/images/:entity/:id/:size/:filename', function (req, res, next) {
  // A stub of image resizing (can be done with Nginx)
  var newUrl = '/images/' + req.params.entity + '/' + req.params.id + '/' + req.params.filename;
  req.url = newUrl;
  next();
});
app.use(express.static('public/content', STATIC_OPTIONS));
app.use('/assets', express.static('theme/assets', STATIC_OPTIONS));
app.use('/admin-assets', express.static('public/admin-assets', STATIC_OPTIONS));
app.use('/sw.js', express.static('public/sw.js', STATIC_OPTIONS));
app.use('/sw-toolbox.js', express.static('public/sw-toolbox.js', STATIC_OPTIONS));
app.use('/admin', function (req, res) {
  res.sendFile(ADMIN_INDEX_PATH);
});
app.get(/^.+\.(jpg|jpeg|gif|png|bmp|ico|webp|svg|css|js|zip|rar|flv|swf|xls)$/, function (req, res) {
  res.status(404).end();
});
app.get('/robots.txt', robotsRendering);
app.get('/sitemap.xml', sitemapRendering);
app.get('*', redirects);
app.use(responseTime());
app.use(cookieParser(settings.cookieSecretKey));
app.get('*', pageRendering);

var server = app.listen(settings.storeListenPort, function () {
  var serverAddress = server.address();
  winston.info('Store running at http://localhost');
});