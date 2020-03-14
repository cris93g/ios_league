import React,{Component} from "react"
import{View,Text} from "react-native"
import axios from "axios"
class Status extends Component{
    constructor(props){
        super(props)
        this.state={
            leagueStatus:[]
        }
    }
    componentDidMount(){
        axios.get(`http://192.168.1.111:3001/api/online`).then(response =>{
            this.setState({leagueStatus:response.data})
        })
    }
    render(){
        console.log(leagueStatus)
        return(
            <View>
                <Text>stat</Text>
            </View>
        )
    }
}

export default Status;