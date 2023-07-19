import React, { useState } from "react";
import {
  Text,
  View,
  Platform,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
} from "react-native";
import styles from "./LoginScreen.styles.js";

const initialState = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [hidePassword, setHidePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const toggleHidePassword = () => setHidePassword(!hidePassword);
  const toggleIsShowKeyboard = () => setIsShowKeyboard(true);
  
  const emailHandler = (value) =>
    setState((prevState) => ({ ...prevState, email: value }));
  const passwordHandler = (value) =>
    setState((prevState) => ({ ...prevState, password: value }));
  
  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    setHidePassword(true);
    Alert.alert("Sign In", `${state.email}, ${state.password}`);
    setState(initialState);
  };

  const keyboardHide = () => {
    setHidePassword(true);
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const { height, width } = Dimensions.get("window");
  const { email, password } = state;

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "android" ? "height" : "padding"}
      >
        <ImageBackground
          style={{ ...styles.image, width: width, height: height }}
          source={require("../../assets/images/background.jpg")}
        >
          <View style={styles.container}>
            <View
              style={{
                ...styles.box,
                paddingBottom: isShowKeyboard ? 80 : 144,
              }}
            >
              <View style={styles.form}>
                <Text style={styles.formTitle}>Login</Text>
                <View style={styles.inputBlock}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={emailHandler}
                    onFocus={toggleIsShowKeyboard}
                    placeholder="E-mail address"
                  />
                  <View style={styles.passwordField}>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={hidePassword}
                      value={password}
                      onChangeText={passwordHandler}
                      onFocus={toggleIsShowKeyboard}
                      placeholder="Password"
                    />
                    <TouchableOpacity
                      style={styles.showBtn}
                      onPress={toggleHidePassword}
                    >
                      <Text style={styles.showBtnTitle}>Show</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={handleSubmit}
                >
                  <Text style={styles.btnTitle}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={styles.limk}
                onPress={() => navigation.navigate("Registration")}
              >
                Don't have an account? Sign Up
              </Text>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
