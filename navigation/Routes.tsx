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
import Logout from '../screens/Logout';
import ProfileDetail from "../screens/ProfileDetail";

 
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  
 <AuthStack.Navigator
 screenOptions={{
  headerStyle: {
    backgroundColor: '#3498DB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}>
   <AuthStack.Screen
    name="Welcome"
     component={SignIn}
     options={{headerTitleAlign:'center', headerTintColor: "#3498DB"}}
   />
 </AuthStack.Navigator>
);
 
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
 
const HomeStackScreen = ({navigation}) => (
 <HomeStack.Navigator
 screenOptions={{
  headerStyle: {
    backgroundColor: '#3498DB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}>
   <HomeStack.Screen name="Home" component={Home} 
   options={{
    title: 'Home Screen',
    headerTintColor: "#3498DB",
    headerLeft: () => (
      <Icon.Button
        name="ios-menu"
        size={25}
        backgroundColor="#3498DB"
        onPress={() => navigation.openDrawer()}></Icon.Button>
    ),
  }}/>
 </HomeStack.Navigator>
);
 
const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({navigation}) => (
 <ProfileStack.Navigator
 screenOptions={{
  headerStyle: {
    backgroundColor: '#3498DB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}>
   <ProfileStack.Screen name="Profile" component={Profile}
   options={{
    title: 'Profile Screen',
    headerTintColor: "#3498DB",
    headerLeft: () => (
      <Icon.Button
        name="ios-menu"
        size={25}
        backgroundColor="#3498DB"
        onPress={() => navigation.openDrawer()}></Icon.Button>
    ),
  }} />
 </ProfileStack.Navigator>
);

const ProfileDetailStack = createStackNavigator();
const ProfileDetailStackScreen = ({navigation}) => (
  <ProfileDetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3498DB',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileDetailStack.Screen
      name="ProfileDetail"
      component={ProfileDetail}
      options={{
        title: 'Profile Detail Screen',
        headerTintColor: "#3498DB",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3498DB"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ProfileDetailStack.Navigator>
);
 
const TabsScreen = () => (
 <Tabs.Navigator>
   <Tabs.Screen name="Home" component={HomeStackScreen}
   options={{
     tabBarIcon: ({color}) => (
     <Icon name="ios-home" color={color} size={26} />
     ),
     }}/>
   <Tabs.Screen name="Profile Details" component={ProfileDetailStackScreen}
   options={{
     tabBarIcon: ({color}) => (
     <Icon name="ios-person" color={color} size={26} />
     ),
     }} />
 </Tabs.Navigator>
);

const LogoutStack = createStackNavigator();
const LogoutStackScreen = ({navigation}) => (
  <LogoutStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3498DB',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <LogoutStack.Screen
      name="Logout"
      component={Logout}
      options={{
        title: 'Logout Screen',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#3498DB"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </LogoutStack.Navigator>
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
