import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Container from '../../components/Container'
import MoviesList from './MoviesList';
import { get_all_genre,get_all_movies } from './../../store/actions/MoviesActions'
import { Picker, Icon } from 'native-base';
import IsEmpty from '../../utils/IsEmpty';
export default function Movies(props) {
    const dispatch = useDispatch();
    const [_loading, set_loading] = useState(false);
    const [_genres, set_genres] = useState([]);
      const [_status, set_status] = useState('');


    useEffect(() => {
        dispatch(get_all_genre());
    }, []);
    const movies_data = useSelector(state => state.MoviesReducer);
    useEffect(() => {
        if (movies_data.genre == null) {
            return;
        }
        set_genres(movies_data.genre)
        
    }, [movies_data]);

    useEffect(()=>{
       if(!IsEmpty(_genres)){
        dispatch(get_all_movies(movies_data.genre[0].id))
       }
    },[_genres])
    return (
        <Container loading={_loading}>
           
            <View style={{height:70,paddingHorizontal:10,width:'100%',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
            <Text>Select Genre</Text>
            <View style={{width:'60%'}}>
           {!IsEmpty(_genres) && <Picker
                    note
                    mode="dropdown"
                    selectedValue={_status}
                    onValueChange={async itemValue => {
                        let _newstatus_ = await _genres.filter(function(
                          item,
                        ) {
                          return item.name === itemValue;
                        });
                       set_status(_newstatus_[0].value)
                      }}
                    style={{ width: '100%', height: 60 }}
                    iosIcon={
                        <Icon name="arrow-dropdown-circle" style={{ fontSize: 25 }} />
                    }>
                    {_genres.map((x, i) => {
                        return (
                            <Picker.Item label={x.name} key={i} value={x.name} />
                        );
                    })}
                </Picker>}
                </View>
            </View>
            <MoviesList navigation={props.navigation}></MoviesList>
        </Container>
    )
}
