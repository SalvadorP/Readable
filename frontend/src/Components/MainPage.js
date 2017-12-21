import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import AllPosts from './AllPosts';

class MainPage extends Component {

    render() {
        return (
        <div className="MainPageComponent">
            <Jumbotron>
                <h1>Readable Posts</h1>
            </Jumbotron>
            <div className="AllPosts">
                <AllPosts {...this.props} />
            </div>
        </div>
        )
    }
}

export default MainPage;
