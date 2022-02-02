import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Platform } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import RNKeyboardManager from 'react-native-keyboard-manager';
import { SafeAreaView } from 'react-native-safe-area-context';

import PortalFormExample from '../../components/PortalFormExample';
import { commonStyles } from '../../consts/styles';

const IQKeyboardManagerPortalScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    if (Platform.OS !== 'ios') {
      AvoidSoftInput.setAdjustResize();
    } else {
      RNKeyboardManager.setEnable(true);
      // RNKeyboardManager.setKeyboardDistanceFromTextField(60)
    }

    return () => {
      if (Platform.OS !== 'ios') {
        AvoidSoftInput.setDefaultAppSoftInputMode();
      } else {
        RNKeyboardManager.setEnable(false);
      }
    };
  }, []);
  
  useFocusEffect(onFocusEffect);

  return <SafeAreaView edges={[ 'left', 'right' ]} style={commonStyles.screenContainer}>
    <PortalFormExample />
  </SafeAreaView>;
};

export default IQKeyboardManagerPortalScreen;
