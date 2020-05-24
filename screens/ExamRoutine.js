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

export default class ExamRoutine extends Component {
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
    title: 'Exam Routine',
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
          <Image source={require('../assets/elements/exam.png')} />
          <Text h2 center light>
            Exam Routine
          </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("ExamDetails")}>

          <Card gradient style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Exam Routine of Class Nursary </Text>
              <Text style={styles.time}>8 exams </Text>          
          </Card>

          </TouchableOpacity>


           <TouchableOpacity onPress={() => navigation.navigate("ExamDetails")}>

          <Card gradient style={styles.cardstyle} left middle shadow>
              <Text style={styles.text2}>Exam Routine of Class LKG </Text>
              <Text style={styles.time}>8 exams </Text>          
          </Card>

          </TouchableOpacity>


         <TouchableOpacity onPress={() => navigation.navigate("ExamDetails")}>
            <Card gradient style={styles.cardstyle} left middle shadow>
                <Text style={styles.text2}>Exam Routine of Class UKG </Text>
                <Text style={styles.time}>8 exams </Text>          
            </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ExamDetails")}>
            <Card gradient style={styles.cardstyle} left middle shadow>
                <Text style={styles.text2}>Exam Routine of Class 1 </Text>
                <Text style={styles.time}>8 exams </Text>          
            </Card>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate("ExamDetails")}>
            <Card gradient style={styles.cardstyle} left middle shadow>
                <Text style={styles.text2}>Exam Routine of Class 2 </Text>
                <Text style={styles.time}>8 exams </Text>          
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
      margin:8,
  },
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },


});
