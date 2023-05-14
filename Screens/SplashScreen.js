// import React, { useEffect } from 'react';
// import { Image, StyleSheet, View ,Dimensions} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import { StatusBar } from 'expo-status-bar';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const SplashScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.navigate('UsernameScreen');
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image
//         style={{ width: windowWidth, height: windowHeight }}
//         source={require('../assets/SignPageImage.jpg')}
//         resizeMode="cover"
//       />
//        <StatusBar backgroundColor="#e3492b" />
//        <StatusBar style="auto" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//         flex: 1,
//         backgroundColor: '#e3492b',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
// });



// export default SplashScreen;





import React, { useEffect } from 'react';
import { Image, StyleSheet, View ,Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('WELCOME');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e3492b" />
      <Image
        style={{ width: windowWidth, height: windowHeight }}
        source={require('../assets/SignPageImage.jpg')}
        resizeMode="cover"
      />
       
       <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#e3492b',
        alignItems: 'center',
        justifyContent: 'center',
      },
});



export default SplashScreen;
