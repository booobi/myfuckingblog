var React = require('react');
var PostPreview =require('./post-preview');

module.exports = class PostsContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = { postsData : [
          {
            postTitle : 'My First post title!',
            postSubtitle : 'My First post subtitle!',
            postId: 1
        },
        {
          postTitle : 'My Second post title!',
          postSubtitle : 'My Second post subtitle!',
          postId: 2
      },
      {
        postTitle : 'My Third post title!',
        postSubtitle : 'My Third post subtitle!',
        postId: 3
    }]};
    }
    render() {
      const postSummaries = this.state.postsData.map((postData) => <PostPreview postTitle={postData.postTitle} postSubtitle={postData.postSubtitle} postId={postData.postId}/>)
      
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