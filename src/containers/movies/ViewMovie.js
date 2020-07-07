import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Image, StyleSheet } from 'react-native'
import Container from './../../components/Container'
import {get_movie_details} from '../../store/actions/MoviesActions'

export default function ViewMovie(props) {
    const { movieId } = props.route.params;
    const dispatch = useDispatch();
    useEffect(()=>{
        
    },[])
    get_movies_data=async()=>{
        await dispatch(get_movie_details(movieId));
    
    }
    return (
        <Container loading={false}>
            <View style={{ flex: 1 }}>
                {/* <Image
                    resizeMode='cover'
                    source={{ uri: `${movie.detail.thumbnail_url}` }}
                    style={{
                        width: '100%',
                        height: 250,
                    }}
                /> */}
                <View style={{ flex: 1, paddingHorizontal: 15, }}>

                   {/* <Text style={styles.titleText} numberOfLines={1}>{movie.title}</Text>
                  
                     <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Created by : </Text>
                        <Text style={styles.amountText}>{movie.detail.creater.profile.first_name} {movie.detail.creater.profile.last_name}</Text>
                    </View> */}

                   

                </View>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'Raleway-Bold',
        fontSize: 18,
        marginVertical: 15,
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