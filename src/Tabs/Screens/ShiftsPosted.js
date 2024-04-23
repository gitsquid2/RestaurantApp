import React from 'react';
import {Modal, View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ShiftPosting from './ShiftPosting.js';
import Example from './Example.js';


const ShiftsPosted = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [shifts, setShifts] = React.useState([
        {position: 'Wait Staff ', time: '9:00 AM - 5:00 PM', payRate: ' $15/hour', isOpen: true },
        {position: 'Bus Boy', time: ' 1:00 PM - 9:00 PM', payRate: ' $13/hour', isOpen: false },
        {position: 'Wait Staff ', time: ' 6:00 PM - 2:00 AM', payRate: ' $15/hour', isOpen: true },
        {position: 'Bus Boy', time: ' 4:00 PM - 9:00 PM', payRate: ' $13/hour', isOpen: false },
        {position: 'Bartender', time: ' 12:00 PM - 9:00 PM', payRate: ' $18/hour', isOpen: true },
        {position: 'Cashier', time: ' 9:00 AM - 5:00 PM', payRate: ' $18/hour', isOpen: false },
    ]);
    
    function openAllShifts() {
        const updatedShifts = shifts.map(shift => ({ ...shift, isOpen: true }));
        setShifts(updatedShifts);
    }

    function closeAllShifts() {
        const updatedShifts = shifts.map(shift => ({ ...shift, isOpen: false }));
        setShifts(updatedShifts);
    }

    function handleCancel() {
        // Close the alert and do nothing
    }

    function handleOk() {
        closeAllShifts();
    }

    function confirmCloseAllShifts() {
        Alert.alert("Are you sure?");
        [
            { text: "Cancel", onPress: handleCancel },
            { text: "OK", onPress: handleOk },
        ];
    }
    function handleShiftSelection(item) {
        // Open an alert screen with shift information
        const shiftInfo = `Position: ${item.position}\nTime: ${item.time}\nPay Rate: ${item.payRate}\nStatus: ${item.isOpen ? 'Open' : 'Closed'}`;
        alert(shiftInfo);
    }
    const renderShiftItem = ({ item, index }) => (
        <TouchableOpacity style={[styles.shiftItem]} onPress={() => handleShiftSelection(item)}>
            <Text style={styles.shiftPosition}>{item.position}</Text>
            <Text style={styles.shiftTime}>{item.time}</Text>
            <Text style={styles.shiftPayRate}>{item.payRate}</Text>
            <Text style={styles.shiftStatus}>{item.isOpen ? 'Open' : ' Closed'}</Text>
        </TouchableOpacity>
    );
    const sortPositionAlphabetically = () => {
        const sortedShifts = [...shifts].sort((a, b) => a.position.localeCompare(b.position));
        setShifts(sortedShifts);
    };

    const sortTimeNumerically = () => {
        const sortedShifts = [...shifts].sort((a, b) => {
            const timeA = parseInt(a.time.split(':')[0]);
            const timeB = parseInt(b.time.split(':')[0]);
            const periodA = a.time.split(' ')[1];
            const periodB = b.time.split(' ')[1];

            if (periodA === periodB) {
                return timeA - timeB;
            } else if (periodA === 'AM' && periodB === 'PM') {
                return -1;
            } else {
                return 1;
            }
        });
        setShifts(sortedShifts);
    };

    const sortIsOpen = () => {
        const sortedShifts = [...shifts].sort((a, b) => {
            if (a.isOpen && !b.isOpen) {
                return -1;
            } else if (!a.isOpen && b.isOpen) {
                return 1;
            } else {
                return 0;
            }
        });
        setShifts(sortedShifts);
    };

    return (
        <View style={[styles.container]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <Button title={'Position'} onPress={sortPositionAlphabetically} />
                <Button title={'Time'} onPress={sortTimeNumerically} />
                <Button title={'Open'} onPress={sortIsOpen} />
            </View>
            <FlatList
                data={shifts}
                renderItem={renderShiftItem}
                keyExtractor={(item, index) => index.toString()}
                refreshing={true}
            />
            <View style={{ alignItems: 'center', margin: 50 }}>
                <Button
                    title={'Post a Shift!'}
                    buttonStyle={{ margin: 50 }}
                    onPress={() => navigation.navigate(ShiftPosting)} />

                <Button
                    title={'Open All Shifts'}
                    buttonStyle={{ margin: 50 }}
                    onPress={openAllShifts} />
                <Button
                    title={'Close All Shifts'}
                    buttonStyle={{ margin: 50 }}
                    onPress={confirmCloseAllShifts} />
            </View>
        </View>
    );
};

export default ShiftsPosted;

function postShift({}) {
    const navigation = useNavigation();

    return (
        <Button
            title={'Go to ${ShiftPosting}'}
            onPress={() => navigation.navigate('ShiftPosting')}
        />
    );

}

function showExample({}) {
    const navigation = useNavigation();

    return (
        <Button
            title={'Go to ${Example}'}
            onPress={() => navigation.navigate('Example')}
        />
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bae7ea',
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
    shiftPosition: {
        fontSize: 18,
        fontWeight: 'bold',
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