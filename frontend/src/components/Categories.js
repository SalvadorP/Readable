import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { getAllCategories } from '../actions/Categories';

class Categories extends Component {
    // TODO: Get all the categories and render them in a select.
    componentWillMount() {
        console.log('CATEGORIES component will mount');
        // FIXME: Which is better? will mount or did mount?
        this.props.getAllCategories();
    }

    submitHandler(e) {
        console.log('=== Categories submitHandler ===');
        // TODO: When changing categories, reload the posts filtered by category.
        // Alter the state to avoid a request? Or better to ask the server filtering by cat?        
        console.log(e.target.value);
        console.log('=== ======================== ===');
    }

    render() {
        const { categories = [] } = this.props;
        return (
            <div className="Categories">
            <form>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Categories</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={this.submitHandler}>
                        { _.map(categories, categorie => (
                            <option key={categorie.path} value={categorie.path}>{categorie.name}</option>                      
                        )) }   
                    </FormControl>
                </FormGroup>
            </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    if (state !== undefined) {
        const categories = state.categories;
        return {categories};
    }
    return {};
}

export default connect(mapStateToProps, {
    getAllCategories,
})(Categories);
