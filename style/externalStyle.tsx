import { StyleSheet } from 'react-native';

const externalStyle= StyleSheet.create ({

container: {
    flex:1,
},

imageContainer: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 150,
    height: 150,
    marginLeft: 120,
    marginTop: 30
},

SignInStyle: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 200,
    padding: 5,
},

textInput: {
    flexDirection: 'row', 
    backgroundColor: 'white', 
    fontSize: 20,
    width: '80%',
    padding: 10, 
    marginBottom: 5, 
    borderWidth: 2, 
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft: 30,
},

password: {
    flexDirection: 'row', 
    backgroundColor: 'white', 
    fontSize: 20,
    width: '80%',
    padding: 9, 
    marginBottom: 5, 
    borderWidth: 2, 
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft: 30,
},

keepSignIn: {
    color: '#080201', 
    marginTop: 15,
    marginLeft: 60,
    fontSize: 18,
},

SignInButton: {
    marginTop: 30, 
    backgroundColor: '#2FD6F3', 
    width: 110,
    height: 40,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 15,
    marginLeft: 130,
},

forgotPass: {
    color: "#020701",
    marginLeft: 110,
    marginTop: 20,
    fontSize: 18,
},

signUp: {
    color: "#020701",
    marginLeft: 95,
    marginTop: 10,
    fontSize: 18,
},

homeScreen: {
    fontSize:23,
    color: '#080201',
    marginLeft: 70,
    padding: 5,
},

profileTextInput: { 
    backgroundColor: 'white', 
    fontSize: 18,
    width: '80%',
    padding: 5, 
    marginBottom: 5, 
    borderWidth: 2, 
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft: 30,
},
});

export default externalStyle;