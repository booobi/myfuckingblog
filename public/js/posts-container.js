class PostsContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = { postsData : [
          {
            postTitle : 'My First post title!',
            postSubtitle : 'My First post subtitle!'
        },
        {
          postTitle : 'My Second post title!',
          postSubtitle : 'My Second post subtitle!'
      },
      {
        postTitle : 'My Third post title!',
        postSubtitle : 'My Third post subtitle!'
    }]};
    }
    render() {
      const postSummaries = this.state.postsData.map((postData) => <PostPreview postTitle={postData.postTitle} postSubtitle={postData.postSubtitle}/>)
      
      return (
        <div style={{paddingLeft:'150px'}}>
            {postSummaries}
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      )
    }
}