const express = require('express');
var mongoose = require('mongoose');
var mail = require('./mail');
var queriesModel = require('./model/query');
var adminModel = require('./model/admin');
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

    app.post('/login', function(req, res) {
        var {email, password} = req.body;
        mongoose.connect(db.connection_string, db.options).then(function(con) {
            adminModel.find({email: email, password: password}, function(err, arrOfItems) {
                if(err) {
                    console.error(err);
                    res.send(500);
                    con.disconnect();
                }
                if(arrOfItems.length > 0) {
                    res.cookie('email' , email, { maxAge: 1 * 60 * 60 * 1000});
                    res.redirect('/');
                    con.disconnect();
                }
                else {
                    res.redirect('/');
                    con.disconnect();
                }
            })
        })
        .catch(function(err) {
            console.error(err);
            res.send(500);
        })
    });

    app.get('/queries/all', function(req, res) {
        mongoose.connect(db.connection_string, db.options).then(function(con) {
            queriesModel.find({}, function(err, arrOfItems) {
                if(err) {
                    console.error(err);
                    res.send(500);
                    con.disconnect();
                }
                res.send(arrOfItems);
                con.disconnect();
            }) 
        })
        .catch(function(err) {
            console.error(err);
            res.send(500);
        })
    });

    app.post('/email', function(req, res) {
        var message= req.body.message;
        var email = req.body.email;
        mail(email, 'Regarding your Appointment/Queries', message).then(function(info){
            console.info(`Email sent ${info.response}`);
            res.send({message: 'Email sent to the mail id. Please check.'});
        })
        .catch(function(err) {
            console.log(err);
            res.send(500);
        });
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });

    app.listen(port, 
        function() {
            console.info('MediLab listening on port ' + port +'!');
    });
}

module.exports = startServer;