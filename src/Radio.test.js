import Radio from './Radio'

describe('Radio', () => {
  it('should render without throwing', () => {
    shallow(<Radio />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<Radio className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })
})

describe('Radio.Fieldset', () => {
  const options = [
    {label: 'Left', value: 'L'},
    {label: 'Right', value: 'R'},
  ]

  it('should render without throwing', () => {
    shallow(<Radio.Fieldset options={options} />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(
      <Radio.Fieldset className={testClassName} options={options} />
    )
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })

  it('should render the correct children', () => {
    const wrapper = mount(<Radio.Fieldset options={options} />)

    expect(wrapper.find("input[type='radio']")).to.have.length(2)
  })

  it('should render label, help, and error text', () => {
    const label = "This is the label."
    const help = "This is help text."
    const error = "This is an error."

    const textCheck = mount(
      <Radio.Fieldset
        options={options}
        label={label}
        help={help}
        error={error}
      />
    ).text()

    expect(textCheck).to.contain(label)
    expect(textCheck).to.contain(help)
    expect(textCheck).to.contain(error)
  })
})
