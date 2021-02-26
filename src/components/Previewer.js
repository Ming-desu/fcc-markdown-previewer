import React from 'react';
import marked from 'marked';

// Allow line breaks with return button
marked.setOptions({
  break: true
})

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => `<a href="${href}" target="_blank" rel="noreferrer" title="${title}">${text}</a>`;

class Previewer extends React.Component {
  render() {
    return (
      <div className="card h-100">
        <div className="card-header">
          Markdown Preview
        </div>
        <div className="card-body">
          <div 
            id="preview"
            dangerouslySetInnerHTML={{__html: marked(this.props.markdown, {renderer})}}
          ></div>
        </div>
      </div>
    )
  }
}

export default Previewer;