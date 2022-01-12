const Express = require('express')
const Routes = Express.Router()

const ProductController = require('../Controllers/Product')

Routes.get('/', (req, res) => {
    res.send('homepages')
})

Routes.post('/product', ProductController.Create)
Routes.get('/product', ProductController.All)


module.exports = Routes