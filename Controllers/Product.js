const ProductModel = require('../Mongo/Models/Product')

exports.All = async (req, res) => {
    await ProductModel.find().then(response => {
        res.send({
            message: `suuccessfull to find data`,
            result: response,
            statusCode: 200,
        })
    }).catch(err => {
        res.send({
            message: `failed to find data`,
            statusCode: 200,
            errMessage: err.message
        })
    })
}

exports.Create = async (req, res) => {
    const NewProduct = new ProductModel({
        title: req.body.title,
        excerpt: req.body.excerpt,
        description: req.body.description,
        price: Number(req.body.price),
    })

    await NewProduct.save(NewProduct).then(response => {
        res.send({
            message: `suuccessfull to create data`,
            result: response,
            statusCode: 200,
        })
    }).catch(err => {
        res.send({
            message: `failed to create data`,
            statusCode: 500,
            errMessage: err.message
        })
    })
}

exports.FindOne = (req, res) => {

}

exports.Edit = (req, res) => {

}

exports.Delete = (req, res) => {

}