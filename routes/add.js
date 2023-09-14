const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', (req, resp) => {
    resp.render('add', {
        title: 'Add course',
        isAdd: true
    })
})

router.post('/', async (req, resp) => {
    const course = new Course(req.body.title, req.body.price, req.body.image)

    await course.save()

    resp.redirect('/courses')
})


module.exports = router