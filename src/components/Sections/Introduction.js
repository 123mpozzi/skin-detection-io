import React from 'react';
import styles from './styles.module.css';
import { Section, Center, Caption, Tooltip } from './utils'
import { Cite, Bibliography } from './Bibliography_js'
import clsx from 'clsx';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


let href = {
  doc: {
    thesis: "/doc/human-skin-detection-in-color-images.pdf"
  },
  img: {
    intro_ori: "/img/skin_det_ori3.jpg",
    intro_skin: "/img/skin_det_red3.png",
  },
  bib: {
    low: {
      hash: '#low',
      id: 1,
    },
  },
}


const Intro = () => {
  return (
    <Section>
      <h1 className={styles.textCenter}>Human Skin Detection in Color Images</h1>
      <div className={styles.mySubtitle}>
        <p className={clsx("hero__subtitle ").concat(styles.textCenter)} style={{ color: 'var(--ifm-color-gray-600)' }}>Thesis Overview</p>
        <a class={clsx("button button--primary")} href={href.doc.thesis} target="_blank">See full thesis</a>
      </div>
      <Center>
        <p class={clsx("col col--8 text--center margin-top--lg")}>
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
          itemOne={<ReactCompareSliderImage src={href.img.intro_ori} alt="The original image: a three-quarter shot featuring a pale-skinned girl with curly brown hair and a plain orange background." title='Girl from Pratheepan dataset' />}
          itemTwo={<ReactCompareSliderImage src={href.img.intro_skin} alt="Detected skin pixels: the skin regions are now completely red as the ground truth mask has been overlayed onto the original image using red pixels. Depending on the dataset, the regions countouring the mouth, ears, eyes, and other facial features may or may not represent pixels of skin and are often content of discussion in the academic world." title='Skin pixels overlayed onto the original image' />}
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
    <div class="row">
      <div class="col col--4 col--offset-1 margin-top--md">
        <h3 style={{ textAlign: 'center' }} >Applications</h3>
        <div class="list-wrap" >
          <ul>
            <li><b>Facial Analysis</b></li>
            <li>Gesture Analysis</li>
            <li><b>Biomedical</b></li>
            <li>
              <b class='underline-dots' data-tip="Infer audience demographics" data-for="tip-ads">Advertisement</b>
              <Tooltip id="tip-ads">
                Infer audience demographics
          </Tooltip>
            </li>
            <li>Content Filter</li>
            <li>Video Surveillance</li>
            <li class='underline-dots' data-tip="Encrypt people identity in smart cities" data-for="tip-privacy">
              Privacy Protection
          <Tooltip id="tip-privacy">
                Encrypt people identity in smart cities
          </Tooltip>
            </li>
          </ul>
        </div>
      </div>
      <div class="col col--6">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-around' }} >
            <div>
              <Caption>Ramirez et al. 2014 <Cite name='ramirez'/></Caption>
              <img src="/img/applications_facial_analysis.png" style={{ maxWidth: '90%', paddingBottom: '1.5rem', maxHeight: '25vh' }} alt='Skin detection is often an important step to analyze faces.' title='Facial analysis' />
            </div>
            <div>
              <img src="/img/applications_ads.png" style={{ maxWidth: '90%', maxHeight: '25vh' }} alt='In Digital Out-of-Home advertising, skin detection can be used to infer properties of the audience.' title='Infer audience demographics in DOOH ads' />
              <Caption>Low et al. 2020 <Cite name='low'/></Caption>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'space-around' }}>
            <img src="/img/applications_biomedical.png" style={{ maxHeight: '100%' }} alt='Biomedical applications include the early detection of skin cancers, such as melanoma.' title='Skin cancer detection' />
            <Caption>Do et al. 2014 <Cite name='do'/></Caption>
          </div>
        </div>
      </div>
    </div>
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
      <Applications />
      <Bibliography />
    </div>
  );
}
