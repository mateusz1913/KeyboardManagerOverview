import { BottomSheetModal, BottomSheetView, useBottomSheetDynamicSnapPoints } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../consts/styles';

import Button from './Button';

const SNAP_POINTS = [ 'CONTENT_HEIGHT' ];

const Backdrop: React.FC = () => <View style={styles.backdrop} />;

const DefaultBottomSheetWrapper: React.FC = ({ children }) => <View style={styles.container}>{children}</View>;

interface Props {
  BottomSheetWrapper?: React.FC
}

const BottomSheetExample: React.FC<Props> = ({ BottomSheetWrapper = DefaultBottomSheetWrapper }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  function dismissBottomSheet() {
    bottomSheetModalRef.current?.dismiss();
  }

  function presentBottomSheet() {
    bottomSheetModalRef.current?.present();
  }

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(SNAP_POINTS);

  return <View style={commonStyles.screenContainer}>
    <Button
      onPress={presentBottomSheet}
      title="Open bottom sheet"
    />
    <BottomSheetModal
      ref={bottomSheetModalRef}
      backdropComponent={Backdrop}
      contentHeight={animatedContentHeight}
      enableDismissOnClose
      enablePanDownToClose
      handleHeight={animatedHandleHeight}
      index={0}
      snapPoints={animatedSnapPoints}
    >
      <BottomSheetView onLayout={handleContentLayout} style={styles.container}>
        <SafeAreaView edges={[ 'bottom' ]} style={styles.container}>
          <BottomSheetWrapper>
            <Text style={styles.header}>Bottom sheet header</Text>
            <TextInput style={styles.input} />
            <View style={styles.buttonContainer}>
              <Button
                onPress={dismissBottomSheet}
                title="Confirm"
              />
            </View>
          </BottomSheetWrapper>
        </SafeAreaView>
      </BottomSheetView>
    </BottomSheetModal>
  </View>;
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  buttonContainer: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  header: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 30,
    paddingTop: 20,
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    fontSize: 16,
    height: 60,
    marginBottom: 60,
    marginHorizontal: 30,
    marginTop: 10,
    padding: 10,
  },
});


export default BottomSheetExample;
