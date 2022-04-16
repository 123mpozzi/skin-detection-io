import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import { ArcherContainer, ArcherElement } from 'react-archer';


const rowStyle = { margin: '50px 0', display: 'flex', justifyContent: 'space-between', }


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
  var res = []
  for (var i = 0; i < arguments.length; i++) {
    res.push({
      targetId: arguments[i],
      targetAnchor: 'left',
      sourceAnchor: 'right',
      style: { strokeColor: 'black', strokeWidth: 2, noCurves: 'true', svgContainerStyle: 'z-index: -1', },
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
        <p className={clsx('text--center no-margin')} >{textRes}</p>
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
  return <div className={styles.taxonomyPad} >
    <a className={styles.taxonomyLink} href={href}>
      <ArcherElement id={id}>
        <div>
          <p className={clsx('text--center no-margin')} >{text}</p>
        </div>
      </ArcherElement>
    </a>
  </div>
}


export default function Taxonomy() {
  return (
    <div>
      <ArcherContainer strokeColor='black' >
        <div style={rowStyle}>
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
        <div style={rowStyle}>
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
        <div style={rowStyle}>
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
}
