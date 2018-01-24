import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Button, Glyphicon, Row, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPost, newPost, editPost, deletePost } from '../actions/Post';
import { getAllCategories } from '../actions/Categories';
// import NoMatch from './NoMatch';
import serializeForm from 'form-serialize';
import Confirm from 'react-confirm-bootstrap';
import PostCommentList from './PostCommentList';
import uniqid from 'uniqid';

class PostFormPage extends Component {
    // TODO: Refactorize the Form for posts and use only one.
      
    componentWillMount() {
        this.props.getAllCategories(); 
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

    handleNewSubmit = (e) => {
        const { newPost } = this.props;
        const data = new serializeForm(e.target, {hash: true});
        e.preventDefault();               
        newPost(data);
        // IDEA: once saved return to the list.
    }


    onConfirm() {
        const { id } = this.props.match.params;
        const { deletePost } = this.props;        
        deletePost(id);        
    }

    render() {
        const { post, categories = [] } = this.props;        
        return (
            (!post) ? 
            // <NoMatch /> 
            <div>
                <form className="form-horizontal" id="PostNewForm" onSubmit={this.handleNewSubmit.bind(this)}>
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
                                                <FormControl type="hidden" name="id" defaultValue={uniqid()} />
                                                <FormControl type="hidden" name="timestamp" defaultValue={Date.now()} />
                                                <FormControl type="text" placeholder="Title" name="title" defaultValue="" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalBody">
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Body
                                            </Col>
                                            <Col sm={10}>
                                                <FormControl type="text" placeholder="Body" name="body" defaultValue="" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalCategory">
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Category
                                            </Col>
                                            <Col sm={10}>
                                                <FormControl name="category" componentClass="select" placeholder="select">
                                                    { _.map(categories, categorie => (
                                                        <option key={categorie.path} value={categorie.path}>{categorie.name}</option>                      
                                                    )) }   
                                                </FormControl>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalAuthor">
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Author
                                            </Col>
                                            <Col sm={10}>
                                                <FormControl type="text" placeholder="Author" name="author" defaultValue="" />
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
                                                <Link className="btn btn-primary btn-block" to={'/'}>
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
            </div>
            : 
            <div>
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
                                    <FormGroup controlId="formHorizontalCategory">
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Category
                                            </Col>
                                            <Col sm={10}>
                                                <FormControl name="category" componentClass="select" placeholder="select">
                                                    { _.map(categories, categorie => (
                                                        <option key={categorie.path} value={categorie.path} selected={categorie.path === post.category}>{categorie.name}</option>                      
                                                    )) }   
                                                </FormControl>
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
                                            <Confirm
                                                onConfirm={this.onConfirm.bind(this)}
                                                body="Are you sure you want to delete this post?"
                                                confirmText="Delete!"
                                                title={'Delete ' + post.title}>
                                                <Button className="btn-block btn-danger">
                                                    <Glyphicon glyph="trash" />
                                                </Button>
                                            </Confirm>
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
            <PostCommentList />
            </div>            
        )
    }
}

function mapStateToProps(state, postProps) {
    return { post: state.posts[postProps.match.params.id], categories: state.categories }
}

function mapDispatchToProps (dispatch) {
    return {
        getPost: (id) => dispatch(getPost(id)),
        newPost: (id) => dispatch(newPost(id)),
        editPost: (id) => dispatch(editPost(id)),
        deletePost: (id) => dispatch(deletePost(id)),
        getAllCategories: () => dispatch(getAllCategories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFormPage);


