import React, {Component} from 'react'

export default class Nav extends Component {
  render() {
    const {keys} = this.props
    const elements = keys.map((name) => (
      <li key={name}><a className="SideBar-link" href={`./${name}.html#top`}>{name}</a></li>
    ))
    return (
      <div className="SideBar">
        <nav className="SideBar-nav">
          <h1><a href="./index.html">CORE</a></h1>
          <ul>{elements}</ul>
        </nav>
      </div>
    )
  }
}
