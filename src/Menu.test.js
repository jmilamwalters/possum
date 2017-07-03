import Menu from './Menu'


describe('Menu', () => {
  it('should render without throwing', () => {
    shallow(
      <Menu vertical>
        <Menu.Item>
          <a href="#">One</a>
          <Menu nested>
            <Menu.Item><a href="#">A</a></Menu.Item>
          </Menu>
        </Menu.Item>
      </Menu>
    )
  })

  it('should add className to child', () => {
    const inherentClassName = 'menu'
    const testClassName = '__TEST__'

    const childClassName = shallow(<Menu className={testClassName} />)
      .first()
      .prop('className')

    expect(childClassName).to.contain(inherentClassName)
    expect(childClassName).to.contain(testClassName)
  })

  it('should render correct elements', () => {
    const elementCheck = shallow(
      <Menu vertical>
        <Menu.Item>
          <a href="#">One</a>
        </Menu.Item>
      </Menu>
    )
    
    expect(elementCheck.find('ul')).to.be.ok
    expect(elementCheck.find('li')).to.be.ok
  })
})
