import React from 'react';
import { ArrowBack } from 'tabler-icons-react';
import { useState } from 'react';
              
export default function BackArrowIcon(props) {
  const [color_, setColor] = useState(props.color)

  return (
    <div 
      onMouseOver={() => setColor(props.hoverColor)}
      onMouseOut={() => setColor(props.color)}>
      <ArrowBack
        size={props.size}
        strokeWidth={props.strokeWidth}
        color={color_}
      />
    </div>
  )
}