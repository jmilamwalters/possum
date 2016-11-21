import React, {Component} from 'react'
import {Row, Col} from './grid'
import Radio from './Radio'

const OPTIONS = []
const addOption = (label, value) => OPTIONS.push({label, value})
addOption('Red', 'red')
addOption('Yellow', 'yellow')
addOption('Green', 'green')
addOption('Purple', 'purple')

export class Uncontrolled extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Radio
            legend="Bikeshed color"
            name="bikesheds[color]"
            defaultValue="green"
            options={OPTIONS}
          />
        </Col>
      </Row>
    )
  }
}

export class Controlled extends Component {

  state = {
    'doghouses[color]': 'green',
  };

  onChange = (e) => {
    const {name, value} = e.currentTarget
    const newState = {}
    newState[name] = value
    alert(JSON.stringify(newState))
    this.setState(newState)
  };

  render() {
    return (
      <Row>
        <Col>
          <Radio
            legend="Doghouse color"
            name="doghouses[color]"
            value={this.state['doghouses[color]']}
            options={OPTIONS}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    )
  }
}
