$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/42"
}).done((data) => {
    ReactDOM.render(<PostsContainer/>, document.getElementById('root'));

    //
    $('a:has(>h2)').each((index, value) => {
        $(value).click((event) => {
            event.preventDefault();
            //ajax postData
            //use postData as a prop for BlogPost?
            ReactDOM.render(<BlogPost/>, document.getElementById('root'));
            $('html, body').animate({scrollTop: $('#root').offset().top - 250 }, 'slow');
        })
    })
});
