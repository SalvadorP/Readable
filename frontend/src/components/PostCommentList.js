import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { getPostComments } from '../actions/Comments';
import Comment from './Comment';
import NoMatch from './NoMatch';
import OrderByElements from './OrderByElements';
import { sortIt } from '../utils/api';

class PostCommentList extends Component {
    render() {
        const { comments } = this.props;       
        let { category = '', sortby, id } = this.props;
        if (category === '') {
            category = 'all';
        }  
        let sortedComments = sortIt(comments, sortby);        

        return (
            (!sortedComments) ? <NoMatch /> : 
            <Row>
                <Col xs={8} sm={8} md={8} className="">
                    { _.map(sortedComments, comment => <Comment key={comment.id} comment={comment} />) }   
                </Col>
                <Col xs={4} sm={4} md={4} className="">
                    <OrderByElements category={category} sortby={sortby} id={id} />
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


