import React from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import externalStyle from '../style/externalStyle';

class ProfileDetail extends React.Component {
  render () {
    return (
      <View style={externalStyle.detailContainer}>

        <View style={externalStyle.detailImageContainer}>
          <Image
            source={this.props.profileDetails.photo}
            style={externalStyle.detailImageBox}
          />
        </View>

        <View style={externalStyle.detailBody}>

          <View style={externalStyle.detailTextViewStyle}>
            <Icon name="person" size={30} />
            <Text style={externalStyle.detailTextStyle}>
              {this.props.profileDetails.name}
            </Text>
          </View>

          <View style={externalStyle.detailTextViewStyle}>
            <Icon name="ios-document" size={30} />
            <Text style={externalStyle.detailTextStyle}>
              {this.props.profileDetails.phone}
            </Text>
          </View>

          <View style={externalStyle.detailTextViewStyle}>
            <Icon name="ios-home" size={30} />
            <Text style={externalStyle.detailTextStyle}>
              {this.props.profileDetails.email}
            </Text>
          </View>

          <View style={externalStyle.detailTextViewStyle}>
            <Icon name="ios-location" size={30} />
            <Text style={externalStyle.detailTextStyle}>
              {this.props.profileDetails.locality}
            </Text>
          </View>

          <View style={externalStyle.detailTextViewStyle}>
            <Icon name="ios-logo-capacitor" size={30} />
            <Text style={externalStyle.detailTextStyle}>
              {this.props.profileDetails.city}
            </Text>
          </View>

          <View style={externalStyle.detailTextViewStyle}>
            <Icon name="location" size={30} />
            <Text style={externalStyle.detailTextStyle}>
              {this.props.profileDetails.state}
            </Text>
          </View>

          <View style={externalStyle.detailTextViewStyle}>
            <Icon name="ios-pin" size={30} />
            <Text style={externalStyle.detailTextStyle}>
              {this.props.profileDetails.pin}
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    profileDetails: state.profileDetailReducer.profileDetails,
  };
};

export default connect(mapStateToProps, null)(ProfileDetail);