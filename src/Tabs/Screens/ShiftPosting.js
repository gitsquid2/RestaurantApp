import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


/*const [position, setPosition] = React.useState(' ');
const [startTime, setStartTime] = React.useState(' ');
const [endTime, setEndTime] = React.useState(' ');
const [lunch, setLunch] = React.useState(' ');
const [rate, setRate] = React.useState(' ');
const [description, setDescription] = React.useState(' ');
*/
const ShiftPosting = () => {
    //let [Position, onChangeText] = React.useState(' ');
    return (
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.closeButton}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.textboxContainer}>
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
                <Text> Position </Text>
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
    }

});

export default ShiftPosting;