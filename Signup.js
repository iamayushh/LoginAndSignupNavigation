import  React from 'react';
import { Button, View ,StyleSheet,Text,StatusBar,TextInput} from 'react-native';
import Formm from './Form';
import Logo from './Logo';
export default class Signout extends React.Component{
    render()
    {
      return(
          <View style={styles.container}>
              <Text style={styles.textt}>




              </Text>
              <Logo></Logo>
              <Formm type='Signup'></Formm>
              <View style={styles.signupTextContent}>
                <Text style={styles.text1}>Already have an account? </Text>
                


              </View>
              
            
        
      
      

          </View>
       )
    }
  }
  const styles=StyleSheet.create({

    container:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'#42a1f5',
      alignItems:'center'
    },
    textt:{
      color:'#f5b042',fontWeight:'bold',fontSize:50,marginTop:20
  
    },
    signupTextContent:{
      flex:1,
    
      alignItems:'center',
      justifyContent:'center'
    },text1:{
      fontSize:30,
      color:'#f5b042',fontWeight:'bold',
    },
    signupbtn:{
      fontSize:30,
      color:'#FF6347',fontWeight:'bold',
    }
  
   })