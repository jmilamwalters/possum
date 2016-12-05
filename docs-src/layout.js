import React, {Component} from 'react'
import {Row, Col} from '../src/grid'
import Nav from './nav'

export default class Layout extends Component {
  render() {
    const {title, children, navKeys} = this.props
    return (
      <html>
        <head>
          <title>{title}</title>
          <script type="text/javascript" src="./bundle.js" />
          <link href="http://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet" />
          <link rel="stylesheet" href="./site.css" />
          <style>
            {
              "pre {overflow:auto;}" +
              "pre code {display:block;}"
            }
          </style>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/foundation.min.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/languages/javascript.min.js" />
          <script>hljs.initHighlightingOnLoad();</script>
        </head>
        <body>
          <Row collapse>
            <Col medium={3} large={2}>
              <Nav keys={navKeys} />
            </Col>
            <Col medium={9} large={10}>
              <h1 id="top">{title}</h1>
              {children}
            </Col>
          </Row>
        </body>
      </html>
    )
  }
}
