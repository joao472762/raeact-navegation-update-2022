import React from "react";
import { View, TouchableOpacity,TouchableOpacityProps, Text } from "react-native";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    title ?: string
}

export function Button({title, ...props}: ButtonProps){
    return(
        <TouchableOpacity 
        style={styles.container}
        {...props}
        >
            <Text style={styles.title}>
                {!title ? "clique aqui" : title}
            </Text>
        </TouchableOpacity>
    )
}