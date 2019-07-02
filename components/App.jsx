const React = require('react');
const Route = require('react-router-dom/Route').default;
const Switch = require('react-router-dom/Switch').default;

const PostsContainer = require('./posts-container');
const BlogPost = require('./blogpost');

module.exports = class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { routesData: this.isBrowser() ? globalRoutes : this.props.routesData }
    }

    isBrowser() {
        return (typeof window === typeof undefined) ? false : true;
    }

    render() {
    const renderedRoutes = this.state.routesData.map((routeData,index) => {
        console.log("Route taken: " + routeData.url);
    return (<Route path={routeData.url} key={index} render={() => <BlogPost postID={routeData.postId} postContent={this.props.postContent}/>} />)
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