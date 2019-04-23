import React from "react";
import { PropTypes }  from 'prop-types';
import { connect } from "react-redux";
import MyTable from "./components/MyTable"
import IsError from "./components/isError"
import CancelCross from "./components/CancelCross"
import { itemFetchMovies } from './redux/actions/items';

import "./static/App.css"

let  trend_page_counter = 1;
let  search_page_counter = 1;
let  prev_query = "";

class App extends React.Component {


    componentDidMount() {
        this.props.fetchMovie();
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
        }
    };

    render() {

        console.log(this.props.state.items.list);


        if (this.props.state.items.list.length === 0) {
            return (
                <div>
                    <CancelCross/>
                    <IsError/>
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
    // list: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
        // list: state.list,
        method: state.method,
        query: state.query,
        state: state,

});


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (page, method, query_value) => dispatch(itemFetchMovies(page, method, query_value))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App)