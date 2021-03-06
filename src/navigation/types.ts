import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { ROUTES } from './routes';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  //
  [ROUTES.FORM_AVOID_SOFT_INPUT_MODULE]: undefined;
  [ROUTES.FORM_AVOID_SOFT_INPUT_VIEW]: undefined;
  [ROUTES.FORM_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE]: undefined;
  [ROUTES.FORM_KEYBOARD_AVOIDING_VIEW]: undefined;
  [ROUTES.FORM_KEYBOARD_AWARE_SCROLL_VIEW]: undefined;
  //
  [ROUTES.BOTTOM_SHEET_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE]: undefined;
  [ROUTES.BOTTOM_SHEET_AVOID_SOFT_INPUT_MODULE]: undefined;
  [ROUTES.BOTTOM_SHEET_AVOID_SOFT_INPUT_VIEW]: undefined;
  [ROUTES.BOTTOM_SHEET_KEYBOARD_AVOIDING_VIEW]: undefined;
  //
  [ROUTES.MODAL_AVOID_SOFT_INPUT_MODULE]: undefined;
  [ROUTES.MODAL_AVOID_SOFT_INPUT_VIEW]: undefined;
  [ROUTES.MODAL_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE]: undefined;
  [ROUTES.MODAL_KEYBOARD_AVOIDING_VIEW]: undefined;
  [ROUTES.MODAL_KEYBOARD_AWARE_SCROLL_VIEW]: undefined;
  //
  [ROUTES.MODAL_BOTTOM_SHEET_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE]: undefined;
  [ROUTES.MODAL_BOTTOM_SHEET_AVOID_SOFT_INPUT_MODULE]: undefined;
  [ROUTES.MODAL_BOTTOM_SHEET_AVOID_SOFT_INPUT_VIEW]: undefined;
  [ROUTES.MODAL_BOTTOM_SHEET_KEYBOARD_AVOIDING_VIEW]: undefined;
  //
  [ROUTES.PORTAL_KEYBOARD_AVOIDING_VIEW]: undefined;
  [ROUTES.PORTAL_KEYBOARD_AWARE_SCROLL_VIEW]: undefined;
  [ROUTES.PORTAL_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE]: undefined;
  [ROUTES.PORTAL_AVOID_SOFT_INPUT_MODULE]: undefined;
  [ROUTES.PORTAL_AVOID_SOFT_INPUT_VIEW]: undefined;
  //
  [ROUTES.MULTIPLE_INPUTS_FORM_AVOID_SOFT_INPUT_MODULE]: undefined;
  [ROUTES.MULTIPLE_INPUTS_FORM_AVOID_SOFT_INPUT_VIEW]: undefined;
  [ROUTES.MULTIPLE_INPUTS_FORM_IQ_KEYBOARD_MANAGER_AND_ADJUST_RESIZE]: undefined;
  [ROUTES.MULTIPLE_INPUTS_FORM_KEYBOARD_AVOIDING_VIEW]: undefined;
  [ROUTES.MULTIPLE_INPUTS_FORM_KEYBOARD_AWARE_SCROLL_VIEW]: undefined;
}

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
