import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import Splash from './Splash'
import Icon from 'react-native-vector-icons/Ionicons'
import Account from './Account'
import DiscoverMusic from './DiscoverMusic'
import Friends from './Friends'
import MyMusic from './MyMusic'
import PlayerScene from '../components/player/PlayerScene';
import { ModalRoute } from '../widgets';
import Player from '../components/player/Player';
import { DetailScene, MvDetail, UserDetail, DjDetail } from '../containers/Detail';

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
const Navigator = StackNavigator(
    {
        Tab: { screen: TabNavContainer},
        Detail: { screen: DetailScene},
        Player: { screen: PlayerScene},
        MvDetail: {screen: MvDetail},
        UserDetail: {screen: UserDetail},
        DjDetail: {screen: DjDetail},
    },
    {
        navigationOptions: {
            headerBackTitle: '返回',
            headerTintColor: '#333333',
            showIcon: true
        }
    }
);



export default () => {

    const App = StackNavigator(
        {
            Splash:{screen: Splash },
            MainNavigator: { screen: Navigator },
            ModalMenu: { screen: ModalRoute},
        },
        {
            mode: 'modal',
            headerMode: 'none',
        }
    );
    
    return <App/>
}