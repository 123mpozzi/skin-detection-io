import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import { ArcherContainer, ArcherElement } from 'react-archer';


const defaultSelected = 'tx3-thresholding'

/**
 * Swap the content of '#taxonomy-desc' with the content referenced by href.
 * Change selected item in Taxonomy.
 */
function handleClick(id, href, e) {
  e.preventDefault();

  // Swap content
  href = href.substring(1);
  var newContent = document.getElementById(href).innerHTML;
  document.getElementById("taxonomy-desc").innerHTML = newContent;

  // Change selected item
  var old_selection = document.getElementsByClassName(styles.taxonomyOn);
  for (var i = 0; i < old_selection.length; i++) {
    old_selection[i].classList.remove(styles.taxonomyOn);
  }
  document.getElementById(id).classList.add(styles.taxonomyOn);
}

/**
 * If the given text is an Array, join each item with <br />
 * @returns Text with each item joined by <br />
 */
function innerText() {
  return Array.from(arguments).map( ( item ) => <> { item } <br /> </>)
}

/**
 * Link the given Blocks to the current Block
 * 
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
  else
  {
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
    <a id={id_anchor} className={classes} href={href} onClick={(e) => handleClick(id_anchor, href, e)} onMouseOver={(e) => handleClick(id_anchor, href, e)}>
      <ArcherElement id={id}>
        <div>
          <p className={styles.blockText} >{text}</p>
        </div>
      </ArcherElement>
    </a>
  </div>
}


export default function Taxonomy() {
  return (
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
      <div id="taxonomy-desc" className={clsx('col col--8 col--offset-2')} style={{minHeight: '220px'}} >
        <p>
        <b>Thresholding</b> approaches use <em>plain rules</em> to classify each pixel as either skin or non-skin. An example is the following.<br />
        A given (Y,Cb,Cr) pixel is a skin pixel if 133&lt;=Cr&lt;=173 and 77&lt;=Cb&lt;=127
        </p>
      </div>
    </div>
  );
}
