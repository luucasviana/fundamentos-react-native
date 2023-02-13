import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import estilo1 from '../direta/estilo1'

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState('Gerar valor aleatório')

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }

    return (
        <>
            <Text style={estilo1.TextG}>
                {texto}{num}
            </Text>
            <Filho 
                min={1}
                max={60}
                funcao={exibirValor}
        />
        </>
    )
}