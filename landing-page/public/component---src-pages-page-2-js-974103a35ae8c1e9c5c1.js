(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{179:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(183),o=n(187),c=n(193);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},183:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(182),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(184),l=n.n(s);n.d(e,"PageRenderer",function(){return l.a});var d=n(32);n.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},184:function(t,e,n){var a;t.exports=(a=n(189))&&a.default||a},185:function(t,e,n){"use strict";var a=n(183),r=n(4),i=n.n(r),o=n(0),c=n.n(o),u=n(190),s=n(186),l=n.n(s),d=u.a.img.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-0"})(["max-width:6rem;margin:0;"]),m=function(t){t.siteTitle;return c.a.createElement("header",{style:{background:"none",marginBottom:"1.45rem",zIndex:"20",position:"relative"}},c.a.createElement("div",{style:{margin:"0 auto",marginTop:"1.25rem",maxWidth:1080,padding:"0.65em 1.0875rem"}},c.a.createElement(a.Link,{to:"/",style:{textDecoration:"none"}},c.a.createElement(d,{src:l.a}))))};m.propTypes={siteTitle:i.a.string},m.defaultProps={siteTitle:""},e.a=m},186:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDUuMjQgMTA3LjQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZvbnQtc2l6ZTozNnB4O2ZpbGw6I2ZmZjtmb250LWZhbWlseTpQcm94aW1hTm92YS1Cb2xkLCBQcm94aW1hIE5vdmE7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjAuMDVlbTt9LmNscy0ye2ZvbnQtc2l6ZTo1NnB4O2ZvbnQtZmFtaWx5OlByb3hpbWFOb3ZhLUV4dHJhYmxkLCBQcm94aW1hIE5vdmE7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOjAuMmVtO308L3N0eWxlPjwvZGVmcz48dGl0bGU+VGVhbS1Tb2RvLUxvZ28tV2hpdGU8L3RpdGxlPjx0ZXh0IGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUuNjUgMjkuOTkpIj5URUFNPHRzcGFuIGNsYXNzPSJjbHMtMiI+PHRzcGFuIHg9Ii00NS42NSIgeT0iNTYiPlNPRE88L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg=="},187:function(t,e,n){"use strict";var a=n(188),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(183),s=(n(185),n(191),n(192),function(t){var e=t.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e)))},data:a})});s.propTypes={children:c.a.node.isRequired},e.a=s},188:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},189:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(57),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},191:function(t,e,n){},192:function(t,e,n){},193:function(t,e,n){"use strict";var a=n(194),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(195),s=n.n(u),l=n(183);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:m,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var m="1025518380"},194:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-974103a35ae8c1e9c5c1.js.map