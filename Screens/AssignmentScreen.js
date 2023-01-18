import React from "react";
import { onValue, query, ref } from "firebase/database";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MarksTable from "../Components/MarksTable";
import { useState,useEffect } from "react";
import AppHeader from "../Components/AppHeader"
import TextDisplay from "../Components/TextDisplay";
import AssignmentThread from "../Components/AssignmentThread";
import { db } from "../utils/firebase/firebase.utils";


const AssScreen = function () {
    const [assignments, setAssignments] = useState({});
    let ids = Object.keys(assignments);
    useEffect(()=>{
        return onValue(ref(db,'/Assinment'),async (querySnapshot)=>{
            let data = await querySnapshot.val() || {};
            let a = {...data};
            setAssignments(a);
        });
    },[])
    return (
        <ScrollView>

    <View>
            
            
        
            <View style={{backgroundColor:'#C0E3F1',padding:15}}> 
                <TextDisplay boldWord={"Course"} text={"Environmental Montoring"}/>
                <TextDisplay boldWord={"Faculty"} text={"Dr Jabir Syed"}/>
            </View>
            <View >
                {
                     ids.map((id,i)=>{
                        let it = assignments[id];
                        return(
                            <AssignmentThread key={id} id={id} assignmentTittle={it.assignmentTittle} dueDate={it.dueDate} marks={it.marks}/>
                        );
                    }) 
                }
                

            </View>
            
        </View>

        </ScrollView>
        
        
    );
}


const styles = StyleSheet.create({
    
})

export default AssScreen;