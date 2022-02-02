import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import RNKeyboardManager from 'react-native-keyboard-manager';

import HomeScreen from '../screens/HomeScreen';
import AvoidSoftInputModuleBottomSheetScreen from '../screens/bottomSheetExamples/AvoidSoftInputModule';
import AvoidSoftInputViewBottomSheetScreen from '../screens/bottomSheetExamples/AvoidSoftInputView';
import IQKeyboardManagerBottomSheetScreen from '../screens/bottomSheetExamples/IQKeyboardManager';
import KeyboardAvoidingViewBottomSheetScreen from '../screens/bottomSheetExamples/KeyboardAvoidingView';
import AvoidSoftInputModuleFormScreen from '../screens/formExamples/AvoidSoftInputModule';
import AvoidSoftInputViewFormScreen from '../screens/formExamples/AvoidSoftInputView';
import IQKeyboardManagerFormScreen from '../screens/formExamples/IQKeyboardManager';
import KeyboardAvoidingViewFormScreen from '../screens/formExamples/KeyboardAvoidingView';
import KeyboardAwareScrollViewFormScreen from '../screens/formExamples/KeyboardAwareScrollView';
import AvoidSoftInputModuleModalBottomSheetScreen from '../screens/modalBottomSheetExamples/AvoidSoftInputModule';
import AvoidSoftInputViewModalBottomSheetScreen from '../screens/modalBottomSheetExamples/AvoidSoftInputView';
import IQKeyboardManagerModalBottomSheetScreen from '../screens/modalBottomSheetExamples/IQKeyboardManager';
import KeyboardAvoidingViewModalBottomSheetScreen from '../screens/modalBottomSheetExamples/KeyboardAvoidingView';
import AvoidSoftInputModuleModalScreen from '../screens/modalFormExamples/AvoidSoftInputModule';
import AvoidSoftInputViewModalScreen from '../screens/modalFormExamples/AvoidSoftInputView';
import IQKeyboardManagerModalScreen from '../screens/modalFormExamples/IQKeyboardManager';
import KeyboardAvoidingViewModalScreen from '../screens/modalFormExamples/KeyboardAvoidingView';
import KeyboardAwareScrollViewModalScreen from '../screens/modalFormExamples/KeyboardAwareScrollView';
import AvoidSoftInputModuleMultipleInputsFormScreen from '../screens/multipleInputsFormExamples/AvoidSoftInputModule';
import AvoidSoftInputViewMultipleInputsFormScreen from '../screens/multipleInputsFormExamples/AvoidSoftInputView';
import IQKeyboardManagerMultipleInputsFormScreen from '../screens/multipleInputsFormExamples/IQKeyboardManager';
import KeyboardAvoidingViewMultipleInputsFormScreen from '../screens/multipleInputsFormExamples/KeyboardAvoidingView';
import KeyboardAwareScrollViewMultipleInputsFormScreen from '../screens/multipleInputsFormExamples/KeyboardAwareScrollView';
import AvoidSoftInputModulePortalScreen from '../screens/portalFormExamples/AvoidSoftInputModule';
import AvoidSoftInputViewPortalScreen from '../screens/portalFormExamples/AvoidSoftInputView';
import IQKeyboardManagerPortalScreen from '../screens/portalFormExamples/IQKeyboardManager';
import KeyboardAvoidingViewPortalScreen from '../screens/portalFormExamples/KeyboardAvoidingView';
import KeyboardAwareScrollViewPortalScreen from '../screens/portalFormExamples/KeyboardAwareScrollView';

