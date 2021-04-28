import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import {Checkbox} from 'react-native-paper';
import {AuthContext} from '../navigation/context';
import externalStyle from '../style/externalStyle';
import Icon from 'react-native-vector-icons/Ionicons';

const SignIn = ({ navigation }) => {
const { signIn } = React.useContext(AuthContext);

const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const [checked, setChecked] = useState(false);
  
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
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={password => { setPassword(password);}}
              value={password}
              style={externalStyle.password}/>
            </View>
          </View>

          <View style={externalStyle.checkboxContainer}>
            <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }} />
            <Text style={externalStyle.label}>Keep me signed in </Text>
          </View>
          
          <View>
            <TouchableOpacity 
            style={externalStyle.SignInButton}
            onPress={() => signIn()}>
            <Text style={{fontSize: 26, color: '#020701'}}> Sign In </Text>
            </TouchableOpacity>
          </View>

          <Text style={externalStyle.forgotPass}> Forgot Password ? </Text>
 
          <View>
            <Text style={externalStyle.signUp}> Don't Have an Account ? Sign Up</Text>
          </View>

      </View>
    );
  };

  export default SignIn;