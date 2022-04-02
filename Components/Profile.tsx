import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import Profilebottom from "./Profilebottom";
import { SafeAreaProvider } from "react-native-safe-area-context";





const Profile = () => {

  return (
      
  <SafeAreaProvider>

    <View style={styles.mainview}>
      <View style={styles.view1}>
        <MaterialIcons
          name="edit"
          size={26}
          color="#8d8d8d"
          style={{ marginLeft: 20 }}
        />
        <Text style={styles.text1}>Profile</Text>
        <View style={{ flexDirection: "row" }}>
          <Feather
            name="link-2"
            size={26}
            color="#8d8d8d"
            style={{ marginRight: 15 }}
          />
          <Entypo
            name="dots-three-vertical"
            size={24}
            color="#8d8d8d"
            style={{ marginRight: 10 }}
          />
        </View>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center", }}>
        <Image source={require("../assets/avatar2.png")} style={styles.image} />
        <Text
          style={{
            marginTop: 26,
            fontSize: 30,
            letterSpacing: 1,
            color: "#fff",
          }}
        >
          ExcellentSuit27
        </Text>
        <View style ={{flexDirection:'row', borderWidth:1 , borderColor:'#8d8d8d',padding:7, borderRadius:50, marginTop:10}}>
        <Text style ={{color:'#fff', letterSpacing:1}}>as.ankitsingh0702@gmail.com</Text>
        <AntDesign name="down" size={15} color="#8d8d8d" style ={{marginLeft:10, marginTop:3}}  />
        </View>
      </View>


<Profilebottom />



    </View>
  </SafeAreaProvider>
      
      
     
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "#181818",
  },
  view1: {
    marginVertical:55,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 18,
    marginLeft: 30,
    color: "#fff",
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 50,
    
    marginLeft: 6,
  },
});