import { ROUTES } from './routes';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  useEffect(() => {
    if (Platform.OS !== 'ios') {
      return;
    }

    RNKeyboardManager.setEnable(false);
    RNKeyboardManager.setEnableAutoToolbar(false);
    RNKeyboardManager.setShouldResignOnTouchOutside(true);
  }, []);
  return <Stack.Navigator>
    <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
    <Stack.Screen name={ROUTES.FORM_KEYBOARD_AVOIDING_VIEW} component={KeyboardAvoidingViewFormScreen} />
    <Stack.Screen name={ROUTES.FORM_KEYBOARD_AWARE_SCROLL_VIEW} component={KeyboardAwareScrollViewFormScreen} />
    <Stack.Screen name={ROUTES.FORM_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE} component={IQKeyboardManagerFormScreen} />
    <Stack.Screen name={ROUTES.FORM_AVOID_SOFT_INPUT_MODULE} component={AvoidSoftInputModuleFormScreen} />
    <Stack.Screen name={ROUTES.FORM_AVOID_SOFT_INPUT_VIEW} component={AvoidSoftInputViewFormScreen} />
    <Stack.Screen
      name={ROUTES.BOTTOM_SHEET_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE}
      component={IQKeyboardManagerBottomSheetScreen}
    />
    <Stack.Screen
      name={ROUTES.BOTTOM_SHEET_AVOID_SOFT_INPUT_MODULE}
      component={AvoidSoftInputModuleBottomSheetScreen}
    />
    <Stack.Screen
      name={ROUTES.BOTTOM_SHEET_AVOID_SOFT_INPUT_VIEW}
      component={AvoidSoftInputViewBottomSheetScreen}
    />
    <Stack.Screen
      name={ROUTES.BOTTOM_SHEET_KEYBOARD_AVOIDING_VIEW}
      component={KeyboardAvoidingViewBottomSheetScreen}
    />
    <Stack.Screen
      name={ROUTES.MODAL_KEYBOARD_AVOIDING_VIEW}
      component={KeyboardAvoidingViewModalScreen}
    />
    <Stack.Screen
      name={ROUTES.MODAL_KEYBOARD_AWARE_SCROLL_VIEW}
      component={KeyboardAwareScrollViewModalScreen}
    />
    <Stack.Screen
      name={ROUTES.MODAL_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE}
      component={IQKeyboardManagerModalScreen}
    />
    <Stack.Screen
      name={ROUTES.MODAL_AVOID_SOFT_INPUT_MODULE}
      component={AvoidSoftInputModuleModalScreen}
    />
    <Stack.Screen
      name={ROUTES.MODAL_AVOID_SOFT_INPUT_VIEW}
      component={AvoidSoftInputViewModalScreen}
    />
    <Stack.Screen
      name={ROUTES.MODAL_BOTTOM_SHEET_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE}
      component={IQKeyboardManagerModalBottomSheetScreen}
    />
    <Stack.Screen
      name={ROUTES.MODAL_BOTTOM_SHEET_AVOID_SOFT_INPUT_MODULE}
      component={AvoidSoftInputModuleModalBottomSheetScreen}
    />
    <Stack.Screen
      name={ROUTES.MODAL_BOTTOM_SHEET_AVOID_SOFT_INPUT_VIEW}
      component={AvoidSoftInputViewModalBottomSheetScreen}
    />
    <Stack.Screen
      name={ROUTES.MODAL_BOTTOM_SHEET_KEYBOARD_AVOIDING_VIEW}
      component={KeyboardAvoidingViewModalBottomSheetScreen}
    />
    <Stack.Screen
      name={ROUTES.PORTAL_KEYBOARD_AVOIDING_VIEW}
      component={KeyboardAvoidingViewPortalScreen}
    />
    <Stack.Screen
      name={ROUTES.PORTAL_KEYBOARD_AWARE_SCROLL_VIEW}
      component={KeyboardAwareScrollViewPortalScreen}
    />
    <Stack.Screen
      name={ROUTES.PORTAL_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE}
      component={IQKeyboardManagerPortalScreen}
    />
    <Stack.Screen
      name={ROUTES.PORTAL_AVOID_SOFT_INPUT_MODULE}
      component={AvoidSoftInputModulePortalScreen}
    />
    <Stack.Screen
      name={ROUTES.PORTAL_AVOID_SOFT_INPUT_VIEW}
      component={AvoidSoftInputViewPortalScreen}
    />
    <Stack.Screen
      name={ROUTES.MULTIPLE_INPUTS_FORM_KEYBOARD_AVOIDING_VIEW}
      component={KeyboardAvoidingViewMultipleInputsFormScreen}
    />
    <Stack.Screen
      name={ROUTES.MULTIPLE_INPUTS_FORM_KEYBOARD_AWARE_SCROLL_VIEW}
      component={KeyboardAwareScrollViewMultipleInputsFormScreen}
    />
    <Stack.Screen
      name={ROUTES.MULTIPLE_INPUTS_FORM_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE}
      component={IQKeyboardManagerMultipleInputsFormScreen}
    />
    <Stack.Screen
      name={ROUTES.MULTIPLE_INPUTS_FORM_AVOID_SOFT_INPUT_MODULE}
      component={AvoidSoftInputModuleMultipleInputsFormScreen}
    />
    <Stack.Screen
      name={ROUTES.MULTIPLE_INPUTS_FORM_AVOID_SOFT_INPUT_VIEW}
      component={AvoidSoftInputViewMultipleInputsFormScreen}
    />
  </Stack.Navigator>;
};

export default Navigation;
