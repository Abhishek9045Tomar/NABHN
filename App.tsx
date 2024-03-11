
 import React, {useState, useEffect} from 'react';
 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/modules/HomeScreen/screens/Home';
import Sync from './src/modules/HomeScreen/screens/Sync';
import Profile from './src/modules/HomeScreen/screens/Profile';
import AssignHospitalList from './src/modules/HomeScreen/screens/AssignHospitalList';
import Navigation from './src/modules/HomeScreen/screens/NavigationDrawe';
import { Image } from 'react-native';
 import {
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,PermissionsAndroid
  } from 'react-native';
   import Geolocation from '@react-native-community/geolocation';
import Login from './src/modules/Auth/screens/Login';
import Splash from './src/modules/Auth/screens/Splash';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" >
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};




// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // useEffect(() => {
//   //   // You can check if the user is logged in or has a valid session
//   //   // For demonstration, I am setting it to true immediately
//   //   setIsLoggedIn(true);
//   // }, []);

//   const handleLogin = () => {
//     // Perform your login logic here
//     // Once login is successful, call setIsLoggedIn(true)
//     setIsLoggedIn(true);
//   };

//   if (!isLoggedIn) {
//     return (
//       <SafeAreaView style={styles.container}>
//         {/* Pass the handleLogin function as a prop 
//         <Login onLogin={handleLogin} /> */}
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             headerShown: false,
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;

//               if (route.name === 'Home') {
//                 iconName = focused ? require('./src/assests/Images/HomeBlue.png') : require('./src/assests/Images/HomeBlue.png');
//               } else if (route.name === 'Sync') {
//                 iconName = focused ? require('./src/assests/Images/sync.png') : require('./src/assests/Images/sync.png');
//               } else if (route.name === 'Profile') {
//                 iconName = focused ? require('./src/assests/Images/profile.png') : require('./src/assests/Images/profile.png');
//               }

//               return <Image source={iconName} style={{ width: 40, height: 35 }} />;
//             },
//           })}
//         >
//           <Tab.Screen name="Home" component={HomeStack} />
//           <Tab.Screen name="Sync" component={Sync} />
//           <Tab.Screen name="Profile" component={Profile} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;



