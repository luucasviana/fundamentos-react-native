import React from 'react'
import { Text } from 'react-native'


export default props => {
    return (
        <> 
            <Text>Pais: </Text>
            {props.children}
            <Text>Filhos: </Text>
        </>
    )
}