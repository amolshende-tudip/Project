import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style/PracticalStyle';
import SwipeButton from 'rn-swipe-button';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

class DetailScreen extends React.Component {
    myIcon = () => <Icon name="person" size={30} />;
    render() {
    return(
        
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.name}>Welcome {this.props.data.name}</Text>
            </View>

            <View style={styles.detailBody}>

                <Text style={styles.detailVariation}> 4 variations of a button </Text>
                <TouchableOpacity style={styles.detailButton1}>
                <Text style={styles.pressText1}> Press Me </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.detailButton2}>
                <Text style={styles.pressText2}> Press Me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.detailButton3}
                onPress={()=> this.props.navigation.navigate("Home")}>
                <Text style={styles.pressText3}> Press Me </Text>
                </TouchableOpacity>

                <SwipeButton
                swipeSuccessThreshold={80}
                height={45}
                width={300}
                railBackgroundColor= "#232233"
                railStyles={{
                backgroundColor: "red",
                borderColor: "black",
                }}
                shouldResetAfterSuccess={true}
                title="Swipe to Continue"
                titleColor="#a6f5f3"
                thumbIconBackgroundColor="#43D9F7"
                thumbIconComponent={this.myIcon}
                onSwipeSuccess={() => {
                this.props.navigation.navigate('ThankYou');
                }} />
            </View>
        </View>
    );
}
};

const mapStateToProps = state => {
    return {
    data: state.nameReducer.data,
    };
    };
    export default connect(mapStateToProps, null)(DetailScreen);