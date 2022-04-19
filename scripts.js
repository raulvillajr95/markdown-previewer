import * as React from "https://cdn.skypack.dev/react@17.0.1";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('preview'))