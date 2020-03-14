import React, { Component } from "react"
import { View, Text, Image, ScrollView, } from "react-native"
import {Link} from "react-router-native"
import axios from "axios"
class InGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: [],
            champion:[],
            spells:[]
        }
    }
    componentDidMount() {
        axios.post('http://192.168.1.111:3001/api/game',{
            id:this.props.match.params.id
        }).then(res =>{
            this.setState({game:res.data})
        })

        axios.get('http://192.168.1.111:3001/api/champ').then(
            res=>{
                this.setState({champion:res.data})
            }
        );

        axios.get('http://192.168.1.111:3001/api/spells').then(res =>{
            this.setState({spells:res.data})
        })
    }

    render() {
        const {game}=this.state
        const {champion}=this.state
        let arr1=[]
        let arr2=[]
    for (let i = 0; i < game.length; i++) {
        if (game[i].teamId == 100) {
            arr1.push(game[i])
        } else if (game[i].teamId == 200) {
            arr2.push(game[i])
        }
    }
        const {spells}=this.state
       console .log(arr1)
      return(
          <ScrollView>
              <View style={{
            
          }}>
              {game.length>1 ?  
                      <View style={{
                          flex: 1, flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center',marginLeft:'auto',marginTop:'10%'
                      }} >
                      <View >{arr1 ? arr1.map(item =>{
                  return(
                      <View style={{
                          
                      }}>
                          <View style={{ width:200, }}>
                          <Link to={`/profile/${item.summonerName}`}>

                                  <Text style={{ fontSize: 25}}>{item.summonerName}</Text></Link>
                          <Image style={{
                              width: 80, height: 80, borderRadius: 25, }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/${item.profileIconId}.png` }} />
                             
                            </View>
                          <View >{champion ? (
                              champion.map(champ =>{
                                  if(champ.key==item.championId){
                                    return(
                                        <Image style={{
                                            width: 60, height: 60, borderRadius: 25,
                                        }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/champion/${champ.id}.png`}}/>
                                    )
                                  }
                              })
                              )
                              : <Text>cant load champ image</Text>}</View>
                          <View style={{
                              flex: 1,
                              flexDirection: 'row',}}>
                              {spells ? (
                                  spells.map(spell => {
                                      
                                      
                                      if (spell.key == item.spell1Id) {
                                          return (
                                         <View>
                                              <Image style={{
                                                  width: 40, height: 40, borderRadius: 25,
                                              }} source={{
                                                  uri:`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/spell/${spell.image.full}` }} />
                                                  
                                                  </View>
                                          )
                                      }

                                      if (spell.key == item.spell2Id) {
                                          return (
                                              <View>
                                                  <Image style={{
                                                      width: 40, height: 40, borderRadius: 25,
                                                  }} source={{
                                                      uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/spell/${spell.image.full}`
                                                  }} />

                                              </View>
                                          )
                                      }
                                  }
                                  )
                              )
                                  : <Text>cant load champ image</Text>}
                          </View>
                      </View>
                      
                  )
              }):<Text>...loading</Text>}</View>
                  <View>{arr2 ? arr2.map(item => {
                      return (
                          <View style={{ width:250, }}>
                              <Link to={`/profile/${item.summonerName}`}>
                                  <Text style={{ fontSize: 25 }}>{item.summonerName}</Text></Link>
                              <Image style={{ width: 80, height: 80, borderRadius: 25 }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/${item.profileIconId}.png` }} />
                              <View >{champion ? (
                                  champion.map(champ => {
                                      if (champ.key == item.championId) {
                                          return (
                                              <Image style={{
                                                  width: 60, height: 60, borderRadius: 25,
                                              }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/champion/${champ.id}.png` }} />
                                          )
                                      }
                                  })
                              )
                                  : <Text>cant load champ image</Text>}</View>
                              <View style={{
                                  flex: 1,
                                  flexDirection: 'row',
                              }}>
                                  {spells ? (
                                      spells.map(spell => {


                                          if (spell.key == item.spell1Id) {
                                              return (
                                                  <View>
                                                      <Image style={{
                                                          width: 40, height: 40, borderRadius: 25,
                                                      }} source={{
                                                          uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/spell/${spell.image.full}`
                                                      }} />

                                                  </View>
                                              )
                                          }

                                          if (spell.key == item.spell2Id) {
                                              return (
                                                  <View>
                                                      <Image style={{
                                                          width: 40, height: 40, borderRadius: 25,
                                                      }} source={{
                                                          uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/spell/${spell.image.full}`
                                                      }} />

                                                  </View>
                                              )
                                          }
                                      }
                                      )
                                  )
                                      : <Text>cant load champ image</Text>}
                              </View>
                          </View>
                          
                      )
                  }) : <Text>...loading</Text>}</View>
                  </View>: 
                  <Text>sorry user not in game</Text>}
          </View>
        </ScrollView>
      )
    }
}

export default InGame;

//http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/champ.id.png

//http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/588.png