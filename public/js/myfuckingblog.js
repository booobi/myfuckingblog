const HashRouter = window.ReactRouterDOM.HashRouter;
const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const Link = window.ReactRouterDOM.Link;
const Prompt = window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
//Api call -> postId
//for each postID -> Route path=/{postId}

//Pass postID to BlogPost. BlogPost fetches needed post from DB.
const App = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/1" component={BlogPost} />

                <Route path="/2" component={BlogPost} />

                <Route path="/3" component={BlogPost} />

                <Route component={PostsContainer} />
            </Switch>
        </div>
    </Router>
)




// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/posts/42"
// }).done((data) => {
    
// });

ReactDOM.render(<App />, document.getElementById('root'));

// const scrollToPost = () => {
//         console.log("Fired");
//             $('html, body').animate({scrollTop: $('#root').offset().top - 250 }, 'slow');
// }