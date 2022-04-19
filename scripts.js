import * as React from "https://cdn.skypack.dev/react@17.0.1";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    let content = marked.parse(this.state.input)
    return (
      <div>
        <textarea value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <div className="Container" dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    );
  }
};

ReactDOM.render(<ControlledInput />, document.getElementById('preview'))