const mongoose = require('mongoose');

const {Schema} = mongoose;

const OrderSchema = new Schema({
    price:{
        type: Number,
        required:[true, 'please add price'],
        maxlength: 32
    },
    userId:{
        type: Object,
        required:[true, 'please add user_id'],
       
    },
   
    items:[{
        type:Array,
        max:150

    }]
})


module.exports = mongoose.model('Order', OrderSchema)