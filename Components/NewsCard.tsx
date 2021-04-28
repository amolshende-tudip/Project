import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
interface NewsCardprops {}
const { width, height } = Dimensions.get('window');

const NewsCard: React.FC<NewsCardprops> = ({item }) => {
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}> {item.title}</Text>
            <Text style={styles.author}>{item.author} </Text>
            <Image style={styles.image} source= {{uri: item.avatar_url}} />
        </View>
    );
};

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'

    },
    image: {
        height: 170,
        width: 320,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'black'

    }

})

export default NewsCard;