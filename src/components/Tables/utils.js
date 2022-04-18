import React from 'react';
import ReactTooltip from 'react-tooltip';

let prevBg;
let flag = false;

export const Tooltip = ({children, id}) => (
  <ReactTooltip id={id} place="top" effect="solid" border borderColor="var(--ifm-color-primary)" >
    <div style={{maxWidth: 'min(70vw, 200px)'}} >
      {children}
    </div>
  </ReactTooltip>
)

/**
 * Change background color of the cells matching the given class
 */
export function handleOver(matchClass, color, e) {
  e.preventDefault();
  const cells = document.getElementsByClassName(matchClass);
  // Change background
  for (var i = 0; i < cells.length; i++) {
    // the fist time save the initial background color
    if (flag == false){
      prevBg = cells[i].style.background;
      flag = true;
    }
    cells[i].style.setProperty('background', color, 'important');
  }
  // Revert back to previous background
  /*setTimeout(function() { 
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.setProperty('background', prevBg, 'important');
    }
  }, 5000);*/
}

/**
 * Revert back to the initial background
 */
export function handleOut(matchClass, e) {
  e.preventDefault();
  const cells = document.getElementsByClassName(matchClass);
  // Revert back to previous background
  setTimeout(function() { 
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.setProperty('background', prevBg, 'important');
    }
  }, 500);
}
