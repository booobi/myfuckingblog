var express = require('express');
const port = 3000;
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
    res.end();
});

app.get("/test", (req, res) => {
    res.render("testIndex");
    res.end();
});

app.get("/react", (req, res) => {
    res.render("reactTest");
    res.end();
});

app.listen(port, () => console.log("Server started on " + port));