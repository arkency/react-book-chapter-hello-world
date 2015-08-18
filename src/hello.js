class HelloWorld extends React.Component {
  render() {
    return (
      <div id="two-tags">
        <h1>Hello {this.props.name}!</h1>
        <a href="#" id="click">Click me</a>
      </div>
    );
  }
}

React.render(
  <HelloWorld name="Peter" />,
  document.getElementById("greeting")
);
