import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Login(): JSX.Element {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic
    // Navigate to the main screen
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView>
      <Text>Login!</Text>
      <Button title={'Next'} onPress={handleLogin} />
    </SafeAreaView>
  );
}
