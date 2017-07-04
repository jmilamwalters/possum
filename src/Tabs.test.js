import Tabs from './Tabs'

describe('Tabs', () => {
  it('should render without throwing', () => {
    shallow(<Tabs><Tabs.Item contentKey={1} title="One" /></Tabs>)
  })

  it('should add className to child', () => {
    const inherentClassName = 'rev-Tabs'
    const testClassName = '__TEST__'

    const childClassName = shallow(
      <Tabs className={testClassName}>
        <Tabs.Item contentKey={1} title="One" />
      </Tabs>
    ).first().prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })

  it('can set the default active tab', () => {
    const activeTab = mount(
      <Tabs active={2}>
        <Tabs.Item contentKey={1} title="One" />
        <Tabs.Item contentKey={2} title="Two" />
      </Tabs>
    )

    expect(activeTab.find('li.tabs-title').at(1).hasClass('is-active')).to.be.true
  })
})

describe('Tabs.Stateful', () => {
  it('should render without throwing', () => {
    shallow(<Tabs.Stateful><Tabs.Item contentKey={1} title="One" /></Tabs.Stateful>)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(
      <Tabs.Stateful className={testClassName}>
        <Tabs.Item contentKey={1} title="One" />
      </Tabs.Stateful>
    ).first().hasClass(testClassName)

    expect(childClassName).to.be.true
  })
})