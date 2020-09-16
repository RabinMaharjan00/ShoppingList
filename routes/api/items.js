const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item')

//@routes GET/api/items
//@desc  List An Item
//access Public
router.get('/', (req, res) => {
    Item.find()
    .then(items => res.json(items))
})

//@routes Post/api/items
//@desc  create An Item
//access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
    .then(item => res.json(item));
    // Item.find()
    // .then(items => res.json(items))
})


//@routes Delete /api/items
//@desc  Delete an item
//access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
    // Item.find()
    // .then(items => res.json(items))
})
module.exports =  router;