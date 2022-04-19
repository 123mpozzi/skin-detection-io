import React from 'react';
import styles from './styles.module.css';
import { Section, Center, Caption, Tooltip } from './utils'
import { Cite } from './Bibliography_js'
import clsx from 'clsx';


let href = {
  url: {
    implementation_thresholding: "https://github.com/123mpozzi/nbrancati",
    implementation_statistical: "https://github.com/123mpozzi/skin-statistical",
    implementation_unet: "https://github.com/123mpozzi/skinny",
  },
  img: {
    octocat: "/img/octocat.svg",
    thresh_trapeziaparams: "/img/trapezia_params.png",
    stat_histogram_ori: "/img/skin_det_ori3.jpg",
    stat_histogram_res: "/img/3d_hist.png",
    stat_math_probability: "/img/probability.svg",
    stat_math_threshold: "/img/probability_thresh.svg",
    unet_architecture: "/img/skinny_arch.png",
    unet_inception1: "/img/inception1.png",
    unet_inception2: "/img/inception2.png",
    unet_inception3: "/img/inception3.png",
    unet_denseblock: "/img/dense.svg",
  }
}

/**
 * Clickable Octocat logo pointing to the given string
 */
const Octocat = ({ repo }) => {
  return (<div className={[styles.invert, styles.octocat].join(" ")}>
      <a href={repo}>
        <img src={href.img.octocat}
          alt='GitHub logo.'
          title='Go to implementation' />
      </a>
    </div>
  );
}

/**
 * Title with Octocat link
 * @param title Title to show in HTML page
 * @param repo Link to the GitHub repository
 */
const OctocatTitle = ({ title, repo }) => {
  return (<div className={styles.octocatTitle}>
      <h2>{title}</h2>
      <Octocat repo={repo} />
    </div>
  );
}


const Intro = () => {
  return (
    <Section>
      <p>
      <em>Thresholding</em>, <em>Statistical</em>, and <em>Deep Learning</em> have been the chosen approaches.<br />
      The first to demonstrate whether <em>simple rules</em> can achieve powerful results; and the latter two to compare how differently the models behave and generalize, and whether the capabilities of a CNN to <em>extract semantic features</em> can give an advantage.
      </p>
    </Section>
  );
}


export const Thresholding = () => {
  return (
    <Section>
      <OctocatTitle title="Dynamic Thresholding" repo={href.url.implementation_thresholding} />
      <div className={clsx("row margin-top--lg")} >
        <div className={clsx("col col--6")} >
          <Center>
            <div>
              <h3 className={clsx("margin-left--md ").concat(styles.nobold)}>Algorithm Overview</h3>
              <ol className={styles.spacedList}>
                <li>Input image RGB to YCbCr</li>
                <li>Cr<sub>max</sub> Cb<sub>min</sub> computation</li>
                <li>Pixel-wise computation of the correlation rules parameters</li>
                <li>Pixel-wise correlation rules check</li>
              </ol>
            </div>
          </Center>
        </div>
        <div className={clsx("col col--6")}>
          <Center>
            <div className={styles.invert}>
              <img src={href.img.thresh_trapeziaparams}
              style={{width: "100%", maxWidth: "450px"}}
              alt='Visualization of how some parameters are computed with the trapezia to provide a better context to the following paragraphs.'
              title='Computation of the correlation rules parameters' />
              <Caption>Brancati et al. 2017 <Cite name='nbrancati' /></Caption>
            </div>
          </Center>
        </div>
      </div>
      <p>
      The skin pixels clusters assume a trapezoidal shape in the YCb and YCr color subspaces. Moreover, the shape and size of the trapezium vary according to many factors, such as the illumination conditions. In high illumination conditions, the base of the trapezium results larger.
      </p>
      <p>
      Besides, the chrominance components of a skin pixel P with coordinates (P<sub>Y</sub>, P<sub>Cb</sub>, P<sub>Cr</sub>) in the YCbCr space exhibit the following behavior: the further is the (P<sub>Y</sub>, P<sub>Cr</sub>) point from the longer base of the trapezium in the YCr subspace, the further is the (P<sub>Y</sub>, P<sub>Cb</sub>) point from the longer base of the trapezium in the YCb subspace, and vice versa.
      </p>
      <p>
      The aforementioned observations are the base of the method: it tries to define image-specific trapeziums in the YCb and YCr color subspaces and then verifies that the correlation rules between the two subspaces reflect the inversely proportional behavior of the chrominance components.
      </p>
    </Section>
  );
}


