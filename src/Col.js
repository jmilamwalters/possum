import React, {Component} from 'react'
import classNames from 'classnames'
import Row from './Row'

const BOOL_PROPS_TO_CLASS_NAMES = {
  smallCentered: ['small-centered', 'rev-Col--smallCentered'],
  mediumCentered: ['medium-centered', 'rev-Col--mediumCentered'],
  largeCentered: ['large-centered', 'rev-Col--largeCentered'],

  smallUncentered: ['small-uncentered', 'rev-Col--smallUncentered'],
  mediumUncentered: ['medium-uncentered', 'rev-Col--mediumUncentered'],
  largeUncentered: ['large-uncentered', 'rev-Col--largeUncentered'],

  mediumExpand: ['medium-expand', 'rev-Col--mediumExpand'],
  largeExpand: ['large-expand', 'rev-Col--largeExpand'],

  end: ['rev-Col--end'],

  expanded: ['expanded', 'rev-Col--expanded'],

  shrink: ['shrink', 'rev-Col--shrink'],

  end: ['rev-Col--end'],
  center: ['rev-Col--center'],
  top: ['rev-Col--top'],
  stretch: ['rev-Col--stretch'],
  baseline: ['rev-Col--baseline'],
}

const BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES)

const NUMBER_PROPS_TO_CLASS_NAMES = {
  small: (x) => [`rev-Col--small${x}`],
  medium: (x) => [`rev-Col--medium${x}`],
  large: (x) => [`rev-Col--large${x}`],
  xlarge: (x) => [`rev-Col--xlarge${x}`],
  xxlarge: (x) => [`rev-Col--xxlarge${x}`],

  smallOffset: (x) => [`rev-Col--smallOffset${x}`],
  mediumOffset: (x) => [`rev-Col--mediumOffset${x}`],
  largeOffset: (x) => [`rev-Col--largeOffset${x}`],

  smallPush: (x) => [`rev-Col--smallPush${x}`],
  mediumPush: (x) => [`rev-Col--mediumPush${x}`],
  largePush: (x) => [`rev-Col--largePush${x}`],

  smallPull: (x) => [`rev-Col--smallPull${x}`],
  mediumPull: (x) => [`rev-Col--mediumPull${x}`],
  largePull: (x) => [`rev-Col--largePull${x}`],

  smallOrder: (x) => [`rev-Col--smallOrder${x}`],
  mediumOrder: (x) => [`rev-Col--mediumOrder${x}`],
  largeOrder: (x) => [`rev-Col--largeOrder${x}`],
  xlargeOrder: (x) => [`rev-Col--xlargeOrder${x}`],
  xxlargeOrder: (x) => [`rev-Col--xxlargeOrder${x}`],
}

const NUMBER_PROPS = Object.keys(NUMBER_PROPS_TO_CLASS_NAMES)

export default class Col extends Component {
  render() {
    const {children, className, ...props} = this.props

    const boolClassNames = []
    BOOL_PROPS.forEach((name) => {
      if(props[name]) {
        boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name] )
      }
      delete props[name]
    })

    const numberClassNames = []
    NUMBER_PROPS.forEach((name) => {
      const value = props[name]
      const fn = NUMBER_PROPS_TO_CLASS_NAMES[name]
      if(value != null) {
        numberClassNames.push(fn(value))
      }
      delete props[name]
    })

    const divClassName = classNames(
      className,
      'rev-Col',
      boolClassNames,
      numberClassNames,
    )

    return (
      <div {...props} className={divClassName}>
        {children}
      </div>
    )
  }

}
