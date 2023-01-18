import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HeadingRow from "./HeadingRow";
import MarksRow from "./MarksRow";

const MarksTable = function ({heading,marks}) {
    
    return (
        <View>
            <View>
            <Text style={styles.heading}>
                {heading}
            </Text>
            </View>

            <HeadingRow/>
            <FlatList data={marks} renderItem={({item})=>{const {date,topic,total,obtained}=item;
             return(
            <MarksRow r1={date} r2={topic} r3={total} r4={obtained}/>
            )}}/>


        </View>
        
    );
}


const styles = StyleSheet.create({
    heading: {
        color:'white',
        backgroundColor:'#116DBD',
        padding: 4,
        textAlign: 'center',
        fontWeight:'bold',


    },
    
})

export default MarksTable;