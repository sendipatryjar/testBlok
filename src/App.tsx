import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import AppNavigator from './navigator/AppNavigator';
const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
