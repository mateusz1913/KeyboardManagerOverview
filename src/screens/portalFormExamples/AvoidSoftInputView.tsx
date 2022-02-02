import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AvoidSoftInput, AvoidSoftInputView } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

import PortalFormExample from '../../components/PortalFormExample';
import { commonStyles } from '../../consts/styles';

const AvoidSoftInputViewPortalContentWrapper: React.FC = ({ children }) => <AvoidSoftInputView
  style={styles.avoidSoftInput}>
  <ScrollView
    bounces={false}
    contentContainerStyle={commonStyles.scrollContainer}
    contentInsetAdjustmentBehavior="always"
    overScrollMode="always"
    showsVerticalScrollIndicator={true}
    style={commonStyles.scroll}
  >
    {children}
  </ScrollView>
</AvoidSoftInputView>;

const AvoidSoftInputViewPortalScreen: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustNothing();
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useFocusEffect(onFocusEffect);

  return <SafeAreaView edges={[ 'left', 'right' ]} style={commonStyles.screenContainer}>
    <PortalFormExample
      PortalContentWrapper={AvoidSoftInputViewPortalContentWrapper}
    />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  avoidSoftInput: {
    alignSelf: 'stretch',
  },
});

export default AvoidSoftInputViewPortalScreen;
