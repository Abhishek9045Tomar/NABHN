
import React, { useEffect } from 'react';
import { SafeAreaView, View, ImageBackground, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';


function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
     
      navigation.navigate('Login'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assests/Images/splash.png')} 
        style={styles.backgroundImage}
      >
      </ImageBackground>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23, 46, 65, 1)', 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  safeArea: {
    flex: 1,
  },
});

export default Splash;
