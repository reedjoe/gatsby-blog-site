(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{CNyg:function(e,t,n){},"Cuy+":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=n("Sv8q"),c=n("o0o1"),s=n.n(c);n("ls82");function l(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,c,"next",e)}function c(e){l(o,r,a,i,c,"throw",e)}i(void 0)}))}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=n("dI71"),f=(n("CNyg"),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={name:"",email:"",message:"",submitDisabled:!1,onclic:!1,validate:!1,validateError:!1},n.onNameChange=n.onNameChange.bind(m(n)),n.onEmailChange=n.onEmailChange.bind(m(n)),n.onMsgChange=n.onMsgChange.bind(m(n)),n.addOnClickClass=n.addOnClickClass.bind(m(n)),n.success=n.success.bind(m(n)),n.error=n.error.bind(m(n)),n.submitContactForm=n.submitContactForm.bind(m(n)),n}Object(d.a)(t,e);var n=t.prototype;return n.onNameChange=function(e){this.setState({name:e.target.value})},n.onEmailChange=function(e){this.setState({email:e.target.value})},n.onMsgChange=function(e){this.setState({message:e.target.value})},n.addOnClickClass=function(){var e=u(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.setState({onclic:!0})}),150);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.success=function(){var e=u(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.setState({onclic:!1,validate:!0})}),1250),setTimeout((function(){t.setState({validate:!1,name:"",email:"",message:"",submitDisabled:!1})}),2250);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.error=function(){var e=u(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.setState({onclic:!1,validateError:!0})}),1250),setTimeout((function(){alert("Error: Message Not Sent\n\nThere was a problem sending your message. Please refresh the page and try again.")}),1500),setTimeout((function(){t.setState({validateError:!1,name:"",email:"",message:"",submitDisabled:!1})}),2500);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.submitContactForm=function(){var e=u(s.a.mark((function e(t){var n,r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({submitDisabled:!0}),e.next=4,this.addOnClickClass();case 4:return n={name:this.state.name,email:this.state.email,message:this.state.message},r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)},e.prev=6,"https://3vf3tl8vj3.execute-api.eu-west-2.amazonaws.com/dev/email/send",e.next=10,fetch("https://3vf3tl8vj3.execute-api.eu-west-2.amazonaws.com/dev/email/send",r);case 10:return a=e.sent,e.next=13,a.json();case 13:if(o=e.sent,200===a.status){e.next=18;break}return e.next=17,this.error();case 17:return e.abrupt("return",a);case 18:return e.next=20,this.success();case 20:return e.abrupt("return",o);case 23:return e.prev=23,e.t0=e.catch(6),e.next=27,this.error();case 27:return e.abrupt("return",e.t0);case 28:case"end":return e.stop()}}),e,this,[[6,23]])})));return function(t){return e.apply(this,arguments)}}(),n.render=function(){return a.a.createElement("div",{className:"contact-form-container"},a.a.createElement("form",{id:"contact-form",onSubmit:this.submitContactForm},a.a.createElement("h3",null,"Contact Form"),a.a.createElement("h4",null,"Send me a message and I'll get back to you"),a.a.createElement("fieldset",null,a.a.createElement("input",{placeholder:"Name",type:"text",name:"name",required:!0,value:this.state.name,onChange:this.onNameChange})),a.a.createElement("fieldset",null,a.a.createElement("input",{placeholder:"Email Address",type:"email",name:"email",required:!0,value:this.state.email,onChange:this.onEmailChange})),a.a.createElement("fieldset",null,a.a.createElement("textarea",{placeholder:"Type your message here....",name:"message",required:!0,value:this.state.message,onChange:this.onMsgChange})),a.a.createElement("div",{className:"contact-form-button-container"},a.a.createElement("button",{name:"submit",disabled:this.state.submitDisabled,type:"submit",id:"contact-form-button",className:(this.state.onclic?"onclic":"")+" \n                                "+(this.state.validate?"validate":"")+" \n                                "+(this.state.validateError?"validate-error":"")}))))},t}(a.a.Component)),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={error:null,commitsError:null,isProfileLoaded:!1,areCommitsLoaded:!1,item:{},commits:[]},n}Object(d.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;fetch("https://api.github.com/users/reedjoe").then((function(e){return e.json()})).then((function(t){e.setState({isProfileLoaded:!0,item:t})}),(function(t){e.setState({isProfileLoaded:!0,error:t})})),fetch("https://api.github.com/users/reedjoe/events").then((function(e){return e.json()})).then((function(t){e.setState({areCommitsLoaded:!0,commits:t})}),(function(t){e.setState({areCommitsLoaded:!0,commitsError:t})}))},n.render=function(){var e=this.state,t=e.error,n=e.isProfileLoaded,r=e.commitsError,o=e.areCommitsLoaded,i=e.item,c=e.commits;return n?t?a.a.createElement("div",null,"Error: ",t.message):a.a.createElement(p,null,a.a.createElement(g,{href:i.html_url},a.a.createElement(v,{src:i.avatar_url}),a.a.createElement(y,null,i.login),a.a.createElement(w,null,i.bio)),a.a.createElement(b,null,a.a.createElement(x,{href:i.html_url+"?tab=repositories"},a.a.createElement(y,null,i.public_repos)," Repos"),a.a.createElement(x,{href:i.html_url+"?tab=followers"},a.a.createElement(y,null,i.followers)," Followers"),a.a.createElement(x,{href:i.html_url+"?tab=following"},a.a.createElement(y,null,i.following)," Following")),a.a.createElement(E,null,"Latest Commits"),a.a.createElement(b,null,o?r?a.a.createElement("div",null,"Error: ",r.message):c.filter((function(e,t){return"PushEvent"===e.type})).filter((function(e,t){return t<3})).map((function(e,t){return a.a.createElement("div",{key:e.id},a.a.createElement(x,{href:"https://github.com/"+e.repo.name+"/commit/"+e.payload.commits[0].sha},e.payload.commits[0].message))})):a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("i",{class:"fas fa-spinner fa-spin"}))))):a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("i",{class:"fas fa-spinner fa-spin"})))},t}(a.a.Component),p=o.a.div.withConfig({displayName:"GithubCard__GithubCardContainer",componentId:"sc-11q7n16-0"})(["border-radius:5px;padding:10px 10px 0;background:#fff;color:#555;"]),g=o.a.a.withConfig({displayName:"GithubCard__Header",componentId:"sc-11q7n16-1"})(["padding:3px 0 4px 57px;min-height:48px;position:relative;display:block;text-align:left;text-decoration:none;:hover div{text-decoration:underline;}"]),v=o.a.img.withConfig({displayName:"GithubCard__ProfileImage",componentId:"sc-11q7n16-2"})(["position:absolute;top:0;left:0;width:48px;height:48px;background:#fff;border-radius:4px;"]),y=o.a.div.withConfig({displayName:"GithubCard__ProfileName",componentId:"sc-11q7n16-3"})(["display:block;color:#292f33;font-size:16px;line-height:1.6;font-weight:bold;"]),w=o.a.span.withConfig({displayName:"GithubCard__ProfileBio",componentId:"sc-11q7n16-4"})(["color:#707070;font-size:14px;"]),b=o.a.div.withConfig({displayName:"GithubCard__StatsSection",componentId:"sc-11q7n16-5"})(["border-top:1px solid #eee;border-bottom:1px solid #eee;text-transform:uppercase;font-size:12px;color:#707070;text-align:left;text-decoration:none;margin-bottom:10px;a:first-child{border-left:0;padding-left:0;}"]),x=o.a.a.withConfig({displayName:"GithubCard__GithubLink",componentId:"sc-11q7n16-6"})(["display:inline-block;padding:4px 18px;border-left:1px solid #eee;text-decoration:none;font-size:12px;color:#707070;:hover{color:#4183c4;}"]),E=o.a.div.withConfig({displayName:"GithubCard__CommitHeader",componentId:"sc-11q7n16-7"})(["display:block;color:#292f33;line-height:1.6;font-weight:bold;text-align:left;font-size:14px;"]),C=(n("cFE2"),n("gqNJ"),o.a.div.withConfig({displayName:"contact__ContactContainer",componentId:"fmyaan-0"})(["padding:0;margin:auto;margin-top:10vh;margin-bottom:5vh;height:100%;max-width:1100px;width:100%;display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;align-items:center;justify-items:center;@media (max-width:823px){margin:20px 0 0 0;grid-gap:2rem;grid-template-columns:1fr;grid-template-rows:auto auto auto;}"])),_=o.a.div.withConfig({displayName:"contact__LeftDiv1",componentId:"fmyaan-1"})(["max-width:400px;width:100%;grid-row:1 / 2;grid-column:1 / 2;@media (max-width:823px){grid-row:1 / 2;grid-column:1 / 1;}"]),L=o.a.div.withConfig({displayName:"contact__LeftDiv2",componentId:"fmyaan-2"})(["max-width:400px;width:100%;grid-row:2 / 3;grid-column:1 / 2;@media (max-width:823px){grid-row:2 / 3;grid-column:1 / 1;}"]);t.default=function(){return a.a.createElement("div",null,a.a.createElement(i.a,null,a.a.createElement(C,null,a.a.createElement(_,null,a.a.createElement(h,null)),a.a.createElement(L,null,a.a.createElement(h,null)),a.a.createElement(f,null))))}},URgk:function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(a.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,a,o,i,c,s=1,l={},u=!1,m=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){o.port2.postMessage(e)}):m&&"onreadystatechange"in m.createElement("script")?(a=m.documentElement,r=function(e){var t=m.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):r=function(e){setTimeout(h,0,e)}:(i="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&h(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),r=function(t){e.postMessage(i+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return l[s]=a,r(s),s++},d.clearImmediate=f}function f(e){delete l[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{f(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},ls82:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(I){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new C(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(I){return{type:"throw",arg:I}}}e.wrap=s;var u={};function m(){}function d(){}function f(){}var h={};h[a]=function(){return this};var p=Object.getPrototypeOf,g=p&&p(p(_([])));g&&g!==t&&n.call(g,a)&&(h=g);var v=f.prototype=m.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=v.constructor=f,f.constructor=d,d.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(w.prototype),w.prototype[o]=function(){return this},e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(v),c(v,i,"Generator"),v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(e,t,n){e.exports=n("ls82")},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-contact-js-f1ac8163150505b8db7c.js.map