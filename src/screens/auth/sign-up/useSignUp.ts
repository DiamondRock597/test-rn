import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { AuthApi } from '@/services/api';

const signUpSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
});

type SignUpFormValues = yup.InferType<typeof signUpSchema>;

export const useSignUp = () => {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = useCallback(
    async (data: SignUpFormValues) => {
      try {
        setLoading(true);

        const response = await AuthApi.signUp(data);

        if (response?.basicAuthCredentials) {
          navigation.navigate('Profile', { basicAuthCredentials: response.basicAuthCredentials });
        } else {
          navigation.navigate('Profile');
        }
      } catch (_) {
        Alert.alert('Sign Up Failed', 'Unable to complete signup. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    [navigation]
  );

  const goBack = useCallback(() => {
    navigation.goBack?.();
  }, [navigation]);

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    loading,
    showPassword,
    setShowPassword,
    goBack
  };
};
