
import React from "react";



export function itemsFetchDataSuccess(movies) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        list: movies
    };
}


export function itemFetchMovies() {

    let currentCount = 1;
    function makeCounter() {
        return function() {
            return currentCount++;
        };
    }
    let counter = makeCounter();

    return (dispatch) => {

        let url = 'https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=56d793d6cea47e6ab2101f3386c7b8b6';
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let movies = [];

                for (let i = 0; i < data.results.length; i++) {
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
                dispatch(itemsFetchDataSuccess(movies));
            });
    }
}
