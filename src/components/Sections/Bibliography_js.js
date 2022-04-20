import React from 'react';
import styles from './styles.module.css';


// todo package? Read .bibtex file

// let tagCount = 1;

/**
 * Array containint referenced identifiers
 */
let references = [];

// Do et al. 2014 <a href="#do">[2]</a>

/*
function getTag() {
  let res = tagCount;
  tagCount = tagCount + 1;
  return res;
}*/

/**
 * Dictionary containing referenced identifiers coupled with their tags
 */
let tags = {};


let citations = {
  'ramirez' : 'Ramirez, G. A., Fuentes, O., Crites Jr, S. L., Jimenez, M., &amp; Ordonez, J. (2014). Color analysis of facial skin: Detection of emotional state. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition Workshops (pp. 468-473).',
  'do' : 'Do, T. T., Zhou, Y., Zheng, H., Cheung, N. M., &amp; Koh, D. (2014, August). Early melanoma diagnosis with mobile imaging. In 2014 36th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (pp. 6752-6757). IEEE.',
  'low' : 'Low, C. C., Ong, L. Y., Koo, V. C., &amp; Leow, M. C. (2020). Multi-audience tracking with RGB-D camera on digital signage. Heliyon, 6(9), e05107.',
  'nbrancati' : 'Brancati, N., De Pietro, G., Frucci, M., &amp; Gallo, L. (2017). Human skin detection through correlation rules between the YCb and YCr subspaces based on dynamic color clustering. Computer Vision and Image Understanding, 155, 33-42.',
  'skinny' : 'Tarasiewicz, T., Nalepa, J., &amp; Kawulok, M. (2020, October). Skinny: A lightweight U-net for skin detection and segmentation. In 2020 IEEE International Conference on Image Processing (ICIP) (pp. 2386-2390). IEEE.',
  'mcc' : 'Chicco, D., &amp; Jurman, G. (2020). The advantages of the Matthews correlation coefficient (MCC) over F1 score and accuracy in binary classification evaluation. BMC genomics, 21(1), 1-13.',
  'tdsd' : 'Zhu, Q., Wu, C. T., Cheng, K. T., &amp; Wu, Y. L. (2004, October). An adaptive skin model and its application to objectionable image filtering. In Proceedings of the 12th annual ACM international conference on Multimedia (pp. 56-63).',
  'ecu' : 'Phung, S. L., Bouzerdoum, A., &amp; Chai, D. (2005). Skin segmentation using color pixel classification: analysis and comparison. IEEE transactions on pattern analysis and machine intelligence, 27(1), 148-154.',
  'schmugge' : 'Schmugge, S. J., Jayaram, S., Shin, M. C., &amp; Tsap, L. V. (2007). Objective evaluation of approaches of skin detection using ROC analysis. Computer vision and image understanding, 108(1-2), 41-51.',
  'pratheepan' : 'Tan, W. R., Chan, C. S., Yogarajah, P., &amp; Condell, J. (2011). A fusion approach for efficient human skin detection. IEEE Transactions on Industrial Informatics, 8(1), 138-147.',
  'vpu' : 'Sanmiguel, J. C., &amp; Suja, S. (2013). Skin detection by dual maximization of detectors agreement for video monitoring. Pattern Recognition Letters, 34(16), 2102-2109.',
  'sfa' : 'Casati, J. P. B., Moraes, D. R., &amp; Rodrigues, E. L. L. (2013, June). SFA: A human skin image database based on FERET and AR facial images. In IX workshop de Visao Computational, Rio de Janeiro.',
  'hgr' : 'Kawulok, M., Kawulok, J., Nalepa, J., &amp; Smolka, B. (2014). Self-adaptive algorithm for segmenting skin regions. EURASIP Journal on Advances in Signal Processing, 2014(1), 1-22.',
  'abd' : 'Topiwala, A., Al-Zogbi, L., Fleiter, T., &amp; Krieger, A. (2019, October). Adaptation and evaluation of deep learning techniques for skin segmentation on novel abdominal dataset. In 2019 IEEE 19th International Conference on Bioinformatics and Bioengineering (BIBE) (pp. 752-759). IEEE.',
  'ignatov' : 'Ignatov, A., Byeoung-Su, K., Timofte, R., &amp; Pouget, A. (2021). Fast camera image denoising on mobile gpus with deep learning, mobile ai 2021 challenge: Report. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (pp. 2515-2524).',
}

/**
 * Whether a citation is referenced in the text.
 * 
 * @param {*} refName Name identifier to search in the list of citations
 * @returns False if the citation is not referenced, hence not
 * displayed in the Bibliography component; otherwise True.
 */
function isCited( refName ) {
  if (citations[refName] === undefined) {
    throw 'Name not defined in the citations list: '.concat(refName)
  }
  else {
    return references.includes(refName);
  }
}

/**
 * Generate a new tag number
 * @param refName Name identifier of the new reference
 * @returns New tag number
 */
function getTag( newTag ) {
  let res = references.length +1;
  references.push(newTag)
  return res;
}

/**
 * Reference a bibliography item in text.
 * 
 * @param name Name used to identify a citation from the bibliography
 * @returns Reference tag: <a href='#{name}'>{referenceTag}</a>
 */
export const Cite = ({ name }) => {
  let refTag;
  if (tags[name] === undefined) {
    // generate new key
    refTag = '[{}]'.replace('{}', String(getTag(name)));
    tags[name] = refTag;
  } else {
    // key already defined in tag dict, get it
    refTag = tags[name];
  }
  
  return <a href={'#'.concat(name)}>{refTag}</a>
}

/**
 * Generate the Bibliography component
 * @returns Ordered list containing referenced items of the bibliography
 */
export const Bibliography = () => {
  let bib = [];
  for (var i = 0; i < references.length; i++) {
    bib.push(references[i]);
  }

  let bibMap = Array.from(bib).map( ( item, i ) => <li id={item} key={i}> { citations[item] } </li>);

  return (
    <div className={styles.bibWrapper}>
      <ol style={{ textAlign: 'justify' }}>
        {bibMap}
      </ol>
    </div>
  );
}

