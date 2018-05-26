import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import Splash from './Splash'
import Icon from 'react-native-vector-icons/Ionicons'
import Account from './Account'
import DiscoverMusic from './DiscoverMusic'
import Friends from './Friends'
import MyMusic from './MyMusic'

const TabNavContainer = TabNavigator(
{
    DiscoverMusic: {
        screen:  DiscoverMusic,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '发现音乐',
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name="ios-disc-outline" size={30} color={tintColor} />
            )
        })
    },
    MyMusic: {
        screen: MyMusic,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '我的音乐',
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name="ios-musical-notes-outline" size={30} color={tintColor} />
            )
        })
    },
    Friends: {
        screen: Friends,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '朋友',
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name="ios-contacts-outline" size={30} color={tintColor} />
            )
        })
    },
    Account: {
        screen: Account,
        navigationOptions: {
            tabBarLabel: '账号',
            tabBarIcon: ({ focused, tintColor }) => (
                <Icon name="ios-person-outline" size={30} color={tintColor} />
            )
        }
    }
},
{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'DiscoverMusic',
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#cccccc',
        style: {
            backgroundColor: '#333333'
        }
    }
}
)
export default () => {

    const App = StackNavigator({
        Splash:{screen: Splash},
        Main:{screen: TabNavContainer}
    })

    return <App/>
}