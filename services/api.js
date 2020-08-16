const ejs = require('ejs');
const catModel = require('../model/category');
const mongoose = require('mongoose');

module.exports = {
    getAPI : getData
}

function getData(req, res){
    catModel.find({}, (err, list)=>{
        if(err){
            res.send(err);
        } else {
            res.send(list);
        }
    })
}