(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(e,t,n){"use strict";n.r(t);n(32),n(22),n(23),n(62),n(200);var r=n(0),a=n.n(r),o=n(157),i=n(158),c=n(68),l=n(183),s=n(2),u=n(9),p=(n(204),n(160)),d=n(172),m=n(178),f=n(179),y=n(180),h=n(177),b=n(162),v=n(161),g=n(139),k=n.n(g);var j=function e(t,n){return"link"===t.type?(r=t.href,a=n,(o=function(e){return e.endsWith("/")?e:e+"/"})(r)===o(a)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var r,a,o};function O(e){var t,n,o,i=e.item,c=e.onItemClick,l=e.collapsible,d=e.activePath,m=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),f=i.items,y=i.label,h=j(i,d),b=(n=h,o=Object(r.useRef)(n),Object(r.useEffect)((function(){o.current=n}),[n]),o.current),v=Object(r.useState)((function(){return!!l&&(!h&&i.collapsed)})),g=v[0],O=v[1];Object(r.useEffect)((function(){h&&!b&&g&&O(!1)}),[h,b,g]);var E=Object(r.useCallback)((function(e){e.preventDefault(),O((function(e){return!e}))}),[O]);return 0===f.length?null:a.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":g}),key:y},a.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&h},t[k.a.menuLinkText]=!l,t)),onClick:l?E:void 0,href:l?"#!":void 0},m),y),a.a.createElement("ul",{className:"menu__list"},f.map((function(e){return a.a.createElement(C,{tabIndex:g?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:l,activePath:d})}))))}function E(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,c=t.label,l=j(t,r);return a.a.createElement("li",{className:"menu__list-item",key:c},a.a.createElement(b.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":l}),to:i},Object(v.a)(i)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function C(e){switch(e.item.type){case"category":return a.a.createElement(O,e);case"link":default:return a.a.createElement(E,e)}}var x=function(e){var t,n,o=Object(r.useState)(!1),c=o[0],l=o[1],u=Object(i.a)(),v=u.siteConfig,g=(v=void 0===v?{}:v).themeConfig.navbar,j=(g=void 0===g?{}:g).title,O=g.hideOnScroll,E=void 0!==O&&O,x=u.isClient,N=Object(y.a)(),w=N.logoLink,P=N.logoLinkProps,S=N.logoImageUrl,T=N.logoAlt,_=Object(d.a)().isAnnouncementBarClosed,I=Object(h.a)().scrollY,A=e.docsSidebars,D=e.path,L=e.sidebar,B=e.sidebarCollapsible;Object(m.a)(c);var M=Object(f.a)();if(Object(r.useEffect)((function(){M===f.b.desktop&&l(!1)}),[M]),!L)return null;var W=A[L];if(!W)throw new Error('Cannot find the sidebar "'+L+'" in the sidebar config!');return a.a.createElement("div",{className:Object(p.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=E,t))},E&&a.a.createElement(b.a,Object(s.a)({tabIndex:"-1",className:k.a.sidebarLogo,to:w},P),null!=S&&a.a.createElement("img",{key:x,src:S,alt:T}),null!=j&&a.a.createElement("strong",null,j)),a.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",k.a.menu,(n={"menu--show":c},n[k.a.menuWithAnnouncementBar]=!_&&0===I,n))},a.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){l(!c)}},c?a.a.createElement("span",{className:Object(p.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):a.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.a.createElement("ul",{className:"menu__list"},W.map((function(e){return a.a.createElement(C,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),l(!1)},collapsible:B,activePath:D})})))))},N=(n(181),n(182),n(85),n(77),n(205),n(173),{plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]}),w={Prism:n(55).a,theme:N};function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=/\r\n|\r|\n/,_=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},I=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},A=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=S({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=S({},n,{backgroundColor:null}),a};function D(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var L=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),P(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?A(e.theme,e.language):void 0;return t.themeDict=n})),P(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=S({},D(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?S({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),P(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(c))}})),P(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=S({},D(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?S({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,c=[],l=[c];i>-1;){for(;(o=r[i]++)<a[i];){var s=void 0,u=t[i],p=n[i][o];if("string"==typeof p?(u=i>0?u:["plain"],s=p):(u=I(u,p.type),p.alias&&(u=I(u,p.alias)),s=p.content),"string"==typeof s){var d=s.split(T),m=d.length;c.push({types:u,content:d[0]});for(var f=1;f<m;f++)_(c),l.push(c=[]),c.push({types:u,content:d[f]})}else i++,t.push(u),n.push(s),r.push(0),a.push(s.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return _(c),l}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),B=n(206),M=n.n(B),W=n(207),F=n.n(W),R={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},$=n(168),z=function(){var e=Object(i.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object($.a)().isDarkTheme,r=t.theme||R,a=t.darkTheme||r;return n?a:r},J=n(140),H=n.n(J),U=/{([\d,-]+)}/,X=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},Y=/title=".*"/,q=function(e){var t=e.children,n=e.className,o=e.metastring,c=Object(i.a)().siteConfig.themeConfig.prism,l=void 0===c?{}:c,u=Object(r.useState)(!1),d=u[0],m=u[1],f=Object(r.useState)(!1),y=f[0],h=f[1];Object(r.useEffect)((function(){h(!0)}),[]);var b=Object(r.useRef)(null),v=[],g="",k=z();if(o&&U.test(o)){var j=o.match(U)[1];v=F.a.parse(j).filter((function(e){return e>0}))}o&&Y.test(o)&&(g=o.match(Y)[0].split("title=")[1].replace(/"+/g,""));var O=n&&n.replace(/language-/,"");!O&&l.defaultLanguage&&(O=l.defaultLanguage);var E=t.replace(/\n$/,"");if(0===v.length&&void 0!==O){for(var C,x="",N=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return X(["js","jsBlock"]);case"jsx":case"tsx":return X(["js","jsBlock","jsx"]);case"html":return X(["js","jsBlock","html"]);case"python":case"py":return X(["python"]);default:return X()}}(O),P=t.replace(/\n$/,"").split("\n"),S=0;S<P.length;){var T=S+1,_=P[S].match(N);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":x+=T+",";break;case"highlight-start":C=T;break;case"highlight-end":x+=C+"-"+(T-1)+","}P.splice(S,1)}else S+=1}v=F.a.parse(x),E=P.join("\n")}var I=function(){M()(E),m(!0),setTimeout((function(){return m(!1)}),2e3)};return a.a.createElement(L,Object(s.a)({},w,{key:y,theme:k,code:E,language:O}),(function(e){var t,n,r=e.className,o=e.style,i=e.tokens,c=e.getLineProps,l=e.getTokenProps;return a.a.createElement(a.a.Fragment,null,g&&a.a.createElement("div",{style:o,className:H.a.codeBlockTitle},g),a.a.createElement("div",{className:H.a.codeBlockContent},a.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(p.a)(H.a.copyButton,(t={},t[H.a.copyButtonWithTitle]=g,t)),onClick:I},d?"Copied":"Copy"),a.a.createElement("div",{tabIndex:"0",className:Object(p.a)(r,H.a.codeBlock,(n={},n[H.a.codeBlockWithTitle]=g,n))},a.a.createElement("div",{className:H.a.codeBlockLines,style:o},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(s.a)({key:t},l({token:e,key:t})))})))}))))))}))},G=(n(141),n(142)),K=n.n(G),Q=function(e){return function(t){var n,r=t.id,o=Object(u.a)(t,["id"]),c=Object(i.a)().siteConfig,l=(c=void 0===c?{}:c).themeConfig,s=(l=void 0===l?{}:l).navbar,d=(s=void 0===s?{}:s).hideOnScroll,m=void 0!==d&&d;return r?a.a.createElement(e,o,a.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:Object(p.a)("anchor",(n={},n[K.a.enhancedAnchor]=!m,n)),id:r}),o.children,a.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):a.a.createElement(e,o)}},V=n(143),Z=n.n(V),ee={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?a.a.createElement(q,e):a.a.createElement("code",e):t},a:function(e){return/\.[^./]+$/.test(e.href)?a.a.createElement("a",e):a.a.createElement(b.a,e)},pre:function(e){return a.a.createElement("div",Object(s.a)({className:Z.a.mdxCodeBlock},e))},h1:Q("h1"),h2:Q("h2"),h3:Q("h3"),h4:Q("h4"),h5:Q("h5"),h6:Q("h6")},te=n(184),ne=n(163),re=n(144),ae=n.n(re);t.default=function(e){var t=e.route,n=e.docsMetadata,r=e.location,s=t.routes.find((function(e){return Object(ne.b)(r.pathname,e)}))||{},u=n.permalinkToSidebar,p=n.docsSidebars,d=n.version,m=u[s.path],f=Object(i.a)(),y=f.siteConfig,h=(y=void 0===y?{}:y).themeConfig,b=void 0===h?{}:h,v=f.isClient,g=b.sidebarCollapsible,k=void 0===g||g;return 0===Object.keys(s).length?a.a.createElement(te.default,e):a.a.createElement(l.a,{version:d,key:v},a.a.createElement("div",{className:ae.a.docPage},m&&a.a.createElement("div",{className:ae.a.docSidebarContainer,role:"complementary"},a.a.createElement(x,{docsSidebars:p,path:s.path,sidebar:m,sidebarCollapsible:k})),a.a.createElement("main",{className:ae.a.docMainContainer},a.a.createElement(o.a,{components:ee},Object(c.a)(t.routes)))))}},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";var r=n(12),a=n(84)(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(81)("includes")},182:function(e,t,n){"use strict";var r=n(12),a=n(165);r(r.P+r.F*n(166)("includes"),"String",{includes:function(e){return!!~a(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},200:function(e,t,n){"use strict";var r=n(12),a=n(201)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(81)("find")},201:function(e,t,n){var r=n(29),a=n(57),o=n(31),i=n(26),c=n(202);e.exports=function(e,t){var n=1==e,l=2==e,s=3==e,u=4==e,p=6==e,d=5==e||p,m=t||c;return function(t,c,f){for(var y,h,b=o(t),v=a(b),g=r(c,f,3),k=i(v.length),j=0,O=n?m(t,k):l?m(t,0):void 0;k>j;j++)if((d||j in v)&&(h=g(y=v[j],j,b),e))if(n)O[j]=h;else if(h)switch(e){case 3:return!0;case 5:return y;case 6:return j;case 2:O.push(y)}else if(u)return!1;return p?-1:s||u?u:O}}},202:function(e,t,n){var r=n(203);e.exports=function(e,t){return new(r(e))(t)}},203:function(e,t,n){var r=n(13),a=n(176),o=n(3)("species");e.exports=function(e){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},204:function(e,t,n){"use strict";var r=n(12),a=n(26),o=n(165),i="".endsWith;r(r.P+r.F*n(166)("endsWith"),"String",{endsWith:function(e){var t=o(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=a(t.length),c=void 0===n?r:Math.min(a(n),r),l=String(e);return i?i.call(t,l,c):t.slice(c-l.length,c)===l}})},205:function(e,t,n){"use strict";var r=n(8),a=n(26),o=n(59),i=n(60);n(61)("match",1,(function(e,t,n,c){return[function(n){var r=e(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=c(n,e,this);if(t.done)return t.value;var l=r(e),s=String(this);if(!l.global)return i(l,s);var u=l.unicode;l.lastIndex=0;for(var p,d=[],m=0;null!==(p=i(l,s));){var f=String(p[0]);d[m]=f,""===f&&(l.lastIndex=o(s,a(l.lastIndex),u)),m++}return 0===m?null:d}]}))},206:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(c){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),i};e.exports=r,e.exports.default=r},207:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],i=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=i);for(var c=n;c!=a;c+=i)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);