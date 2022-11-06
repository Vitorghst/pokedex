import React from "react";
import { Text, Image, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        width: "200%",
      }}
    >
      <Image
        source={require("../../assets/images/pokeapi.png")}
        style={{
          width: 130,
          height: 105,
          margin: 8,
          marginTop: 12,
          marginLeft: 140,
          marginRight: 12,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontFamily: "PoppinsBold",
          marginTop: 7,
        }}
      >
        
      </Text>
    </View>
  );
};

export default Header;