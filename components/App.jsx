const React = require('react');
const Route = require('react-router-dom/Route').default;
const Switch = require('react-router-dom/Switch').default;

const PostsContainer = require('./posts-container');
const BlogPost = require('./blogpost');

//conditional ajax for routesdata here
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

module.exports = class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const renderedRoutes = routesData.map(routeData => {
        console.log("Route taken: " + routeData.url);
    return (<Route path={routeData.url} render={() => <BlogPost postID={routeData.postId}/>} />)
}
    );
        return (
                    <Switch>
                        {renderedRoutes}
                        <Route component={PostsContainer} />
                    </Switch>
        )
    }
}