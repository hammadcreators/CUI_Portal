import React, {useState} from 'react';
import AppHeader from '../Components/AppHeader';

import {
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {signInUserWithEmailAndPassword} from '../utils/firebase/firebase.utils';

const SignInScreen = function ({navigation}) {
  const [field, setField] = useState('');
  const [roll, setRoll] = useState('');
  const [session, setSession] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async () => {
    const email = session + '-' + field + '-' + roll + '@comsats.edu.pk';
    console.log(email);

    try {
      const userCredentials = await signInUserWithEmailAndPassword(
        email,
        password,
      );
      // alert(userCredentials.user);
      navigation.navigate('Home');
    } catch (ex) {
      alert("Invalid username or password");
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/bgpic.jpg')}
        style={styles.bg}
      />

      <View style={styles.form}>
        <Image
          source={require('../Assets/ComsatsLogo.png')}
          style={styles.logo}
        />

        <View style={styles.regno}>
          <TextInput
            placeholder={'FA19'}
            style={styles.rollTextInput}
            value={session}
            onChangeText={val => {
              setSession(val);
            }}
          />

          <TextInput
            placeholder={'BSE'}
            style={styles.rollTextInput}
            value={field}
            onChangeText={value => {
              setField(value);
            }}
          />

          <TextInput
            placeholder={'084'}
            style={styles.rollTextInput}
            value={roll}
            onChangeText={value => {
              setRoll(value);
            }}
          />
        </View>
        <View style={styles.password}>
          <TextInput
            secureTextEntry
            style={styles.passwordField}
            value={password}
            onChangeText={val => {
              setPassword(val);
            }}
          />
        </View>

        <TouchableOpacity style={styles.signinBtn} onPress={onSubmitHandler}>
          <Text style={styles.text}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bg: {
    flex: 1,
    opacity: 0.5,
  },

  form: {
    position: 'absolute',
    top: 200,
    width: '100%',
    right: 0,
    alignItems: 'center',
  },

  logo: {
    width: '90%',
  },

  regno: {
    flexDirection: 'row',
    marginTop: 15,
  },

  rollTextInput: {
    width: 100,
    backgroundColor: '#fff',
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  password: {
    marginTop: 15,
  },

  signinBtn: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: 350,
    marginTop: 20,
  },

  text: {
    color: 'white',
  },

  passwordField: {
    width: 350,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default SignInScreen;
