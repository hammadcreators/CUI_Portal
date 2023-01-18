import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AppHeader = function ({text}) {
    
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "purple",
        padding: 10,
    },

    text: {
        color: "white"
        
    }
})

export default AppHeader;