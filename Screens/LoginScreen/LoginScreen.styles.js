import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Regular",
  },
  keyboard: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  box: {
    marginTop: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  form: {
    width: "100%",
  },
  formTitle: {
    textAlign: "center",
    color: "#212121",
    marginVertical: 32,
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  inputBlock: {
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    padding: 16,
    borderRadius: 8,
    color: "#212121",
  },
  passwordField: {
    position: "relative",
    justifyContent: "center",
  },
  showBtn: {
    position: "absolute",
    right: 16,
  },
  showBtnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#FFFFFF",
    paddingVertical: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  limk: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default styles;