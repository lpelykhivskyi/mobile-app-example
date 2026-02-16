import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type MainContainerProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

export default function MainContainer({ children, style }: MainContainerProps) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
});
