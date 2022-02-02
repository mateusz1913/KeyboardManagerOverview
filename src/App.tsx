import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { UIManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App: React.FC = () => {
  return <SafeAreaProvider>
    <BottomSheetModalProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </BottomSheetModalProvider>
  </SafeAreaProvider>;
};

export default App;
