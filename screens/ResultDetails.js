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

export default class ResultDetails extends Component {
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
    title: 'Result Details',
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
        <Text h2 center light>
            Result Details
          </Text>
        </View>

        <ScrollView style={{ marginVertical: theme.sizes.padding }}>

        <Card style={styles.cardstyle} left middle shadow>
    <Text style={{ fontSize:19 }}>Click for Fullview:{'\n'}</Text> 
       <Image style={styles.result} source={require('../assets/elements/reportcard.jpg')} />
        </Card>

          <Card style={styles.cardstyle} left middle shadow>
                <Text
                    caption
                    gray
                    height={24}
                    style={{ fontSize:19 }}
                    >
                    <Text bold style={{ fontSize:19 }}>Remarks:</Text>{"\n"}
                    Student have done so good in Maths. Students should focus much on English as well. Overall the performance is good.
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
  result:{
      height:width/2,
      width:width/1.2,
  },
  
  lineStyle:{
    borderWidth: 0.2,
    borderColor:'black',
    margin:10,
    
  },
  examdetails:{
    margin:5,
    fontSize: 19,
  },
  cardstyle: {
    margin:15,
},


});