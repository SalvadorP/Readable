import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import Post from './Post';
import { getAllPosts } from '../actions/Post';
import { sortIt } from '../utils/api';

class AllPosts extends Component {
    componentDidMount() {
        const { getAllPosts } = this.props;
        getAllPosts();
    }

    render() {
        const { posts = [] } = this.props;       
        const { category = '', sortby = ''} = this.props.match.params;
        let filteredPosts = (category === 'all' || category === '') ? posts : _.filter(posts, {'category': category});
        let sortedPosts = sortIt(filteredPosts, sortby);
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
