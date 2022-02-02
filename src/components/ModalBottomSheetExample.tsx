import React, { useState } from 'react';
import { Pressable, Modal as RNModal, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../consts/styles';

import Button from './Button';

const DefaultModalContentWrapper: React.FC = ({ children }) => <View style={styles.wrapper}>
  {children}
</View>;

interface Props {
  ModalContentWrapper?: React.FC
}

const ModalBottomSheetExample: React.FC<Props> = ({ ModalContentWrapper = DefaultModalContentWrapper }) => {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  function closeModal() {
    setIsModalVisible(false);
  }

  function openModal() {
    setIsModalVisible(true);
  }

  return <View style={commonStyles.screenContainer}>
    <Button
      onPress={openModal}
      title="Open modal"
    />
    <RNModal
      animationType="slide"
      onRequestClose={closeModal}
      statusBarTranslucent={true}
      style={styles.modal}
      supportedOrientations={[ 'landscape', 'portrait' ]}
      transparent={true}
      visible={isModalVisible}
    >
      <SafeAreaView edges={[ 'bottom', 'left', 'right' ]} style={styles.modalContent}>
        <Pressable onPress={closeModal} style={styles.modalContent}>
          <ModalContentWrapper>
            <View style={styles.container}>
              <Text style={styles.header}>Bottom sheet header</Text>
              <TextInput style={styles.input} />
              <View style={styles.buttonContainer}>
                <Button
                  onPress={closeModal}
                  title="Confirm"
                />
              </View>
            </View>
          </ModalContentWrapper>
        </Pressable>
      </SafeAreaView>
    </RNModal>
  </View>;
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: 'black',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderTopWidth: 1,
    marginHorizontal: 10,
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
  modal: {
    alignSelf: 'stretch',
  },
  modalContent: {
    alignSelf: 'stretch',
    backgroundColor: '#00000033',
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrapper: {
    alignSelf: 'stretch',
  },
});

export default ModalBottomSheetExample;
