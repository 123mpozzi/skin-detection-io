import React from 'react';
import {Tooltip} from './utils'


/**
 * Swap the content of '#dataset-desc' with the content referenced by href.
 * Change selected item in Taxonomy.
 */
function handleClick(href, e) {
  e.preventDefault();
  // Swap content
  href = href.substring(1);
  var newContent = document.getElementById(href).innerHTML;
  document.getElementById("dataset-desc").innerHTML = newContent;
}


/**
 * Create a clickable block
 */
const Item = ({ children, href }) => {
  return <a href={href} onClick={(e) => handleClick(href, e)} onMouseOver={(e) => handleClick(href, e)} >{children}</a>
}


export const SingleDatasets = () => {
  return (
    <table class="results">
      <Tooltip id="tip-dprs">
        <img src="/img/dprs.svg" alt='Dprs = sqrt{(1-PR)^2 + (1-RE)^2 + (1-SP)^2}' title='Facial analysis' style={{filter: 'invert(100%)', minWidth: '100%'}} />
        <p>
        Where PR is Precision, RE is Recall, and SP is Specificity; and (1,1,1) the ideal ground truth.
        </p>
      </Tooltip>
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
          <td><b>0.9848 ± 0.02</b></td>
          <td><b>0.6121 ± 0.45</b></td>
        </tr>
        <tr>
          <th scope="row">Statistical</th>
          <td><u>0.6980 ± 0.22</u></td>
          <td><u>0.9000 ± 0.15</u></td>
          <td><u>0.5098 ± 0.39</u></td>
        </tr>
        <tr>
          <th scope="row">Thresholding</th>
          <td>0.6356 ± 0.24</td>
          <td>0.7362 ± 0.27</td>
          <td>0.4280 ± 0.34</td>
        </tr>
        <tr>
          <th rowspan="3" scope="rowgroup" class='th-metric-up'>IoU</th>
          <th scope="row">U-Net</th>
          <td><b>0.8489 ± 0.12</b></td>
          <td><b>0.9705 ± 0.03</b></td>
          <td><b>0.5850 ± 0.44</b></td>
        </tr>
        <tr>
          <th scope="row">Statistical</th>
          <td><u>0.5751 ± 0.23</u></td>
          <td><u>0.8434 ± 0.19</u></td>
          <td><u>0.4303 ± 0.34</u></td>
        </tr>
        <tr>
          <th scope="row">Thresholding</th>
          <td>0.5088 ± 0.25</td>
          <td>0.6467 ± 0.30</td>
          <td>0.3323 ± 0.28</td>
        </tr>
        <tr>
          <th rowspan="3" scope="rowgroup" class='th-metric-down'>D<sub class='underline-dots' data-tip="Todo" data-for="tip-dprs">prs</sub></th>
          <th scope="row">U-Net</th>
          <td><b>0.1333 ± 0.12</b></td>
          <td><b>0.0251 ± 0.03</b></td>
          <td><b>0.5520 ± 0.64</b></td>
        </tr>
        <tr>
          <th scope="row">Statistical</th>
          <td><u>0.4226 ± 0.27</u></td>
          <td><u>0.1524 ± 0.19</u></td>
          <td><u>0.7120 ± 0.54</u></td>
        </tr>
        <tr>
          <th scope="row">Thresholding</th>
          <td>0.5340 ± 0.32</td>
          <td>0.3936 ± 0.36</td>
          <td>0.8148 ± 0.48</td>
        </tr>
      </tbody>
    </table>
  );
}
