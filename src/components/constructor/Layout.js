import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, spring} from 'react-motion'
import InputRange from 'react-rangeslider'
import './rangeSlider.css'

import IconList from './IconList'
import Toggler from './Toggler'
import ColorList from './ColorList'
// Layout component;
@inject('constStore')
@observer
class Layout extends Component {
  render() {
    const {
      width,
      height,
      minWidth,
      maxWidth,
      setWidth,
      minHeight,
      maxHeight,
      setHeight,
      setGate,
      setRack,
      setLintels,
      gate,
      rack,
      lintels,
      gateLength,
      setGateLength,
    } = this.props.constStore
    return (
      <Fragment>
        <div className="main-constructor__settings">
          <Toggler isActive={gate} handler={setLintels} />
          <Toggler isActive={rack} handler={setRack} />
          <Toggler isActive={lintels} handler={setGate} />
          <Motion
            style={{
              y: spring(gate ? -10 : 0, {stiffness: 120, damping: 10}),
              opacity: spring(gate ? 0 : 1, {stiffness: 180, damping: 26}),
            }}
          >
            {({y, opacity}) => (
              <div style={{transform: `translateY(${y}px)`, opacity}}>
                <InputRange
                  value={gateLength}
                  min={300}
                  max={600}
                  onChange={setGateLength}
                  step={100}
                  tooltip={false}
                />
              </div>
            )}
          </Motion>
        </div>
        <div className="main-constructor__image">
          <div className="main-constructor__image--wrap">
            <div className="main-constructor__image--width-tooltip">{`${width} мм`}</div>
            <InputRange
              value={width}
              max={maxWidth}
              min={minWidth}
              onChange={setWidth}
              step={100}
              tooltip={false}
            />
            <img
              className="main-constructor__image--preview"
              src="img/main-800-500.jpg"
              alt=""
            />
            <ColorList />
          </div>
          <div className="main-constructor__image--range">
            <div className="main-constructor__image--height-tooltip">
              {`${height} мм`}
            </div>
            <InputRange
              value={height}
              max={maxHeight}
              min={minHeight}
              onChange={setHeight}
              step={100}
              tooltip={false}
              orientation="vertical"
            />
          </div>
        </div>
        <div className="main-constructor__settings">
          <IconList />
        </div>
      </Fragment>
    )
  }
}

export default Layout