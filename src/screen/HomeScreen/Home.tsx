import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../HomeScreen/style';
import {saveData} from '../../Redux/action';
import {connect} from 'react-redux';
import string from '../../utility/string';
import {Button} from '../../components/button';

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
                <Text style={styles.homeText}> {string.homewelcome} </Text>
                
                <TextInput 
                placeholder="  Enter Name"
                style={styles.homeTextInput}
                onChangeText={name => {
                    this.setState({name: name}, () => {});
                  }} />
            
                <Button style={styles.homeButton}
                title={string.submit}
                disabled={this.state.name=='' ? true: false}
                onPress={this.onSubmit} />

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