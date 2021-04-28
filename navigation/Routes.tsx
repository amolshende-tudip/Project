import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from "./context";
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Splash from '../screens/Splash';
import { color } from "react-native-reanimated";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn Screen"
      component={SignIn}
      options={{ headerTitleAlign: 'center' }}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home Screen" component={Home}
    options={{headerTitleAlign: 'center'}} />
  </HomeStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile Screen" component={Profile}
    options={{headerTitleAlign: 'center'}} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} 
    options={{
      tabBarIcon: ({color}) => (
      <Icon name="ios-home" color={color} size={26} />
      ),
      }}/>
    <Tabs.Screen name="Profile" component={ProfileStackScreen}
    options={{
      tabBarIcon: ({color}) => (
      <Icon name="ios-person" color={color} size={26} />
      ),
      }} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabsScreen}
    options={{drawerIcon:() => (
      <Icon name="ios-home" size={26} />
    )}} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} 
    options={{drawerIcon:() => (
      <Icon name="ios-person" size={26} />
    )}}
    />
    
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

const Routes= () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Routes;