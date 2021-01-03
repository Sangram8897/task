import React, { useReducer, useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import MoviesListItem from './MoviesListItem'
import IsEmpty from '../../utils/IsEmpty';

export default function MoviesList(props) {
    const [_movies, set_movies] = useState([]);

    const movies_data = props.movies_data;
    useEffect(() => {
        if (movies_data == null || movies_data == undefined) {
            return;
        }
        set_movies(movies_data);
    }, [movies_data]);


    return (
        <View>
            {!IsEmpty(_movies) && <FlatList
                style={{ marginTop: 8 }}
                data={_movies}
                renderItem={({ item }) =>
                    <MoviesListItem navigation={props.navigation} movie={item}></MoviesListItem>
                }
                keyExtractor={(item, index) => index.toString()}
            />}
        </View>
    )
}
