import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from  'react-router-dom';
import * as actions from '../../actions/posts_actions'
import history from '../../history';

class PostShow extends Component {

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchPost(id);

  }

// Try using _id that we alrady should have access to, might be able to link to
// post that way by plugging it in to that route a different way
  renderPost() {
    const {post} = this.props;
    console.log(this.props.post);
    return(
      <div className="post-display">
        <div className="post-display-title">{post.title}</div>
        <div className="post-display-content">{post.content}</div>
      </div>
      );
  }

  onDeleteClick() {
    let id = this.props.post._id;
    this.props.deletePost(id, () => {
      this.props.history.push('/display');
    });
  }


  render() {
    const {post} = this.props;
    console.log({post});
    if (!post) {
      return <div>Loading...</div>
    } else {


    return(
      <div>
        <Link to="/taskapp/display-tasks" className="btn btn-primary">Back To Display</Link>
        <Link to="/taskapp/display-tasks">
          <button
            className="btn btn-dnager pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}
            >
            Delete Task
          </button>
        </Link>
        <div>
          {this.renderPost()}
        </div>

      </div>
    ); }
  }
}

function mapStateToProps(state) {
  return {post: state.posts.activePost};
}

export default connect(mapStateToProps, actions)(PostShow);
