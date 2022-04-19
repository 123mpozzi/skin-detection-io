import React from 'react';
import styles from './styles.module.css';
import { Section } from './utils'
import clsx from 'clsx';
import TaxonomyGraph from '../TaxonomyGraph';


const TaxonomyDesc = () => {
  return (
    <div className={clsx("row")}>
      <div className={clsx("col col--8 col--offset-2")}>
        <div id="taxonomy-thresholding" className={styles.myhide} >
          <p>
            <b>Thresholding</b> approaches use <em>plain rules</em> to classify each pixel as either skin or non-skin. An example is the following.<br />
        A given (Y,Cb,Cr) pixel is a skin pixel if 133&lt;=Cr&lt;=173 and 77&lt;=Cb&lt;=127
        </p>
        </div>
        <div id="taxonomy-fuzzylogic" className={styles.myhide} >
          <p>
            <b>Fuzzy logic</b> approaches use a <em>set of rules</em> to calculate a combined truth value between 0 and 1. The truth value drives the classification.
        </p>
        </div>
        <div id="taxonomy-deeplearning" className={styles.myhide} >
          <p>
            <b>Deep learning</b> approaches use training data to create a <em>neural network model</em> which is then used to perform classification.
        </p>
        </div>
        <div id="taxonomy-statistical" className={styles.myhide} >
          <p>
            <b>Statistical</b> approaches use training data to create a <em>statistical model</em> which is then used alongside probability calculus to perform classification.
        </p>
        </div>
        <div id="taxonomy-ensemble" className={styles.myhide} >
          <p>
            <b>Ensemble</b> approaches use the classifications from different <em>independent</em> machine learning <em>models</em> trained on the same data as votes for determining the best
        classification.
        </p>
        </div>
        <div id="taxonomy-hybrid" className={styles.myhide} >
          <p>
            <b>Hybrid</b> approaches make use of different classification techniques that <em>work together</em> to perform the final classification.
        </p>
        </div>
      </div>
    </div>
  );
}

export const Taxonomy = () => {
  return (
    <Section size='md' >
      <div>
        <p>
          Skin detection is a <b>binary classification problem</b>: the pixels of an image must be divided between skin and non-skin classes.
        </p>
        <p>
          One of several ways to categorize methods is to group them according to how the pixel classification is done.
        </p>
      </div>
      <div>
        <TaxonomyGraph />
      </div>
      <TaxonomyDesc />
    </Section>
  );
}
