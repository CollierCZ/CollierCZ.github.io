(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return i});var r=n(0),a=n.n(r),o=n(159);t.default=function(e){var t=e.data.kenticoCloudItemArticle;return a.a.createElement(o.a,null,a.a.createElement("div",null,a.a.createElement("h1",null,t.title.value)),a.a.createElement("div",null,a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.body.value}})))};var i="540092545"},155:function(e,t,n){"use strict";var r=n(40);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(160)),o=r(n(161)),i=r(n(8)),s=r(n(52)),l=r(n(53)),c=r(n(4)),u=r(n(0)),d=n(16),p=n(156);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var a=t.location;return n.state={IOSupported:r,location:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,s=t.onClick,l=t.onMouseEnter,c=t.location,h=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,v=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=f(n);return u.default.createElement(d.Link,(0,o.default)({to:g,state:h,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){if(s&&s(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,p.parsePath)(g),r=n.pathname,a=n.hash;if(r===c.pathname||!r){var o=a?document.getElementById(a.substr(1)):null;null!==o?o.scrollIntoView():window.scrollTo(0,0)}y(g,{state:h,replace:m})}return!0}},v))},t}(u.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v,g=(v=m,function(e){return u.default.createElement(d.Location,null,function(t){var n=t.location;return u.default.createElement(v,(0,o.default)({location:n},e))})});t.default=g;var y=function(e,t){window.___navigate(e,t)};t.navigate=y;var b=function(e){window.___push(e)};t.push=b;t.replace=function(e){window.___replace(e)};t.navigateTo=function(e){return b(e)}},156:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return h});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),s=n(155),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(27);n.d(t,"waitForRouteChange",function(){return c.c});var u=n(157),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var p=n(38);n.d(t,"parsePath",function(){return p.a});var f=a.a.createContext({}),h=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,n){var r;e.exports=(r=n(162))&&r.default||r},158:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(84),i=n(4),s=n.n(i),l=n(54),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,u=Object(l.a)(c.test.bind(c));var d,p="__EMOTION_THEMING__",f=((d={})[p]=s.a.object,d);var h=u,m=function(e){return"theme"!==e&&"innerRef"!==e},v=function(){return!0},g=function(e,t){for(var n=2,r=arguments.length;n<r;n++){var a=arguments[n],o=void 0;for(o in a)e(o)&&(t[o]=a[o])}return t};var y=function(e,t){var n=function(r,a){var o,i,s,l;void 0!==a&&(o=a.e,i=a.label,s=a.target,l=r.__emotion_forwardProp&&a.shouldForwardProp?function(e){return r.__emotion_forwardProp(e)&&a.shouldForwardProp(e)}:a.shouldForwardProp);var c=r.__emotion_real===r,u=void 0===o&&c&&r.__emotion_base||r;return"function"!=typeof l&&(l="string"==typeof u&&u.charAt(0)===u.charAt(0).toLowerCase()?h:m),function(){var d=arguments,h=c&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==i&&h.push("label:"+i+";"),void 0===o)if(null==d[0]||void 0===d[0].raw)h.push.apply(h,d);else{h.push(d[0][0]);for(var m=d.length,y=1;y<m;y++)h.push(d[y],d[0][y])}var b=function(n){var r,a;function i(){return n.apply(this,arguments)||this}a=n,(r=i).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var c=i.prototype;return c.componentWillMount=function(){void 0!==this.context[p]&&(this.unsubscribe=this.context[p].subscribe(function(e){this.setState({theme:e})}.bind(this)))},c.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[p].unsubscribe(this.unsubscribe)},c.render=function(){var n=this.props,r=this.state;this.mergedProps=g(v,{},n,{theme:null!==r&&r.theme||n.theme||{}});var a="",i=[];return n.className&&(a+=void 0===o?e.getRegisteredStyles(i,n.className):n.className+" "),a+=void 0===o?e.css.apply(this,h.concat(i)):o,void 0!==s&&(a+=" "+s),t.createElement(u,g(l,{},n,{className:a,ref:n.innerRef}))},i}(t.Component);return b.displayName=void 0!==i?i:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",void 0!==r.defaultProps&&(b.defaultProps=r.defaultProps),b.contextTypes=f,b.__emotion_styles=h,b.__emotion_base=u,b.__emotion_real=b,b.__emotion_forwardProp=l,Object.defineProperty(b,"toString",{value:function(){return"."+s}}),b.withComponent=function(e,t){return n(e,void 0!==t?g(v,{},a,t):a).apply(void 0,h)},b}};return n};n.d(t,"a",function(){return o.css});y(o,a.a)},159:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(158),i=n(156),s=n(85);t.a=function(e){var t=e.children;return a.a.createElement("div",{className:Object(o.a)("margin:0 auto;max-width:700px;padding:",Object(s.rhythm)(2),";padding-top:",Object(s.rhythm)(1.5),";")},a.a.createElement(i.Link,{to:"/"},a.a.createElement("h3",{className:Object(o.a)("margin-bottom:",Object(s.rhythm)(2),";display:inline-block;font-style:normal;")},"Home")),a.a.createElement(i.Link,{to:"/about/",className:Object(o.a)("float:right;")},"About"),t)}},160:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},161:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},162:function(e,t,n){"use strict";n.r(t);n(39);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),s=n(55),l=n(1),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-templates-article-js-23c52b51c0a13b4b7d10.js.map