!function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return o(r||t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,r){(function(t){function e(t,e){for(var r=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return n.exec(t).slice(1)};r.resolve=function(){for(var r="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(r=s+"/"+r,n="/"===s.charAt(0))}return r=e(i(r.split("/"),function(t){return!!t}),!n).join("/"),(n?"/":"")+r||"."},r.normalize=function(t){var n=r.isAbsolute(t),o="/"===s(t,-1);return(t=e(i(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&o&&(t+="/"),(n?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(i(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},r.relative=function(t,e){t=r.resolve(t).substr(1),e=r.resolve(e).substr(1);function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}for(var o=n(t.split("/")),i=n(e.split("/")),s=Math.min(o.length,i.length),a=s,c=0;c<s;c++)if(o[c]!==i[c]){a=c;break}var u=[];for(c=a;c<o.length;c++)u.push("..");return(u=u.concat(i.slice(a))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},r.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},r.extname=function(t){return o(t)[3]};function i(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var s="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,t("_process"))},{_process:2}],2:[function(t,e,r){var n,o,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}var u,l=[],f=!1,p=-1;function h(){f&&u&&(f=!1,u.length?l=u.concat(l):p=-1,l.length&&d())}function d(){if(!f){var t=c(h);f=!0;for(var e=l.length;e;){for(u=l,l=[];++p<e;)u&&u[p].run();p=-1,e=l.length}u=null,f=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new y(t,e)),1!==l.length||f||c(d)};function y(t,e){this.fun=t,this.array=e}y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={};function m(){}i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],3:[function(t,e,r){n=this,o=function(){"use strict";const t=function(t=[]){this.push(...t)};(t.prototype=new Array).limit=1/0,t.prototype.clean=(({stack:t="\nStack not available for "+navigator.userAgent}={})=>t.split("\n").slice(1).filter(t=>t).filter(t=>!/^_____/.test(t)).filter(t=>!/^persistence./.test(t))),t.prototype.add=function(t){return this.push(Object.assign({},t,{timestamp:(new Date).getTime(),stack:this.clean(new Error,"length"===t.key)},t)),this.length>this.limit&&this.splice(this.length-this.limit),this},t.prototype.type=function(e){return new t(this.filter(t=>t.type===e))},t.prototype.key=function(e){return new t(this.filter(t=>{const r=e.split(".").length;return t.key.split(".").slice(0,r).join(".")===e}))},t.prototype.latest=function(e=1/0){return new t(this.filter(t=>(new Date).getTime()-t.timestamp<e))};var e=new t;const r={},n=()=>"undefined"!=typeof window&&"localStorage"in window;r.load=(t=>{if(!n())return;const e=JSON.parse(localStorage.getItem("_____state")||"{}");if(e.data)for(let r in e.data)t[r]=e.data[r]}),r.save=(t=>{if(!n())return;const e=(new Date).getTime(),r=JSON.stringify({timestamp:e,data:t});localStorage.setItem("_____state",r)});const o={},i=["boolean","number","null","undefined","string"],s=(t=[])=>(r,n)=>{if("symbol"==typeof n)return r[n];if("_____history"===n)return e;if("_____listeners"===n)return o;const i=[...t.map(t=>t.property),n].join(".");if(n in r)return e.add({type:"read",key:i}),r[n];if(/^\$/.test(n)){const r=[...t.map(t=>t.property),n.slice(1)||"_____root"].join("."),i=r.split(".").reduce((t,e)=>t[e],u);return e.add({type:"listen",key:r}),o[r]=o[r]||[],(t,e)=>(o[r].push(t),t.setState?t:t(i))}},a=(t=[])=>(n,l,f)=>{if(/^\$/.test(l))throw new Error("The keys that start by $ are reserved and should not be set manually.");if(/^\_\_/.test(l))throw new Error("The keys that start by __ (two underscores) are reserved and should not be set manually.");const p=[...t.map(t=>t.property),l].join("."),h=void 0===n[l]?"create":"update";e.add({type:h,key:p,value:f}),n[l]=f,r.save(u);const d=(t,e)=>{if(i.includes(typeof t)||null===t)return t;if(Array.isArray(t)&&(t=t.map((t,r,n)=>d(t,[...e,{target:n,property:r,value:t}]))),/^\{/.test(JSON.stringify(t)))for(let r in t){const o={target:n,property:r,value:t[r]};t[r]=d(t[r],[...e,o])}return new Proxy(t,{get:s(e),set:a(e),deleteProperty:c(e)})};return n[l]=d(f,[...t,{target:n,property:l,value:f}]),[...t,{target:n,property:l,value:f}].forEach((t,e,r)=>{const n=r.slice(0,e+1).map(t=>t.property).join(".");if(o[n]){const t=n.split(".").reduce((t,e)=>t[e],u);o[n].forEach(e=>{if(e&&e.setState)return e.setState({__state:Math.random()});e(t)})}}),!o._____root||(o._____root.forEach(t=>{if(t&&t.setState)return t.setState({__state:Math.random()});t(u)}),!0)},c=(t=[])=>(n,i)=>{if(/^\$/.test(i))throw new Error("The keys that start by $ are reserved and should not be set manually.");if(/^\_\_/.test(i))throw new Error("The keys that start by __ (two underscores) are reserved and should not be set manually.");const s=[...t.map(t=>t.property),i].join(".");return e.add({type:"delete",key:s}),delete n[i],r.save(u),[...t,{target:n,property:i}].forEach((t,e,r)=>{const n=r.slice(0,e+1).map(t=>t.property).join(".");if(o[n]){const t=n.split(".").reduce((t,e)=>t[e],u);o[n].forEach(e=>e(t))}}),!o._____root||(o._____root.forEach(t=>{if(t&&t.setState)return t.setState({__state:Math.random()});t(u)}),!0)},u=new Proxy({},{get:s(),set:a(),deleteProperty:c()});return r.load(u),u},"object"==typeof r&&void 0!==e?e.exports=o():"function"==typeof define&&define.amd?define(o):n.state=o();var n,o},{}],4:[function(t,e,r){var n=this;const o=t("../../state");e.exports=(()=>{if(o.config.fanartBackground){const{apiRoot:t,apiKey:e}=o.auth,r=t+"series/"+$("#series-id").attr("value")+"/asset/fanart?api_key="+e;window.$.backstretch(r),$(".backstretch").css("opacity",o.config.fanartBackgroundOpacity).fadeIn(500)}let t=[];$("#location").fileBrowser({title:"Select Show Location"}),$("#submit").on("click",()=>{const t=[];$("#exceptions_list option").each(function(){t.push($(this).val())}),$("#exceptions_list").val(t),(t=>{let e=$('meta[data-var="'+t+'"]').data("content");return void 0===e?(console.log(t+" is empty, did you forget to add this to main.mako?"),e):!("false"===(e=isNaN(e)?e.toLowerCase():e.toString())||"none"===e||"0"===e)})("show.is_anime")&&generateBlackWhiteList()}),$("#addSceneName").on("click",()=>{const e=$("#SceneName").val(),r=$("<option>");if(t=[],$("#exceptions_list option").each(function(){t.push($(this).val())}),$("#SceneName").val(""),!($.inArray(e,t)>-1||""===e))return $("#SceneException").show(),r.prop("value",e),r.html(e),r.appendTo("#exceptions_list")}),$("#removeSceneName").on("click",function(){$("#exceptions_list option:selected").remove(),$(this).toggleSceneException()}),$.fn.toggleSceneException=function(){t=[],$("#exceptions_list option").each(function(){t.push($(this).val())}),""===t?$("#SceneException").hide():$("#SceneException").show()},$(n).toggleSceneException()})},{"../../state":5}],5:[function(t,e,r){const n=t("path"),o=t("statux");o.config={},o.auth.apiRoot=o.auth.apiRoot||n.join(document.getElementsByTagName("base")[0].href,"/api/v2/"),o.auth.apiKey=o.auth.apiKey||document.getElementsByTagName("body")[0].getAttribute("api-key"),o.components={loading:"",themeSpinner:""},window.state=o,e.exports=o},{path:1,statux:3}]},{},[4]);
//# sourceMappingURL=edit-show.js.map
