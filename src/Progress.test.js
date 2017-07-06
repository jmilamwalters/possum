import Progress from './Progress'

describe('Progress', () => {
  it('should render without throwing', () => {
    shallow(
      <Progress value={40} />
    )
  })

  it('should calculate progress accurately', () => {
    const wrapper = shallow(<Progress value={40} />)
    const theWidth = 'style="width:40%;"'

    expect(wrapper.find("div.progress-meter").html()).to.contain(theWidth)
  })
})
