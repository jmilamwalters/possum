import React, {Component} from 'react'
import Select from './Select'

export class PickOne extends Component {
  render() {
    return (
      <Select name="airport" label="Airport">
        <Select.Option value="MSY">Louis Armstrong</Select.Option>
        <Select.Option value="JFK">John F. Kennedy</Select.Option>
      </Select>
    )
  }
}

export class PickMultiple extends Component {
  render() {
    return (
      <Select multiple name="airports[]" label="Airports">
        <Select.Option value="MSY">Louis Armstrong</Select.Option>
        <Select.Option value="JFK">John F. Kennedy</Select.Option>
      </Select>
    )
  }
}

export class HasError extends Component {
  render() {
    return (
      <Select name="airport" label="Airport" error="Oh no, a bad thing!">
        <Select.Option value="MSY">Louis Armstrong</Select.Option>
      </Select>
    )
  }
}
