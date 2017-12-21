import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Post extends Component {
    render() {
        /*
        
        */
        return (
            <Col xs={6} sm={4} md={4} className="">
                <div className="PostCardPage">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{this.props.post.title}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">{this.props.post.author}</h6>
                            <p className="card-text">{this.props.post.body}</p>
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

