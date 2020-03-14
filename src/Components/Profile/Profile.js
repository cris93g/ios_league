import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import axios from 'axios';
import {Link} from 'react-router-native';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: [],
    };
  }
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    axios
      .post(`http://192.168.1.111:3001/api/log`, {
        username: this.props.match.params.user,
      })
      .then(response => {
        if (this._isMounted) {
          this.setState({summoner: response.data});
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const {summoner} = this.state;
    let add = summoner.wins + summoner.losses;
    let winP = summoner.wins / add;
    return (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          {summoner ? (
            <>
             
              <Image
                style={{
                  width: 150, height: 150, borderRadius: 25,
                  alignContent: "center",
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  justifyContent: "center",
                  alignItems: "center"}}
                source={{
                  uri: `http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/${summoner.profileIconId}.png`,
                }}
              />
              <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: '10%' }}>{`${summoner.summonerName}`}</Text>
              {summoner.tier == `BRONZE` ? (
                <Image
                  style={{width: 70, height: 70}}
                  source={require('../../icons/Emblem_Bronze.png')}
                />
              ) : summoner.tier == `SILVER` ? (
                <Image
                  style={{
                    width: 70,
                    height: 70,
                   
                   
                  }}
                  source={require('../../icons/Emblem_Silver.png')}
                />
              ) : summoner.tier == `GOLD` ? (
                <Image
                  style={{width: 70, height: 70}}
                  source={require('../../icons/Emblem_Gold.png')}
                />
              ) : summoner.tier == `PLATINUM` ? (
                <Image
                  sstyle={{width: 70, height: 70}}
                  source={require('../../icons/Emblem_Platinum.png')}
                />
              ) : summoner.tier == `DIAMOND` ? (
                <Image
                  style={{width: 70, height: 70}}
                  source={require('../../icons/Emblem_Diamond.png')}
                />
              ) : summoner.tier == `MASTER` ? (
                <Image
                  style={{width: 70, height: 70}}
                  source={require('../../icons/Emblem_Master.png')}
                />
              ) : summoner.tier == `GRANDMASTER` ? (
                <Image
                  style={{width: 70, height: 70}}
                  source={require('../../icons/Emblem_Grandmaster.png')}
                />
              ) : summoner.tier == `CHALLENGER` ? (
                <Image
                  style={{width: 70, height: 70}}
                  source={require('../../icons/Emblem_Challenger.png')}
                />
              ) : (
                                <Text style={{
                                  fontSize: 20,
                                }}>sorry no rank</Text>
              )}
              <Text
                style={{
                  fontSize: 20,
                }}>{`lv: ${summoner.summonerLevel}`}</Text>

              <Text style={{
                fontSize: 18,
              }}>{`wins: ${summoner.wins}`}</Text>
              <Text style={{
                fontSize: 18,
              }}>{`looses: ${summoner.losses}`}</Text>
              
            </>
          ) : (
              <Text style={{
                fontSize: 18,
              }}>no username found</Text>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}>
          <>
            <Link to={`/history/${summoner.accountId}`}>
              <Text
                style={{
                  display: 'flex',
                  marginTop: -250,
                  marginLeft: '25%',
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
                Match History
              </Text>
            </Link>
            <Link to={`/game/${summoner.id}`}>
              <Text
                style={{
                  marginTop: -250,
                  marginLeft: '20%',
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
                In Game
              </Text>
            </Link>
          </>
        </View>
      </>
    );
  }
}

export default Profile;
