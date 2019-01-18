import React, { Component } from 'react'
import Profile from './components/Profile'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStarHalfAlt, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import regular from '@fortawesome/fontawesome-free-regular'

library.add(faStar, faStarHalfAlt, faTimes, regular)

class App extends Component {
  render() {
    return <Profile />
  }
}

export default App
