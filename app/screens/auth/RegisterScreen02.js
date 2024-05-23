import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  useColorScheme,
  TextInput,
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Fonts from '../../../assets/fonts/Fonts';
import { registerUserTK } from '../../services/userService';

// NHAP PASSWORD
const verifyPassword = password => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

const RegisterScreen02 = ({navigation, route}) => {
  console.log('route2', route.params);
  const isDarkMode = useColorScheme() === 'dark';
  const [password, setPassword] = useState('');
  const [confirmPassword, setConFirmPassword] = useState('');
  const maBN = route.params.MABN || null;
  const email = route.params.email;
  console.log(maBN, email)

  const defaultObjValidInput = {
    isValidPassword: true,
    isPassword: true,
    isValidConfirmPassword: true,
  };
  const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

  const handlePassword = async () => {
    setObjValidInput(defaultObjValidInput);
    if (!password) {
      setObjValidInput({...defaultObjValidInput, isValidPassword: false});
      return;
    }
    if (!verifyPassword(password)) {
      setObjValidInput({...defaultObjValidInput, isPassword: false});
      return;
    }
    if (!confirmPassword) {
      setObjValidInput({
        ...defaultObjValidInput,
        isValidConfirmPassword: false,
      });
      return;
    }
    if (confirmPassword !== password) {
      Alert.alert('Lỗi', 'Mật khẩu không đồng nhất. Vui lòng nhập lại...');
      return;
    }
    if (maBN) {
      const response = await registerUserTK({email, password, maBN});

      if (response && response.data && response.data.errcode === 0) {
        Alert.alert('Thành công', `${response.data.message}`);
        navigation.navigate('Login');
      } else {
        Alert.alert('Lỗi', `${response.data.message}`);
      }
    } else {
      navigation.navigate('Register03', {...route.params, password});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/BackgroundLogin.png')}
        resizeMode="cover"
        style={styles.image}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="hanlde">
          <View style={styles.container01}>
            <Image
              source={require('../../../assets/images/Logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.container02}>
            <View style={styles.container021}>
              <Text style={styles.title}>Chào Mừng Đến Với BCareful!</Text>
              <Text style={styles.content}>Nhập Password Để Tiếp Tục</Text>
            </View>
            <View style={styles.container022}>
              <View style={styles.itemGroup}>
                <View style={styles.password}>
                  <Text style={styles.itemText}>Mật Khẩu</Text>
                </View>
                <TextInput
                  style={[
                    styles.itemTextInput,
                    {
                      borderColor: objValidInput.isValidPassword
                        ? '#7864EA'
                        : 'red',
                    },
                    {color: objValidInput.isValidPassword ? 'black' : 'red'},
                  ]}
                  value={password}
                  onChangeText={value => setPassword(value)}
                  //   onBlur={handleUsernameBlur}
                  autoCapitalize="none"
                  secureTextEntry={true}
                />
                <View style={styles.error}>
                  {!objValidInput.isValidPassword && (
                    <Text style={styles.errorText}>Chưa nhập mật khẩu</Text>
                  )}
                  {!objValidInput.isPassword && (
                    <Text style={styles.errorText}>
                      Mật khẩu ít nhất 8 kí tự (chữ hoa, thường, số, ký tự đặc
                      biệt).
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.itemGroup}>
                <View style={styles.password}>
                  <Text style={styles.itemText}>Xác Nhận Mật Khẩu</Text>
                </View>
                <TextInput
                  style={[
                    styles.itemTextInput,
                    {
                      borderColor: objValidInput.isValidConfirmPassword
                        ? '#7864EA'
                        : 'red',
                    },
                    {
                      color: objValidInput.isValidConfirmPassword
                        ? 'black'
                        : 'red',
                    },
                  ]}
                  value={confirmPassword}
                  onChangeText={value => setConFirmPassword(value)}
                  //   onBlur={handlePasswordBlur}
                  autoCapitalize="none"
                  secureTextEntry={true}
                />
                <View style={styles.error}>
                  {!objValidInput.isValidConfirmPassword ? (
                    <Text style={styles.errorText}>
                      Vui lòng xác nhận lại mật khẩu
                    </Text>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            </View>
            <View style={styles.container023}>
              <TouchableOpacity
                style={styles.registerBtn}
                onPress={handlePassword}>
                <Text style={styles.registerText}>Tiếp tục</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container03}>
            <Text style={styles.forgotPasswordText}>Đã có tài khoản?</Text>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.loginText}>Đăng Nhập Tài Khoản</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    flex: 1,
  },
  container01: {
    flex: 1,
  },
  container02: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 10,
  },
  container021: {
    flex: 3,
    borderColor: 'back',
  },
  container022: {
    flex: 7,
    borderColor: 'back',
  },
  container023: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: 'back',
    marginTop: 32,
  },
  container03: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    marginLeft: 40,
    marginTop: 80,
  },
  forgotPasswordText: {
    color: '#606060',
    fontSize: 12,
    fontFamily: Fonts.regural,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 26,
    color: '#000000',
  },
  content: {
    fontFamily: Fonts.regural,
    fontSize: 16,
    color: '#000000',
    marginTop: -10,
  },
  itemText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  itemTextInput: {
    fontSize: 16,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#7864EA',
    backgroundColor: '#E8D5FF',
    fontFamily: Fonts.regural,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: Fonts.regural,
  },
  error: {
    height: 20,
  },
  password: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registerBtn: {
    backgroundColor: '#EA793A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: Fonts.bold,
    width: '40%',
    marginTop: 30,
  },
  registerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
  },
  loginBtn: {
    borderColor: '#7864EA',
    borderWidth: 4,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    fontSize: 16,
    fontFamily: Fonts.bold,
    justifyContent: 'center',
    alignItems: 'center',
    width: '54%',
    marginHorizontal: 'auto',
  },
  loginText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: Fonts.bold,
  },
});

export default RegisterScreen02;