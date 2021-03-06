import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, Button, Glyphicon, Row, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getComment, postComment, editComment, deleteComment } from '../actions/Comments';
import { getPost } from '../actions/Post';
import NoMatch from './NoMatch';
import serializeForm from 'form-serialize';
import Confirm from 'react-confirm-bootstrap';

class CommentForm extends Component {
    
    // TODO: Refactorize the Form for comments and use only one.

    componentWillMount() {
        // console.log('CWM Comment Form Page');
    }

    componentDidMount() {
        // console.log('CDM Comment Form Page');
        // const { id, parentId } = this.props.match.params;
        // this.props.getComment(id);            
    }

    handleSubmit = (e) => {
        const { editComment } = this.props;
        const data = new serializeForm(e.target, {hash: true});
        e.preventDefault();    
        editComment(data);
        // IDEA: once saved return to the list.
    }

    onConfirm() {
        const { id } = this.props.match.params;
        const { deleteComment } = this.props;        
        deleteComment(id);        
    }

    render() {
        const { comment } = this.props;
        return (
            (!comment) ? 
            <NoMatch />            
            : 
            <div>
            <form className="form-horizontal" id="CommentForm" onSubmit={this.handleSubmit.bind(this)}>
                <Row>
                    <Col xs={12} sm={12} md={12} className="">
                        <div className="CommentCardPage">
                            <div className="card">
                                <div className="card-body">
                                    <FormGroup controlId="formHorizontalBody">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Body
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="hidden" name="id" defaultValue={comment.id} />
                                            <FormControl type="text" placeholder="Body" name="body" defaultValue={comment.body} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalAuthor">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Author
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="text" placeholder="Author" name="author" defaultValue={comment.author} />
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
                                                body="Are you sure you want to delete this comment?"
                                                confirmText="Delete!"
                                                title={'Delete comment from ' + '"' + comment.author + '"'}>
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
            </div>            
        )
    }
}

export default CommentForm;



