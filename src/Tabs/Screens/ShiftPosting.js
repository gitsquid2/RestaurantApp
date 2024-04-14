import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShiftPosting = () => {
    return (
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.closeButton}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.textboxContainer}>
                    <TextInput style={styles.textbox} />
                    <TextInput style={styles.textbox} />
                    <TextInput style={styles.textbox} />
                    <TextInput style={styles.textbox} />
                    <TextInput style={styles.textbox} />
                </View>
            </View>
        
    );
};

const styles = StyleSheet.create({

});

export default ShiftPosting;