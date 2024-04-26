import React from 'react';
import {Modal, View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ShiftPosting from './ShiftPosting.js';

class Person {
    constructor(name, age, address, phoneNumber, qualifications) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.qualifications = qualifications;
    }
}

const ShiftsPosted = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const person = new Person(
        'Owen Humphrey',
        31,
        '999 Lorem Ipsum Ln.',
        '999-999-9999',
        'Lorem Ipsum 2 years, eekum bokum 1 year'
    );
    const [shifts, setShifts] = React.useState([
        {position: 'Wait Staff ', time: '0900 - 1700', payRate: ' $15/hour', isOpen: true, description: 'lorem ipsum', status: ' Pending' },
        {position: 'Bus Boy', time: '1300 - 2100', payRate: ' $13/hour', isOpen: false, description: 'lorem ipsum', status: ' Pending' },
        {position: 'Wait Staff ', time: '1800 - 0200', payRate: ' $15/hour', isOpen: true, description: 'lorem ipsum', status: ' Pending'},
        {position: 'Bus Boy', time: '1600 - 2100', payRate: ' $13/hour', isOpen: false, description: 'lorem ipsum', status: ' Pending'},
        {position: 'Bartender', time: '1200 - 2100', payRate: ' $18/hour', isOpen: true, description: 'lorem ipsum', status: ' Pending'},
        {position: 'Cashier', time: '0900 - 1700', payRate: ' $18/hour', isOpen: false, description: 'lorem ipsum', status: ' Pending' },
    ]);
    function addNewShift() {
        try {
            const newShift = {
                position: route.params.Position,
                time: route.params.startTime + ' - ' + route.params.endTime,
                payRate:'$' + route.params.hourlyRate + '/hour',
                description: route.params.jobDescription,
                isOpen: true,
                status: 'Pending'
            };
            setShifts(prevShifts => [...prevShifts, newShift]);
        } catch (error) {
            Alert.alert("Error", "Error adding new shift, please click 'Post a Shift!' and then try again");
        }
    }
    const Status = {
        Pending: 'Pending',
        Accepting: 'Accepting',
        Approved: 'Approved',
        Declined: 'Declined'
    };



    function handleShiftSelection(item) {
            const shiftInfo = `Position: ${item.position}\nTime: ${item.time}\nPay Rate: ${item.payRate}\nStatus: ${item.isOpen ? 'Open' : 'Closed'}\nDescription: ${item.description || 'N/A'}\nStatus: ${item.status}`;

            Alert.alert(
                "Shift Information",
                shiftInfo,
                [
                    {
                        text: "Clear",
                        onPress: () => {
                            const updatedShifts = shifts.filter(shift => shift !== item);
                            setShifts(updatedShifts);
                        },
                        style: "destructive"
                    },
                    {
                        text: "Close",
                        onPress: () => {
                            const updatedShifts = shifts.map(shift => {
                                if (shift === item) {
                                    return { ...shift, isOpen: false };
                                }
                                return shift;
                            });
                            setShifts(updatedShifts);
                        },
                        style: "default"
                    },
                    {
                        text: "Cancel",
                        onPress: () => {},
                        style: "cancel"
                    }
                ]
            );
        }
    
    const renderShiftItem = ({ item, index }) => (
        <TouchableOpacity style={[styles.shiftItem]} onPress={() => handleShiftSelection(item)}>
            <Text style={styles.shiftPosition}>{item.position}</Text>
            <Text style={styles.shiftTime}>{item.time}</Text>
            <Text style={styles.shiftPayRate}>{item.payRate}</Text>
            <Text style={styles.shiftStatus}>{item.isOpen ? 'Open' : ' Closed'}</Text>
            <Text style={styles.shiftStatus}>{item.status}</Text>
        </TouchableOpacity>
    );
    const sortPositionAlphabetically = () => {
        const sortedShifts = [...shifts].sort((a, b) => a.position.localeCompare(b.position));
        setShifts(sortedShifts);
    };

    const sortPositionReverseAlphabetically = () => {
        const sortedShifts = [...shifts].sort((a, b) => b.position.localeCompare(a.position));
        setShifts(sortedShifts);
    };

    const toggleSortPosition = () => {
        if (shifts[0].position < shifts[shifts.length - 1].position) {
            sortPositionReverseAlphabetically();
        } else {
            sortPositionAlphabetically();
        }
    };

    const [isStartTimeAscending, setIsStartTimeAscending] = React.useState(true);
    const [isEndTimeAscending, setIsEndTimeAscending] = React.useState(true);

    const sortStartTimeNumerically = () => {
        const sortedShifts = [...shifts].sort((a, b) => {
            const startTimeA = parseInt(a.time.split(' - ')[0].split(':')[0]);
            const startTimeB = parseInt(b.time.split(' - ')[0].split(':')[0]);

            if (isStartTimeAscending) {
                return startTimeA - startTimeB;
            } else {
                return startTimeB - startTimeA;
            }
        });
        setShifts(sortedShifts);
        setIsStartTimeAscending(!isStartTimeAscending);
    };

    const sortEndTimeNumerically = () => {
        const sortedShifts = [...shifts].sort((a, b) => {
            const endTimeA = parseInt(a.time.split(' - ')[1].split(':')[0]);
            const endTimeB = parseInt(b.time.split(' - ')[1].split(':')[0]);

            if (isEndTimeAscending) {
                return endTimeA - endTimeB;
            } else {
                return endTimeB - endTimeA;
            }
        });
        setShifts(sortedShifts);
        setIsEndTimeAscending(!isEndTimeAscending);
    };

    const [isSortedByOpen, setIsSortedByOpen] = React.useState(true);

    const sortIsOpen = () => {
        const sortedShifts = [...shifts].sort((a, b) => {
            if (isSortedByOpen) {
                if (a.isOpen && !b.isOpen) {
                    return -1;
                } else if (!a.isOpen && b.isOpen) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                if (!a.isOpen && b.isOpen) {
                    return -1;
                } else if (a.isOpen && !b.isOpen) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });
        setShifts(sortedShifts);
        setIsSortedByOpen(!isSortedByOpen);
    };

    const acceptShift = () => {
        const shiftInfo = `Position: ${shifts[0].position}`;
        const personInfo = `Name: ${person.name}\nAge: ${person.age}\nAddress: ${person.address}\nPhone Number: ${person.phoneNumber}\nQualifications: ${person.qualifications}`;

        Alert.alert(
            "Personal Information",
            shiftInfo + '\n' +
            personInfo,
            [
            {
                text: "Accept",
                onPress: () => {
                const updatedShifts = [...shifts];
                updatedShifts[0].status = 'Accepted';
                setShifts(updatedShifts);
                },
                style: "default"
            },
            {
                text: "Declined",
                onPress: () => {
                const updatedShifts = [...shifts];
                updatedShifts[0].status = 'Declined';
                setShifts(updatedShifts);
                },
                style: "destructive"
            },
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
            }
            ]
        );
    };

    return (
        <View style={[styles.container]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, }}>
                <Button title={'Position'} onPress={toggleSortPosition} />
                <Button title={'Shift Start'} onPress={sortStartTimeNumerically} />
                <Button title={'Shift End'} onPress={sortEndTimeNumerically} />
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
                    title='Add New Shift'
                    buttonStyle={{ margin: 50 }}
                    onPress={addNewShift} />
                <Button
                    title='Accept Shift'
                    buttonStyle={{ margin: 50 }}
                    onPress={acceptShift} />
            </View>
        </View>
    );
};

export default ShiftsPosted;

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
        backgroundColor: '#fef4f0',
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