import React from 'react';
import { Cite } from './Bibliography_js'
import clsx from 'clsx';


export const Conclusion = () => {
  return (
    <div className={clsx("row")} >
      <div className={clsx("col col--6")} >
        <h2>Conclusion</h2>
        <ul>
          <li><em>Semantic features</em> extraction got <b>CNN</b> an edge</li>
          <li><b>Rule-based</b> method proved to be <em>really fast</em> but struggled on darker skin tones</li>
          <li><b>Statistical</b> method was prone to <em>false positives</em></li>
          <li>Involving <b>multiple metrics</b> debunked <em>over-optimistic results</em></li>
          <li>Data quality is important for performance</li>
        </ul>
      </div>
      <div className={clsx("col col--6")} >
        <h2>Future Work</h2>
        <ul>
          <li>Improve public data quality</li>
          <li>Vision transformers</li>
          <li>U-Nets on mobile devices <Cite name='ignatov'/></li>
        </ul>
      </div>
    </div>
  );
}
