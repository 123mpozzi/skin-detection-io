import React from 'react';
import styles from './styles.module.css';
import { Section, Tooltip } from './utils'
import { Cite } from './Bibliography_js'
import { DatasetOverview } from '../Tables';
import clsx from 'clsx';


const descStyle = {}

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
          <li class="underline-dots" 
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

const DatasetsDesc = () => {
  return (
    <div className={clsx("row")} >
      <div className={clsx("col col--8 col--offset-2")} >
        <div id="dataset-tdsd" className={styles.myhide} >
          <p>
          <b>TDSD</b> <Cite name='tdsd' /> is the acronym of Test Database for Skin Detection, which is a database featuring 555 full-body skin images. Its ground truths are segmentation masks. It is also referred to as IBTD.
          </p>
        </div>
        <div id="dataset-ecu" className={styles.myhide} >
          <p>
          <b>ECU</b> <Cite name='ecu' /> is a dataset created at the Edith Cowan University and represents the largest analyzed dataset, consisting of 3998 pictures. It has been categorized as a full-body dataset, but most of its content is half-body shots. It can also be referred to as Face and Skin Detection Database (FSD).
          </p>
        </div>
        <div id="dataset-schmugge" className={styles.myhide} >
          <p>
          <b>Schmugge</b> <Cite name='schmugge' /> is a facial dataset that includes 845 images taken from different databases. It provides several labeled information about each image and ternary ground truths.
          </p>
        </div>
        <div id="dataset-pratheepan" className={styles.myhide} >
          <p>
          <b>Pratheepan</b> <Cite name='pratheepan' /> is composed of 78 pictures randomly sampled from the web, precisely annotated. It stores the pictures containing a single subject with simple backgrounds and images containing multiple subjects with complex backgrounds in different folders.
          </p>
        </div>
        <div id="dataset-vpu" className={styles.myhide} >
          <p>
          <b>VPU</b> <Cite name='vpu' /> as for Video Processing &amp; Understanding Lab, consists of 285 images taken from five different public datasets for human activity recognition. The size of the pictures is constant between the images of the same origin. The dataset provides native train and test splits. It can also be referred to as VDM.
          </p>
        </div>
        <div id="dataset-sfa" className={styles.myhide} >
          <p>
          <b>SFA</b> <Cite name='sfa' /> is the acronym of Skin of FERET and AR Database and consists of 1118 semipassport pictures with a very plain background, and skin and non-skin samples (ignored in this work). Its ground truths are segmentation masks.
          </p>
        </div>
        <div id="dataset-hgr" className={styles.myhide} >
          <p>
          <b>HGR</b> <Cite name='hgr' /> is a Hand Gesture Recognition Database that organizes 1558 hand gesture images in three sub-datasets. Two sub-datasets include size-fixed very high-resolution images together with downscaled alternatives (used in this work).
          </p>
        </div>
        <div id="dataset-abd" className={styles.myhide} >
          <p>
          <b>abd-skin</b> <Cite name='abd' /> is a database composed of 1400 size-fixed abdominal pictures accurately selected to represent different ethnic groups and body mass indices. It has native test and train splits.
          </p>
        </div>
      </div>
    </div>
  );
}

export const Datasets = () => {
  return (
    <Section size='md' >
      <Intro />
      <DatasetOverview />
      <DatasetsDesc />
    </Section>
  );
}
