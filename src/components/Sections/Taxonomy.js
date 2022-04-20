import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { containerClassName } from './utils';
import { ArcherContainer, ArcherElement } from 'react-archer';

const defaultSelected = 'tx3-thresholding'

/**
 * Swappable content
 */
let content = {
  "taxonomy-thresholding": "<b>Thresholding</b> approaches use <em>plain rules</em> to classify each pixel as either skin or non-skin. An example is the following.<br />A given (Y,Cb,Cr) pixel is a skin pixel if 133&lt;=Cr&lt;=173 and 77&lt;=Cb&lt;=127",
  "taxonomy-fuzzylogic": "<b>Fuzzy logic</b> approaches use a <em>set of rules</em> to calculate a combined truth value between 0 and 1. The truth value drives the classification.",
  "taxonomy-deeplearning": "<b>Deep learning</b> approaches use training data to create a <em>neural network model</em> which is then used to perform classification.",
  "taxonomy-statistical": "<b>Statistical</b> approaches use training data to create a <em>statistical model</em> which is then used alongside probability calculus to perform classification.",
  "taxonomy-ensemble": "<b>Ensemble</b> approaches use the classifications from different <em>independent</em> machine learning <em>models</em> trained on the same data as votes for determining the best classification.",
  "taxonomy-hybrid": "<b>Hybrid</b> approaches make use of different classification techniques that <em>work together</em> to perform the final classification.",
}


/**
 * Return the formatted content value assigned to the given key
 * @param key Key to access value
 * @returns Formatted content value assigned to the given key, wrapped in <p>
 */
function getContent(key) {
  var htmlItem = { __html: content[key] }

  return (
    <p dangerouslySetInnerHTML={htmlItem}>
    </p>
  );
}

/**
 * If the given text is an Array, join each item with <br />
 * @returns Text with each item joined by <br />
 */
function innerText() {
  return Array.from(arguments).map((item, i) => <span key={i}> {item} <br /> </span>)
}

/**
 * Link the given Blocks to the current Block
 * @returns list to pass to 'relations' param
 */
function link() {
  var color = document.documentElement.getAttribute('data-theme');
  if (color == 'dark') {
    color = '#D9D9D9';
  }
  else {
    color = 'black';
  }

  var width = screen.width;
  if (width <= 600) {
    var sWidth = 1;
    var curves = false;
  }
  else {
    var sWidth = 2
    var curves = true;
  }

  var res = []
  for (var i = 0; i < arguments.length; i++) {
    res.push({
      targetId: arguments[i],
      targetAnchor: 'left',
      sourceAnchor: 'right',
      style: { strokeColor: color, strokeWidth: sWidth, noCurves: curves, svgContainerStyle: 'z-index: -1', },
    })
  }

  return res
}


/**
 * Create a Taxonomy block
 * 
 * @returns HTML code to place inside a div.taxonomy-col
 */
const Block = ({ id, relations, text }) => {
  if (Array.isArray(text)) {
    var textRes = innerText(...text)
  }
  else {
    var textRes = text
  }

  return <div className={styles.taxonomyPad} >
    <div>
      <ArcherElement id={id} relations={relations} >
        <div>
          <p className={styles.blockText} >{textRes}</p>
        </div>
      </ArcherElement>
    </div>
  </div>
}


