import React from 'react';
import {Tooltip} from './utils'


function handleClick(e) {
  e.preventDefault();
  console.log(e);
  // Change background
  e.target.style.setProperty('background', '#0000', 'important');
}

export const CrossDatasets = () => {
  const method_1 = 'U-Net'
  const method_2 = 'Statistical'

  return (
    <table class="results">
      <Tooltip id="tip-f1iou">
        Taken into consideration to get a better idea of the number of True Positives compared to False Positives and False Negatives
      </Tooltip>
      <thead>
        <tr>
          <td rowspan="2" scope="rowgroup" />
          <th scope="col" class="point-right">Training</th>
          <th colspan="2" scope="colgroup">ECU</th>
          <th colspan="2" scope="colgroup">HGR</th>
          <th colspan="2" scope="colgroup">SCHMUGGE</th>
        </tr>
        <tr>
          <th scope="col" class="point-right">Testing</th>
          <th scope="col">HGR</th>
          <th scope="col">SCHMUGGE</th>
          <th scope="col">ECU</th>
          <th scope="col">SCHMUGGE</th>
          <th scope="col">ECU</th>
          <th scope="col">HGR</th>
        </tr>
      </thead>
      <tbody>
        <tr class='rowspan'>
          <th rowspan="2" scope="rowgroup" class='th-metric-up'>F<sub>1</sub></th>
          <th scope="row">{method_1}</th>
          <td><b>0.9308 ± 0.11</b></td>
          <td><b>0.4625 ± 0.41</b></td>
          <td><b>0.7252 ± 0.20</b></td>
          <td onMouseOver={(e) => handleClick(e)}>0.2918 ± 0.31</td>
          <td><b>0.6133 ± 0.21</b></td>
          <td><b>0.8106 ± 0.19</b></td>
        </tr>
        <tr>
          <th scope="row">{method_2}</th>
          <td>0.5577 ± 0.29</td>
          <td>0.3319 ± 0.28</td>
          <td>0.4279 ± 0.19</td>
          <td><b>0.4000 ± 0.32</b></td>
          <td>0.4638 ± 0.23</td>
          <td>0.5060 ± 0.25</td>
        </tr>
        <tr class='rowspan'>
          <th rowspan="2" scope="rowgroup" class='th-metric-up'>IoU</th>
          <th scope="row">{method_1}</th>
          <td><b>0.8851 ± 0.15</b></td>
          <td><b>0.3986 ± 0.37</b></td>
          <td><b>0.6038 ± 0.22</b></td>
          <td>0.2168 ± 0.25</td>
          <td><b>0.4754 ± 0.22</b></td>
          <td><b>0.7191 ± 0.23</b></td>
        </tr>
        <tr>
          <th scope="row">{method_2}</th>
          <td>0.4393 ± 0.27</td>
          <td>0.2346 ± 0.21</td>
          <td>0.2929 ± 0.17</td>
          <td><b>0.2981 ± 0.24</b></td>
          <td>0.3318 ± 0.20</td>
          <td>0.3752 ± 0.22</td>
        </tr>
        <tr class='rowspan'>
          <th rowspan="2" scope="rowgroup" class='th-metric-down'>D<sub>prs</sub></th>
          <th scope="row">{method_1}</th>
          <td><b>0.1098 ± 0.15</b></td>
          <td><b>0.7570 ± 0.56</b></td>
          <td><b>0.3913 ± 0.26</b></td>
          <td><b>0.9695 ± 0.44</b></td>
          <td><b>0.5537 ± 0.27</b></td>
          <td><b>0.2846 ± 0.27</b></td>
        </tr>
        <tr>
          <th scope="row">{method_2}</th>
          <td>0.5701 ± 0.29</td>
          <td>1.0477 ± 0.35</td>
          <td>0.8830 ± 0.23</td>
          <td>1.0219 ± 0.42</td>
          <td>0.7542 ± 0.30</td>
          <td>0.6523 ± 0.27</td>
        </tr>
        <tr class='rowspan'>
          <th rowspan="2" scope="rowgroup" class='th-metric-down' >F<sub>1</sub><span class='underline-dots' data-tip="Taken into consideration to get a better idea of the number of True Positives compared to False Positives and False Negatives" data-for="tip-f1iou"> - IoU</span>
          </th>
          <th scope="row">{method_1}</th>
          <td><b>0.0457</b></td>
          <td><b>0.0639</b></td>
          <td><b>0.1214</b></td>
          <td><b>0.0750</b></td>
          <td>0.1379</td>
          <td><b>0.0915</b></td>
        </tr>
        <tr>
          <th scope="row">{method_2}</th>
          <td>0.1184</td>
          <td>0.0973</td>
          <td>0.1350</td>
          <td>0.1019</td>
          <td><b>0.1320</b></td>
          <td>0.1308</td>
        </tr>
      </tbody>
    </table>
  );
}
