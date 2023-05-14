// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
// import {NavigationContainer} from 'react-navigation/native'
// import { createStackNavigator } from 'react-navigation-stack';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={{ width: windowWidth, height: windowHeight }}
//         source={require('./assets/SignPageImage.jpg')}
//         resizeMode="cover"
//       />

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Sign-up</Text>
//         </TouchableOpacity>
//       </View>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e3492b',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -(windowWidth * 0.25) }, { translateY: -(windowHeight * 0.1) }],
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#e3492b',
//     paddingVertical: 10,
//     paddingHorizontal: 50,
//     borderRadius: 15,
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });









// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import SplashScreen1 from  './Screens/SplashScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={SplashScreen} />
//         <Stack.Screen name="Details" component={UsernameScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }







import { StyleSheet, View } from 'react-native';
import SplashScreen from  './Screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {UsernameScreen} from './Screens/WELCOME';
import {FoodChoice} from './Screens/ChoiceOfFood';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen 
  name="Your food partner" 
  component={SplashScreen} 
  options={{
    headerStyle: { backgroundColor: '#e3492b' },
   headerTitleStyle: { color: 'white' }
  }} 
/>

        <Stack.Screen name="WELCOME" 
        component={UsernameScreen}
        options={{
          headerStyle: { backgroundColor: '#FF8B28' },
         headerTitleStyle: { color: 'white' }
        }} />

        <Stack.Screen name="ChoiceOfFood"
        component={FoodChoice}
        options={{
          headerStyle: { backgroundColor: '#FF8B28' },
         headerTitleStyle: { color: 'white' }
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

