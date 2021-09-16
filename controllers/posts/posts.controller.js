module.exports = {
    singlePost: async(req, res) => {
        res.render("posts/singlePost");
    },
    createPost: async(req, res) => {
        const { postTitle, postTag, postImage, postBody } = req.body;
        console.log(`This is the post body ${req.body}`);
        console.log("file::::::::::", req.file);

        const errors = [];
        
        // validating data
        if(!postTitle || !postTag || !postImage || !postBody) {
            console.log("Sorry Data not Complete")
        } else if(postBody.length < 20) {
            errors.push({
                message: "Sorry try again"
            });
            res.redirect("/posts/create");
        } else {
            console.log("Success", req.body);
            res.redirect("/");
        }
    },
    createGet: (req, res) => {
        res.render("posts/createPost")
    }
}