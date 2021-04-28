import React,{useState} from 'react';
import {Text, Button, View, TouchableOpacity,TextInput} from 'react-native';
import {AuthContext} from '../navigation/context';
import externalStyle from '../style/externalStyle';
import Icon from 'react-native-vector-icons/Ionicons';
const Profile = ({ navigation }) => {
const { signOut } = React.useContext(AuthContext);
const [userName, setUserName] = useState('');
const [contact, setContact] = useState('');
const [address, setAddress] = useState('');
const [locality, setLocality] = useState('');
const [city, setCity] = useState('');
const [pincode, setPincode] = useState('');

    return (
      <View>
        <Text style={{fontSize: 22, marginLeft: 140}}> My Profile </Text>

          <View style={{flexDirection: "row"}}>
            <Icon name={"ios-person"} size={26} color={'black'} />
              <TextInput
              placeholder="Enter Name"
              onChangeText={userName => { setUserName(userName);}}
              value={userName}
              style={externalStyle.profileTextInput}/>
          </View>

          <View style={{flexDirection: "row"}}>
            <Icon name={"ios-document"} size={26} color={'black'} />
              <TextInput
              placeholder="Enter Contact"
              onChangeText={contact => { setContact(contact);}}
              value={contact}
              style={externalStyle.profileTextInput}/>
          </View>

          <View style={{flexDirection: "row"}}>
            <Icon name={"ios-home"} size={26} color={'black'} />
              <TextInput
              placeholder="Enter Address"
              onChangeText={address => { setAddress(address);}}
              value={address}
              style={externalStyle.profileTextInput}/>
          </View>

          <View style={{flexDirection: "row"}}>
            <Icon name={"ios-location"} size={26} color={'black'} />
              <TextInput
              placeholder="Enter Locality"
              onChangeText={locality => { setLocality(locality);}}
              value={locality}
              style={externalStyle.profileTextInput}/>
          </View>

          <View style={{flexDirection: "row"}}>
            <Icon name={"ios-logo-capacitor"} size={26} color={'black'} />
              <TextInput
              placeholder="Enter City"
              onChangeText={city => { setCity(city);}}
              value={city}
              style={externalStyle.profileTextInput}/>
          </View>

          <View style={{flexDirection: "row"}}>
            <Icon name={"ios-pin"} size={26} color={'black'} />
              <TextInput
              placeholder="Enter Pincode"
              onChangeText={pincode => { setPincode(pincode);}}
              value={pincode}
              style={externalStyle.profileTextInput}/>
          </View>

        <TouchableOpacity 
          style={externalStyle.SignInButton}
          onPress={() => navigation.toggleDrawer()}
          >
               <Text style={{fontSize: 20, color: '#020701'}}> DRAWER </Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={externalStyle.SignInButton}
          onPress={() => signOut()}
          >
               <Text style={{fontSize: 22, color: '#020701'}}> Sign Out </Text>
          </TouchableOpacity>

      </View>
    );
  };

  export default Profile;
  