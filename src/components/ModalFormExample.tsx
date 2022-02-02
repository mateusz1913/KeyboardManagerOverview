import React, { useRef, useState } from 'react';
import { Modal as RNModal, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../consts/styles';

import Button from './Button';
import CloseButton from './CloseButton';

const DefaultModalContentWrapper: React.FC = ({ children }) => <View style={styles.wrapper}>
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
</View>;

interface Props {
  ModalContentWrapper?: React.FC
}

const ModalFormExample: React.FC<Props> = ({ ModalContentWrapper = DefaultModalContentWrapper }) => {
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const firstInputRef = useRef<TextInput>(null);
  const secondInputRef = useRef<TextInput>(null);

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
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <CloseButton onPress={closeModal} />
          </View>
          <ModalContentWrapper>
            <View style={styles.spacer} />
            <View style={styles.inputsContainer}>
              <TextInput
                ref={firstInputRef}
                onSubmitEditing={() => {
                  secondInputRef.current?.focus();
                }}
                placeholder="Single line input"
                style={styles.input}
              />
              <TextInput
                ref={secondInputRef}
                multiline
                placeholder="Multiline input"
                style={[ styles.input, styles.multilineInput ]}
              />
            </View>
          </ModalContentWrapper>
        </View>
      </SafeAreaView>
    </RNModal>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 100,
    marginHorizontal: 10,
    marginTop: 80,
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    color: 'black',
    fontSize: 18,
    height: 60,
    marginBottom: 30,
    padding: 10,
  },
  inputsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  modal: {
    alignSelf: 'stretch',
  },
  modalContent: {
    alignSelf: 'stretch',
    backgroundColor: '#00000033',
    flex: 1,
  },
  multilineInput: {
    height: 200,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  spacer: {
    height: 300,
  },
  wrapper: {
    alignSelf: 'stretch',
  },
});

export default ModalFormExample;