export const Statistical = () => {
  return (
    <Section>
      <OctocatTitle title="Statistical" repo={href.url.implementation_statistical} />
      <div className={clsx("row")} >
        <div className={clsx("col col-12")} >
          <div>
            <div className={clsx("margin-vert--md ").concat(styles.twoImagesContainer)} >
              <img src={href.img.stat_histogram_ori} 
              alt='A three-quarter shot featuring a pale-skinned girl with curly brown hair and a plain orange background.' 
              title='Girl from Pratheepan dataset' />
              <img src={href.img.stat_histogram_res} 
              alt='The resulting 3D histogram from the image featuring the girl with the orange background: each pixel is taken from the original image and stored at the coordinates [R,G,B] of the histogram. The visualization of the resulting three-dimensional histogram features some accumulation points which may indicate some interesting features to extract from the image. For example the plain orange background can easily be identified as it represents lot of pixels with low variance.' 
              title='The accumulation points may indicate a feature to extract' />
            </div>
            <Center>
              <Caption>Example of an image's 3D Histogram</Caption>
            </Center>
          </div>
        </div>
      </div>
      <div className={clsx("row margin-top--md")} >
        <div className={clsx("col col--6")} >
          <Center>
            <div>
              <h3 className={clsx("margin-left--md ").concat(styles.nobold)} >Train</h3>
              <ol className={clsx("margin-bottom--lg ").concat(styles.spacedList)} >
                <li>Initialize the skin and non-skin 3D histograms</li>
                <li>Pick (image, mask) from the training set</li>
                <li>Loop every RGB pixel from image</li>
                <li>By checking its mask, the pixel its either skin or non-skin. Add +1 to the relative histogram count at coordinates [r,g,b]</li>
                <li>Return to step 2 until there are images</li>
              </ol>
            </div>
          </Center>
        </div>
        <div className={clsx("col col--6")}>
          <Center>
            <div>
              <h3 className={clsx("margin-left--md").concat(styles.nobold)} >Predict</h3>
              <ol className={clsx("margin-bottom--lg").concat(styles.spacedList)} >
                <li>Define classifying threshold Θ</li>
                <li>Loop every RGB pixel from input image</li>
                <li>Calculate RGB probability of being skin</li>
                <li>If skin probability &gt; Θ, it is classified as skin</li>
              </ol>
            </div>
          </Center>
        </div>
      </div>
      <p>
      The data is modeled with two 3D histograms representing the probabilities of skin and non-skin classes, and classification is performed via probability calculus by measuring the probability <i>P</i> of each <i>rgb</i> pixel to belong to the <i>skin</i> class:
      </p>
      <Center>
        <div className={clsx("invert")} >
          <img src={href.img.stat_math_probability} 
          style={{margin: "0 0 var(--ifm-paragraph-margin-bottom)"}} 
          alt="Probability function; The probability of each RGB pixel to belong to the SKIN class is: the pixel count contained in bin RGB of the SKIN histogram divided by parenthesis the pixel count contained in bin RGB of the SKIN histogram plus the equivalent count from the non-skin histogram closed parenthesis." 
          title='Probability of "rgb" to be a skin pixel' />
        </div>
      </Center>
      <p>
      where <i>s[rgb]</i> is the pixel count contained in bin <i>rgb</i> of the skin histogram and <i>n[rgb]</i> is the equivalent count from the non-skin histogram. <br />
      A particular <i>rgb</i> value is labeled skin if:
      </p>
      <Center>
        <div className={clsx("invert")} >
          <img src={href.img.stat_math_threshold} 
          style={{margin: "0 0 var(--ifm-paragraph-margin-bottom)"}} 
          alt="Having computed the probability, a threshold (represented by Theta) must be surpassed to be classified as a skin pixel." 
          title='"rgb" is a skin pixel if its probability exceeds the threshold' />
        </div>
      </Center>
      <p>
      where 0 ≤ Θ ≤ 1 is a threshold value that can be adjusted to trade-off between true positives and false positives.
      </p>
    </Section>
  );
}


