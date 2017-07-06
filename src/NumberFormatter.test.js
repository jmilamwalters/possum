import NumberFormatter from './NumberFormatter'

describe('NumberFormatter', () => {
  it('should render without throwing', () => {
    shallow(<NumberFormatter value={100} />)
  })

  it('accepts options as props', () => {
    const value = shallow(<NumberFormatter value={.24} style="percent" />).text()
    
    expect(value).to.equal("24%")
  })
})
