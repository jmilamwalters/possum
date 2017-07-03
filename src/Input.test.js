import Input from './Input'

describe('Input', () => {
  it('should render without throwing', () => {
    shallow(<Input />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<Input className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })
})

describe('Input.Stack', () => {
  it('should render without throwing', () => {
    shallow(<Input.Stack />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<Input.Stack className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })

  it('should render label, help, and error text', () => {
    const label = "This is the label."
    const help = "This is help text."
    const error = "This is an error."

    const textCheck = mount(
      <Input.Stack
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
