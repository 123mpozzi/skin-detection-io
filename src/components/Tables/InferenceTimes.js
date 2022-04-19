import React from 'react';
import { Tooltip } from '../Sections';
import styles from './styles.module.css';



export const InferenceTimes = () => {
  return (
    <div className={styles.tableWrapper}>
      <Tooltip id="tip-infer">
        <p>
        <b>Deep learning</b>: assume one prediction is already performed before starting the observations.
        </p>
        <p>
        <b>Statistical</b>: create the prediction image looping on a sequence object  instead of every pixel.
        </p>
      </Tooltip>
      <Tooltip id="tip-inferthresh">
        Inference times independent of image content
      </Tooltip>
      <table className={[styles.noBoldHeaders, styles.stable].join(' ')}>
        <thead>
          <tr>
            <th />
            <th>Inference time<br />(seconds)</th>
            <th>
            <span className={styles.underlineDotted} data-tip="Deep learning: assume one prediction is already performed before starting the observations. Statistical: create the prediction image looping on a sequence object instead of every pixel." data-for="tip-infer">Improved</span> inference time<br />(seconds)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Deep Learning</td>
            <td>0.826581 ± 0.043</td>
            <td><u>0.242685 ± 0.016</u></td>
          </tr>
          <tr>
            <td>Statistical</td>
            <td><u>0.457534 ± 0.002</u></td>
            <td>0.371515 ± 0.002</td>
          </tr>
          <tr>
            <td>Thresholding</td>
            <td><b>0.007717 <span className={styles.underlineDotted} data-tip="Inference times independent of image content" data-for="tip-inferthresh">± 0.000</span></b></td>
            <td><b>0.007717 ± 0.000</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
