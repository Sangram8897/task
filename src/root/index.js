import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux'
import store from 'store/store/configureStore';

import Color from 'themes/Color';
import ViewMovie from '../containers/movies/ViewMovie';
import TabNavigator from './TabNavigator';




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
                        headerShown: false,
                        gestureEnabled: false
                    }}
                >
                    <>
                        <Stack.Screen
                            name="TabNavigator"
                            options={{ title: 'TabNavigator' }}
                            component={TabNavigator}
                            options={{ headerShown: false }}
                        />


                        <Stack.Screen
                            name="ViewMovie"

                            component={ViewMovie}
                            options={{ headerShown: true, title: '' }}
                        />

                    </>

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
