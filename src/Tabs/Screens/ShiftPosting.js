import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import ShiftsPosted from './ShiftsPosted';
import { useNavigation } from '@react-navigation/native';
/*const [position, setPosition] = React.useState(' ');
const [startTime, setStartTime] = React.useState(' ');
const [endTime, setEndTime] = React.useState(' ');
const [lunch, setLunch] = React.useState(' ');
const [rate, setRate] = React.useState(' ');
const [description, setDescription] = React.useState(' ');
*/
const ShiftPosting = () => {
    const navigation = useNavigation();
    //let [Position, onChangeText] = React.useState(' ');
    return (
        
            <View style={styles.container}>
                
                <View style={styles.textboxContainer}>
                    <Text style={styles.Text}>Please enter in the details of the shift! </Text>
                    <TextInput style={styles.textbox} placeholder='Position'/>
                    <TextInput style={styles.textbox} placeholder='Start Time'/>
                    <TextInput style={styles.textbox} placeholder='End Time'/>
                    <TextInput style={styles.textbox} placeholder='Lunch' />
                    <TextInput style={styles.textbox} placeholder='Hourly Rate' />
                    <TextInput style={styles.textbox2} placeholder='Job Description'
                    editable
                    multiline
                    numberOfLines={5}
                    />
                </View>
                <View style={styles.Buttons}>
                    <Button style={styles.closingButtons}  title='Submit' onPress={() => navigation.navigate(ShiftsPosted)}/>
                    <Button  title='Cancel' onPress={() => navigation.navigate(ShiftsPosted)}/>
                </View>
            </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
    },
    closeButton: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    textboxContainer: {
        marginTop: 50,
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        
        boardercolor: 'black',
    },
    textbox: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        
    },
    textbox2: {
        height: 100, width: 200, borderColor: 'gray', borderWidth: 1, margin: 12,
    },
    Buttons: {
        //borderWidth: 1,
        //padding: 10,
        margin: 75,
        height: 60,
        
    },
    closingButtons: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    Text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        height: 40,
    },
    

});

export default ShiftPosting;