import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import ModalFormExample from '../../components/ModalFormExample';
import { commonStyles } from '../../consts/styles';

const KeyboardAwareScrollViewModalContentWrapper: React.FC = ({ children }) => <KeyboardAwareScrollView
  enableOnAndroid={true}
  enableResetScrollToCoords={false}
  bounces={false}
  contentContainerStyle={commonStyles.scrollContainer}
  contentInsetAdjustmentBehavior="always"
  overScrollMode="always"
  showsVerticalScrollIndicator={true}
  style={commonStyles.scroll}>
  {children}
</KeyboardAwareScrollView>;

const KeyboardAwareScrollViewModalScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustPan();
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useFocusEffect(onFocusEffect);

  return <SafeAreaView edges={[ 'left', 'right' ]} style={commonStyles.screenContainer}>
    <ModalFormExample
      ModalContentWrapper={KeyboardAwareScrollViewModalContentWrapper}
    />
  </SafeAreaView>;
};

export default KeyboardAwareScrollViewModalScreen;
