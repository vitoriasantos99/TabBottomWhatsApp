import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from "./components/ChatScreen";
import ComunitieScreen from "./components/ComunitieScreen";
import StatusScreen from "./components/StatusScreen";
import CallScreen from "./components/CallScreen";

const Tab = createBottomTabNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1}}> 
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={
                        ({route}) => (
                            {
                                tabBarIcon: ({focused, color, size}) => {
                                     let iconName;

                                     if(route.name === 'Chat'){
                                        iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
                                     }
                                     else if(route.name === 'Comunities'){
                                        iconName = focused ? 'people-circle' : 'people-circle-outline'
                                     }
                                     else if(route.name === 'Status'){
                                        iconName = focused ? 'unlink' : 'unlink-outline'
                                     }
                                     else if(route.name === 'Call'){
                                        iconName = focused ? 'call-sharp' : 'call-outline'
                                     }
                                     
                                     return <Icon name={iconName} size={size} color={color}/>
                                },
                                tabBarActiveTintColor: '#ea81ca',
                                tabBarInactiveTintColor: '#000',
                            }
                        )
                    }
                >
                    <Tab.Screen name="Chat" component={ChatScreen}/>
                    <Tab.Screen name="Comunities" component={ComunitieScreen}/>
                    <Tab.Screen name="Status" component={StatusScreen}/>
                    <Tab.Screen name="Call" component={CallScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}