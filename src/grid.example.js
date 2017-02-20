import React, {Component} from 'react'

// For the sake of this demo, we're changing them to make them more visible.
// For real world use, just `import {Row, Col} from './grid'` or whatever.
import {Row as OriginalRow, Col as OriginalCol} from './grid'
const Row = (props) => <OriginalRow {...props}>{props.children}</OriginalRow>
const Col = (props) => <OriginalCol {...props}>{props.children}</OriginalCol>

export class Intro extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row>
          <Col small={2} large={4}>
            <span className="GridExample-rev-Col">small-2<br/>
            large-4</span>
          </Col>
          <Col small={4} large={4}>
            <span className="GridExample-rev-Col">small-4<br/>
            large-4</span>
          </Col>
          <Col small={6} large={4}>
            <span className="GridExample-rev-Col">small-6<br/>
            large-4</span>
          </Col>
        </Row>
        <Row>
          <Col large={3}>
            <span className="GridExample-rev-Col">large-3</span>
          </Col>
          <Col large={6}>
            <span className="GridExample-rev-Col">large-6</span>
          </Col>
          <Col large={3}>
            <span className="GridExample-rev-Col">large-3</span>
          </Col>
        </Row>
        <Row>
          <Col small={6} large={2}>
            <span className="GridExample-rev-Col">small-6<br/>
            large-2</span>
          </Col>
          <Col small={6} large={8}>
            <span className="GridExample-rev-Col">small-6<br/>
            large-8</span>
          </Col>
          <Col large={2}>
            <span className="GridExample-rev-Col">large-2</span>
          </Col>
        </Row>
        <Row>
          <Col small={3}>
            <span className="GridExample-rev-Col">small-3</span>
          </Col>
          <Col small={9}>
            <span className="GridExample-rev-Col">small-9</span>
          </Col>
        </Row>
        <Row>
          <Col large={4}>
            <span className="GridExample-rev-Col">large-4</span>
          </Col>
          <Col large={8}>
            <span className="GridExample-rev-Col">large-8</span>
          </Col>
        </Row>
        <Row>
          <Col small={6} large={5}>
            <span className="GridExample-rev-Col">small-6<br/>
            large-5</span>
          </Col>
          <Col small={6} large={7}>
            <span className="GridExample-rev-Col">small-6<br/>
            large-7</span>
          </Col>
        </Row>
        <Row>
          <Col large={6}>
            <span className="GridExample-rev-Col">large-6</span>
          </Col>
          <Col large={6}>
            <span className="GridExample-rev-Col">large-6</span>
          </Col>
        </Row>

      </div>
    )
  }
}

