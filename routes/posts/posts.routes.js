const router = require("express").Router();
const { singlePost, createPost, createGet } = require("../../controllers/posts/posts.controller");


router.route("/create")
.get(createGet)
.post(createPost);

router.get("/:id", singlePost);

module.exports = router;