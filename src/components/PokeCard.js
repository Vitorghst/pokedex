import React from "react";
import {
  PokeCardContainer,
  PokeCardId,
  PokeCardImage,
  PokeCardName,
  PokeCardNameContainer,
} from "../styles/PokeCardStyle";

import { Text } from "react-native";

const PokeCard = ({ id, nome, urlImage, onPress, typeColor }) => {
  return (
    <PokeCardContainer onPress={onPress} borderColor={typeColor}>
      <PokeCardId textColor={typeColor}>#{id}</PokeCardId>
      <PokeCardImage source={{ uri: urlImage }} />
      <PokeCardNameContainer textColor={typeColor} bgColor={typeColor}>
        <PokeCardName textColor={typeColor}>{nome}</PokeCardName>
      </PokeCardNameContainer>
    </PokeCardContainer>
  );
};

export default PokeCard;