export class Nesting extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row>
          <Col small={9}>
            <span className="GridExample-rev-Col">small-9
              <Row>
                <Col small={8}>
                  <span className="GridExample-rev-Col">small-8<br/>
                    (nested)
                    <Row>
                      <Col small={6}>
                        <span className="GridExample-rev-Col">small-6<br/>
                        (nested again)</span>
                      </Col>
                      <Col small={6}>
                        <span className="GridExample-rev-Col">small-6<br/>
                        (nested again)</span>
                      </Col>
                    </Row>
                  </span>
                </Col>
                <Col small={4}>
                  <span className="GridExample-rev-Col">small-4</span>
                </Col>
              </Row>
            </span>
          </Col>
          <Col small={3} className="u-hide--smallOnly">
            <span className="GridExample-rev-Col">small-3</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class Offsets extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row>
          <Col large={2}>
            <span className="GridExample-rev-Col">large-2</span>
          </Col>
          <Col large={10}>
            <span className="GridExample-rev-Col">large-10</span>
          </Col>
        </Row>
        <Row>
          <Col large={2}>
            <span className="GridExample-rev-Col">large-2</span>
          </Col>
          <Col large={9} largeOffset={1}>
            <span className="GridExample-rev-Col">large-9<br/>
            largeOffset 1</span>
          </Col>
        </Row>
        <Row>
          <Col large={2}>
            <span className="GridExample-rev-Col">large-2</span>
          </Col>
          <Col large={8} largeOffset={2}>
            <span className="GridExample-rev-Col">large-8<br/>
            largeOffset 2</span>
          </Col>
        </Row>
        <Row>
          <Col large={2}>
            <span className="GridExample-rev-Col">large-2</span>
          </Col>
          <Col large={7} largeOffset={3}>
            <span className="GridExample-rev-Col">large-7<br/>
            largeOffset 3</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class IncompleteRows extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row>
          <Col medium={3}>
            <span className="GridExample-rev-Col">medium-3</span>
          </Col>
          <Col medium={3}>
            <span className="GridExample-rev-Col">medium-3</span>
          </Col>
          <Col medium={3}>
            <span className="GridExample-rev-Col">medium-3</span>
          </Col>
        </Row>
        <Row>
          <Col medium={3}>
            <span className="GridExample-rev-Col">medium-3</span>
          </Col>
          <Col medium={3}>
            <span className="GridExample-rev-Col">medium-3</span>
          </Col>
          <Col medium={3} end>
            <span className="GridExample-rev-Col">medium-3<br/>
            end</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class Collapse extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row>
          <Col><p className="large"><strong>Controlled by Row prop</strong> collapse or uncollapse removes padding from direct descendent Cols. (nested Cols are unaffected)</p></Col>
        </Row>
        <Row mediumCollapse>
          <Col small={6}>
            <span className="GridExample-rev-Col">I am a Col and my parent Row has mediumCollapse
              <Row>
                <Col medium={6}>
                  <span className="GridExample-rev-Col">I am a nested Col and I do not inherit collapse styles.</span>
                </Col>
                <Col medium={6}>
                  <span className="GridExample-rev-Col">I am a nested Col and I do not inherit collapse styles.</span>
                </Col>
              </Row>
            </span>
          </Col>
          <Col small={6}>
            <span className="GridExample-rev-Col">I am a Col and my parent Row has mediumCollapse</span>
          </Col>
        </Row>
        <Row>
          <Col><p className="large"><strong>Controlled by utility classes on Col</strong> Utility classes added directly to elements that need padding removed.</p></Col>
        </Row>
        <Row>
          <Col small={6} className="u-collapseHorizontal--large-up">
            <span className="GridExample-rev-Col">.u-collapseHorizontal--large-up</span>
          </Col>
          <Col small={6} className="u-collapseHorizontal--medium-only">
            <span className="GridExample-rev-Col">.u-collapseHorizontal--medium-only</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class CenteredColumns extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row>
          <Col small={3} smallCentered>
            <span className="GridExample-rev-Col">small-3<br/>
            smallCentered</span>
          </Col>
        </Row>
        <Row>
          <Col small={6} smallCentered>
            <span className="GridExample-rev-Col">small-6<br/>
            smallCentered</span>
          </Col>
        </Row>
        <Row>
          <Col small={9} smallCentered largeUncentered>
            <span className="GridExample-rev-Col">small-9<br/>
            smallCentered<br/>
            largeUncentered</span>
          </Col>
        </Row>
        <Row>
          <Col small={11} smallCentered>
            <span className="GridExample-rev-Col">small-11<br/>
            smallCentered</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class SourceOrdering extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row>
          <Col small={10} smallPush={2}>
            <span className="GridExample-rev-Col">small-10<br/>
            smallPush-2</span>
          </Col>
          <Col small={2} smallPull={10}>
            <span className="GridExample-rev-Col">small-2<br/>
            smallPull-10</span>
          </Col>
        </Row>
        <Row>
          <Col large={9} largePush={3}>
            <span className="GridExample-rev-Col">large-9<br/>
            largePush-3</span>
          </Col>
          <Col large={3} largePull={9}>
            <span className="GridExample-rev-Col">large-3<br/>
            largePull-9</span>
          </Col>
        </Row>
        <Row>
          <Col large={8} largePush={4}>
            <span className="GridExample-rev-Col">large-8<br/>
            largePush-4</span>
          </Col>
          <Col large={4} largePull={8}>
            <span className="GridExample-rev-Col">large-4<br/>
            largePull-8</span>
          </Col>
        </Row>
        <Row>
          <Col small={5} smallPush={7}>
            <span className="GridExample-rev-Col">small-7<br/>
            smallPush-7</span>
          </Col>
          <Col small={7} smallPull={5}>
            <span className="GridExample-rev-Col">small-5<br/>
            smallPull-5</span>
          </Col>
        </Row>
        <Row>
          <Col medium={6} mediumPush={6}>
            <span className="GridExample-rev-Col">medium-6<br/>
            mediumPush-6</span>
          </Col>
          <Col medium={6} mediumPull={6}>
            <span className="GridExample-rev-Col">medium-6<br/>
            mediumPull-6</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class BlockGrid extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row smallUp={2} mediumUp={3} largeUp={5}>
          <Col>
            <img src="https://unsplash.it/300/300/?random" className="Thumbnail" alt="Placeholder image from unsplash.it"/>
          </Col>
          <Col>
            <img src="https://unsplash.it/300/300/?random" className="Thumbnail" alt="Placeholder image from unsplash.it"/>
          </Col>
          <Col>
            <img src="https://unsplash.it/300/300/?random" className="Thumbnail" alt="Placeholder image from unsplash.it"/>
          </Col>
          <Col>
            <img src="https://unsplash.it/300/300/?random" className="Thumbnail" alt="Placeholder image from unsplash.it"/>
          </Col>
          <Col>
            <img src="https://unsplash.it/300/300/?random" className="Thumbnail" alt="Placeholder image from unsplash.it"/>
          </Col>
        </Row>
      </div>
    )
  }
}

