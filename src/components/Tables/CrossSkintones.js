import React from 'react';
import { notesWrapperStyle, Dashed, red, green, blue, HandledItem, metrics } from './utils'
import styles from './styles.module.css';


const ntDarkLight = {
  cls: 'note-dark-on-light',
  col: red,
};

const ntDprs = {
  cls: 'note-dprs',
  col: green,
};

const ntSmallSet = {
  cls: 'note-small-set',
  col: blue,
};


export const CrossSkintones = () => {
  const method_1 = 'U-Net'
  const method_2 = 'Statistical'

  return (
    <div>
      <div className={styles.tableWrapper}>
        <table className={[styles.noBoldHeaders, styles.stable].join(' ')}>
          <thead>
            <tr>
              <td rowSpan={2} scope="rowgroup" />
              <th scope="col" className={styles.pointRight}>Training</th>
              <th colSpan={2} scope="colgroup">DARK</th>
              <th colSpan={2} scope="colgroup">MEDIUM</th>
              <th colSpan={2} scope="colgroup">LIGHT</th>
            </tr>
            <tr>
              <th scope="col" className={styles.pointRight}>Testing</th>
              <th scope="col">MEDIUM</th>
              <th scope="col">LIGHT</th>
              <th scope="col">DARK</th>
              <th scope="col">LIGHT</th>
              <th scope="col">DARK</th>
              <th scope="col">MEDIUM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={2} scope="rowgroup" className={styles.metricUp}>{metrics.f1}</th>
              <th scope="row">{method_1}</th>
              <td className={ntSmallSet.cls}>0.7300 ± 0.25</td>
              <td className={[ntDarkLight.cls, ntSmallSet.cls].join(' ')}>0.7262 ± 0.26</td>
              <td><b>0.8447 ± 0.13</b></td>
              <td><b>0.8904 ± 0.14</b></td>
              <td><b>0.7660 ± 0.17</b></td>
              <td><b>0.9229 ± 0.11</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td className={ntSmallSet.cls}><b>0.7928 ± 0.11</b></td>
              <td className={[ntDarkLight.cls, ntSmallSet.cls].join(' ')}><b>0.7577 ± 0.12</b></td>
              <td>0.5628 ± 0.14</td>
              <td>0.7032 ± 0.14</td>
              <td>0.5293 ± 0.20</td>
              <td>0.7853 ± 0.11</td>
            </tr>
            <tr>
              <th rowSpan={2} scope="rowgroup" className={styles.metricUp}>{metrics.iou}</th>
              <th scope="row">{method_1}</th>
              <td className={ntSmallSet.cls}>0.6279 ± 0.27</td>
              <td className={[ntDarkLight.cls, ntSmallSet.cls].join(' ')}><b>0.6276 ± 0.28</b></td>
              <td><b>0.7486 ± 0.15</b></td>
              <td><b>0.8214 ± 0.16</b></td>
              <td><b>0.6496 ± 0.21</b></td>
              <td><b>0.8705 ± 0.13</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td className={ntSmallSet.cls}><b>0.6668 ± 0.11</b></td>
              <td className={[ntDarkLight.cls, ntSmallSet.cls].join(' ')}>0.6229 ± 0.13</td>
              <td>0.4042 ± 0.13</td>
              <td>0.5571 ± 0.14</td>
              <td>0.3852 ± 0.19</td>
              <td>0.6574 ± 0.12</td>
            </tr>
            <tr>
              <th rowSpan={2} scope="rowgroup" className={styles.metricDown}>{metrics.dprs}</th>
              <th scope="row">{method_1}</th>
              <td className={ntSmallSet.cls}>0.3805 ± 0.33</td>
              <td className={ntSmallSet.cls}><b>0.3934 ± 0.34</b></td>
              <td><b>0.2326 ± 0.17</b></td>
              <td><b>0.1692 ± 0.18</b></td>
              <td><b>0.3402 ± 0.21</b></td>
              <td><b>0.1192 ± 0.16</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td className={ntSmallSet.cls}><b>0.3481 ± 0.16</b></td>
              <td className={ntSmallSet.cls}>0.4679 ± 0.18</td>
              <td className={ntDprs.cls}>0.6802 ± 0.20</td>
              <td>0.5376 ± 0.23</td>
              <td className={ntDprs.cls}>0.6361 ± 0.22</td>
              <td>0.3199 ± 0.16</td>
            </tr>
            <tr>
              <th rowSpan={2} scope="rowgroup" className={styles.metricDown}>{metrics.f1iou}</th>
              <th scope="row">{method_1}</th>
              <td className={ntSmallSet.cls}><b>0.1021</b></td>
              <td className={ntSmallSet.cls}><b>0.0986</b></td>
              <td><b>0.0961</b></td>
              <td><b>0.0690</b></td>
              <td><b>0.1164</b></td>
              <td><b>0.0524</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td className={ntSmallSet.cls}>0.1260</td>
              <td className={ntSmallSet.cls}>0.1348</td>
              <td>0.1586</td>
              <td>0.1461</td>
              <td>0.1441</td>
              <td>0.1279</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={notesWrapperStyle}>
        <ul>
          <HandledItem dict={ntDarkLight}>
            <p>
              Using DARK as the training set and predicting over LIGHT, {method_2} has better {metrics.f1} but worse {metrics.iou}: {method_2} picks <Dashed color={ntDarkLight.col.text}>more True Positives</Dashed> than {method_1}.
            </p>
          </HandledItem>
          <HandledItem dict={ntDprs}>
            <p>
              In MEDIUM on DARK case, the {metrics.dprs} score of {method_2} is worse than in the case of LIGHT on DARK, even if the {metrics.f1} and {metrics.iou} are better. <Dashed color={ntDprs.col.text}>Specificity is driving the prediction away from the ideal ground truth</Dashed>, suggesting very few True Negatives.
            </p>
          </HandledItem>
          <HandledItem dict={ntSmallSet}>
            <p>
              {method_2} outperforms {method_1} a pair of times when using the darker skin tones as the training set: it may indicate that, when using a <Dashed color={ntSmallSet.col.text}>smaller training set</Dashed>, {method_2} performs better, as the dark sub-dataset was the smallest one and therefore had to be data-augmented with light transformations. {method_1} also describes more unstable results as the population standard deviation is higher.
            </p>
          </HandledItem>
          <li>
            <p>
              As usual, {method_1} outperforms {method_2} in most situations.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
