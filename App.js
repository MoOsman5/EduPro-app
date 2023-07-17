import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")} />
      <View style={styles.inputV}>
        <Text style={styles.textt}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          autoCapitalize="none"
          value={Email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          autoCapitalize="none"
          secureTextEntry
          value={Password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#1E1E1E", "#066466"]}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  box: {
    width: "100%",
    height: "100%",
  },
  logo: {
    position: "absolute",
    width: "30%",
    height: "20%",
    zIndex: 2,
    top: "12%",
    left: "35%",
  },
  input: {
    margin: 20,
    height: 50,
    color: "#E76F51",
    borderColor: "black",
    borderBottomWidth: 2,
    fontSize: 20,
  },
  inputV: {
    position: "absolute",
    width: "100%",
    top: "40%",
    padding: 10,
    zIndex: 2,
  },
  textt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    marginLeft: 20,
  },
  text:{
    color:'white',
    margin:5,
    fontSize:18,
    marginLeft:47
  },
  button: {
    width: "40%",
    height: 45,
    borderRadius:14,
    marginTop:40,
    textAlign:'center',
    marginLeft:'30%',
    backgroundColor: '#E76F51',
    padding: 6,
  },
});
