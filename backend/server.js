import express from 'express'
import env from 'dotenv'
import products from './data/products.js'
env.config()
const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT}`))
app.get('/',(req,res)=>{
    res.send("API Stareted....")
})
app.get('/api/products',(req,res)=>{
   
    res.json(products)
})
app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p)=> p._id === req.params.id )
    res.json(product)
})