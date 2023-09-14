const {Router} = require('express')
const router = Router()
const Cart = require('../models/cart')
const Course = require('../models/course')

router.post('/add', async (req, resp) => {
    const course = await Course.getById(req.body.id)
    await Cart.add(course)
    resp.redirect('/cart')
})

router.get('/', async (req, resp) => {
    const cart = await Cart.fetch()
    resp.render('cart', {
        title: 'Cart',
        isCart: true,
        courses: cart.courses,
        price: cart.price
    })
})

router.delete('/remove/:id', async (req, resp) => {
    const cart = await Cart.delete(req.params.id)

    resp.status(200).json(cart)
})

module.exports = router