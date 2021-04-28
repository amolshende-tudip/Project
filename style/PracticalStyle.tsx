import {StyleSheet} from 'react-native';

const styles =StyleSheet.create({
homeText: {
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: "bold",
    marginTop: 230,
    padding: 10,
    marginLeft: 10,
    color: "#f7bd36",
},

homeBody: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
},
    
homeTextInput: {
    backgroundColor: "white",
    borderWidth: 1,
    width: '80%',
    marginVertical: 30,
    paddingHorizontal: 20,
    fontSize: 20,
    borderRadius: 10,
},
    
homeButton: {
    backgroundColor: '#2980B9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    height: 50,
    width: "80%",
    borderWidth: 1,
},
    
submitText: {
    fontSize:23,
    color: "white",
},

detailBody: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
},

detailVariation: {
    fontSize: 30,
    color: "#F9F931",
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
    backgroundColor: '#5f7070',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    height: 45,
    width: 300,
},

detailButton3: {
    backgroundColor: '#52baf2',
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
    color: "white",
},

pressText2: {
    fontSize: 20,
    color: "white",
},

pressText3: {
    fontSize: 20,
    color: "white",
},

container: {
    flex: 1,
    backgroundColor: "#232233",
},

name: {
    fontSize: 20,
    color: "white",
  },

header: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'flex-end',
},

thankYou: {
    fontSize: 50, 
    color: "#11f537",
    fontWeight: 'bold',
},

thankYouBody: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
},

});

export default styles;