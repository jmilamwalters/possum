import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('should render without throwing', () => {
    shallow(<Checkbox />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<Checkbox className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })
})

describe('Checkbox.Fieldset', () => {
  const options = [
    {label: 'Left', value: 'L'},
    {label: 'Right', value: 'R'},
  ]

  it('should render without throwing', () => {
    shallow(<Checkbox.Fieldset options={options} />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(
      <Checkbox.Fieldset className={testClassName} options={options} />
    )
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })

  it('can render helptext and errors', () => {
    const helptext = "This is the help text."
    const error = "This is the error."

    const fieldsetText = mount(
      <Checkbox.Fieldset 
        name="with_both"
        options={options} 
        label="Stacks both help and error" 
        help={helptext} 
        error={error} 
      />).text()
    
    expect(fieldsetText).to.include(helptext)
    expect(fieldsetText).to.include(error)
  })
})
