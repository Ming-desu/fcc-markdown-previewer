import React from 'react';

class Editor extends React.Component {
  render() {
    return (
      <div className="card h-100">
        <div className="card-header">
          Text Editor
        </div>
        <div className="card-body">
          <textarea 
            name="editor" 
            className="form-control h-100" 
            id="editor" 
            onChange={this.props.updateMarkdown} 
            value={this.props.markdown}
            style={{minHeight: '360px'}}
          >
          </textarea>
        </div>
      </div>
    )
  }
}

export default Editor;