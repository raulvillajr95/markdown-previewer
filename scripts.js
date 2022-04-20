import * as React from "https://cdn.skypack.dev/react@17.0.1";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `# Header
## Sub Heading
[GitHub](https://github.com/)

\`(condtion) ? true : false\`
\`\`\`
function test() {
  console.log('Hello, World!')
}
\`\`\`
- one
> foo
![cat](https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png)
**BOLD**
`
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    let content = marked.parse(this.state.input);
    let defaultVal = "Header";
    return (
      <div>
        <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
        <h4>Controlled Input:</h4>
        <div id="preview" className="Container" dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    );
  }
};

ReactDOM.render(<ControlledInput />, document.getElementById('wholething'))