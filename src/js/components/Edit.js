import React, { Component } from "react";
import { connect } from "react-redux";
import { editArticle } from "../actions/index";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const mapDispatchToProps = dispatch => {
    return {
        editArticle: article => dispatch(editArticle(article))
    };
};

const mapStateToProps = (state, ownProps) => {
    return state.articles.filter(e => e.id ==  ownProps.location.data.key)[0];
};

class EditArticleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = this.props.id;
        this.props.editArticle({title, id});
        this.props.history.push('/');
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
        </button>
            </form>
        );
    }
}

EditArticleForm.contextTypes = {
    router: PropTypes.object
};

const Edit = connect(mapStateToProps, mapDispatchToProps)(EditArticleForm);
export default Edit;