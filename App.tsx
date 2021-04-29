import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen/Home';
import DetailScreen from './src/screen/VariationScreen/Detail';
import ThankYouScreen from './src/screen/ThankYouScreen/ThankYou';
import configureStore from './src/Redux/store';
import {Provider} from 'react-redux';

const Stack =createStackNavigator();

const App =()=>{
  const store = configureStore();
    return(
        <Provider store ={store}>
        <NavigationContainer>
            <Stack.Navigator headerMode="none">

                <Stack.Screen name="Home" component={HomeScreen} />

                <Stack.Screen name="Detail" component={DetailScreen} />

                <Stack.Screen name="ThankYou" component={ThankYouScreen} />

            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
};

export default App;