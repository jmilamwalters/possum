import React, {Component} from 'react'
import NumberFormatter from './NumberFormatter'
import {Row, Col} from './grid'

export class Example extends Component {
  render() {
    return(
      <Row>
        <Col>
          <p><NumberFormatter value={100000.023} localeMatcher="best fit" /></p>
          <p><NumberFormatter value={.25} locales="en-US" style="percent" /></p>
          <p><NumberFormatter value={100000.023} locales="de-DE" /></p>
        </Col>
      </Row>
    )
  }
}
