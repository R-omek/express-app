const {Router} = require('express')
const Course = require('../models/course')

const router = Router()

router.get('/', async (req, resp) => {
    const courses = await Course.getAll()
    resp.render('courses', {
        title: 'Courses',
        isCourses: true,
        courses
    })
})

router.get('/:id/edit', async (req, resp) => {
    if (!req.query.allow) {
        return resp.redirect('/')
    }

    const course = await Course.getById(req.params.id)

    resp.render('course-edit', {
        title: `Edit ${course.title}`,
        course
    })
})

router.post('/edit', async (req, resp) => {
    
    await Course.update(req.body)

    resp.redirect('/courses')
})

router.post('/:id/delete', async (req, resp) => {
    await Course.delete(req.body)

    resp.redirect('/courses')
})

router.get('/:id', async (req, resp) => {
    const course = await Course.getById(req.params.id)
    resp.render('course', {
        layout: 'empty',
        title: course.title,
        course
    })
})


module.exports = router