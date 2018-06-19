import React, { PureComponent } from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native'

export default class Splash extends PureComponent{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    }
    toMain = () => {
        console.log("main");
        this.props.navigation.navigate('MainNavigator')
    }
    render(){
        return (
            <ImageBackground source={require('../../images/splash.jpeg')} style={{flex:1}}>
               <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: 90,
                    right: 30,
                    backgroundColor: 'rgba(0,0,0,.5)',
                    width: 80,
                    height: 30,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={this.toMain}>
                    <Text style={{fontSize: 16, color: '#fff'}}>跳过</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}