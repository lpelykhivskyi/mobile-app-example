import { Image } from 'expo-image';
import { Button, StyleSheet } from 'react-native';

import FormInput from '@/components/forms/input';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';

const serverAction = (login: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      alert(`Login: ${login} and Password: ${password}`);
      resolve(null);
    }, 1000)
  });
}

export default function LoginScreen() {
  const [login, setLogin] = React.useState('Default login');
  const [password, setPassword] = React.useState('Default password');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = React.useCallback(async () => {
    setIsSubmitting(true);
    await serverAction(login, password);
    setIsSubmitting(false);
  }, [login, password]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Login!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        <FormInput placeholder='login' onChange={setLogin} />
        <FormInput placeholder='password' secureTextEntry onChange={setPassword} />
        <ThemedView style={styles.buttonContainer}>
          <Button
            title={isSubmitting ? `loading...` : 'Login'}
            onPress={handleSubmit}
            disabled={isSubmitting}
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonContainer: {
    margin: 12,
  }
});
