import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../containers/Home';


const Stack = createStackNavigator();


const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}


export default Navigation;