import React from "react";
import { Text, View } from "react-native";

import { style } from "./styles";
import { Button } from "../../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

/*type stackParmList  ={
    Home: undefined,
    SignIn: undefined,
    Register: undefined,
}


type stackPropsLocal = NativeStackScreenProps<stackParmList,'Home'>;

type Props = {
    routes: stackPropsLocal
}*/

export function Register(){
    const navigation = useNavigation()


    return(
        <View style={style.container}>
            <Text>
                
                your arrived in Register Page
            </Text>
            <Button 
            
            activeOpacity={.7}
            onPress={()=>  navigation.navigate('SignIn')}
            />
        </View>
    );
}