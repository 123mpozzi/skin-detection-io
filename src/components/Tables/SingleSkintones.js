import React from 'react';
import { notesWrapperStyle, Dashed, red, green, blue, HandledItem, metrics } from './utils'
import styles from './styles.module.css';


const ntNullStd = {
  cls: 'note-null-std',
  col: red,
};

const ntMedHard = {
  cls: 'note-med-scenarios',
  col: green,
};

const ntDarkThresh = {
  cls: 'note-dark-thresh',
  col: blue,
};

export const SingleSkintones = () => {
  const method_1 = 'U-Net'
  const method_2 = 'Statistical'
  const method_3 = 'Thresholding'

  return (
    <div>
      <div className={styles.tableWrapper}>
        <table className={[styles.noBoldHeaders, styles.stable].join(' ')}>
          <thead>
            <tr>
              <td />
              <th scope="col" className={styles.tableLabel}>Method \ Database</th>
              <th scope="col">DARK</th>
              <th scope="col">MEDIUM</th>
              <th scope="col">LIGHT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={3} scope="rowgroup" className={styles.metricUp} style={{ paddingRight: '0.3rem !important' }}>{metrics.f1}</th>
              <th scope="row">{method_1}</th>
              <td className={ntNullStd.cls}><b>0.9529 ± 0.00</b></td>
              <td className={ntMedHard.cls}><b>0.9260 ± 0.15</b></td>
              <td><b>0.9387 ± 0.12</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td className={ntNullStd.cls}><u>0.8123 ± 0.02</u></td>
              <td className={ntMedHard.cls}><u>0.7634 ± 0.19</u></td>
              <td><u>0.8001 ± 0.15</u></td>
            </tr>
            <tr>
              <th scope="row">{method_3}</th>
              <td className={ntDarkThresh.cls}>0.2620 ± 0.14</td>
              <td>0.6316 ± 0.20</td>
              <td>0.6705 ± 0.14</td>
            </tr>
            <tr>
              <th rowSpan={3} scope="rowgroup" className={styles.metricUp}>{metrics.iou}</th>
              <th scope="row">{method_1}</th>
              <td><b>0.9100 ± 0.01</b></td>
              <td className={ntMedHard.cls}><b>0.8883 ± 0.18</b></td>
              <td><b>0.9006 ± 0.14</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td><u>0.6844 ± 0.03</u></td>
              <td className={ntMedHard.cls}><u>0.6432 ± 0.17</u></td>
              <td><u>0.6870 ± 0.16</u></td>
            </tr>
            <tr>
              <th scope="row">{method_3}</th>
              <td className={ntDarkThresh.cls}>0.1587 ± 0.10</td>
              <td>0.4889 ± 0.19</td>
              <td>0.5190 ± 0.14</td>
            </tr>
            <tr>
              <th rowSpan={3} scope="rowgroup" className={styles.metricDown}>{metrics.dprs}</th>
              <th scope="row">{method_1}</th>
              <td><b>0.0720 ± 0.01</b></td>
              <td className={ntMedHard.cls}><b>0.1078 ± 0.21</b></td>
              <td><b>0.0926 ± 0.15</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td><u>0.3406 ± 0.05</u></td>
              <td className={ntMedHard.cls}><u>0.3452 ± 0.23</u></td>
              <td><u>0.3054 ± 0.20</u></td>
            </tr>
            <tr>
              <th scope="row">{method_3}</th>
              <td className={ntDarkThresh.cls}>0.8548 ± 0.12</td>
              <td>0.5155 ± 0.24</td>
              <td>0.4787 ± 0.17</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={notesWrapperStyle}>
        <ul>
          <HandledItem dict={ntNullStd}>
            <p>
              DARK presents an <Dashed color={ntNullStd.col.text}>almost null standard deviation</Dashed> in learning approaches, indicating that the diversity of the images might not be very high.
            </p>
          </HandledItem>
          <HandledItem dict={ntMedHard}>
            <p>
              The learning approaches have the highest difficulty at classifying the medium skin tones, which may be caused by the <Dashed color={ntMedHard.col.text}>difficult scenarios</Dashed> featured in the sub-dataset, such as clay terrains, which have a skin-like color.
            </p>
          </HandledItem>
          <HandledItem dict={ntDarkThresh}>
            <p>
              {method_3} struggles to classify <Dashed color={ntDarkThresh.col.text}>dark skin tones</Dashed>, which may indicate that the skin clustering rules are leaving out the darker skin pixels.
            </p>
          </HandledItem>
          <li>
            <p>
              {method_1} beats its competitors in all the measurements, while {method_2} comes always second.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
