import React, { Component } from "react"
import { View, Text,Image,ScrollView } from "react-native"
import axios from "axios"
import {Link} from "react-router-native"


class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hist: [],
            champions:[],
            spells:[],
            col:''
           
        }
        
    }
    componentDidMount() {
       axios.post(`http://192.168.1.111:3001/api/match`,{
           accountId:this.props.match.params.accountId
       }).then(res =>{
           this.setState({hist:res.data})
       })



      axios.get('http://192.168.1.111:3001/api/champ').then(
        res => {
          this.setState({ champions: res.data })
        }
      );

      axios.get('http://192.168.1.111:3001/api/spells').then(res => {
        this.setState({ spells: res.data })
      })
    }

    render() {
      let col;
      console.log(this.state.col)
        const {hist,champions,spells}=this.state
        

        let displayItems=hist.map((items,i) =>{
          items.teamId==100 ? col="blue" : col= "red";
            return (
              <View>
              <View style={{backgroundColor:col}}>
                <View>
                
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop:'10%',
                  
                  
                }}>
                 
               <Link to={`/profile/${items.player.summonerName}`}> 
               <Text style={{fontSize:25}}>{items.player.summonerName}</Text>
               </Link>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 25,
                  }}
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/${items.player.profileIcon}.png`,
                  }}
                />               
              </View>
              <View>
                  {items.stats.win == true ? <Text style={{ fontSize: 25,textAlign: 'center'}}>Win</Text> : <Text style= {{fontSize:25,textAlign:'center'}}>Loose</Text>}
              </View>
              <View style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
              <View >{champions ? (
                  champions.map(champ => {
                   
                    if (champ.key == items.championId) {
                      return (
                        <Image  style={{
                          width: 60, height: 60, borderRadius: 25,
                        }} source={{ uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/champion/${champ.id}.png` }} />
                      )
                    }
                  })
                )
                  : <Text>cant load champ image</Text>}
                </View>
                
                  
                  {spells ? (
                    spells.map(spell => {


                      if (spell.key == items.spell1Id) {
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

                      if (spell.key == items.spell2Id) {
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
                <View style={{
                  flex:1,
                  flexDirection: 'row',
                }}>
                  <Image style={{
                    width: 40, height: 40, borderRadius: 25,
                  }} source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${items.stats.item0}.png`
                  }} />
                  <Image style={{
                    width: 40, height: 40, borderRadius: 25,
                  }} source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${items.stats.item1}.png`
                  }} />
                  <Image style={{
                    width: 40, height: 40, borderRadius: 25,
                  }} source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${items.stats.item2}.png`
                  }} />
                  <Image style={{
                    width: 40, height: 40, borderRadius: 25,
                  }} source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${items.stats.item3}.png`
                  }} />
                  <Image style={{
                    width: 40, height: 40, borderRadius: 25,
                  }} source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${items.stats.item4}.png`
                  }} />
                  <Image style={{
                    width: 40, height: 40, borderRadius: 25,
                  }} source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${items.stats.item5}.png`
                  }} />
                  <Image style={{
                    width: 40, height: 40, borderRadius: 25,
                  }} source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${items.stats.item6}.png`
                  }} />
                      
                </View></View><View style={{
                        marginTop:'10%',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        width: 600,
                      }}></View>
              </View>
            </View>
            );
        })
        return (<ScrollView>
            <View>
                {displayItems}
            </View></ScrollView>
        )
    }
}

export default History;