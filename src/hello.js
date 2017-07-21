import React from "react";

import ReactDOM from 'react-dom';

class OneTimeClickLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(event) {
    this.setState({clicked: true});
  }

  render() {
    if (this.state.clicked === false) {
      return (<a href="#" id="click" onClick={this.linkClicked}>Click me</a>);
    } else {
      return (<span>You clicked the link</span>);
    }
  }
}

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<h1>Hello {this.props.name}!</h1>);
  }
}

class HelloWorldApp extends React.Component {
  render() {
    return (
      <div id="two-tags">
        <HelloWorld name="Peter" />
        <OneTimeClickLink />
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorldApp />,
  document.getElementById("greeting")
);
