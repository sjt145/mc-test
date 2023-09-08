import 'react-native-gesture-handler';
import React, {FC} from 'react';
import Navigation from './Navigation';
import {ThemeProvider} from 'styled-components/native';
import {CommonTheme} from '../atomic/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={CommonTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
