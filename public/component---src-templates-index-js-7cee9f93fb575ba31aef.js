(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(e,t,n){"use strict";n.r(t);n(70);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(145),s=n.n(l),c=n(196),u=n(155),p=n(156),m=n(157),f=n(143),d=n(158),h=n(159),v=n(164),E=n(183),g=n(184),y=n(195),N=n(162),b=n(241),x=(n(275),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,n=e.color;return t&&t.length>0?o.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return o.a.createElement(b.SocialIcon,{key:e,className:"social-media-icon",url:e,color:n,style:{height:null,width:null}})})):null},t}(o.a.Component)),C=n(148);n(212);n.d(t,"query",function(){return _});var k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.first,n=e.group,a=e.index,r=e.last,i=e.pageCount,l=0,b=0;r||(l=a+1),t||(b=a-1);var k=this.props.data.articles.edges,_=this.props.data.config.elements,w=_.socialmedia.value.split(",");return o.a.createElement(p.a,{className:"home-template"},o.a.createElement(s.a,{title:_.title.value},o.a.createElement("html",{lang:"en-US"}),o.a.createElement("link",{rel:"icon",type:"image/png",href:_.blog_logo.value[0].url})),o.a.createElement(N.a,{articleEdges:k,seoConfig:_}),o.a.createElement(v.a,{config:_,onClose:this.handleOnClose}),o.a.createElement(f.a,null,o.a.createElement(d.a,{cover:_.splash_image.value[0].url},o.a.createElement(h.a,{overlay:_.splash_image.value[0].url},o.a.createElement(u.a,{logo:_.blog_logo.value[0].url,title:_.title.value}),o.a.createElement(x,{urls:w,color:"currentColor"}),o.a.createElement(C.a,{url:_.base_url.value+"/rss.xml"})),o.a.createElement("div",{className:"vertical"},o.a.createElement("div",{className:"main-header-content inner"},o.a.createElement(E.a,{text:_.title.value}),o.a.createElement(g.a,{text:_.metadata__description.value})))),o.a.createElement("div",null,o.a.createElement(y.a,{page:a,pages:i,next:l,prev:b},o.a.createElement(c.a,{articleEdges:k,index:a,count:n.length}))),o.a.createElement(m.a,{author:"Aaron Collier"})))},t}(o.a.Component),_="1013934639";t.default=k},141:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(29),s=n.n(l);n.d(t,"a",function(){return s.a});n(144),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},143:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(147),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"site-wrapper"},e)},t}(o.a.Component));t.a=l},144:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?o.a.createElement("a",{className:"subscribe-button icon-feed",href:e},o.a.createElement("span",{className:"sr-only"},"Subscribe")):null},t}(o.a.Component));t.a=l},149:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(49),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(146),s=n.n(l),c=n(141),u=(n(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.category;return n?o.a.createElement("span",null,t,o.a.createElement("span",{key:n},o.a.createElement(c.a,{key:n,to:"/category/"+s.a.kebabCase(n)},n))):null},t}(i.Component));t.a=u},151:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(169),s=n.n(l),c=(n(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.prefix;return o.a.createElement("span",null,n,o.a.createElement("time",{className:"article-date",dateTime:s()(new Date(t)).format("YYYY-MM-DD")},s()(new Date(t)).format("DD MMMM YYYY")))},t}(o.a.Component));t.a=c},152:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className;return o.a.createElement("article",{className:n},t)},t}(o.a.Component));t.a=l},153:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(172),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("header",{className:"article-header"},e)},t}(o.a.Component));t.a=l},154:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(146),s=n.n(l),c=n(141),u=(n(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?o.a.createElement("span",null,t,n.map(function(e,t,n){return o.a.createElement("span",{key:e},o.a.createElement(c.a,{key:e,to:"/tags/"+s.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(i.Component));t.a=u},155:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(141),s=(n(176),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?o.a.createElement(l.a,{className:"blog-logo",to:n||"/"},o.a.createElement("img",{src:t,alt:a})):null},t}(i.Component));t.a=s},156:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(142),s=n.n(l),c=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=s()(a,n?"nav-opened":"nav-closed");return o.a.createElement("div",{className:r},t)},t}(o.a.Component));t.a=c},157:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("footer",{className:"site-footer clearfix"},o.a.createElement("section",{className:"copyright"},"© 2018–",(new Date).getFullYear()," ",this.props.author))},t}(i.Component));t.a=l},158:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(142),s=n.n(l),c=(n(179),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=s()("main-header",this.props.className,{"no-cover":!n});return o.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(o.a.Component));t.a=c},159:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(142),s=n.n(l),c=(n(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=s()("main-nav",["overlay","clearfix"],n);return o.a.createElement("nav",{className:a},t)},t}(o.a.Component));t.a=c},160:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(142),s=n.n(l),c=(n(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=s()("content",this.props.className);return o.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(o.a.Component));t.a=c},162:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(145),s=n.n(l),c=n(188),u=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props.seoConfig,i=this.props,l=i.articleNode,c=i.articlePath,p=i.articleSEO;p?(e=l.elements.title.value,t=l.elements.metadata__description.value,n=l.elements.teaser.value[0].url,a=u()(r.base_url.value,"/articles",c,"/")):(e=r.title.value,t=r.metadata__description.value,n=r.blog_logo.value[0].url);var m=r.base_url.value,f=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:e,alternateName:r.siteTitleAlt?r.siteTitleAlt:""}];return p&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:e,alternateName:r.siteTitleAlt?r.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),o.a.createElement(s.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),o.a.createElement("meta",{property:"og:url",content:p?a:m}),p?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=p},164:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=(n(30),n(69)),o=n.n(i),l=n(0),s=n.n(l),c=(n(68),n(141));var u=function(e){var t=[{primaryText:"Home",component:c.a,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t.push({divider:!0}),t.push({primaryText:"About",component:c.a,to:"/about/"}),t},p=n(148),m=(n(182),function(){return null}),f=function(e){var t=e.primaryText;return s.a.createElement("h3",null,t)},d=function(e){var t=e.primaryText,n=e.component,a=o()(e,["primaryText","component"]);return s.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(l.createElement)(n,a,t))},h=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(l.createElement)(d,{key:t,primaryText:t});if(Object(l.isValidElement)(t))return t;var a,r=t.divider,i=t.subheader,s=t.nestedItems,c=o()(t,["divider","subheader","nestedItems"]);a=r?m:i?f:d;var u=Object.assign({},c,{key:t.key||n});return s&&(u.nestedItems=s.map(e)),Object(l.createElement)(a,u)},v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return s.a.createElement("div",null,s.a.createElement("div",{className:"nav"},s.a.createElement("h3",{className:"nav-title"},"Menu"),s.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},s.a.createElement("span",{className:"hidden"},"Close")),s.a.createElement("ul",null,a.map(h)),s.a.createElement(p.a,{url:t.siteRss})),s.a.createElement("span",{className:"nav-cover"}))},t}(l.Component);t.a=v},183:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(202),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?o.a.createElement("h1",{className:"page-title"},e):null},t}(o.a.Component));t.a=l},184:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(203),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?o.a.createElement("h2",{className:"page-description"},e):null},t}(o.a.Component));t.a=l},195:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(160),s=(n(30),n(186),n(141)),c=(n(204),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e,t="nav-link";this.props.className&&(t=t+" "+this.props.className),e=1===this.props.url?"":this.props.url.toString();var n=Object.assign({},this.props);return delete n.style,delete n.className,delete n.text,delete n.url,o.a.createElement(s.a,Object.assign({to:"/"+e},n,{className:t}),this.props.text)}return null},t}(o.a.Component)),u=(n(205),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return o.a.createElement("nav",{className:"pagination"},o.a.createElement(c,{className:"newer-articles",url:a,text:"← Newer Articles"}),o.a.createElement("span",{className:"page-number"},"Page ",t," of ",n),o.a.createElement(c,{className:"older-articles",url:r,text:"Older Articles →"}))},t}(o.a.Component)),p=(n(206),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next,i=e.children,s="";return t>1&&(s+=" paged"),o.a.createElement(l.a,{className:s},o.a.createElement("div",{className:"extra-pagination inner"},o.a.createElement(u,{page:t,pages:n,prev:a,next:r})),i,o.a.createElement(u,{page:t,pages:n,prev:a,next:r}))},t}(o.a.Component));t.a=p},196:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(141),s=n(150),c=n(151),u=n(152),p=n(153),m=n(154),f=(n(174),n(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.cover,n=e.link,a={backgroundImage:"url("+t+")"};return n?o.a.createElement(l.a,{to:n},o.a.createElement("div",{className:"article-teaser",style:a})):null},t}(o.a.Component)),d=(n(201),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.count,n=e.index,a=this.props.articleEdges.slice((n-1)*t,n-1+t).map(function(e){return{category:e.node.fields.category,cover:e.node.elements.teaser.value[0].url,description:e.node.elements.metadata__description.value,path:e.node.fields.slug,date:e.node.fields.date,tags:e.node.fields.tags,title:e.node.elements.title.value}});return o.a.createElement("div",{className:"article-listing"},a.map(function(e){var t=e.category,n=e.cover,a=e.description,r=e.path,i=e.date,d=e.tags,h=e.title,v=e.article_class?e.article_class:"article-card";return o.a.createElement(u.a,{className:v,key:h},o.a.createElement(f,{cover:n,link:"/articles/"+r}),o.a.createElement("div",{className:"article-details"},o.a.createElement(l.a,{className:"article-link",to:"/articles/"+r},o.a.createElement(p.a,null,o.a.createElement("h2",{className:"article-title"},h)),o.a.createElement("section",{className:"article-description"},o.a.createElement("p",null,a," ","»"))),o.a.createElement("footer",{className:"article-meta"},o.a.createElement(c.a,{prefix:"Published ",date:i}),o.a.createElement(s.a,{prefix:" in ",category:t}),o.a.createElement(m.a,{prefix:" on ",tags:d}))))}))},t}(o.a.Component));t.a=d}}]);
//# sourceMappingURL=component---src-templates-index-js-7cee9f93fb575ba31aef.js.map