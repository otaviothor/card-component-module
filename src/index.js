import React from 'react'
import { render } from "react-dom"
  
import Card from './lib/index'
import logo from './lib/assets/icon.png';


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
        <Card
          title="Card Teste"
          titleComplement="Teste teste"
          header={logo}
          subtitle="subtitle do card"
        >
          Thor ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card>
      </>
    )
  }
}

render(<App />, document.getElementById("root"))
