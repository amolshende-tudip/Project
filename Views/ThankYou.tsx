import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../style/PracticalStyle';
import {connect} from 'react-redux';

class ThankYouScreen extends React.Component {
    render() {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.name}>Welcome {this.props.data.name}</Text>
            </View>

            <View style={styles.thankYouBody}>
                <Text style={styles.thankYou}> Thank You </Text>
                <TouchableOpacity style={styles.detailButton3}
                onPress={()=> this.props.navigation.navigate("Home")}>
                <Text style={styles.pressText3}> Goto Home </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
}

const mapStateToProps = state => {
    return {
    data: state.nameReducer.data,
    };
    };
    export default connect(mapStateToProps, null)(ThankYouScreen);