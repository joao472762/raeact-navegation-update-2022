import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../../screens/Home";
import { SignIn } from "../../screens/SignIn";
import { stackNavigationScreensProps } from "../models/stack";


const {
    Navigator,
    Screen
} = createNativeStackNavigator<stackNavigationScreensProps>()

export function StackScreens(){

    return(
        <Navigator 
        screenOptions={{
            headerShown: false
        }}
        >
            <Screen
            name="SignIn"
            component={SignIn}
            />

            <Screen
            name="Home"
            component={Home}
            />
        </Navigator>
    )
}