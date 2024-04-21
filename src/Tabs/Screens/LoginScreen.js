import react from 'react'
import { StyleSheet,View,Text,Image,TextInput,TouchableOpacity, Touchable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
const navagation=useNavigation();

const handleLogout=()=>{
    navagation.navigate("Login")
}

    return (
        <View style={styles.container}>
           
            <Text>.. 🚧</Text> 
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout
                </Text>
            </TouchableOpacity>
        </View>   
    )
    }

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dcfce7',
      alignItems: 'center',
      justifyContent: 'center',
    },    

      button: {
        width: '80%',
        height: 40,
        backgroundColor: '#1e40af',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
  });