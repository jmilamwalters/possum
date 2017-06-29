import Accordion from './Accordion'

describe('Accordion', () => {
  it('should render without throwing', () => {
    shallow(<Accordion><Accordion.Item contentKey={1} title="One" /></Accordion>)
  })

  it('should add className to child', () => {
    const inherentClassName = 'rev-Accordion'
    const testClassName = '__TEST__'

    const childClassName = shallow(
      <Accordion className={testClassName}>
        <Accordion.Item contentKey={1} title="One" />
      </Accordion>
    ).first().prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })

  it('should render with selected child active', () => {
    const activeClass = "is-active"

    const activeItem = shallow(
      <Accordion active={1}>
        <Accordion.Item contentKey={1} title="One" />
      </Accordion>
    ).childAt(0).prop('active')

    expect(activeItem).to.be.true
  })
})

describe('Accordion.Stateful', () => {
  it('should have state', () => {
    const stateful = mount(
      <Accordion.Stateful>
        <Accordion.Item contentKey={1} title="One">1</Accordion.Item>
      </Accordion.Stateful>
    )
    expect(stateful.state()).to.be.an('object')
  })

  it('should change state when an item is clicked', () => {
    const stateful = mount(
      <Accordion.Stateful>
        <Accordion.Item contentKey={1} title="One">1</Accordion.Item>
      </Accordion.Stateful>
    )
    stateful.find('a').simulate('click')
    expect(stateful.state('active')['1']).to.equal(true)
  })
})