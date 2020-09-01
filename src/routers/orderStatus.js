const express = require('express')
const router = express.Router()
const {
  createOrderStatus,
  getOrderStatuses,
  getOrderStatus,
  updateOrderStatus,
  deleteOrderStatus
} = require('../controller/orderStatus')

// Create order status
router.post('/:storeHash/order_status', (req, res) => createOrderStatus(req, res))
// Get order statuss
router.get('/:storeHash/order_status', (req, res) => getOrderStatuses(req, res))
// Get order status
router.get('/:storeHash/order_status/:orderStatusId', (req, res) => getOrderStatus(req, res))
// Update order status
router.put('/:storeHash/order_status/:orderStatusId', (req, res) => updateOrderStatus(req, res))
// Delete order status
router.delete('/:storeHash/order_status/:orderStatusId', (req, res) => deleteOrderStatus(req, res))

module.exports = router
