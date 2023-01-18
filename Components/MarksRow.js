import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MarksRow = function ({r1,r2,r3,r4}) {
    
    return (
        <View style={[styles.tr]}>
            <Text style={{width:100}}>
                {r1}
            </Text>
            <Text style={{width:100}}>
                {r2}
            </Text>
            <Text style={{width:60}}>
                {r3}
            </Text>
            <Text style={{width:60}}>
                {r4}
            </Text>
        </View>
        
    );
}


const styles = StyleSheet.create({
    tr:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
    },

    row:{
        
    }

})

export default MarksRow;