import React, {Component} from 'react'
import Currency from './Currency'

export class Currencies extends Component {
  render() {
    return (
      <div>
        <p><Currency value={100.0000001} /></p>
        <p><Currency currency="CAD" value={100.01} /></p>
        <p><Currency currency="GBP" value={100.01} /></p>
        <p><Currency currency="BTC" value={100.01} /></p>
      </div>
      
    )
  }
}
