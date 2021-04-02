import  React from 'react';
import { Button, View ,StyleSheet,Text,StatusBar,Image} from 'react-native';
import Form from './Form';
export default class Logo extends React.Component{
    render()
    {
      return(
          <View style={styles.container}>
          
             <Image style={{width:150,height:150}} source={require('/Users/unthinkable-mac-0049/Desktop/Unthinkable/ReactNative/Navigation/Nav/oie_NtQhOE3nEaLX.png')}></Image>
            
          </View>
       )
    }
  }
  const styles=StyleSheet.create({
      container:{
          
          flex:1,
          marginLeft:25,
          
          alignItems:'center'
          
      },
      logotextt:{
          marginTop:25,
          fontSize:45,
          color:'#f5b042',
          fontWeight:'bold',
          
      }
      
  })
