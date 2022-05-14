import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { style } from "./styles";
import { Button } from "../../components/Button";
import { propsStack } from "../../routes/models/stack";


export function Home(){
    const navigation = useNavigation<propsStack>();
    return(
        <View style={style.container}>
            <Text>
                
                your arrived in Home Page
            </Text>
            <Button 
            title="Cadastra-se"
            activeOpacity={.7}
            onPress={()=> navigation.navigate('Register')}
            />
        </View>
    );
}