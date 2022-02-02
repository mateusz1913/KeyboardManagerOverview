import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AccordionGroup from '../components/AccordionGroup';
import Button from '../components/Button';
import { commonStyles } from '../consts/styles';
import { ROUTES } from '../navigation/routes';
import type { RootStackNavigationProp } from '../navigation/types';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return <SafeAreaView edges={[ 'left', 'right', 'bottom' ]} style={commonStyles.screenContainer}>
    <View style={commonStyles.screenContainer}>
      <ScrollView
        bounces={false}
        contentContainerStyle={commonStyles.scrollContainer}
        contentInsetAdjustmentBehavior="always"
        overScrollMode="always"
        showsVerticalScrollIndicator={true}
        style={commonStyles.scroll}>
        <View style={styles.accordionContainer}>
          <AccordionGroup headerTitle="Form example">
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.FORM_KEYBOARD_AVOIDING_VIEW)}
                title="KeyboardAvoidingView"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.FORM_KEYBOARD_AWARE_SCROLL_VIEW)}
                title="KeyboardAwareScrollView"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.FORM_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE)}
                title="IQKeyboardManager+adjustResize"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.FORM_AVOID_SOFT_INPUT_MODULE)}
                title="AvoidSoftInput - module"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.FORM_AVOID_SOFT_INPUT_VIEW)}
                title="AvoidSoftInput - view"
              />
            </View>
          </AccordionGroup>
          <AccordionGroup headerTitle="BottomSheet example">
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.BOTTOM_SHEET_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE)}
                title="IQKeyboardManager+adjustResize"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.BOTTOM_SHEET_AVOID_SOFT_INPUT_MODULE)}
                title="AvoidSoftInput - module"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.BOTTOM_SHEET_AVOID_SOFT_INPUT_VIEW)}
                title="AvoidSoftInput - view"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.BOTTOM_SHEET_KEYBOARD_AVOIDING_VIEW)}
                title="KeyboardAvoidingView"
              />
            </View>
          </AccordionGroup>
          <AccordionGroup headerTitle="Modal example">
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MODAL_KEYBOARD_AVOIDING_VIEW)}
                title="KeyboardAvoidingView"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MODAL_KEYBOARD_AWARE_SCROLL_VIEW)}
                title="KeyboardAwareScrollView"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MODAL_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE)}
                title="IQKeyboardManager+adjustResize"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MODAL_AVOID_SOFT_INPUT_MODULE)}
                title="AvoidSoftInput - module"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MODAL_AVOID_SOFT_INPUT_VIEW)}
                title="AvoidSoftInput - view"
              />
            </View>
          </AccordionGroup>
          <AccordionGroup headerTitle="Modal bottom sheet example">
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MODAL_BOTTOM_SHEET_KEYBOARD_AVOIDING_VIEW)}
                title="KeyboardAvoidingView"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MODAL_BOTTOM_SHEET_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE)}
                title="IQKeyboardManager+adjustResize"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MODAL_BOTTOM_SHEET_AVOID_SOFT_INPUT_MODULE)}
                title="AvoidSoftInput - module"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MODAL_BOTTOM_SHEET_AVOID_SOFT_INPUT_VIEW)}
                title="AvoidSoftInput - view"
              />
            </View>
          </AccordionGroup>
          <AccordionGroup headerTitle="Portal example">
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.PORTAL_KEYBOARD_AVOIDING_VIEW)}
                title="KeyboardAvoidingView"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.PORTAL_KEYBOARD_AWARE_SCROLL_VIEW)}
                title="KeyboardAwareScrollView"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.PORTAL_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE)}
                title="IQKeyboardManager+adjustResize"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.PORTAL_AVOID_SOFT_INPUT_MODULE)}
                title="AvoidSoftInput - module"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.PORTAL_AVOID_SOFT_INPUT_VIEW)}
                title="AvoidSoftInput - view"
              />
            </View>
          </AccordionGroup>
          <AccordionGroup headerTitle="Multiple inputs form example">
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MULTIPLE_INPUTS_FORM_KEYBOARD_AVOIDING_VIEW)}
                title="KeyboardAvoidingView"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MULTIPLE_INPUTS_FORM_KEYBOARD_AWARE_SCROLL_VIEW)}
                title="KeyboardAwareScrollView"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MULTIPLE_INPUTS_FORM_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE)}
                title="IQKeyboardManager+adjustResize"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MULTIPLE_INPUTS_FORM_AVOID_SOFT_INPUT_MODULE)}
                title="AvoidSoftInput - module"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => navigation.navigate(ROUTES.MULTIPLE_INPUTS_FORM_AVOID_SOFT_INPUT_VIEW)}
                title="AvoidSoftInput - view"
              />
            </View>
          </AccordionGroup>
        </View>
      </ScrollView>
    </View>
    <StatusBar
      animated={true}
      backgroundColor={'transparent'}
      barStyle={'dark-content'}
      translucent={true}
    />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  accordionContainer: {
    alignSelf: 'stretch',
    flex: 1,
    padding: 16,
  },
  buttonWrapper: {
    height: 54,
    marginHorizontal: 40,
    marginVertical: 10,
  },
});

export default HomeScreen;
