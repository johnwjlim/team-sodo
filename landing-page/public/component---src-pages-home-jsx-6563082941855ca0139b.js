(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{202:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n.n(a),i=n(0),r=n.n(i),c=n(203),l=n(240),s=n.n(l),u=n(208),m=n(252),d=n(257),h=n(356),p=n.n(h),f=u.a.header.withConfig({displayName:"home-header__Container",componentId:"sc-1nmimym-0"})(["position:-webkit-sticky;position:sticky;top:0;left:14vw;width:100%;max-width:1200px;margin:0 auto;padding:1rem 0;display:flex;justify-content:space-between;color:",";"],function(e){return e.white?"white":"#333333"}),y=Object(u.a)(c.a).withConfig({displayName:"home-header__Title",componentId:"sc-1nmimym-1"})(["font-family:neue-haas-unica;text-decoration:none;font-weight:600;font-size:32px;letter-spacing:7px;"]),g=u.a.div.withConfig({displayName:"home-header__Links",componentId:"sc-1nmimym-2"})(["display:flex;align-items:center;"]),w=Object(u.a)(c.a).withConfig({displayName:"home-header__StyledLink",componentId:"sc-1nmimym-3"})(["font-family:neue-haas-unica;text-decoration:none;font-size:18px;margin-left:3rem;"]),b=function(e){function t(){return e.call(this)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement(p.a,null,0==this.props.display?r.a.createElement(f,null,r.a.createElement(y,{to:"/home"},"RARET"),r.a.createElement(g,null,r.a.createElement(w,{to:"/home"},"About"),r.a.createElement(w,{to:"/resources"},"Resources"),r.a.createElement(w,{to:"/roadalerts"},"Road Alerts"))):r.a.createElement(f,{white:!0},r.a.createElement(y,{to:"/home"},"RARET"),r.a.createElement(g,null,r.a.createElement(w,{to:"/home"},"About"),r.a.createElement(w,{to:"/resources"},"Resources"),r.a.createElement(w,{to:"/roadalerts"},"Road Alerts"))))},t}(r.a.Component),x=u.a.h1.withConfig({displayName:"roadalertdesc__Desc",componentId:"sc-1ev3iej-0"})(["font-family:neue-haas-unica;line-height:1.5;color:white;font-size:36px;font-weight:500;max-width:635px;"]),E=function(e){function t(){return e.call(this)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement(x,null,"Centralized database of road conditions in the Central Puget Sound region")},t}(r.a.Component),v=u.a.h1.withConfig({displayName:"resourcedesc__Desc",componentId:"sc-9gtjn-0"})(["font-family:neue-haas-unica;margin-left:2rem;line-height:1.5;color:white;font-size:36px;font-weight:500;max-width:635px;"]),C=function(e){function t(){return e.call(this)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement(v,null,"List of available resources in the Central Puget Sound Region")},t}(r.a.Component),I=u.a.h1.withConfig({displayName:"aboutdesc__Desc",componentId:"sc-1q84e9j-0"})(["font-family:neue-haas-unica;margin-left:2rem;line-height:1.5;color:white;font-size:36px;font-weight:500;max-width:635px;"]),N=function(e){function t(){return e.call(this)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement(I,null,"We're a group of Informatics students from the University of Washington working in collaboration with Hopelink")},t}(r.a.Component);n.d(t,"query",function(){return G});var j=u.a.div.withConfig({displayName:"home__Container",componentId:"sc-1a2hyy0-0"})(["position:relative;z-index:20;margin:0 auto;"]),_=Object(u.a)(s.a).withConfig({displayName:"home__Image",componentId:"sc-1a2hyy0-1"})(["bottom:0;left:0;right:0;top:0;"]),R=u.a.div.withConfig({displayName:"home__Background",componentId:"sc-1a2hyy0-2"})(["background-color:#EDFF00;bottom:0;left:0;right:0;top:0;position:fixed"]),M=u.a.div.withConfig({displayName:"home__Content",componentId:"sc-1a2hyy0-3"})(["margin:0 auto;max-width:1200px;"]),T=u.a.div.withConfig({displayName:"home__Row",componentId:"sc-1a2hyy0-4"})(["display:flex;align-items:baseline;position:absolute;top:35vh;justify-content:space-between;width:100%;max-width:1200px;z-index:20;border-top:solid 1px #333333;border-bottom:solid 1px #333333;padding:2em 0;"]),Z=Object(u.a)(c.a).withConfig({displayName:"home__StyledLink",componentId:"sc-1a2hyy0-5"})(["font-family:neue-haas-unica;text-decoration:none;color:#333333;display:block;padding:0.65rem 0;font-weight:500;font-size:42px;&:hover{color:white;}"]),z=u.a.h1.withConfig({displayName:"home__Desc",componentId:"sc-1a2hyy0-6"})(["font-family:neue-haas-unica;margin-left:2rem;line-height:1.5;color:white;font-size:42px;font-weight:500;max-width:34em;"]),k=(Object(u.a)(z).withConfig({displayName:"home__DefaultDesc",componentId:"sc-1a2hyy0-7"})(["color:#333333;"]),function(e){function t(){var t;return(t=e.call(this)||this).state={display:0},t}o()(t,e);var n=t.prototype;return n.changeColor=function(e){this.setState({display:e})},n.renderDescription=function(e){switch(e){case 1:return r.a.createElement(E,null);case 2:return r.a.createElement(C,null);case 3:return r.a.createElement(N,null);default:return r.a.createElement(r.a.Fragment,null)}},n.renderBackground=function(e){switch(e){case 1:return r.a.createElement(_,{fluid:this.props.data.roadAlerts.childImageSharp.fluid,style:{position:"fixed"}});case 2:return r.a.createElement(_,{fluid:this.props.data.resources.childImageSharp.fluid,style:{position:"fixed"}});case 3:return r.a.createElement(_,{fluid:this.props.data.about.childImageSharp.fluid,style:{position:"fixed"}});default:return r.a.createElement(R,null)}},n.render=function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement(d.a,{title:"Home"}),this.renderBackground(this.state.display),r.a.createElement(j,null,r.a.createElement(b,{display:this.state.display}),r.a.createElement(M,null,r.a.createElement(T,null,r.a.createElement("h1",null,r.a.createElement(Z,{onMouseLeave:function(){return e.changeColor(0)},onMouseEnter:function(){return e.changeColor(1)},to:"/home"},"Road Alerts"),r.a.createElement(Z,{onMouseLeave:function(){return e.changeColor(0)},onMouseEnter:function(){return e.changeColor(2)},to:"/home"},"Resources"),r.a.createElement(Z,{onMouseLeave:function(){return e.changeColor(0)},onMouseEnter:function(){return e.changeColor(3)},to:"/home"},"About")),this.renderDescription(this.state.display)))))},t}(r.a.Component)),G=(t.default=k,"1540855375")},203:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=n(32),l=n.n(c);n.d(t,"a",function(){return l.a});n(205);var s=o.a.createContext({}),u=function(e){return o.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},205:function(e,t,n){var a;e.exports=(a=n(209))&&a.default||a},209:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=n(59),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},244:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},245:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDUuMjQgMTA3LjQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZvbnQtc2l6ZTozNnB4O2ZpbGw6I2ZmZjtmb250LWZhbWlseTpQcm94aW1hTm92YS1Cb2xkLCBQcm94aW1hIE5vdmE7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjAuMDVlbTt9LmNscy0ye2ZvbnQtc2l6ZTo1NnB4O2ZvbnQtZmFtaWx5OlByb3hpbWFOb3ZhLUV4dHJhYmxkLCBQcm94aW1hIE5vdmE7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOjAuMmVtO308L3N0eWxlPjwvZGVmcz48dGl0bGU+VGVhbS1Tb2RvLUxvZ28tV2hpdGU8L3RpdGxlPjx0ZXh0IGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUuNjUgMjkuOTkpIj5URUFNPHRzcGFuIGNsYXNzPSJjbHMtMiI+PHRzcGFuIHg9Ii00NS42NSIgeT0iNTYiPlNPRE88L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg=="},252:function(e,t,n){"use strict";var a=n(244),o=n(0),i=n.n(o),r=n(4),c=n.n(r),l=n(203),s=n(208),u=n(245),m=n.n(u),d=s.a.img.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-0"})(["max-width:6rem;margin:0;"]),h=(s.a.h1.withConfig({displayName:"header__HeroText",componentId:"sc-31ozxh-1"})(["text-align:center;color:white;"]),function(e){e.siteTitle;return i.a.createElement("header",{style:{background:"none",marginBottom:"1.25rem",zIndex:"20",position:"relative"}},i.a.createElement("div",{style:{margin:"0 auto",marginTop:"2rem",maxWidth:1080,padding:"0.65em 1.0875rem"}},i.a.createElement(l.a,{to:"/",style:{textDecoration:"none"}},i.a.createElement(d,{src:m.a}))))});h.propTypes={siteTitle:c.a.string},h.defaultProps={siteTitle:""};n(293),n(294);var p=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:a})};p.propTypes={children:c.a.node.isRequired};t.a=p},257:function(e,t,n){"use strict";var a=n(258),o=n(0),i=n.n(o),r=n(4),c=n.n(r),l=n(323),s=n.n(l),u=n(203);function m(e){var t=e.description,n=e.lang,o=e.meta,r=e.keywords,c=e.title;return i.a.createElement(u.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},258:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-home-jsx-6563082941855ca0139b.js.map