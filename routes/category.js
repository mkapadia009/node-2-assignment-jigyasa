const express = require('express');
const router = express.Router();

// Calling the Services

const getCategories = require('../services/categories').get;
const addCategories = require('../services/categories').post
const editCategories = require('../services/categories').edit;
const deleteCategories = require('../services/categories').del;
const getAPI = require('../services/api').getAPI;


// Routes

router.get('/category', getCategories) // Display all categories in the table

router.post('/category', addCategories) // A form will open on a different page to add categories

router.get('/category/edit', editCategories) // Rendering
router.put('/category/edit', editCategories) // A form will open to update categories

router.delete('/category/', deleteCategories) // A button to remove that category from the  database.

router.get('/api/category', getAPI) //Getting all the values from the db

module.exports = router;