
import React from "react";

export function itemFetchMovies(page = 1, method = 'movie/popular', query_value='', year='') {
    return function (dispatch) {
        console.log('https://api.themoviedb.org/3/' + method + '?api_key=56d793d6cea47e6ab2101f3386c7b8b6&language=en-US' + query_value + '&page=' + page.toString() + year);
         return fetch('https://api.themoviedb.org/3/' + method + '?api_key=56d793d6cea47e6ab2101f3386c7b8b6&language=en-US' + query_value + '&page=' + page.toString() + year, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let movies = [];

                let currentCount = 1;
                function makeCounter() {
                     return function() {
                        return currentCount++;
                    };
                }

                let counter = makeCounter();
                for (let i = 0; i < data.results.length; i++) {
                    let image_url = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
                    movies.push({
                        key: {i},
                        number: counter(),
                        poster: <img
                            className="elem_poster"
                            src={image_url}
                            alt="new"
                        />,
                        title: data.results[i].original_title,
                        year: new Date(Date.parse(data.results[i].release_date)).toDateString(),
                        description: data.results[i].overview
                    })
                }
                console.log('fetch data here');
                console.log(movies);
                let search_year = '';
                if ( year.split('=')[0] === "&primary_release_year"){
                    search_year = year.split('=')[1];
                    console.log(search_year[1])
                }
                if ( year.split('=')[0] === "&with_genres"){
                    search_year = year.split('=')[1];
                    console.log(search_year)
                }
                let curr_method = method;
                let curr_query = query_value.split('=')[1];
                    dispatch(
                        {
                            type: 'ITEMS_FETCH_DATA_SUCCESS',
                            payload: movies,
                            payload_method: curr_method,
                            payload_query: curr_query,
                            payload_year: search_year,
                        }
                    );
            });
    }
}
