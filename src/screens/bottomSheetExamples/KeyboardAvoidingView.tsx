import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomSheetExample from '../../components/BottomSheetExample';
import { commonStyles } from '../../consts/styles';

const BottomSheetWrapper: React.FC = ({ children }) => {
  return <KeyboardAvoidingView
    behavior="position"
    contentContainerStyle={styles.keyboardAvoidingView}
    style={styles.keyboardAvoidingView}>
    {children}
  </KeyboardAvoidingView>;
};

const KeyboardAvoidingViewBottomSheetScreen: React.FC = () => {
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
      <BottomSheetExample BottomSheetWrapper={BottomSheetWrapper} />
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default KeyboardAvoidingViewBottomSheetScreen;
