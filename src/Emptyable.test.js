import Emptyable from './Emptyable'

describe('Emptyable', () => {
  it('should render without throwing', () => {
    shallow(
      <Emptyable componentClass="ul" emptyState={<strong>No items</strong>} />
    )
  })

  it('should render children when present', () => {
    const hasChildren = shallow(
      <Emptyable componentClass="ul" 
        emptyState={<strong>No items</strong>}>
          <li>I am not empty.</li>
      </Emptyable>
    )

    expect(hasChildren.text()).not.to.contain("No items")
  })

  it('should render empty state with no children', () => {
    const noChildren = shallow(
      <Emptyable 
        emptyState={<strong>No items</strong>}></Emptyable>
    )

    expect(noChildren.text()).to.contain("No items")
  })
})
