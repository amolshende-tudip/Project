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

thankYouBody: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
},

thankYou: {
    fontSize: 50, 
    color: color.green,
    fontWeight: 'bold',
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

pressText3: {
    fontSize: 20,
    color: color.white,
},
});

export default styles;