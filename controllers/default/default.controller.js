module.exports = {
    index: async(req, res) => {
        let pageTitle = "Home";
        let userName = "Prof Xavier";
        res.render("default/index", {pageTitle, userName});
    },
    about: async(req, res) => {
        res.render("default/about")
    }
}