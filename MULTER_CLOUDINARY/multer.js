const [multer, dotenv, path] = [
  require("multer"),
  require("dotenv"),
  require("path")
];

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/",
    filename(req, file, cb) {
      cb(
        null,
        file.originalname.replace(path.extname(file.originalname), "") +
          "_" +
          Date.now() +
          path.extname(file.originalname)
      );
    }
  }),
  limits: { fileSize: 1024 * 1024 },
  fileFilter(req, file, cb) {
    checktype(file, cb);
  }
}).single("imagename");


let checktype = (file, cb) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
};

module.exports = upload;




let query;
  let reqQuery = { ...req.query };
  const removeFields = ["select", "sort", "limit", "page"];
  // filtering through query params using mongoose bitwise operators
  removeFields.forEach(params => delete reqQuery[params]);
  let queryString = JSON.stringify(reqQuery);
  queryString = queryString.replace(
    /\b(gt|gte|lt|lte|in)\b/,
    match => `$${match}`
  );
  query = BusinessList.find(JSON.parse(queryString)).populate("services");
  // Filtering through query params using select
  if (req.query.select) {
    let fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }
  // Filtering through query params using select
  if (req.query.sort) {
    let fields = req.query.sort.split(",").join(" ");
    query = query.sort(fields);
  } else {
    query = query.sort("-createdAt");
  }
