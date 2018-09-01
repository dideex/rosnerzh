import {observable, action, computed} from 'mobx'

class Contructour {
  @observable width = 500
  @observable height = 800
  @observable minWidth = 400 // mType: 400, pType: 400, fType: 400,gType: , ladder: 400
  @observable maxWidth = 600 // mType: 800, pType: 700, fType: 600,gType: , ladder: 600
  @observable minHeight = 500 // mType: 500, pType: 400, fType: 500,gType: , ladder: 500
  @observable maxHeight = 1200 // mType: 600, pType: 600, fType: 1200,gType: , ladder: 1200
  @observable gateLength = 400
  @observable type = 'ladder' // ladder | mType | pType | fType | gType
  @observable form = 0
  @observable color = 0
  @observable energy = false
  @observable rail = false
  @observable gate = false
  @observable rack = false

  @action('set-width')
  setWidth = value => {
    this.width = value
  }
  @action('set-height')
  setHeight = value => {
    this.height = value
  }
  @action('set-gate-length')
  setGateLength = value => {
    this.gateLength = value
  }
  @action('set-color')
  setColor = value => {
    if (value === this.color) return (this.color = 0)
    this.color = value
  }
  @action('set-rail')
  setRail = () => {
    this.rail = !this.rail
  }
  @action('set-gate')
  setGate = () => {
    this.gate = !this.gate
  }
  @action('set-rack')
  setRack = () => {
    this.rack = !this.rack
  }
  @action('set-type')
  setType = value => {
    this.maxWidth = limits[value].width.max
    this.minWidth = limits[value].width.min
    this.maxHeight = limits[value].height.max
    this.minHeight = limits[value].height.min

    this.width = Math.max(this.minWidth, Math.min(this.maxWidth, this.width))
    this.height = Math.max(this.minHeight, Math.min(this.maxHeight, this.height))

    if(value !== 'ladder') {
      this.rail = false
      this.gate = false
      this.form = 0
    }
    this.type = value
    if(this.energy) this.type = 'ladder'
  }
  @action('set-form')
  setForm = value => {
    this.form = value
  }
  @action('set-energy')
  setEnergy = value => {
    this.gate = false
    this.type = 'ladder'
    this.energy = value
  }

  @computed
  get imgSrc() {
    if (this.gate) return '/img/main2-800-500.jpg'
    if (!this.gate) return '/img/main-800-500.jpg'
  }
  @computed
  get title() {
    let res = `${this.width}x${this.height} ${this.type} ${this.form} ${this.energy}`
    if (this.rail) res += ' rail'
    if (this.gate) res += ' gate'
    if (this.rack) res += ' rack'
    return `${res} ${this.color}`
  }
  @computed
  get price() {
    let price = data.type[this.type]
    price *= data.rail[+this.rail]
    price *= data.width[+this.width]
    price *= data.height[+this.height]
    if (this.rack) price * 0.2 < 300 ? (price += 300) : (price *= 1.2)
    price += data.form[this.form]
    price += data.energy[+this.energy]
    price += data.gate[+this.gate]
    if (this.color) price += data.color

    const formatter = new Intl.NumberFormat('ru', 'currency')
    return formatter.format(Math.round(price / 50) * 50)
  }
}

const constructor = new Contructour()

export default constructor
export {Contructour}

const limits = {
  mType: {
    width: {
      min: 400,
      max: 800,
    },
    height: {
      min: 500,
      max: 600,
    },
  },
  pType: {
    width: {
      min: 400,
      max: 700,
    },
    height: {
      min: 400,
      max: 600,
    },
  },
  fType: {
    width: {
      min: 400,
      max: 600,
    },
    height: {
      min: 500,
      max: 1200,
    },
  },
  gType: {
    width: {
      min: 400,
      max: 600,
    },
    height: {
      min: 500,
      max: 1200,
    },
  },
  ladder: {
    width: {
      min: 400,
      max: 600,
    },
    height: {
      min: 500,
      max: 1200,
    },
  },
}

const data = {
  type: {
    //	Базовые цены на вид сушилки
    ladder: 5350, //	Лесенка
    mType: 1750, //	Буква М
    pType: 1190, //	Буква П
    gType: 3190, //	Гусли
    fType: 2900,
  }, //	Фокстрот
  height: {
    //	Цены на высоту сушилки
    '300': 1, //	300 мм   100%
    '400': 1, //	300 мм   100%
    '500': 1, //	500 мм   100%
    '600': 1.07, //	600 мм   107%
    '700': 1.14,
    '800': 1.21,
    '900': 1.28,
    '1000': 1.35,
    '1100': 1.42,
    '1200': 1.49,
  },
  width: {
    //	Цены на ширрину сушилки
    '300': 1, //	300 мм		100%
    '400': 1, //	400 мм		100%
    '500': 1.07, //	500 мм		107%
    '600': 1.14,
    '700': 1.21,
    '800': 1.28,
    '900': 1.35,
    '1000': 1.42,
    '1100': 1.49,
  },
  form: {
    //	Цены на форму сушилки
    '0': 50, //	волна
    '1': 550, //	скоба
    '2': 2100, //	аврора
    '3': 50, //	дуга
    '4': 700, //	зигзаг
    '5': 2100, //	NEO 1
    '6': 0, //	прямая
    '7': 50, //	трапеция
    '8': 2300,
  }, //	NEO 2
  energy: {
    //	Цены на тип сушилки
    '0': 0, //	Водянной
    '1': 3100,
  }, //	Электрический
  rail: {
    '0': 1,
    '1': 1.13,
  }, //	Цена на группировку перемычек
  gate: {
    //	Цена для варианта подключения
    '0': 0, //	Универсальное
    '1': 1000,
  }, //	Боковое 110%
  color: 4000, //	Цена за перекраску
}
