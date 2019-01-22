require('babel-register')({
    presets: ['react']
});

var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var StaticRouter = require('react-router-dom/StaticRouter').default;

const App = require('./components/App');
const port = 3000;
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

//fetch routesData
const routesData = [
    {
        url: "/1",
        postId: "1"
    },
    {
        url: "/2",
        postId: "2"
    },
    {
        url: "/3",
        postId: "3"
    },
    {
        url: "/4",
        postId: "4"
    }
]

app.get("/*", (req, res) => {
   
    var context = {};
    const routedApp = ReactDOMServer.renderToString(
        React.createElement(
            StaticRouter,
            { location: req.url, context: context },
            React.createElement(App, {routesData: routesData})
  )
      );

    res.render("index", { renderedData: routedApp });
    res.end();
    
});

app.listen(port, () => console.log("Server started on " + port));