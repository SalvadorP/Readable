import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Button, Glyphicon, Row, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPost, editPost, deletePost } from '../actions/Post';
import NoMatch from './NoMatch';
import serializeForm from 'form-serialize';

class PostPage extends Component {

    state = {
        totalComments: 0
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPost(id);     
    }

    handleSubmit = (e) => {
        const { editPost } = this.props;
        const data = new serializeForm(e.target, {hash: true});
        e.preventDefault();               
        editPost(data);
        // IDEA: once saved return to the list.
    }

    render() {
        const {post, deletePost} = this.props;
        // onSubmit={() => this.handleSubmit(this)}
        // onSubmit={this.handleSubmit.bind(this)}
        // onSubmit={this.onSubmit}>
        return (
            (!post) ? <NoMatch /> : 
            <form className="form-horizontal" id="PostForm" onSubmit={this.handleSubmit.bind(this)}>
                <Row>
                    <Col xs={12} sm={12} md={12} className="">
                        <div className="PostCardPage">
                            <div className="card">
                                <div className="card-body">
                                    <FormGroup controlId="formHorizontalTitle">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Title
                                        </Col>
                                        <Col sm={10}>                                            
                                            <FormControl type="hidden" name="id" defaultValue={post.id} />
                                            <FormControl type="text" placeholder="Title" name="title" defaultValue={post.title} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalBody">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Body
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="text" placeholder="Body" name="body" defaultValue={post.body} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalAuthor">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Author
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="text" placeholder="Author" name="author" defaultValue={post.author} />
                                        </Col>
                                    </FormGroup>                                               
                                    <br />
                                    <Row>
                                        <Col xs={4} sm={4} md={4}>
                                            <Button type="submit" className="btn-block btn-success">
                                                <Glyphicon glyph="floppy-disk" />
                                            </Button>
                                        </Col>
                                        <Col xs={4} sm={4} md={4}>
                                            <Button onClick={() => deletePost(post.id)} className="btn-block btn-danger">
                                                <Glyphicon glyph="trash" />
                                            </Button>
                                        </Col>     
                                        <Col xs={4} sm={4} md={4}>
                                            <Link className="btn btn-primary btn-block" to={'/' + post.category + '/' + post.id}>
                                                <Glyphicon glyph="remove" />
                                            </Link>
                                        </Col>                                     
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </form>
        )
    }
}

// function FieldGroup({ id, label, help, ...props }) {
// 	return (
// 		<FormGroup controlId={id}>
// 			<ControlLabel>{label}</ControlLabel>
// 			<FormControl {...props} />
// 			{help && <HelpBlock>{help}</HelpBlock>}
// 		</FormGroup>
// 	);
// }

function mapStateToProps(state, postProps) {
    console.log('============ MAP STATE TO PROPS POST FORM PAGE ==============');
    console.log(state);
    console.log(postProps);
    console.log('=======================================================');
    return { post: state.posts[postProps.match.params.id] }
}

function mapDispatchToProps (dispatch) {
    return {
        getPost: (id) => dispatch(getPost(id)),
        editPost: (id) => dispatch(editPost(id)),
        deletePost: (id) => dispatch(deletePost(id)),
    }
}

// export default connect(mapStateToProps, {
//     getPost, postVoteUp, postVoteDown, editPost, deletePost
// })(PostPage);

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);


