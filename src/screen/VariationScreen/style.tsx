import {StyleSheet} from 'react-native';
import color from '../../utility/color';

const styles =StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: color.background,
},

header: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'flex-end',
},

    
name: {
    fontSize: 20,
    color: color.white,
},

detailBody: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
},

detailVariation: {
    fontSize: 30,
    color: color.yellow,
    marginHorizontal: 20,
    marginTop: 100,
},

detailButton1: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    height: 45,
    width: 300,
},

detailButton2: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: color.button3,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    height: 45,
    width: 300,
},

detailButton3: {
    backgroundColor: color.blue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    height: 45,
    width: 300,
},
  
pressText1: {
    fontSize: 20,
    color: color.white,
},

pressText2: {
    fontSize: 20,
    color: color.white,
},

pressText3: {
    fontSize: 20,
    color: color.white,
},
});

export default styles;