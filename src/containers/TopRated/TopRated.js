


import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MoviesList from '../movies/MoviesList'
import { useSelector, useDispatch } from 'react-redux'
import { get_all_top_rated_movies } from './../../store/actions/MoviesActions'
import IsEmpty from '../../utils/IsEmpty'



const TopRated = (props) => {
    const dispatch = useDispatch();
    const [_movies, set_movies] = useState([]);

    const movies_data = useSelector(state => state.TopRatedReducer.movies);

    useEffect(() => {
        if (movies_data == null && movies_data == undefined) {
            return;
        }
        set_movies(movies_data)

    }, [movies_data]);

    useEffect(() => {
        dispatch(get_all_top_rated_movies());
    }, []);
    console.warn(_movies)
    return (
        <View>
            <MoviesList movies_data={_movies} navigation={props.navigation} />
        </View>
    )
}

export default TopRated

const styles = StyleSheet.create({})
