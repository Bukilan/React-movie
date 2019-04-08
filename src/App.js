import React from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import MyTable from "./MyTable"
import SimpleTable from "./SimpleTable"
import ReactSimpleTable from "./ReactSimpleTable"
import MovieRow from "./MovieRow"
import reducer from "./reducer/index"
import store from "./store"

import "./App.css"

// store.dispatch({ type: 'RELOAD_MOVIES', payload: 'suka' });

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

    constructor(props) {
        super(props);

        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        let currentCount = 1;
        function makeCounter() {
            return function() {
                return currentCount++;
            };
        }
        let counter = makeCounter();


        let url = 'https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=56d793d6cea47e6ab2101f3386c7b8b6';
        fetch(url, {method: 'GET'}).then(response => response.json()).then(data => {

            console.log(data);
            let movies = [];

            for (let i = 0; i< data.results.length; i++){
                let image_url = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
                movies.push({
                    key: {i},
                    number: counter(),
                    poster: <img
                        src={image_url}
                        alt="new"
                        style={{width: 50, height: 50}}
                    />,
                    title: data.results[i].original_title,
                    year: data.results[i].release_date
                })
            }
            console.log(movies);
            this.setState({list: movies});
            store.dispatch({ type: 'RELOAD_MOVIES', payload: movies });
        });
    }

    render() {
        return (
            <div>
                <MyTable/>
                <table>
                    <tbody>
                    <tr id="lineid">
                        <td className="statenumber" id="statenumber">
                            {this.state.list.map(function (item) {
                                 return(
                                    <div>
                                        {item.number}
                                    </div>
                                )})}
                        </td>

                        <td className="statetitle" id="statetitle">
                            {this.state.list.map(function (item) {
                                return(
                                    <div>
                                        {item.title}
                                    </div>
                                )})}
                        </td>

                        {/*<td>*/}
                            {/*{this.state.list.map(function (item) {*/}
                                {/*return(*/}
                                    {/*<div>*/}
                                        {/*{item.poster}*/}
                                    {/*</div>*/}
                                {/*)})}*/}
                        {/*</td>*/}

                        <td className="stateyear" id="stateyear">
                            {this.state.list.map(function (item) {
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


function mapStateToProps(state){
    return {
        list: state.list
    }
}


export default connect(mapStateToProps)(App)