export class FlexShrink extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row flex>
          <Col shrink>
            <span className="GridExample-rev-Col">shrink</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col">remainder</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class FlexSourceOrdering extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row flex>
          <Col smallOrder={1} mediumOrder={2}>
            <span className="GridExample-rev-Col">This column is first in the markup. It will be second for small screens and third for medium-up.</span>
          </Col>
          <Col smallOrder={2} mediumOrder={0}>
            <span className="GridExample-rev-Col">This column is second in the markup. It will come third for small, and first for medium-up.</span>
          </Col>
          <Col smallOrder={0} mediumOrder={1}>
            <span className="GridExample-rev-Col">This column is third in the markup. It will be first for small and second for medium-up.</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class FlexUnstacking extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row mediumFlex mediumUnstack>
          <Col>
            <span className="GridExample-rev-Col">One</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col">Two</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col">Three</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col">Four</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col">Five</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class FlexHorizontalAlignmentOnRow extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row flex start>
          <Col small={4}>
            <span className="GridExample-rev-Col">Row props: flex start</span>
          </Col>
          <Col small={4}>
            <span className="GridExample-rev-Col">justify-content: flex-start (default)</span>
          </Col>
        </Row>
        <Row flex end>
          <Col small={4}>
            <span className="GridExample-rev-Col">Row props: flex end</span>
          </Col>
          <Col small={4}>
            <span className="GridExample-rev-Col">justify-content: flex-end</span>
          </Col>
        </Row>
        <Row flex center>
          <Col small={4}>
            <span className="GridExample-rev-Col">Row props: flex center</span>
          </Col>
          <Col small={4}>
            <span className="GridExample-rev-Col">justify-content: center</span>
          </Col>
        </Row>
        <Row flex spaceBetween>
          <Col small={4}>
            <span className="GridExample-rev-Col">Row props: flex spaceBetween</span>
          </Col>
          <Col small={4}>
            <span className="GridExample-rev-Col">justify-content: space-between</span>
          </Col>
        </Row>
        <Row flex spaceAround>
          <Col small={4}>
            <span className="GridExample-rev-Col">Row props: flex spaceAround</span>
          </Col>
          <Col small={4}>
            <span className="GridExample-rev-Col">justify-content: space-around</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class FlexVerticalAlignmentOnRow extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row flex middle>
          <Col>
            <span className="GridExample-rev-Col">align-items: middle</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col">I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident distinctio aliquam omnis? Labore, ullam possimus.</span>
          </Col>
        </Row>
        <hr />
        <Row flex top>
          <Col>
            <span className="GridExample-rev-Col">align-items: top</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe sunt dolore tempore amet cupiditate.</span>
          </Col>
        </Row>
        <hr />
        <Row flex bottom>
          <Col>
            <span className="GridExample-rev-Col">align-items: bottom</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe sunt dolore tempore amet cupiditate.</span>
          </Col>
        </Row>
        <hr />
        <Row flex stretch>
          <Col>
            <span className="GridExample-rev-Col">align-items: stretch</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe sunt dolore tempore amet cupiditate.</span>
          </Col>
        </Row>
        <hr />
        <Row flex baseline>
          <Col>
            <span className="GridExample-rev-Col">align-items: baseline</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col"><small>baseline</small></span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col"><h1>Baseline</h1></span>
          </Col>
        </Row>
      </div>
    )
  }
}

export class FlexColAlignment extends Component {
  render() {
    return (
      <div className="GridExample">
        <Row flex>
          <Col end>
            <span className="GridExample-rev-Col">Align bottom</span>
          </Col>
          <Col center>
            <span className="GridExample-rev-Col">Align middle</span>
          </Col>
          <Col top>
            <span className="GridExample-rev-Col">Align top</span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col GridExampleTallColumn">Tall column for example purposes</span>
          </Col>
        </Row>
        <Row flex>
          <Col stretch>
            <span className="GridExample-rev-Col">Align stretch</span>
          </Col>
          <Col baseline>
            <span className="GridExample-rev-Col"><h1>Align baseline</h1></span>
          </Col>
          <Col baseline>
            <span className="GridExample-rev-Col"><small>Align baseline</small></span>
          </Col>
          <Col>
            <span className="GridExample-rev-Col GridExampleTallColumn">Tall column for example purposes</span>
          </Col>
        </Row>
      </div>
    )
  }
}
