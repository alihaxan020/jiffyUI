import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Container, Text} from '../../../components/elements';
import {COLORS, fontFamily, SIZES, icons, images} from '../../../constants';
import {useForm, Controller} from 'react-hook-form';
const SignupScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      password_repeat: '',
    },
  });
  const onSubmit = data => {
    if (data.password !== data.password_repeat) {
      return alert("Password didn't match");
    } else {
      console.log(data);
      reset({});
    }
  };
  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <Text style={styles.title} isCenter isWhite isBold>
        SIGN UP
      </Text>
      <ScrollView>
        <Container style={styles.inputWrapper}>
          <Container style={styles.inputContainer}>
            <Container style={styles.email}>
              <Container style={styles.required}>
                <Text style={styles.title}>Name</Text>

                {errors.name && (
                  <Text style={styles.errorStyle} isDanger>
                    *
                  </Text>
                )}
              </Container>

              <Container style={styles.inputTextWrapper}>
                <icons.FontAwesome name="user" size={20} />
                <Controller
                  control={control}
                  rules={{
                    minLength: 3,
                    maxLength: 100,
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value, ref}}) => (
                    <TextInput
                      style={styles.inputText}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Enter your name"
                      autoCapitalize="none"
                      inputRef={ref}
                    />
                  )}
                  name="name"
                />
              </Container>
            </Container>
            <Container style={styles.email}>
              <Container style={styles.required}>
                <Text style={styles.title}>Email</Text>
                {errors.email && (
                  <Text style={styles.errorStyle} isDanger isHeadingTitle>
                    {errors.email.message ? `${errors.email.message}` : '*'}
                  </Text>
                )}
              </Container>

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
                          message: '*',
                        },
                      })}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Enter your email"
                      autoCapitalize="none"
                      inputRef={ref}
                      keyboardType="email-address"
                    />
                  )}
                  name="email"
                />
              </Container>
            </Container>
            <Container style={styles.email}>
              <Container style={styles.required}>
                <Text style={styles.title}>Phone</Text>
                {errors.phone && (
                  <Text style={styles.errorStyle} isDanger isHeadingTitle>
                    *
                  </Text>
                )}
              </Container>

              <Container style={styles.inputTextWrapper}>
                <icons.FontAwesome name="phone" size={20} />

                <Controller
                  control={control}
                  rules={{
                    maxLength: 11,
                    minLength: 11,
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value, ref}}) => (
                    <TextInput
                      style={styles.inputText}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Enter your phone"
                      autoCapitalize="none"
                      inputRef={ref}
                      keyboardType="numeric"
                    />
                  )}
                  name="phone"
                />
              </Container>
            </Container>
            <Container style={styles.email}>
              <Container style={styles.required}>
                <Text style={styles.title}>Password</Text>

                {errors.password && (
                  <Text isDanger style={styles.errorStyle} isHeadingTitle>
                    *
                  </Text>
                )}
              </Container>
              <Container style={styles.inputTextWrapper}>
                <icons.Ionicons name="ios-lock-closed" size={20} />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    minLength: 6,
                  }}
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
            </Container>
            <Container style={styles.email}>
              <Container style={styles.required}>
                <Text style={styles.title}>Confirm Password</Text>

                {errors.password_repeat && (
                  <Text isDanger style={styles.errorStyle} isHeadingTitle>
                    *
                  </Text>
                )}
              </Container>
              <Container style={styles.inputTextWrapper}>
                <icons.Ionicons name="ios-lock-closed" size={20} />

                <Controller
                  control={control}
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
                      placeholder="Enter your confirm password"
                      autoCapitalize="none"
                      style={styles.inputText}
                      secureTextEntry={true}
                      inputRef={ref}
                    />
                  )}
                  name="password_repeat"
                />
              </Container>
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
      </ScrollView>
      <Container style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text isWhite>I Already Have An Account? Click Here</Text>
        </TouchableOpacity>
      </Container>
    </Container>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  required: {
    flexDirection: 'row',
    alignItems: 'center',
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
    height: SIZES.height * 0.65,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: SIZES.width * 0.3,
    overflow: 'hidden',
  },
  email: {
    marginHorizontal: 20,
    marginTop: SIZES.height * 0.02,
  },
  inputTextWrapper: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.brickRed,
    paddingBottom: 5,
    height: SIZES.width * 0.078,
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
