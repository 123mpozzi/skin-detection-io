import React from 'react';
import { Tooltip } from './utils'
import { dottedStyle } from '../Tables/utils';


const Intro = () => {
  let tooltipStyle = {maxWidth: 'min(80vw, 500px)'};
  return (
    <div>
      
    <Tooltip id="tip-single">
      <p style={tooltipStyle}>
      For example, with ECU as the dataset, it means that the skin detector is eventually trained using the training set of ECU, and then tested on the test set of ECU.
      </p>
    </Tooltip>

    <p>In <b style={dottedStyle} 
    data-tip="For example, with ECU as the dataset, it means that the skin detector is trained using the training set of ECU, and then tested on the test set of ECU" 
    data-for="tip-single">single evaluations</b>
    , methods are eventually trained on the training set (in the case of trainable methods), and then predictions are performed on the test set.
    </p>

    <Tooltip id="tip-cross">
      <p style={tooltipStyle}>
      For example, with ECU as the training dataset and HGR as the testing dataset, it means that the skin detector is trained using the training set of ECU, and then tested on all the HGR dataset.
      </p>
    </Tooltip>

    <p>In <b style={dottedStyle} 
    data-tip="For example, with ECU as the training dataset and HGR as the testing dataset, it means that the skin detector is trained using the training set of ECU, and then tested on all the HGR dataset." 
    data-for="tip-cross">cross evaluations</b>
    , only trainable approaches are analyzed.
    Detectors are trained on the training set, and then predictions are performed on all the images of every other datasets.<br />
    The expression <em>HGR on ECU</em> describes the situation in which the evaluation is performed by using HGR as the training set and ECU as the test set.
    </p>

    <p>
    Initially, the metrics are measured for all the instances, then the average and population standard deviation for each metric are computed.
    </p>
  </div>
  );
}


export const Results = () => {
  return (
    <div>
      <Intro />
    </div>
  );
}
