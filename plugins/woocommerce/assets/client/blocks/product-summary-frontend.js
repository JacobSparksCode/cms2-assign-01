(self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[]).push([[895],{3591:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>S});var n=o(1609),r=o(7723),s=o(851),l=o(6087),c=o(7674),a=o.n(c);const i=["a","b","em","i","strong","p","br"],u=["target","href","rel","name","download"];var d=o(6004);const m=t=>t.replace(/<\/?[a-z][^>]*?>/gi,""),p=(t,e)=>t.replace(/[\s|\.\,]+$/i,"")+e;var y=o(9446);const h=["a","b","em","i","strong","p","br","ul","ol","li","h1","h2","h3","h4","h5","h6","pre","blockquote","img"],f=["target","href","rel","name","download","src","class","alt","style"],g=({source:t,maxLength:e=15,countType:o="words",className:r="",style:s={}})=>{const c=(0,l.useMemo)((()=>((t,e=15,o="words")=>{const n=(0,d.autop)(t);if((0,y.count)(n,o)<=e)return n;const r=(t=>{const e=t.indexOf("</p>");return-1===e?t:t.substr(0,e+4)})(n);return(0,y.count)(r,o)<=e?r:"words"===o?((t,e,o="&hellip;",n=!0)=>{const r=m(t),s=r.split(" ").splice(0,e).join(" ");return s===r?n?(0,d.autop)(r):r:n?(0,d.autop)(p(s,o)):p(s,o)})(r,e):((t,e,o=!0,n="&hellip;",r=!0)=>{const s=m(t),l=s.slice(0,e);if(l===s)return r?(0,d.autop)(s):s;if(o)return(0,d.autop)(p(l,n));const c=l.match(/([\s]+)/g),a=c?c.length:0,i=s.slice(0,e+a);return r?(0,d.autop)(p(i,n)):p(i,n)})(r,e,"characters_including_spaces"===o)})(t,e,o)),[t,e,o]);return(0,n.createElement)(l.RawHTML,{style:s,className:r},((t,e)=>{const o=(null==e?void 0:e.tags)||i,n=(null==e?void 0:e.attr)||u;return a().sanitize(t,{ALLOWED_TAGS:o,ALLOWED_ATTR:n})})(c,{tags:h,attr:f}))};var v=o(2516),b=o(3993),k=o(2796),w=o(4487),N=o(1616);o(7766);const E=t=>{const{className:e,showDescriptionIfEmpty:o,summaryLength:l,showLink:c,linkText:a,isDescendantOfAllProducts:i,isDescendentOfSingleProductTemplate:u}=t,{parentClassName:d}=(0,k.useInnerBlockLayoutContext)(),{product:m}=(0,k.useProductDataContext)(),p=(0,w.p)(t),y=(t=>{const{isDescendantOfAllProducts:e,summaryLength:o,showDescriptionIfEmpty:n,showLink:r}=t;return e&&(0,b.isEmpty)(o)&&(0,b.isEmpty)(n)&&(0,b.isEmpty)(r)})(t),h=y?150:l,f=!y&&c,N=((t,e)=>{const{short_description:o,description:n}=t;return o||(e&&n?n:"")})(m,!!y||o),E=h||1/0;return m?u?(0,n.createElement)("p",null,(0,r.__)("This block displays the product summary and all its customizations.","woocommerce")):N?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(g,{className:(0,s.A)(e,p.className,"wc-block-components-product-summary",{[`${d}__product-summary`]:d}),source:N,maxLength:E,countType:v.r7.wordCountType||"words",style:p.style}),i&&f&&a?(0,n.createElement)("a",{href:`${m.permalink}#tab-description`},a):null):i?null:(0,n.createElement)("p",null,(0,r.__)("No product summary to show.","woocommerce")):(0,n.createElement)("div",{className:(0,s.A)(e,"wc-block-components-product-summary",{[`${d}__product-summary`]:d})})},S=t=>t.isDescendentOfSingleProductTemplate?(0,n.createElement)(E,{...t}):(0,N.withProductDataContext)(E)(t)},4487:(t,e,o)=>{"use strict";o.d(e,{p:()=>i});var n=o(851),r=o(3993),s=o(1194),l=o(9786);function c(t={}){const e={};return(0,l.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function a(t,e){return t&&e?`has-${(0,s.c)(e)}-${t}`:""}const i=t=>{const e=(t=>{const e=(0,r.isObject)(t)?t:{style:{}};let o=e.style;return(0,r.isString)(o)&&(o=JSON.parse(o)||{}),(0,r.isObject)(o)||(o={}),{...e,style:o}})(t),o=function(t){var e,o,s,l,i,u,d;const{backgroundColor:m,textColor:p,gradient:y,style:h}=t,f=a("background-color",m),g=a("color",p),v=function(t){if(t)return`has-${t}-gradient-background`}(y),b=v||(null==h||null===(e=h.color)||void 0===e?void 0:e.gradient);return{className:(0,n.A)(g,v,{[f]:!b&&!!f,"has-text-color":p||(null==h||null===(o=h.color)||void 0===o?void 0:o.text),"has-background":m||(null==h||null===(s=h.color)||void 0===s?void 0:s.background)||y||(null==h||null===(l=h.color)||void 0===l?void 0:l.gradient),"has-link-color":(0,r.isObject)(null==h||null===(i=h.elements)||void 0===i?void 0:i.link)?null==h||null===(u=h.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:c({color:(null==h?void 0:h.color)||{}})}}(e),s=function(t){var e;const o=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:o,style:r}=t,s=o?a("border-color",o):"";return(0,n.A)({"has-border-color":!!o||!(null==r||null===(e=r.border)||void 0===e||!e.color),[s]:!!s})}(t),style:c({border:o})}}(e),l=function(t){var e;return{className:void 0,style:c({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}(e),i=(t=>{const e=(0,r.isObject)(t.style.typography)?t.style.typography:{},o=(0,r.isString)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:o,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}})(e);return{className:(0,n.A)(i.className,o.className,s.className,l.className),style:{...i.style,...o.style,...s.style,...l.style}}}},7766:()=>{}}]);