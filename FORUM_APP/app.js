const [createError, express, path, cookieParser, logger, dotenv] = [
  require("http-errors"),
  require("express"),
  require("path"),
  require("cookie-parser"),
  require("morgan"),
  require('dotenv').config()
];

// require mongodb
require(path.join(__dirname, 'models', 'db'))

// User router configuration
const [indexRouter, usersRouter, registerRouter, loginRouter] = [
  require(path.join(__dirname, "routes", "index")),
  require(path.join(__dirname, "routes", "users")),
  require(path.join(__dirname, "routes", "register")),
  require(path.join(__dirname, "routes", "login"))
];

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/users/register", registerRouter);
app.use("/users/login", loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
