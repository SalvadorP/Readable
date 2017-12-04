import React, {Component} from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import PostCard from './PostCard';

class MainPage extends Component {e

    render() {
        return (
        <div className="MainPageComponent">
            <Jumbotron>
                <h1>Readable Posts</h1>
            </Jumbotron>
            <Grid>
                <Row>
                    <Col xs={6} sm={3} className="PostCard">
                        <PostCard postTitle={'Post 1'} />                       
                    </Col>
                    <Col xs={6} sm={3} className="PostCard">
                        <PostCard postTitle={'Post 2'} />        
                    </Col>
                    <Col xs={6} sm={3} className="PostCard">
                        <PostCard postTitle={'Post 3'} />        
                    </Col>
                    <Col xs={6} sm={3} className="PostCard">
                        <PostCard postTitle={'Post 4'} />        
                    </Col>
                    <Col xs={6} sm={3} className="PostCard">
                        <PostCard postTitle={'Post 5'} />        
                    </Col>
                    <Col xs={6} sm={3} className="PostCard">
                        <PostCard postTitle={'Post 6'} />        
                    </Col>
                </Row>    
            </Grid>
        </div>
        )
    }
}

export default MainPage
