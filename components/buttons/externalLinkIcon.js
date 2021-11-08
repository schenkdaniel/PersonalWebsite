import React from 'react';
import { ExternalLink } from 'tabler-icons-react';
import { useState } from 'react';
              
export default function ExternalLinkIcon(props) {
  const [color_, setColor] = useState(props.color)
  return (
    <div 
      onMouseOver={() => setColor(props.hoverColor)}
      onMouseOut={() => setColor(props.color)}>
      <ExternalLink
        size={props.size}
        strokeWidth={props.strokeWidth}
        color={color_}
      />
    </div>
  )
}