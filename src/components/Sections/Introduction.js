import React from 'react';
import styles from './styles.module.css';
import { Section, Center, Caption, Tooltip } from './utils'
import { Cite } from './Bibliography_js'
import clsx from 'clsx';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


let href = {
  doc: {
    thesis: "/doc/human-skin-detection-in-color-images.pdf"
  },
  img: {
    intro_ori: "/img/skin_det_ori3.jpg",
    intro_skin: "/img/skin_det_red3.png",
    applications_facial: "/img/applications_facial_analysis.png",
    applications_ads: "/img/applications_ads.png",
    applications_biomedical: "/img/applications_biomedical.png",
    limitations_clay: "/img/clay.png",
    limitations_wood: "/img/wood.jpg",
    limitations_lighting1: "/img/lighting_1.jpg",
    limitations_lighting2: "/img/lighting_2.png",
    approach: "/img/methodological-approach-vert.svg",
    approach_horiz: "/img/methodological-approach.svg",
  },
}


const Intro = () => {
  return (
    <Section>
      <h1 className={styles.centerText}>Human Skin Detection in Color Images</h1>
      <div className={styles.mySubtitle}>
        <p className={clsx("hero__subtitle ").concat(styles.centerText)} style={{ color: 'var(--ifm-color-gray-600)' }}>Thesis Overview</p>
        <a className={clsx("button button--primary")} href={href.doc.thesis} target="_blank">See full thesis</a>
      </div>
      <Center>
        <p className={clsx("col col--8 text--center margin-top--lg")}>
          The purpose of the thesis is to present a review of the <b>human skin detection</b> datasets and approaches of the state of the art, and then perform a comparative in-depth analysis of the most relevant methods on different databases.
    </p>
      </Center>

    </Section>
  );
}

const ImageSlider = () => {
  return (
    <Section size='lg'>
      <Center>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={href.img.intro_ori} 
          alt="The original image: a three-quarter shot featuring a pale-skinned girl with curly brown hair and a plain orange background." 
          title='Girl from Pratheepan dataset' />}
          itemTwo={<ReactCompareSliderImage src={href.img.intro_skin} 
          alt="Detected skin pixels: the skin regions are now completely red as the ground truth mask has been overlayed onto the original image using red pixels. Depending on the dataset, the regions countouring the mouth, ears, eyes, and other facial features may or may not represent pixels of skin and are often content of discussion in the academic world." 
          title='Skin pixels overlayed onto the original image' />}
          style={{
            display: "flex",
            width: "450px",
            maxWidth: "90vw",
            height: "auto"
          }}
        />
      </Center>
    </Section>
  );
}

const Applications = () => {
  return (
    <div className={clsx("row")}>
      <div className={clsx("col col--4 col--offset-1 margin-top--md")}>
        <h3 className={styles.centerText} >Applications</h3>
        <div className={styles.wrapList} >
          <ul>
            <li><b>Facial Analysis</b></li>
            <li>Gesture Analysis</li>
            <li><b>Biomedical</b></li>
            <li>
              <b className={styles.dottedUnderline} 
              data-tip="Infer audience demographics" 
              data-for="tip-ads">Advertisement</b>
              <Tooltip id="tip-ads">
                Infer audience demographics
              </Tooltip>
            </li>
            <li>Content Filter</li>
            <li>Video Surveillance</li>
            <li className={styles.dottedUnderline} 
            data-tip="Encrypt people identity in smart cities" 
            data-for="tip-privacy">
              Privacy Protection
              <Tooltip id="tip-privacy">
                Encrypt people identity in smart cities
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
      <div className={clsx("col col--6")}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-around' }} >
            <div>
              <Caption>Ramirez et al. 2014 <Cite name='ramirez' /></Caption>
              <img src={href.img.applications_facial} 
              style={{ maxWidth: '90%', paddingBottom: '1.5rem', maxHeight: '25vh' }} 
              alt='Skin detection is often an important step to analyze faces.' 
              title='Facial analysis' />
            </div>
            <div>
              <img src={href.img.applications_ads} 
              style={{ maxWidth: '90%', maxHeight: '25vh' }} 
              alt='In Digital Out-of-Home advertising, skin detection can be used to infer properties of the audience.' 
              title='Infer audience demographics in DOOH ads' />
              <Caption>Low et al. 2020 <Cite name='low' /></Caption>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-around' }}>
            <img src={href.img.applications_biomedical} 
            style={{ maxHeight: '100%' }} 
            alt='Biomedical applications include the early detection of skin cancers, such as melanoma.' 
            title='Skin cancer detection' />
            <Caption>Do et al. 2014 <Cite name='do' /></Caption>
          </div>
        </div>
      </div>
    </div>
  );
}

