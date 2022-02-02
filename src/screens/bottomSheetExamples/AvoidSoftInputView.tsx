import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AvoidSoftInput, AvoidSoftInputView } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomSheetExample from '../../components/BottomSheetExample';
import { commonStyles } from '../../consts/styles';

const BottomSheetWrapper: React.FC = ({ children }) => {
  return <AvoidSoftInputView style={styles.avoidSoftInputView}>
    {children}
  </AvoidSoftInputView>;
};

const AvoidSoftInputViewBottomSheetScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustNothing();
    return () => {
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
      <BottomSheetExample BottomSheetWrapper={BottomSheetWrapper} />
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  avoidSoftInputView: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default AvoidSoftInputViewBottomSheetScreen;
