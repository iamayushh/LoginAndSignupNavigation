import  React from 'react';
import { Button, View ,StyleSheet,Text,StatusBar,TouchableOpacity} from 'react-native';
import Login from './Login';
import Signout from './Signup';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
   <Login></Login>
   <TouchableOpacity onPress={()=>navigation.navigate("Signin")}><Text style={styles.signupbtn}>SignUp</Text></TouchableOpacity>

   </View>
  );
}

function SignScreen({navigation}) {
  return (
    <View style={styles.container}>
   <Signout></Signout>
   <TouchableOpacity onPress={()=>navigation.navigate("Login")}><Text style={styles.signupbtn}>Login</Text></TouchableOpacity>

   </View>
  );
}




 export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Signin" component={SignScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
 const styles=StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#42a1f5',
    alignItems:'center'
  },
  textt:{
    color:'#f5b042',fontWeight:'bold',fontSize:50

  },
  signupbtn:{
    fontSize:30,
    color:'#FF6347',fontWeight:'bold',marginBottom:50,
  }

 })