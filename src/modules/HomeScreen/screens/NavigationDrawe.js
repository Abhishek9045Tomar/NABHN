// Navigation.js
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
 
import DrawerOne from './DrawerOne'; 
import DrwaerTwo from './DrwaerTwo'; 
import Home from './Home';


const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="DrawerOne" component={DrawerOne} />
        <Drawer.Screen name="DrwaerTwo" component={DrwaerTwo} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
