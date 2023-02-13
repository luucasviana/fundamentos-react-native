import React, { Component } from "react"
import { Text } from "react-native"
import estilo1 from "./estilo1"

export default props => {
    return (
        <>
            <Text style={estilo1.TextG}>{props.a}</Text>
            <Text style={estilo1.TextG}>{props.b}</Text>
        </>
    )
}