//TODO: HOME and cancel buttons doest make form back to "popular" value

import React from 'react';
import "../static/MyTable.css"
import {itemFetchMovies} from "../redux/actions/items";
import {connect} from "react-redux";

let sel = "popular";

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

     const yearSearch = (value) => {
        if (value.length === 4 ){
            let year = "&primary_release_year=" + value.toString();
            props.fetchMovie(1, 'discover/movie', '&sort_by=popularity.desc&include_adult=false&include_video=false', year)
        }
     };

     const yearChangeHandler = (event) => {
         const yearTerm = event.target.value;
         yearSearch(yearTerm)
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
            case "now_playing": {
                props.fetchMovie(1, "movie/now_playing");
                break
            }
        }
    };


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
                <th width="90"/>
                <th>
                    <select ref={node => {sel = node}}
                            onChange={onSelectChange}
                            className="select-form" >
                        <option value="popular">Popular</option>
                        <option value="top_rated">Top Rated</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="now_playing">Now Playing</option>
                    </select>
                </th>
                <th width="60"/>
                <th>
                    <input className="header-input-year" type="text" name="txt" placeholder="Enter search year"
                           onChange={yearChangeHandler}/>
                </th>
                <th width="930"/>
                <th>
                    <input className="header-input" type="text" name="txt" placeholder="Enter search term"
                           onChange={searchChangeHandler}/>
                </th>

            </tr>
        )
    };


const mapStateToProps = (state) => ({
    state: state,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (page, method, query_value, year) => dispatch(itemFetchMovies(page, method, query_value, year))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTable)