import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getAllCategories } from '../actions/Categories';
import { Link } from 'react-router-dom';

class Categories extends Component {
    componentWillMount() {
        this.props.getAllCategories();
    }

    render() {
        const { categories = [] } = this.props;
        const {category = ''} = this.props;
        return (
            <div className="Categories">
            <Col xs={12} sm={12} md={12}>                                
            <ListGroup>
                <ListGroupItem href='/' active={category === '' ? 'active' : ''}>All</ListGroupItem>
                { _.map(categories, cat => (
                    <ListGroupItem href={'/' + cat.path} active={cat.path === category ? 'active' : ''}>{cat.name}</ListGroupItem>
                )) }   
            </ListGroup>
            </Col>
            <Col xs={12} sm={12} md={12}>                    
                <Link className="btn btn-success btn-block" to={'/post/new'}>New Post</Link>
            </Col>
            
            </div>
        )
    }
}

function mapStateToProps(state) {
    if (state !== undefined) {
        const categories = state.categories;
        return {categories};
    }
    return {};
}

export default connect(mapStateToProps, {
    getAllCategories,
})(Categories);
