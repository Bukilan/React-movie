import React from "react";
import { PropTypes, defaultProps }  from 'prop-types';
import { connect } from "react-redux";
import MyTable from "./components/MyTable"
import { itemFetchMovies } from './redux/actions/items';
import { bindActionCreators } from 'redux';

import "./App.css"


class App extends React.Component {


    componentDidMount() {
        this.props.fetchMovie();


    }



    render() {
        // if (this.props.list.length === 0) return (<div>loading</div>);

        console.log('check props after componentDidMount');
        console.log(this.props.state);

        return (
            <div>
                <MyTable/>
                <table>
                    <tbody>
                    <tr id="lineid">
                        <td className="statenumber" id="statenumber">
                            {this.props.state.items.list.map(function (item) {
                                return(
                                    <div>
                                        {item.number}
                                    </div>
                                )})}
                            </td>

                            <td className="statetitle" id="statetitle">
                                {this.props.state.items.list.map(function (item) {
                                    return(
                                        <div>
                                            {item.title}
                                        </div>
                                )})}
                            </td>

                            {/*<td>*/}
                                {/*{this.props.state.items.list.map(function (item) {*/}
                                    {/*return(*/}
                                        {/*<div>*/}
                                            {/*{item.poster}*/}
                                        {/*</div>*/}
                                {/*)})}*/}
                            {/*</td>*/}

                            <td className="stateyear" id="stateyear">
                                {this.props.state.items.list.map(function (item) {
                                    return(
                                        <div>
                                            {item.year}
                                        </div>
                                )})}
                            </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }



}


App.propTypes = {
    fetchMovie: PropTypes.func.isRequired,
    list: PropTypes.array,
    date: PropTypes.object
};

App.defaultProps = {
    list: [],
};


const mapStateToProps = (state) => ({
        list: state.list,
        counter: state.counter,
        str: state.str,
        state: state
});


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: () => dispatch(itemFetchMovies())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App)