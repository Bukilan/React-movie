import React from 'react';
import "../static/MyTable.css"
import {itemFetchMovies} from "../redux/actions/items";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";

let sel;

 const MyTable = (props) => {

    const performSearch = (value) => {
        if (value !== '') {
            let query = '&query=' + value.toString();
            props.fetchMovie(1, 'search/movie', query);
        } else {
            props.fetchMovie(1);
        }
    };

    const searchChangeHandler = (event) => {
        const searchTerm = event.target.value;
        performSearch(searchTerm)
    };

    const handleMenu = () => {
        props.fetchMovie(1);
    };

    const onSelectChange = () => {
        console.log(sel.value);
        switch (sel.value){
            case "popular": {
                props.fetchMovie(1);
                break
            }
            case "top_rated": {
                props.fetchMovie(1, "movie/top_rated");
                break
            }
            case "upcoming": {
                props.fetchMovie(1, "movie/upcoming");
                break
            }
            case "latest": {
                props.fetchMovie(1, "movie/latest");
                break
            }
        }
    }


        return (
            <tr className="header">
                <th>
                    <h1 className="header-name">
                        Movie list
                    </h1>
                </th>
                <th width="40"/>
                <th>
                    <h3 className="header-home" onClick={handleMenu}>
                        HOME
                    </h3>
                </th>
                <th width="40"/>
                <th>
                    <select ref={node => {
                        sel = node
                    }} onChange={onSelectChange}>
                        <option value="popular">Popular</option>
                        <option value="top_rated">Top Rated</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="latest">Latest</option>
                    </select>
                </th>
                <th width="1210"/>
                <th>
                    <input className="header-input" type="text" name="txt" placeholder="Enter search term"
                           onChange={searchChangeHandler}/>
                </th>

            </tr>
        )
    }


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