import express from 'express'
import env from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/productroutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
env.config()
connectDB();
const app = express()
const PORT = process.env.PORT || 5000


app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT}`))
app.use('/api/products',router)
app.get('/',(req,res)=>{
    res.send("API Stareted....")
})
app.use(notFound) 
app.use(errorHandler) 



