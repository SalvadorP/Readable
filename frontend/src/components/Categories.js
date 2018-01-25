import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getAllCategories } from '../actions/Categories';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import OrderByElements from './OrderByElements';

class Categories extends Component {
    componentWillMount() {
        this.props.getAllCategories();
    }

    render() {
        const { categories = [], sortby = '' } = this.props;
        let { category = '' } = this.props;
        if (category === '') {
            category = 'all';
        }
        return (
            <div className="Categories">
                <Col xs={12} sm={12} md={12}>                                
                <ListGroup>
                    <ListGroupItem href='/all' active={category === 'all' ? 'active' : ''}>All</ListGroupItem>
                    { _.map(categories, cat => (
                        <ListGroupItem key={uniqid()} href={'/' + cat.path} active={cat.path === category ? 'active' : ''}>{cat.name}</ListGroupItem>
                    )) }   
                </ListGroup>
                </Col>
                <Col xs={12} sm={12} md={12}>                    
                    <Link className="btn btn-success btn-block" to={'/post/new'}>New Post</Link>
                </Col>     
                <Col xs={12} sm={12} md={12}>                    
                    <OrderByElements category={category} sortby={sortby} id={''}/>                 
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
