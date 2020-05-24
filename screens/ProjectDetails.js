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

export default class ProjectDetails extends Component {
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
    title: 'Project Details',
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
        <Image source={require('../assets/elements/project.png')} />
        <Text h2 center light>
            Project Work Details
          </Text>
        </View>

        <ScrollView style={{ marginVertical: theme.sizes.padding }}>

        <Card style={styles.cardstyle} left middle shadow>
                <View >
                    <Text bold style={styles.projectdetails}>Subject name:<Text light style={styles.projectdetails}> Science</Text></Text>
                    <Text bold style={styles.projectdetails}>Given Date:<Text light style={styles.projectdetails}> 2020/5/12</Text></Text>
                    <Text bold style={styles.projectdetails}>Submit Date:<Text light style={styles.projectdetails}> 2020/5/16</Text></Text>
                </View> 
        </Card>

          <Card style={styles.cardstyle} left middle shadow>
                <Text
                    caption
                    gray
                    height={24}
                    style={{ fontSize:19 }}
                    >
                    <Text
                    caption
                    bold
                    height={24}
                    style={{ fontSize:17 }}
                    >
                    Title of the project:{"\n"}
                    </Text>
                    Students should write the question answer of Chapter 1 and also complete the numerical of chapter 2.
                    Students should write the question answer of Chapter 2 and also complete the Essay.
                </Text>
          </Card>   

          <Block padding={[0, theme.sizes.base * 10]}>
          <Button style={styles.shadow} gradient onPress={() => this.props.navigation.goBack()} >
                <Text bold white center>
                  GOT IT
                </Text>
            </Button>
         </Block>
          
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
  },
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },
  projectdetails:{
    margin:5,
    fontSize: 19,
  },
  cardstyle: {
    margin:15,
},


});
