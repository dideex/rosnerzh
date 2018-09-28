import React, {Component} from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import {Provider as MobxProvider} from 'mobx-react'

import Root from './Root'
import menuStore from './store/Menu'
import constStore from './store/Constructor'

class App extends Component {
  render() {
    if(process.env === 'development')
      console.log(' LOG ___ process.env ', process)
    return (
      <MobxProvider menuStore={menuStore} constStore={constStore}>
        <ParallaxProvider>
          <Root />
        </ParallaxProvider>
      </MobxProvider>
    )
  }
}

export default App
