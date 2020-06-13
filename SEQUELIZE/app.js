const [express, dotenv] = [require('express'), require('dotenv').config()]

const app = express()

app.use(require('./routes/userRoutes'))

require('./db')

app.get('/', (_, res)=> res.send('Hello World.'))

module.exports = app;