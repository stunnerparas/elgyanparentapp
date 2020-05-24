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

export default class Library extends Component {
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
    title: 'Library',
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
          <Image source={require('../assets/elements/library.png')} />
          <Text h2 center light>
            Library
          </Text>
        </View>


          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date of borrow:</Text>  2020/05/11</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date to return:</Text>  2020/05/19</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Name of book:</Text>  The Alchemist</Text>
          </Card>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date of borrow:</Text>  2020/05/11</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date to return:</Text>  2020/05/19</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Name of book:</Text>  3 mistake of my life</Text>
          </Card>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date of borrow:</Text>  2020/05/11</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date to return:</Text>  2020/05/19</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Name of book:</Text>  One night of Call center</Text>
          </Card>
          <Card style={styles.cardstyle} left middle shadow>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date of borrow:</Text>  2020/05/11</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Date to return:</Text>  2020/05/19</Text>
              <Text  caption   style={styles.portfolio}><Text bold style={styles.portfolio}>Name of book:</Text>  Palpasa Cafe</Text>
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



  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  portfolio: {
    fontSize: 17,
    margin: 5,
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