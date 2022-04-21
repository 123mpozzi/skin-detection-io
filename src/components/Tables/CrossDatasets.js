import React from 'react';
import { Tooltip, href, Section } from '../Sections';
import { notesWrapperStyle, Dashed, red, green, blue, HandledItem, metrics, dottedStyle } from './utils'
import styles from './styles.module.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const ntUnetBad = {
  cls: 'note-unet-bad',
  col: red,
};

const ntF1IOU = {
  cls: 'note-f1-iou',
  col: green,
};

const ntNiceF1 = {
  cls: 'note-f1-good',
  col: blue,
};


export const CrossDatasets = ({ subsectionMargin }) => {
  if (subsectionMargin === undefined) {
    subsectionMargin = 'lg';
  }

  const method_1 = 'U-Net'
  const method_2 = 'Statistical'

  return (
    <div>
      <div className={styles.tableWrapper}>
        <Tooltip id="tip-f1iou">
          Taken into consideration to get a better idea of the number of True Positives compared to False Positives and False Negatives
        </Tooltip>
        <table className={[styles.noBoldHeaders, styles.stable].join(' ')}>
          <thead>
            <tr>
              <td rowSpan={2} scope="rowgroup" />
              <th scope="col" className={styles.pointRight}>Training</th>
              <th colSpan={2} scope="colgroup">ECU</th>
              <th colSpan={2} scope="colgroup">HGR</th>
              <th colSpan={2} scope="colgroup">SCHMUGGE</th>
            </tr>
            <tr>
              <th scope="col" className={styles.pointRight}>Testing</th>
              <th scope="col">HGR</th>
              <th scope="col">SCHMUGGE</th>
              <th scope="col">ECU</th>
              <th scope="col">SCHMUGGE</th>
              <th scope="col">ECU</th>
              <th scope="col">HGR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={2} scope="rowgroup" className={styles.metricUp}>{metrics.f1}</th>
              <th scope="row">{method_1}</th>
              <td><b>0.9308 ± 0.11</b></td>
              <td><b>0.4625 ± 0.41</b></td>
              <td><b>0.7252 ± 0.20</b></td>
              <td className={ntUnetBad.cls}>0.2918 ± 0.31</td>
              <td><b>0.6133 ± 0.21</b></td>
              <td className={ntNiceF1.cls}><b>0.8106 ± 0.19</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td>0.5577 ± 0.29</td>
              <td>0.3319 ± 0.28</td>
              <td>0.4279 ± 0.19</td>
              <td className={ntUnetBad.cls}><b>0.4000 ± 0.32</b></td>
              <td>0.4638 ± 0.23</td>
              <td>0.5060 ± 0.25</td>
            </tr>
            <tr>
              <th rowSpan={2} scope="rowgroup" className={styles.metricUp}>{metrics.iou}</th>
              <th scope="row">{method_1}</th>
              <td><b>0.8851 ± 0.15</b></td>
              <td><b>0.3986 ± 0.37</b></td>
              <td><b>0.6038 ± 0.22</b></td>
              <td className={ntUnetBad.cls}>0.2168 ± 0.25</td>
              <td><b>0.4754 ± 0.22</b></td>
              <td><b>0.7191 ± 0.23</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td>0.4393 ± 0.27</td>
              <td>0.2346 ± 0.21</td>
              <td>0.2929 ± 0.17</td>
              <td className={ntUnetBad.cls}><b>0.2981 ± 0.24</b></td>
              <td>0.3318 ± 0.20</td>
              <td>0.3752 ± 0.22</td>
            </tr>
            <tr>
              <th rowSpan={2} scope="rowgroup" className={styles.metricDown}>{metrics.dprs}</th>
              <th scope="row">{method_1}</th>
              <td><b>0.1098 ± 0.15</b></td>
              <td><b>0.7570 ± 0.56</b></td>
              <td><b>0.3913 ± 0.26</b></td>
              <td className={ntUnetBad.cls}><b>0.9695 ± 0.44</b></td>
              <td><b>0.5537 ± 0.27</b></td>
              <td><b>0.2846 ± 0.27</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td>0.5701 ± 0.29</td>
              <td>1.0477 ± 0.35</td>
              <td>0.8830 ± 0.23</td>
              <td className={ntUnetBad.cls}>1.0219 ± 0.42</td>
              <td>0.7542 ± 0.30</td>
              <td>0.6523 ± 0.27</td>
            </tr>
            <tr>
              <th rowSpan={2} scope="rowgroup" className={styles.metricDown} ><em>F<sub>1</sub><span style={dottedStyle} data-tip="Taken into consideration to get a better idea of the number of True Positives compared to False Positives and False Negatives" data-for="tip-f1iou"> - IoU</span></em>
              </th>
              <th scope="row">{method_1}</th>
              <td><b>0.0457</b></td>
              <td><b>0.0639</b></td>
              <td><b>0.1214</b></td>
              <td className={ntUnetBad.cls}><b>0.0750</b></td>
              <td className={ntF1IOU.cls}>0.1379</td>
              <td><b>0.0915</b></td>
            </tr>
            <tr>
              <th scope="row">{method_2}</th>
              <td>0.1184</td>
              <td>0.0973</td>
              <td>0.1350</td>
              <td className={ntUnetBad.cls}>0.1019</td>
              <td className={ntF1IOU.cls}><b>0.1320</b></td>
              <td>0.1308</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Section size={subsectionMargin}>
        <div className={notesWrapperStyle}>
          <ul>
            <HandledItem dict={ntUnetBad}>
              <p>
                Using HGR as the training set and predicting over Schmugge, <Dashed color={ntUnetBad.col.text}>{method_2} outperforms {method_1}</Dashed>, especially in the {metrics.f1} score. While {method_2} generally performs better than {method_1}, it also includes a lot of False Positives, as the {metrics.f1iou} and the {metrics.dprs} metrics indicate. The latter is particularly bad in both cases, evidencing a big distance between the ideal ground truths and the predictions.
              </p>
            </HandledItem>
            <HandledItem dict={ntF1IOU}>
              <p>
                Training on Schmugge and predicting on ECU has the {method_1} describing a slightly worse {metrics.f1iou}, suggesting the <Dashed color={ntF1IOU.col.text}>presence of False Positives and False Negatives</Dashed>.
              </p>
            </HandledItem>
            <HandledItem dict={ntNiceF1}>
              <p>
                {method_1} exceeds an <Dashed color={ntNiceF1.col.text}>{metrics.f1} score of 80</Dashed> in the case of Schmugge as the training set and HGR as the prediction set despite the size of the training set, which is not huge.
              </p>
            </HandledItem>
            <li>
              <p>
                Apart from a few expections, {method_1} still dominates.
              </p>
            </li>
          </ul>
        </div>
      </Section>
      <Section width='10'>
        <h2 style={{textAlign: 'center', fontWeight: 'normal'}} >Significant Outcomes</h2>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{display: 'inline-block', flexDirection: 'column'}}>
            <Zoom>
            <img src={href.img.results_cross} 
                  alt='Context for the following paragraphs.' 
                  title='Notable outcomes' />
            </Zoom>
            <div style={{display: 'flex', justifyContent: 'space-around', maxWidth: 'inherit'}}>
              <span>(a)</span>
              <span>(b)</span>
              <span>(c)</span>
              <span>(d)</span>
            </div>
          </div>
        </div>
        <p style={{textAlign: 'center'}}>
        Skin detection results. (a) input image; (b) ground truth; (c) {method_1}; (d) {method_2}
        </p>
        <div className={notesWrapperStyle}>
          <ul>
            <li>
              <p>
              It can be noticed how {method_2} tends to exaggerate at classifying skin pixels in some cases, confirming the above intuitions on the statistical method having a <b>lot of False Positives</b>.
              </p>
            </li>
            <li>
              <p>
              The third row (HGR on Schmugge) is part of the datasets combination in which {method_2} outperforms {method_1}. {method_2} reports a lot of False Positives, but also a lot of True Positives, which {method_1} struggles to identify. This kind of situation is why {metrics.dprs} is better on {method_1} despite {metrics.f1} and {metrics.iou} are worse: {metrics.dprs} formula is partly driven by <b>False Negatives</b> (via Specificity), contrary to the other two metrics.
              </p>
            </li>
            <li>
              <p>
              The last row (HGR on Schmugge) is also part of the same datasets combination and describes a similar situation: {method_1} fails at labeling several skin pixels, especially on very lit regions, while {method_2} overdoes it. This image represents the <b>high complexity and diversity</b> of the Schmugge content.
              </p>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
