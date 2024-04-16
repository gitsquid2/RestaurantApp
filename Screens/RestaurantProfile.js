import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, ScrollView,} from 'react-native'

/* Project Chelsea Restaurant Profile screen-
   These are the included feature and items held within this screen:

   - Navigation bar that continues from all other screens in the app
   - A banner that displays the Restaurants name
   - A profile picture
   - Basic contact info for the restaurant
   - Bio for the restaurant
   - Mission Vision and Company Culture Section
   - Rating section that displays current rating in text and visual
   - Navigation to the Reviews screen
*/

//At the moment the pop up does not need to be any actual info held/saved in this field.

const RestaurantProfile = ({navigation}) => {
    // Perams for modal (popup) to work 
    // No saving for the instance of the code (4-9-2024)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [mission, setMission] = useState('');
    const [vision, setVision] = useState('');
    const [coCulture, setCoCulture] = useState('');
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    // Navigates you to the RestaurantReviewPage
    const goToReviews = () => {
        navigation.navigate('RestaurantReviewsPage');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={{...styles.container, padding: 10}}>
                
                <View>
                    {/* This is the company name */}
                    <Text style={styles.headText}> Example Company Name </Text>
                </View>

                    {/* This is the holder for the profile picture, and edit button. Please replace the "view" (and txt)
                        with "image" and location if changed to a picture later. This section also holds
                        the button to get to the edit profile pop-up 4-7-2024*/}
                <View style = {{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>
                    
                    <View style={{
                        padding: 10,
                        width: 150,
                        height: 150,
                        backgroundColor: utOrange,
                        marginBottom: 15,
                        borderRadius: 5,
                        }}>
                            
                        <Text style={{fontWeight: 'bold', color: beanBrown, fontSize: 60, textAlign: 'center', marginTop: 20}}> PFP </Text>
                        
                        {/* This is the code for the profile editor*/}
                        <View>
                                <TouchableOpacity onPress={toggleModal} style={{...styles.editButton, marginLeft: 115, marginTop: 15,}}>
                                    <Text style={styles.editButtonTxt}>Edit</Text>
                                </TouchableOpacity>

                                {/* This is the code for the pop-up menu.*/}
                                <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                                    <View style={{...styles.modalContainer}}>
                                        <View style={styles.modalContent}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                                {/* Exit button.*/}
                                                <TouchableOpacity onPress={toggleModal}>
                                                <Text style={styles.closeButton}>Exit</Text>
                                                </TouchableOpacity>

                                                {/* Save button. Not functional yet 4-7-2024.*/}
                                                <TouchableOpacity onPress={toggleModal} style={{ ...styles.saveButton, alignSelf: 'flex-start' }}>
                                                    <Text style={{...styles.closeButton, color: utOrange}}>Save</Text>
                                                </TouchableOpacity>
                                            </View>

                                            {/* Text input fields */}
                                            <Text style = {{...styles.labelText, fontWeight: 'bold'}}>Name:</Text>
                                            <TextInput
                                                style={styles.inputField}
                                                placeholder="Enter Company Name"
                                                onChangeText={(text) => setName(text)}
                                                value={name}
                                            />

                                            <Text style = {{...styles.labelText, fontWeight: 'bold'}}>Phone:</Text>
                                            <TextInput
                                                style={styles.inputField}
                                                placeholder="Enter Company Number"
                                                onChangeText={(text) => setPhone(text)}
                                                value={phone}
                                            />

                                            <Text style = {{...styles.labelText, fontWeight: 'bold'}}>Email:</Text>
                                            <TextInput
                                                style={styles.inputField}
                                                placeholder="Enter Company Email"
                                                onChangeText={(text) => setEmail(text)}
                                                value={email}
                                            />

                                            <Text style = {{...styles.labelText, fontWeight: 'bold'}}>Bio:</Text>
                                            <TextInput
                                                style={styles.inputField}
                                                placeholder="Enter Company Bio"
                                                onChangeText={(text) => setBio(text)}
                                                value={bio}
                                            />

                                            <Text style = {{...styles.labelText, fontWeight: 'bold'}}>Mission:</Text>
                                            <TextInput
                                                style={styles.inputField}
                                                placeholder="Enter Mission Statement"
                                                onChangeText={(text) => setMission(text)}
                                                value={mission}
                                            />

                                            <Text style = {{...styles.labelText, fontWeight: 'bold'}}>Vision:</Text>
                                            <TextInput
                                                style={styles.inputField}
                                                placeholder="Enter Vision Statement"
                                                onChangeText={(text) => setVision(text)}
                                                value={vision}
                                            />

                                            <Text style = {{...styles.labelText, fontWeight: 'bold'}}>Company Culture:</Text>
                                            <TextInput
                                                style={styles.inputField}
                                                placeholder="Enter Company Culture"
                                                onChangeText={(text) => setCoCulture(text)}
                                                value={coCulture}
                                            />

                                        </View>
                                    </View>
                                </Modal>
                            </View>

                    </View>

                        {/* This is the holder for the contact info.*/}
                    <View style = {{paddingLeft: 15, paddingTop: 10}}>
                        <Text style={{...styles.bodyText, fontWeight: 'bold'}}>Phone Number:</Text>
                        <Text style = {styles.bodyText}>+# (###) ###-####</Text>

                        <Text style={{...styles.bodyText, fontWeight: 'bold'}}>Email Address:</Text>
                        <Text style = {styles.bodyText}>ExampleMail@example.com</Text>

                        <Text style={{...styles.bodyText, fontWeight: 'bold'}}>Location:</Text>
                        <Text style = {styles.bodyText}>#### Some St. City, State</Text>
                    </View>
                </View>
                
                {/* This is the section where they can see their rating and go to the reviews w/ button
                    If this application were to be continued there would be a banner picture uploaded
                    instead of the color box.*/}
                <View style={{
                        padding: 10,
                        alignSelf: 'stretch',
                        alignItems: 'stretch',
                        backgroundColor: byzBlue,
                        flexDirection: 'column',
                        marginBottom: 15,
                        borderRadius: 5,
                        }}>
                            
                        <Text style={{fontWeight: 'bold', color: seaShell, fontSize: 25,}}>Rating: ##</Text>
                        
                        {/* This is an extra view for holding the "stars."" If this is used later please make the rating #
                            respond to the amount of stars, and change the to stars with maybe images or SVG.*/}
                        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15}}>
                            <View style = {styles.starHolder}></View>
                            <View style = {styles.starHolder}></View>
                            <View style = {styles.starHolder}></View>
                            <View style = {styles.starHolder}></View>
                            <View style = {styles.starHolder}></View>
                        </View>
                        
                        <TouchableOpacity onPress={goToReviews} style={styles.reviewButton}>
                            <Text style={styles.reviewButtonText}>View Reviews</Text>
                        </TouchableOpacity>

                </View>
                
                <Text style = {{...styles.sectionHeadText}}>Bio:</Text>
                <Text style={{...styles.bodyText, marginBottom: 10}}>Here is a rant about my cat to act as text for the company bio. My cat's name is eclipse.
                    He is super silly and hes got lil fangs. His fangs make his breath stinky, but I still give him pets. He is just a
                    little guy. He is super sweet and he likes to sit there with you. Eclipse is also very responsive to the pstpstpst cat call.
                    I wish I had free time so I could pet my cat. </Text>

                <Text style = {{...styles.sectionHeadText}}>Mission:</Text>
                <Text style={{...styles.bodyText, marginBottom: 10}}>Eclipses mission is to get petted, and not eat anything but cat treats. </Text>

                <Text style = {{...styles.sectionHeadText}}>Vision:</Text>
                <Text style={{...styles.bodyText, marginBottom: 10}}>We think eclipse doesn't have good vision. He doesn't know how to eat treats out of our hands. </Text>
                
                <Text style = {{...styles.sectionHeadText}}>Company Culture:</Text>
                <Text style={{...styles.bodyText, marginBottom: 10}}>He is not a very cultured lil man at 1 year old. </Text>

            </View>
        </ScrollView>
    )
    }

