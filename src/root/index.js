import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux'
import store from 'store/store/configureStore';

import Color from 'themes/Color';
import Movies from '../containers/movies';
import ViewMovie from '../containers/movies/ViewMovie';




const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: Color.primary,
                        },
                        headerTintColor: '#FFFFFF',
                        headerTitleStyle: {
                            fontSize: 18,
                            fontFamily: 'Poppins-Medium',
                        },
                        headerShown: true,
                        gestureEnabled: false
                    }}
                >
                    <>
                        <Stack.Screen
                            name="Movies"
                            options={{ title: 'Movies' }}
                            component={Movies}
                            //options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ViewMovie"
                            options={{ title: 'ViewMovie' }}
                            component={ViewMovie}
                            //options={{ headerShown: false }}
                        />
                
                    </>

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
