import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AttendanceBar = function ({course,height, color}) {
    
    return (
        <View style={styles.container}>
            <Text>
                {height}%
            </Text>
            <View style={{backgroundColor:color,height:height*2,width:35}}>

            </View>
            <Text style={{color:color, fontWeight: 'bold'}}>
                {course}
            </Text>

        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    
})

export default AttendanceBar;