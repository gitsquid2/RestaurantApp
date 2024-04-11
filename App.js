
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import RestaurantProfile from './Screens/RestaurantProfile'; 
import RestaurantReviewsPage from './Screens/RestaurantReviewsPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="RestaurantProfile" component={RestaurantProfile}/>
        <Stack.Screen name="RestaurantReviewsPage" component={RestaurantReviewsPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef4f0",
    alignItems: 'center',
    justifyContent: 'center',
  }

});

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Home!</Text>
      <Button
        title="GoTo Restaurant Profile"
        onPress={() =>
          navigation.navigate("RestaurantProfile")
        }
      />
      <Button
        title="This does nothing :)"
      />
    </View>
  );
};
const OtherScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
            <Text> YOOO </Text>
        </View>
  );
};

export default App;
