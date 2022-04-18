import React from 'react';
import styles from './styles.module.css';
import {Tooltip,handleOver,handleOut,notesWrapperStyle,Dashed,red,green} from './utils'

// TODO: define colors, maybe from Infima!

// TODO: text notes under table as a LIST WRAP?
// Or a sort of Carousel

const ntSchStd = {
  cls: 'note-sch-std',
  col: red,
};

const ntHgrEasy = 'note-hgr-easy';
const ntHgrEasyColB = '#73eb7a50';
const ntHgrEasyColT = '#73eb7aFF';
//const ntHgrEasyColT = 'var(--greenT)';

export const SingleDatasets = () => {
  return (
    <div>
      <div class="table-wrapper">
        <Tooltip id="tip-dprs">
          <img src="/img/dprs.svg" alt='Dprs = sqrt{(1-PR)^2 + (1-RE)^2 + (1-SP)^2}' title='Facial analysis' style={{filter: 'invert(100%)', minWidth: '100%'}} />
          <p>
          Where PR is Precision, RE is Recall, and SP is Specificity; and (1,1,1) the ideal ground truth.
          </p>
        </Tooltip>
        <table class="results">
          <thead>
            <tr>
              <td />
              <th scope="col" class="table-label">Method \ Database</th>
              <th scope="col">ECU</th>
              <th scope="col">HGR</th>
              <th scope="col">SCHMUGGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowspan="3" scope="rowgroup" class='th-metric-up' style={{paddingRight: '0.3rem !important'}}>F<sub>1</sub></th>
              <th scope="row">U-Net</th>
              <td><b>0.9133 ± 0.08</b></td>
              <td className={ntHgrEasy}><b>0.9848 ± 0.02</b></td>
              <td className={ntSchStd.cls}><b>0.6121 ± 0.45</b></td>
            </tr>
            <tr>
              <th scope="row">Statistical</th>
              <td><u>0.6980 ± 0.22</u></td>
              <td className={ntHgrEasy}><u>0.9000 ± 0.15</u></td>
              <td className={ntSchStd.cls}><u>0.5098 ± 0.39</u></td>
            </tr>
            <tr>
              <th scope="row">Thresholding</th>
              <td>0.6356 ± 0.24</td>
              <td className={ntHgrEasy}>0.7362 ± 0.27</td>
              <td className={ntSchStd.cls}>0.4280 ± 0.34</td>
            </tr>
            <tr>
              <th rowspan="3" scope="rowgroup" class='th-metric-up'>IoU</th>
              <th scope="row">U-Net</th>
              <td><b>0.8489 ± 0.12</b></td>
              <td className={ntHgrEasy}><b>0.9705 ± 0.03</b></td>
              <td className={ntSchStd.cls}><b>0.5850 ± 0.44</b></td>
            </tr>
            <tr>
              <th scope="row">Statistical</th>
              <td><u>0.5751 ± 0.23</u></td>
              <td className={ntHgrEasy}><u>0.8434 ± 0.19</u></td>
              <td className={ntSchStd.cls}><u>0.4303 ± 0.34</u></td>
            </tr>
            <tr>
              <th scope="row">Thresholding</th>
              <td>0.5088 ± 0.25</td>
              <td className={ntHgrEasy}>0.6467 ± 0.30</td>
              <td className={ntSchStd.cls}>0.3323 ± 0.28</td>
            </tr>
            <tr>
              <th rowspan="3" scope="rowgroup" class='th-metric-down'>D<sub class='underline-dots' data-tip="Todo" data-for="tip-dprs">prs</sub></th>
              <th scope="row">U-Net</th>
              <td><b>0.1333 ± 0.12</b></td>
              <td className={ntHgrEasy}><b>0.0251 ± 0.03</b></td>
              <td className={ntSchStd.cls}><b>0.5520 ± 0.64</b></td>
            </tr>
            <tr>
              <th scope="row">Statistical</th>
              <td><u>0.4226 ± 0.27</u></td>
              <td className={ntHgrEasy}><u>0.1524 ± 0.19</u></td>
              <td className={ntSchStd.cls}><u>0.7120 ± 0.54</u></td>
            </tr>
            <tr>
              <th scope="row">Thresholding</th>
              <td>0.5340 ± 0.32</td>
              <td className={ntHgrEasy}>0.3936 ± 0.36</td>
              <td className={ntSchStd.cls}>0.8148 ± 0.48</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={notesWrapperStyle}>
        <ul>
          <li onMouseOver={(e) => handleOver(ntSchStd.cls, ntSchStd.col.bg, e)} onMouseOut={(e) => handleOut(ntSchStd.cls, e)}>
            <p>
            Schmugge presents <span className={styles.underlineDashed} style={{textDecorationColor: ntSchStd.col.text}}>high standard deviations</span> that can be attribuited to its diverse content, featuring different subjects, backgrounds, and lighting.
            </p>
          </li>
          <li onMouseOver={(e) => handleOver(ntHgrEasy, ntHgrEasyColB, e)} onMouseOut={(e) => handleOut(ntHgrEasy, e)}>
            <p>
            HGR seems to be the <Dashed color={ntHgrEasyColT}>easier dataset to classify</Dashed>, which can be due to the relatively low diversity of subjects and backgrounds. In fact, learning approaches tend to have very high measurements.
            </p>
          </li>
          <li>
            In the ECU dataset, the results of the histogram and thresholding approaches are relatively close, while the CNN outperforms them by far.
          </li>
        </ul>
      </div>
    </div>
  );
}
