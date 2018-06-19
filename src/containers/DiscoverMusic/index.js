import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons';
import { screen, color } from '../../utils';
import MainScene from '../../components/MainScene'
import PlaylistScene from '../../components/PlaylistScene'
import RadioScene from '../../components/RadioScene'
import TopScene from '../../components/TopScene'

class DiscoverMusic extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Icon name="ios-search-outline" size={15} color="#cccccc" />
                <Text style={{color: '#cccccc'}}>搜索音乐、歌词、电台</Text>
            </TouchableOpacity>
        ),
        headerLeft: <TouchableOpacity onPress={() => navigation.navigate('ModalMenu', {title: '测试'})}><Icon name="ios-microphone-outline" size={30} color="#ffffff" style={{marginLeft: 20}} /></TouchableOpacity>,
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Player', {title: '播放器'})}><Icon name="ios-stats-outline" size={30} color="#ffffff" style={{marginRight: 20}} /></TouchableOpacity>,
        headerStyle: {
            backgroundColor: color.theme
        }
    });
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const types = [
            {title: '个性推荐', component: MainScene},
            {title: '歌单', component: PlaylistScene},
            {title: '主播电台', component: RadioScene},
            {title: '排行榜', component: TopScene},
        ];
        
        return ( 
            <ScrollableTabView
                style={{flex: 1, backgroundColor: '#FBFCFE'}}
                tabBarBackgroundColor="#ffffff"
                tabBarActiveTextColor="#D43C33"
                tabBarInactiveTextColor="#000000"
                tabBarUnderlineStyle={{backgroundColor: '#D43C33'}}
                renderTabBar={() => <DefaultTabBar />}
            >
            { types.map((v, i) => {
                const Component = v.component;
                return <Component key={i} tabLabel={v.title} navigation={this.props.navigation} />
            })}
            </ScrollableTabView>
         )
    }
}


const styles = StyleSheet.create({
    searchBar: {
        borderRadius: 30,
        backgroundColor: '#ffffff',
        width: screen.width / 3 * 2 ,
        height: screen.width / 12,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
 
export default DiscoverMusic;