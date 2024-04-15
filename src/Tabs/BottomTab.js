import React from 'react';
import HomeScreen from './Screens/HomeScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import RestaurantProfile from './Screens/RestaurantProfile.js';
import RestaurantReviewsPage from './Screens/RestaurantReviewsPage.js';
import ShiftPosting from './Screens/ShiftPosting.js';
import ShiftsPosted from './Screens/ShiftsPosted.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';


/*
/In order to see whatever new screen you're working on, you need to add it here.
/Import the screen at the top of the file, then add it down below.
/If you google feather icons in react native, you can find a list of icons to use if you want to be special :)
*/



const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    //<NavigationContainer>

        <Tab.Navigator 
        initialRouteName="Logout"
        screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray'
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Feather 
                        name={'home'}
                        size={25}
                        color={focused ? 'orange' : 'black'} />)
            }}/>
            <Tab.Screen name="Profile" component={RestaurantProfile} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Feather 
                        name={'user'}
                        size={25}
                        color={focused ? 'orange' : 'black'} />)
            
            }} />
            <Tab.Screen name="ReviewsPage" component={RestaurantReviewsPage} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Feather 
                        name={'search'}
                        size={25}
                        color={focused ? 'orange' : 'black'} />)
            
            }} />
            
            <Tab.Screen name="ShiftsPosted" component={ShiftsPosted} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Feather 
                        name={'dollar-sign'}
                        size={25}
                        color={focused ? 'orange' : 'black'} />)
            
            }} />
            <Tab.Screen name="Logout" component={LoginScreen} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Feather 
                        name={'log-out'}
                        size={25}
                        color={focused ? 'orange' : 'black'} />)
            
            }} />
            
        </Tab.Navigator>
    //</NavigationContainer>
  );
}

export default Tabs;