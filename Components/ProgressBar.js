import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProgressBar = function ({width,backgroundColor}) {
    
    return (
        <View style={styles.mainProgressBar}>
            <View style = {{height:20, borderRadius:5,
                backgroundColor:backgroundColor,width:width}}>

            </View>
        </View>
        
    );
}


const styles = StyleSheet.create({

    mainProgressBar:{
        width: "100%",
        backgroundColor: "white",
        height: 20,
        borderRadius: 5,
    }

    
})

export default ProgressBar;