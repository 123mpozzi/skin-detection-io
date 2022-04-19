import React, { useState, useEffect, useRef } from 'react';
import styles from '../Tables/styles.module.css';
import { Section, Tooltip } from '../Sections/utils'
import { Cite } from '../Sections/Bibliography_js'
import clsx from 'clsx';


/**
 * Swappable content
 */
let content = {
  "TDSD": "{} is the acronym of Test Database for Skin Detection, which is a database featuring 555 full-body skin images. Its ground truths are segmentation masks. It is also referred to as IBTD.",
  "ECU": "{} is a dataset created at the Edith Cowan University and represents the largest analyzed dataset, consisting of 3998 pictures. It has been categorized as a full-body dataset, but most of its content is half-body shots. It can also be referred to as Face and Skin Detection Database (FSD).",
  "Schmugge": "{} is a facial dataset that includes 845 images taken from different databases. It provides several labeled information about each image and ternary ground truths.",
  "Pratheepan": "{} is composed of 78 pictures randomly sampled from the web, precisely annotated. It stores the pictures containing a single subject with simple backgrounds and images containing multiple subjects with complex backgrounds in different folders.",
  "VPU": "{} as for Video Processing & Understanding Lab, consists of 285 images taken from five different public datasets for human activity recognition. The size of the pictures is constant between the images of the same origin. The dataset provides native train and test splits. It can also be referred to as VDM.",
  "SFA": "{} is the acronym of Skin of FERET and AR Database and consists of 1118 semipassport pictures with a very plain background, and skin and non-skin samples (ignored in this work). Its ground truths are segmentation masks.",
  "HGR": "{} is a Hand Gesture Recognition Database that organizes 1558 hand gesture images in three sub-datasets. Two sub-datasets include size-fixed very high-resolution images together with downscaled alternatives (used in this work).",
  "abd-skin": "{} is a database composed of 1400 size-fixed abdominal pictures accurately selected to represent different ethnic groups and body mass indices. It has native test and train splits.",
}

/**
 * Return the formatted content value assigned to the given key
 * @param key Key to access value
 * @returns Formatted content value assigned to the given key, wrapped in <p>
 */
function getContent(key) {
  let value = content[key];
  let db_name = <b>{key}</b>;
  let citation = <Cite name={String(key).toLowerCase()} />;
  let splits = String(value).split('{}');

  return (
    <p>
      {splits[0]}{db_name} {citation}{splits[1]}
    </p>
  );
}


export function DatasetsOverview() {
  // swap content
  let [selected, setSelected] = useState('VPU');
  // update height
  const [height, setHeight] = useState('auto');
  const ref = useRef(null);

  // At init, set swappable div height to initial div rendered
  // So use the highest div as default selection
  useEffect(() => {
    // if height is not already set (still 'auto')
    // or is worse than current, set to current
    if (ref.current.clientHeight > height || height == 'auto'){
      setHeight(ref.current.clientHeight);
    }
  });

  /**
   * Change selected item
   */
  function handleClick(href, e) {
    e.preventDefault();
    href = href.substring(1); // remove hash
    setSelected(href);
  }

  /**
   * Item handled by the events
   */
  const HandledItem = ({ children, href }) => {
    return <a href={href} onClick={(e) => handleClick(href, e)} onMouseOver={(e) => handleClick(href, e)} >{children}</a>
  }

  /**
   * HTML block that calls the change-state events
   */
  const Caller = () => (<div>
      <div className={styles.tableWrapper}>
        <Tooltip id="tip-iskintones">
          Citations from the original papers or eventual labels
        </Tooltip>
        <table className={styles.stable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Images</th>
              <th>Shot Type</th>
              <th className={styles.underlineDotted} data-tip="Citations from the original papers or eventual labels" data-for="tip-iskintones">Skin Tones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><HandledItem href="#abd-skin">abd-skin</HandledItem></td>
              <td>2019</td>
              <td>1400</td>
              <td>abdomen</td>
              <td>african, indian, hispanic, caucasian, asian</td>
            </tr>
            <tr>
              <td><HandledItem href="#HGR">HGR</HandledItem></td>
              <td>2014</td>
              <td>1558</td>
              <td>hand</td>
              <td>-</td>
            </tr>
            <tr>
              <td><HandledItem href="#SFA">SFA</HandledItem></td>
              <td>2013</td>
              <td>1118</td>
              <td>face</td>
              <td>asian, caucasian, african</td>
            </tr>
            <tr>
              <td><HandledItem href="#VPU">VPU</HandledItem></td>
              <td>2013</td>
              <td>285</td>
              <td>full body</td>
              <td>-</td>
            </tr>
            <tr>
              <td><HandledItem href="#Pratheepan">Pratheepan</HandledItem></td>
              <td>2012</td>
              <td>78</td>
              <td>full body</td>
              <td>-</td>
            </tr>
            <tr>
              <td><HandledItem href="#Schmugge" >Schmugge</HandledItem></td>
              <td>2007</td>
              <td>845</td>
              <td>face</td>
              <td>labels: light, medium, dark</td>
            </tr>
            <tr>
              <td><HandledItem href="#ECU">ECU</HandledItem></td>
              <td>2005</td>
              <td>3998</td>
              <td>full body</td>
              <td>whitish, brownish, yellowish, and darkish</td>
            </tr>
            <tr>
              <td><HandledItem href="#TDSD">TDSD</HandledItem></td>
              <td>2004</td>
              <td>555</td>
              <td>full body</td>
              <td>different ethnic groups</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div ref={ref} style={{height: height, maxHeight: '30vh', overflow: 'auto'}} className={clsx('col col--8 col--offset-2')} >
        <p>
        {getContent(selected)}
        </p>
      </div>
    </div>
  );

  return (
    <Section size='md' >
      <Caller />
    </Section>
  );
}

