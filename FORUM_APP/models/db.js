const [mongoose, path] = [require("mongoose"), require('path')];

mongoose
  .connect("mongodb://localhost:27017/forum", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(data => console.log("DB connected successfully"))
  .catch(err => console.log(err));

require(path.join(__dirname, 'users'))