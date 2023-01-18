import React from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import TextDisplay from '../Components/TextDisplay';
import AppHeader from '../Components/AppHeader';
import ProgressBar from '../Components/ProgressBar';
import MarksRow from '../Components/MarksRow';


const ClassProceedingScreen = function () {
  const lectures = [
    {id: '1', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '2', date: "2020 - 07 - 23", topics: 'Database', status: 'A'},
    {id: '3', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '4', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '5', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '6', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '7', date: "2020 - 07 - 23", topics: 'Array', status: 'A'},
    {id: '8', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '9', date: "2020 - 07 - 23", topics: 'Array', status: 'A'},
    {id: '10', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '11', date: "2020 - 07 - 23", topics: 'Array', status: 'A'},
    {id: '12', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '13', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '14', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '15', date: "2020 - 07 - 23", topics: 'Array', status: 'A'},
    {id: '16', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '17', date: "2020 - 07 - 23", topics: 'Array', status: 'P'},
    {id: '18', date: "2020 - 07 - 23", topics: 'Array', status: 'A'},
    {id: '19', date: "2020 - 07 - 23", topics: 'Array', status: 'A'}
  ];
  
  return (
    <View style={{backgroundColor: '#C0E3F1'}}>
      
      <View style={{backgroundColor: '#C0E3F1',padding: 15}}>
        <TextDisplay boldWord={'Course'} text={'Environmental Montoring'} />
        <TextDisplay boldWord={'Faculty'} text={'Dr Jabir Syed'} />
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TextDisplay boldWord={'Total Classes'} text={'29'} />
          <TextDisplay boldWord={'Presents'} text={'27'} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextDisplay boldWord={'Absents'} text={'2'} />
          <TextDisplay boldWord={'Percentage'} text={'90%'} />
        </View>

        <View style={{marginTop: 20}}>
          <ProgressBar backgroundColor={'#116DBD'} width={'85%'} />
        </View>

        <View style={[styles.tr]}>
          <Text style={{width: 20, fontWeight: 'bold'}}>S</Text>
          <Text style={{width: 120, fontWeight: 'bold'}}>Date</Text>
          <Text style={{width: 100, fontWeight: 'bold'}}>Topics</Text>
          <Text style={{width: 50, fontWeight: 'bold'}}>Status</Text>
        </View>
        </View>

        <View style={{padding:15,}}>

        <FlatList data={lectures} renderItem={({item})=>{const {id,date, topics ,status}=item;
             return(
                <View style={[styles.tr]}>
                    <Text style={{width: 20}}>{id}</Text>
                    <Text style={{width: 120}}>{date}</Text>
                    <Text style={{width: 100}}>{topics}</Text>
                    <Text style={{width: 50}}>{status}</Text>
                </View>
                
            )}}/>

        </View>

        

    </View>
  );
};

const styles = StyleSheet.create({
    tr:{
        flexDirection: 'row',
        
        justifyContent: 'space-between',
        backgroundColor: "#C0E3F1",
        marginTop: 10,
        
    },
});

export default ClassProceedingScreen;
