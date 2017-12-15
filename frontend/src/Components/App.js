import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import NoMatch from './NoMatch';
import MainPage from './MainPage';
import {GET_ALL_POSTS} from '../actions/types';
import * as Post from '../actions/Post';
import { getPosts, headers } from '../utils/api';
// import logo from './logo.svg';
import '../css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.get_all_posts;
  }

  state = {
    sort: ''
  }

  getAllPosts() {
    // fetch("http://localhost:3001/posts/", {method: "GET", headers: headers()})
    // .then((resp) => {
    //   resp.json().then((data) => {
    //     var obj = {
    //       type: GET_ALL_POSTS,
    //       posts: data
    //     }
    //     this.props.get_all_posts(obj);
    //   })
    // })
    this.props.get_all_posts(getPosts());
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <div className="col-xs-12">
              <Switch>
                <Route exact path="/" render={() => (
                  <MainPage posts={this.props.posts} />
                )} />
                <Route component={NoMatch} />
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps ({ posts, comments, categories }) {
  return {
    posts,
    comments,
    categories
  }
}

function mapDispatchToProps (dispatch) {
  console.log('map dispatch to props');
  return {
    
    // load_categories: (data) => dispatch(Comment.load_categories(data)),
    get_all_posts: (data) => dispatch(Post.get_all_posts(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// export default App;
