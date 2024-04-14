import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShiftPosting = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shift Posting</Text>
            {/* Add your shift posting form or components here */}
            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    addButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: 'blue',
        borderRadius: 50,
        padding: 16,
    },
});

export default ShiftPosting;