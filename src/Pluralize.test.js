import Pluralize from './Pluralize'

describe('Pluralize', () => {
  it('should render without throwing', () => {
    shallow(
      <Pluralize one="mouse" count={1}/>
    )
  })

  it('should pluralize correctly', () => {
    const wrapper = shallow(<Pluralize one="mouse" count={1}/>)
    expect(wrapper.text()).to.equal("1 mouse")

    wrapper.setProps({ one: "spoon", count: 3 })
    expect(wrapper.text()).to.equal("3 spoons")

    wrapper.setProps({ more: "mice" })
    expect(wrapper.text()).to.equal("3 mice")
  })
})
