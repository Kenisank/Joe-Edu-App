import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView } from "react-native";
import color from "../shared/color";
import { Ionicons } from "@expo/vector-icons";

function Login(props: any) {
  return (
    <View style={styles.Container}>
      <Image
        style={styles.Image}
        source={require("../assets/images/login.png")}
      />
      <View style={styles.WelcomeContainer}>
        <Text style={styles.WelcomeText}>Welcome to Joe-Learn</Text>
        <Text style={styles.LoginText}>Login/Register</Text>

        <View style={styles.Button}>
          <Ionicons name="logo-google" size={24} style={styles.GoogleIcon} />
          <Text style={{ color: color.white }}>Sign In with Google</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: color.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  Container: {
    // alignItems: "center",
    justifyContent: "center",
  },
  GoogleIcon: {
    color: "white",
    marginRight: 10,
  },
  Image: {
    width: 393,
    height: 241,
  },
  LoginText: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 20,
  },
  WelcomeText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  WelcomeContainer: {
    paddingTop: 40,
    marginTop: -20,
    backgroundColor: color.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default Login;
