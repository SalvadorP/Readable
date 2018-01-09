import React, {Component} from 'react';
import { Jumbotron, Row, Col, Grid } from 'react-bootstrap';
import AllPosts from './AllPosts';
import Categories from './Categories';

class MainPage extends Component {

    render() {
        return (
        <div className="MainPageComponent">
            <Jumbotron>
                <h1>Readable Posts</h1>
            </Jumbotron>
            <Grid fluid>
            <Row>
                <Col xs={8} sm={9} md={10}>
                    <Row>
                        <AllPosts {...this.props} />
                    </Row>
                </Col>
                <Col xs={4} sm={3} md={2}>                    
                    <Row className="AllCategories">
                        <Categories />                    
                    </Row>
                </Col>      
                </Row>      
            </Grid>
        </div>
        )
    }
}

export default MainPage;
