import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AvoidSoftInput, AvoidSoftInputView } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import ModalBottomSheetExample from '../../components/ModalBottomSheetExample';
import { commonStyles } from '../../consts/styles';

const BottomSheetModalContentWrapper: React.FC = ({ children }) => {
  return <AvoidSoftInputView avoidOffset={100} style={styles.avoidSoftInputView}>
    {children}
  </AvoidSoftInputView>;
};

const AvoidSoftInputViewModalBottomSheetScreen: React.FC = () => {
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
      <ModalBottomSheetExample ModalContentWrapper={BottomSheetModalContentWrapper} />
    </ScrollView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  avoidSoftInputView: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default AvoidSoftInputViewModalBottomSheetScreen;
