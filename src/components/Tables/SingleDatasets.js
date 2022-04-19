import React from 'react';
import { Tooltip, notesWrapperStyle, Dashed, red, green, blue, HandledItem, metrics } from './utils'
import styles from './styles.module.css';


const ntSchStd = {
  cls: 'note-sch-std',
  col: red,
};

const ntHgrEasy = {
  cls: 'note-hgr-easy',
  col: green,
};

const ntUnetBest = {
  cls: 'note-unet-best',
  col: blue,
};

export const SingleDatasets = () => {
  const method_1 = 'U-Net'
  const method_2 = 'Statistical'
  const method_3 = 'Thresholding'

  return (
    <div>
      <div className={styles.tableWrapper}>
        <Tooltip id="tip-dprs">
          <img src="/img/dprs.svg" alt='Dprs = sqrt{(1-PR)^2 + (1-RE)^2 + (1-SP)^2}' title='Facial analysis' style={{ filter: 'invert(100%)', minWidth: '100%' }} />
          <p>
            Where PR is Precision, RE is Recall, and SP is Specificity; and (1,1,1) the ideal ground truth.
          </p>
        </Tooltip>
        <table className={[styles.noBoldHeaders, styles.stable].join(' ')}>
          <thead>
            <tr>
              <td />
              <th scope="col" className={styles.tableLabel}>Method \ Database</th>
              <th scope="col">ECU</th>
              <th scope="col">HGR</th>
              <th scope="col">SCHMUGGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowspan="3" scope="rowgroup" className={styles.metricUp} style={{ paddingRight: '0.3rem !important' }}>{metrics.f1}</th>
              <th scope="row">{method_1}</th>
              <td className={ntUnetBest.cls}><b>0.9133 ± 0.08</b></td>
              <td className={ntHgrEasy.cls}><b>0.9848 ± 0.02</b></td>
              <td className={ntSchStd.cls}><b>0.6121 ± 0.45</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td className={ntUnetBest.cls}><u>0.6980 ± 0.22</u></td>
              <td className={ntHgrEasy.cls}><u>0.9000 ± 0.15</u></td>
              <td className={ntSchStd.cls}><u>0.5098 ± 0.39</u></td>
            </tr>
            <tr>
              <th scope="row">{method_3}</th>
              <td className={ntUnetBest.cls}>0.6356 ± 0.24</td>
              <td className={ntHgrEasy.cls}>0.7362 ± 0.27</td>
              <td className={ntSchStd.cls}>0.4280 ± 0.34</td>
            </tr>
            <tr>
              <th rowspan="3" scope="rowgroup" className={styles.metricUp}>{metrics.iou}</th>
              <th scope="row">{method_1}</th>
              <td className={ntUnetBest.cls}><b>0.8489 ± 0.12</b></td>
              <td className={ntHgrEasy.cls}><b>0.9705 ± 0.03</b></td>
              <td className={ntSchStd.cls}><b>0.5850 ± 0.44</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td className={ntUnetBest.cls}><u>0.5751 ± 0.23</u></td>
              <td className={ntHgrEasy.cls}><u>0.8434 ± 0.19</u></td>
              <td className={ntSchStd.cls}><u>0.4303 ± 0.34</u></td>
            </tr>
            <tr>
              <th scope="row">{method_3}</th>
              <td className={ntUnetBest.cls}>0.5088 ± 0.25</td>
              <td className={ntHgrEasy.cls}>0.6467 ± 0.30</td>
              <td className={ntSchStd.cls}>0.3323 ± 0.28</td>
            </tr>
            <tr>
              <th rowspan="3" scope="rowgroup" className={styles.metricDown}>D<sub className={styles.underlineDotted} data-tip="Dprs = sqrt{(1-PR)^2 + (1-RE)^2 + (1-SP)^2}. Where PR is Precision, RE is Recall, and SP is Specificity; and (1,1,1) the ideal ground truth." data-for="tip-dprs">prs</sub></th>
              <th scope="row">{method_1}</th>
              <td className={ntUnetBest.cls}><b>0.1333 ± 0.12</b></td>
              <td className={ntHgrEasy.cls}><b>0.0251 ± 0.03</b></td>
              <td className={ntSchStd.cls}><b>0.5520 ± 0.64</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td className={ntUnetBest.cls}><u>0.4226 ± 0.27</u></td>
              <td className={ntHgrEasy.cls}><u>0.1524 ± 0.19</u></td>
              <td className={ntSchStd.cls}><u>0.7120 ± 0.54</u></td>
            </tr>
            <tr>
              <th scope="row">{method_3}</th>
              <td className={ntUnetBest.cls}>0.5340 ± 0.32</td>
              <td className={ntHgrEasy.cls}>0.3936 ± 0.36</td>
              <td className={ntSchStd.cls}>0.8148 ± 0.48</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={notesWrapperStyle}>
        <ul>
          <HandledItem dict={ntSchStd}>
            <p>
              Schmugge appears to be the hardest dataset to classify, also presenting <Dashed color={ntSchStd.col.text}>high standard deviations</Dashed> that can be attribuited to its diverse content, featuring different subjects, backgrounds, and lighting.
            </p>
          </HandledItem>
          <HandledItem dict={ntHgrEasy}>
            <p>
              HGR seems to be the <Dashed color={ntHgrEasy.col.text}>easier dataset to classify</Dashed>, which can be due to the relatively low diversity of subjects and backgrounds. In fact, learning approaches tend to have very high measurements.
            </p>
          </HandledItem>
          <HandledItem dict={ntUnetBest}>
            <p>
              In the ECU dataset, the results of {method_2} and {method_3} are relatively close, while <Dashed color={ntUnetBest.col.text}>{method_1} outperforms them by far</Dashed>.
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
