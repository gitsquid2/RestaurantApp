import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import Tabs from './src/Tabs/BottomTabexpo';
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


/*
/If you want to add a page to navigation, go the the tabs folder and go to bottomTab.js
/you also don't need to import the page here, just add it to the bottomTab.js file
*/



function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in...');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;