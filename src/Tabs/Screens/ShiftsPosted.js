import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ShiftPosting from './ShiftPosting.js';


const ShiftsPosted = () => {
    const navigation = useNavigation();
    const shifts = [

        { time: '9:00 AM - 5:00 PM', payRate: '$15/hour', isOpen: true },
        { time: '1:00 PM - 9:00 PM', payRate: '$20/hour', isOpen: false },
        { time: '6:00 PM - 2:00 AM', payRate: '$25/hour', isOpen: true },
    ];

    const renderShiftItem = ({ item }) => (
        <View style={[styles.shiftItem, {marginTop: 50}]}>
            
            <Text style={styles.shiftTime}>{item.time}</Text>
            <Text style={styles.shiftPayRate}>{item.payRate}</Text>
            <Text style={styles.shiftStatus}>{item.isOpen ? 'Open' : 'Closed'}</Text>
        </View>
    );
    <button style={[styles.button]}onPress={postShift}>+</button>
    return (
        <View style={[styles.container]}>
            <FlatList
                data={shifts}
                renderItem={renderShiftItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <Button
                title={'Go to ShiftPosting'}
                onPress={() => navigation.navigate(ShiftPosting)}/>
        </View>
    );
};

export default ShiftsPosted;

function postShift({ ShiftPosting }) {
    const navigation = useNavigation();

    return (
        <Button
            title={'Go to ${ShiftPosting}'}
            onPress={() => navigation.navigate('ShiftPosting')}
        />
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8aff6f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shiftItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    shiftTime: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    shiftPayRate: {
        fontSize: 14,
    },
    shiftStatus: {
        fontSize: 14,
        color: '#888',
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
        Text: '+',
    },
});