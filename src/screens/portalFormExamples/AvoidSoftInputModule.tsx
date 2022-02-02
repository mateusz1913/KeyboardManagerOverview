import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import PortalFormExample from '../../components/PortalFormExample';
import { commonStyles } from '../../consts/styles';

const AvoidSoftInputModulePortalScreen: React.FC = () => {
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
    <PortalFormExample />
  </SafeAreaView>;
};

export default AvoidSoftInputModulePortalScreen;
