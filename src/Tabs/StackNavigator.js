import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from './Screens/Signup';

const Stack = createStackNavigator();

const StackNavigator=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}

export default StackNavigator;