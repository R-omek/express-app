const {Router} = require('express')

const router = Router()

router.get('/', (req, resp) => {
    resp.render('index', {
        title: 'Home page',
        isHome: true
    })
})


module.exports = router