import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from "./src/Tabs/BottomTab.js";
import ShiftPosting from "./src/Tabs/Screens/ShiftPosting.js";
import RestaurantReviewsPage from './src/Tabs/Screens/RestaurantReviewsPage.js';
import Login from './src/Tabs/Screens/Login.js';
import Signup from './src/Tabs/Screens/Signup.js';
import HomeScreen from './src/Tabs/Screens/HomeScreen.js';
import Example from './src/Tabs/Screens/Example.js';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      >
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="ShiftPosting" component={ShiftPosting} options={{title: 'Shift Posting', headerStyle: {backgroundColor: '#8BC2C6'}}} />
        <Stack.Screen name="RestaurantReviewsPage" component={RestaurantReviewsPage} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default App;



/*
/If you want to add a page to navigation, go the the tabs folder and go to bottomTab.js
/you also don't need to import the page here, just add it to the bottomTab.js file
*/

