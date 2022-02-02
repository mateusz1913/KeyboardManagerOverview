import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import ModalBottomSheetExample from '../../components/ModalBottomSheetExample';
import { commonStyles } from '../../consts/styles';

const BottomSheetModalContentWrapper: React.FC = ({ children }) => {
  return <KeyboardAvoidingView
    behavior="position"
    contentContainerStyle={styles.keyboardAvoidingView}
    style={styles.keyboardAvoidingView}>
    {children}
  </KeyboardAvoidingView>;
};

const KeyboardAvoidingViewModalBottomSheetScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustPan();
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useFocusEffect(onFocusEffect);

  return <SafeAreaView edges={[ 'bottom', 'left', 'right' ]} style={commonStyles.screenContainer}>
    <ScrollView
      bounces={false}
      contentContainerStyle={commonStyles.scrollContainer}
      contentInsetAdjustmentBehavior="always"
      overScrollMode="always"
      showsVerticalScrollIndicator={true}
      style={commonStyles.scroll}
    >
      <ModalBottomSheetExample ModalContentWrapper={BottomSheetModalContentWrapper} />
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default KeyboardAvoidingViewModalBottomSheetScreen;
