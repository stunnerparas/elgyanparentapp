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

export default class Result extends Component {
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
    title: 'Routine',
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
          <Image source={require('../assets/elements/progress.png')} />
          <Text h2 center light>
            Results
          </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>3rd Term Examination  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>3rd Unit Test  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>2nd Term Examination  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>2nd Unit Test  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>1st Term Examination  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>1st Unit Test  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
          </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ResultDetails")}>
          <Card gradient style={styles.cardstyle} left middle shadow>

              <Text style={styles.text2}>2nd Term Examination  </Text>
             
              <Text style={styles.time}>2020/05/18</Text>

           
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
  },
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },


});
