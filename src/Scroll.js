import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

function getOverflows(x, y) {

  // No x or y is a special case.
  if(!(x || y)) {
    return {overflow: 'auto'}
  }

  // If at least one is set, they both start with a default of 'hidden'.
  const style = {
    'overflow-x': 'hidden',
    'overflow-y': 'hidden',
  }

  // Then if they're truthy...
  //   For a string, use the string as the value.
  //   Otherwise treat a truthy value as 'auto'.
  if(x) {
    style['overflow-x'] = typeof(x) === 'string' ? x : 'auto'
  }
  if(y) {
    style['overflow-y'] = typeof(y) === 'string' ? y : 'auto'
  }

  return style
}

export default class Scroll extends Component {
  render() {
    const {style, children, x, y, ...props} = this.props

    return (
      <div {...props} style={{...style, ...getOverflows(x, y)}}>
        {children}
      </div>
    )
  }
}
