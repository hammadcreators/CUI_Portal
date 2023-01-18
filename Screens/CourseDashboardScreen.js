import { useFocusEffect } from "@react-navigation/native";
import { onValue, query, ref } from "firebase/database";
import { FirebaseApp } from "firebase/app";
import { useState,useEffect } from "react";
import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import AppHeader from "../Components/AppHeader";
import Course from "../Components/Course";
import { db } from "../utils/firebase/firebase.utils";
import { asin } from "react-native-reanimated";

const CourseDashboardScreen = function () {
    // const courses = [{id:1, courseName: "Environmental Monitoring", totalClasses:32, present:29, absent:5 },
    // {id:2, courseName: "Mobile Application Development", totalClasses:31, present:28, absent:4 },
    // {id:3, courseName: "Software Testing", totalClasses:32, present:29, absent:5 },
    // {id:4, courseName: "Software Engineering", totalClasses:32, present:30, absent:4 },
    // {id:5, courseName: "MERN", totalClasses:32, present:28, absent:6 }
    //     ]
    const [courses, setCourses] = useState({});
    let ids = Object.keys(courses);
    useEffect(()=>{
        return onValue(ref(db,'/CourseDashboard'),async (querySnapshot)=>{
            let data = await querySnapshot.val() || {};
            let course = {...data};
            setCourses(course);
        });
    },[])
    return (
        <View style={styles.container}>  
        {
                ids.map((id,i)=>{
                    let it = courses[id];
                    return(
                        <Course key={id} serial={id} course={it.courseName} totalClasses={it.totalClasses} present={it.present} absent={it.absent}/>
                    );
            }) 
        }   

        </View>
        
    );
}


const styles = StyleSheet.create({
    
})

export default CourseDashboardScreen;