import React from 'react';
import { BrandGithub } from 'tabler-icons-react';
import { useState } from 'react';
              
export default function GitHubIcon(props) {
  const [color_, setColor] = useState(props.color)
  return (
    <div 
      onMouseOver={() => setColor(props.hoverColor)}
      onMouseOut={() => setColor(props.color)}>
      <BrandGithub
        size={props.size}
        strokeWidth={props.strokeWidth}
        color={color_}
      />
    </div>
  )
}