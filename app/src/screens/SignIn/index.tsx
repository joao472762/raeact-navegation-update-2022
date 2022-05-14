import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { propsStack } from '../../routes/models/stack';


import { styles } from './styles';


export function SignIn() {
  const navigation = useNavigation<propsStack>();

  function handleGoToHome(){
    navigation.navigate("Home")
  }
  return (
    <View style={styles.container}>
        <Text>
            you arrived the SignIn page
        </Text>
        <Button
        title="ir para Home"
        onPress={()=> handleGoToHome()}
   
        />
    </View>
  );
}