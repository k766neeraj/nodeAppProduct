const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const Prod = require('../modal/item')

// get request to fetch all the products from database
router.get('/fetchProduct', async(req, res) => {
    try {
        const product = await Prod.find()
        res.status(200).json({product,message:'Item Fetched successfully'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Error')
    }
})

// post request for adding the item to the database
router.post('/addproduct', [
    body('title', 'Enter Title Name').isLength({ min: 4 }),
    body('price', 'Enter the Price of the Product').isLength({ min: 2 }),
    body('description', 'Enter the description of the Product').isLength({ min: 10 }),
    body('leftitem', 'Enter the Stock of the item').isLength({ min: 2 })
], async (req, res) => {
    try {
        const { title,price, description, leftitem } = req.body
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }
        const item = new Prod({
            title,price,description,leftitem
        }) 
        const saveitem = await item.save()
        res.status(200).json({saveitem,message:'Item Added successfully'})
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal Error')
    }
})

// put request to update the product item in the database
router.put('/updateproduct/:id',async(req,res)=>{
    try {
        const {title,price,description,leftitem} = req.body
        const updateitem = {}
        if(title) updateitem.title=title
        if(price) updateitem.price=price
        if(description) updateitem.description=description
        if(leftitem) updateitem.leftitem=leftitem
        let item = await Prod.findById(req.params.id)
        if(!item){
            res.status(400).send("Item not found")
        }
        item = await Prod.findByIdAndUpdate(req.params.id,{$set:updateitem},{new:true})
        res.status(200).json({item,message:'Item Updated successfully'})

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Error')
    }
})

// delete request to delete the item in the database
router.delete('/deleteproduct/:id',async(req,res)=>{
    try {
        let item = await Prod.findById(req.params.id)
        if(!item){
            return res.status(400).send('Item Not Found')
        }
        item = await Prod.findOneAndDelete(req.params.id)
        console.log('dsf',item)
        res.status(200).send({item,message:'Item Deleted successfully'})
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal Error')
    }
})


module.exports = router