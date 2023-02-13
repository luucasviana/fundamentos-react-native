import React, {useState} from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

import ContadorDisplay from './ContadorDisplay'
import Botoes from './Botoes'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)


    return (
        <>
            <Text style={estilo.fontG}>
                ContadorV2
            </Text>
            <ContadorDisplay num={num} />
            <Botoes inc={inc} dec={dec}/>
        </>
    )
}