import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Course = function ({serial,course,totalClasses,present,absent}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {serial}.  {course}
            </Text>
            <Text style={{margin: 4}}>
                BSE-7-B
            </Text>
            <View style={styles.stats}>
                <Text style={styles.text}>
                    Total Classes:{totalClasses}
                </Text>
                <Text style={styles.text}>
                    Presents:{present}
                </Text>
                <Text style={styles.text}>
                    Absents:{absent}
                </Text>
            </View>

        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
        borderColor: "purple",
        borderWidth: 1,
        borderRadius: 15,
        padding: 7,
        backgroundColor: "#C0E3F1",
        margin: 10,
    },
    stats: {
        marginTop: 3,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text:{
        fontWeight: "bold",
        

    }
})

export default Course;