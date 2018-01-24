import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { getPostComments } from '../actions/Comments';
import Comment from './Comment';
import NoMatch from './NoMatch';

class PostCommentList extends Component {
    render() {
        const { comments } = this.props;       
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
    // return { post: state.posts[postProps.match.params.id] }
    return {};
}

function mapDispatchToProps (dispatch) {
    return {
        getPostComments: (id) => dispatch(getPostComments(id)),
        // deleteComment: (id) => dispatch(deleteComment(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentList);


