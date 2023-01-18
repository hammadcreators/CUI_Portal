import React from "react";
import { View, StyleSheet, Text } from "react-native";

const TableRow = function ({r1,r2,style}) {
    
    return (
        <View style={[styles.tr,style]}>
            <Text style={styles.row1}>
                {r1}
            </Text>
            <Text>
                {r2}
            </Text>
        </View>
        
    );
}


const styles = StyleSheet.create({
    tr:{
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
    },

    row1:{
        fontWeight: 'bold',
    }

})

export default TableRow;