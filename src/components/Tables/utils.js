import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

let prevBg;
let flag = false;


export const notesWrapperStyle = clsx('col col--12 ').concat(styles.noteWrapper)

export const dottedStyle = {
  textDecoration: 'underline',
  textDecorationStyle: 'dotted',
  textDecorationColor: 'var(--ifm-color-primary)',
  textDecorationThickness: '0.23rem',
  textUnderlinePosition: 'under',
};

function getDashedStyle( color ) {
  if (color === undefined)
  {
    color = 'var(--ifm-color-primary)';
  }
  return {
    textDecoration: 'underline',
    textDecorationStyle: 'dashed',
    textDecorationColor: color,
    textDecorationThickness: '0.23rem',
    textUnderlinePosition: 'under'};
}

export const red = {
  bg: "#c21c1c50",
  text: '#c21c1cFF',
};
export const green = {
  bg: "#2E855550",
  text: '#2E8555FF',
};
export const blue = {
  bg: "#4853fc50",
  text: '#4853fcFF',
};
export const purple = {
  bg: "#CB71FF50",
  text: '#CB71FFFF',
};

export const metrics = {
  f1: <em>F<sub>1</sub></em>,
  iou: <em>IoU</em>,
  f1iou: <em>F<sub>1</sub> - IoU</em>,
  dprs: <em>D<sub>prs</sub></em>,
};


/**
 * Change background color of the cells matching the given class
 */
function handleOver(matchClass, color, e) {
  e.preventDefault();
  const hasDocument = typeof document !== 'undefined';
  if (hasDocument) {
    const cells = document.getElementsByClassName(matchClass);
    // Change background
    for (var i = 0; i < cells.length; i++) {
      // the fist time save the initial background color
      if (flag == false) {
        prevBg = cells[i].style.background;
        flag = true;
      }
      cells[i].style.setProperty('background', color, 'important');
    }
  }
}

/**
 * Revert back to the initial background
 */
function handleOut(matchClass, e) {
  e.preventDefault();
  const hasDocument = typeof document !== 'undefined';
  if (hasDocument) {
    const msDelay = 2500; // delay in milliseconds
    const cells = document.getElementsByClassName(matchClass);
    // Revert back to previous background
    setTimeout(function () {
      for (var i = 0; i < cells.length; i++) {
        cells[i].style.setProperty('background', prevBg, 'important');
      }
    }, msDelay);
  }
}

export const Dashed = ({ color, children }) => (
  <span style={getDashedStyle(color)}>{children}</span>
)

export const HandledItem = ({ dict, children }) => (
  <li onMouseOver={(e) => handleOver(dict.cls, dict.col.bg, e)} onMouseOut={(e) => handleOut(dict.cls, e)}>{children}
  </li>
)
