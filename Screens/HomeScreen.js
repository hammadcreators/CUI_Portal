import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AppHeader from "../Components/AppHeader"
import TableRow from "../Components/TableRow"
import AttendanceBar from "../Components/AttendanceBar"

const HomeScreen = function () {
    
    return (
        <View style={styles.container}>
            
            <View style={styles.UserInfo}>
                <View>
                <Text style={styles.UserText}>
                    Welcome
                </Text>
                <Text style={styles.UserText}>
                    Hammad
                </Text>
                </View>
                <Image source={require("../Assets/UserProfile.jpg")} style={styles.userprofile} />
            </View>
            
            

            <View style={styles.UserTable}>
                <TableRow r1={"Father Name"} r2={"Amjad Mahmood"} style={styles.tablebg}/>
                <TableRow r1={"Registered Courses"} r2={"5"}/>
                <TableRow r1={"Section"} r2={"BSSE-7B"} style={styles.tablebg}/>
                <TableRow r1={"Current Semester"} r2={"7"}/>               
               
            </View>

            <Text style={{textAlign:'center', fontSize:16, fontWeight: '700', marginVertical:10}}>
                    Attendance Percentage Course Wise
                </Text>

            <View style={styles.UserAttendance}>
                <AttendanceBar height={80} course={"CSC105"} color={"#E5D9F2"}/>
                <AttendanceBar height={100} course={"HUM115"} color={"#8ACDEA"}/>
                <AttendanceBar height={100} course={"CSC225"} color={"#FF37A6"}/>
                <AttendanceBar height={100} course={"CSC111"} color={"#EFCB68"}/>
                <AttendanceBar height={100} course={"MTH005"} color={"#7BF1A8"}/>

            </View>


            
        </View>
        
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    UserInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 200,
        width: '100%',
    },
    userprofile: {
        width: 140,
        height: 140,
        borderRadius: 100,

    },

    UserText: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    UserTable:{
        marginHorizontal: 10,
    },

    tablebg: {
        backgroundColor: '#eee',
    },

    UserAttendance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
        borderColor: '#ccc',
        alignItems: 'flex-end',
        
    }

      
})

export default HomeScreen;