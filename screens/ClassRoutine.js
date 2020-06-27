import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";



import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

export default class Attendance extends Component {
  state = {
  
  };

  static navigationOptions = () => ({
    title: 'Class Routine',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });


  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };



  render() {
    const { profile, navigation } = this.props;

    return (
      
      <ScrollView showsVerticalScrollIndicator={false}>
          
          <View style={styles.Container}>
          <Image source={require('../assets/elements/routine.png')} />
          <Text h2 center light>
            Class Routine
          </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>Sunday  </Text>
             
              <Text style={styles.time}>Starts at 9:30</Text>

           
          </Card>
          </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Monday </Text>
              <Text style={styles.time}>Starts at 9:30</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Tuesday </Text>
              <Text style={styles.time}>Starts at 9:30</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Wednesday </Text>
              <Text style={styles.time}>Starts at 9:30</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Thursday </Text>
              <Text style={styles.time}>Starts at 9:30</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Friday </Text>
              <Text style={styles.time}>Starts at 9:30</Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DayRoutine")}>
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Saturday </Text>
              <Text style={styles.time}>Starts at 9:30</Text>
          </Card>
          </TouchableOpacity>
          
                    
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
  time:{
    color:'green',
    fontSize: 15,
  },

  text: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10
  },
  text2: {
    fontSize: 17,
  },
  text3: {
    fontSize: 18,
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
