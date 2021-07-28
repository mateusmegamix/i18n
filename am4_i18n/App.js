import React, {Fragment, Suspense} from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';
import Home from './src/screens/Home';
import './src/locales';

console.disableYellowBox = true;

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<ActivityIndicator />}>
        <Home />
      </Suspense>
    </Fragment>
  );
};

export default App;
