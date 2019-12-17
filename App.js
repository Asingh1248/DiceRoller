import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert } from 'react-native';


export default class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      uri:require("./src/images/dice1.png"), // uri name of variable
      image2uri:require("./src/images/dice6.png")
    }
  }

  getRandomValue=()=>{
    return Math.floor(Math.random()*6) +1
  }
  
  playButtonPressed=()=>{
     //Alert.alert("HEyyyy"+this.getRandomValue());
    var rNumber=this.getRandomValue();

    switch(rNumber){
      case 1:
          this.setState({uri:require("./src/images/dice1.png")})
          break;
      
      case 2:
          this.setState({uri:require("./src/images/dice2.png")})
          break;
      case 3:
          this.setState({uri:require("./src/images/dice3.png")})
          break;
      
      case 4:
          this.setState({uri:require("./src/images/dice4.png")})
          break;
      case 5:
          this.setState({uri:require("./src/images/dice5.png")})
          break;
      case 6:
          this.setState({uri:require("./src/images/dice6.png")})
          break;      
  }
  // Why 2nd Switch Case --Understood
  var rNumber2=this.getRandomValue();

    switch(rNumber2){
      case 1:
          
          this.setState({image2uri:require("./src/images/dice1.png")})
          break;
      
      case 2:
          
          this.setState({image2uri:require("./src/images/dice2.png")})
          break;
      case 3:
          
          this.setState({image2uri:require("./src/images/dice3.png")})
          break;
      
      case 4:
          
          this.setState({image2uri:require("./src/images/dice4.png")})
          break;
      case 5:
          
          this.setState({image2uri:require("./src/images/dice5.png")})
          break;
      case 6:
          
          this.setState({image2uri:require("./src/images/dice6.png")})
          break;      
  }
};


  // D:/MCA-Sem6/ReactNativeBootCamp/06/DiceRoller/src\images
  render(){
  return (
    <View style={styles.container}>
      <Image
        style={{flex:1,marginTop:50,alignItems:'stretch'}}
        source={this.state.uri}
      />
      {/* How I do have Different Number Same Logic to be invoked 
       for Second Image(Logic is there>>Just Use the ID Concept of the Image(Accordingly)) */}
       <Image
        style={{flex:1,marginTop:20,alignItems:'stretch'}}
        source={this.state.image2uri}
      />
      <TouchableOpacity
        onPress={this.playButtonPressed}
      >
     
        <Text style={styles.gamebutton}> Play Game</Text>
        </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gamebutton:{
    marginTop:15,
    fontSize:20,
    color:"#FFFFFF",
    fontWeight:"bold",
    borderWidth:2,
    paddingVertical:8,
    paddingHorizontal:40,
    borderRadius:5,
    borderColor:"#FFFFFF"

  }
});
