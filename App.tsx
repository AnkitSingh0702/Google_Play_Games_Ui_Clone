import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./Components/HomeScreen";
import Library from "./Components/Library";
import Profile from "./Components/Profile";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#0f9b0f"
        inactiveColor="#8d8d8d"
        barStyle={{ backgroundColor: "#191919", paddingBottom: 5 }}
        
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",

            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: "Library",

            tabBarIcon: ({ color }) => (
              <MaterialIcons name="library-books" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
  },
});
