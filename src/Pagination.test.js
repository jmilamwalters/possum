import Pagination from './Pagination'

describe('Pagination', () => {
  const onPageClick = () => { console.log("do something") }

  it('should render without throwing', () => {
    shallow(
      <Pagination
        currentPage={2}
        totalPages={3}
        onPageClick={onPageClick}
      />
    )
  })

  it('renders the correct elements', () => {
    const checkRender = mount(
      <Pagination
        currentPage={1}
        totalPages={14}
        onPageClick={onPageClick}
      />
    )

    expect(checkRender.find("li")).to.have.length(11)
    expect(checkRender.find("li.Pagination-arrow")).to.have.length(4)
    expect(checkRender.find("li.Pagination-dots")).to.have.length(2)
    expect(checkRender.find("li.Pagination-number")).to.have.length(5)
  })
})
