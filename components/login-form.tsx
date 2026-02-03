import { ThemedView } from '@/components/themed-view';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';
import FormHookInput from './forms/form-hook-input';

const serverAction = (login: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      alert(`Login: ${login} and Password: ${password}`);
      resolve(null);
    }, 1000)
  });
}

const schema = yup.object({
  login: yup.string().required().max(16).min(8),
  password: yup.string().required().max(16).min(8)
});

export type LoginFormProps = {
  id: string;
};

const LoginForm = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = React.useCallback(async (data) => {
    debugger;
    console.log(data);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormHookInput
            control={control}
            name='login'
          />
          <FormHookInput
            control={control}
            name='password'
            secureTextEntry
          />
          <ThemedView style={styles.buttonContainer}>
            <Button

              title='Login'
              onPress={onSubmit}
            />
          </ThemedView>
        </form>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 12,
  }
});

export default LoginForm;