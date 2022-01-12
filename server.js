const Express = require('express')
const App = Express()
const Cors = require('cors')
const PORT = process.env.PORT || 8888 

App.use(Cors())
App.use(Express.urlencoded({ extended: true }))
App.use(Express.json())

App.listen(PORT, () => { console.log(`Server is running in port : ${ PORT }`) })

const ConnectionMongo = require('./Mongo/Connection')
ConnectionMongo()

// Routes
const Routes = require('./Routes/Routes')
App.use(Routes)