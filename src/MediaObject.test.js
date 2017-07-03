import MediaObject from './MediaObject'

describe('MediaObject', () => {
  it('should render without throwing', () => {
    shallow(<MediaObject />)
  })

  it('should add className to child', () => {
    const inherentClassName = 'media-object'
    const testClassName = '__TEST__'

    const childClassName = shallow(<MediaObject className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })  
})

describe('MediaObjectSection', () => {
  it('should render without throwing', () => {
    shallow(<MediaObject.Section />)
  })

  it('should add className to child', () => {
    const inherentClassName = 'media-object-section'
    const testClassName = '__TEST__'

    const childClassName = shallow(<MediaObject.Section className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })
})
