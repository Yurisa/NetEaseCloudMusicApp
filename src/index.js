import React, { PureComponent } from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux'
import App from './containers/app'
import SplashScreen from 'react-native-splash-screen'
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducer';
import thunk from 'redux-thunk'
import Player from './components/player/Player'
const store = createStore(reducer);
console.log(store.getState());

export default class AppSplash extends PureComponent{
    componentDidMount() {
        SplashScreen.hide()
    }
    render(){
        return (
          <Provider store={store}>
              <View style={{flex:1}}>
                  <App/>
                  <Player/>
              </View>
          </Provider>
        )
    }
}