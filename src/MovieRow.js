import React, { Component } from 'react'

class MovieRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url
    }


    componentDidMount() {
        let currentCount = 1;

        function makeCounter() {
            return function () {
                return currentCount++;
            };
        }

        let counter = makeCounter();


        let url = 'https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=56d793d6cea47e6ab2101f3386c7b8b6';
        fetch(url, {method: 'GET'}).then(response => response.json()).then(data => {

            console.log(data);
            let movies = [];

            for (let i = 0; i < data.results.length; i++) {
                let image_url = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
                movies.push({
                    number: counter(),
                    poster: <img
                        src={image_url}
                        alt="new"
                        style={{width: 50, height: 50, position: 'absolute'}}
                    />,
                    title: data.results[i].original_title,
                    year: data.results[i].release_date
                })
            }
            this.setState({movie: movies});
            console.log(this.state.movie)
        });
    }

        render()
            {
            return (
                <table>
                    <tbody>
                    <tr>
                        <td>
                            {this.props.number}
                        </td>

                        <td>
                            {this.props.poster}
                        </td>

                        <td>

                        </td>
                            {this.props.title}
                        <td>
                            {this.props.year}
                        </td>

                    </tr>
                    </tbody>
                </table>
                )
            }
}

export default MovieRow