import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

class SearchBar extends Component {
    
    handleFormSubmit = function({query}) {
        console.log('try to handle submit query', query)
        //need to nav to new route
    }

    renderInput(field) {
        return <input placeholder="Search DailySmarty" {...field.input}/>
    }

    render() {
        
        const { handleSubmit } = this.props;

        return (
            <form className='search-bar' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput}/>
            </form>
        );
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar)
export default SearchBar;