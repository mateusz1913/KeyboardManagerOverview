import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Platform, ScrollView } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import RNKeyboardManager from 'react-native-keyboard-manager';
import { SafeAreaView } from 'react-native-safe-area-context';

import ModalBottomSheetExample from '../../components/ModalBottomSheetExample';
import { commonStyles } from '../../consts/styles';

const IQKeyboardManagerModalBottomSheetScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    if (Platform.OS !== 'ios') {
      AvoidSoftInput.setAdjustResize();
    } else {
      RNKeyboardManager.setEnable(true);
      RNKeyboardManager.setKeyboardDistanceFromTextField(100);
    }

    return () => {
      if (Platform.OS !== 'ios') {
        AvoidSoftInput.setDefaultAppSoftInputMode();
      } else {
        RNKeyboardManager.setEnable(false);
        RNKeyboardManager.setKeyboardDistanceFromTextField(10); // Default value
      }
    };
  }, []);

  useFocusEffect(onFocusEffect);

  return <SafeAreaView edges={[ 'left', 'right' ]} style={commonStyles.screenContainer}>
    <ScrollView
      bounces={false}
      contentContainerStyle={commonStyles.scrollContainer}
      contentInsetAdjustmentBehavior="always"
      overScrollMode="always"
      showsVerticalScrollIndicator={true}
      style={commonStyles.scroll}>
      <ModalBottomSheetExample />
    </ScrollView>
  </SafeAreaView>;
};

export default IQKeyboardManagerModalBottomSheetScreen;
