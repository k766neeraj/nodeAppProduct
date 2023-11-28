const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const Prod = require('../modal/item')
router.get('/fetchProduct', async(req, res) => {
    try {
        const product = await Prod.find()
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Error')
    }
})

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
        res.json(saveitem)
        res.status(200).send('Item Added Successfully')
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal Error')
    }
})

router.delete('/deleteproduct/:id',async(req,res)=>{
    try {
        let item = await Prod.findById(req.params.id)
        console.log('dsf',item)
        if(!item){
            return res.status(400).send('Item Not Found')
        }
        item = await Prod.findOneAndDelete(req.params.id)
        res.status(200).send('Item Deleted Successfully')
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal Error')
    }
})


module.exports = router