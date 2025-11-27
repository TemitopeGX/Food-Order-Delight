const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  orderDetails: [{
    item: String,
    quantity: Number
  }],
  status: {
    type: String,
    default: 'Placed'
  }
});

module.exports = mongoose.model('Order', OrderSchema);