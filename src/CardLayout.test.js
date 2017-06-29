import CardLayout from './CardLayout'

describe('CardLayout', () => {
  it('should render without throwing', () => {
    shallow(
      <CardLayout>
        <CardLayout.Bar />
        <CardLayout.Fill />
      </CardLayout>
    )
  })

  it('should add className to child', () => {
    const inherentClassName = 'rev-CardLayout'
    const testClassName = '__TEST__'

    const childClassName = shallow(<CardLayout className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })
})
