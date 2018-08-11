import React, {Component} from 'react'
import Button from './common/Button'
import {Parallax} from 'react-scroll-parallax'

import srcEnergy from '../img/energy_bg.jpg'
import srcDesign from '../img/design_bg.jpg'
import srcSize from '../img/size_bg.jpg'

// Gird component;
class Gird extends Component {
  render() {
    return (
      <section className="grid">
        <div className="grid__item grid__item--energy">
          <h2>Электрический</h2>
          <p>
            Если вы не хотите подключить сушилку к трубам, то сделайте выбор в пользу электрического
            полотенцесушителя.
          </p>
          <Button caption="Выбать" />
        </div>
        <Parallax
          className="grid__item grid__item--energy-img"
          offsetYMax={5}
          offsetYMin={-20}
          slowerScrollRate
          tag="div"
        >
          <img src={srcEnergy} alt="" />
        </Parallax>
        <div className="grid__item grid__item--design-img">
          <img src={srcDesign} alt="" />
        </div>
        <div className="grid__item grid__item--design">
          <h2>Дизайн</h2>
          <p>
            Уникальный дизайн подчеркнет ваш интерьер и предаст ему непередоваемый шарм, и всегда
            будет вас радовать.
          </p>
          <Button caption="Перейти" />
        </div>
        <div className="grid__item grid__item--size">
          <h2>Размер</h2>
          <p>
            Для вас важен размер полотенцесушителя? Нет проблем, у нас имеются как компактные формы
            так и возможность сделать все по своим размерам.
          </p>
          <Button caption="В конструктор" />
        </div>
        
        <Parallax
          className="grid__item grid__item--size-img"
          offsetXMax={5}
          offsetXMin={-5}
          slowerScrollRate
          tag="div"
        >
          <img src={srcSize} alt="" />
        </Parallax>
      </section>
    )
  }
}

export default Gird