import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import Container from './../../components/Container'
import { get_movie_details } from '../../store/actions/MoviesActions'
import IsEmpty from '../../utils/IsEmpty'
import { url, api_key } from 'config';

export default function ViewMovie(props) {
    const { movieId } = props.route.params;
    const dispatch = useDispatch();

    const [_movies_details, set_movies_details] = useState({});
    useEffect(() => {
        get_movies_data();
    }, [])
    get_movies_data = async () => {
        let res = await dispatch(get_movie_details(movieId));
        console.warn(res)
        set_movies_details(res)
    }
    return (
        <Container loading={false}>
            {!IsEmpty(_movies_details) &&

                <View style={{ flex: 1, }}>
                    <ImageBackground
                        source={{ uri: `https://image.tmdb.org/t/p/w500${_movies_details.backdrop_path}` }}
                        style={{ height: 300, width: '100%', resizeMode: 'contain' }}>
                    </ImageBackground>
                    <View style={{ flex: 1, padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                resizeMode='stretch'
                                source={{ uri: `https://image.tmdb.org/t/p/w500${_movies_details.poster_path}` }}
                                style={{
                                    width: 60,
                                    height: 60,

                                }}
                            />
                            <View style={{ paddingHorizontal: 10, flex: 1 }}>
                                <Text style={styles.titleText} >{_movies_details.title}</Text>
                            </View>
                        </View>
                        <Text style={styles.creatorNameText}>{_movies_details.overview}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Language : </Text>
                            <Text style={styles.amountText}>{_movies_details.original_language}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Popularity : </Text>
                            <Text style={styles.amountText}>{_movies_details.popularity}</Text>
                        </View>
                    </View>
                </View>
            }
        </Container>
    )
}


const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'Raleway-Bold',
        fontSize: 18,
        color: 'black'
    },
    subtitleText: {
        fontFamily: 'Raleway-Bold',
        fontSize: 18,
        marginVertical: 15,
        color: 'gray'
    },
    creatorNameText: {
        fontSize: 12,
        marginTop: 15,
        color: 'black',
        fontFamily: 'Poppins-Regular',
    },
    amountText: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,
    },

});
