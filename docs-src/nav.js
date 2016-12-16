import React, {Component} from 'react'

export default class Nav extends Component {
  render() {
    const {keys} = this.props
    const elements = keys.map((name) => (
      <li key={name}><a className="SideBar-link" href={`./${name}.html#top`}>{name}</a></li>
    ))
    return (
      <nav className="SideBar-nav">
        <h3 className="SideBar-header">
          <a href="./KitchenSink.html">RevCore</a>
        </h3>
        <ul className="SideBar-nav">{elements}</ul>
      </nav>
    )
  }
}
