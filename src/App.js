import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import MyTable from "./components/MyTable"
import { itemFetchMovies } from './redux/actions/items';

import "./App.css"

import SimpleTable from "./components/SimpleTable"
import ReactSimpleTable from "./components/ReactSimpleTable"
import MovieRow from "./components/MovieRow"
import reducer from "./redux/reducer/items"






// let listReducer = function(state, action) {
//     if (state === undefined) {
//         state = [];
//     }
//     if (action.type === 'ADD_DATA') {
//         state.push(action.list);
//     }
//     return state;
// };
//
// let store = createStore(listReducer);
//
// let data = [{name: "a", number: 1}, {name: "b", number: 2}, {name: "c", number: 3}, {name: "d", number: 4}];
//
// store.dispatch(data);


class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         list: [],
    //     };
    // }



    componentDidMount() {
        this.props.fetchMovies();
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <MyTable/>
                <table>
                    <tbody>
                    <tr id="lineid">
                        {/*<td className="statenumber" id="statenumber">*/}
                            {/*{this.state.items.map(function (item) {*/}
                                 {/*return(*/}
                                    {/*<div>*/}
                                        {/*{item.number}*/}
                                    {/*</div>*/}
                                {/*)})}*/}
                        {/*</td>*/}

                        {/*<td className="statetitle" id="statetitle">*/}
                            {/*{this.state.items.map(function (item) {*/}
                                {/*return(*/}
                                    {/*<div>*/}
                                        {/*{item.title}*/}
                                    {/*</div>*/}
                                {/*)})}*/}
                        {/*</td>*/}

                        {/*<td>*/}
                            {/*{this.state.list.map(function (item) {*/}
                                {/*return(*/}
                                    {/*<div>*/}
                                        {/*{item.poster}*/}
                                    {/*</div>*/}
                                {/*)})}*/}
                        {/*</td>*/}

                        {/*<td className="stateyear" id="stateyear">*/}
                            {/*{this.state.items.map(function (item) {*/}
                                {/*return(*/}
                                    {/*<div>*/}
                                        {/*{item.year}*/}
                                    {/*</div>*/}
                                {/*)})}*/}
                        {/*</td>*/}

                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


App.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};


function mapStateToProps(state){
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(itemFetchMovies())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
