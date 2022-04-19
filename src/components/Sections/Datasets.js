import React from 'react';
import styles from './styles.module.css';
import { Tooltip } from './utils'
import { Cite } from './Bibliography_js'
import { DatasetOverview } from '../Tables';
import clsx from 'clsx';


const Intro = () => {
  return (
    <div>
      <p>
      Image databases are essential for developing skin detectors. Over the years, new databases keep getting published, but there are still some <b>limitations</b> on their reliability:
      </p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ul>
          <li className={styles.dottedUnderline} 
          data-tip="May cause some metrics to give overoptimistic estimations [#mcc]" 
          data-for="tip-unbalance" >
          Unbalanced classes
          <Tooltip id="tip-unbalance">
            May cause some metrics to give overoptimistic estimations <Cite name="mcc"/>
          </Tooltip>
          </li>
          <li>Number of images</li>
          <li>Image quality</li>
          <li>Ground truth quality</li>
          <li className={styles.dottedUnderline}
          data-tip="The following data may be extremely useful in some applications: lighting conditions, background complexity, number of subjects, featured skin tones, indoor or outdoor scenery" 
          data-for="tip-datalack" >
          Lack of additional data
          <Tooltip id="tip-datalack" >
            This kind of data may be extremely useful in some applications:
            <ul>
              <li>Lighting conditions</li>
              <li>Background complexity</li>
              <li>Number of subjects</li>
              <li>Featured skin tones</li>
              <li>Indoor or outdoor scenery</li>
            </ul>
          </Tooltip>
          </li>
        </ul>
      </div>
      <p className={clsx('margin-top--md ').concat(styles.centerText)} >
      Here are the <b className={styles.dottedUnderline} 
      data-tip="Only public datasets featuring images and including ground truths are considered" 
      data-for="tip-datasets">common datasets</b> used in Skin Detection.
      </p>
      <Tooltip id="tip-datasets" >
        Only public datasets featuring images and including ground truths are considered
      </Tooltip>
    </div>
  );
}

export const Datasets = () => {
  return (
    <div >
      <Intro />
      <DatasetOverview />
    </div>
  );
}
