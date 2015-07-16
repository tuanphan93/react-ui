"use strict"

let React = require("react")
let {Icon} = global.uiRequire()

module.exports = React.createClass({
  displayName: 'Home',

  render: function () {
    return (
      <div>
        <div className="hero">
          <div className="hero-title">
            <h1>React UI</h1>
            <h2>React组件库，样式基于yahoo的<a href="http://purecss.io/">purecss</a>。</h2>
            <div style={{marginTop: 40}}>
              <a style={{marginRight: 20}} href="#/build" className="pure-button button-large button-extend button-success">生成组件</a>
              <a className="pure-button button-large button-extend" href="https://github.com/Lobos/react-ui"><Icon icon="github" /> Github</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
