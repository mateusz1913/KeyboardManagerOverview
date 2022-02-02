import React, { useRef } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

import Button from './Button';

const FormExample: React.FC = () => {
  const firstInputRef = useRef<TextInput>(null);
  const secondInputRef = useRef<TextInput>(null);
  const thirdInputRef = useRef<TextInput>(null);

  return <>
    <View style={styles.logoContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />
    </View>
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
        onSubmitEditing={() => {
          thirdInputRef.current?.focus();
        }}
        placeholder="Multiline input"
        style={[ styles.input, styles.multilineInput ]}
      />
      <TextInput
        ref={thirdInputRef}
        multiline
        placeholder="Large multiline input"
        style={[ styles.input, styles.multilineInput, styles.largeMultilineInput ]}
      />
    </View>
    <View style={styles.submitButtonContainer}>
      <Button
        onPress={() => {
          if (firstInputRef.current?.isFocused()) {
            firstInputRef.current.blur();
          }

          if (secondInputRef.current?.isFocused()) {
            secondInputRef.current.blur();
          }

          if (thirdInputRef.current?.isFocused()) {
            thirdInputRef.current.blur();
          }
        }}
        title="Submit"
      />
    </View>
  </>;
};

const styles = StyleSheet.create({
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
  largeMultilineInput: {
    height: 500,
  },
  logo: {
    height: 200,
    width: 200,
  },
  logoContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 100,
  },
  multilineInput: {
    height: 200,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  submitButtonContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 100,
  },
});

export default FormExample;
