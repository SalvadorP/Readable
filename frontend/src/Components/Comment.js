import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Glyphicon, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Confirm from 'react-confirm-bootstrap';
import { deleteComment, commentVoteUp, commentVoteDown } from '../actions/Comments';
import * as moment from 'moment';

class Comment extends Component {

    onConfirm() {
        const { id } = this.props.comment;
        const { deleteComment } = this.props;        
        deleteComment(id);        
    }

    render() {
        const { comment, commentVoteUp, commentVoteDown } = this.props;
        return (
            <Col xs={12} sm={6} md={6} className="">
                <div className="PostCardPage CommentCard card border-secondary">
                    <div className="card">
                        <div className="card-body">
                            <Row>
                                <Col xs={8} sm={8} md={8}>
                                    <h6 className="card-subtitle mb-2 text-muted">{comment.author}</h6>
                                    <h6 className="card-subtitle text-muted">{moment(parseInt(comment.timestamp, 10)).format("YYYY/MM/DD")}</h6>
                                </Col>
                                <Col xs={4} sm={4} md={4}>
                                    <span className="label label-info">Votes: {comment.voteScore}</span>
                                </Col>                                
                            </Row>                           
                            <p className="card-text">{comment.body}</p>
                            <br />
                            <Row>
                                <Col xs={6} sm={3} md={3}>
                                    <Link className="btn btn-success btn-block" to={'/' + comment.parentId + '/comment/' + comment.id + '/edit' }>
                                        <Glyphicon glyph="pencil" />
                                    </Link>
                                </Col>
                                <Col xs={6} sm={3} md={3}>
                                    <Confirm
                                        onConfirm={this.onConfirm.bind(this)}
                                        body="Are you sure you want to delete this comment?"
                                        confirmText="Delete!"
                                        title={'Delete comment of ' + comment.author }>
                                        <Button className="btn-block btn-danger">
                                            <Glyphicon glyph="trash" />
                                        </Button>
                                    </Confirm>
                                </Col>
                                <Col xs={6} sm={3} md={3}>
                                    <Button onClick={() => commentVoteUp(comment.id)} className="btn-block btn-success">
                                        <Glyphicon glyph="thumbs-up" />
                                    </Button>
                                </Col>
                                <Col xs={6} sm={3} md={3}>
                                    <Button onClick={() => commentVoteDown(comment.id)} className="btn-block btn-warning">
                                        <Glyphicon glyph="thumbs-down" />
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}


function mapStateToProps(state, commentProps) {
    // FIXME: It's really necessary this mapping?    
    return { comment: state.comments[commentProps.comment.id] };
}

function mapDispatchToProps (dispatch) {
    return {
        commentVoteUp: (id) => dispatch(commentVoteUp(id)),
        commentVoteDown: (id) => dispatch(commentVoteDown(id)),
        deleteComment: (id) => dispatch(deleteComment(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);


