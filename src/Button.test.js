import Button from './Button'

describe('Button', () => {
  it('should render without throwing', () => {
    shallow(<Button />)
  })

  it('should add className to child', () => {
    const inherentClassName = 'button'
    const testClassName = '__TEST__'

    const childClassName = shallow(<Button className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })

  it('should render a link when passed an href', () => {
    const wrapper = shallow(<Button href="https://google.com">Google</Button>)
    expect(wrapper.is('a')).to.be.true
  })
})
