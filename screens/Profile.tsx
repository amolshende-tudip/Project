import React from 'react';
import {Text, View, TouchableOpacity,TextInput, Image, ScrollView} from 'react-native';
import externalStyle from '../style/externalStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import * as ImagePicker from 'react-native-image-picker';
import {saveProfileDetails} from '../redux/actions/peopleActions';

      class Profile extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            name: '',
            phone: '',
            email: '',
            locality: '',
            city: '',
            state: '',
            pin: '',
            photo: '',
          };
        }
        selectFile = () => {
          var options = {
            title: 'Select Image',
            customButtons: [
              {
                name: 'customOptionKey',
                title: 'Choose file from Custom Option',
              },
            ],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
      
          ImagePicker.launchImageLibrary(options, res => {
            console.log('Response = ', res);
      
            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.errorMessage) {
              console.log('ImagePicker Error: ', res.errorMessage);
            } else {
              let source = res;
              this.setState({
                photo: source,
              });
            }
          });
        };
      
        onSubmit = () => {
          var profileDetails = {};
          profileDetails.name = this.state.name;
          profileDetails.phone = this.state.phone;
          profileDetails.email = this.state.email;
          profileDetails.locality = this.state.locality;
          profileDetails.city = this.state.city;
          profileDetails.state = this.state.state;
          profileDetails.pin = this.state.pin;
          profileDetails.photo = this.state.photo;
          this.props.reduxSaveProfileDetail(profileDetails);
          this.props.navigation.navigate('Home');
        };
        render() {
          return (
            <View style={externalStyle.profileContainer}>
              <View style={externalStyle.profileImageContainer}>
                <TouchableOpacity
                  style={externalStyle.profileImageButton}
                  onPress={this.selectFile}>
                  {this.state.photo === null ? (
                    <Image
                      source={require('../src/components/images/proimg.png')}
                      style={externalStyle.profileImageBox}
                      resizeMode="cover" />
                  ) : (
                    <Image
                      source={{uri: this.state.photo.uri}}
                      style={externalStyle.profileImageBox}
                      resizeMode="cover"
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View style={externalStyle.profileBody}>
                <ScrollView>
                  <View style={externalStyle.profileAction}>
                  <Icon name={"ios-person"} size={26} color={'black'} />
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor="#283747"
                      style={externalStyle.profileTextInput}
                      returnKeyType="next"
                      onChangeText={name => {
                        this.setState({name: name}, () => {});
                      }} />
                  </View>
      
                  <View style={externalStyle.profileAction}>
                  <Icon name={"ios-document"} size={26} color={'black'} />
                    <TextInput
                      placeholder="Contact"
                      placeholderTextColor="#283747"
                      style={externalStyle.profileTextInput}
                      keyboardType="phone-pad"
                      maxLength={10}
                      returnKeyType="next"
                      onChangeText={phone => {
                        this.setState({phone: phone}, () => {});
                      }}
                    />
                  </View>
      
                  <View style={externalStyle.profileAction}>
                  <Icon name={"ios-home"} size={26} color={'black'} />
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="#283747"
                      keyboardType="email-address"
                      style={externalStyle.profileTextInput}
                      returnKeyType="next"
                      onChangeText={email => {
                        this.setState({email: email}, () => {});
                      }}
                    />
                  </View>
      
                  <View style={externalStyle.profileAction}>
                  <Icon name={"ios-location"} size={26} color={'black'} />
                    <TextInput
                      placeholder="Locality"
                      placeholderTextColor="#283747"
                      style={externalStyle.profileTextInput}
                      returnKeyType="next"
                      onChangeText={locality => {
                        this.setState({locality: locality}, () => {});
                      }}
                    />
                  </View>
                  <View style={externalStyle.profileAction}>
                  <Icon name={"ios-logo-capacitor"} size={26} color={'black'} />
                    <TextInput
                      placeholder="City"
                      placeholderTextColor="#283747"
                      style={externalStyle.profileTextInput}
                      returnKeyType="next"
                      onChangeText={city => {
                        this.setState({city: city}, () => {});
                      }}
                    />
                  </View>
                  <View style={externalStyle.profileAction}>
                  <Icon name={"ios-home"} size={26} color={'black'} />
                    <TextInput
                      placeholder="State"
                      placeholderTextColor="#283747"
                      style={externalStyle.profileTextInput}
                      returnKeyType="next"
                      onChangeText={state => {
                        this.setState({state: state}, () => {});
                      }}
                    />
                  </View>
                  <View style={externalStyle.profileAction}>
                  <Icon name={"ios-pin"} size={26} color={'black'} />
                    <TextInput
                      placeholder="Pin Code"
                      placeholderTextColor="#283747"
                      style={externalStyle.profileTextInput}
                      keyboardType="number-pad"
                      returnKeyType="done"
                      onChangeText={pin => {
                        this.setState({pin: pin}, () => {});
                      }}
                    />
                  </View>
      
                  <View style={externalStyle.profileButton}>
                    <TouchableOpacity
                      style={externalStyle.profileSubmitButton}
                      onPress={this.onSubmit}>
                      <Text style={{fontSize: 20, color: '#fff'}}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          );
        }
      }

      const mapDispatchToProps = dispatch => {
        return {
          reduxSaveProfileDetail: profileDetail =>
            dispatch(saveProfileDetails(profileDetail)),
        };
      };
      export default connect(null, mapDispatchToProps)(Profile);