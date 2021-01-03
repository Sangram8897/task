import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MoviesList from '../movies/MoviesList'
import { useSelector, useDispatch } from 'react-redux'
import { get_all_now_playing_movies } from './../../store/actions/MoviesActions'
import IsEmpty from '../../utils/IsEmpty'
import { TextInput } from 'react-native-gesture-handler'



const NowPlaying = (props) => {
    const dispatch = useDispatch();
    const [_movies, set_movies] = useState([]);
    const [search, setSearch] = useState('');
    const [_filtered_movies, set_Filtered_movies] = useState([]);



    const movies_data = useSelector(state => state.NowPlayingReducer.movies);

    useEffect(() => {
        if (movies_data == null && movies_data == undefined) {
            return;
        }
        set_movies(movies_data)

    }, [movies_data]);

    useEffect(() => {
        dispatch(get_all_now_playing_movies());
    }, []);

    useEffect(() => {
        if (!IsEmpty(search)) {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&page=2&api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.warn('responseJson', responseJson)
                    if (!IsEmpty(responseJson.results)) {
                        set_Filtered_movies(responseJson.results);
                    }
                    else {
                        set_Filtered_movies([]);
                    }

                })
                .catch((error) => {
                    console.error(error);
                    set_Filtered_movies([]);
                });
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            set_Filtered_movies([]);
        }
    }, [search]);



    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => setSearch(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
            />
            {IsEmpty(search) && IsEmpty(_filtered_movies) && !IsEmpty(_movies) &&
                <MoviesList movies_data={_movies} navigation={props.navigation} />
            }
            {(!IsEmpty(_filtered_movies) && !IsEmpty(search)) &&
                <MoviesList movies_data={_filtered_movies} navigation={props.navigation} />
            }
        </View>
    )
}

export default NowPlaying

const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
})
