import React, { PureComponent } from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux'
import App from './containers/app'
import SplashScreen from 'react-native-splash-screen'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));
export default class AppSplash extends PureComponent{
    componentDidMount() {
        // SplashScreen.hide()
    }
    render(){
        return (
          <Provider store={store}>
              <View style={{flex:1}}>
                  <App/>
              </View>
          </Provider>
        )
    }
}