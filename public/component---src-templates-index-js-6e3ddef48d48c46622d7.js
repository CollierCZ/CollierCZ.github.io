(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);a(78);var n=a(8),l=a.n(n),r=a(0),o=a.n(r),i=a(151),c=a.n(i),s=a(177),u=a(154),p=a(155),m=a(145),d=a(156),h=a(157),v=a(162),g=a(164),E=a(165),f=a(176),y=a(158),C=(a(52),a(245)),O=(a(279),function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,a=e.color;return t&&t.length>0?o.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return o.a.createElement(C.SocialIcon,{key:e,className:"social-media-icon",url:e,color:a,style:{height:null,width:null}})})):null},t}(o.a.Component)),w=a(189);a(172);a.d(t,"query",function(){return _});var x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return l()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.page,a=e.pages,n=e.total,l=e.limit,r=e.prev,i=e.next,C=this.props.data.articles.edges,x=this.props.data.config,_=x.socialmedia.value.split(",");return o.a.createElement(p.a,{className:"home-template",isOpen:this.state.menuOpen},o.a.createElement(c.a,{title:x.title.value}),o.a.createElement(y.a,{articleEdges:C,seoConfig:x}),o.a.createElement(v.a,{config:x,onClose:this.handleOnClose}),o.a.createElement(m.a,null,o.a.createElement(d.a,{cover:x.splash_image.value[0].url},o.a.createElement(h.a,{overlay:x.splash_image.value[0].url},o.a.createElement(u.a,{logo:x.blog_logo.value[0].url,title:x.title.value}),o.a.createElement(O,{urls:_,color:"currentColor"}),o.a.createElement(w.a,{url:x.base_url.value+"rss.xml"})),o.a.createElement("div",{className:"vertical"},o.a.createElement("div",{className:"main-header-content inner"},o.a.createElement(g.a,{text:x.title.value}),o.a.createElement(E.a,{text:x.metadata__description.value})))),o.a.createElement("div",null,o.a.createElement(f.a,{page:t,pages:a,total:n,limit:l,prev:r,next:i},o.a.createElement(s.a,{articleEdges:C})))))},t}(o.a.Component),_="2194422173";t.default=x},279:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-index-js-6e3ddef48d48c46622d7.js.map