import Card from './Card'

describe('Card', () => {
  it('should render without throwing', () => {
    shallow(
      <Card>
        <Card.Header>Header content</Card.Header>
          <Card.Fill>
            <p>etc</p>
          </Card.Fill>
        <Card.Footer>Footer content</Card.Footer>
      </Card>
    )
  })

  it('should add className to child', () => {
    const inherentClassName = 'rev-Card'
    const testClassName = '__TEST__'

    const childClassName = shallow(<Card className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })
})
