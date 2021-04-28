import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import externalStyle from '../style/externalStyle';

interface NewsCardprops {}
const { width, height } = Dimensions.get('window');

const NewsCard: React.FC<NewsCardprops> = ({item }) => {
    return (
        <View style={{backgroundColor:'#6F6B62'}}>

            <View style={externalStyle.newsView}>
                <Text style={externalStyle.newsTitle}> {item.title} Images</Text>
                <Text style={externalStyle.newsAuthor}> {item.author} 1.API Home </Text>
                <Image style={externalStyle.newsImage} source= {{uri: item.avatar_url}} />
            </View>
            
       </View>
    
    );
};

export default NewsCard;