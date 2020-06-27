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

export default class HomeworkDetails extends Component {
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
    title: 'Homework Details',
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
        <Image source={require('../assets/elements/homework.png')} />
        <Text h2 center >
            Homework Details
          </Text>
        </View>

        <ScrollView style={{ marginVertical: theme.sizes.padding }}>

        <Card style={styles.cardstyle} left middle shadow>
                <View >
                    <Text bold style={styles.homeworkdetails}>Subject Name:<Text light style={styles.homeworkdetails}> Science</Text></Text>
                    <Text bold style={styles.homeworkdetails}>Given Date:<Text light style={styles.homeworkdetails}> 5/12</Text></Text>
                </View> 
        </Card>

          <Card style={styles.cardstyle} left middle shadow>
          <Text caption bold style={styles.header}>Homework Description{"\n"}</Text>
                <Text
                    caption
                    gray
                    height={24}
                    style={{ fontSize:19, textAlign: 'justify',}}
                    >
                    Students should write the question answer of Chapter 1 and also complete the numerical of chapter 2.
                    Students should write the question answer of Chapter 2 and also complete the Essay.
                </Text>
          </Card>   

          </ScrollView>              
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
      backgroundColor: "#eff7f4"
  },
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,  
  },
  header: {
    fontSize: 19,
    margin:5,
    textDecorationLine: 'underline',
  },
  homeworkdetails:{
    margin:10,
    fontSize: 19,
  },
  cardstyle: {
    margin:15,
},


});
