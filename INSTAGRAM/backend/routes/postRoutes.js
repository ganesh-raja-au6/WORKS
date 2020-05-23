// Npm modules
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const { posts, getUserPosts, getAllPosts } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "postControllers"
));

// Middlewares
const { authorized } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "authorized"
));

// Routes Upload a post
router.post('/post', authorized, posts)

// Routes Get all Posts
router.get('/posts', getAllPosts)
router.get('/userposts', authorized, getUserPosts)

module.exports = router;
