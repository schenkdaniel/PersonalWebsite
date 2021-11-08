import React from 'react';
import { Mail } from 'tabler-icons-react';
import { useState } from 'react';
              
export default function EmailIcon(props) {
  const [color_, setColor] = useState(props.color)
  return (
    <div 
      onMouseOver={() => setColor(props.hoverColor)}
      onMouseOut={() => setColor(props.color)}>
      <Mail
        size={props.size}
        strokeWidth={props.strokeWidth}
        color={color_}
      />
    </div>
  )
}