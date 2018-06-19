
import React, { PureComponent } from 'react';
import { Text, SectionList, View, FlatList, Image, TouchableOpacity } from 'react-native';
import TopContainer from './TopContainer';
import { color, screen } from '../../utils';
import { TOP_LIST } from '../../api';
import { ListFooter, TextTool, GridItem } from '../../widgets';

const { Normal, H4 } = TextTool;

class TopScene extends PureComponent {
    state = {
        official: [],
        global: [],
        headerList: [],
        refreshing: false,
    };
    componentWillMount() {
        this.setState({
            official: [
               
            ],
            global: [
                {id: 5, name: 'UK排行榜周榜', picUrl: require('../../imgs/img/top/5.jpg'), updateTIme: '每周四更新',},
                {id: 6, name: '美国Billboard周榜', picUrl: require('../../imgs/img/top/5.jpg'), updateTIme: '每周四更新',},
                {id: 7, name: 'KTV嗨榜', picUrl: require('../../imgs/img/top/5.jpg'), updateTIme: '每周四更新',},
                {id: 8, name: 'iTunes榜', picUrl: require('../../imgs/img/top/5.jpg'), updateTIme: '每周四更新',},
                {id: 9, name: 'Hit FM Top榜', picUrl: require('../../imgs/img/top/5.jpg'), updateTIme: '每周四更新',},
                {id: 10, name: '日本Oricon周榜', picUrl: require('../../imgs/img/top/5.jpg'), updateTIme: '每周四更新',},
            ]
        })
    };
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        this.fetchTop(0);
        this.fetchTop(1);
        this.fetchTop(2);
        this.fetchTop(3);
        this.fetchTop(4);
    };
    fetchTop = (index) => {
        (
            async () => {
                try {
                    const res = await fetch(TOP_LIST + index);
                    const { playlist, result} = await res.json();
                    const json = playlist || result;
                    json.id = index;
                    this.setState({
                        official: [...this.state.official, json]
                    });
                } catch (err) {
                    alert(err);
                }
            }
        )();
    };
    sectionHeader = ({section}) => (
        <H4 style={{paddingVertical: 15}}>{section.title}</H4>
    );
    renderItem = ({section}) => section.renderItem;
    toDetail = (id) => {
        const { navigation } = this.props;
        navigation.navigate('Detail', {title: '榜单', id, type: 'top'});
    };
    render() {
        const { refreshing, official, global} = this.state;
        const sections = [
            {title: '云音乐官方榜', key: '1', data: official.reverse(), renderItem: ({item, index}) => (
                <TouchableOpacity onPress={() => this.toDetail(item.id)}>
                    <View style={{width: screen.width, height: screen.width / 4, flexDirection: 'row', paddingTop: 3}}>
                        <Image source={{uri:item.coverImgUrl}} style={{width: screen.width / 4, height: '100%'}} />
                        <View style={{flex: 1, justifyContent: 'space-around', borderBottomWidth: screen.onePixel, borderColor: color.border, padding: 5}}>
                                {item.tracks.slice(0, 3).map((v, i) => <Normal key={i} numberOfLines={1}>{i+1}. {v.name} - {v.artists}</Normal>)}
                        </View>
                    </View>
                </TouchableOpacity>
            )},
            {title: '全球榜', key: '2', data: [1], renderItem: ({item, section}) => (
                <FlatList
                    data={global}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={this.renderHeader}
                    renderItem={({item}) => <GridItem item={item} width={0.325} title={item.name} image={item.picUrl} onPress={() => this.toDetail(item.id)} />}
                    horizontal={false}
                    numColumns={3}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                />
            )}
        ];
        return (
            <SectionList
                style={{flex: 1, backgroundColor: color.backgroundColor,}}
                onRefresh={this.fetchData}
                refreshing={refreshing}
                keyExtractor={(item, index) => index}
                sections={sections}
                renderSectionHeader={this.sectionHeader}
                // ListHeaderComponent={this.renderHeader}
                // renderItem={this.renderItem}
                ListFooterComponent={() => <ListFooter />}
                // stickySectionHeadersEnabled
            />
        )
    }
}

export default TopScene;