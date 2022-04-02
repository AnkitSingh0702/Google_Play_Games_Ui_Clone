import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Library = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.mainview}>
        <StatusBar backgroundColor="#181818" />

        <ScrollView showsVerticalScrollIndicator ={false}>
          <View style={styles.view1}>
            <AntDesign
              name="search1"
              size={26}
              color="#8d8d8d"
              style={{ marginLeft: 20 }}
            />
            <Text style={styles.text1}>Library</Text>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color="#8d8d8d"
              style={{ marginRight: 10 }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
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

          <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
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

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#8d8d8d",
              marginTop: 35,
            }}
          ></View>

          <View
            style={{
              marginTop: 25,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.text}>Install and play again </Text>
              <Text
                style={{ color: "#8d8d8d", marginLeft: 25, letterSpacing: 1 }}
              >
                Sorted by recently updated
              </Text>
            </View>
            <MaterialIcons
              name="sort"
              size={26}
              color="#8d8d8d"
              style={{ marginRight: 22, marginTop: 5 }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <View>
              <Image
                source={require("../assets/ball.jpg")}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  marginLeft: 25,
                }}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#8d8d8d",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginRight: 40 }}>
                <Text
                  style={{ color: "#fff", fontWeight: "200", letterSpacing: 1 }}
                >
                  Ball King - Arcade Basketball
                </Text>
                <Text
                  style={{ color: "#8d8d8d", fontSize: 10, letterSpacing: 1 }}
                >
                  0/11 Achivements
                </Text>
                <Text style={{ color: "#8d8d8d", fontSize: 10 }}>
                  updated 16 Oct 2020
                </Text>
              </View>
              <AntDesign
                name="download"
                size={21}
                color="green"
                style={{ marginRight: 23, marginBottom: 2 }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <View>
              <Image
                source={require("../assets/ball.jpg")}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  marginLeft: 25,
                }}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#8d8d8d",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginRight: 40 }}>
                <Text
                  style={{ color: "#fff", fontWeight: "200", letterSpacing: 1 }}
                >
                  Ball King - Arcade Basketball
                </Text>
                <Text
                  style={{ color: "#8d8d8d", fontSize: 10, letterSpacing: 1 }}
                >
                  0/11 Achivements
                </Text>
                <Text style={{ color: "#8d8d8d", fontSize: 10 }}>
                  updated 16 Oct 2020
                </Text>
              </View>
              <AntDesign
                name="download"
                size={21}
                color="green"
                style={{ marginRight: 23, marginBottom: 2 }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <View>
              <Image
                source={require("../assets/ball.jpg")}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  marginLeft: 25,
                }}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#8d8d8d",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginRight: 40 }}>
                <Text
                  style={{ color: "#fff", fontWeight: "200", letterSpacing: 1 }}
                >
                  Ball King - Arcade Basketball
                </Text>
                <Text
                  style={{ color: "#8d8d8d", fontSize: 10, letterSpacing: 1 }}
                >
                  0/11 Achivements
                </Text>
                <Text style={{ color: "#8d8d8d", fontSize: 10 }}>
                  updated 16 Oct 2020
                </Text>
              </View>
              <AntDesign
                name="download"
                size={21}
                color="green"
                style={{ marginRight: 23, marginBottom: 2 }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <View>
              <Image
                source={require("../assets/ball.jpg")}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  marginLeft: 25,
                }}
              />
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#8d8d8d",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginRight: 40 }}>
                <Text
                  style={{ color: "#fff", fontWeight: "300", letterSpacing: 1 }}
                >
                  Ball King - Arcade Basketball
                </Text>
                <Text
                  style={{ color: "#8d8d8d", fontSize: 10, letterSpacing: 1 }}
                >
                  0/11 Achivements
                </Text>
                <Text style={{ color: "#8d8d8d", fontSize: 10 }}>
                  updated 16 Oct 2020
                </Text>
              </View>
              <AntDesign
                name="download"
                size={21}
                color="green"
                style={{ marginRight: 23, marginBottom: 2 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

export default Library;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#181818",
  },
  view1: {
    marginTop: 55,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "200",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
    letterSpacing: 1,
    marginLeft: 25,
  },
  gameimage: {
    height: 150,
    width: 150,
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
    marginTop: 8,
    borderRadius: 4,
  },
});
