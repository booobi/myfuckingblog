var React = require('react');
var Link = require('react-router-dom/Link').default;

module.exports = class PostPreview extends React.Component {
  constructor(props) {
    super(props),
    this.scrollToPost = () => {
      console.log("Fired");
          $('html, body').animate({scrollTop: $('body').offset().top + 400 }, 'slow');
}
  }
  render() {
    return (
        <div className="post-preview">
          <Link to={"/" + this.props.postId} onClick={this.scrollToPost}>
            <h2 className="post-title">
              {this.props.postTitle}
            </h2>
            <h3 className="post-subtitle">
              {this.props.postSubtitle}
            </h3>
          </Link>
          <p className="post-meta">Posted by
        <a href="#">Start Bootstrap</a>
            on September 24, 2018</p>
          <hr />
        </div>
    )
  }
}