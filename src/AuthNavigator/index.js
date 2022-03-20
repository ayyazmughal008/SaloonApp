import 'react-native-gesture-handler';
import React from 'react';
import FastImage from 'react-native-fast-image'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SIZES, FONTS } from '../assets/Colors'
import Login from '../Screens/Login'
import Otp from '../Screens/Otp'
import Register from '../Screens/Register'
import Home from '../Screens/Home'
import Map from '../Screens/Map'
import History from '../Screens/History'
import Settings from '../Screens/Settings'
import Search from '../Screens/Search'


const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
const Stack4 = createStackNavigator();
const Stack5 = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack2.Navigator
            initialRouteName="Home"
        >
            <Stack2.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack2.Navigator>
    )
}
const MapStack = () => {
    return (
        <Stack3.Navigator
            initialRouteName="Map"
        >
            <Stack3.Screen
                name="Map"
                component={Map}
                options={{ headerShown: false }}
            />
        </Stack3.Navigator>
    )
}
const HistoryStack = () => {
    return (
        <Stack4.Navigator
            initialRouteName="History"
        >
            <Stack4.Screen
                name="History"
                component={History}
                options={{ headerShown: false }}
            />
        </Stack4.Navigator>
    )
}
const SettingStack = () => {
    return (
        <Stack5.Navigator
            initialRouteName="Settings"
        >
            <Stack5.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />
        </Stack5.Navigator>
    )
}
const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: heightPercentageToDP(8) },
            }}
            initialRouteName="HomeStack"

        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused, color, size }) => (
                        <FastImage
                            source={focused ?
                                require('../images/home_act.png')
                                : require('../images/home_non.png')
                            }
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7)
                            }}
                        />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.primaryColor,
                    tabBarInactiveTintColor: COLORS.black,

                }}

            />
            <Tab.Screen
                name="MapStack"
                component={MapStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused, color, size }) => (
                        <FastImage
                            source={focused ?
                                require('../images/map_act.png')
                                : require('../images/map_non.png')
                            }
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7)
                            }}
                        />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.primaryColor,
                    tabBarInactiveTintColor: COLORS.black,
                }}
            />
            <Tab.Screen
                name="HistoryStack"
                component={HistoryStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused, color, size }) => (
                        <FastImage
                            source={focused ?
                                require('../images/history_act.png')
                                : require('../images/history_non.png')
                            }
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7)
                            }}
                        />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.primaryColor,
                    tabBarInactiveTintColor: COLORS.black,
                }}
            />
            <Tab.Screen
                name="SettingStack"
                component={SettingStack}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused, color, size }) => (
                        <FastImage
                            source={focused ?
                                require('../images/setting_act.png')
                                : require('../images//setting_non.png')
                            }
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: focused ?
                                    widthPercentageToDP(11)
                                    : widthPercentageToDP(7),
                                height: focused ?
                                    widthPercentageToDP(11)
                                    : widthPercentageToDP(7),
                            }}
                        />
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.primaryColor,
                    tabBarInactiveTintColor: COLORS.black,
                }}
            />

        </Tab.Navigator>
    )
}


export const NavStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Otp"
                component={Otp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TabStack"
                component={TabStack}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

