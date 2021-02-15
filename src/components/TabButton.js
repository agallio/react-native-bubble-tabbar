import React from 'react';
import {useRef} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {
  Home as HomeIcon,
  InformationCircle as InfoIcon,
  Cog as SettingsIcon,
} from 'react-native-heroicons';
import {Transition, Transitioning} from 'react-native-reanimated';

const TabButton = ({label, accessibilityState, onPress}) => {
  const buttonRef = useRef();
  const focused = accessibilityState.selected;

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={200} />
      <Transition.In propagation="left" type="scale" durationMs={5} />
    </Transition.Sequence>
  );

  const getIcon = () => {
    switch (label) {
      case 'Home':
        return (
          <HomeIcon
            style={[styles.iconColor, focused && styles.iconActiveColor]}
          />
        );
      case 'About':
        return (
          <InfoIcon
            style={[styles.iconColor, focused && styles.iconActiveColor]}
          />
        );
      case 'Settings':
        return (
          <SettingsIcon
            style={[styles.iconColor, focused && styles.iconActiveColor]}
          />
        );
      default:
        return;
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        buttonRef.current.animateNextTransition();
        onPress();
      }}
      style={styles.container}>
      <Transitioning.View
        ref={buttonRef}
        transition={transition}
        style={[styles.button, focused && styles.buttonActive]}>
        {getIcon()}
        {focused && (
          <Text
            from={{opacity: 0}}
            animate={{opacity: 1}}
            style={styles.buttonText}>
            {label}
          </Text>
        )}
      </Transitioning.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  button: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#ffffff',
    width: '15%',
    marginHorizontal: 10,
  },
  buttonActive: {
    width: '35%',
    backgroundColor: '#059669',
  },
  iconColor: {
    color: '#059669',
  },
  iconActiveColor: {
    color: '#ffffff',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default TabButton;
