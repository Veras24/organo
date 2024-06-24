import { useState } from "react";
import CampoTexto from "../Banner/CampoTexto";
import Botao from "../Botao";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

const Formulario = (props) => {

  
    const [nome, setNome] = useState('')
    const [função, setFunção] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido => ', nome,função, imagem)
        props.aoColaboradorCadastrado({
            nome,
            função,
            imagem,
            time
        })
        setNome('')
        setFunção('')
        setImagem('')
        setTime('')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card dos colaborador</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}/>

                <CampoTexto 
                label="Função" 
                placeholder="Digite sua função"
                valor={função} 
                aoAlterado={valor => setFunção(valor)}/>

                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}
 
export default Formulario