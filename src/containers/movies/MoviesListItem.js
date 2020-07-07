import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'

export default function MoviesListItem({ movie, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ViewMovie',{ movieId: movie.id,})}
      style={{ flex: 1, padding: 10, flexDirection: 'row' ,alignItems:'center'}}>
<Image
                    resizeMode='stretch'
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={{
                        width: 60,
                        height: 60,
                        marginRight:15
                    }}
                />
  <Text style={styles.titleText} numberOfLines={1}>{movie.title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 16,
    color: 'black'
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