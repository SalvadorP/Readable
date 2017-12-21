import React, {Component} from 'react';
import { Col, Button, Glyphicon, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { postVoteUp, postVoteDown } from '../actions/Post';

class PostPage extends Component {
    render() {
        const {post} = this.props;
        return (
            <Row>
                <Col xs={6} sm={4} md={4} className="">
                    <div className="PostCardPage">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{post.title}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">{post.author}</h6>
                                <p className="card-text">{post.body}</p>
                                <Link className="btn btn-info btn-block" to="/">Comment Post X</Link>
                                <br />
                                <Row>
                                    <Col xs={12} sm={8} md={9}>
                                        <Button onClick={() => postVoteUp(post.id)} className="btn-block btn-primary">
                                            <Glyphicon glyph="upload" /> +1
                                        </Button>
                                    </Col>
                                    <Col xs={12} sm={4} md={3}>
                                        <Button onClick={() => postVoteDown(post.id)} className="btn-block btn-danger">
                                            <Glyphicon glyph="download" /> -1
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default PostPage;

