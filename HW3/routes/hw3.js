"use strict";

var express = require('express');
var router = express.Router();

var ForecastIO = require('forecast-io');
var forecast = new ForecastIO('API-KEY');

/**
 * GET /forecast
 */
router.get('/', function(req, res, next) {

   forecast
    .latitude('42.3601')
    .longitude('71.0589') //for Boston
    .get()
    .then(function(forecast) {
        console.log(forecast);
        res.send(forecast);
    })
    .catch(function(err)  {
        console.log(err);
        res.send(err);
    });
});

module.exports = router;
