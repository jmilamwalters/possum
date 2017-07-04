import TextAlign from './TextAlign'

describe('TextAlign', () => {
  it('should render without throwing', () => {
    shallow(
      <TextAlign right><p>right</p></TextAlign>
    )
  })

  it('renders the correct class name', () => {
    const inherentClassName = 'text-right'

    const childClassName = shallow(
      <TextAlign right><p>right</p></TextAlign>
    ).first().prop('className')

    expect(childClassName).to.contain(inherentClassName)
  })
})
