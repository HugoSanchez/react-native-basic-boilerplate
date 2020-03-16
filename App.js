import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Navigator from './src/navigator';
import RootReducer from './src/reducers';

const store = createStore(RootReducer)

export default class App extends Component {  
  render() {
    return (
      <Provider store={ store }>
        <Navigator />
      </Provider>
    );
  }
}
