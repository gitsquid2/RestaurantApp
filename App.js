import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./src/Tabs/BottomTab.js";

function App() {

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
export default App;


/*
/If you want to add a page to navigation, go the the tabs folder and go to bottomTab.js
/you also don't need to import the page here, just add it to the bottomTab.js file
*/