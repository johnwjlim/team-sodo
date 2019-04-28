(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{185:function(e,t,n){"use strict";n.r(t);var r=n(248),o=n.n(r),a=(n(234),n(249)),i=n.n(a),c=n(34),u=n.n(c),s=n(7),l=n.n(s),p=n(0),f=n.n(p),d=n(325),y=n.n(d),m=n(203),b=n(211),h=n(992),g=n(991),v=(n(297),b.a.div.withConfig({displayName:"cancer__Container",componentId:"sc-14uns3j-0"})(["position:relative;z-index:20;padding:0.5rem 0;padding-bottom:0;background:#ffffff;justifyContent:'space-between'"])),w=b.a.div.withConfig({displayName:"cancer__Content",componentId:"sc-14uns3j-1"})(["max-width:1200px;margin:1rem auto;padding:0 1.25rem;margin-top:0;"]),_=b.a.h1.withConfig({displayName:"cancer__Header",componentId:"sc-14uns3j-2"})(["font-weight:700;font-size:48pt;padding-left:150px;letter-spacing:10px;@media (max-width:768px){font-size:28pt;}"]),O=b.a.h2.withConfig({displayName:"cancer__Header2",componentId:"sc-14uns3j-3"})(["padding-top:1rem;"]),j=b.a.div.withConfig({displayName:"cancer__Line",componentId:"sc-14uns3j-4"})(["border-bottom:solid 1.5px #000000;"]),k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={data:[],spinnerOn:!0},n.getData=n.getData.bind(u()(n)),n}l()(t,e);var n=t.prototype;return n.componentWillMount=function(){this.getCsvData()},n.fetchCsv=function(){return fetch("https://cors.io/?http://raw.githubusercontent.com/kelsiej/csv/master/Cancer-Treatment-Facility-Spreadsheet-inprogress.csv").then(function(e){var t=e.body.getReader(),n=new TextDecoder("utf-8");return t.read().then(function(e){return n.decode(e.value)})})},n.getData=function(e){this.setState({data:e.data})},n.getCsvData=function(){var e=i()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCsv();case 2:t=e.sent,y.a.parse(t,{complete:this.getData}),this.setState({spinnerOn:!1});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.render=function(){this.state.data;return f.a.createElement("div",null,f.a.createElement(v,null,f.a.createElement("div",null,f.a.createElement(_,null,f.a.createElement(m.a,{to:"/",style:{textDecoration:"none"},className:"link"},"RARET")),f.a.createElement(w,null,f.a.createElement(j,null),f.a.createElement(h.a,{style:{minHeight:"60px"},bg:"light",variant:"light"},f.a.createElement(g.a,{className:"tabs"},f.a.createElement(g.a.Link,null,f.a.createElement(m.a,{to:"/",className:"link",style:{textDecoration:"none"}},"Home")),f.a.createElement(g.a.Link,null,"Resources"),f.a.createElement(g.a.Link,{style:{color:"black"}},"Road Conditions"))),f.a.createElement(O,null," Cancer Treatment Clinics")))))},t}(f.a.Component);t.default=k},203:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(32),u=n.n(c);n.d(t,"a",function(){return u.a});n(205);var s=o.a.createContext({}),l=function(e){return o.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},205:function(e,t,n){var r;e.exports=(r=n(212))&&r.default||r},212:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(59),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},297:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=(r=n(4))&&r.__esModule?r:{default:r},i=n(298);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){if(!this.props.visible)return null;var e=this.props,t=e.id,n=e.size,r=e.width,a=e.height,i=e.spinnerColor,c=e.spinnerWidth,u=n||Math.min(r,a);return o.default.createElement("div",{id:t,className:"spinner",style:{width:u,height:u,borderColor:i,borderWidth:c}})}}])&&u(n.prototype,r),a&&u(n,a),t}();f(d,"propTypes",{size:a.default.number,spinnerColor:a.default.string,spinnerWidth:a.default.number,visible:a.default.bool}),f(d,"defaultProps",{size:40,spinnerColor:"#333333",spinnerWidth:5,visible:!0});var y=(0,i.SpinnerMixin)(d);t.default=y},298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SpinnerMixin=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p="\n.spinner {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 10px solid #333;\n  box-sizing: border-box;\n  -webkit-animation: sweep 1s linear alternate infinite, rota 0.8s linear infinite;\n          animation: sweep 1s linear alternate infinite, rota 0.8s linear infinite;\n}\n\n@keyframes rota {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes rota {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes sweep {\n  0% {\n    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);\n    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);\n  }\n  50% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);\n    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);\n  }\n  100% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);\n    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);\n  }\n}\n\n@-webkit-keyframes sweep {\n  0% {\n    -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);\n  }\n  50% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);\n  }\n  100% {\n    -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);\n  }\n}\n",f="spinner_id_style",d={id:0};t.SpinnerMixin=function(e){return function(t){function n(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t=u(this,s(n).call(this,e)),!document.getElementById(f)){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.id=f,o.type="text/css",o.styleSheet?o.styleSheet.cssText=p:o.appendChild(document.createTextNode(p)),r&&r.appendChild(o)}return d.id+=1,t.state={id:"spinner_".concat(d.id)},t}var r,a,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,o.default.Component),r=n,(a=[{key:"render",value:function(){return o.default.createElement(e,i({},this.props,this.state))}}])&&c(r.prototype,a),y&&c(r,y),n}()}}}]);
//# sourceMappingURL=component---src-pages-cancer-js-ae36fabaea7676b90e4f.js.map