/**
 * Created by Aparna Kavalgikar on 8/15/17.
 */

'use strict';

/* Using Express Framework build RESTful APIs */
/* Importing required dependencies */
const express = require('express');
const app = express();
const widgetdb = require('./widgetdb');
const uuid = require('uuid');
const bodyParser = require('body-parser');

/* Parses JSON request body */
app.use(bodyParser.json());

/* Getting value for given item id */
app.get('/item/:id', function (req, res) {

    /* Getting request parameters */
    var itemId = req.params.id;

    /* Validating request parameters */
    if ( itemId === undefined || itemId === null || itemId === "") {
        res.status(400).send("Item id is not specified as request parameter");
    }

    widgetdb.get(itemId).then(function (value) {
        res.json({value: value});

    }).catch(function (error) {
        res.status(404).json(error)

    })
});

/* Creating new object */
app.post('/item', function (req, res) {

    /* Generating new id for new item */
    var itemId = uuid.v1();

    var value = req.body.value;

    if ( value === undefined || value === null || value === "") {
        res.status(400).send("Value is not specified, Expected body: { \"value\": \"abc\"}");
    }

    widgetdb.post(itemId, value).then(function (value) {
        res.json({ id: itemId });

    }).catch(function (error) {
        res.status(404).json(error)
    })
});

/* Updating existing item */
app.put('/item/:id', function (req, res, next) {

    var itemId = req.params.id;
    var value = req.body.value;

    if ( itemId === undefined || itemId === null || itemId === "") {
        res.status(400).send("Item id is not specified as request parameter");
    }

    if ( value === undefined || value === null || value === "") {
        res.status(400).send("Value is not specified, Expected body: { \"value\": \"abc\"}");
    }

    widgetdb.put(itemId, value).then(function (value) {
        res.json({ id: itemId});

    }).catch(function (error) {
        res.status(404).json(error)

    })

});

/* Listening on port 3001 */
app.listen(3001);
console.log('Listening on port 3001...');
