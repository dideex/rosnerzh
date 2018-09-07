import {observable, action, computed} from 'mobx'

class MenuStore {
  @observable
  state       // close | constructor | main | order

  constructor() {
    this.state = 'close'
  }

  @action('toggle-state')
  toggleMenu = () => {
    this.state = this.state === 'close' ? 'main' : 'close'
  }

  @action('open-construcotr')
  openConstructor = () => {
    this.state = 'constructor'
  }
  @action('close-menu')
  closeMenu = () => {
    this.state = 'close'
  }

  @action('open-main')
  openMain = () => {
    this.state = 'main'
  }

  @action('open-order')
  openOrder = () => {
    this.state = 'order'
  }

  @action('open-chain')
  openChain = toState => {
    this.state = 'main'
    setTimeout(() => {
      this.state = 'constructor'
    }, 900);
    setTimeout(() => {
      this.state = toState
    }, 1550);
  }

  @computed
  get isOpen() {
    return this.state !== 'close' ? true : false
  }
}

const menuStore = new MenuStore()

export default menuStore
export {MenuStore}
