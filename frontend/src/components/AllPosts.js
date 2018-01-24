import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import Post from './Post';
import { getAllPosts } from '../actions/Post';

class AllPosts extends Component {
    componentDidMount() {
        const { getAllPosts } = this.props;
        getAllPosts();
    }

    sortIt(posts, sortby) {
        switch(sortby) {
            case 'upvotes':
                return _.reverse(_.sortBy(posts, ['voteScore']));
            case 'downvotes':
                return _.sortBy(posts, ['voteScore']);
            case 'latest':
                return _.reverse(_.sortBy(posts, ['timestamp']));
            default:
                return posts;
        }
    }

    render() {
        const { posts = [] } = this.props;       
        const { category = '', sortby = ''} = this.props.match.params;
        let filteredPosts = (category === 'all' || category === '') ? posts : _.filter(posts, {'category': category});
        let sortedPosts = this.sortIt(filteredPosts, sortby);
        return (
            <Row>
                { _.map(sortedPosts, post => <Post key={post.id} post={post} />) }   
            </Row>
        )
    }
}

function mapStateToProps(state) {
    if (state !== undefined) {
        const posts = state.posts;
        return {posts};
    }
    return {};
}

export default connect(mapStateToProps, {
    getAllPosts,
})(AllPosts);
