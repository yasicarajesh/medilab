const express = require('express');
var mongoose = require('mongoose');
var queriesModel = require('./model/query');
var db = require('../config/database');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();

function startServer() {    
    var port = process.env.PORT || 8081;

    app.use(function(req, res, next) {
        console.info(req.path + ' ' + new Date());
        next();
    });

    app.use('/', express.static(path.join(__dirname, '../build')));
    app.use(bodyParser({limit: '50mb'}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../buildindex.html'));
    });

    app.post('/query', function(req, res) {
        var {name, email, subject, message} = req.body;
        mongoose.connect(db.connection_string, db.options).then(function(con) {
            var query = new queriesModel();
            query.name = name;
            query.email = email;
            query.subject = subject;
            query.message = message;
            query.save(function(err, saveObj) {
                if(err) {
                    console.error(err);
                    res.send(500);
                    con.disconnect();
                }
                res.redirect('/');
                con.disconnect();
            });
        })
        .catch(function(err) {
            console.error(err);
            res.send(500);
        });
    });

    app.listen(port, 
        function() {
            console.info('MediLab listening on port ' + port +'!');
    });
}

module.exports = startServer;