import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class MyMusic extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
            <Text>这是我的音乐</Text>                
            </View>
         )
    }
}
 
export default MyMusic;