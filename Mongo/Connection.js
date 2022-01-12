const Mongoose = require('mongoose')

const urlMongo = `mongodb+srv://testerlearn:testerlearn@learnmongo0.sggui.mongodb.net/learningacha?retryWrites=true&w=majority`

const ConnectionDB = async () => {
    try {
        const Connect = await Mongoose.connect(urlMongo)
        console.log(`Mongo Connected : ${ Connect.connection.host }`)
    } catch (error) {
        console.log(error)
        // process.exit(1)
    }
}

module.exports = ConnectionDB