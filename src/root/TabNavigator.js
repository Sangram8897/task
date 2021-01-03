import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NowPlaying from '../containers/NowPlaying/NowPlaying';
import TopRated from '../containers/TopRated/TopRated';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Now Playing':
      return 'Home';
    case 'Top Rated':
      return 'Profile';

  }
}

const Tab = createBottomTabNavigator();
export const iconSize = 25;
export default function TabNavigator({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Now Playing') {
            iconName = require('./user.png');
          } else if (route.name === 'Top Rated') {
            iconName = require('./user.png');
          }
          return (
            <View style={{ width: 24, height: 24, marginTop: 10 }}>
              <Image
                resizeMode="stretch"
                source={iconName}
                style={{
                  width: iconSize,
                  height: iconSize,
                  tintColor: focused ? 'blue' : 'grey',
                }}
              />
              {  route.name == 'Home' && <View
                style={{
                  // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
                  position: 'absolute',
                  right: -6,
                  top: -3,
                  backgroundColor: 'red',
                  borderRadius: 6,
                  width: 12,
                  height: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                  4
            </Text>
              </View>}
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
        labelStyle: {
          fontSize: 12,
          //   fontFamily: 'Poppins-Medium',
        },
        style: { height: 60 },
      }}>
      <Tab.Screen name="Now Playing" component={NowPlaying} />
      <Tab.Screen name="Top Rated" component={TopRated} />
    </Tab.Navigator>
  );
}

/**
 *
 ## When Dynamically change icons of Tabbar

 * <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
 */