import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TextDisplay = function ({boldWord,text}) {
    
    return (
        <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>
                    {boldWord}:  
                </Text>
                <Text >
                    {"  "}{text}
                </Text>
        </View>

        
    );
}


const styles = StyleSheet.create({
    
})

export default TextDisplay;

