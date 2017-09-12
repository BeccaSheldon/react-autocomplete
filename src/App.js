import React, {Component} from 'react'
import Autocomplete from './components/Autocomplete/Autocomplete.jsx'
import Footer from './components/Footer/Footer.jsx'
import Navigation from './components/Navigation/Navigation.jsx'

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="Wrapper">
          <Navigation />
          <Autocomplete />
        </div>
        <Footer />
      </div>
    )
  }
}