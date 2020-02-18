import React, { useState } from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import MealsReducer from './store/reducers/meals'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {

  const rootReducer = combineReducers({
    meals: MealsReducer
  });
  const store = createStore(rootReducer);


  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (<AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />)
  }
  return <Provider store={store}><MealsNavigator /></Provider>;
}
