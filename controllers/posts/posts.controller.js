module.exports = {
    singlePost: async(req, res) => {
        res.render("posts/singlePost");
    },
    createPost: async(req, res) => {
        console.log(req.body, req.file);
        res.redirect("/")
    },
    createGet: (req, res) => {
        res.render("posts/createPost")
    }
}