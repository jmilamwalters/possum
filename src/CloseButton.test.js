import CloseButton from './CloseButton'

describe('CloseButton', () => {
  it('should render without throwing', () => {
    shallow(<CloseButton />)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'

    const childClassName = shallow(<CloseButton className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
  })
})
