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
![Keyboard](https://contact-centres.com/wp-content/uploads/2017/06/tech.image_.june_.2017.jpg)
      
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
The \`alert()\` method displays an alert box over the current window with the
specified message.

**Source Code**
\`\`\`
// the hello world program
alert("Hello, World!");
\`\`\`

---

## 3. Using document.write()
\`document.write()\` is used when you want to print the content to the HTML
document.

**Source Code**
\`\`\`
// the hello world program
alert("Hello, World!");
\`\`\`

> Courtesy of &copy;[Programiz](https://www.programiz.com/javascript/examples/hello-world)
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
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex flex-column container-sm">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <i class="fa-solid fa-fire"></i>
              <h4>Editor</h4>
            </div>
            <a><i class="fa-solid fa-xmark fa-xl"></i></a>
         </div>
          <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
        </div>
          <div class="d-flex flex-column container-md">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <i class="fa-solid fa-fire"></i>
                <h4>Previewer</h4>
              </div>
              <a><i class="fa-solid fa-xmark fa-xl"></i></a>
            </div>
            <div id="preview" className="Container" dangerouslySetInnerHTML={{__html: content}}></div>
          </div>
      </div>
    );
  }
};

ReactDOM.render(<ControlledInput />, document.getElementById('wholething'))