import {MenuStore} from '../Menu'

describe('Menu store tests', () => {
  let menuStore
  beforeEach(() => {
    menuStore = new MenuStore()
  })

  it('init menu', () => {
    expect(menuStore.state).toBe('close')
    expect(menuStore.isMobile).toBe(false)
  })

  it('toggle menu', () => {
    menuStore.toggleMenu()
    expect(menuStore.state).toBe('main')
    menuStore.toggleMenu()
    expect(menuStore.state).toBe('close')
  })

  it('is open state', () => {
    menuStore.toggleMenu()
    expect(menuStore.isOpen).toBe(true)
    menuStore.toggleMenu()
    expect(menuStore.isOpen).toBe(false)
  })

  it('State behavior', () => {
    menuStore.openConstructor()
    expect(menuStore.state).toBe('constructor')
    menuStore.closeMenu()
    expect(menuStore.state).toBe('close')
    menuStore.openMain()
    expect(menuStore.state).toBe('main')
    menuStore.openTY()
    expect(menuStore.state).toBe('thank-you')
    menuStore.openCallback()
    expect(menuStore.state).toBe('callback')
    menuStore.openCallback()
    expect(menuStore.state).toBe('main')
    menuStore.openCallback()
    expect(menuStore.state).toBe('callback')
    menuStore.openOrder()
    expect(menuStore.state).toBe('order')
  })
})
