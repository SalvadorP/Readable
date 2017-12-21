import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Row, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { getAllCategories } from '../actions/Categories';

class Categories extends Component {
    // TODO: Get all the categories and render them in a select.
    componentWillMount() {
        console.log('CATEGORIES component will mount');
        // FIXME: Which is better? will mount or did mount?
        this.props.getAllCategories();
    }

    submitHandler(e) {
        console.log(e);
    }

    render() {
        const { categories = [] } = this.props;
        return (
            <div className="Categories">
            <form onChange={this.submitHandler()}>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Categories</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        { _.map(categories, categorie => (
                            <option value="{categorie.path}">{categorie.name}</option>                      
                        )) }   
                    </FormControl>
                </FormGroup>
            </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    if (state !== undefined) {
        const categories = state.categories;
        return {categories};
    }
    return {};
}

export default connect(mapStateToProps, {
    getAllCategories,
})(Categories);
