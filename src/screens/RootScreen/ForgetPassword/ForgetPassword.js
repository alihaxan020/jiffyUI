import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import {Container, Text} from '../../../components/elements';
import {COLORS, fontFamily, SIZES, icons, FONTS} from '../../../constants';
import {useForm, Controller} from 'react-hook-form';
const ForgetPassword = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = data => {
    console.log(data);
    reset({});
  };
  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <Text style={styles.title} isCenter isWhite isBold>
        SIGN IN
      </Text>
      <Container style={styles.inputWrapper}>
        <Container style={styles.inputContainer}>
          <Container style={styles.textContainer}>
            <Text style={styles.title} isBold>
              Password Reset
            </Text>
            <Text style={[styles.title, FONTS.h5]}>
              Enter Email Address To Send Reset Code
            </Text>
          </Container>
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
  );
};

export default ForgetPassword;

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
  textContainer: {
    padding: 20,
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
    marginRight: 20,
  },
  inputText: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.height * 0.1,
    alignItems: 'center',
  },
  signup: {
    width: '100%',
    marginVertical: 20,
    backgroundColor: COLORS.primary,
  },
});
