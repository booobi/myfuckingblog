const React = require('react'); //this is causing blank render???
const ReactDOM = require('react-dom');
const BrowserRouter = require('react-router-dom/BrowserRouter').default;

const App = require('./components/App');

const MyRoutedApp = () =>
        (<BrowserRouter>
            <App />
        </BrowserRouter>);

//Api call -> postId
//for each postID -> Route path=/{postId}

//Pass postID to BlogPost. BlogPost fetches needed post from DB.


ReactDOM.hydrate(<MyRoutedApp/>, document.getElementById('root'));
