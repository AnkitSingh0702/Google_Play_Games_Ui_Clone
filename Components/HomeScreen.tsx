import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.mainview}>
        <StatusBar backgroundColor="#181818" />
        <ScrollView>
          <View style={styles.view1}>
            <AntDesign
              name="search1"
              size={26}
              color="#8d8d8d"
              style={{ marginLeft: 20 }}
            />
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/main1.png")}
                style={styles.mainimage}
              />
              <Text style={styles.text1}>Games</Text>
            </View>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color="#8d8d8d"
              style={{ marginRight: 10 }}
            />
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 14,
            }}
          >
            <Image
              source={require("../assets/video.gif")}
              style={{
                height: 180,
                width: 340,
                borderRadius: 15,
                overlayColor: "#181818",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 45,
            }}
          >
            <Text
              style={{
                marginLeft: 25,
                fontWeight: "200",
                fontSize: 20,
                color: "#fff",
              }}
            >
              Continue playing
            </Text>
            <Feather
              name="arrow-right"
              size={22}
              color="#8d8d8d"
              style={{ marginRight: 22, marginTop: 4 }}
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginTop: 25, flexDirection: "row" }}>
              <View>
                <Image
                  source={require("../assets/game1.png")}
                  style={styles.gameimage}
                />
                <Text
                  style={{
                    marginLeft: 25,
                    fontWeight: "200",
                    color: "#fff",
                    letterSpacing: 1,
                    marginTop: 6,
                  }}
                >
                  Minecraft Trail
                </Text>
                <Text
                  style={{
                    marginLeft: 25,
                    fontSize: 10,
                    color: "#8d8d8d",
                    marginTop: 3,
                  }}
                >
                  2 days ago
                </Text>
                <Text style={styles.btn}>Play</Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <Image
                  source={require("../assets/candy.jpg")}
                  style={styles.gameimage}
                />
                <Text
                  style={{
                    marginLeft: 25,
                    fontWeight: "200",
                    color: "#fff",
                    letterSpacing: 1,
                    marginTop: 6,
                  }}
                >
                  Candy Crush
                </Text>
                <Text
                  style={{
                    marginLeft: 25,
                    fontSize: 10,
                    color: "#8d8d8d",
                    marginTop: 3,
                  }}
                >
                  2 days ago
                </Text>
                <Text style={styles.btn}>Play</Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <Image
                  source={require("../assets/call.jpg")}
                  style={styles.gameimage}
                />
                <Text
                  style={{
                    marginLeft: 25,
                    fontWeight: "200",
                    color: "#fff",
                    letterSpacing: 1,
                    marginTop: 6,
                  }}
                >
                 Call of Duty
                </Text>
                <Text
                  style={{
                    marginLeft: 25,
                    fontSize: 10,
                    color: "#8d8d8d",
                    marginTop: 3,
                  }}
                >
                  2 days ago
                </Text>
                <Text style={styles.btn}>Play</Text>
              </View>
            </View>
          </ScrollView>

          <View style={{ marginTop: 50, marginLeft: 25 }}>
            <View>
              <Text
                style={{ color: "#fff", fontWeight: "300", letterSpacing: 1 }}
              >
                Top three instant plays
              </Text>
              <Text style={{ color: "#8d8d8d" }}>play the full game</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                marginRight: 25,
              }}
            >
              <Image
                source={require("../assets/video2.gif")}
                style={{
                  height: 180,
                  width: 340,
                  borderRadius: 8,
                  overlayColor: "#181818",
                }}
              />
            </View>
            <View>
              <View
                style={{
                  marginLeft: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "200",
                      color: "#fff",
                      fontSize: 15,
                      letterSpacing: 1,
                    }}
                  >
                    Clash Of Clans
                  </Text>
                  <Text style={{ color: "#8d8d8d", fontSize: 10 }}>
                    Supercell
                  </Text>
                </View>

                <View style={styles.btn2}>
                  <MaterialCommunityIcons
                    name="lightning-bolt"
                    size={21}
                    color="green"
                    style={{ marginTop: 2 }}
                  />
                  <Text style={{ color: "green", marginTop: 2 }}>
                    {" "}
                    Instant play
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                marginRight: 25,
              }}
            >
              <Image
                source={require("../assets/video3.gif")}
                style={{
                  height: 180,
                  width: 340,
                  borderRadius: 8,
                  overlayColor: "#181818",
                }}
              />
            </View>
            <View>
              <View
                style={{
                  marginLeft: 5,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "200",
                      color: "#fff",
                      fontSize: 15,
                      letterSpacing: 1,
                    }}
                  >
                    Clash Of Royal
                  </Text>
                  <Text style={{ color: "#8d8d8d", fontSize: 10 }}>
                    Supercell
                  </Text>
                </View>

                <View style={styles.btn2}>
                  <MaterialCommunityIcons
                    name="lightning-bolt"
                    size={21}
                    color="green"
                    style={{ marginTop: 2 }}
                  />
                  <Text style={{ color: "green", marginTop: 2 }}>
                    {" "}
                    Instant play
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  marginRight: 25,
                }}
              >
                <Image
                  source={require("../assets/video4.gif")}
                  style={{
                    height: 180,
                    width: 340,
                    borderRadius: 8,
                    overlayColor: "#181818",
                  }}
                />
              </View>
              <View>
                <View
                  style={{
                    marginLeft: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 15,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontWeight: "200",
                        color: "#fff",
                        fontSize: 15,
                        letterSpacing: 1,
                      }}
                    >
                      Call Of Duty
                    </Text>
                    <Text style={{ color: "#8d8d8d", fontSize: 10 }}>
                      Activision Publishing
                    </Text>
                  </View>

                  <View style={styles.btn2}>
                    <MaterialCommunityIcons
                      name="lightning-bolt"
                      size={21}
                      color="green"
                      style={{ marginTop: 2 }}
                    />
                    <Text style={{ color: "green", marginTop: 2 }}>
                      {" "}
                      Instant play
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>



          <View
            style={{
             
              marginTop: 30,
              marginLeft: 25,
            }}
          >
            <Text
              style={{
                fontWeight: "200",
                fontSize: 20,
                color: "#fff",
              }}
            >
              Playlists
            </Text>
            <Text style ={{color :'#8d8d8d'}}>Try games back to back</Text>
           
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginTop: 25, flexDirection: "row" }}>
              <View>
                <Image
                  source={require("../assets/car.jpg")}
                  style={styles.gameimage1}
                />
                
                <View style ={styles.btn1}>
                <Ionicons name="ios-play-circle-outline" size={24} color="green" />
                  <Text style ={{color:'green'}}>Try all</Text>
                </View>
              </View>
              <View style={{ marginLeft: 20 }}>
                <Image
                  source={require("../assets/gun.jpg")}
                  style={styles.gameimage1}
                />
               
                <View style ={styles.btn1}>
                <Ionicons name="ios-play-circle-outline" size={24} color="green" />
                  <Text style ={{color:'green'}}>Try all</Text>
                </View>
              </View>
              <View style={{ marginLeft: 20 }}>
                <Image
                  source={require("../assets/clash.jpg")}
                  style={styles.gameimage1}
                />
                
                <View style ={styles.btn1}>
                <Ionicons name="ios-play-circle-outline" size={24} color="green" />
                  <Text style ={{color:'green'}}>Try all</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#181818",
  },
  view1: {
    marginVertical: 55,
    // marginTop: 55,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "800",
    marginLeft: 10,
  },
  mainimage: {
    height: 30,
    width: 30,
  },
  gameimage: {
    height: 150,
    width: 150,
    borderRadius: 25,
    marginLeft: 25,
  },
  gameimage1: {
    height: 260,
    width: 200,
    borderRadius: 25,
    marginLeft: 25,
  },
  btn: {
    borderColor: "#8d8d8d",
    borderWidth: 1,
    textAlign: "center",
    color: "green",
    padding: 7,
    marginLeft: 25,
    marginTop: 10,
    borderRadius: 4,
  },
  btn2: {
    flexDirection: "row",
    marginRight: 30,
    borderColor: "#8d8d8d",
    borderWidth: 1,
    textAlign: "center",
    color: "#fff",
    borderRadius: 4,
    paddingHorizontal: 13,
    paddingVertical: 2,
  },
  btn1:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection: "row",
    marginLeft:25,
    borderColor: "#8d8d8d",
    borderWidth: 1,
  marginTop:9,
    color: "green",
    borderRadius: 4,
    padding:7
  }
  
});
