import react from 'react'
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity, Touchable} from 'react-native'
import { StatusBar } from "expo-status-bar";
import Animated, {FadeIn,FadeInDown,FadeInUp,FadeOut} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>Login under construction... 🚧</Text> 
        </View>   
    )
    }

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });