import React, {Component} from 'react';
import { Col, Glyphicon, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Post extends Component {
    
    render() {
        const {post} = this.props;
        return (
            <Col xs={4} sm={4} md={5} className="">
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
                            <br />
                            <Row>                                
                                <Col xs={6} sm={6} md={6}>
                                    <Link className="btn btn-success btn-block" to={post.category + '/' + post.id}><Glyphicon glyph="fullscreen" /></Link>
                                </Col>
                                <Col xs={6} sm={6} md={6}>
                                    <Link className="btn btn-info btn-block" to={post.id + '/comment/new'}><Glyphicon glyph="comment" /></Link>
                                </Col>                                
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

// const mapDispatchToProps(dispatch) => {
//     return {
//         postVoteUp : (...args) => dispatch(action1(...args)),
//         autoBoundAction : bindActionCreators(action2, dispatch),
//         multipleActionsTogether : bindActionCreators({action1, action2}, dispatch)
//     }
// };

// export default connect(null, mapDispatchToProps)(Post);

// function mapStateToProps(state) {
//     if (state !== undefined) {
//         const post = state.post;
//         return {post};
//     }
//     return {};
// }

// export default connect(null, {
//     postVoteUp, postVoteDown
// })(Post);

export default Post;

