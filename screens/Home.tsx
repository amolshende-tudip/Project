import React,{useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import NewsCard from '../Components/NewsCard';
import axios from 'axios';


const Home = ({ navigation }) => {
const [news, setNews] = useState([]);



useEffect(() => {
  getNewsFromAPI()
}, []);

function getNewsFromAPI() {
  axios.get('http://api.github.com/users')
      .then(async function (response) {
          setNews(response.data);
      })
      .catch(function (error) {
          console.log(error);
      });
}

if (!news) {
  return null;
}

return (
  <View>
      <FlatList 
      data={news}
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({item}) => {
      return <NewsCard item = {item}/>;
      }} /> 
  </View>
  );
};

  export default Home;