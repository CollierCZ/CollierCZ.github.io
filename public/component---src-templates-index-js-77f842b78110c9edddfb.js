(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);a(78);var n=a(8),l=a.n(n),r=a(0),o=a.n(r),i=a(151),c=a.n(i),s=a(177),u=a(157),p=a(158),m=a(145),d=a(159),h=a(160),v=a(165),g=a(167),E=a(168),f=a(176),y=a(161),C=(a(52),a(244)),O=(a(278),function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,a=e.color;return t&&t.length>0?o.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return o.a.createElement(C.SocialIcon,{key:e,className:"social-media-icon",url:e,color:a,style:{height:null,width:null}})})):null},t}(o.a.Component));a(175);a.d(t,"query",function(){return x});var w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return l()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.page,a=e.pages,n=e.total,l=e.limit,r=e.prev,i=e.next,C=this.props.data.articles.edges,w=this.props.data.config,x=w.socialmedia.value.split(",");return o.a.createElement(p.a,{className:"home-template",isOpen:this.state.menuOpen},o.a.createElement(c.a,{title:w.title.value}),o.a.createElement(y.a,{articleEdges:C,seoConfig:w}),o.a.createElement(v.a,{config:w,onClose:this.handleOnClose}),o.a.createElement(m.a,null,o.a.createElement(d.a,{cover:w.splash_image.value[0].url},o.a.createElement(h.a,{overlay:w.splash_image.value[0].url},o.a.createElement(u.a,{logo:w.blog_logo.value[0].url,title:w.title.value}),o.a.createElement(O,{urls:x,color:"currentColor"})),o.a.createElement("div",{className:"vertical"},o.a.createElement("div",{className:"main-header-content inner"},o.a.createElement(g.a,{text:w.title.value}),o.a.createElement(E.a,{text:w.metadata__description.value})))),o.a.createElement("div",null,o.a.createElement(f.a,{page:t,pages:a,total:n,limit:l,prev:r,next:i},o.a.createElement(s.a,{articleEdges:C})))))},t}(o.a.Component),x="2194422173";t.default=w},278:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-index-js-77f842b78110c9edddfb.js.map