import { StackScreens } from "./stack/stack.routes";
import { NavigationContainer } from "@react-navigation/native";




export function Routes(){
    
    return(
        <NavigationContainer>
            <StackScreens/>     
        </NavigationContainer>
    )
}