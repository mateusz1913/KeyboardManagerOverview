import { Portal } from '@gorhom/portal';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../consts/styles';

import Button from './Button';
import CloseButton from './CloseButton';

const DefaultPortalContentWrapper: React.FC = ({ children }) => <View style={styles.scrollWrapper}>
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
  PortalContentWrapper?: React.FC
}

/**
 * Remember to render it under `PortalProvider` from `@gorhom/portal` or `BottomSheetModalProvider` from `@gorhom/bottom-sheet`
 */
const PortalFormExample: React.FC<Props> = ({ PortalContentWrapper = DefaultPortalContentWrapper }) => {
  const [ isPortalVisible, setIsPortalVisible ] = useState(false);
  const firstInputRef = useRef<TextInput>(null);
  const secondInputRef = useRef<TextInput>(null);
  
  function closePortal() {
    setIsPortalVisible(false);
  }

  function openPortal() {
    setIsPortalVisible(true);
  }

  return <View style={commonStyles.screenContainer}>
    <Button
      onPress={openPortal}
      title="Open portal"
    />
    {isPortalVisible ? <Portal>
      <View style={styles.portal}>
        <SafeAreaView edges={[ 'bottom', 'left', 'right' ]} style={styles.portalContent}>
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <CloseButton onPress={closePortal} />
            </View>
            <PortalContentWrapper>
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
            </PortalContentWrapper>
          </View>
        </SafeAreaView>
      </View>
    </Portal> : null}
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
    marginBottom: 60,
    marginHorizontal: 10,
    marginTop: 80,
    overflow: 'hidden',
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
  multilineInput: {
    height: 200,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  portal: {
    ...StyleSheet.absoluteFillObject,
  },
  portalContent: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#00000033',
    flex: 1,
    justifyContent: 'center',
  },
  scrollWrapper: {
    alignSelf: 'stretch',
    marginBottom: 40,
  },
  spacer: {
    height: 300,
  },
  wrapper: {
    alignSelf: 'stretch',
  },
});

export default PortalFormExample;
