import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  
  View,
} from "react-native";
const { width } = Dimensions.get("window");


import { Card } from "../components";
import { Button, Block, Text } from "../components";




export default class Attendance extends Component {
  state = {
    
  };

  static navigationOptions = () => ({
    title: 'Attendance',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });



  render() {

    return (
      
      <ScrollView showsVerticalScrollIndicator={false}>
          
          
            
        <View style={styles.Container}>
          <Image source={require('../assets/elements/attendance.png')} />
          <Text h2 center light>
            Attendance
          </Text>
        </View>


          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card> 
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card> 
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card> 
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card> 
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card> 
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold>2020/05/20-</Text> Student is recorded as absent. 
              Please call the school or submit absent letter.</Text>

          </Card>
             
      </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10
  },



  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  portfolio: {
    fontSize: 16,
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation:3,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  cardstyle: {
      margin:15,
      backgroundColor: "#eff7f4",
      borderRadius:15,
  },
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },


});
