(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{236:function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=b;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",g={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(z([])));v&&v!==n&&i.call(v,a)&&(y=v);var w=x.prototype=S.prototype=Object.create(y);E.prototype=w.constructor=x,x.constructor=E,x[l]=E.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},R(I.prototype),I.prototype[s]=function(){return this},u.AsyncIterator=I,u.async=function(t,e,r,n){var i=new I(b(t,e,r,n));return u.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},R(w),w[l]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=z,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;N(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function b(t,e,r,n){var i=e&&e.prototype instanceof S?e:S,o=Object.create(i.prototype),a=new _(n||[]);return o._invoke=function(t,e,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return k()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=L(t,e,r);if("normal"===l.type){if(n=r.done?p:d,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(t,r,a),o}function L(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function S(){}function E(){}function x(){}function R(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function I(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,a){var s=L(t[r],t,n);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){l.value=t,o(l)},function(t){return e("throw",t,o,a)})}a(s.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=L(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function z(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},243:function(t,e,r){"use strict";var n=r(8);e.__esModule=!0,e.default=void 0;var i,o=n(r(7)),a=n(r(34)),s=n(r(85)),l=n(r(86)),c=n(r(0)),u=n(r(4)),f=function(t){var e=(0,l.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},d={},h=function(t){var e=f(t),r=e.fluid?e.fluid.src:e.fixed.src;return d[r]||!1},p=[];var g=function(t,e){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(t){t.forEach(function(t){p.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(i.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),i).observe(t),p.push([t,e])},y=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',r=t.sizes?'sizes="'+t.sizes+'" ':"",n=t.srcSetWebp?"<source type='image/webp' srcset=\""+t.srcSetWebp+'" '+r+"/>":"",i=t.srcSet?'srcset="'+t.srcSet+'" ':"",o=t.title?'title="'+t.title+'" ':"",a=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",l=t.height?'height="'+t.height+'" ':"",c=t.opacity?t.opacity:"1";return"<picture>"+n+"<img "+s+l+r+i+e+a+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(t,e){var r=t.sizes,n=t.srcSet,i=t.src,o=t.style,a=t.onLoad,u=t.onError,f=(0,s.default)(t,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:n,src:i},f,{onLoad:a,onError:u,ref:e,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});m.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var v=function(t){function e(e){var r;r=t.call(this,e)||this;var n=!0,i=!1,o=e.fadeIn,s=h(e);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),e.critical&&(n=!0,i=!1);var l=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:n,imgLoaded:!1,IOSupported:i,fadeIn:o,hasNoScript:l,seenBefore:s},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,o.default)(e,t);var r=e.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},r.handleRef=function(t){var e=this;this.state.IOSupported&&t&&g(t,function(){var t=h(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0,imgLoaded:t})})},r.handleImageLoaded=function(){var t,e,r;t=this.props,e=f(t),r=e.fluid?e.fluid.src:e.fixed.src,d[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var t=f(this.props),e=t.title,r=t.alt,n=t.className,i=t.style,o=void 0===i?{}:i,a=t.imgStyle,s=void 0===a?{}:a,u=t.placeholderStyle,d=void 0===u?{}:u,h=t.placeholderClassName,p=t.fluid,g=t.fixed,v=t.backgroundColor,w=t.Tag,b=t.itemProp,L="boolean"==typeof v?"lightgray":v,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,d),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),x={title:e,alt:this.state.isVisible?"":r,style:S,className:h};if(p){var R=p;return c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),L&&c.default.createElement(w,{title:e,style:{backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),R.base64&&c.default.createElement(m,(0,l.default)({src:R.base64},x)),R.tracedSVG&&c.default.createElement(m,(0,l.default)({src:R.tracedSVG},x)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(m,{alt:r,title:e,sizes:R.sizes,src:R.src,srcSet:R.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:e},R))}}))}if(g){var I=g,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},o);return"inherit"===o.display&&delete j.display,c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},L&&c.default.createElement(w,{title:e,style:{backgroundColor:L,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),I.base64&&c.default.createElement(m,(0,l.default)({src:I.base64},x)),I.tracedSVG&&c.default.createElement(m,(0,l.default)({src:I.tracedSVG},x)),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(m,{alt:r,title:e,width:I.width,height:I.height,sizes:I.sizes,src:I.src,srcSet:I.srcSet,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:e,width:I.width,height:I.height},I))}}))}return null},e}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),b=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});v.propTypes={resolutions:w,sizes:b,fixed:w,fluid:b,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var L=v;e.default=L},249:function(t,e,r){t.exports=r(297)},250:function(t,e){function r(t,e,r,n,i,o,a){try{var s=t[o](a),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,i)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,l,"next",t)}function l(t){r(a,i,o,s,l,"throw",t)}s(void 0)})}}},297:function(t,e,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(236),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(a){n.regeneratorRuntime=void 0}}}]);
//# sourceMappingURL=32-d8d888de5a46d703bbba.js.map