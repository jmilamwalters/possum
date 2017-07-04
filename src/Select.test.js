import Select from './Select'

describe('Select', () => {
  it('should render without throwing', () => {
    shallow(<Select />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<Select className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })
})

describe('Select.Stack', () => {
  const options = [
    {label: 'Louis Armstrong', value: 'MSY'},
    {label: 'John F. Kennedy', value: 'JFK'},
  ]

  it('should render without throwing', () => {
    shallow(<Select.Stack />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<Select.Stack className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })

  it('should render options', () => {
    const wrapper = mount(<Select.Stack options={options} />)

    expect(wrapper.find("option")).to.have.length(2)
  })

  it('should render label, help, and error text', () => {
    const label = "This is the label."
    const help = "This is help text."
    const error = "This is an error."

    const textCheck = mount(
      <Select.Stack
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
