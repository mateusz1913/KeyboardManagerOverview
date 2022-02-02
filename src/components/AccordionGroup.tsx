import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  headerTitle: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};

const AccordionGroup: React.FC<Props> = ({ children, headerTitle }) => {
  const animatedRef = useAnimatedRef<View>();
  const open = useSharedValue(false);
  const progress = useDerivedValue(() => open.value ? withSpring(1) : withTiming(0));
  const height = useSharedValue(0);
  const headerStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: progress.value === 0 ? 8 : 0,
    borderBottomRightRadius: progress.value === 0 ? 8 : 0,
  }));
  const style = useAnimatedStyle(() => {
    return {
      height: height.value * progress.value + 1,
      opacity: progress.value === 0 ? 0 : 1,
      overflow: 'hidden',
    };
  });

  return <View style={styles.wrapper}>
    <Pressable
      onPress={() => {
        if (height.value === 0) {
          runOnUI(() => {
            'worklet';
            height.value = measure(animatedRef).height;
          })();
        }

        open.value = !open.value;
      }}
    >
      <Animated.View style={[ styles.container, headerStyle ]}>
        <Text style={styles.title}>{headerTitle}</Text>
      </Animated.View>
    </Pressable>
    <Animated.View style={style}>
      <View ref={animatedRef} onLayout={NOOP}>
        {children}
      </View>
    </Animated.View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 16,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    alignSelf: 'stretch',
  },
});

export default AccordionGroup;
