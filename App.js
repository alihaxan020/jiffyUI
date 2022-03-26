import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/routes/stacks';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
