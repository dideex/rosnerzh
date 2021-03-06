import React, {Component} from 'react'
import {YMaps, Map, Placemark} from 'react-yandex-maps'

const mapState = {
  center: [55.792321, 37.675792],
  zoom: 16,
  controls: [],
}

const marker = {
  geometry: {
    coordinates: [55.792321, 37.675792],
  },
  properties: {
    balloonContent: 'Пн - Сб, с 9:00 до 18:00',
    iconCaption: 'Ул. Скольнический Вал, 1а',
  },
  options: {
    preset: 'islands#icon',
    iconColor: '#fe4365',
  },
}
// FooterMap component;
class FooterMap extends Component {
  render() {
    return (
      <YMaps>
        <div className="footer__map">
          <Map
            instanceRef={map => {
              map && map.behaviors.disable('scrollZoom')
            }}
            state={mapState}
            width="100%"
            height="620px"
          >
            <Placemark {...marker} />
          </Map>
        </div>
      </YMaps>
    )
  }
}

export default FooterMap
