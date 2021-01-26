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
router.post('/order_status', (req, res) => createOrderStatus(req, res))
// Get order statuss
router.get('/order_status', (req, res) => getOrderStatuses(req, res))
// Get order status
router.get('/order_status/:orderStatusId', (req, res) => getOrderStatus(req, res))
// Update order status
router.put('/order_status/:orderStatusId', (req, res) => updateOrderStatus(req, res))
// Delete order status
router.delete('/order_status/:orderStatusId', (req, res) => deleteOrderStatus(req, res))

module.exports = router
