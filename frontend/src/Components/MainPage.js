import React, {Component} from 'react';
import { Jumbotron, Row, Col, Grid } from 'react-bootstrap';
import AllPosts from './AllPosts';
import Categories from './Categories';

class MainPage extends Component {
    render() {
        const { category, sortby } = this.props.match.params;
        return (
        <div className="MainPageComponent">
            <Jumbotron>
                <h1>Readable Posts</h1>
            </Jumbotron>
            <Grid fluid>
            <Row>
                <Col xs={8} sm={8} md={10}>
                    <AllPosts {...this.props} />
                </Col>
                <Col xs={4} sm={4} md={2}>                    
                    <Row className="AllCategories">
                        <Categories category={category} sortby={sortby}/>                    
                    </Row>
                </Col>      
                </Row>      
            </Grid>
        </div>
        )
    }
}

export default MainPage;
