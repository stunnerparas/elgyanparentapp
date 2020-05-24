import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
const { width } = Dimensions.get("window");


import { Card } from "../components";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";


export default class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false
  };
  static navigationOptions = {
    headerShown: false
  };

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }
    if (password !== VALID_PASSWORD) {
      errors.push("password");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      navigation.navigate("Browse");
    }
    if(errors.length)
    {
      alert("Invalid username/password combination !")
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.s : null);
    

    return (
      <ScrollView style={{ marginVertical: theme.sizes.padding,backgroundColor: "#eff7f4" }} >
      <KeyboardAvoidingView style={styles.login} >
        
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
          {"\n"}
          <Text h2 light>
           
          </Text>
          </Text>
          
        </Block>

         
        <Card style={styles.cardstyle}>  

        <Block style= {styles.logoblock}> 
         <Image  style= {styles.logoimage} source={require('../assets/loginicon.png')}
         />     
         <Text h1 center>Login to Proceed{"\n"}</Text>   
          </Block>

        <Block padding={[0, theme.sizes.base * 0.6]}>
          <Block middle>
            <Input  
              placeholder="Username or Email"
              placeholderTextColor="#8FE7C1"
              error={hasErrors("email")}
              style={[styles.textInput, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input 
              placeholder="Password"
              placeholderTextColor="#8FE7C1"
              secureTextEntry={true}
              error={hasErrors("password")}
              style={[styles.textInput, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Text>{"\n"}</Text>

            <Button  style={styles.loginbutton} gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Login
                </Text>
              )}
            </Button>

           
          </Block>
        </Block>
        </Card>
        <Text style={styles.elgyan} center h2 light>
            Powered By Elgyan
          </Text>
       
      </KeyboardAvoidingView>
        </ScrollView>

    );
  }
}




const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center"
  },
  logoblock: {
    justifyContent: 'center',
        alignItems: 'center', 
        
  },
  logoimage: {
        width: width * 0.4, 
        height: width * 0.5 * 0.7,
        
  },

  loginbutton: {
  
    borderRadius: 25,
    margin:5,
  },
  
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    borderRadius: 25,
    backgroundColor:'#F2F2F2',

   },

  input: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  cardstyle: {
    margin:24,
    shadowColor: 'black',
    shadowOpacity: 3,
    elevation:9,
    shadowRadius: 15 ,
    shadowOffset : { width: 25, height: 13},
    borderRadius: 15,
  },
  elgyan:
  {
    fontSize:17,
    margin:50,
  },
  

image: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
},


  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
