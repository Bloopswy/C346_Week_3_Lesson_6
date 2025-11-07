import {Image, Text, View} from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Picker} from '@react-native-picker/picker';

const Dog = ({pictures,selected, onChange}) => {
    return(
        <View>
            <Image source={pictures} style={{width:420, height:400}}/>
            <Text style={{fontSize:16}}>
                {'\n'}
                What dog breed is this?</Text>
            <Picker selectedValue={selected} onValueChange={(value) => onChange(value)}>
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
            <StatusBar style="auto"/>
        </View>
    );
};

export default Dog;
