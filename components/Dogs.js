import {StyleSheet,Image, Text, View} from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Picker} from '@react-native-picker/picker';

const Dog = ({pictures,selected, onChange}) => {
    return(
        <View style={styles.parent}>
            <View style={styles.container}>
            <Image source={pictures} style={styles.picture}/>
            <Text style={styles.question}>
                What dog breed is this?</Text>
            <Picker selectedValue={selected} onValueChange={(value) => onChange(value)} style={styles.picker}>
                <Picker.Item style={{color: '#6E6E6E'}} label='Select an item...' value='Select' enabled={false}/>
                <Picker.Item label='Border Collie' value='Border Collie'/>
                <Picker.Item label='BullDog' value='BullDog'/>
                <Picker.Item label='ChiHuaHua' value='ChiHuaHua'/>
                <Picker.Item label='Golden Retriever' value='Golden Retriever'/>
                <Picker.Item label='German Shepherd' value='German Shepherd'/>
                <Picker.Item label='Husky' value='Husky'/>
                <Picker.Item label='Pomeranian' value='Pomeranian'/>
                <Picker.Item label='Papillon' value='Papillon'/>
                <Picker.Item label='Shiba Inu' value='Shiba Inu'/>
                <Picker.Item label='Samoyed' value='Samoyed'/>
            </Picker>
            <StatusBar translucent={false}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
    },
    parent: {
        borderWidth: 6,
        flexDirection:'column',
        borderColor: 'white',
        backgroundColor:"white",
    },
    question: {
        borderWidth: 1,
        backgroundColor: 'aquamarine',
        fontSize:22,
        color:'white',
        fontWeight:'bold',
        textAlign: 'center',
        marginTop:10,
    },
    picture:{
        width:'100%',
        height:330
    },
    picker:{
        borderWidth: 1,
    }
});

export default Dog;
