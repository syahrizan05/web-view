import React, { useState } from "react";
import { WebView } from "react-native-webview";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";

const CustomButton = ({ goToWeb, uri, selectedUri, label }) => {
  return (
    <TouchableOpacity
      style={{
        margin: 5,
        marginVertical: 0,
        padding: 10,
        borderColor: "lightgrey",
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        alignItems: "center",
        backgroundColor: selectedUri.includes(label.toLowerCase())
          ? "slategray"
          : undefined,
      }}
      onPress={() => goToWeb(uri)}
    >
      <Text
        style={{
          color: selectedUri.includes(label.toLowerCase())
            ? "white"
            : undefined,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const [uri, setUri] = useState("home");

  const goToWeb = (uri) => {
    setUri(uri);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 11 }}>
        {uri !== "home" ? (
          <WebView
            source={{ uri }}
            style={{ flex: 1 }}
            renderLoading={() => (
              <ActivityIndicator color="black" size="large" />
            )}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f7f7f7",
            }}
          >
            <Image
              source={require("./assets/icon.png")}
              style={{ width: 200, height: 200, margin: 20 }}
            />
            <Text>Select from the buttons below!</Text>
          </View>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            borderColor: "lightgrey",
            borderTopWidth: 1,
            paddingVertical: 5,
          }}
        >
          <CustomButton
            selectedUri={uri}
            uri="home"
            goToWeb={goToWeb}
            label="Home"
          />
          <CustomButton
            goToWeb={goToWeb}
            selectedUri={uri}
            uri="https://www.facebook.com"
            label="Facebook"
          />
          <CustomButton
            goToWeb={goToWeb}
            selectedUri={uri}
            uri="https://www.google.com"
            label="Google"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
