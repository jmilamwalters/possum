import FileInput from './FileInput'

describe('FileInput', () => {
  it('should render without throwing', () => {
    shallow(<FileInput />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<FileInput className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })

  it('should render a input with type "file"', () => {
    const checkInput = mount(<FileInput />)

    expect(checkInput.find("input[type='file']")).to.be.ok
  })
})

describe('FileInput.Stack', () => {
  it('should render without throwing', () => {
    shallow(<FileInput.Stack />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<FileInput.Stack className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })

  it('should render label, help, and error text', () => {
    const label = "This is the label."
    const help = "This is help text."
    const error = "This is an error."

    const textCheck = mount(
      <FileInput.Stack
        label={label}
        help={help}
        error={error}
        placeholder="The placeholder passes through."
        button="Yay!"
      />
    ).text()

    expect(textCheck).to.contain(label)
    expect(textCheck).to.contain(help)
    expect(textCheck).to.contain(error)
  })
})
