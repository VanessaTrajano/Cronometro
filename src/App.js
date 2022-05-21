import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #85FFC7;
  color: #FF8552;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 3vw;
  font-weight: large;
`

const Buttons = styled.div`
  width: 40%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Zen Loop', cursive;
`

const Button = styled.button`
  border:none;
  border-radius: 10px;
  box-shadow: 4px 5px 5px #39393A;
  padding: 0.8vw;
  width: 20%;
  margin: 0 2.5%;
  font-family: 'Zen Loop';
  color: #E6E6E6;
  background-color: #297373;
  font-size:2vw;
  transition: 0.4s;

  &:hover{
    box-shadow: 8px 9px 5px #39393A;
    padding: 1.2vw;
    width: 25%;
    margin: 0 0;
  }
`

export default class Cronometro extends React.Component {
  state = {
    number: 0,
  }

  add = () => {
    const Interval = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      })
    }, 444)

    this.stop = () => {
      clearInterval(Interval)
    }

    this.restart = () => {
      this.setState({
        number: 0
      })

      clearInterval(Interval)
    }
  }

  render() {
    const { number } = this.state
    const { add, stop, restart } = this

    return (
      <Page>
        <h1>{number}</h1>
        <Buttons>
          <Button onClick={add}>Iniciar</Button>
          <Button onClick={stop}>Parar</Button>
          <Button onClick={restart}>Recomeçar</Button>
        </Buttons>
      </Page>
    )
  }
}