(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{186:function(t,e,a){"use strict";a.r(e);var n=a(249),i=a.n(n),s=(a(234),a(250)),r=a.n(s),o=a(34),d=a.n(o),l=a(7),h=a.n(l),c=a(0),u=a.n(c),f=a(326),p=a.n(f),y=a(203),m=a(212),b=a(1018),C=a(1017),g=a(262),v=(a(298),m.a.div.withConfig({displayName:"dialysis__Container",componentId:"sc-1hh67hj-0"})(["position:relative;z-index:20;padding:0.5rem 0;padding-bottom:0;background:#ffffff;justifyContent:'space-between'"])),O=m.a.div.withConfig({displayName:"dialysis__Content",componentId:"sc-1hh67hj-1"})(["max-width:1200px;margin:1rem auto;padding:0 1.25rem;margin-top:0;"]),w=m.a.h1.withConfig({displayName:"dialysis__Header",componentId:"sc-1hh67hj-2"})(["font-weight:700;font-size:48pt;padding-left:150px;letter-spacing:10px;@media (max-width:768px){font-size:28pt;}"]),k=m.a.h2.withConfig({displayName:"dialysis__Header2",componentId:"sc-1hh67hj-3"})(["padding-top:1rem;"]),S=m.a.div.withConfig({displayName:"dialysis__Line",componentId:"sc-1hh67hj-4"})(["border-bottom:solid 1.5px #000000;"]),N=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={data:[],snohomish:!1,king:!1,allCounty:!0,pierce:!1,currentCountyArray:[],spinnerOn:!0},a.getData=a.getData.bind(d()(a)),a.handleSnohoClick=a.handleSnohoClick.bind(d()(a)),a.handlePierceClick=a.handlePierceClick.bind(d()(a)),a.countyDictionaries=a.countyDictionaries.bind(d()(a)),a.handleKingClick=a.handleKingClick.bind(d()(a)),a.handleAllCountiesClick=a.handleAllCountiesClick.bind(d()(a)),a}h()(e,t);var a=e.prototype;return a.handleSnohoClick=function(){for(var t=[],e=1;e<this.state.data.length-1;e++){var a={providerNumber:this.state.data[e][0],Network:this.state.data[e][1],facilityName:this.state.data[e][2],addressLine1:this.state.data[e][3],addressLine2:this.state.data[e][4],City:this.state.data[e][5],State:this.state.data[e][6],Zip:this.state.data[e][7],County:this.state.data[e][8],phoneNumber:this.state.data[e][9],profitOrNonProfit:this.state.data[e][10],chainOwned:this.state.data[e][11],chainOrganization:this.state.data[e][12],lateShift:this.state.data[e][13],numberOfDialysisStations:this.state.data[e][14],offersInCenterHemodialysis:this.state.data[e][15],offersInCenterPeritonealDialysis:this.state.data[e][16],offersHomeHemodialysisTraining:this.state.data[e][7],Location:this.state.data[e][18]};"SNOHOMISH"==a.County&&t.push(a),this.setState({allCounty:!1,snohomish:!0,currentCountyArray:t,spinnerOn:!1})}},a.handleAllCountiesClick=function(){for(var t=[],e=1;e<this.state.data.length-1;e++){var a={providerNumber:this.state.data[e][0],Network:this.state.data[e][1],facilityName:this.state.data[e][2],addressLine1:this.state.data[e][3],addressLine2:this.state.data[e][4],City:this.state.data[e][5],State:this.state.data[e][6],Zip:this.state.data[e][7],County:this.state.data[e][8],phoneNumber:this.state.data[e][9],profitOrNonProfit:this.state.data[e][10],chainOwned:this.state.data[e][11],chainOrganization:this.state.data[e][12],lateShift:this.state.data[e][13],numberOfDialysisStations:this.state.data[e][14],offersInCenterHemodialysis:this.state.data[e][15],offersInCenterPeritonealDialysis:this.state.data[e][16],offersHomeHemodialysisTraining:this.state.data[e][7],Location:this.state.data[e][18]};t.push(a),this.setState({allCounty:!0,currentCountyArray:t,spinnerOn:!1})}},a.handlePierceClick=function(){for(var t=[],e=1;e<this.state.data.length-1;e++){var a={providerNumber:this.state.data[e][0],Network:this.state.data[e][1],facilityName:this.state.data[e][2],addressLine1:this.state.data[e][3],addressLine2:this.state.data[e][4],City:this.state.data[e][5],State:this.state.data[e][6],Zip:this.state.data[e][7],County:this.state.data[e][8],phoneNumber:this.state.data[e][9],profitOrNonProfit:this.state.data[e][10],chainOwned:this.state.data[e][11],chainOrganization:this.state.data[e][12],lateShift:this.state.data[e][13],numberOfDialysisStations:this.state.data[e][14],offersInCenterHemodialysis:this.state.data[e][15],offersInCenterPeritonealDialysis:this.state.data[e][16],offersHomeHemodialysisTraining:this.state.data[e][7],Location:this.state.data[e][18]};"PIERCE"==a.County&&t.push(a),this.setState({allCounty:!1,pierce:!0,currentCountyArray:t,spinnerOn:!1})}},a.handleKingClick=function(){for(var t=[],e=1;e<this.state.data.length-1;e++){var a={providerNumber:this.state.data[e][0],Network:this.state.data[e][1],facilityName:this.state.data[e][2],addressLine1:this.state.data[e][3],addressLine2:this.state.data[e][4],City:this.state.data[e][5],State:this.state.data[e][6],Zip:this.state.data[e][7],County:this.state.data[e][8],phoneNumber:this.state.data[e][9],profitOrNonProfit:this.state.data[e][10],chainOwned:this.state.data[e][11],chainOrganization:this.state.data[e][12],lateShift:this.state.data[e][13],numberOfDialysisStations:this.state.data[e][14],offersInCenterHemodialysis:this.state.data[e][15],offersInCenterPeritonealDialysis:this.state.data[e][16],offersHomeHemodialysisTraining:this.state.data[e][7],Location:this.state.data[e][18]};"KING"==a.County&&t.push(a),this.setState({allCounty:!1,king:!0,currentCountyArray:t,spinnerOn:!1})}},a.componentWillMount=function(){this.getCsvData()},a.fetchCsv=function(){return fetch("https://cors.io/?http://raw.githubusercontent.com/kelsiej/csv/master/dialysis.csv").then(function(t){var e=t.body.getReader(),a=new TextDecoder("utf-8");return e.read().then(function(t){return a.decode(t.value)})})},a.getData=function(t){this.setState({data:t.data})},a.getCsvData=function(){var t=r()(i.a.mark(function t(){var e,a,n,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchCsv();case 2:for(e=t.sent,p.a.parse(e,{complete:this.getData}),a=[],n=1;n<this.state.data.length-1;n++)s={providerNumber:this.state.data[n][0],Network:this.state.data[n][1],facilityName:this.state.data[n][2],addressLine1:this.state.data[n][3],addressLine2:this.state.data[n][4],City:this.state.data[n][5],State:this.state.data[n][6],Zip:this.state.data[n][7],County:this.state.data[n][8],phoneNumber:this.state.data[n][9],profitOrNonProfit:this.state.data[n][10],chainOwned:this.state.data[n][11],chainOrganization:this.state.data[n][12],lateShift:this.state.data[n][13],numberOfDialysisStations:this.state.data[n][14],offersInCenterHemodialysis:this.state.data[n][15],offersInCenterPeritonealDialysis:this.state.data[n][16],offersHomeHemodialysisTraining:this.state.data[n][7],Location:this.state.data[n][18]},a.push(s),this.setState({allCounty:!1,currentCountyArray:a,spinnerOn:!1});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),a.countyDictionaries=function(){for(var t=[],e=[],a=[],n=[],i=1;i<this.state.data.length-1;i++){var s={providerNumber:this.state.data[i][0],Network:this.state.data[i][1],facilityName:this.state.data[i][2],addressLine1:this.state.data[i][3],addressLine2:this.state.data[i][4],City:this.state.data[i][5],State:this.state.data[i][6],Zip:this.state.data[i][7],County:this.state.data[i][8],phoneNumber:this.state.data[i][9],profitOrNonProfit:this.state.data[i][10],chainOwned:this.state.data[i][11],chainOrganization:this.state.data[i][12],lateShift:this.state.data[i][13],numberOfDialysisStations:this.state.data[i][14],offersInCenterHemodialysis:this.state.data[i][15],offersInCenterPeritonealDialysis:this.state.data[i][16],offersHomeHemodialysisTraining:this.state.data[i][7],Location:this.state.data[i][18]};"KING"==s.County&&e.push(s),"SNOHOMISH"==s.County&&n.push(s),"PIERCE"==s.County&&a.push(s),t.push(s)}this.state.county;1==this.allCounty?this.setState({currentCountyArray:t}):1==this.snohomish?this.setState({currentCountyArray:n}):1==this.pierce?this.setState({currentCountyArray:a}):1==this.king&&this.setState({currentCountyArray:e})},a.render=function(){for(var t=[],e=[],a=[],n=[],i=1;i<this.state.data.length-1;i++){var s={providerNumber:this.state.data[i][0],Network:this.state.data[i][1],facilityName:this.state.data[i][2],addressLine1:this.state.data[i][3],addressLine2:this.state.data[i][4],City:this.state.data[i][5],State:this.state.data[i][6],Zip:this.state.data[i][7],County:this.state.data[i][8],phoneNumber:this.state.data[i][9],profitOrNonProfit:this.state.data[i][10],chainOwned:this.state.data[i][11],chainOrganization:this.state.data[i][12],lateShift:this.state.data[i][13],numberOfDialysisStations:this.state.data[i][14],offersInCenterHemodialysis:this.state.data[i][15],offersInCenterPeritonealDialysis:this.state.data[i][16],offersHomeHemodialysisTraining:this.state.data[i][7],Location:this.state.data[i][18]};"KING"==s.County&&e.push(s),"SNOHOMISH"==s.County&&n.push(s),"PIERCE"==s.County&&a.push(s),t.push(s)}this.state.currentCountyArray;return u.a.createElement("div",null,u.a.createElement(v,null,u.a.createElement("div",null,u.a.createElement(w,null,u.a.createElement(y.a,{to:"/",style:{textDecoration:"none"},className:"link"},"RARET")),u.a.createElement(O,null,u.a.createElement(S,null),u.a.createElement(b.a,{style:{minHeight:"60px"},bg:"light",variant:"light"},u.a.createElement(C.a,{className:"tabs"},u.a.createElement(C.a.Link,null,u.a.createElement(y.a,{to:"/",className:"link",style:{textDecoration:"none"}},"Home")),u.a.createElement(C.a.Link,null,"Resources"),u.a.createElement(C.a.Link,{style:{color:"black"}},"Road Conditions"))),u.a.createElement(k,null,"Dialysis Clinics"),u.a.createElement("div",{class:"flex-container"},u.a.createElement(g.a,{className:"btn1",onClick:this.handleAllCountiesClick,variant:"dark"},"All"),u.a.createElement(g.a,{className:"btn1",onClick:this.handleKingClick,variant:"dark"},"King"),u.a.createElement(g.a,{className:"btn1",onClick:this.handlePierceClick,variant:"dark"},"Pierce"),u.a.createElement(g.a,{className:"btn1",onClick:this.handleSnohoClick,variant:"dark"},"Snohomish"))))))},e}(u.a.Component);e.default=N},203:function(t,e,a){"use strict";a.d(e,"b",function(){return h});var n=a(0),i=a.n(n),s=a(4),r=a.n(s),o=a(32),d=a.n(o);a.d(e,"a",function(){return d.a});a(206);var l=i.a.createContext({}),h=function(t){return i.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},206:function(t,e,a){var n;t.exports=(n=a(213))&&n.default||n},213:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),i=a.n(n),s=a(4),r=a.n(s),o=a(59),d=a(2),l=function(t){var e=t.location,a=d.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=l},262:function(t,e,a){"use strict";var n=a(204),i=a(210),s=a(209),r=a(208),o=a.n(r),d=a(0),l=a.n(d),h=a(211),c=a(251),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(s.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.bsPrefix,a=t.variant,s=t.size,r=t.active,d=t.className,h=t.block,u=t.type,f=t.as,p=t.innerRef,y=Object(i.a)(t,["bsPrefix","variant","size","active","className","block","type","as","innerRef"]),m=o()(d,e,r&&"active",e+"-"+a,h&&e+"-block",s&&e+"-"+s);if(y.href)return l.a.createElement(c.a,Object(n.a)({},y,{as:f,innerRef:p,className:o()(m,y.disabled&&"disabled")}));var b=f||"button";return p&&(y.ref=p),l.a.createElement(b,Object(n.a)({},y,{type:u,className:m}))},e}(l.a.Component);u.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},e.a=Object(h.a)(u,{prefix:"btn",forwardRefAs:"innerRef"})},298:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,a):{};n.get||n.set?Object.defineProperty(e,a,n):e[a]=t[a]}return e.default=t,e}(a(0)),s=(n=a(4))&&n.__esModule?n:{default:n},r=a(299);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,h(e).apply(this,arguments))}var a,n,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,i.Component),a=e,(n=[{key:"render",value:function(){if(!this.props.visible)return null;var t=this.props,e=t.id,a=t.size,n=t.width,s=t.height,r=t.spinnerColor,o=t.spinnerWidth,d=a||Math.min(n,s);return i.default.createElement("div",{id:e,className:"spinner",style:{width:d,height:d,borderColor:r,borderWidth:o}})}}])&&d(a.prototype,n),s&&d(a,s),e}();u(f,"propTypes",{size:s.default.number,spinnerColor:s.default.string,spinnerWidth:s.default.number,visible:s.default.bool}),u(f,"defaultProps",{size:40,spinnerColor:"#333333",spinnerWidth:5,visible:!0});var p=(0,r.SpinnerMixin)(f);e.default=p},299:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SpinnerMixin=void 0;var n,i=(n=a(0))&&n.__esModule?n:{default:n};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function o(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c="\n.spinner {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 10px solid #333;\n  box-sizing: border-box;\n  -webkit-animation: sweep 1s linear alternate infinite, rota 0.8s linear infinite;\n          animation: sweep 1s linear alternate infinite, rota 0.8s linear infinite;\n}\n\n@keyframes rota {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes rota {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes sweep {\n  0% {\n    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);\n    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);\n  }\n  50% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);\n    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);\n  }\n  100% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);\n    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);\n  }\n}\n\n@-webkit-keyframes sweep {\n  0% {\n    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);\n  }\n  50% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);\n  }\n  100% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);\n  }\n}\n",u="spinner_id_style",f={id:0};e.SpinnerMixin=function(t){return function(e){function a(t){var e;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),e=d(this,l(a).call(this,t)),!document.getElementById(u)){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.id=u,i.type="text/css",i.styleSheet?i.styleSheet.cssText=c:i.appendChild(document.createTextNode(c)),n&&n.appendChild(i)}return f.id+=1,e.state={id:"spinner_".concat(f.id)},e}var n,s,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(a,i.default.Component),n=a,(s=[{key:"render",value:function(){return i.default.createElement(t,r({},this.props,this.state))}}])&&o(n.prototype,s),p&&o(n,p),a}()}}}]);
//# sourceMappingURL=component---src-pages-dialysis-js-9f77d6c1bf19e664af62.js.map