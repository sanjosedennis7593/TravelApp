import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {  Icon } from 'react-native-elements';

import Home from '@app/containers/Home';
import Profile from '@app/containers/Profile';

// RIDE
import CreateRide from '@app/containers/Ride/CreateRide';

// STYLES
import colors from '@app/styles/colors';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
      shadowOpacity: 0,
    },
    headerBackTitleVisible: false,
    headerTintColor: colors.backgroundColor1,
    headerTitleAllowFontScaling:true,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeftContainerStyle: { paddingLeft: 8 },
    headerRightContainerStyle: { paddingRight: 16 },
  }

const HomeNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
             <Stack.Screen
                name="CreateRide"
                component={CreateRide}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}


const ProfileNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = focused ? 'checkbox-blank-circle' : 'checkbox-blank-circle-outline'; 
 
                    if (route.name === 'Home') {
                      iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Feed') {
                      iconName = focused ? 'newspaper' : 'newspaper';
                    } else if (route.name === 'Profile') {
                      iconName = focused ? 'account' : 'account';
                    }
                    return <Icon type="material-community" name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.primaryText,
            }}
        >
            <Tab.Screen name="Home" component={HomeNavigation} />
            <Tab.Screen name="Feed" component={HomeNavigation} />
            <Tab.Screen name="Profile" component={ProfileNavigation} />
        </Tab.Navigator>
    )
}



const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
            <Stack.Screen name="Home" component={TabNavigation}
                options={{
                    headerShown: false,
                    animationEnabled: false
                }}
            />
        </Stack.Navigator>
    )
}


export default Navigation;