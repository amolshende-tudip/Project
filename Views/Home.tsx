import React from 'react';
import {View, Text, TextInput, StatusBar, Button, TouchableOpacity} from 'react-native';
import styles from '../style/PracticalStyle';
import {saveData} from '../src/Redux/action';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
    constructor(props: {} | Readonly<{}>) {
      super(props);
      this.state = {
        name: '',
      };
    }
  
    onSubmit = () => {
      var data = {};
      data.name = this.state.name;
      this.props.reduxSaveData(data);
      this.props.navigation.navigate('Detail');
    };
    render() {
    return(
        <View style={styles.container}>
            <View style={styles.homeBody}>
                <Text style={styles.homeText}> Welcome to Home Page</Text>
                
                <TextInput 
                placeholder="  Enter Name"
                style={styles.homeTextInput}
                onChangeText={name => {
                    this.setState({name: name}, () => {});
                  }} />
            
                <TouchableOpacity style={styles.homeButton}
                disabled={this.state.name=='' ? true: false}
                onPress={this.onSubmit}>
                <Text style={styles.submitText}> Submit </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
   }
};

const mapDispatchToProps = dispatch => {
    return {
      reduxSaveData: data => dispatch(saveData(data)),
    };
  };
  export default connect(null, mapDispatchToProps)(HomeScreen);