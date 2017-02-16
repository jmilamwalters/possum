import React, {Component} from 'react'
import Row from '../src/Row'
import Col from '../src/Col'

export default class ExampleSection extends Component {
  render() {
    const {id, name, component} = this.props
    return (
      <section>
        <Row>
          <Col>
            <h4>{name}</h4>
          </Col>
        </Row>
        <div id={id}>{React.createElement(component, {})}</div>
      </section>
    )
  }
}
