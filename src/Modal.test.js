import Modal from './Modal'

describe('Modal', () => {
  it('should render without throwing', () => {
    shallow(<Modal><h2>Some Content</h2></Modal>)
  })

  it('has state', () => {
    const checkState = shallow(
        <Modal isOpen={true}><h2>Some Content</h2></Modal>
    )

    expect(checkState.state("isOpen")).to.be.true
  })
})
