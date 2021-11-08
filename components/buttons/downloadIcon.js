import React from 'react';
import { FileDownload } from 'tabler-icons-react';
import { useState } from 'react';
              
export default function DownloadIcon(props) {
  const [color_, setColor] = useState(props.color)
  return (
    <div 
      onMouseOver={() => setColor(props.hoverColor)}
      onMouseOut={() => setColor(props.color)}>
      <FileDownload
        size={props.size}
        strokeWidth={props.strokeWidth}
        color={color_}
      />
    </div>
  )
}