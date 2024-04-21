import react,{useState} from 'react'
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity, Touchable} from 'react-native'
import { StatusBar } from "expo-status-bar";
import Animated, {FadeIn,FadeInDown,FadeInUp,FadeOut} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";



const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
       navigation.navigate('Home')
      {/**propper auth needs to be handles here */}
    }

    const handleSignup=()=>{
        navigation.navigate('Signup')
    };

    
    return (
        <View style={styles.container}>
          {/**for some reason this is not picking up */}
          <Image source={require('../../../assets/setter.png')} style={styles.image} />
            <Text style={styles.title}>Login</Text>
            <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            />
            <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            />
             <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

      {/**Signup Link */}
      <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>   
    )
    }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dcfce7',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 20,
    },  
     
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
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
      signupText: {
        color: '#1e40af',
        textDecorationLine: 'underline',
        paddingTop: 10,
  
    },
  });
  export default Login;