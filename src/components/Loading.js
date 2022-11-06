import React from "react";
import { Text, Image, View } from "react-native";

const Loading = () => {
  return (
    <View style={{ backgroundColor: "#dc211e", flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Image
          source={require("../../assets/images/poke.gif")}
          style={{
            width: 400,
            height: 400,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            fontFamily: "PoppinsRegular",
            color: "white",
            textAlign: "center",
            marginHorizontal: 10,
            marginBottom: 60,
          }}
        >
         Aguarde um momento...
        </Text>
      </View>
    </View>
  );
};

export default Loading;
