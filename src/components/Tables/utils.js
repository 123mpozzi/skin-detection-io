import React from 'react';
import ReactTooltip from 'react-tooltip';

export const Tooltip = ({children, id}) => (
  <ReactTooltip id={id} place="top" effect="solid" border borderColor="var(--ifm-color-primary)" >
    <div style={{maxWidth: 'min(70vw, 200px)'}} >
      {children}
    </div>
  </ReactTooltip>
)
