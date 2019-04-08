import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class ReactSimpleTable extends Component {


    // componentDidMount() {
    //     let currentCount = 1;
    //     function makeCounter() {
    //         return function() {
    //             return currentCount++;
    //         };
    //     }
    //     let counter = makeCounter();
    //
    //
    //     let url = 'https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=56d793d6cea47e6ab2101f3386c7b8b6';
    //     fetch(url, {method: 'GET'}).then(response => response.json()).then(data => {
    //
    //         console.log(data);
    //         let movies = [];
    //
    //         for (let i = 0; i< data.results.length; i++){
    //             let image_url = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
    //             movies.push({
    //                 number: counter(),
    //                 poster: <img
    //                     src={image_url}
    //                     alt="new"
    //                     style={{width: 50, height: 50, position: 'absolute'}}
    //                 />,
    //                 title: data.results[i].original_title,
    //                 year: data.results[i].release_date
    //             })
    //         }
    //         console.log(movies);
    //         this.setState({movie: movies});
    //     });
    // }


    render() {



        const my_columns = [
            {
                Header: '№',
                accessor: 'number',
                style: {
                    textAlign: "centre"
                },
                width: 30,
                minWidth:10,
                maxWidth:50
            },
            {
                Header: 'Poster',
                accessor: 'poster'
            },
            {
                Header: 'Title',
                accessor: 'title'
            },
            {
                Header: 'Year',
                accessor: 'year'
            }
        ];



        return (
            <div>
                <ReactTable
                    data={this.state.movie}
                    columns={my_columns}
                    defaultPageSize = {20}
                    pageSizeOptions = {[5, 10, 20]}
                />
            </div>
        )

    }
}

export default ReactSimpleTable;