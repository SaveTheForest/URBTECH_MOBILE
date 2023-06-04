import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";
import Community from "../pages/Community";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
//
//
export default function AuthRoute() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return <Ionicons name="person" size={size} color={color} />;
            } else {
              return <FontAwesome name="group" size={size} color={color} />;
            }

            // You can return any component that you like here!
          },
          tabBarActiveTintColor: "#98C065",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Community" component={Community} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}