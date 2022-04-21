"use strict";(self.webpackChunkskin_detection_io=self.webpackChunkskin_detection_io||[]).push([[85],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4569:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r=n(7294),a=n(6010),o=n(3570),l=n(3905),c=n(7462),i=n(3366),s=n(5742),u=["mdxType","originalType"];var m={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},p={Prism:n(7410).default,theme:m};function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var y=/\r\n|\r|\n/,v=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=f({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=f({},n,{backgroundColor:null}),a};function b(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var k=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),d(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),d(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=f({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?f({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),d(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),d(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=f({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?f({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),d(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=g(u,m.type),m.alias&&(u=g(u,m.alias)),s=m.content),"string"==typeof s){var p=s.split(y),d=p.length;c.push({types:u,content:p[0]});for(var f=1;f<d;f++)v(c),i.push(c=[]),c.push({types:u,content:p[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return v(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),E=k,N=n(7556);var O=n(5999),_="copyButton_eDfN",Z="copyButtonCopied_ljy5",C="copyButtonIcons_W9eQ",T="copyButtonIcon_XEyF",x="copyButtonSuccessIcon_i9w9";function L(e){var t=e.code,n=(0,r.useState)(!1),o=n[0],l=n[1],c=(0,r.useRef)(void 0),i=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(t),l(!0),c.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),r.createElement("button",{type:"button","aria-label":o?(0,O.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,O.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,O.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)(_,"clean-btn",o&&Z),onClick:i},r.createElement("span",{className:C,"aria-hidden":"true"},r.createElement("svg",{className:T,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:x,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var j="codeBlockContainer_I0IT",w="codeBlockContent_wNvx",P="codeBlockTitle_BvAR",A="codeBlock_jd64",H="codeBlockStandalone_csWH",S="codeBlockLines_mRuA";function B(e){var t,n=e.children,o=e.className,l=void 0===o?"":o,i=e.metastring,s=e.title,u=e.language,m=(0,N.LU)().prism,d=(0,r.useState)(!1),f=d[0],y=d[1];(0,r.useEffect)((function(){y(!0)}),[]);var v=(0,N.bc)(i)||s,g=(0,N.pJ)();if(r.Children.toArray(n).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(E,(0,c.Z)({},p,{key:String(f),theme:g,code:"",language:"text"}),(function(e){var t=e.className,o=e.style;return r.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,H,"thin-scrollbar",j,l,N.kM.common.codeBlock),style:o},r.createElement("code",{className:S},n))}));var h=Array.isArray(n)?n.join(""):n,b=null!=(t=null!=u?u:(0,N.Vo)(l))?t:m.defaultLanguage,k=(0,N.nZ)(h,i,b),O=k.highlightLines,_=k.code;return r.createElement(E,(0,c.Z)({},p,{key:String(f),theme:g,code:_,language:null!=b?b:"text"}),(function(e){var t,n=e.className,o=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return r.createElement("div",{className:(0,a.Z)(j,l,(t={},t["language-"+b]=b&&!l.includes("language-"+b),t),N.kM.common.codeBlock)},v&&r.createElement("div",{style:o,className:P},v),r.createElement("div",{className:w,style:o},r.createElement("pre",{tabIndex:0,className:(0,a.Z)(n,A,"thin-scrollbar")},r.createElement("code",{className:S},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return O.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,c.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,c.Z)({key:t},u({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement(L,{code:_})))}))}var D=n(9960);var I="details_BAp3";function M(e){var t=Object.assign({},e);return r.createElement(N.PO,(0,c.Z)({},t,{className:(0,a.Z)("alert alert--info",I,t.className)}))}var V="anchorWithStickyNavbar_mojV",R="anchorWithHideOnScrollNavbar_R0VQ",z=["as","id"],F=["as"];function W(e){var t=e.as,n=e.id,o=(0,i.Z)(e,z),l=(0,N.LU)().navbar.hideOnScroll;return n?r.createElement(t,(0,c.Z)({},o,{className:(0,a.Z)("anchor",l?R:V),id:n}),o.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,O.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,o)}function U(e){var t=e.as,n=(0,i.Z)(e,F);return"h1"===t?r.createElement("h1",(0,c.Z)({},n,{id:void 0}),n.children):r.createElement(W,(0,c.Z)({as:t},n))}function Q(e){return r.createElement(U,e)}var X="img_E7b_";var G={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,i.Z)(a,u));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(s.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(B,e)},a:function(e){return r.createElement(D.Z,e)},pre:function(e){var t;return r.createElement(B,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(M,(0,c.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,c.Z)({},e,{className:(t=e.className,(0,a.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return r.createElement("img",(0,c.Z)({loading:"lazy"},e,{className:(t=e.className,(0,a.Z)(t,X))}));var t},h1:function(e){return r.createElement(Q,(0,c.Z)({as:"h1"},e))},h2:function(e){return r.createElement(Q,(0,c.Z)({as:"h2"},e))},h3:function(e){return r.createElement(Q,(0,c.Z)({as:"h3"},e))},h4:function(e){return r.createElement(Q,(0,c.Z)({as:"h4"},e))},h5:function(e){return r.createElement(Q,(0,c.Z)({as:"h5"},e))},h6:function(e){return r.createElement(Q,(0,c.Z)({as:"h6"},e))}};function J(e){var t=e.children;return r.createElement(l.Zo,{components:G},t)}var q=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function K(e){var t=e.toc,n=e.className,a=e.linkClassName,o=e.isChild;return t.length?r.createElement("ul",{className:o?void 0:n},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(K,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function Y(e){var t=e.toc,n=e.className,a=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,l=void 0===o?"table-of-contents__link":o,s=e.linkActiveClassName,u=void 0===s?void 0:s,m=e.minHeadingLevel,p=e.maxHeadingLevel,d=(0,i.Z)(e,q),f=(0,N.LU)(),y=null!=m?m:f.tableOfContents.minHeadingLevel,v=null!=p?p:f.tableOfContents.maxHeadingLevel,g=(0,N.b9)({toc:t,minHeadingLevel:y,maxHeadingLevel:v}),h=(0,r.useMemo)((function(){if(l&&u)return{linkClassName:l,linkActiveClassName:u,minHeadingLevel:y,maxHeadingLevel:v}}),[l,u,y,v]);return(0,N.Si)(h),r.createElement(K,(0,c.Z)({toc:g,className:a,linkClassName:l},d))}var $="tableOfContents_cNA8",ee=["className"];function te(e){var t=e.className,n=(0,i.Z)(e,ee);return r.createElement("div",{className:(0,a.Z)($,"thin-scrollbar",t)},r.createElement(Y,(0,c.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var ne="mdxPageWrapper_zHyg";function re(e){var t=e.content,n=t.metadata,l=n.title,c=n.description,i=n.frontMatter,s=i.wrapperClassName,u=i.hide_table_of_contents;return r.createElement(N.FG,{className:(0,a.Z)(null!=s?s:N.kM.wrapper.mdxPages,N.kM.page.mdxPage)},r.createElement(N.d,{title:l,description:c}),r.createElement(o.Z,null,r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",ne)},r.createElement("div",{className:(0,a.Z)("col",!u&&"col--8")},r.createElement(J,null,r.createElement(t,null))),!u&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(te,{toc:t.toc,minHeadingLevel:i.toc_min_heading_level,maxHeadingLevel:i.toc_max_heading_level}))))))}}}]);