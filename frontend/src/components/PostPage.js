import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Button, Glyphicon, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPost, postVoteUp, postVoteDown, deletePost } from '../actions/Post';
import { getPostComments } from '../actions/Comments';
import NoMatch from './NoMatch';
import Confirm from 'react-confirm-bootstrap';
import PostCommentList from './PostCommentList';

class PostPage extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPost(id); 
        this.props.getPostComments(id);
    }

    onConfirm() {
        const { id } = this.props.match.params;
        const { deletePost } = this.props;        
        deletePost(id);        
    }

    render() {
        const { post, postVoteUp, postVoteDown, comments } = this.props;
        
        return (
            (!post) ? <NoMatch /> : 
            <Row>
                <Col xs={12} sm={12} md={12} className="">
                    <div className="PostCardPage">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{post.title}</h4>
                                <Row>
                                    <Col xs={8} sm={8} md={8}>
                                        <h6 className="card-subtitle mb-2 text-muted">{post.author}</h6>
                                    </Col>
                                    <Col xs={4} sm={4} md={4}>
                                        <span className="label label-info">Votes: {post.voteScore}</span>
                                    </Col>                                
                                </Row>                           
                                <p className="card-text">{post.body}</p>
                                <Link className="btn btn-primary btn-block" to={'/' + post.id + '/comment/new'}>Comment Post X</Link>
                                <br />
                                <Row>
                                    <Col xs={6} sm={3} md={3}>
                                        <Link className="btn btn-success btn-block" to={'/' + post.category + '/' + post.id + '/edit' }>
                                            <Glyphicon glyph="pencil" />
                                        </Link>
                                    </Col>
                                    <Col xs={6} sm={3} md={3}>
                                        <Confirm
                                            onConfirm={this.onConfirm.bind(this)}
                                            body="Are you sure you want to delete this post?"
                                            confirmText="Delete!"
                                            title={'Delete ' + post.title}>
                                            <Button className="btn-block btn-danger">
                                                <Glyphicon glyph="trash" />
                                            </Button>
                                        </Confirm>
                                    </Col>
                                    <Col xs={6} sm={3} md={3}>
                                        <Button onClick={() => postVoteUp(post.id)} className="btn-block btn-success">
                                            <Glyphicon glyph="thumbs-up" />
                                        </Button>
                                    </Col>
                                    <Col xs={6} sm={3} md={3}>
                                        <Button onClick={() => postVoteDown(post.id)} className="btn-block btn-warning">
                                            <Glyphicon glyph="thumbs-down" />
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} className="">
                    <hr />
                </Col>
                <Col xs={12} sm={12} md={12} className="">
                   <p>Total of Comments: {post.commentCount}</p>
                   <PostCommentList id={post.id} comments={comments} />
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state, postProps) {
    return { post: state.posts[postProps.match.params.id], comments: state.comments }
}

function mapDispatchToProps (dispatch) {
    return {
        getPost: (id) => dispatch(getPost(id)),
        postVoteUp: (id) => dispatch(postVoteUp(id)),
        postVoteDown: (id) => dispatch(postVoteDown(id)),
        deletePost: (id) => dispatch(deletePost(id)),
        getPostComments: (id) => dispatch(getPostComments(id)),
    }
}

// export default connect(mapStateToProps, {
//     getPost, postVoteUp, postVoteDown, editPost, deletePost
// })(PostPage);

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);


