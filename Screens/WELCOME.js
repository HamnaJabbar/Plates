import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, TextInput,Button } from 'react-native';
import React,{useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FoodChoice} from 'ChoiceOfFood';

export default function UsernameScreen(){
  const [userName,setuserName]=useState('');
  const [password,setpassword]=useState('');
  const [confirmPassword,setconfirmPassword]=useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation=useNavigation();

  const handlesignIn = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please enter correct password.');
    } else {
      setErrorMessage('');
      navigation.navigate('ChoiceOfFood');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e3492b" />
      <Text style={styles.label}>Enter your Username here</Text>
      <TextInput
        style={styles.input}
        placeholder="username"
        value={userName}
        onChangeText={(text) => setuserName(text)}
      />

      <Text style={styles.label}> Enter password:</Text>
      <TextInput
        style={styles.input}
        placeholder="enterpassword"
        value={password}
        onChangeText={(text) => setpassword(text)}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="confirmpassword"
        value={confirmPassword}
        onChangeText={(text) => setconfirmPassword(text)}
      />

      <Text style={styles.error}>{errorMessage}</Text>

      <Button title="Sign In" onPress={handlesignIn} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3492b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    color: '#fff',
    marginBottom: 20,
    width: '80%',
    fontSize: 16,
  },
  error: {
    color: '#ff0000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
