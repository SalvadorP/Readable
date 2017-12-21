import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Post extends Component {
    render() {
        return (
            <Col xs={6} sm={3} className="Post">
            <div className="PostCardPage">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.postTitle}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Post X subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link className="btn btn-primary btn-block" to="/">View Post X</Link>
                        <Link className="btn btn-primary btn-block" to="/">Comment Post X</Link>
                    </div>
                </div>
            </div>
            </Col>
        )
    }
}

export default Post;
