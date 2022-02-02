import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormExample from '../../components/FormExample';
import { commonStyles } from '../../consts/styles';

const KeyboardAwareScrollViewFormScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustPan();
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useFocusEffect(onFocusEffect);

  return <SafeAreaView edges={[ 'bottom', 'left', 'right' ]} style={commonStyles.screenContainer}>
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableResetScrollToCoords={false}
      bounces={false}
      contentContainerStyle={commonStyles.scrollContainer}
      contentInsetAdjustmentBehavior="always"
      overScrollMode="always"
      showsVerticalScrollIndicator={true}
      style={commonStyles.scroll}>
      <FormExample />
    </KeyboardAwareScrollView>
  </SafeAreaView>;
};

export default KeyboardAwareScrollViewFormScreen;
