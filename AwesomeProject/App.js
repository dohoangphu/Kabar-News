import { Button, FlatList, SafeAreaView, Text, View, } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './src/asm/ultil/AppContext';
import AppNavigator from './src/asm/ultil/AppNavigator';
import Login from './src/asm/Login';
import SignUp from './src/asm/SignUp';
import AddNews from './src/demo/AddNews';
import PostNew from './src/asm/PostNew';
import DetailScreen from './src/asm/DetailScreen';
import EditProfile from './src/asm/EditProfile';




const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </AppContextProvider>

    // // <Login/>
    
    //   // <PostNew/>
    // <DetailScreen/>
    // <EditProfile/>
  );
};

export default App;