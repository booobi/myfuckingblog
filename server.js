var express = require('express');
const port = 3000;
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/:postURL", (req, res) => {
    if(req.params.postURL == 4) {
        res.render("index");
        console.log("4");
        //query DB -> check if any db.post.url matches blog post req.params.postURL
        //Render index page with react.renderstring and EJS
    } else {
        //Render index page with all posts
        res.render("index");
    }
    res.end();
    
});

app.get("/", (req, res) => {
    res.render("index");
    res.end();
})


app.listen(port, () => console.log("Server started on " + port));