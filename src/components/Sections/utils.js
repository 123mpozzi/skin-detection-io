import React from 'react';
import ReactTooltip from 'react-tooltip';
import styles from './styles.module.css';
import clsx from 'clsx';


export const Tooltip = ({ children, id }) => (
  <ReactTooltip
    id={id}
    place="top"
    effect="solid"
    border
    borderColor="var(--ifm-color-primary)"
    overridePosition = {({ left, top }, currentEvent, currentTarget, node) => {
      const d = document.documentElement;
      left = Math.min(d.clientWidth - node.clientWidth, left);
      top = Math.min(d.clientHeight - node.clientHeight, top);
      left = Math.max(0, left);
      top = Math.max(0, top);
      return { top, left }
    }}
  >
    {children}
  </ReactTooltip>
)

export const Section = ({children, size}) => {
  if (size == false) {
    size = 'xl';
  }
  let classStr = 'margin-bottom--'.concat(size);

  return (<div className={clsx(classStr)}>
    {children}
  </div>
  );
}

export const Center = ({children}) => (
  <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }}>
    {children}
  </div>
)

export const Caption = ({children}) => (
  <p class="text--center" style={{color: 'var(--ifm-color-gray-600)'}}>{children}</p>
)
