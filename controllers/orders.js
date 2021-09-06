
const Order = require('../models/Order');



const getOrders = async (req,res)=> {
  
try{

  const orders = await Order.find();
 res.send({
   success:true,
   data:orders,
   msg: 'show all orders'
 })

}catch(err){
  console.log(err)

}

  
}

const getOrder =async (req,res)=> {

 
  try{

    const {id} = req.params;
    const orders = await Order.findById(id);
   res.send({
     success:true,
     data:orders,
     msg: 'show order with id'
   })
  
  }catch(err){
    console.log(err)
  
  }
}
const createOrder = async (req, res) => {
  try {
    const { price, userId,items } = req.body;
    const order = await Order.create({ price, userId,items });

    res.json({
      msg: `user with id ${order.id}`,
      success: true,
      data: order
    })
  } catch(err) {
    console.log(err)
  }
}






const deleteOrder =  async (req, res) => {

  try{

    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

  res.json({ msg: `user with id ${user.id}`,
  success: true,
  data: order});
  }catch(err){
    console.log(err)
  } 
}





const updateOrder = async (req, res) => {
  try {
  const { id } = req.params;
   const { price, userId, items } = req.body;

  const order = await Order.findByIdAndUpdate(id,
     {price,userId,items},
     {new:true})
     
  res.json({
    msg: `update user with id ${id}`,
    success: true,
  data: order

   });

}
catch(err){
  console.log(err);
}

  
}

















module.exports={
  getOrder,
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder,
  // getUserOrder
}