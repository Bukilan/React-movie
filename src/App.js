import React from "react";
import { PropTypes, defaultProps }  from 'prop-types';
import { connect } from "react-redux";
import MyTable from "./components/MyTable"
import { itemFetchMovies } from './redux/actions/items';

import "./App.css"


class App extends React.Component {


    componentDidMount() {
        this.props.fetchMovie();
    }


    handleClickPlus = () => {
        this.props.fetchMovie(this.props.state.items.counter_plus);
    };

    handleClickMin = () => {
        this.props.fetchMovie(this.props.state.items.counter_min);
    };

    render() {

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
                                return(
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
                                )})}
                    </tbody>
                </table>
            </div>
        );
    }



}


App.propTypes = {
    fetchMovie: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
};

App.defaultProps = {
    list: [],
};


const mapStateToProps = (state) => ({
        list: state.list,
        counter_plus: state.counter_plus,
        counter_min: state.counter_min,
        state: state
});


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (page, method, query_value) => dispatch(itemFetchMovies(page, method, query_value))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App)