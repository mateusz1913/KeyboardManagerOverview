import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Platform, ScrollView } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import RNKeyboardManager from 'react-native-keyboard-manager';
import { SafeAreaView } from 'react-native-safe-area-context';

import MultipleInputsFormExample from '../../components/MultipleInputsFormExample';
import { commonStyles } from '../../consts/styles';

const IQKeyboardManagerMultipleInputsFormScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    if (Platform.OS !== 'ios') {
      AvoidSoftInput.setAdjustResize();
    } else {
      RNKeyboardManager.setEnable(true);
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

  return <SafeAreaView edges={[ 'bottom', 'left', 'right' ]} style={commonStyles.screenContainer}>
    <ScrollView
      bounces={false}
      contentContainerStyle={commonStyles.scrollContainer}
      contentInsetAdjustmentBehavior="always"
      overScrollMode="always"
      showsVerticalScrollIndicator={true}
      style={commonStyles.scroll}>
      <MultipleInputsFormExample />
    </ScrollView>
  </SafeAreaView>;
};

export default IQKeyboardManagerMultipleInputsFormScreen;
