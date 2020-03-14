import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios'

class Online extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      circle: {
        width: 40 ,
        height: 40,
        borderRadius: 100 / 2,
        backgroundColor:red,
        marginLeft:40
      }
    };
  }
  

  componentDidMount() {
    axios.get(`http://192.168.1.111:3001/api/online`).then(response => {
      this.setState({status: response.data});
      if(response.data.status=='online'){
        this.setState({ circle: backgroundColor='green'})
      }
    });
  }
  render() {
   const{status}=this.state
   console.log(status)
    return (
        <View>
          <Text style={{fontSize:20}}>
          league status:</Text>
        <View style={this.state.circle} />
        </View>
    );
  }
}



export default Online;
