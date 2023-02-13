import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default ({min, max}) => {
  min += 1000
  max += 2000
  const delta = max - min + 1
  const aleatorio = parseInt(Math.random() * delta) + min
  return (
    <Text style={estilo.fontG}>
        O valor aleatorio é {aleatorio}
    </Text>
  )
}