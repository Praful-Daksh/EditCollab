import React, { useEffect, useRef } from 'react'
import Codemirror from 'codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/gruvbox-dark.css'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'

const Editor = () => {
  const editorRef = useRef(null); 

  useEffect(() => {
    
    if (editorRef.current) return; 

    editorRef.current = Codemirror.fromTextArea(document.getElementById('realTimeEditor'), {
      mode: {
        name: 'javascript',
        json: true
      },
      theme: 'gruvbox-dark',
      autoCloseTags: true,
      autoCloseBrackets: true, // Fix typo here
      lineNumbers: true,
      lineWrapping:true,
    });
  }, []); 

  return (
    <textarea id='realTimeEditor'></textarea>
  )
}

export default Editor;
