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

export default class Suggestion extends Component {
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
    title: 'Suggestion',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#2BDA8E'
    },
  });


  render() {
    const { profile, navigation } = this.props;

    return (
      
      <ScrollView style={{ marginVertical: theme.sizes.padding }}  showsVerticalScrollIndicator={true}>
          
          <View style={styles.Container}>
            <Image
              source={require("../assets/elements/profile-pic.jpg")} 
              style={styles.circleImageLayout}
            />
            <Text style={styles.text}>Robert Downey Jr.</Text>
          </View>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption  style={styles.portfolio}>Class name:  Class 8 Sec A </Text>
              <Text  caption  style={styles.portfolio}>Father name: Michael Downy Jr.  </Text>
              <Text  caption  style={styles.portfolio}>Mother name:  Nebula Downy </Text>
              <Text  caption  style={styles.portfolio}>Guardian name:  N/A </Text>
              <Text  caption  style={styles.portfolio}>Blood Group:   B positive </Text>
              <Text  caption  style={styles.portfolio}>Current Address:  Sunsity, Kathmandu </Text>
              <Text  caption  style={styles.portfolio}>Date of Birth:  1996/04/25 </Text>

          </Card>
          <Block padding={[0, theme.sizes.base * 10]}>
          <Button style={styles.shadow} gradient onPress={() => this.props.navigation.goBack()} >
                <Text bold white center>
                  GOT IT
                </Text>
            </Button>
         </Block>
       
                    
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

  circleImageLayout: {
    width: 110,
    height: 110,
    borderRadius: 200 / 2
  },

  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 30
  },
  portfolio: {
    fontSize: 19,
    margin:8,
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

});
