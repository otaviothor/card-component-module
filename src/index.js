import React from 'react'
import { render } from "react-dom"

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Card from './lib/index'
import Navbar from 'responsive-navbar-component-module';
import logo from './lib/assets/icon.png';

const ResetCSS = createGlobalStyle `
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

class App extends React.Component {

  state = {
    mode: 'light'
  }

  changeMode = (input) => {
    const mode = input.target.id
    this.setState({
      mode
    });
  }

  render() {
    return (
      <>
        <ResetCSS/>
        <Navbar img={logo} items={[
          {
            icon: 'I',
            name: 'Deu certo'
          },{
            icon: 'I',
            name: 'Deu certo'
          },{
            icon: 'I',
            name: 'Deu certo'
          },{
            icon: 'I',
            name: 'Deu certo'
          },{
            icon: 'I',
            name: 'Deu certo'
          }
        ]}>
        </Navbar>
        <Card>
        </Card>
      </>
    )
  }
}

render(<App />, document.getElementById("root"))
