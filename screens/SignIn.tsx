import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {AuthContext} from '../navigation/context';
import externalStyle from '../style/externalStyle';
import Icon from 'react-native-vector-icons/Ionicons';

const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');

  
    return (
      <View>
          <StatusBar backgroundColor= '#4f6d7a' barStyle= "light-content" />
        <View style={externalStyle.container}>
          <Image
           source={require('../src/components/images/react.png')}
           style= {externalStyle.imageContainer} />
        </View>

          <View>
            <Text style={externalStyle.SignInStyle}> SignIn </Text>
          </View>

          <View>
            <View style={{flexDirection: "row"}}>
          <Icon name={"ios-person"} size={26} color={'black'} />
            <TextInput
            placeholder="Email/mobile"
            onChangeText={userName => { setUserName(userName);}}
            value={userName}
            style={externalStyle.textInput}/>
          </View>

          <View style={{flexDirection: "row"}}>
          <Icon name={"eye"} size={26} color={'black'} />
            <TextInput
            placeholder="Password"
            onChangeText={password => { setPassword(password);}}
            value={password}
            style={externalStyle.password}/>
          </View>
          </View>

            <Text style={externalStyle.keepSignIn}> Keep me signed in </Text>
      
          <TouchableOpacity 
          style={externalStyle.SignInButton}
          onPress={() => signIn()}
          >
               <Text style={{fontSize: 26, color: '#020701'}}> Sign In </Text>
          </TouchableOpacity>
            
          <Text style={externalStyle.forgotPass}> Forgot Passwordf ? </Text>
 
          <View>
            <Text style={externalStyle.signUp}> Don't Have an Account ? </Text>
               <TouchableOpacity>
                   <Text style={{fontSize: 19, marginLeft: 150, padding: 5}}> Sign Up </Text>
               </TouchableOpacity>
          </View>
      </View>
    );
  };

  export default SignIn;