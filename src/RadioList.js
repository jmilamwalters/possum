import React, {Component, PropTypes} from 'react'

const RadioListItem = ({id, label, ...rest}) => (
  <li>
    <input {...rest} id={id} type="radio" />
    <label htmlFor={id}>{label}</label>
  </li>
)

export default class RadioList extends React.Component {

  buildItem = (option) => {
    const {
      name,
      value,
      defaultValue,
      readOnly,
      onChange,
      uniqueIdPrefix,
    } = this.props

    const idPrefixToUse = uniqueIdPrefix || name
    const id = `radios/${idPrefixToUse}/${option.value}`

    // Controlled inputs and uncontrolled inputs need different treatment.
    const valueProps = {}
    if(value != null) {
      valueProps.value = option.value
      valueProps.checked = option.value == value
    } else {
      valueProps.defaultValue = option.value
      if(defaultValue != null) {
        valueProps.defaultChecked = option.value == defaultValue
      }
    }

    return (
      <RadioListItem
        key={id}
        id={id}
        label={option.label}
        name={name}
        onChange={onChange}
        {...valueProps}
      />
    )
  };

  render() {
    const {legend, options} = this.props
    return (
      <fieldset className="fieldset">
        <legend>{legend}</legend>
        <ul>{options.map(this.buildItem)}</ul>
      </fieldset>
    )
  }
}
