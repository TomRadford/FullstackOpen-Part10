import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../theme';
import Button from './Button';
import LargeInput from './LargeInput';
import * as yup from 'yup';
import { useFormik } from 'formik';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    gap: 15,
    backgroundColor: theme.colors.bgSecondary,
    padding: 20
  }
});

const validationSchema = yup.object().shape({
  username: yup.string().required().min(3),
  password: yup.string().required().min(3)
});

const initialValues = { username: '', password: '' };

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    try {
      const { data } = await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <View style={styles.container}>
      <LargeInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        error={formik.touched.username && formik.errors.username}
      />
      <LargeInput
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        error={formik.touched.password && formik.errors.password}
      />
      <Button onPress={formik.handleSubmit} />
    </View>
  );
};
export default SignIn;
