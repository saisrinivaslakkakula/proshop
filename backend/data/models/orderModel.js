import mongoose from  'mongoose'

const orderSchema = mongoose.Schema({
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            reference:'User'
        },

        orderItems:[
            {
                name:{type:String,required:true},
                qty:{type:Number,required:true},
                image:{type:String,required:true},
                napriceme:{type:Number,required:true},
                product:{
                    type:mongoose.Schema.Types.ObjectId,
                    required:true,
                    ref:'Product'
                },
                
            }
        ],
        
        shippingAddress:{
            address:{type:String,equired:true},
            city:{type:String,equired:true},
            postalCode:{type:String,equired:true},
            country:{type:String,equired:true}
            
        },
        paymentMethod:{
            type:String,
            required:true
        },
        paymentResult:{
            id:{type:String},
            status:{type: String},
            update_time:{type: String},
            email_address:{type: String},

        },
        
        taxPrice:{
            type:Number,
            required:true,
            default:0.0
        },
        shippingPrice:{
            type:Number,
            required:true,
            default:0
        },
        totalPrice:{
            type:Number,
            required:true,
            default:0
        },
        countInStock:{
            type:Number,
            required:true,
            default:0
        },
       isPaid:{
           type : Boolean,
           required: true,
           default:false
       },
       paidAt:{type:Date},
       isDelivered:{
        type : Boolean,
        required: true,
        default:false
    },
    deliveredAt:{type:Date},

    },{timestamps:true})
    const Order = mongoose.model('orderSchema',userSchema) 
    export default Order
