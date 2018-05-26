import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Friends extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
             <Text>这是朋友</Text>                
            </View>
         )
    }
}
 
export default Friends;