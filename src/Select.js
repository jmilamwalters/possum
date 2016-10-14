import React, {Component} from 'react'
import classNames from 'classnames'
import _ from 'underscore'

class Select extends Component {

  static defaultProps = {
    error: null,
    className: '',
  };

  static Option = (props) => <option {...props}>{props.children}</option>;

  get error() {
    if(!this.props.error) {
      return null
    }
    return (
      <span className="form-error is-visible">{this.props.error}</span>
    )
  }

  get labelClassName() {
    return classNames(this.props.className, {'is-invalid-label': !!this.props.error})
  }

  get selectClassName() {
    return classNames({'is-invalid-input': !!this.props.error})
  }

  render() {
    const selectProps = _.omit(this.props, Object.keys(this.constructor.defaultProps))
    return (
      <label className={this.labelClassName}>
        {this.props.label}
        <select {...selectProps} className={this.selectClassName}>
          {this.props.children}
        </select>
        {this.error}
      </label>
    )
  }
}

export default Select
