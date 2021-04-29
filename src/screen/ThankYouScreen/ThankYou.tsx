import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../ThankYouScreen/style';
import {connect} from 'react-redux';
import string from '../../utility/string';
import {Button} from '../../components/button';

class ThankYouScreen extends React.Component {
    render() {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.name}>{string.welcome} {this.props.data.name}</Text>
            </View>

            <View style={styles.thankYouBody}>
                <Text style={styles.thankYou}> {string.thanks} </Text>

                <Button style={styles.detailButton3}
                title={string.gotohome}
                onPress={()=> this.props.navigation.navigate("Home")} />

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