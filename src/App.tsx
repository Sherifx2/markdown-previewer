import React from 'react'
import { useState } from 'react'
import './App.css'
import {marked} from "marked"

class App extends React.Component {
  state = {
    text:''
  }
  handleChange = (e: { target: { value: any } }) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    const { text } = this.state;
    
    const markdown= marked(text); 

    return(
    <div className="App">
      <div className="card">
        <h1 >Editor</h1>
        <textarea onChange={this.handleChange}value={text}id="editor"className="editor"></textarea>
      </div>
      
      <div className="card">
        <h1 >Preview</h1>
        <div id="preview"className="editor" dangerouslySetInnerHTML={{__html:markdown}}/>
      </div>
    </div>
    )
  }
}

export default App
