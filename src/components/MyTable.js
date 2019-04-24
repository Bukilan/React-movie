import React from 'react';
import "../static/MyTable.css"
import {itemFetchMovies} from "../redux/actions/items";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";

class MyTable extends React.Component{

    performSearch(value) {
        if (value !== '') {
            let query = '&query=' + value.toString();
            this.props.fetchMovie(1, 'search/movie', query);
        } else {
            this.props.fetchMovie(1);
        }
    }

    searchChangeHandler(event){
        const boundObject = this;
        const searchTerm = event.target.value;
        boundObject.performSearch(searchTerm)
    };

    handleMenu(){
        this.props.fetchMovie(1);
    }


    render() {
        return(
            <tr className="header">
                <th >
                    <h1 className="header-name">
                        Movie list
                    </h1>
                </th>
                <th width="40"/>
                <th>
                    <h3 className="header-home" onClick={this.handleMenu.bind(this)}>
                        HOME
                    </h3>
                </th>
                <th width="1320"/>
                <th>
                    <input  className="header-input" type="text" name="txt" placeholder="Enter search term" onChange={this.searchChangeHandler.bind(this)}/>
                </th>

            </tr>
        )
    }
}

MyTable.propTypes = {
    list: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    method: state.method,
    query: state.query,
    state: state,

});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (page, method, query_value) => dispatch(itemFetchMovies(page, method, query_value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTable)