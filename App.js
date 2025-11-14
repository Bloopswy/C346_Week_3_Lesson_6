import {ScrollView, Text, Button, Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Dog from './components/Dogs';

const AllDog = () => {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [ans5, setAns5] = useState('');
    const [ans6, setAns6] = useState('');

    const submit = () => {
        const correct = ['Golden Retriever', 'Border Collie', 'ChiHuaHua', 'Samoyed', 'Shiba Inu' ,'Pomeranian'];
        const picked  = [ans1,   ans2,    ans3,       ans4,     ans5,   ans6];

        let score = 0;
        for (let i = 0; i < correct.length; i++) {
            if (picked[i] === correct[i]) score++;
        }
        Alert.alert(`You got ${score}/6 correct`);
    };
    return (
        <ScrollView>
            <Text style={styles.text}>
                <FontAwesome6 name="dog" size={30} color="peru"/>
                {' '}
                 Guess The Dog Breed!
            </Text>
                <Dog pictures={require('./img/golden retriever.jpeg')}
                     selected={ans1}
                     onChange={setAns1}/>
                <Dog pictures={require('./img/border collie.jpg')}
                     selected={ans2}
                     onChange={setAns2}/>
                <Dog pictures={require('./img/chihuahua.jpg')}
                     selected={ans3}
                     onChange={setAns3}/>
                <Dog pictures={require('./img/samoyed.jpg')}
                     selected={ans4}
                     onChange={setAns4}/>
                <Dog pictures={require('./img/shiba.png')}
                     selected={ans5}
                     onChange={setAns5}/>
                <Dog pictures={require('./img/promeranian.jpg')}
                     selected={ans6}
                     onChange={setAns6}/>
            <Button title="Submit" onPress={submit} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        textAlignVertical: 'center',
    },
});

export default AllDog
