(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(e,t,a){"use strict";a.r(t);var i=a(7),n=a.n(i),r=a(0),o=a.n(r),s=a(183),l=a(199),d=a.n(l),c=a(190),u=a(187),p=a(193),f=(a(186),a(185)),m=c.a.div.withConfig({displayName:"title__Container",componentId:"ts06gy-0"})(["position:relative;z-index:20;margin:0 auto;padding:2.5rem 0;text-align:center;top:6vh;"]),h=c.a.h1.withConfig({displayName:"title__Header",componentId:"ts06gy-1"})(["font-weight:700;font-size:48pt;letter-spacing:10px;color:white;"]),g=c.a.p.withConfig({displayName:"title__Subtitle",componentId:"ts06gy-2"})(["color:#484848;font-weight:400;font-size:22pt;line-height:1;color:white;letter-spacing:0.5px;"]),y=(c.a.div.withConfig({displayName:"title__Dash",componentId:"ts06gy-3"})(["padding-top:3.75rem;border-bottom:solid 1px #767676;"]),function(e){function t(){return e.call(this)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement(m,null,o.a.createElement(h,null,"RARET"),o.a.createElement(g,null,"Regional Alliance for Resilient and Equitable Transportation"))},t}(o.a.Component));a.d(t,"query",function(){return j});Object(c.a)(s.Link).withConfig({displayName:"pages__StyledLink",componentId:"sc-6kvjaa-0"})(["position:relative;text-decoration:none;z-index:20;left:5rem;top:5vh;"]),c.a.img.withConfig({displayName:"pages__Logo",componentId:"sc-6kvjaa-1"})(["max-width:6rem;margin:0;"]);var b=Object(c.a)(d.a).withConfig({displayName:"pages__Image",componentId:"sc-6kvjaa-2"})(["bottom:5vh;left:1.25rem;right:1.25rem;top:1.25rem;"]),v=c.a.div.withConfig({displayName:"pages__Container",componentId:"sc-6kvjaa-3"})(["position:relative;z-index:20;padding:1.25rem 0;background:#ffffff;margin-top:30vh;"]),w=c.a.div.withConfig({displayName:"pages__Content",componentId:"sc-6kvjaa-4"})(["max-width:1080px;margin:1rem auto;padding:0 1.25rem;"]),S=c.a.p.withConfig({displayName:"pages__About",componentId:"sc-6kvjaa-5"})(["max-width:800px;margin:2.5rem auto;font-weight:300;font-size:16pt;line-height:1.5;"]),E=c.a.div.withConfig({displayName:"pages__Dash",componentId:"sc-6kvjaa-6"})(["padding-top:2rem;border-bottom:solid 1.5px #dddddd;"]),I=c.a.div.withConfig({displayName:"pages__StatementWrapper",componentId:"sc-6kvjaa-7"})(["max-width:800px;margin:2.5rem auto;"]),x=c.a.p.withConfig({displayName:"pages__Statement",componentId:"sc-6kvjaa-8"})(["padding:1.25rem 0;font-weight:300;font-size:18pt;line-height:1.5;text-align:center;"]),N=c.a.div.withConfig({displayName:"pages__CardGrid",componentId:"sc-6kvjaa-9"})(["padding:1.25rem 0;margin:1.25rem auto;"]),R=c.a.div.withConfig({displayName:"pages__CardWrapper",componentId:"sc-6kvjaa-10"})(["margin:1.25rem auto;break-inside:avoid;"]),L=function(e){function t(){return e.call(this)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement(u.a,null,o.a.createElement(p.a,{title:"Home",keywords:["gatsby","application","react"]}),o.a.createElement(f.a,{siteTitle:"Team Sodo"}),o.a.createElement(y,null),o.a.createElement(b,{fluid:this.props.data.hero.childImageSharp.fluid,style:{position:"fixed"}}),o.a.createElement(v,null,o.a.createElement(w,null,o.a.createElement(S,null,"The Regional Alliance for Resilient and Equitable Transportation (RARET) covers King, Snohomish, and Pierce Counties. RARET works with special needs transportation providers (think paratransit vehicles) to find ways to supplement the system in event of a major emergency, such as an earthquake, fire, or flooding."),o.a.createElement(E,null),o.a.createElement(I,null,o.a.createElement("h6",{style:{textAlign:"center",color:"#767676"}},"WHAT TEAM SODO IS BUILDING"),o.a.createElement(x,null,"We're creating and piloting a central repository of road conditions to provide a one-stop-shop of transportation conditions and situational awareness in the central Puget Sound region   ")),o.a.createElement(E,null),o.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}}),o.a.createElement(N,null,o.a.createElement(R,null,o.a.createElement(d.a,{fluid:this.props.data.freeway.childImageSharp.fluid})),o.a.createElement(R,null,o.a.createElement(d.a,{fluid:this.props.data.viaduct.childImageSharp.fluid}))))))},t}(o.a.Component),j=(t.default=L,"826126995")},183:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(182),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(184),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var p=n.a.createContext({}),f=function(e){return n.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},184:function(e,t,a){var i;e.exports=(i=a(189))&&i.default||i},185:function(e,t,a){"use strict";var i=a(183),n=a(4),r=a.n(n),o=a(0),s=a.n(o),l=a(190),d=a(186),c=a.n(d),u=l.a.img.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-0"})(["max-width:6rem;margin:0;"]),p=(l.a.h1.withConfig({displayName:"header__HeroText",componentId:"sc-31ozxh-1"})(["text-align:center;color:white;"]),function(e){e.siteTitle;return s.a.createElement("header",{style:{background:"none",marginBottom:"1.25rem",zIndex:"20",position:"relative"}},s.a.createElement("div",{style:{margin:"0 auto",marginTop:"2rem",maxWidth:1080,padding:"0.65em 1.0875rem"}},s.a.createElement(i.Link,{to:"/",style:{textDecoration:"none"}},s.a.createElement(u,{src:c.a}))))});p.propTypes={siteTitle:r.a.string},p.defaultProps={siteTitle:""},t.a=p},186:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDUuMjQgMTA3LjQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZvbnQtc2l6ZTozNnB4O2ZpbGw6I2ZmZjtmb250LWZhbWlseTpQcm94aW1hTm92YS1Cb2xkLCBQcm94aW1hIE5vdmE7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjAuMDVlbTt9LmNscy0ye2ZvbnQtc2l6ZTo1NnB4O2ZvbnQtZmFtaWx5OlByb3hpbWFOb3ZhLUV4dHJhYmxkLCBQcm94aW1hIE5vdmE7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOjAuMmVtO308L3N0eWxlPjwvZGVmcz48dGl0bGU+VGVhbS1Tb2RvLUxvZ28tV2hpdGU8L3RpdGxlPjx0ZXh0IGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUuNjUgMjkuOTkpIj5URUFNPHRzcGFuIGNsYXNzPSJjbHMtMiI+PHRzcGFuIHg9Ii00NS42NSIgeT0iNTYiPlNPRE88L3RzcGFuPjwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg=="},187:function(e,t,a){"use strict";var i=a(188),n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(183),d=(a(185),a(191),a(192),function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)))},data:i})});d.propTypes={children:s.a.node.isRequired},t.a=d},188:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},189:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(57),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){"use strict";var i=a(194),n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(195),d=a.n(l),c=a(183);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return r.a.createElement(c.StaticQuery,{query:p,render:function(e){var i=t||e.site.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var p="1025518380"},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},199:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),o=i(a(56)),s=i(a(196)),l=i(a(197)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return p[a]||!1},m=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+s+l+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,p[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,p=void 0===c?{}:c,f=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.Tag,w=e.itemProp,S="boolean"==typeof b?"lightgray":b,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,p),I=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),x={title:t,alt:this.state.isVisible?"":a,style:E,className:f};if(m){var N=m;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&d.default.createElement(y,(0,l.default)({src:N.base64},x)),N.tracedSVG&&d.default.createElement(y,(0,l.default)({src:N.tracedSVG},x)),S&&d.default.createElement(v,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),d.default.createElement(y,{alt:a,title:t,src:N.src,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},N))}}))}if(h){var R=h,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},r);return"inherit"===r.display&&delete L.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},x)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},x)),S&&d.default.createElement(v,{title:t,style:{backgroundColor:S,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=b;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-6c52fce39686a25c6438.js.map