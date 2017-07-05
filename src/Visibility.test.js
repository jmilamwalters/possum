import Visibility from './Visibility'

describe('Visibility', () => {
  it('should render without throwing', () => {
    shallow(
      <Visibility showForLarge><span>showForLarge</span></Visibility>
    )
  })

  it('should add className to child', () => {
    const inherentClassName = 'show-for-small'
    const testClassName = '__TEST__'

    const childClassName = shallow(
      <Visibility showForSmall className={testClassName}><span>showForSmall</span></Visibility>
    ).first().prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })
})