//Color variables
seaShell = '#fef4f0'
beanBrown = '#331507'
byzBlue = '#0E4FDB'
utOrange = '#EF8833'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: seaShell,
        alignItems: 'left',
        justifyContent: 'top',
    },
    headText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: beanBrown,
        textAlign: 'center',
        paddingBottom: 10,
    },
    sectionHeadText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: beanBrown,
        textAlign: 'center',
        paddingTop: 10,
        textAlign: 'left',
        marginLeft: 5,
    },
    bodyText: {
        fontSize: 16,
        color: beanBrown
    },
    starHolder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: utOrange,
        marginHorizontal: 5,
    },
    reviewButton: {  
        marginTop: 5,
        paddingVertical: 3,
        paddingHorizontal: 20,
        backgroundColor: utOrange,
        borderRadius: 5,
    },
    reviewButtonText: {
        color: beanBrown,
        fontWeight: 'bold',
    },
    editButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: byzBlue,
        justifyContent: 'center',
        alignItems: 'center',
      },
      editButtonTxt: {
        color: seaShell,
        fontSize: 10,
        fontWeight: 'bold',
      },
    editButtonFun: ({ onPress, title }) => {
        return (
          <TouchableOpacity onPress={onPress} style={styles.editButton}>
            <Text style={styles.editButtonTxt}>{title}</Text>
          </TouchableOpacity>
        );
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        maxHeight: '90%',
        width: '90%',
        backgroundColor: seaShell,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        overflow: "scroll",
      },
      closeButton: {
        alignSelf: 'flex-end',
        color: byzBlue,
        fontSize: 20,
        fontWeight: 'bold',
      },
      labelText: {
        fontSize: 14,
        color: beanBrown
      },
      inputField: {
        fontSize: 16,
        color: beanBrown,
        marginBottom: 10,
      },
      scrollViewContent: {
        flexGrow: 1,
      },
  });


  export default RestaurantProfile;