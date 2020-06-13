const [express, path] = [require('express'), require('path')]

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended : true}))

app.use(express.json())

app.post('/email', (req, res) =>{
    res.json({message : req.body})
})

app.get('/', (req, res)=> {
    res.render('index')
})



app.listen(3000, ()=> console.log('Server started'))