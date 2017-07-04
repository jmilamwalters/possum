import StatelessModal from './StatelessModal'

describe('StatelessModal', () => {
  it('should render without throwing', () => {
    shallow(<StatelessModal><h2>Some Content</h2></StatelessModal>)
  })

  it('should add className to child', () => {
    const testClassName = '__TEST__'
    const defaultClassName = 'RevModal'


    const childClassName = shallow(
      <StatelessModal className={testClassName} isOpen={true}>
        <p>content</p>
      </StatelessModal>
    )
      .first()
      .prop('className')

    expect(childClassName).to.contain(testClassName)
    expect(childClassName).to.contain(defaultClassName)
  })
})