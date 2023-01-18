import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import MarksTable from "../Components/MarksTable";
import AppHeader from "../Components/AppHeader"
import TextDisplay from "../Components/TextDisplay";


const GradeScreen = function () {
    const assignmentMarks=[{date:"2020-05-04",topic:"Assign1",total:"10.0",obtained:"6.0"},
    {date:"2020-05-04",topic:"Assign1",total:"10.0",obtained:"6.0"},
    {date:"2020-05-04",topic:"Assign2",total:"10.0",obtained:"8.0"},
    ]
    return (
        <ScrollView>

    <View>
            
        
            <View style={{backgroundColor:'#C0E3F1',padding:15}}> 
                <TextDisplay boldWord={"Course"} text={"Environmental Montoring"}/>
                <TextDisplay boldWord={"Faculty"} text={"Dr Jabir Syed"}/>
            </View>
            <View >
            
                <MarksTable heading={"Assignment Marks"} marks={assignmentMarks} />
                <MarksTable heading={"Quiz Marks"} marks={assignmentMarks} />
                <MarksTable heading={"Lab Assignment Marks"} marks={assignmentMarks} />
                <MarksTable heading={"Lab Final Marks"} marks={assignmentMarks} />
                <MarksTable heading={"Final Marks"} marks={assignmentMarks} />

            </View>
            
        </View>

        </ScrollView>
        
        
    );
}


const styles = StyleSheet.create({
    
})

export default GradeScreen;