import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Image,
} from 'react-native';
import {Link} from 'react-router-native';

import Online from "../Status/Online"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      status:[]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = text => {
    this.setState({
      username: text,
    });
  };


  render() {
    const {username} = this.state;
   
    return (
      <>
      
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginTop:'40%',
            // justifyContent: 'center',
            alignItems: 'stretch',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 40,
              textAlign: 'center',
              marginBottom: '10%',
            }}>
            My League Team
          </Text>
          <Image
            style={{width: '100%', height: '40%'}}
            source={require('../../img/league.png')}
          />
          <Text style={{textAlign: 'center',fontSize:20}}>username</Text>
          <TextInput
            name="username"
            onChangeText={this.handleChange}
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: '80%',borderRadius:20, justifyContent: 'center', marginRight: 'auto',marginLeft:'auto'}}
          />
          <Link to={`/profile/${username}`}>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 'auto',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
                marginRight: 'auto',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 125,
                borderColor: 'gray',
                borderWidth: 0.5,
                
              }}>
              Search
            </Text>
          </Link>    
        </View>
        <View>
          
          
        </View>
        
      </>
    );
  }
}

export default Home;
