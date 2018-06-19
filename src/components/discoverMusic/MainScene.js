
import React, { PureComponent } from 'react';
import { Text, View, FlatList, ListView } from 'react-native';
import { IconMenu, Separator, BasicSwiper, ImageSWiper, GridItem } from '../../widgets';
import { screen } from '../../utils';
import ListContainer from './ListContainer';
import { PERSONALIZED, PERSONALIZED_PRIVATECONTENT, PERSONALIZED_NEWSONG, PERSONALIZED_MV, BANNER } from '../../api';

class MainScene extends PureComponent {
    state = {
        dataList: [],
        refreshing: true,
        banner: []
    };
    componentDidMount() {
        this.requestData();
    }
    requestData = () => {
        try {
            (async () => {
                const datas = [];
                // 推荐音乐
                const res = await fetch(PERSONALIZED);
                const personalized = await res.json();
                datas.push({
                    type: 'playlist',
                    title: '推荐音乐',
                    data: personalized.result.map(v => ({...v, title: v.name, picUrl: v.picUrl + '?param=140y140'}))
                });
                const res4 = await fetch(PERSONALIZED_MV);
                const personalized_mv = await res4.json();
                datas.push({
                    type: 'mv',
                    title: '推荐MV',
                    data: personalized_mv.result.map((v, i) => ({...v, title: v.name, subTitle: v.artistName, picUrl: v.picUrl + '?param=140y140', width: 0.49}))
                });
                this.setState({
                    dataList: [...datas],
                    refreshing: false
                });
                this.requestBanner();

            })();
        }catch(err) {
            alert(err)
        }
    };
    requestBanner = () => {
        try {
            (
                async () => {
                    const res = await fetch(BANNER);
                    const json = await res.json();
                    this.setState({
                        banner: json.banners
                    })
                }
            )();
        } catch (err) {
            alert(err);
        }
    };
    renderHeader = () => (
        <View>
            {/*<BasicSwiper />*/}
            <ImageSWiper banner={this.state.banner} />
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', height: screen.width / 4}}>
                <IconMenu icon="md-radio" title="私人FM" />
                <IconMenu icon="md-calendar" title="每日歌曲推荐" />
                <IconMenu icon="md-stats" title="云音乐热歌榜" />
            </View>
            <Separator />
        </View>

    );
    renderItem = ({item, index}) => (
        <ListContainer title={item.title} dataList={item.data} navigation={this.props.navigation} type={item.type} />
    );
    render() {
        const { dataList, refreshing } = this.state;
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={dataList}
                    refreshing={refreshing}
                    onRefresh={this.requestData}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={this.renderHeader}
                    renderItem={this.renderItem}
                    ListFooterComponent={() => <Text style={{textAlign: 'center', padding: 10, transform: [{scale: 0.857143}]}}>已加载完全部数据</Text>}
                />
            </View>
        )
    }
}

export default MainScene;
