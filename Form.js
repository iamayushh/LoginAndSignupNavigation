import  React from 'react';
import { View ,StyleSheet,TextInput,Text,TouchableOpacity} from 'react-native';

export default class Formm extends React.Component{
    render()
    {
        
      return(
          <View style={styles.container}>
              <TextInput></TextInput>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               autoCorrect="none"
               />
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               secureTextEntry='true'
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               autoCorrect="none"
               />

          <TouchableOpacity style={styles.butnn}>
              <Text style={styles.butn}>{this.props.type}</Text>
          </TouchableOpacity>
            
          </View>
       )
    }
  }
  const styles=StyleSheet.create({
      container:{
          
          flex:2,
          
          
          alignItems:'center',
          
          
      },
      inputBox:{
          width:300,
      },
      input: {

        justifyContent:'center',
       // alignItems:'center',
       fontSize:20,
        paddingLeft:50,
        marginTop:20,
        height: 60,
        width:300,
        borderColor: '#f5b042',
    
        borderWidth: 3,
        borderRadius:30
     },
     butnn:{
         width:150,
         marginTop:30,
         height:40,
         backgroundColor:'#FF6347',
         borderRadius:30,
        
         marginVertical:10,
         flexDirection:'row',

     },
  butn:{
      fontSize:15,
      marginLeft:45,
      marginTop:10,
    
      fontWeight:'500',
      color:'#9a73ef'
  },

          
          
      
      
  })
