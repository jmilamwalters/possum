import InputGroup from './InputGroup'
import Input from './Input'
import Button from './Button'

describe('InputGroup', () => {
  it('should render without throwing', () => {
    shallow(
      <InputGroup>
        <InputGroup.Label>$</InputGroup.Label>
        <InputGroup.Field>
          <Input type="number" defaultValue={100} />
        </InputGroup.Field>
        <InputGroup.Button>
          <Button>Save</Button>
        </InputGroup.Button>
      </InputGroup>
    )
  })

   it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(
      <InputGroup className={testClassName}>
        <InputGroup.Label>$</InputGroup.Label>
        <InputGroup.Field>
          <Input type="number" defaultValue={100} />
        </InputGroup.Field>
        <InputGroup.Button>
          <Button>Save</Button>
        </InputGroup.Button>
      </InputGroup>
    )
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })
})

describe('InputGroup.Stack', () => {
  const label = 'I like money.'
  const help = 'You should get some money.'
  const error = 'Not enough money!!!'

  it('should render without throwing', () => {
    shallow(
      <InputGroup.Stack label={label} help={help} error={error}>
        <InputGroup.Label>
          $USD
        </InputGroup.Label>
        <InputGroup.Field>
          <Input type="number" defaultValue={100.00} error={error} />
        </InputGroup.Field>
      </InputGroup.Stack>
    )
  })

   it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(
      <InputGroup.Stack label={label} help={help} error={error} className={testClassName}>
        <InputGroup.Label>
          $USD
        </InputGroup.Label>
        <InputGroup.Field>
          <Input type="number" defaultValue={100.00} error={error} />
        </InputGroup.Field>
      </InputGroup.Stack>
    )
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })

  it('should render label, help, and error text', () => {
    const textCheck = mount(
      <InputGroup.Stack label={label} help={help} error={error}>
        <InputGroup.Label>
          $USD
        </InputGroup.Label>
        <InputGroup.Field>
          <Input type="number" defaultValue={100.00} error={error} />
        </InputGroup.Field>
      </InputGroup.Stack>
    ).text()

    expect(textCheck).to.contain(label)
    expect(textCheck).to.contain(help)
    expect(textCheck).to.contain(error)
  })
})
