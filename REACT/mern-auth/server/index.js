// NPM Packages
const [express, mongoose, path, morgan, cors] = [
  require("express"),
  require("mongoose"),
  require("path"),
  require("morgan"),
  require("cors"),
];
require("dotenv").config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((_) => console.log("DB connection established"))
  .catch((err) => console.log(err.message));

// Middlewares

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:3000" }));
}

// Routes
app.use("/api/auth", require(path.join(__dirname, "routes", "auth")));
app.use("/api/users", require(path.join(__dirname, "routes", "user")));

app.listen(process.env.PORT, (_) => console.log("Server running"));
