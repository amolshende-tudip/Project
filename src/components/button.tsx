import React from 'react';
import{TouchableOpacity, StyleSheet, Text, View} from 'react-native';
interface Buttonprops {}

export const Button: React.FC<Buttonprops> = ({
title,
onPress,
style,
disabled,
}) => {
return (
<View style={styles.button}>
<TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
<Text style={styles.buttonText}> {title}</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
    button: {
    width: '80%',
    },
    buttonText: {
    fontSize: 20,
    color: '#fff',
    },
    });