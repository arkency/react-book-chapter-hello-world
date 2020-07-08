import React, { useState } from "react";
import ReactDOM from "react-dom";

function OneTimeClickLink(props) {
  const [clicked, setClicked] = useState(false);

  function linkClicked(event) {
    setClicked(true);
  }

  return clicked ? (
    <span>You clicked the link</span>
  ) : (
    <a href="#" id="click" onClick={linkClicked}>
      Click me
    </a>
  );
}

function HelloWorld(props) {
  return <h1>Hello {props.name}!</h1>;
}

function HelloWorldApp(props) {
  return (
    <div id="two-tags">
      <HelloWorld name="Peter" />
      <OneTimeClickLink />
    </div>
  );
}

ReactDOM.render(<HelloWorldApp />, document.getElementById("root"));
