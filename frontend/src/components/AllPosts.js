import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import Post from './Post';
import { getAllPosts } from '../actions/Post';

class AllPosts extends Component {
    // TODO: Get all the posts and render them.
    // componentWillMount() {
    //     // console.log('component will mount');
    //     // FIXME: Which is better? will mount or did mount?
    //     this.props.getAllPosts();
    // }

    componentDidMount() {
        // console.log('component DID mount');
        const { getAllPosts } = this.props;
        getAllPosts();
    }

    render() {
        const { posts = [] } = this.props;        
        return (
            <Grid>
                <Row>
                    { _.map(posts, post => <Post key={post.id} post={post} />) }   
                </Row>
            </Grid>
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
