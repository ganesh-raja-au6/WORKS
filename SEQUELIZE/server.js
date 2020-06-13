const [app, dotenv] = [require('./app'), require('dotenv')]

app.listen(process.env.PORT, ()=>console.log(`server connected at port ${process.env.PORT}`))