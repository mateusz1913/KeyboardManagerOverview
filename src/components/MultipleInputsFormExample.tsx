import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const MultipleInputsFormExample: React.FC = () => {
  return <>
    <TextInput placeholder="1" style={styles.input} />
    <TextInput placeholder="2" style={styles.input} />
    <TextInput placeholder="3" style={styles.input} />
    <TextInput placeholder="4" style={styles.input} />
    <TextInput placeholder="5" style={styles.input} />
    <TextInput placeholder="6" style={styles.input} />
    <TextInput placeholder="7" style={styles.input} />
    <TextInput placeholder="8" style={styles.input} />
    <TextInput placeholder="9" style={styles.input} />
    <TextInput placeholder="10" style={styles.input} />
    <TextInput placeholder="11" style={styles.input} />
    <TextInput placeholder="12" style={styles.input} />
    <TextInput placeholder="13" style={styles.input} />
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
});

export default MultipleInputsFormExample;
