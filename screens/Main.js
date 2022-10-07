import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { AddonIcon, SubscriptionIcon, TodaysMenuIcon, WeeklyIcon } from '../Constants/SVG';
import Menu from '../screens/Menu/Menu'
import { Colors } from '../Constants/Color';
import AddonsMain from './Addons/AddonsMain';
import SubscriptionActive from './SubscriptionActive/SubscriptionActive';
import NoSubscription from './NoSubscription';
const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarItemStyle: { marginTop: -15, backgroundColor: "white", borderTopWidth: 1, borderTopColor: Colors.grey90 }
            }}
        >
            <Tab.Screen name="todaysMenu"
                component=
                // {TodaysMenu}
                {NoSubscription}

                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        <View
                            style={[styles.tabBarIcon, { borderWidth: focused ? 2 : 0, }]}>
                            <SvgXml xml={TodaysMenuIcon} /></View>,
                    tabBarLabel: () => (
                        <Text style={styles.text}>Today's Menu</Text>
                    )
                }}
            />

            <Tab.Screen name="addons" component={AddonsMain}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>

                        <View style={[styles.tabBarIcon, { borderWidth: focused ? 2 : 0, }]}>
                            <SvgXml xml={AddonIcon} /></View>,
                    tabBarLabel: () => (
                        <Text style={styles.text}>Addons</Text>
                    )
                }}
            />
            <Tab.Screen name="menu" component={Menu}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>

                        <View style={[styles.tabBarIcon, { borderWidth: focused ? 2 : 0, }]}>
                            <SvgXml xml={WeeklyIcon} /></View>,
                    tabBarLabel: () => (
                        <Text style={styles.text}>Weekly Menu</Text>
                    )
                }}
            />
            <Tab.Screen name="subscription" component={SubscriptionActive}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>

                        <View style={[styles.tabBarIcon, { borderWidth: focused ? 2 : 0, }]}>
                            <SvgXml xml={SubscriptionIcon} /></View>,
                    tabBarLabel: () => (
                        <Text style={styles.text}>Subscription</Text>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Main

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: Colors.deepBlue100,
        fontFamily: "Bold"
    },
    tabBarIcon: {
        borderColor: Colors.yellow100,
        padding: 2,
        borderRadius: 50
    }
})