import { url,api_key } from 'config';
import { getData } from 'api';
import { errorHandler } from 'api/message';

const NAME = 'MOVIES';

export const TAG = {
    LOADING: `${NAME}/LOADING`,
    GETALLGENRE: `${NAME}/GETALLGENRE`,
    GETALLMOVIES: `${NAME}/GETALLMOVIES`,
    GETMOVIE: `${NAME}/GETMOVIE`,
};

export const get_all_genre = data => async dispatch => {

    await dispatch({ type: TAG.LOADING });

    const headers = await {
        'Content-Type': 'application/json',
    };

    const result = await getData(`${url}/3/genre/movie/list?api_key=${api_key}`, headers);

    if (result.status === 200) {

        const res = await result.json();
        dispatch({ type: TAG.GETALLGENRE, genres: res.genres });
        console.warn(res)

    } else {
        errorHandler(result);
        return false;
    }
};

export const get_all_movies = genre_id => async dispatch => {

    //await dispatch({ type: TAG.LOADING });

    const headers = await {
        'Content-Type': 'application/json',
    };

    const result = await getData(`${url}/3/genre/${genre_id}/movies?api_key=${api_key}`, headers);

    if (result.status === 200) {

        const res = await result.json();
        dispatch({ type: TAG.GETALLMOVIES, movies: res.results });
        console.warn('kkm',res)

    } else {
        errorHandler(result);
        return false;
    }
};

export const get_movie_details = movie_id => async dispatch => {

    //await dispatch({ type: TAG.LOADING });

    const headers = await {
        'Content-Type': 'application/json',
    };

    const result = await getData(`${url}/3/movie/${movie_id}?api_key=${api_key}`, headers);
  
    if (result.status === 200) {

        const res = await result.json();
        return res

    } else {
        errorHandler(result);
        return false;
    }
};

//case TAG.GETMOVIE:
// return {
//     ...state,
//     movie: action.movie,
//     movie_loading: false
// };