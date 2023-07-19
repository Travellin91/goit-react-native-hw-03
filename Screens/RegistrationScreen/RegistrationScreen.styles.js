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
    paddingVertical: 78,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  add: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 50,
  },
  addIcon: {
    height: "50%",
    width: "50%",
  },

  form: {
    width: "100%",
  },
  formTitle: {
    textAlign: "center",
    color: "#212121",
    marginTop: 14,
    marginBottom: 33,
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
  midle: {
    marginVertical: 16,
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
  link: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default styles;