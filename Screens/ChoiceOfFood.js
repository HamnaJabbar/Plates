import {Text,StyleSheet, View} from 'react-native';



const FoodChoice=()=>{
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Choose Your Food</Text>
            </View>
          );
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          text: {
            fontSize: 24,
            fontWeight: 'bold',
          },
        });
export default FoodChoice;