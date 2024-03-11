import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firstScreen from './firstScreen';
import sync from './sync';
import Profile from './profile';



const Tab = createBottomTabNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={firstScreen} />
      <Tab.Screen name="sync" component={sync} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


export default NavigationStack;