export function Taxonomy() {
  // swap content
  const [selected, setSelected] = useState('taxonomy-thresholding');
  // update height
  const [height, setHeight] = useState('auto');
  const ref = useRef(null);

  // At init, set swappable div height to initial div rendered
  // So use the highest div as default selection
  useEffect(() => {
    // if height is not already set (still 'auto')
    // or is worse than current, set to current
    if (ref.current.clientHeight > height || height == 'auto') {
      setHeight(ref.current.clientHeight);
    }
  });

  /**
   * Change selected item
   */
  function handleClick(id, href, e) {
    e.preventDefault();
    href = href.substring(1); // remove hash
    setSelected(href);

    // Change selected item borders
    var old_selection = document.getElementsByClassName(styles.taxonomyOn);
    for (var i = 0; i < old_selection.length; i++) {
      old_selection[i].classList.remove(styles.taxonomyOn);
    }
    document.getElementById(id).classList.add(styles.taxonomyOn);
  }

  /**
   * Create a clickable Taxonomy block
   * 
   * @returns HTML code to place inside a div.taxonomy-col
   */
  const ClickBlock = ({ id, href, text }) => {
    var id_anchor = String(id).concat('_anchor')

    if (id == defaultSelected) {
      var classes = [styles.taxonomyLink, styles.taxonomyOn].join(' ')
    }
    else {
      var classes = styles.taxonomyLink;
    }

    return <div className={styles.taxonomyPad} >
      <a id={id_anchor} className={classes} href={href}
        onClick={(e) => handleClick(id_anchor, href, e)}
        onMouseOver={(e) => handleClick(id_anchor, href, e)}>
        <ArcherElement id={id}>
          <div>
            <p className={styles.blockText} >{text}</p>
          </div>
        </ArcherElement>
      </a>
    </div>
  }

  /**
   * HTML block that calls the change-state events
   */
  const Graph = () => (
    <div>
      <ArcherContainer strokeColor='black' >
        <div className={styles.taxonomyRow}>
          <div className={styles.taxonomyCol} />
          <div className={styles.taxonomyCol} >
            <Block
              id="tx2-rulebased"
              relations={link('tx3-thresholding', 'tx3-fuzzylogic')}
              text={["Rule-based", "classifier"]}
            />
          </div>
          <div className={[styles.taxonomyCol, styles.taxonomyGroup].join(' ')} >
            <ClickBlock
              id="tx3-thresholding"
              href="#taxonomy-thresholding"
              text="Thresholding"
            />
            <ClickBlock
              id="tx3-fuzzylogic"
              href="#taxonomy-fuzzylogic"
              text="Fuzzy Logic"
            />
          </div>
        </div>
        <div className={styles.taxonomyRow}>
          <div className={styles.taxonomyCol} >
            <Block
              id="tx1-skindetector"
              relations={link('tx2-machinelearning', 'tx2-rulebased', 'tx2-hybrid')}
              text={"Skin Detector"}
            />
          </div>
          <div className={styles.taxonomyCol} >
            <Block
              id="tx2-machinelearning"
              relations={link('tx3-deeplearning', 'tx3-statistical', 'tx3-ensemble')}
              text={["Machine Learning", "classifier"]}
            />
          </div>
          <div className={[styles.taxonomyCol, styles.taxonomyGroup].join(' ')} >
            <ClickBlock
              id="tx3-deeplearning"
              href="#taxonomy-deeplearning"
              text="Deep Learning"
            />
            <ClickBlock
              id="tx3-statistical"
              href="#taxonomy-statistical"
              text="Statistical"
            />
            <ClickBlock
              id="tx3-ensemble"
              href="#taxonomy-ensemble"
              text="Ensemble"
            />
          </div>
        </div>
        <div className={styles.taxonomyRow}>
          <div className={styles.taxonomyCol} />
          <div className={styles.taxonomyCol} >
            <ClickBlock
              id="tx2-hybrid"
              href="#taxonomy-hybrid"
              text="Hybrid classifier"
            />
          </div>
          <div className={styles.taxonomyCol} />
        </div>
      </ArcherContainer>
    </div>
  );

  return (
    <div>
      <div>
        <p>
          Skin detection is a <b>binary classification problem</b>: the pixels of an image must be divided between skin and non-skin classes.
        </p>
        <p>
          One of several ways to categorize methods is to group them according to how the pixel classification is done.
        </p>
      </div>
      <Graph />
      <div ref={ref} style={{ height: height, maxHeight: '30vh', overflow: 'auto' }} className={containerClassName}  >
        {getContent(selected)}
      </div>
    </div>
  );
}

