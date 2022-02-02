import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormExample from '../../components/FormExample';
import { commonStyles } from '../../consts/styles';

const AvoidSoftInputModuleFormScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustNothing();
    AvoidSoftInput.setEnabled(true);
    return () => {
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setDefaultAppSoftInputMode();
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
      <FormExample />
    </ScrollView>
  </SafeAreaView>;
};

export default AvoidSoftInputModuleFormScreen;
