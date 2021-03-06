import React from 'react'
import {inject, observer} from 'mobx-react'
import {Parallax} from 'react-scroll-parallax'
import Svg from '../common/Svg'

// About stateless component;
@inject('menuStore')
@observer
class About extends React.Component {
  render() {
    const {isMobile} = this.props.menuStore
    return (
      <main className="footer__main">
        <Parallax
          className="footer__about"
          offsetYMax={-50}
          offsetYMin={20}
          slowerScrollRate
          tag="div"
          disabled={isMobile}
        >
          <h2>Как мы работаем</h2>
          <p>
            Сразу после подтверждения заказ отправляется на производство. После проверки
            полотенцесушители попадают в курьерскую службу. Вы можете оплатить наличными
            или банковской картой после получения.
          </p>
          <ul>
            <li className="contacts__phone">
              <Svg id="phone" />
              <a href="tel:+74952012514">+7 (495) 201-25-14</a>
            </li>
            <li className="contacts__mail">
              <Svg id="letter" />
              <a href="mailto:info@rosnerzh.ru">info@rosnerzh.ru</a>
            </li>
            <li className="contacts__address">
              <Svg id="marker" />
              <address>Ул. Скольнический Вал, 1а</address>
            </li>
            <li className="contacts__time">
              <Svg id="clock" />
              <time>Пн - Сб, с 9:00 до 18:00</time>
            </li>
          </ul>
        </Parallax>
        <div className="footer__copy">
          <p>
            Рос Нерж © 2018
            <br />
            <span>
              Создание сайта:
              <a href="https://vk.com/didex" target="_blank" rel="noopener noreferrer">
                {' '}
                DiDex
              </a>
            </span>
          </p>
          <div className="footer__social">
            <a href="https://vk.com">
              <Svg id="vk" />
            </a>
            <a href="https://facebook.com">
              <Svg id="fb" />
            </a>
            <a href="https://instagram.com">
              <Svg id="instagram" />
            </a>
          </div>
        </div>
      </main>
    )
  }
}

export default About
