import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import ModalFormExample from '../../components/ModalFormExample';
import { commonStyles } from '../../consts/styles';

const AvoidSoftInputModuleModalScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustNothing();
    // AvoidSoftInput.setAvoidOffset(60);
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useFocusEffect(onFocusEffect);

  return <SafeAreaView edges={[ 'left', 'right' ]} style={commonStyles.screenContainer}>
    <ModalFormExample />
  </SafeAreaView>;
};

export default AvoidSoftInputModuleModalScreen;
