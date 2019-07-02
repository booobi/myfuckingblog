var React = require('react');

module.exports = class BlogPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          postID: this.props.postID,
          //if there is no postContent passed -> fetch from api, otherwise render the prop directly
          postContent: this.props.postContent ? this.props.postContent : "fetch from api"
        }
      }
    render() {
      console.log("Rendering post with id: " + this.state.postID);
    return (<div className="Container" dangerouslySetInnerHTML={{__html: 
      this.state.postContent}}></div>);
    }
}