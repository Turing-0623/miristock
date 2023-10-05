import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import Theme from "../../Styles/Theme";

export default function Header() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: Theme.color.MainColor }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          backgroundColor: Theme.color.MainColor,
        }}
      >
        <Image source={{ uri: icon.logo }} style={{ width: 62, height: 36 }} />
      </View>
    </>
  );
}

const icon = {
  logo: "",
  cart:
    "https://res.kurly.com/mobile/service/common/2006/ico_navi_cart_white.svg?v=3",
};