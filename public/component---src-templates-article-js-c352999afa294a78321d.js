(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);a(161),a(78);var n=a(8),r=a.n(n),l=a(0),o=a.n(l),c=a(146),i=a(151),u=a.n(i),s=a(158),p=a(155),m=a(156),h=a(153),f=a(157),d=a(154),E=a(162),v=a(185),y=a(178),g=a(181),N=a(183),C=a(182),b=(a(277),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("footer",{className:"article-footer"},e)},t}(o.a.Component)),x=(a(279),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author.name.value,t=this.props.author.picture.value[0].url,a=this.props.author.url.value;return t?o.a.createElement("figure",{className:"author-image"},o.a.createElement("a",{className:"img",href:a,style:{backgroundImage:'url("'+t+'")'}},o.a.createElement("span",{className:"hidden"},e+"'s Picture"))):null},t}(o.a.Component)),_=a(145),O=(a(281),a(148)),k=a.n(O),w=(a(283),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=k()("author-meta",a);return o.a.createElement("div",{className:n},t)},t}(o.a.Component)),M=(a(285),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,a=e.url;return t&&a?o.a.createElement(_.Link,{to:a},t):null},t}(o.a.Component)),P=function(e){var t=e.bio,a=e.moreArticlesUrl;return t?o.a.createElement("div",{className:"author-bio",dangerouslySetInnerHTML:{__html:t}}):o.a.createElement("p",null,"Read ",o.a.createElement(_.Link,{to:a},"more articles")," by this author.")},S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.prefix,t=this.props.author.url.value,a=this.props.author.name.value,n=this.props.author.picture.value[0].url,r=this.props.author.short_bio.value,l=e?e+"/"+t:t;return n?o.a.createElement("section",{className:"author"},o.a.createElement("h4",null,o.a.createElement(M,{url:l,name:a})),o.a.createElement(P,{bio:r,moreArticlesUrl:l}),o.a.createElement(w,null)):null},t}(o.a.Component),I=a(147),L=a.n(I),A=(a(287),function(e){var t=e.article;if(t){var a=t.path,n=t.cover,r=t.title,l=t.excerpt,c=n?{backgroundImage:"url("+n}:null,i=k()("read-next-story",e.className,{"no-cover":!n});return o.a.createElement(L.a,{className:i,style:c,to:a},o.a.createElement("section",{className:"article"},o.a.createElement("h2",null,r),o.a.createElement("p",null,l,"…")))}return null}),Y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.next,a=e.prev;return o.a.createElement("aside",{className:"read-next"},o.a.createElement(A,{article:t}),o.a.createElement(A,{className:"prev",article:a}))},t}(l.Component),F=a(184),H=(a(289),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.copyrightYear.year;return o.a.createElement("footer",{className:"site-footer clearfix"},o.a.createElement("section",{className:"copyright"},"©"," ",e||(new Date).getFullYear()," ",this.props.author))},t}(l.Component));a.d(t,"query",function(){return U});var J=function(e){return{path:"/articles/"+e.fields.slug,title:e.title.value,cover:e.teaser.value[0].url,excerpt:e.metadata__description.value}},T=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=this.props.pageContext,a=t.slug,n=t.next,r=t.prev,l=n.split("/")[2],i=r.split("/")[2],_=this.props.data.article,O=function(e,t){var a=e;return a.id||(a.id=t),a}(_,a),k=O.article_class?O.article_class:"article",w=this.props.data.config,M=O.authors[0];return o.a.createElement(d.a,{className:"article-template",isOpen:this.state.menuOpen},o.a.createElement(u.a,null,o.a.createElement("title",null,O.title.value+" | "+w.title.value)),o.a.createElement(s.a,{articlePath:a,articleNode:_,seoConfig:w,articleSEO:!0}),o.a.createElement(E.a,{config:w,onClose:this.handleOnClose}),o.a.createElement(c.a,null,o.a.createElement(p.a,{className:"article-head",cover:O.teaser.value[0].url},o.a.createElement(m.a,null,o.a.createElement(h.a,{logo:w.blog_logo.value[0].url,title:w.title.value}),o.a.createElement(f.a,{navigation:!0,onClick:this.handleOnClick}))),o.a.createElement(v.a,null,o.a.createElement(C.a,{className:k},o.a.createElement(N.a,null,o.a.createElement("h1",{className:"article-title"},O.title.value),o.a.createElement("section",{className:"article-meta"},o.a.createElement(g.a,{prefix:"Published ",date:O.publish_date.datetime}),o.a.createElement(y.a,{prefix:" in ",category:O.fields.category}),o.a.createElement(F.a,{prefix:" on ",tags:O.fields.tags}))),o.a.createElement("section",{className:"article-content",dangerouslySetInnerHTML:{__html:_.body.value}}),o.a.createElement(b,null,o.a.createElement(x,{author:M}),o.a.createElement(S,{prefix:"/author",author:M})))),o.a.createElement(Y,{next:l?J(e.next):null,prev:i?J(e.prev):null}),o.a.createElement(H,{copyrightYear:O.publish_date.datetime,author:M.name.value})))},t}(o.a.Component),U="3631136722";t.default=T},161:function(e,t,a){var n=a(27).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},277:function(e,t,a){},279:function(e,t,a){},281:function(e,t,a){},283:function(e,t,a){},285:function(e,t,a){},287:function(e,t,a){},289:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-article-js-c352999afa294a78321d.js.map