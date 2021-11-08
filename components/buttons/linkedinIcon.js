import React from 'react';
import { BrandLinkedin } from 'tabler-icons-react';
import { useState } from 'react';
              
export default function LinkedinIcon(props) {
  const [color_, setColor] = useState(props.color)
  return (
    <div 
      onMouseOver={() => setColor(props.hoverColor)}
      onMouseOut={() => setColor(props.color)}>
      <BrandLinkedin
        size={props.size}
        strokeWidth={props.strokeWidth}
        color={color_}
      />
    </div>
  )
}