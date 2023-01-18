import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HeadingRow = function () {
    
    return (
        <View style={[styles.tr]}>
            <Text style={{width:100, fontWeight: 'bold'}}>
                Date
            </Text>
            <Text style={{width:100, fontWeight: 'bold'}}>
                Topic
            </Text>
            <Text style={{width:60,  fontWeight: 'bold'}}>
                Total
            </Text>
            <Text style={{width:60, fontWeight: 'bold'}}>
                Obtained
            </Text>
        </View>
        
    );
}


const styles = StyleSheet.create({
    tr:{
        flexDirection: 'row',
        padding: 7,
        justifyContent: 'space-between',
        backgroundColor: "#C0E3F1",
    },

    

})

export default HeadingRow;