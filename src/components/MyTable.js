import React from 'react';
import "../MyTable.css"
import {itemFetchMovies} from "../redux/actions/items";
import {connect} from "react-redux";

class MyTable extends React.Component{

    performSearch(value) {
        if (value !== '') {
            let query = '&query=' + value.toString();
            this.props.fetchMovie(1, 'search/movie', query);
        }
    }

    searchChangeHandler(event){
        console.log(event.target.value);
        const boundObject = this;
        const searchTerm = event.target.value;
        boundObject.performSearch(searchTerm)
    };

    handleMenu(){
        console.log('213');
        this.props.fetchMovie();
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
                    <h3 className="header-home" onClick={this.handleMenu}>
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


const mapStateToProps = (state) => ({
    list: state.list,
    state: state
});


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (page, method, query_value) => dispatch(itemFetchMovies(page, method, query_value))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyTable)