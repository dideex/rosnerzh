import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Parallax} from 'react-scroll-parallax'

import Button from '../common/Button'

// PreviewLegend component;
@inject('menuStore')
@observer
class PreviewLegend extends Component {
  render() {
    const {isMobile} = this.props.menuStore
    return (
      <Parallax
        className="preview__legend"
        offsetYMax={-30}
        offsetYMin={0}
        slowerScrollRate
        tag="figure"
        disabled={isMobile}
      >
        <legend>
          <h2>Конструктор</h2>
          <p>
            Не знаете как выбрать? Зайдите в наш калькулятор и посмотрите сами. Вы найдете
            подходящий по размерам, цвету и форме. Или оставьте заявку и наш оператор перезвонит
            вам.
          </p>
          <Button caption="В кноструктор" onClick={this.props.menuStore.openChain.bind(null, [
            'main',
            'constructor',
            'constructor',
          ])}/>
        </legend>
      </Parallax>
    )
  }
}

export default PreviewLegend
