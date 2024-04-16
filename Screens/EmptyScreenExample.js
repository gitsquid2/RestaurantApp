import { View, Text, StyleSheet } from 'react-native'

//Make this for your value. This will be exported.
//Make sure it begins with a capital. It is pissy
const SomeScreen = ({navigation}) =>{
    return(
        //Edit the space within the return
        <View style={styles.container}>
            <Text> This is a default file </Text>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fef4f0',
    alignItems: 'center',
    justifyContent: 'center',
    },
});


//Export your screen
export default SomeScreen;