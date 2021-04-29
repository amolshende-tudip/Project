import {StyleSheet} from 'react-native';
import color from '../../utility/color';

const styles =StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: color.background,
},

homeBody: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
},

homeText: {
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: "bold",
    marginTop: 230,
    padding: 10,
    marginLeft: 10,
    color: color.homeWelcome,
},
  
homeTextInput: {
    backgroundColor: color.white,
    borderWidth: 1,
    width: '80%',
    marginVertical: 30,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 10,
},
    
homeButton: {
    backgroundColor: color.blue,
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    height: 50,
    
    
},
});

export default styles;