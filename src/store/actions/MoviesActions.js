import { getData } from 'api';


export const get_all_now_playing_movies = catagory => async dispatch => {

    //await dispatch({ type: TAG.LOADING });

    const headers = await {
        'Content-Type': 'application/json',
    };

    const result = await getData(`https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`, headers);

    if (result.status === 200) {

        const res = await result.json();
        dispatch({ type: 'NOW_PLAYING_MOVIES_LOADED', movies: res.results });
        console.warn('kkm', res)

    } else {
        return false;
    }
};

export const get_all_top_rated_movies = catagory => async dispatch => {

    //await dispatch({ type: TAG.LOADING });

    const headers = await {
        'Content-Type': 'application/json',
    };

    const result = await getData(`https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`, headers);

    if (result.status === 200) {

        const res = await result.json();
        dispatch({ type: 'TOP_RATED_MOVIES_LOADED', movies: res.results });
        console.warn('kkm', res)

    } else {
        return false;
    }
};




export const get_movie_details = movie_id => async dispatch => {

    //await dispatch({ type: TAG.LOADING });

    const headers = await {
        'Content-Type': 'application/json',
    };

    const result = await getData(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`, headers);

    if (result.status === 200) {

        const res = await result.json();
        return res

    } else {
        return false;
    }
};




