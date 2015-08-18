class HelloWorld extends React.Component {
  linkClicked(event) {
    console.log(event);
  }

  render() {
    return (
      <div id="two-tags">
        <h1>Hello {this.props.name}!</h1>
        <a href="#" id="click" onClick={this.linkClicked}>Click me</a>
      </div>
    );
  }
}

React.render(
  <HelloWorld name="Peter" />,
  document.getElementById("greeting")
);
