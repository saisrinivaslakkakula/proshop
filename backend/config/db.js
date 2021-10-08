const mongoose =  require('mongoose')

const connectDB = async () =>{
    try { 
        // mongoose connect always returns a promise// hence await is required
        const con = await mongoose.connect(process.env.MONGO_DB_URI,
            {useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true}
            )
       console.log(`Connected to DB ${con.connection.host}`) 
    } catch (error) {
        console.log(`Connection Failed! ${error}`) 
        process.exit(1)
    }
}

module.exports = connectDB;