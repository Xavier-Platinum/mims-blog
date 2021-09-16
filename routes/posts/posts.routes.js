const router = require("express").Router();
const { singlePost, createPost, createGet } = require("../../controllers/posts/posts.controller");

router.get("/:id", singlePost);

router.route("/create")
.get(createGet)
.post(createPost);

module.exports = router;