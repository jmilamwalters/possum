import Badge from './Badge'
import Icon from './Icon'

describe('Badge', () => {
  it('should render without throwing', () => {
    shallow(<Badge />)
  })

  it('should add className to child', () => {
    const inherentClassName = 'badge'
    const testClassName = '__TEST__'

    const childClassName = shallow(<Badge className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })

  it('can render an icon', () => {
    const renderedIcon = shallow(<Badge icon="home" /> )

    expect(renderedIcon.containsAnyMatchingElements([<Icon/>])).to.be.true
  })
})
