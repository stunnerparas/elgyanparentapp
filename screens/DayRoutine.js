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

export default class DayRoutine extends Component {
  state = {
   
  };


  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category =>
      category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  };

  static navigationOptions = () => ({
    title: 'Day Routine',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });



  render() {
    const { profile, navigation } = this.props;

    return (
      
      <ScrollView showsVerticalScrollIndicator={false}>
          
          <View style={styles.Container}>
          <Image source={require('../assets/elements/routine.png')} />
          <Text h2 center light>
            Day Name
          </Text>
          </View>

          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Science </Text>
              <Text gray2 style={styles.text3}>Teacher Name </Text>
          </Card>
          
          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Math </Text>
              <Text gray2 style={styles.text3}>Teacher Name </Text>
          </Card>

          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Nepali </Text>
              <Text gray2 style={styles.text3}>Teacher Name </Text>
          </Card>

          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>EPH </Text>
              <Text gray2 style={styles.text3}>Teacher Name </Text>
          </Card>

          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>OPT Math </Text>
              <Text gray2 style={styles.text3}>Teacher Name </Text>
          </Card>

          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Accountancy </Text>
              <Text gray2 style={styles.text3}>Teacher Name </Text>
          </Card>

          <Card style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>English </Text>
              <Text gray2 style={styles.text3}>Teacher Name </Text>
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
    fontSize: 22,
    textAlign: 'center',
    margin: 30
  },
  text2: {
    fontSize: 20,
  },
  text3: {
    fontSize: 14,
    color:'green',
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
