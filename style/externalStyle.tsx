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
    marginTop: 30,
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
    marginTop: 20, 
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
    marginLeft: 80,
    marginTop: 10,
    fontSize: 18,
},

homeScreen: {
    fontSize:23,
    color: '#080201',
    marginLeft: 70,
    padding: 5,
},

profileContainer: {
    flex: 1,
    backgroundColor: "#3498DB",
    
},

profileHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
},

profileBody: {
    flex: 11,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'column',
    marginTop: 50,
},

profileAction: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
},

profileTextInput: { 
    flex: 1,
    marginTop: -12,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    color: '#05375a',
},

profileImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
},

profileImageBox: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: '#fff',
},

profileImageButton: {
    borderColor: 'black',
    borderWidth: 1,
    width: 130,
    height: 130,
    borderRadius: 100,
},

profileButton: {
    alignItems: 'center',
},

profileSubmitButton: {
    marginTop: 30,
    backgroundColor: '#2980B9',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
},

submitButton: {
    marginTop: 30,
    backgroundColor: '#3498DB',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
},

checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'flex-end',
},

label: {
    margin: 8,
},

detailContainer: {
    flex: 1,
    backgroundColor: '#2980B9',
},

detailImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},

detailImageBox: {
    width: 130,
    height: 130,
    borderRadius: 100,
},

detailBody: {
    flex: 3,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'column',
    borderRadius: 30,
},

detailTextViewStyle: {
    flexDirection: 'row',
    paddingBottom: 20,
    marginHorizontal: 20,
},

detailTextStyle: {
    marginHorizontal: 30,
    fontSize: 20,
},

splashContainer: {
    flex: 1,
    backgroundColor: '#4f6d7a',
    justifyContent: 'center',
    alignItems: 'center',
},

splashImageContainer: {
    height: 150,
    width: 150,
},

splashText: {
    fontSize: 20,
    color: '#ECF0F1',
    margin: 30,
},

newsView: {
    backgroundColor: '#F0FBFC',
    margin: 4,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width:0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
},

newsTitle: {
    marginHorizontal: 5,
    marginVertical: 3,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'

},

newsImage: {
    height: 170,
    width: 370,
    marginLeft: 6,
    marginRight: 5,
    marginVertical: 2,
},

newsAuthor: {
    marginBottom: 10,
    marginHorizontal: 5,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
},

});

export default externalStyle;