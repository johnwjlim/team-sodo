(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{185:function(e,t,n){"use strict";n.r(t);var a=n(249),r=n.n(a),i=(n(234),n(250)),c=n.n(i),o=n(34),s=n.n(o),u=n(7),l=n.n(u),d=n(0),p=n.n(d),m=n(326),f=n.n(m),h=n(203),g=n(212),v=n(1018),y=n(1017),w=(n(298),n(583),g.a.div.withConfig({displayName:"cancer__Container",componentId:"sc-14uns3j-0"})(["position:relative;z-index:20;padding:0.5rem 0;padding-bottom:0;background:#ffffff;justifyContent:'space-between'"])),C=g.a.div.withConfig({displayName:"cancer__Content",componentId:"sc-14uns3j-1"})(["max-width:1200px;margin:1rem auto;padding:0 1.25rem;margin-top:0;"]),E=g.a.h1.withConfig({displayName:"cancer__Header",componentId:"sc-14uns3j-2"})(["font-weight:700;font-size:48pt;padding-left:150px;letter-spacing:10px;@media (max-width:768px){font-size:28pt;}"]),b=g.a.h2.withConfig({displayName:"cancer__Header2",componentId:"sc-14uns3j-3"})(["padding-top:1rem;"]),x=g.a.div.withConfig({displayName:"cancer__Line",componentId:"sc-14uns3j-4"})(["border-bottom:solid 1.5px #000000;"]),k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={data:[],spinnerOn:!0},n.getData=n.getData.bind(s()(n)),n}l()(t,e);var n=t.prototype;return n.componentWillMount=function(){this.getCsvData()},n.fetchCsv=function(){return fetch("https://cors.io/?http://raw.githubusercontent.com/kelsiej/csv/master/Cancer-Treatment-Facility-Spreadsheet-inprogress.csv").then(function(e){var t=e.body.getReader(),n=new TextDecoder("utf-8");return t.read().then(function(e){return n.decode(e.value)})})},n.getData=function(e){this.setState({data:e.data})},n.getCsvData=function(){var e=c()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCsv();case 2:t=e.sent,f.a.parse(t,{complete:this.getData}),this.setState({spinnerOn:!1});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.render=function(){this.state.data;return p.a.createElement("div",null,p.a.createElement(w,null,p.a.createElement("div",null,p.a.createElement(E,null,p.a.createElement(h.a,{to:"/",style:{textDecoration:"none"},className:"link"},"RARET")),p.a.createElement(C,null,p.a.createElement(x,null),p.a.createElement(v.a,{style:{minHeight:"60px"},bg:"light",variant:"light"},p.a.createElement(y.a,{className:"tabs"},p.a.createElement(y.a.Link,null,p.a.createElement(h.a,{to:"/",className:"link",style:{textDecoration:"none"}},"Home")),p.a.createElement(y.a.Link,null,"Resources"),p.a.createElement(y.a.Link,{style:{color:"black"}},"Road Conditions"))),p.a.createElement(b,null," Cancer Treatment Clinics")))))},t}(p.a.Component);t.default=k},203:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(32),s=n.n(o);n.d(t,"a",function(){return s.a});n(206);var u=r.a.createContext({}),l=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},206:function(e,t,n){var a;e.exports=(a=n(213))&&a.default||a},213:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(59),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u}}]);
//# sourceMappingURL=component---src-pages-cancer-js-7276fe687ed5f5e10f0a.js.map