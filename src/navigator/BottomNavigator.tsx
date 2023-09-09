import React, { Component, useState, useRef } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DiscoverScreen from '../screens/DiscoverScreen';
import PesananScreen from '../screens/PesananScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function HomeStack() {
    return (

        <SafeAreaView>
            <Text>Home</Text>
        </SafeAreaView>

    );
}

function MyTabs({ onhideBottom, token, profile, profileActive }) {
    let height = 0;
    if (Platform.OS === 'ios') {
        if (!onhideBottom) {
            height = 80;
        } else {
            height = 0;
        }
    } else {
        if (!onhideBottom) {
            height = 55;
        } else {
            height = 0;
        }
    }
    return (

        <Tab.Navigator
            backBehavior="none"
            initialRouteName="TRANSAKSI"
            detachInactiveScreens
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#3AC5D1',
                tabBarInactiveTintColor: '#C4C4C4',
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#f2f2f2',
                },
                tabBarStyle: {
                    height,
                    // display: !onhideBottom ? 'flex' : 'none',
                },
            }}>
            <Tab.Screen
                name="TRANSAKSI"
                component={DiscoverScreen}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: !onhideBottom ? 'flex' : 'none',
                            }}>
                            <Icon name={'food-fork-drink'} color={color} size={20} />
                            <Text
                                style={{
                                    color: focused ? '#3AC5D1' : '#C4C4C4',
                                    fontSize: 11,
                                    marginTop: 2,
                                }}>
                                Transaksi
                            </Text>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="NATIVE"
                component={PesananScreen}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: !onhideBottom ? 'flex' : 'none',
                            }}>
                                  <AntDesign name={'shoppingcart'} color={color} size={20} />
                            <Text
                                style={{
                                    color: focused ? '#3AC5D1' : '#C4C4C4',
                                    fontSize: 11,
                                    marginTop: 2,
                                }}>
                                Native Module
                            </Text>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="FORUM"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: !onhideBottom ? 'flex' : 'none',
                            }}>
                                 <MaterialIcons name={'forum'} color={color} size={20} />
                                
                            <Text
                                style={{
                                    color: focused ? '#3AC5D1' : '#C4C4C4',
                                    fontSize: 11,
                                    marginTop: 2,
                                }}>
                                Drag
                            </Text>
                        </View>

                    ),
                    tabBarIconStyle: {},
                }}
            // listeners={() => ({
            //   tabPress: (e) => {
            //     e.preventDefault()
            //     alert(JSON.stringify(e)) // <-- Here you put the name where the chat component is declared 
            //   },
            // })}
            />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    homeIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    accountProfile: {
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
    },
});

class MyTabsComponent extends Component {
    shouldComponentUpdate(nextProps) {
        let shouldComponentUpdate = false;

        const { onhideBottom, token, profile, profileActive } = this.props;
        if (onhideBottom !== nextProps?.onhideBottom) {
            shouldComponentUpdate = true;
        }
        if (token !== nextProps?.token) {
            shouldComponentUpdate = true;
        }
        if (
            profile?.data?.profile_picture !==
            nextProps?.profile?.data?.profile_picture
        ) {
            shouldComponentUpdate = true;
        }
        if (
            JSON.stringify(profileActive) !== JSON.stringify(nextProps?.profileActive)
        ) {
            shouldComponentUpdate = true;
        }
        return shouldComponentUpdate;
    }

    render() {
        const { onhideBottom, token, profile, profileActive } = this.props;
        const tapProps = {
            onhideBottom,
            token,
            profile,
            profileActive,
        };
        return <MyTabs {...tapProps} />;
    }
}
export default MyTabsComponent;