export const UNet = () => {
  return (
    <Section>
      <OctocatTitle title="U-Net" repo={href.url.implementation_unet} />
    <div className={clsx("row margin-top--lg")} >
      <div className={clsx("col col--6")} >
        <Center>
          <div>
            <h3 className={clsx("margin-left--md ").concat(styles.nobold)} >Workflow</h3>
            <ol className={styles.spacedList} >
              <li>Pre-process input image: resize (512×512)px, padding</li>
              <li><em>Extract features</em> in the <b>contracting pathway</b> via convolutions and down-sampling: the spatial information is lost while advanced features are learnt</li>
              <li>Try to <em>retrieve spatial information</em> through up-sampling in the <b>expansive pathway</b> and direct concatenations of <em>dense blocks</em> coming from the contracting pathway</li>
              <li>Provide a final classification map</li>
            </ol>
          </div>
        </Center>
      </div>
      <div className={clsx("col col--6")} >
        <Center>
          <div>
            <img src={href.img.unet_architecture}
            style={{width: "100%", maxWidth: "450px"}} 
            alt='Context image to the paragraphs describing the architecture of Skinny. The network is called "U-Net" because of its shape: there is a contracting path which tries to extract increasingly complex features as it goes deeper, and an expanding path which tries to retreive the lost spatial information during the feature extraction.' 
            title='Architecture of the "Skinny" network' />
            <Caption>Tarasiewicz et al. 2020 <Cite name='skinny' /></Caption>
          </div>
        </Center>
      </div>
    </div>
    <p>
    The Skinny network consists of a modified <span className={styles.dottedUnderline} 
    data-tip='The network is called "U-Net" because of its shape: there is a contracting path which tries to extract increasingly complex features as it goes deeper, and an expanding path which tries to retreive the lost spatial information during the feature extraction' 
    data-for="tip-unet">U-Net</span> incorporating dense blocks and inception modules to benefit from a wider spatial context.
    </p>
    <Tooltip id="tip-unet">
      <p style={{maxWidth: 'min(80vw, 500px)'}}>
      The network is called "U-Net" because of its shape: there is a <b>contracting path</b> which tries to extract increasingly complex features as it goes deeper, and an <b>expanding path</b> which tries to retreive the lost spatial information during the feature extraction
      </p>
    </Tooltip>
    <p>
    An additional deep level is appended to the original U-Net model, to better capture large-scale contextual features in the deepest part of the network.
    The features extracted in the contracting path propagate to the corresponding expansive levels through the dense blocks.
    </p>
    <p>
    The original U-Net convolutional layers are replaced with the inception modules: before each max-pooling layer, in the contracting path, and after concatenating features, in the expanding path.
    Thanks to these architectural choices, Skinny benefits from a wider pixel context.
    </p>
    <div className={clsx("col col--10 col--offset-1 margin-top--lg")}>
      <div>
        <div className={[styles.threeImagesContainer, styles.smallPadding].join(" ")} >
          <img src={href.img.unet_inception1} 
          alt='A face shot of a man. The face covers almost all of the image, hence it may need bigger convolution sizes to extract complex features.' 
          title='The saliency content is big' />
          <img src={href.img.unet_inception2} 
          alt='A half body shot of a person. Depending on the dataset, an image like this may be common, hence convolution sizes may be already good for it.' 
          title='The saliency content is medium sized' />
          <img src={href.img.unet_inception3} 
          alt='An image featuring two people fully. The skin pixel regions are small, hence convolution sizes can be reduced.' 
          title='The saliency content is small' />
        </div>
        <p>
        The salient content size varies between images. <b>Inception module</b> combines multiple kernels with different sizes for content adaptation.
        </p>
      </div>
      <div className={styles.invert} >
        <img src={href.img.unet_denseblock} style={{padding: "0 0 0.4rem 0"}} 
        alt='Visualization of the layers in a dense block to provide context to the following paragraph. Lot of information is lost by going deeper in a CNN; so much that there is the problem of vanishing before reaching the other side. Dense blocks enhance feature reuse by simplifying the connectivity pattern between the network paths.' 
        title='Skinny uses dense blocks to strengthen feature propagation and reuse' />
      </div>
      <p>
      <b>Dense block</b> layers are connected in a way that each one receives feature maps from all preceding layers and passes its feature maps to all subsequent layers.
      </p>
    </div>
    </Section>
  );
}


export const Approaches = () => {
  return (
    <div>
      <Intro />
    </div>
  );
}
