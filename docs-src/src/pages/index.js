import React from 'react'
import {Row, Col} from 'revelry-components/lib/grid'
import CardLayout from 'revelry-components/lib/CardLayout'
import Card from 'revelry-components/lib/Card'

const IndexPage = () => (
  <div className="Styleguide">
    <Row>
      <Col>
        <h3>Brand Color Pallette</h3>
        <p>These colors make up the brand color pallette. Most buttons, link, and  actionable items will take on the $primary color. $secondary and $tertiary colors will be used with respective emphasis, unless otherwise defined in the settings file.</p>
      </Col>
      <Col small={6} large={3}>
        <CardLayout>
          <CardLayout.Bar className="Styleguide-swatch Primary" />
          <CardLayout.Bar>
            <code>$primary</code>
          </CardLayout.Bar>
        </CardLayout>
      </Col>
      <Col small={6} large={3}>
        <CardLayout>
          <CardLayout.Bar className="Styleguide-swatch Secondary" />
          <CardLayout.Bar>
            <code>$secondary</code>
          </CardLayout.Bar>
        </CardLayout>
      </Col>
      <Col small={6} large={3}>
        <CardLayout>
          <CardLayout.Bar className="Styleguide-swatch Tertiary" />
          <CardLayout.Bar>
            <code>$tertiary</code>
          </CardLayout.Bar>
        </CardLayout>
      </Col>
      <Col small={6} large={3}>
        <CardLayout>
          <CardLayout.Bar className="Styleguide-swatch Accent" />
          <CardLayout.Bar>
            <code>$accent</code>
          </CardLayout.Bar>
        </CardLayout>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3>Utility Colors</h3>
        <p>Utility colors are used for specific scenarios on the application. We use these to set colors for user feedback and status-based components.</p>
      </Col>
      <Col small={6} large={3}>
        <CardLayout>
          <CardLayout.Bar className="Styleguide-swatch Info" />
          <CardLayout.Bar>
            <code>$info</code>
          </CardLayout.Bar>
        </CardLayout>
      </Col>
      <Col small={6} large={3}>
        <CardLayout>
          <CardLayout.Bar className="Styleguide-swatch Success" />
          <CardLayout.Bar>
            <code>$success</code>
          </CardLayout.Bar>
        </CardLayout>
      </Col>
      <Col small={6} large={3}>
        <CardLayout>
          <CardLayout.Bar className="Styleguide-swatch Warning" />
          <CardLayout.Bar>
            <code>$warning</code>
          </CardLayout.Bar>
        </CardLayout>
      </Col>
      <Col small={6} large={3}>
        <CardLayout>
          <CardLayout.Bar className="Styleguide-swatch Alert" />
          <CardLayout.Bar>
            <code>$alert</code>
          </CardLayout.Bar>
        </CardLayout>
      </Col>
    </Row>
    <Row>
      <Col>
        <h1>Revelry Components</h1>
        <p>
          The World Wide Web (abbreviated WWW or the Web) is an information space
          where documents and other web resources are identified by Uniform Resource
          Locators (URLs), interlinked by hypertext links, and can be accessed via
          the Internet.[1] English scientist Tim Berners-Lee invented the World Wide
          Web in 1989. He wrote the first web browser computer program in 1990 while
          employed at CERN in Switzerland.[2][3] The Web browser was released
          outside of CERN in 1991, first to other research institutions starting in
          January 1991 and to the general public on the Internet in August 1991.
        </p>
        <h2>Revelry Components</h2>
        <p>
          The World Wide Web has been central to the development of the Information
          Age and is the primary tool billions of people use to interact on the
          Internet.[4][5][6] Web pages are primarily text documents formatted and
          annotated with Hypertext Markup Language (HTML). In addition to formatted
          text, web pages may contain images, video, audio, and software components
          that are rendered in the user's web browser as coherent pages of
          multimedia content.
        </p>
        <h3>Revelry<br/>Components</h3>
        <p>
          Embedded hyperlinks permit users to navigate between web pages. Multiple
          web pages with a common theme, a common domain name, or both, make up a
          website. Website content can largely be provided by the publisher, or
          interactively where users contribute content or the content depends upon
          the users or their actions. Websites may be mostly informative, primarily
          for entertainment, or largely for commercial, governmental, or
          non-governmental organisational purposes.
        </p>
        <h4>Revelry<br/>Components</h4>
        <p>
          The World Wide Web (abbreviated WWW or the Web) is an information space
          where documents and other web resources are identified by Uniform Resource
          Locators (URLs), interlinked by hypertext links, and can be accessed via
          the Internet.[1] English scientist Tim Berners-Lee invented the World Wide
          Web in 1989. He wrote the first web browser computer program in 1990 while
          employed at CERN in Switzerland.[2][3] The Web browser was released
          outside of CERN in 1991, first to other research institutions starting in
          January 1991 and to the general public on the Internet in August 1991.
        </p>
        <h5>Revelry<br/>Components</h5>
        <p>
          The World Wide Web has been central to the development of the Information
          Age and is the primary tool billions of people use to interact on the
          Internet.[4][5][6] Web pages are primarily text documents formatted and
          annotated with Hypertext Markup Language (HTML). In addition to formatted
          text, web pages may contain images, video, audio, and software components
          that are rendered in the user's web browser as coherent pages of
          multimedia content.
        </p>
        <h6>Revelry<br/>Components</h6>
        <p>
          Embedded hyperlinks permit users to navigate between web pages. Multiple
          web pages with a common theme, a common domain name, or both, make up a
          website. Website content can largely be provided by the publisher, or
          interactively where users contribute content or the content depends upon
          the users or their actions. Websites may be mostly informative, primarily
          for entertainment, or largely for commercial, governmental, or
          non-governmental organisational purposes.
        </p>
      </Col>
    </Row>
  </div>
)

export default IndexPage
