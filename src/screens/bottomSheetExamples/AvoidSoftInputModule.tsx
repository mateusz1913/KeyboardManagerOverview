import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomSheetExample from '../../components/BottomSheetExample';
import { commonStyles } from '../../consts/styles';

const AvoidSoftInputModuleBottomSheetScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustNothing();
    AvoidSoftInput.setEnabled(true);
    AvoidSoftInput.setAvoidOffset(100);
    return () => {
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setDefaultAppSoftInputMode();
      AvoidSoftInput.setAvoidOffset(0); // Default value
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
      <BottomSheetExample />
    </ScrollView>
  </SafeAreaView>;
};

export default AvoidSoftInputModuleBottomSheetScreen;
