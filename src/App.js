import React from 'react';

import Editor from './components/Editor';
import Previewer from './components/Previewer';

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: defaultMarkdown,
    }

    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div className="container py-5" id="app">
        <h1 className="text-center mb-5">Markdown Previewer</h1>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <Editor updateMarkdown={this.updateMarkdown} markdown={this.state.markdown} />
          </div>
          <div className="col-lg-6 mb-4">
            <Previewer markdown={this.state.markdown} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
