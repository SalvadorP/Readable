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

    render() {
        const { posts = [] } = this.props;       
        const { category = ''} = this.props.match.params;
        let filteredPosts = category !== '' ? _.filter(posts, {'category': category}) : posts;
        return (
            <Row>
                { _.map(filteredPosts, post => <Post key={post.id} post={post} />) }   
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
