import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Container, Text} from '../../../components/elements';
import {AppLoader} from '../../../components/common';
import {COLORS, fontFamily, SIZES, icons, images} from '../../../constants';
import {useForm, Controller} from 'react-hook-form';
import {useSelector, useDispatch} from 'react-redux';
import {userLogin, loadingAction} from '../../../redux/actions/userAction';
const LoginScreen = ({navigation}) => {
  //redux
  const {user, loading} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const handleLogin = value => dispatch(userLogin(value));
  //redux
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = data => {
    console.log(data);
    console.log('===>', dispatch(loadingAction(true)));
    // dispatch(loadingAction(true));
    handleLogin(data);
    reset({});
  };

  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <Text style={styles.title} isCenter isWhite isBold>
        SIGN IN
      </Text>
      {loading ? <AppLoader /> : null}
      <Container style={styles.inputWrapper}>
        <Container style={styles.inputContainer}>
          <Container style={styles.email}>
            <Text style={styles.title}>Email</Text>
            {errors.email && (
              <Text style={styles.errorStyle} isDanger>
                {errors.email.message ? `${errors.email.message}` : 'Required!'}
              </Text>
            )}

            <Container style={styles.inputTextWrapper}>
              <icons.Ionicons name="ios-mail" size={20} />

              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                  required: true,
                }}
                render={({field: {onChange, onBlur, value, ref}}) => (
                  <TextInput
                    style={styles.inputText}
                    {...register('email', {
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email',
                      },
                    })}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Enter your email"
                    autoCapitalize="none"
                    inputRef={ref}
                  />
                )}
                name="email"
              />
            </Container>
          </Container>
          <Container style={styles.email}>
            <Text style={styles.title}>Password</Text>

            {errors.password && (
              <Text isDanger style={styles.errorStyle}>
                Required!
              </Text>
            )}
            <Container style={styles.inputTextWrapper}>
              <icons.Ionicons name="ios-lock-closed" size={20} />

              <Controller
                control={control}
                placeholder="Enter your email"
                rules={{
                  required: true,
                }}
                {...register('password', {
                  minLength: 6,
                })}
                render={({field: {onChange, onBlur, value, ref}}) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Enter your password"
                    autoCapitalize="none"
                    style={styles.inputText}
                    secureTextEntry={true}
                    inputRef={ref}
                  />
                )}
                name="password"
              />
            </Container>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={styles.forget}>Forget Password?</Text>
            </TouchableOpacity>
            <Container style={styles.signBtnWrapper}>
              <TouchableOpacity
                style={styles.signBtn}
                onPress={handleSubmit(onSubmit)}>
                <icons.Ionicons
                  name="arrow-forward"
                  size={20}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container style={styles.footer}>
        <Text style={styles.textStyle} isWhite>
          or Sign in with
        </Text>
        <TouchableOpacity style={styles.googleBtn}>
          <Image source={images.google} style={styles.googleLogo} />
          <Text
            style={styles.textStyle}
            isCenter
            isHeadingTitle
            isBold
            isPrimary>
            SIGN IN WITH GOOGLE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signup}
          onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.textStyle} isWhite isCenter>
            Don't have account? Click here
          </Text>
        </TouchableOpacity>
      </Container>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontFamily: fontFamily.fontBold,
    fontSize: SIZES.h3,
    paddingTop: SIZES.height * 0.015,
  },
  inputWrapper: {
    width: SIZES.width,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginTop: SIZES.height * 0.06,
  },
  inputContainer: {
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.4,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: SIZES.width * 0.3,
    overflow: 'hidden',
  },
  email: {
    marginHorizontal: 20,
    marginTop: SIZES.height * 0.025,
  },
  inputTextWrapper: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.brickRed,
    paddingBottom: 5,
    height: SIZES.width * 0.085,
    alignItems: 'center',
    flexDirection: 'row',
  },
  forget: {
    paddingTop: 10,
    alignSelf: 'flex-end',
  },
  signBtnWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  signBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    marginTop: SIZES.height * 0.03,
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    // justifyContent: 'center',
    marginTop: SIZES.height * 0.1,
    alignItems: 'center',
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%',
    height: 70,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: COLORS.white,
  },
  textStyle: {
    marginVertical: 10,
  },
  signup: {
    width: '100%',
    marginVertical: 20,
    backgroundColor: COLORS.primary,
  },
  googleLogo: {width: 70, height: 70},
});
