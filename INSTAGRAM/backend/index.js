// Import npm modules
const [express, dotenv, mongoose, path, cors] = [
  require("express"),
  require("dotenv").config(),
  require("mongoose"),
  require("path"),
  require('cors')
];

// Mongoose configuration
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((_) => console.log("DB Connected successfully"))
  .catch((err) => console.log(err));

// configure express app
const app = express();

// Configure middlewareOptions
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors())

// middleware routes
app.use('/api/v1/auth', require(path.join(__dirname, 'routes', 'authRoutes')))
app.use('/api/v1/users', require(path.join(__dirname, 'routes', 'postRoutes')))



// DB modelsMap
// require(path.join(__dirname, "models", "users"));

app.get("/", (req, res) => console.log("Hi"));

app.listen(process.env.PORT, (req, res) =>
  console.log(`server listening on port ${process.env.PORT}`)
);
