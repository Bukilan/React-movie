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



    render() {
        // if (this.props.list.length === 0) return (<div>loading</div>);

        return (
            <div>
                <MyTable/>
                <table>
                    <tbody>


                            {this.props.state.items.list.map(function (item) {
                                return(
                                    <tr id="lineid">
                                        <td className="row_number">
                                            <h3 className="elem_number">
                                                {item.number}
                                            </h3>
                                        </td>

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
        state: state
});


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: () => dispatch(itemFetchMovies())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App)