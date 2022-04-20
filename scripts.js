import * as React from "https://cdn.skypack.dev/react@17.0.1";

marked.setOptions({
  gfm: true,
  breaks: true
});

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `
# JavaScript Program to Print Hello World
In this example, you will learn to print 'Hello World' in JavaScript in three
different ways.

A **"Hello, World!"** is a simple program that prints Hello, World! on the screen.
Since it's a very simple program, this program is often used to introduce a new
programming language to beginners.

---

We will use these three ways to print \`Hello, World!\`.
- \`console.log()\`
- \`alert()\`
- \`document.write()\`

---

## 1. Using console.log()
\`console.log()\` is used in debugging the code.
**Source Code**
\`\`\`
// the hello world program
console.log('Hello World');
\`\`\`
**Output**
\`Hello, World!\`
Here, the first line is a comment.
\`\`\`
// the hello world program
\`\`\`
The second line
\`\`\`
console.log('Hello World');
\`\`\`
prints the \`Hello, World!\` string to the console.

---

## 2. Using alert()






[GitHub](https://github.com/)
\`(condtion) ? true : false\`
- one
> foo
![cat](https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png)
**BOLD**
Courtesy of &copy;Programiz
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