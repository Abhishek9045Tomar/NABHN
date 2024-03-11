import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { vh } from '../../../utils';
import { setGestureState } from 'react-native-reanimated';
import { managePanProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    
    navigation.navigate('Home')
  };

  const isInputEmpty = email === '' || password === '';

  return (
    <SafeAreaView style={styles.safeArea}>
    <ImageBackground
      source={require('../../../assests/Images/bGVector.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Image
          source={require('../../../assests/Images/logoLayer.png')} 
          style={styles.topImage}
        />
        <Text style={styles.statusText}>Assessor Login</Text>
        <Text style={styles.mainText}>Enter Email and Password to continue</Text>
        <View style={[styles.inputContainer, { opacity: email === '' ? 0.7 : 1 }]}>
          <Image
            source={require('../../../assests/Images/mail.png')} 
            style={[styles.icon, { tintColor: email === '' ? 'gray' : 'black' }]}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}  
          />
        </View>
        <View style={[styles.inputContainer, { opacity: password === '' ? 0.7 : 1 }]}>
          <Image
            source={require('../../../assests/Images/lock.png')} // Set your password icon source
            style={[styles.icon, { tintColor: password === '' ? 'gray' : 'black' }]}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={[styles.loginButton, { backgroundColor: email === '' || password === '' ? 'rgba(0,0,0, 0.25)' : 'rgba(23,46,64,1)' }]}
          onPress={()=> navigation.navigate('Home')}
          disabled={email === '' || password === ''}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </SafeAreaView>
  );  
};

const styles = StyleSheet.create({

  keyboardAvoidingContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Adjust the overlay color and opacity
    padding: 20,
  },
  topImage: {
    width: 202, // Adjust the width as needed
    height: 202, // Adjust the height as needed
    alignSelf: 'center',
    marginTop: 10,
  },
  statusText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 15,
    alignSelf: 'center',
  },
  mainText: {
    color: 'black',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 43,
    borderColor: 'rgba(148,151,158,1)',
    borderWidth: .2,
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
    marginTop: 10,
    paddingLeft: 10,
  },
  icon: {
    width: 20, 
    height: 20, 
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: 'rgba(23,46,64,1)',
    padding:12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
    height: 48,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  safeArea: {
    flex: 1,
  },
  
});
    
 

export default Login;
