class PostPreview extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
    return (
      <div className="post-preview">
      <a href="post.html">
        <h2 className="post-title">
          {this.props.postTitle}
        </h2>
        <h3 className="post-subtitle">
          {this.props.postSubtitle}
        </h3>
      </a>
      <p className="post-meta">Posted by
        <a href="#">Start Bootstrap</a>
        on September 24, 2018</p>
      <hr/>
    </div>)
    }
}