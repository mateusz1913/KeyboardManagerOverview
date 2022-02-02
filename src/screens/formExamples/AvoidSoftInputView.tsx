import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AvoidSoftInput, AvoidSoftInputView } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormExample from '../../components/FormExample';
import { commonStyles } from '../../consts/styles';

const AvoidSoftInputViewFormScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustNothing();
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
  }, []);

  useFocusEffect(onFocusEffect);

  return <SafeAreaView edges={[ 'bottom', 'left', 'right' ]} style={commonStyles.screenContainer}>
    <AvoidSoftInputView style={styles.avoidSoftInputView}>
      <ScrollView
        bounces={false}
        contentContainerStyle={commonStyles.scrollContainer}
        contentInsetAdjustmentBehavior="always"
        overScrollMode="always"
        showsVerticalScrollIndicator={true}
        style={commonStyles.scroll}>
        <FormExample />
      </ScrollView>
    </AvoidSoftInputView>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  avoidSoftInputView: {
    alignSelf: 'stretch',
  },
});

export default AvoidSoftInputViewFormScreen;
