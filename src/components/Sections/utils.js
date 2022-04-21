import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import styles from './styles.module.css';
import clsx from 'clsx';
import { href } from './constants';


export const containerClassName = clsx(" col col--8 col--offset-2 ");

const hrefAfterNavbar = {scrollMarginTop: 'calc(var(--ifm-navbar-height) + 0.5rem)'};
const tocActiveClass = clsx('anchor');


export const Tooltip = ({ children, id }) => {
  const hasDocument = typeof document !== 'undefined';
  if (hasDocument) {
    return (<ReactTooltip
        id={id}
        place="top"
        effect="solid"
        border
        borderColor="var(--ifm-color-primary)"
        overridePosition = {({ left, top }, currentEvent, currentTarget, node) => {
          const d = document.documentElement;
          left = Math.min(d.clientWidth - node.clientWidth, left);
          top = Math.min(d.clientHeight - node.clientHeight, top);
          left = Math.max(0, left);
          top = Math.max(0, top);
          return { top, left }
        }}
      >
        {children}
      </ReactTooltip>
    );
  }
  return (<ReactTooltip
      id={id}
      place="top"
      effect="solid"
      border
      borderColor="var(--ifm-color-primary)"
    >
      {children}
    </ReactTooltip>
  );
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
const OctocatTitle = ({ section_id, title, repo }) => {
  let hash_link = <a className={clsx("hash-link")} href={"#".concat(section_id)} title="Direct link to heading">​</a>;
  return (<div className={styles.octocatTitle}>
      <h2 id={section_id} className={tocActiveClass} style={hrefAfterNavbar}>{title}{hash_link}</h2>
      <Octocat repo={repo} />
    </div>
  );
}

// Credits to https://usehooks.com/useWindowSize/
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}


/**
 * Section of the page document
 * @param size Bottom margin size
 * @param width Page width in colums. Will be centered. Either '8', '10', or '6'
 * @param title Object used to setup headings. Of type: {context: object|toc item from Docusaurus .mdx pages, text: string|Heading title, level: int|heading deep in Table of Contents, repo: string|GitHub repo that will be linked to the icon button}
 * @returns 
 */
export const Section = ({children, size, width, title}) => {
  let heading = '';

  // window is a Browser only global variable
  // https://stackoverflow.com/a/59185109
  const hasWindow = typeof window !== 'undefined';

  var isMobile;
  if (hasWindow)
  {
    const size = useWindowSize();
    isMobile = size.width < 1200;
  }

  // Section settings
  if (size === undefined) {
    size = 'xl'; // default size is 'xl'
  }
  let classStr = 'margin-bottom--'.concat(size);
  if (width !== undefined && !isMobile) {
    if (width === '8') {
      width = ' col col--8 col--offset-2 ';
    }
    else if (width === '10') {
      width = ' col col--10 col--offset-1 ';
    }
    else if (width === '6') {
      width = ' col col--6 col--offset-3 ';
    }
  }
  else {
    width = '';
  }

  // Setup Headings and add them to Table of Content
  if (title !== undefined) {
    let section_id = 'section_'.concat(String(title.text).toLowerCase().replaceAll(' ', '_'));
    let TOCItem = {
      value: title.text,
      id: section_id,
      level: title.level,
    };
    title.context.push(TOCItem);

    if (title.repo !== undefined) {
      heading = <OctocatTitle section_id={section_id} title={title.text} repo={title.repo} />
    }
    else {
      let hash_link = <a className={clsx("hash-link")} href={"#".concat(section_id)} title="Direct link to heading">​</a>;
      if (title.level == 2) {
        heading = (
        <h2 id={section_id} className={tocActiveClass} style={hrefAfterNavbar} >
          {title.text}{hash_link}
        </h2>);
      }
      else if (title.level == 3) {
        heading = <h3 id={section_id} className={tocActiveClass} style={hrefAfterNavbar}>{title.text}{hash_link}</h3>
      }
    }
  }

  return (<div className={clsx(classStr).concat(width)} >
      {heading}
      {children}
    </div>
  );
}

export const Center = ({children}) => (
  <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }}>
    {children}
  </div>
)

export const Caption = ({children}) => (
  <p className={styles.centerText} style={{color: 'var(--ifm-color-gray-600)'}}>{children}</p>
)
