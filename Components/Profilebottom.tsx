import { StyleSheet, Text, View,TextInput } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';

const Profilebottom = () => {
  function Achivements() {
    return (
      <View
        style={{ flex: 1, alignItems:'center', backgroundColor: "#181818", }}
      >
        <View style ={{ alignItems:'center'}}>

        <Text
          style={{
            marginTop: 28,
            fontWeight: "400",
            fontSize: 18,
            color: "#fff",
           
          }}
        >
          Let's do this! Play some games to level
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 18, color: "#fff" }}>
          up.
        </Text>

<View style ={{flexDirection:'row', marginTop:20,backgroundColor:'#383838',borderRadius:15,}}>
  <Text style={{ backgroundColor:'#2C7744', borderRadius:50,paddingHorizontal:15,paddingVertical:4}}>1</Text>
  <Text style={{marginLeft:250, marginRight:10,marginTop:3}}>2</Text>
</View>


<View style={{flexDirection:'row',marginTop:10,}}>

  <Text  style ={{color:'#2C7744'}}>1,000 XP</Text>
  <Text style ={{color:'#8d8d8d'}}>  TO LEVEL 2</Text>
</View>

        </View>


      </View>
    );
  }
  function Friends() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#181818",
        }}
      >
          <View style ={{marginTop:17,flexDirection:"row",justifyContent:'space-between', borderWidth:1.5,borderRadius:25,borderColor:"#8d8d8d",padding:7,marginLeft:30, marginRight:30}}>
              <TextInput
              placeholder="Search for players"
              
              />
              <EvilIcons name="search" size={24} color="#8d8d8d" style ={{marginTop:4}}/>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth:1.5,
              borderRadius:7,
              padding:10,
              
              backgroundColor:'#2C7744',
              marginTop: 17,
        marginLeft:30,
        marginRight:30,
            }}
          >
            <Text
              style={{
                
                fontWeight: "100",
                fontSize: 18,
                color: "#fff",
              }}
            >
              Get a link to invite your friends
            </Text>
            <Feather
            name="link-2"
            size={26}
            color="green"
            
          />
          </View>
         

      </View>
    );
  }
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#8d8d8d",
        tabBarIndicatorStyle: {
          borderWidth: 1.5,
          borderColor: "#2C7744",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
        tabBarStyle: {
          backgroundColor: "#181818",

          borderBottomColor: "#8d8d8d",
        },
      }}
    >
      <Tab.Screen
        name="Achivements"
        component={Achivements}
        options={{
          tabBarLabel: "Achivements",

          tabBarShowIcon: true,
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="numeric-0"
                size={24}
                color={color}
              />
            );
          },
          tabBarIconStyle: {
            marginBottom: -8,
          },
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: "Library",

          tabBarShowIcon: true,
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="numeric-0"
                size={24}
                color={color}
              />
            );
          },
          tabBarIconStyle: {
            marginBottom: -8,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Profilebottom;

const styles = StyleSheet.create({});
