import { TAG } from '../actions/MoviesActions';

const getDefaultState = () => ({
    movies: null,
    genre: null,
    loading: false,
    movie:null
});

export default function (state = getDefaultState(), action) {
    if (typeof state === 'undefined') {
        return getDefaultState();
    }
    switch (action.type) {

        case TAG.LOADING:
            return {
                loading: true
            };

        case TAG.GETALLGENRE:
            return {
                ...state,
                genre: action.genres,
            };
        case TAG.GETALLMOVIES:
            return {
                ...state,
                movies: action.movies,
                loading: false
            };

        default:
            return state;
    }
}