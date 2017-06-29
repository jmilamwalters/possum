import Currency from './Currency'

describe('Currency', () => {
  it('should render without throwing', () => {
    shallow(
      <Currency value={50} />
    )
  })

  it('renders the correct currency', () => {
    const currency = mount(<Currency value={50} currency="GBP" />)

    expect(currency.text()).to.include('£')
  })
})
