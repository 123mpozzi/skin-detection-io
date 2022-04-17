import React from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({children, id}) => (
  <ReactTooltip id={id} place="top" effect="solid" border borderColor="var(--ifm-color-primary)" >
    <div style={{maxWidth: 'min(70vw, 500px)'}} >
      {children}
    </div>
  </ReactTooltip>
)


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


export default function DatasetTable() {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Year</th>
        <th>Images</th>
        <th>Shot Type</th>
        <th class='underline-dots' data-tip="Extracted from the original papers or eventual labels" data-for="tip-iskintones">Skin Tones
          <Tooltip id="tip-iskintones">
            Citations from the original papers or eventual labels
          </Tooltip></th>
      </tr>
      <tr>
        <td><Item href="#dataset-abd">abd-skin</Item></td>
        <td>2019</td>
        <td>1400</td>
        <td>abdomen</td>
        <td>african, indian, hispanic, caucasian, asian</td>
      </tr>
      <tr>
        <td><Item href="#dataset-hgr">HGR</Item></td>
        <td>2014</td>
        <td>1558</td>
        <td>hand</td>
        <td>-</td>
      </tr>
      <tr>
        <td><Item href="#dataset-sfa">SFA</Item></td>
        <td>2013</td>
        <td>1118</td>
        <td>face</td>
        <td>asian, caucasian, african</td>
      </tr>
      <tr>
        <td><Item href="#dataset-vpu">VPU</Item></td>
        <td>2013</td>
        <td>285</td>
        <td>full body</td>
        <td>-</td>
      </tr>
      <tr>
        <td><Item href="#dataset-pratheepan">Pratheepan</Item></td>
        <td>2012</td>
        <td>78</td>
        <td>full body</td>
        <td>-</td>
      </tr>
      <tr>
        <td><Item href="#dataset-schmugge" >Schmugge</Item></td>
        <td>2007</td>
        <td>845</td>
        <td>face</td>
        <td>labels: light, medium, dark</td>
      </tr>
      <tr>
        <td><Item href="#dataset-ecu">ECU</Item></td>
        <td>2005</td>
        <td>3998</td>
        <td>full body</td>
        <td>whitish, brownish, yellowish, and darkish</td>
      </tr>
      <tr>
        <td><Item href="#dataset-tdsd">TDSD</Item></td>
        <td>2004</td>
        <td>555</td>
        <td>full body</td>
        <td>different ethnic groups</td>
      </tr>
    </table>
  );
}
