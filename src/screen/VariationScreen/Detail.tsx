import * as React from 'react';
import { View, Text} from 'react-native';
import styles from '../VariationScreen/style';
import SwipeButton from 'rn-swipe-button';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import string from '../../utility/string'
import color from '../../utility/color';
import {Button} from '../../components/button';

class DetailScreen extends React.Component {
    myIcon = () => <Icon name="person" size={30} />;
    render() {
    return(
        
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.name}>{string.welcome} {this.props.data.name}</Text>
            </View>

            <View style={styles.detailBody}>

                <Text style={styles.detailVariation}> {string.variation} </Text>
                <Button title={string.title} style={styles.detailButton1} />

                <Button title={string.title} style={styles.detailButton2} />

                <Button title={string.title} style={styles.detailButton3}
                    onPress={()=> this.props.navigation.navigate("Home")}
                />

                <SwipeButton
                swipeSuccessThreshold={80}
                height={45}
                width={300}
                railBackgroundColor= {color.background}
                railStyles={{
                backgroundColor: color.red,
                borderColor: color.black,
                }}
                shouldResetAfterSuccess={true}
                title={string.swipe}
                titleColor={color.liteblue}
                thumbIconBackgroundColor={color.liteblue}
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