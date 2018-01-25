import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Glyphicon, Row, Button } from 'react-bootstrap';
import { postVoteUp, postVoteDown } from '../actions/Post';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

class Post extends Component {
    
    render() {
        const { post, postVoteUp, postVoteDown } = this.props;
        return (
            <Col xs={4} sm={4} md={5} className="">
                <div className="PostCardPage">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{post.title}</h4>
                            <h6 className="card-subtitle text-muted">{moment(parseInt(post.timestamp, 10)).format("YYYY/MM/DD")}</h6>
                            <Row>
                                <Col xs={8} sm={8} md={8}>
                                    <h6 className="card-subtitle mb-2 text-muted">{post.author}</h6>
                                </Col>
                                <Col xs={4} sm={4} md={4}>
                                    <span className="label label-info">Votes: {post.voteScore}</span>
                                </Col>                                
                            </Row>                           
                            <p className="card-text">{post.body}</p>
                            <br />
                            <Row>                                
                                <Col xs={6} sm={3} md={3}>
                                    <Link className="btn btn-success btn-block" to={'/' + post.category + '/' + post.id}><Glyphicon glyph="fullscreen" /></Link>
                                </Col>
                                <Col xs={6} sm={3} md={3}>
                                    <Link className="btn btn-info btn-block" to={'/' + post.id + '/comment/new'}><Glyphicon glyph="comment" /></Link>
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
        )
    }
}


function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        postVoteUp: (id) => dispatch(postVoteUp(id)),
        postVoteDown: (id) => dispatch(postVoteDown(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
