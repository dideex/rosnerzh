import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import Nav from './Nav'
import Constructor from '../constructor'
import TY from './ThankYou';
import Callback from './Callback';

// Menu component;
@inject('menuStore')
@observer
class Menu extends Component {
  render() {
    const {isOpen, state, toggleMenu} = this.props.menuStore
    const menuState = 'main-menu__wrap' + (!isOpen ? ' close' : ` open ${state}`)
    return (
      <section className={menuState}>
        <Nav />
        <Constructor />
        <div className="main-menu__close" onClick={toggleMenu} />
        <TY />
        <Callback />
      </section>
    )
  }
}

export default Menu
