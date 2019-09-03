import React from 'react'
import { render } from "react-dom"

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Card from './lib/index'
import Navbar from 'responsive-navbar-component-module';
import logo from './lib/assets/icon.png';
import imgItem from './lib/assets/imgItem.jpg'

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
        {/* <ResetCSS/>
          <Navbar img={logo} items={[
          {
            icon: 'I',
            name: 'Deu certo'
          },{
            icon: 'I',
            name: 'Deu certo'
          }
        ]}> */}
        <div>
          <Card
            title="Card Teste"
            titleComplement="Teste teste"
            header={logo}
            subtitle="subtitle do card"
            actions={[{
              name: "Click me",
              handler: (event) => {
                console.log(event)
              }
            }, {
              name: "Oi",
              handler: alert
            }]}
          />
          <Card
            title="Card Teste 2"
            titleComplement="Teste teste 3"
            header={logo}
            subtitle="subtitle do card"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            actions={[{
              name: "Click me",
              handler: (event) => {
                console.log(event)
              }
            }, {
              name: "Oi",
              handler: alert
            }]}
          />
        </div>

        {/* </Navbar> */}
      </>
    )
  }
}

render(<App />, document.getElementById("root"))
