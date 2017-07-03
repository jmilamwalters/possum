import FlexVideo from './FlexVideo'

describe('FlexVideo', () => {
  it('should render without throwing', () => {
    shallow(
      <FlexVideo />
    )
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<FlexVideo className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })
})
