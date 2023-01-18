import { ref, remove } from "firebase/database";
import React from "react";
import { View, StyleSheet, Text, Button, Touchable } from "react-native";
import { db } from "../utils/firebase/firebase.utils";

const AssignmentThread = function ({id,assignmentTittle,dueDate,marks}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {" "}{assignmentTittle}
            </Text>
            <Text style={{margin: 4, color:"red"}}>
                Deadline:{dueDate}
            </Text>
            <View style={styles.stats}>
                <Text>
                    Marks:{marks}
                </Text>
                <Text style={styles.text}>
                    Choose File
                </Text>
                <Button style={styles.button}sd'
                    onPress={() => {
                        remove(ref(db,`Assinment/${id}`));
                        alert("Submitted!")
                    }}
                    title="Submit"
                />
                
                            
                
                
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
        margin: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
    },
    text:{
        fontWeight: "bold",
        

    },
    button:{
        borderRadius: 15,
    }
})

export default AssignmentThread;