const getDefaultState = () => ({
    movies: null,
    genre: null,
    loading: false,
    movie: null
});

export default function (state = getDefaultState(), action) {
    if (typeof state === 'undefined') {
        return getDefaultState();
    }
    switch (action.type) {

        case 'TOP_RATED_MOVIES_LOADING':
            return {
                ...state,
                loading: true
            };


        case 'TOP_RATED_MOVIES_LOADED':
            return {
                ...state,
                movies: action.movies,
                loading: false
            };

        default:
            return state;
    }
}