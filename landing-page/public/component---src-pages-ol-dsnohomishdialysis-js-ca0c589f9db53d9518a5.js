(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{194:function(e,t,a){"use strict";a.r(t);var n=a(248),r=a.n(n),i=(a(234),a(249)),s=a.n(i),o=a(34),c=a.n(o),l=a(7),d=a.n(l),u=a(0),m=a.n(u),h=a(325),f=a.n(h),p=a(203),b=a(211),y=a(992),v=a(991),g=a(281),C=a(292),E=b.a.div.withConfig({displayName:"OLDsnohomishdialysis__Container",componentId:"sc-1ke9i74-0"})(["position:relative;z-index:20;padding:0.5rem 0;padding-bottom:0;background:#ffffff;justifyContent:'space-between'"]),O=b.a.div.withConfig({displayName:"OLDsnohomishdialysis__Content",componentId:"sc-1ke9i74-1"})(["max-width:1200px;margin:1rem auto;padding:0 1.25rem;margin-top:0;"]),x=b.a.h1.withConfig({displayName:"OLDsnohomishdialysis__Header",componentId:"sc-1ke9i74-2"})(["font-weight:700;font-size:48pt;padding-left:150px;letter-spacing:10px;@media (max-width:768px){font-size:28pt;}"]),k=b.a.h2.withConfig({displayName:"OLDsnohomishdialysis__Header2",componentId:"sc-1ke9i74-3"})(["padding-top:1rem;"]),N=b.a.div.withConfig({displayName:"OLDsnohomishdialysis__Line",componentId:"sc-1ke9i74-4"})(["border-bottom:solid 1.5px #000000;"]),j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={data:[],snohomish:!1,king:!1,pierce:!1},a.getData=a.getData.bind(c()(a)),a.handleSnohoClick=a.handleSnohoClick.bind(c()(a)),a}d()(t,e);var a=t.prototype;return a.handleSnohoClick=function(){this.setState({snohomish:!0}),console.log(this.state.snohomish)},a.componentWillMount=function(){this.getCsvData()},a.fetchCsv=function(){return fetch("https://cors.io/?https://raw.githubusercontent.com/kelsiej/csv/master/dialysis.csv").then(function(e){var t=e.body.getReader(),a=new TextDecoder("utf-8");return t.read().then(function(e){return a.decode(e.value)})})},a.getData=function(e){this.setState({data:e.data})},a.getCsvData=function(){var e=s()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCsv();case 2:t=e.sent,f.a.parse(t,{complete:this.getData});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){for(var e=[],t=[],a=[],n=[],r=1;r<this.state.data.length-1;r++){var i={providerNumber:this.state.data[r][0],Network:this.state.data[r][1],facilityName:this.state.data[r][2],addressLine1:this.state.data[r][3],addressLine2:this.state.data[r][4],City:this.state.data[r][5],State:this.state.data[r][6],Zip:this.state.data[r][7],County:this.state.data[r][8],phoneNumber:this.state.data[r][9],profitOrNonProfit:this.state.data[r][10],chainOwned:this.state.data[r][11],chainOrganization:this.state.data[r][12],lateShift:this.state.data[r][13],numberOfDialysisStations:this.state.data[r][14],offersInCenterHemodialysis:this.state.data[r][15],offersInCenterPeritonealDialysis:this.state.data[r][16],offersHomeHemodialysisTraining:this.state.data[r][7],Location:this.state.data[r][18]};"KING"==i.County&&t.push(i),"SNOHOMISH"==i.County&&n.push(i),"PIERCE"==i.County&&a.push(i),e.push(i)}return m.a.createElement("div",null,m.a.createElement(E,null,m.a.createElement("div",null,m.a.createElement(x,null,m.a.createElement(p.a,{to:"/",style:{textDecoration:"none"},className:"link"},"RARET")),m.a.createElement(O,null,m.a.createElement(N,null),m.a.createElement(y.a,{style:{minHeight:"60px"},bg:"light",variant:"light"},m.a.createElement(v.a,{className:"tabs"},m.a.createElement(v.a.Link,null,m.a.createElement(p.a,{to:"/",className:"link",style:{textDecoration:"none"}},"Home")),m.a.createElement(v.a.Link,null,"Resources"),m.a.createElement(v.a.Link,{style:{color:"black"}},"Road Conditions"))),m.a.createElement(k,null,"Dialysis Clinics"),m.a.createElement(g.a,{onClick:this.handleSnohoClick,variant:"dark"},"Go Back"))),m.a.createElement("div",null,m.a.createElement(O,null,e.map(function(e,t){return m.a.createElement("div",{className:"row",key:t},m.a.createElement(C.a,null,[m.a.createElement(C.a.Body,null,m.a.createElement(C.a.Title,null,e.facilityName," "),m.a.createElement(C.a.Text,{className:"fosfo",key:t}," Phone Number: ",e.phoneNumber," ",m.a.createElement("br",null),"  Address: ",e.addressLine1))]))})))))},t}(m.a.Component);t.default=j},203:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(32),c=a.n(o);a.d(t,"a",function(){return c.a});a(205);var l=r.a.createContext({}),d=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},205:function(e,t,a){var n;e.exports=(n=a(212))&&n.default||n},212:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(59),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},281:function(e,t,a){"use strict";var n=a(206),r=a(210),i=a(209),s=a(208),o=a.n(s),c=a(0),l=a.n(c),d=a(213),u=a(254),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.variant,i=e.size,s=e.active,c=e.className,d=e.block,m=e.type,h=e.as,f=e.innerRef,p=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as","innerRef"]),b=o()(c,t,s&&"active",t+"-"+a,d&&t+"-block",i&&t+"-"+i);if(p.href)return l.a.createElement(u.a,Object(n.a)({},p,{as:h,innerRef:f,className:o()(b,p.disabled&&"disabled")}));var y=h||"button";return f&&(p.ref=f),l.a.createElement(y,Object(n.a)({},p,{type:m,className:b}))},t}(l.a.Component);m.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=Object(d.a)(m,{prefix:"btn",forwardRefAs:"innerRef"})},292:function(e,t,a){"use strict";var n=a(206),r=a(210),i=a(209),s=a(208),o=a.n(s),c=a(0),l=a.n(c),d=a(213),u=a(240),m=function(e){return l.a.forwardRef(function(t,a){return l.a.createElement("div",Object(n.a)({},t,{ref:a,className:o()(t.className,e)}))})},h=a(241),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,i=e.variant,s=e.as,c=Object(r.a)(e,["bsPrefix","className","variant","as"]),d=i?t+"-"+i:t;return l.a.createElement(s,Object(n.a)({className:o()(d,a)},c))},t}(l.a.Component);f.defaultProps={as:"img",variant:null};var p=Object(d.a)(f,"card-img"),b=Object(u.a)("card-body"),y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}return Object(i.a)(t,e),t.getDerivedStateFromProps=function(e){return{cardContext:{cardHeaderBsPrefix:e.bsPrefix+"-header"}}},t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,i=e.as,s=e.bg,c=e.text,d=e.border,u=e.body,m=e.children,f=Object(r.a)(e,["bsPrefix","className","as","bg","text","border","body","children"]),p=o()(a,t,s&&"bg-"+s,c&&"text-"+c,d&&"border-"+d);return l.a.createElement(h.a.Provider,{value:this.state.cardContext},l.a.createElement(i,Object(n.a)({className:p},f),u?l.a.createElement(b,null,m):m))},t}(l.a.Component);y.defaultProps={as:"div",body:!1};var v=m("h5"),g=m("h6"),C=Object(d.a)(y,"card");C.Img=p,C.Title=Object(u.a)("card-title",{Component:v}),C.Subtitle=Object(u.a)("card-subtitle",{Component:g}),C.Body=b,C.Link=Object(u.a)("card-link",{Component:"a"}),C.Text=Object(u.a)("card-text",{Component:"p"}),C.Header=Object(u.a)("card-header"),C.Footer=Object(u.a)("card-footer"),C.ImgOverlay=Object(u.a)("card-img-overlay");t.a=C}}]);
//# sourceMappingURL=component---src-pages-ol-dsnohomishdialysis-js-ca0c589f9db53d9518a5.js.map