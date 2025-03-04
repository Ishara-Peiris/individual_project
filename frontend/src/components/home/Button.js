import React from 'react'

export default function Button({ text, onClick }) {  return (
    <div>
      < button className="btn"   button onClick={onClick} >
      {text}
    </button>
    </div>
  )
}
