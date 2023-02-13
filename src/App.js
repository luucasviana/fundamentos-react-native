import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"


import Mega from "./componentes/mega/Mega"

// import FlexboxV4 from "./componentes/layout/flexboxV4"
// import FlexboxV3 from "./componentes/layout/flexboxV3"
// import flexboxV2 from "./componentes/layout/flexboxV2"
// import FlexV1 from "./componentes/layout/flexboxV1"
// import Digiteseunome from "./componentes/digiteseunome"
// import ListaprodutosV2 from "./componentes/produtos/listaprodutosV2"
// import Listaprodutos from "./componentes/produtos/listaprodutos"
// import Usuario from "./componentes/Usuario"
// import Familia from "./componentes/relacao/familia"
// import Membro from "./componentes/relacao/membro"
// import Pai from './componentes/indireta/Pai'
// import ParImpar from "./componentes/ParImpar"
// import ContadorV2 from "./componentes/contador/ContadorV2"
// import Botão from "./componentes/Botão"
// import Contador from "./componentes/Contador"
// import Titulo from "./componentes/Titulo"
// import Aleatorio from "./componentes/Aleatorio"
// import MinMax from "./componentes/MinMax"
// import CompPadrao, { Comp1, Comp2 } from './componentes/Multi'
// import Primeiro from './componentes/Primeiro'


export default () => (
    <SafeAreaView style={style.App}>
        
        <Mega qtdeNumeros={0}/>

        <ContadorV2 />
        {/* 
        <FlexboxV4 />
        <FlexboxV3/>
        <FlexboxV2/>
        <FlexboxV1/>
        <Digiteseunome />
        <ListaprodutosV2/>
        <Listaprodutos />
        <Usuario usuario={{ nome:"Gui", email:"gui@gui.com" }} />
        <Usuario usuario={{ nome:"Gui", }} />
        <Usuario usuario={{ email:"gui@gui.com" }} />
        <Usuario usuario= {null}  />
        <Usuario usuario={ {} } />
        <Familia>
            <Membro nome="Lucas" sobrenome="Viana"/>
            <Membro nome="Kamyle" sobrenome="Viana"/>
        </Familia>
        <Familia>
            <Membro nome="Pirunga" sobrenome="Viana"/>
            <Membro nome="Python" sobrenome="Viana"/>
        </Familia>
        <ParImpar num={3}/>
        <Pai />
        <Pai />
        <Aleatorio min={1} max={60} />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botão />
        <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro do Produto" />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min="3" max="20" />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems:  "center",
        padding: 20
        
    }
})