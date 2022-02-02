import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormExample from '../../components/FormExample';
import { commonStyles } from '../../consts/styles';

const KeyboardAvoidingViewFormScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustPan();
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useFocusEffect(onFocusEffect);

  return <SafeAreaView edges={[ 'left', 'right' ]} style={commonStyles.screenContainer}>
    <KeyboardAvoidingView
      behavior="position"
      style={styles.keyboardAvoidingView}>
      <ScrollView
        bounces={false}
        contentContainerStyle={commonStyles.scrollContainer}
        contentInsetAdjustmentBehavior="always"
        overScrollMode="always"
        showsVerticalScrollIndicator={true}
        style={commonStyles.scroll}
      >
        <FormExample />
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    alignSelf: 'stretch',
  },
});

export default KeyboardAvoidingViewFormScreen;
