const ejs = require('ejs');
const catModel = require('../model/category');

module.exports = {

get : getCategories,
post: addCategories,
edit: editCategories,
del: deleteCategories

}

function getCategories(req, res){
    res.render('category');
}

function addCategories(req, res){
    console.log("POST");
    res.render('category', ()=>{
        const cat = req.body.category;
        console.log(cat);

        const categoryObject = new catModel();
        categoryObject.name = cat;
        categoryObject.save();
        res.redirect('/category');
    })

}

function editCategories(req, res){
    res.render('editcategory');
}

function deleteCategories(req, res){
    res.send("I am in the DELETE Category");
    console.log("DELETE");

}
