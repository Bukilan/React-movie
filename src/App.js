import React from "react";
import { PropTypes }  from 'prop-types';
import { connect } from "react-redux";
import MyTable from "./components/MyTable"
import IsLoading from "./components/isLoading"
import CancelCross from "./components/CancelCross"
import { itemFetchMovies } from './redux/actions/items';

import "./static/App.css"

let  trend_page_counter = 1;
let  search_page_counter = 1;
let  top_rated_page_counter = 1;
let  upcoming_page_counter = 1;
let  now_playing_page_counter = 1;
let  year_page_counter = 1;
let  prev_query = "";

class App extends React.Component {


    componentDidMount() {
        this.props.fetchMovie()
    }



    handleClickPlus = () => {
        switch (this.props.state.items.method) {
            case "movie/popular": {
                trend_page_counter++;
                this.props.fetchMovie(trend_page_counter);
                break
            }
            case "search/movie": {
                if (prev_query !== this.props.state.items.query.toString()) {
                    search_page_counter = 1
                }
                search_page_counter++;
                let query = '&query=' + this.props.state.items.query.toString();
                this.props.fetchMovie(search_page_counter, 'search/movie', query);
                prev_query = this.props.state.items.query.toString();
                break
            }
            case "movie/top_rated": {
                top_rated_page_counter++;
                this.props.fetchMovie(top_rated_page_counter, "movie/top_rated");
                break
            }
            case "movie/upcoming": {
                upcoming_page_counter++;
                this.props.fetchMovie(upcoming_page_counter, "movie/upcoming");
                break
            }
            case "movie/now_playing": {
                now_playing_page_counter++;
                this.props.fetchMovie(now_playing_page_counter, "movie/now_playing");
                break
            }
            case "discover/movie": {
                year_page_counter++;
                let year = "&primary_release_year=" + this.props.state.items.year.toString();
                this.props.fetchMovie(year_page_counter, "discover/movie", '&sort_by=popularity.desc&include_adult=false&include_video=false', year);
                break
            }
        }
    };

    handleClickMin = () => {
        switch (this.props.state.items.method) {
            case "movie/popular": {
                if (trend_page_counter >= 2) {
                    trend_page_counter--
                }
                this.props.fetchMovie(trend_page_counter);
                break
            }
            case "search/movie": {
                if(search_page_counter >= 2) {search_page_counter--}
                this.props.fetchMovie(search_page_counter);
                let query = '&query=' + this.props.state.items.query.toString();
                this.props.fetchMovie(search_page_counter, 'search/movie', query);
                prev_query = this.props.state.items.query.toString();
                break
            }
            case "movie/top_rated": {
                if (top_rated_page_counter >= 2) {
                    top_rated_page_counter--
                }
                this.props.fetchMovie(top_rated_page_counter, "movie/top_rated");
                break
            }
            case "movie/upcoming": {
                if (upcoming_page_counter >= 2) {
                    upcoming_page_counter--
                }
                this.props.fetchMovie(upcoming_page_counter, "movie/upcoming");
                break
            }
            case "movie/now_playing": {
                if (now_playing_page_counter >= 2) {
                    now_playing_page_counter--
                }
                this.props.fetchMovie(now_playing_page_counter, "movie/now_playing");
                break
            }
            case "discover/movie": {
                if (year_page_counter >= 2) {
                    year_page_counter--
                }
                let year = "&primary_release_year=" + this.props.state.items.year.toString();
                this.props.fetchMovie(year_page_counter, "discover/movie", '&sort_by=popularity.desc&include_adult=false&include_video=false', year);
                break
            }
        }
    };

    render() {

        if (this.props.state.items.list.length === 0) {
            return (
                <div>
                    <CancelCross/>
                    <IsLoading/>
                </div>
            )
        }


        return (
            <div>
                <MyTable/>
                <div className="arrows">
                    <span onClick={this.handleClickMin} className="arrow arrow-left"/>
                    <span onClick={this.handleClickPlus} className="arrow arrow-right"/>
                </div>

                <table className="data_table">
                    <tbody>
                    {this.props.state.items.list.map(function (item) {
                        return (
                            <tr className="rt-table">

                                <td className="row_poster">
                                    {item.poster}
                                </td>

                                <td className="row_title">
                                    <h2 className="elem_title">
                                        {item.title}
                                    </h2>
                                </td>

                                <td className="row_year">
                                    <h3 className="elem_year">
                                        {item.year}
                                    </h3>
                                </td>

                                <td className="row_description">
                                    <p className="elem_description">
                                        {item.description}
                                    </p>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

App.propTypes = {
    fetchMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
        // list: state.list,
        method: state.method,
        query: state.query,
        year: state.year,
        state: state,
});


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (page, method, query_value, year) => dispatch(itemFetchMovies(page, method, query_value, year))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App)