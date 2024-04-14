import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ShiftsPosted = () => {
    const shifts = [
        { time: '9:00 AM - 5:00 PM', payRate: '$15/hour', isOpen: true },
        { time: '1:00 PM - 9:00 PM', payRate: '$20/hour', isOpen: false },
        { time: '6:00 PM - 2:00 AM', payRate: '$25/hour', isOpen: true },
    ];

    const renderShiftItem = ({ item }) => (
        <View style={styles.shiftItem}>
            <Text style={styles.shiftTime}>{item.time}</Text>
            <Text style={styles.shiftPayRate}>{item.payRate}</Text>
            <Text style={styles.shiftStatus}>{item.isOpen ? 'Open' : 'Closed'}</Text>
        </View>
    );

    return (
        <View style={[styles.container, { marginTop: 50 }]}>
            <FlatList
                data={shifts}
                renderItem={renderShiftItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default ShiftsPosted;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shiftItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
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
});