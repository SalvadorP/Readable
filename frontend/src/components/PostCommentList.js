import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Button, Glyphicon, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPostComments } from '../actions/Comments';
import Comment from './Comment';
import NoMatch from './NoMatch';
import Confirm from 'react-confirm-bootstrap';

class PostCommentList extends Component {

    state = {
        totalComments: 0
    }
    
    componentDidMount() {
        // const { id } = this.props.match.params;
        // this.props.getPostComments(id);     
        console.log('Component did mount');
    }

    // handleDelete(e) {
    //     const { id } = this.props.match.params;
    //     const { deletePost } = this.props;        
    //     deletePost(id);        
    // }

    onConfirm() {
        // const { id } = this.props.match.params;
        console.log('DELETING!');
        // const { deletePost } = this.props;        
        // deletePost(id);        
    }

    render() {
        const { comments } = this.props;
        // <Button onClick={() => deletePost(post.id)} className="btn-block btn-danger">
        // <Button onClick={this.handleDelete.bind(post.id)} className="btn-block btn-danger">
        
        return (
            (!comments) ? <NoMatch /> : 
            <Row>
                <Col xs={12} sm={12} md={12} className="">
                    { _.map(comments, comment => <Comment key={comment.id} comment={comment} />) }   
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state, postProps) {
    console.log(state);
    console.log(postProps);
    // return { post: state.posts[postProps.match.params.id] }
    return {};
}

function mapDispatchToProps (dispatch) {
    return {
        getPostComments: (id) => dispatch(getPostComments(id)),
        // deleteComment: (id) => dispatch(deleteComment(id)),
    }
}

// export default connect(mapStateToProps, {
//     getPost, postVoteUp, postVoteDown, editPost, deletePost
// })(PostCommentList);

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentList);


