//TODO: HOME and cancel buttons doest make form back to "popular" value

import React from 'react';
import "../static/MyTable.css"
import {itemFetchMovies} from "../redux/actions/items";
import {connect} from "react-redux";
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

let sel = '';
let genre = '';

const genreCustomStyles = {
    control: (base, state) => ({
        ...base,
        background: "#000",
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        borderColor: "white",
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
            borderColor: "cyan",
        }
    }),
    menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0
    }),
    menuList: base => ({
        ...base,
        padding: 0
    }),
    option: base => ({
        background: "#000",
        textAlign: "left",
        padding: "10px",
    })
};

const genre_options = [
    { value: '28', label: 'Action' },
    { value: '12', label: 'Adventure' },
    { value: '16', label: 'Animation' },
    { value: '35', label: 'Comedy' },
    { value: '80', label: 'Crime' },
    { value: '99', label: 'Documentary' },
    { value: '18', label: 'Drama' },
    { value: '10751', label: 'Family' },
    { value: '14', label: 'Fantasy' },
    { value: '36', label: 'History' },
    { value: '27', label: 'Horror' },
    { value: '10402', label: 'Music' },
    { value: '9648', label: 'Mystery' },
    { value: '10749', label: 'Romance' },
    { value: '878', label: 'Science Fiction' },
    { value: '10770', label: 'TV Movie' },
    { value: '53', label: 'Thriller' },
    { value: '10752', label: 'War' },
    { value: '37', label: 'Western' },
];

const selectCustomStyles = {
    control: (base, state) => ({
        ...base,
        background: "#000",
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        borderColor: "white",
        boxShadow: state.isFocused ? null : null,
        color: "white",
        "&:hover": {
            borderColor: "cyan",
        }
    }),

    menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0
    }),
    menuList: base => ({
        ...base,
        padding: 0
    }),
    option: base => ({
        background: "#000",
        color: "white",
        textAlign: "left",
        padding: "10px",
    }),
    singleValue: base => ({
        fontSize: 14,
        color: "white"
    }),
};

const select_options = [
    { value: 'popular', label: 'Popular' },
    { value: 'top_rated', label: 'Top Rated' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'now_playing', label: 'Now Playing' },
];


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
        window.location.reload();
    };

    const onSelectChange = () => {
        switch (sel.state.value.value){
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

    const onGenreChange = () => {
        if ( genre.state.value !== null){
            if (  genre.state.value.length !== 0){
                let str;
                genre.state.value.forEach((item) => {str = str +item.value + "%2C"});
                str = str.split("undefined")[1].slice(0,-3);
                str = "&with_genres=" + str;
                console.log(str);
                props.fetchMovie(1, 'discover/movie', '&sort_by=popularity.desc&include_adult=false&include_video=false', str)
            } else { alert("please, choose genre")}
        } else { alert("please, choose genre")}


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
                <th width="100"/>
                <th>
                    <Select
                        ref={node => {genre = node}}
                        className="genre-form"
                        closeMenuOnSelect={false}
                        components={makeAnimated()}
                        isMulti={true}
                        options={genre_options}
                        styles={genreCustomStyles}
                    />
                </th>
                <th width="10"/>
                <th>
                    <button onClick={onGenreChange} className="genre-button">Submit</button>
                </th>
                <th width="120"/>
                <th>
                    <Select
                        ref={node => {sel = node}}
                        className="sel-form"
                        closeMenuOnSelect={true}
                        autoFocus = {true}
                        components={makeAnimated()}
                        options={select_options}
                        styles={selectCustomStyles}
                        defaultValue={select_options[0]}
                    />
                </th>
                <th width="10"/>
                <th>
                    <button onClick={onSelectChange} className="select-button">Submit</button>
                </th>
                <th width="90"/>
                <th>
                    <input className="header-input-year" type="text" name="txt" placeholder="Enter search year"
                           onChange={yearChangeHandler}/>
                </th>
                <th width="150"/>
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