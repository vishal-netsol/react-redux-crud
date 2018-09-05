import React from "react";
import { connect } from "react-redux";
import { delArticle } from "../actions/index";
import {Link} from 'react-router-dom';

const mapStateToProps = state => {
    return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
    return {
        delArticle: id => dispatch(delArticle(id))
    };
};

class ConnectedList extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteArticle(id) {
        this.props.delArticle(id)
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map((el, i) => (
                    <div key={i}>
                        <Link to={{ pathname: '/edit',  data: {key: el.id} }}>
                            <li className="list-group-item" key={el.id}>
                                {el.title}
                            </li>
                        </Link>
                        <a href="javascript:void(0)" key="an_{el.id}" onClick={this.deleteArticle.bind(this, el.id)}> X</a>
                    </div>
                ))}
            </ul>
        );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;