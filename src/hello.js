class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

React.render(
  <HelloWorld />,
  document.getElementById("greeting")
);
