import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import uniqid from 'uniqid';

class OrderByElements extends Component {
    render() {
        let { category = '', sortby, id = '' } = this.props;
        if (id !== '') {
            id = '/' +id;
        }
        if (category === '') {
            category = 'all';
        }  
        return (
            <div>
                <h2>Sort By</h2>
                <ListGroup>
                    <ListGroupItem key={uniqid()} href={'/' + category + id + '/sortby/upvotes'} active={sortby === 'upvotes' ? 'active' : ''}>Up Votes</ListGroupItem>
                    <ListGroupItem key={uniqid()} href={'/' + category + id + '/sortby/downvotes'} active={sortby === 'downvotes' ? 'active' : ''}>Down Votes</ListGroupItem>
                    <ListGroupItem key={uniqid()} href={'/' + category + id + '/sortby/latest'} active={sortby === 'latest' ? 'active' : ''}>Latest</ListGroupItem>
                </ListGroup>   
            </div>
        )
    }
}

export default OrderByElements;


