import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import Post from './Post';
import { getAllPosts } from '../actions/Post';

class AllPosts extends Component {
    // TODO: Get all the posts and render them.
    // componentWillMount() {
    //     console.log('component will mount');
    //     this.props.getAllPosts();
    // }

    componentDidMount() {
        console.log('component DID mount');
        // this.props.getAllPosts();
        const { getAllPosts } = this.props;
        getAllPosts();
    }

    // renderPosts() {
    //     console.log('render Posts');
    //     var {posts} = this.props;
    //     if (posts === undefined) {
    //         return <div>No posts</div>
    //     }
    //     if (posts) {
    //         return _.map(posts, post => <Post key={post.id} post={post} />);
    //     } else {
    //         return <div>Loading...</div>
    //     }
    // }

    render() {
        const { posts = [] } = this.props;
        console.log(posts);
        return (
            <div className="AllPosts">
                <Grid>                    
                    <Row>
                        { _.map(posts, post => <Post key={post.id} post={post} />) }   
                    </Row>    
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const posts = state.posts;
    return {posts};
}

export default connect(mapStateToProps, {
    getAllPosts,
})(AllPosts);

// export default AllPosts;
