import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {Row, Col} from 'revelry-components/lib/grid'
import TopBar from 'revelry-components/lib/TopBar'
import Menu from 'revelry-components/lib/Menu'
import Navigation from './Navigation'

import './index.scss'

const Header = () => (
  <TopBar fixed inverse>
    <TopBar.Title>
      <Link to="/">Ockham</Link>
    </TopBar.Title>
    <TopBar.Right>
      <Menu right>
        <Menu.Item>
          <Link to="/">FAQ</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">Search</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">Log In</Link>
        </Menu.Item>
      </Menu>
    </TopBar.Right>
  </TopBar>
)

const TemplateWrapper = ({
  children
}) => (
    <div>
      <Helmet
        title="Revelry Components"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"/>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css"/>
      </Helmet>
      <Header />
      <div className="rev-Split ContentWrapper">
        <Navigation />
        <div className="rev-MainPanel">
          <main className="rev-MainPanel-content">
            {children()}
          </main>
        </div>
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