const Limitations = () => {
  return (
    <div className={clsx("row margin-top--xl ").concat(styles.reverseRow)} >
      <div className={clsx("col col--4 col--offset-2")}>
        <div className={clsx("row")} style={{flexWrap: 'nowrap', justifyContent: 'center'}} >
          <img src={href.img.limitations_clay} 
          style={{maxHeight: '20vh', padding: '0.5rem', minWidth: '0'}} 
          alt='Clay color is really similar to some skin tones.' 
          title='Clay' />
          <img src={href.img.limitations_wood} 
          style={{maxHeight: '20vh', padding: '0.5rem', minWidth: '0'}} 
          alt='Wood can assume similar color to some skin tones.' 
          title='Wood' />
        </div>
        <div className={clsx("row")} style={{flexWrap: 'nowrap', justifyContent: 'center'}}>
          <img src={href.img.limitations_lighting1} 
          style={{maxHeight: '20vh', padding: '0.5rem', minWidth: '0'}} 
          alt='Lighting can modify the image properties a lot. We, as humans do not perceive that much difference because our eyes are trained on these kinds of color transitions, but computers have trouble.' 
          title='Tricky lighting 1' />
          <img src={href.img.limitations_lighting2} 
          style={{maxHeight: '20vh', padding: '0.5rem', minWidth: '0'}} 
          alt='Lighting can modify the image properties a lot. We, as humans do not perceive that much difference because our eyes are trained on these kinds of color transitions, but computers have trouble.' 
          title='Tricky lighting 2' />
        </div>
      </div>
      <div className={clsx("col col--4")}>
        <h3 style={{textAlign: 'center'}}>Limitations</h3>
        <div className={styles.wrapList}>
          <ul>
            <li>Materials with <b>skin-like colors</b></li>
            <li>Wide range of <b>skin tones</b></li>
            <li><b>Illumination</b></li>
            <li>Cameras color science</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export const MethodologicalApproach = () => {
  return (
    <Center>
      <div className={clsx("margin-top--lg ").concat(styles.invert)} >
        <img src={href.img.approach}
        style={{margin: "1rem 0 var(--ifm-paragraph-margin-bottom)"}}
        alt="In this thesis the significance and limitations of skin detection have been addressed. A review of public datasets available in the domain and an analysis of state-of-the-art approaches has been presented, including a new proposed taxonomy. Three different state-of-the-art methods have been thoroughly examined implemented and validated in respect to the original papers, when possible. An evaluation of the chosen approaches in different settings has been presented, alongside a discussion on the metrics used in the domain.Finally, the results have been thoroughly discussed through data and figures."
        title='Approach taken at exploring the topic' />
      </div>
    </Center>
  );
}


export const Introduction = () => {
  return (
    <div>
      <Intro />
      <ImageSlider />
      <p>
        Skin detection is the process of <b>discriminating skin and non-skin pixels</b>. It is
      quite a challenging process because of the large color diversity that objects and
      human skin can assume, and scene properties such as lighting and background.
      </p>
      <Section>
        <Applications />
        <Limitations />
      </Section>
    </div>
  );
}