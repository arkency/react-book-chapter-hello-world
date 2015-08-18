class HelloWorld extends React.Component {
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
      return (
        <div id="two-tags">
          <h1>Hello {this.props.name}!</h1>
          <a href="#" id="click" onClick={this.linkClicked}>Click me</a>
        </div>
      );
    } else {
      return (
        <div id="two-tags">
          <h1>Hello {this.props.name}!</h1>
          <span>You clicked the link</span>
        </div>
      );
    }
  }
}

React.render(
  <HelloWorld name="Peter" />,
  document.getElementById("greeting")
);
