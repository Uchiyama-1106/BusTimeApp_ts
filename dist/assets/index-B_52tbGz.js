(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();function W9(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var w4={exports:{}},d6={},S4={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_=Symbol.for("react.element"),Q9=Symbol.for("react.portal"),G9=Symbol.for("react.fragment"),Y9=Symbol.for("react.strict_mode"),X9=Symbol.for("react.profiler"),Z9=Symbol.for("react.provider"),J9=Symbol.for("react.context"),q9=Symbol.for("react.forward_ref"),b9=Symbol.for("react.suspense"),_e=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),t7=Symbol.iterator;function te(_){return _===null||typeof _!="object"?null:(_=t7&&_[t7]||_["@@iterator"],typeof _=="function"?_:null)}var k4={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E4=Object.assign,C4={};function m2(_,e,t){this.props=_,this.context=e,this.refs=C4,this.updater=t||k4}m2.prototype.isReactComponent={};m2.prototype.setState=function(_,e){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,e,"setState")};m2.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function A4(){}A4.prototype=m2.prototype;function t3(_,e,t){this.props=_,this.context=e,this.refs=C4,this.updater=t||k4}var n3=t3.prototype=new A4;n3.constructor=t3;E4(n3,m2.prototype);n3.isPureReactComponent=!0;var n7=Array.isArray,x4=Object.prototype.hasOwnProperty,r3={current:null},N4={key:!0,ref:!0,__self:!0,__source:!0};function P4(_,e,t){var n,r={},l=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(l=""+e.key),e)x4.call(e,n)&&!N4.hasOwnProperty(n)&&(r[n]=e[n]);var i=arguments.length-2;if(i===1)r.children=t;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];r.children=u}if(_&&_.defaultProps)for(n in i=_.defaultProps,i)r[n]===void 0&&(r[n]=i[n]);return{$$typeof:l_,type:_,key:l,ref:o,props:r,_owner:r3.current}}function ne(_,e){return{$$typeof:l_,type:_.type,key:e,ref:_.ref,props:_.props,_owner:_._owner}}function l3(_){return typeof _=="object"&&_!==null&&_.$$typeof===l_}function re(_){var e={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(t){return e[t]})}var r7=/\/+/g;function M6(_,e){return typeof _=="object"&&_!==null&&_.key!=null?re(""+_.key):e.toString(36)}function z_(_,e,t,n,r){var l=typeof _;(l==="undefined"||l==="boolean")&&(_=null);var o=!1;if(_===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(_.$$typeof){case l_:case Q9:o=!0}}if(o)return o=_,r=r(o),_=n===""?"."+M6(o,0):n,n7(r)?(t="",_!=null&&(t=_.replace(r7,"$&/")+"/"),z_(r,e,t,"",function(c){return c})):r!=null&&(l3(r)&&(r=ne(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(r7,"$&/")+"/")+_)),e.push(r)),1;if(o=0,n=n===""?".":n+":",n7(_))for(var i=0;i<_.length;i++){l=_[i];var u=n+M6(l,i);o+=z_(l,e,t,u,r)}else if(u=te(_),typeof u=="function")for(_=u.call(_),i=0;!(l=_.next()).done;)l=l.value,u=n+M6(l,i++),o+=z_(l,e,t,u,r);else if(l==="object")throw e=String(_),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function f_(_,e,t){if(_==null)return _;var n=[],r=0;return z_(_,n,"","",function(l){return e.call(t,l,r++)}),n}function le(_){if(_._status===-1){var e=_._result;e=e(),e.then(function(t){(_._status===0||_._status===-1)&&(_._status=1,_._result=t)},function(t){(_._status===0||_._status===-1)&&(_._status=2,_._result=t)}),_._status===-1&&(_._status=0,_._result=e)}if(_._status===1)return _._result.default;throw _._result}var h0={current:null},T_={transition:null},oe={ReactCurrentDispatcher:h0,ReactCurrentBatchConfig:T_,ReactCurrentOwner:r3};U.Children={map:f_,forEach:function(_,e,t){f_(_,function(){e.apply(this,arguments)},t)},count:function(_){var e=0;return f_(_,function(){e++}),e},toArray:function(_){return f_(_,function(e){return e})||[]},only:function(_){if(!l3(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};U.Component=m2;U.Fragment=G9;U.Profiler=X9;U.PureComponent=t3;U.StrictMode=Y9;U.Suspense=b9;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe;U.cloneElement=function(_,e,t){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var n=E4({},_.props),r=_.key,l=_.ref,o=_._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,o=r3.current),e.key!==void 0&&(r=""+e.key),_.type&&_.type.defaultProps)var i=_.type.defaultProps;for(u in e)x4.call(e,u)&&!N4.hasOwnProperty(u)&&(n[u]=e[u]===void 0&&i!==void 0?i[u]:e[u])}var u=arguments.length-2;if(u===1)n.children=t;else if(1<u){i=Array(u);for(var c=0;c<u;c++)i[c]=arguments[c+2];n.children=i}return{$$typeof:l_,type:_.type,key:r,ref:l,props:n,_owner:o}};U.createContext=function(_){return _={$$typeof:J9,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:Z9,_context:_},_.Consumer=_};U.createElement=P4;U.createFactory=function(_){var e=P4.bind(null,_);return e.type=_,e};U.createRef=function(){return{current:null}};U.forwardRef=function(_){return{$$typeof:q9,render:_}};U.isValidElement=l3;U.lazy=function(_){return{$$typeof:ee,_payload:{_status:-1,_result:_},_init:le}};U.memo=function(_,e){return{$$typeof:_e,type:_,compare:e===void 0?null:e}};U.startTransition=function(_){var e=T_.transition;T_.transition={};try{_()}finally{T_.transition=e}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(_,e){return h0.current.useCallback(_,e)};U.useContext=function(_){return h0.current.useContext(_)};U.useDebugValue=function(){};U.useDeferredValue=function(_){return h0.current.useDeferredValue(_)};U.useEffect=function(_,e){return h0.current.useEffect(_,e)};U.useId=function(){return h0.current.useId()};U.useImperativeHandle=function(_,e,t){return h0.current.useImperativeHandle(_,e,t)};U.useInsertionEffect=function(_,e){return h0.current.useInsertionEffect(_,e)};U.useLayoutEffect=function(_,e){return h0.current.useLayoutEffect(_,e)};U.useMemo=function(_,e){return h0.current.useMemo(_,e)};U.useReducer=function(_,e,t){return h0.current.useReducer(_,e,t)};U.useRef=function(_){return h0.current.useRef(_)};U.useState=function(_){return h0.current.useState(_)};U.useSyncExternalStore=function(_,e,t){return h0.current.useSyncExternalStore(_,e,t)};U.useTransition=function(){return h0.current.useTransition()};U.version="18.2.0";S4.exports=U;var y0=S4.exports;const L4=W9(y0);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=y0,ue=Symbol.for("react.element"),se=Symbol.for("react.fragment"),ae=Object.prototype.hasOwnProperty,ce=ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fe={key:!0,ref:!0,__self:!0,__source:!0};function z4(_,e,t){var n,r={},l=null,o=null;t!==void 0&&(l=""+t),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)ae.call(e,n)&&!fe.hasOwnProperty(n)&&(r[n]=e[n]);if(_&&_.defaultProps)for(n in e=_.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:ue,type:_,key:l,ref:o,props:r,_owner:ce.current}}d6.Fragment=se;d6.jsx=z4;d6.jsxs=z4;w4.exports=d6;var j=w4.exports,s5={},T4={exports:{}},N0={},M4={exports:{}},I4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(_){function e(w,C){var D=w.length;w.push(C);_:for(;0<D;){var $=D-1>>>1,n0=w[$];if(0<r(n0,C))w[$]=C,w[D]=n0,D=$;else break _}}function t(w){return w.length===0?null:w[0]}function n(w){if(w.length===0)return null;var C=w[0],D=w.pop();if(D!==C){w[0]=D;_:for(var $=0,n0=w.length,a_=n0>>>1;$<a_;){var N1=2*($+1)-1,T6=w[N1],P1=N1+1,c_=w[P1];if(0>r(T6,D))P1<n0&&0>r(c_,T6)?(w[$]=c_,w[P1]=D,$=P1):(w[$]=T6,w[N1]=D,$=N1);else if(P1<n0&&0>r(c_,D))w[$]=c_,w[P1]=D,$=P1;else break _}}return C}function r(w,C){var D=w.sortIndex-C.sortIndex;return D!==0?D:w.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;_.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();_.unstable_now=function(){return o.now()-i}}var u=[],c=[],m=1,h=null,p=3,y=!1,S=!1,A=!1,O=typeof setTimeout=="function"?setTimeout:null,a=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(w){for(var C=t(c);C!==null;){if(C.callback===null)n(c);else if(C.startTime<=w)n(c),C.sortIndex=C.expirationTime,e(u,C);else break;C=t(c)}}function v(w){if(A=!1,f(w),!S)if(t(u)!==null)S=!0,E(x);else{var C=t(c);C!==null&&B(v,C.startTime-w)}}function x(w,C){S=!1,A&&(A=!1,a(I),I=-1),y=!0;var D=p;try{for(f(C),h=t(u);h!==null&&(!(h.expirationTime>C)||w&&!k());){var $=h.callback;if(typeof $=="function"){h.callback=null,p=h.priorityLevel;var n0=$(h.expirationTime<=C);C=_.unstable_now(),typeof n0=="function"?h.callback=n0:h===t(u)&&n(u),f(C)}else n(u);h=t(u)}if(h!==null)var a_=!0;else{var N1=t(c);N1!==null&&B(v,N1.startTime-C),a_=!1}return a_}finally{h=null,p=D,y=!1}}var z=!1,P=null,I=-1,F=5,d=-1;function k(){return!(_.unstable_now()-d<F)}function R(){if(P!==null){var w=_.unstable_now();d=w;var C=!0;try{C=P(!0,w)}finally{C?T():(z=!1,P=null)}}else z=!1}var T;if(typeof s=="function")T=function(){s(R)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,N=L.port2;L.port1.onmessage=R,T=function(){N.postMessage(null)}}else T=function(){O(R,0)};function E(w){P=w,z||(z=!0,T())}function B(w,C){I=O(function(){w(_.unstable_now())},C)}_.unstable_IdlePriority=5,_.unstable_ImmediatePriority=1,_.unstable_LowPriority=4,_.unstable_NormalPriority=3,_.unstable_Profiling=null,_.unstable_UserBlockingPriority=2,_.unstable_cancelCallback=function(w){w.callback=null},_.unstable_continueExecution=function(){S||y||(S=!0,E(x))},_.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<w?Math.floor(1e3/w):5},_.unstable_getCurrentPriorityLevel=function(){return p},_.unstable_getFirstCallbackNode=function(){return t(u)},_.unstable_next=function(w){switch(p){case 1:case 2:case 3:var C=3;break;default:C=p}var D=p;p=C;try{return w()}finally{p=D}},_.unstable_pauseExecution=function(){},_.unstable_requestPaint=function(){},_.unstable_runWithPriority=function(w,C){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var D=p;p=w;try{return C()}finally{p=D}},_.unstable_scheduleCallback=function(w,C,D){var $=_.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?$+D:$):D=$,w){case 1:var n0=-1;break;case 2:n0=250;break;case 5:n0=1073741823;break;case 4:n0=1e4;break;default:n0=5e3}return n0=D+n0,w={id:m++,callback:C,priorityLevel:w,startTime:D,expirationTime:n0,sortIndex:-1},D>$?(w.sortIndex=D,e(c,w),t(u)===null&&w===t(c)&&(A?(a(I),I=-1):A=!0,B(v,D-$))):(w.sortIndex=n0,e(u,w),S||y||(S=!0,E(x))),w},_.unstable_shouldYield=k,_.unstable_wrapCallback=function(w){var C=p;return function(){var D=p;p=C;try{return w.apply(this,arguments)}finally{p=D}}}})(I4);M4.exports=I4;var de=M4.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D4=y0,x0=de;function g(_){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+_,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+_+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R4=new Set,H2={};function H1(_,e){s2(_,e),s2(_+"Capture",e)}function s2(_,e){for(H2[_]=e,_=0;_<e.length;_++)R4.add(e[_])}var _1=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),a5=Object.prototype.hasOwnProperty,pe=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,l7={},o7={};function he(_){return a5.call(o7,_)?!0:a5.call(l7,_)?!1:pe.test(_)?o7[_]=!0:(l7[_]=!0,!1)}function me(_,e,t,n){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(_=_.toLowerCase().slice(0,5),_!=="data-"&&_!=="aria-");default:return!1}}function ve(_,e,t,n){if(e===null||typeof e>"u"||me(_,e,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function m0(_,e,t,n,r,l,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=_,this.type=e,this.sanitizeURL=l,this.removeEmptyString=o}var u0={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(_){u0[_]=new m0(_,0,!1,_,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(_){var e=_[0];u0[e]=new m0(e,1,!1,_[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(_){u0[_]=new m0(_,2,!1,_.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(_){u0[_]=new m0(_,2,!1,_,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(_){u0[_]=new m0(_,3,!1,_.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(_){u0[_]=new m0(_,3,!0,_,null,!1,!1)});["capture","download"].forEach(function(_){u0[_]=new m0(_,4,!1,_,null,!1,!1)});["cols","rows","size","span"].forEach(function(_){u0[_]=new m0(_,6,!1,_,null,!1,!1)});["rowSpan","start"].forEach(function(_){u0[_]=new m0(_,5,!1,_.toLowerCase(),null,!1,!1)});var o3=/[\-:]([a-z])/g;function i3(_){return _[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(_){var e=_.replace(o3,i3);u0[e]=new m0(e,1,!1,_,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(_){var e=_.replace(o3,i3);u0[e]=new m0(e,1,!1,_,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(_){var e=_.replace(o3,i3);u0[e]=new m0(e,1,!1,_,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(_){u0[_]=new m0(_,1,!1,_.toLowerCase(),null,!1,!1)});u0.xlinkHref=new m0("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(_){u0[_]=new m0(_,1,!1,_.toLowerCase(),null,!0,!0)});function u3(_,e,t,n){var r=u0.hasOwnProperty(e)?u0[e]:null;(r!==null?r.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ve(e,t,r,n)&&(t=null),n||r===null?he(e)&&(t===null?_.removeAttribute(e):_.setAttribute(e,""+t)):r.mustUseProperty?_[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,n=r.attributeNamespace,t===null?_.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,n?_.setAttributeNS(n,e,t):_.setAttribute(e,t))))}var l1=D4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,d_=Symbol.for("react.element"),W1=Symbol.for("react.portal"),Q1=Symbol.for("react.fragment"),s3=Symbol.for("react.strict_mode"),c5=Symbol.for("react.profiler"),B4=Symbol.for("react.provider"),j4=Symbol.for("react.context"),a3=Symbol.for("react.forward_ref"),f5=Symbol.for("react.suspense"),d5=Symbol.for("react.suspense_list"),c3=Symbol.for("react.memo"),i1=Symbol.for("react.lazy"),O4=Symbol.for("react.offscreen"),i7=Symbol.iterator;function g2(_){return _===null||typeof _!="object"?null:(_=i7&&_[i7]||_["@@iterator"],typeof _=="function"?_:null)}var Z=Object.assign,I6;function P2(_){if(I6===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);I6=e&&e[1]||""}return`
`+I6+_}var D6=!1;function R6(_,e){if(!_||D6)return"";D6=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var n=c}Reflect.construct(_,[],e)}else{try{e.call()}catch(c){n=c}_.call(e.prototype)}else{try{throw Error()}catch(c){n=c}_()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),l=n.stack.split(`
`),o=r.length-1,i=l.length-1;1<=o&&0<=i&&r[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(r[o]!==l[i]){if(o!==1||i!==1)do if(o--,i--,0>i||r[o]!==l[i]){var u=`
`+r[o].replace(" at new "," at ");return _.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",_.displayName)),u}while(1<=o&&0<=i);break}}}finally{D6=!1,Error.prepareStackTrace=t}return(_=_?_.displayName||_.name:"")?P2(_):""}function ye(_){switch(_.tag){case 5:return P2(_.type);case 16:return P2("Lazy");case 13:return P2("Suspense");case 19:return P2("SuspenseList");case 0:case 2:case 15:return _=R6(_.type,!1),_;case 11:return _=R6(_.type.render,!1),_;case 1:return _=R6(_.type,!0),_;default:return""}}function p5(_){if(_==null)return null;if(typeof _=="function")return _.displayName||_.name||null;if(typeof _=="string")return _;switch(_){case Q1:return"Fragment";case W1:return"Portal";case c5:return"Profiler";case s3:return"StrictMode";case f5:return"Suspense";case d5:return"SuspenseList"}if(typeof _=="object")switch(_.$$typeof){case j4:return(_.displayName||"Context")+".Consumer";case B4:return(_._context.displayName||"Context")+".Provider";case a3:var e=_.render;return _=_.displayName,_||(_=e.displayName||e.name||"",_=_!==""?"ForwardRef("+_+")":"ForwardRef"),_;case c3:return e=_.displayName||null,e!==null?e:p5(_.type)||"Memo";case i1:e=_._payload,_=_._init;try{return p5(_(e))}catch{}}return null}function ge(_){var e=_.type;switch(_.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return _=e.render,_=_.displayName||_.name||"",e.displayName||(_!==""?"ForwardRef("+_+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return p5(e);case 8:return e===s3?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function S1(_){switch(typeof _){case"boolean":case"number":case"string":case"undefined":return _;case"object":return _;default:return""}}function F4(_){var e=_.type;return(_=_.nodeName)&&_.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function we(_){var e=F4(_)?"checked":"value",t=Object.getOwnPropertyDescriptor(_.constructor.prototype,e),n=""+_[e];if(!_.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,l=t.set;return Object.defineProperty(_,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){n=""+o,l.call(this,o)}}),Object.defineProperty(_,e,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){_._valueTracker=null,delete _[e]}}}}function p_(_){_._valueTracker||(_._valueTracker=we(_))}function U4(_){if(!_)return!1;var e=_._valueTracker;if(!e)return!0;var t=e.getValue(),n="";return _&&(n=F4(_)?_.checked?"true":"false":_.value),_=n,_!==t?(e.setValue(_),!0):!1}function $_(_){if(_=_||(typeof document<"u"?document:void 0),typeof _>"u")return null;try{return _.activeElement||_.body}catch{return _.body}}function h5(_,e){var t=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??_._wrapperState.initialChecked})}function u7(_,e){var t=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;t=S1(e.value!=null?e.value:t),_._wrapperState={initialChecked:n,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H4(_,e){e=e.checked,e!=null&&u3(_,"checked",e,!1)}function m5(_,e){H4(_,e);var t=S1(e.value),n=e.type;if(t!=null)n==="number"?(t===0&&_.value===""||_.value!=t)&&(_.value=""+t):_.value!==""+t&&(_.value=""+t);else if(n==="submit"||n==="reset"){_.removeAttribute("value");return}e.hasOwnProperty("value")?v5(_,e.type,t):e.hasOwnProperty("defaultValue")&&v5(_,e.type,S1(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(_.defaultChecked=!!e.defaultChecked)}function s7(_,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+_._wrapperState.initialValue,t||e===_.value||(_.value=e),_.defaultValue=e}t=_.name,t!==""&&(_.name=""),_.defaultChecked=!!_._wrapperState.initialChecked,t!==""&&(_.name=t)}function v5(_,e,t){(e!=="number"||$_(_.ownerDocument)!==_)&&(t==null?_.defaultValue=""+_._wrapperState.initialValue:_.defaultValue!==""+t&&(_.defaultValue=""+t))}var L2=Array.isArray;function n2(_,e,t,n){if(_=_.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<_.length;t++)r=e.hasOwnProperty("$"+_[t].value),_[t].selected!==r&&(_[t].selected=r),r&&n&&(_[t].defaultSelected=!0)}else{for(t=""+S1(t),e=null,r=0;r<_.length;r++){if(_[r].value===t){_[r].selected=!0,n&&(_[r].defaultSelected=!0);return}e!==null||_[r].disabled||(e=_[r])}e!==null&&(e.selected=!0)}}function y5(_,e){if(e.dangerouslySetInnerHTML!=null)throw Error(g(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+_._wrapperState.initialValue})}function a7(_,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(g(92));if(L2(t)){if(1<t.length)throw Error(g(93));t=t[0]}e=t}e==null&&(e=""),t=e}_._wrapperState={initialValue:S1(t)}}function $4(_,e){var t=S1(e.value),n=S1(e.defaultValue);t!=null&&(t=""+t,t!==_.value&&(_.value=t),e.defaultValue==null&&_.defaultValue!==t&&(_.defaultValue=t)),n!=null&&(_.defaultValue=""+n)}function c7(_){var e=_.textContent;e===_._wrapperState.initialValue&&e!==""&&e!==null&&(_.value=e)}function V4(_){switch(_){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function g5(_,e){return _==null||_==="http://www.w3.org/1999/xhtml"?V4(e):_==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":_}var h_,K4=function(_){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return _(e,t,n,r)})}:_}(function(_,e){if(_.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in _)_.innerHTML=e;else{for(h_=h_||document.createElement("div"),h_.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=h_.firstChild;_.firstChild;)_.removeChild(_.firstChild);for(;e.firstChild;)_.appendChild(e.firstChild)}});function $2(_,e){if(e){var t=_.firstChild;if(t&&t===_.lastChild&&t.nodeType===3){t.nodeValue=e;return}}_.textContent=e}var M2={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Se=["Webkit","ms","Moz","O"];Object.keys(M2).forEach(function(_){Se.forEach(function(e){e=e+_.charAt(0).toUpperCase()+_.substring(1),M2[e]=M2[_]})});function W4(_,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||M2.hasOwnProperty(_)&&M2[_]?(""+e).trim():e+"px"}function Q4(_,e){_=_.style;for(var t in e)if(e.hasOwnProperty(t)){var n=t.indexOf("--")===0,r=W4(t,e[t],n);t==="float"&&(t="cssFloat"),n?_.setProperty(t,r):_[t]=r}}var ke=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function w5(_,e){if(e){if(ke[_]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(g(137,_));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(g(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(g(61))}if(e.style!=null&&typeof e.style!="object")throw Error(g(62))}}function S5(_,e){if(_.indexOf("-")===-1)return typeof e.is=="string";switch(_){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k5=null;function f3(_){return _=_.target||_.srcElement||window,_.correspondingUseElement&&(_=_.correspondingUseElement),_.nodeType===3?_.parentNode:_}var E5=null,r2=null,l2=null;function f7(_){if(_=u_(_)){if(typeof E5!="function")throw Error(g(280));var e=_.stateNode;e&&(e=y6(e),E5(_.stateNode,_.type,e))}}function G4(_){r2?l2?l2.push(_):l2=[_]:r2=_}function Y4(){if(r2){var _=r2,e=l2;if(l2=r2=null,f7(_),e)for(_=0;_<e.length;_++)f7(e[_])}}function X4(_,e){return _(e)}function Z4(){}var B6=!1;function J4(_,e,t){if(B6)return _(e,t);B6=!0;try{return X4(_,e,t)}finally{B6=!1,(r2!==null||l2!==null)&&(Z4(),Y4())}}function V2(_,e){var t=_.stateNode;if(t===null)return null;var n=y6(t);if(n===null)return null;t=n[e];_:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(_=_.type,n=!(_==="button"||_==="input"||_==="select"||_==="textarea")),_=!n;break _;default:_=!1}if(_)return null;if(t&&typeof t!="function")throw Error(g(231,e,typeof t));return t}var C5=!1;if(_1)try{var w2={};Object.defineProperty(w2,"passive",{get:function(){C5=!0}}),window.addEventListener("test",w2,w2),window.removeEventListener("test",w2,w2)}catch{C5=!1}function Ee(_,e,t,n,r,l,o,i,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(m){this.onError(m)}}var I2=!1,V_=null,K_=!1,A5=null,Ce={onError:function(_){I2=!0,V_=_}};function Ae(_,e,t,n,r,l,o,i,u){I2=!1,V_=null,Ee.apply(Ce,arguments)}function xe(_,e,t,n,r,l,o,i,u){if(Ae.apply(this,arguments),I2){if(I2){var c=V_;I2=!1,V_=null}else throw Error(g(198));K_||(K_=!0,A5=c)}}function $1(_){var e=_,t=_;if(_.alternate)for(;e.return;)e=e.return;else{_=e;do e=_,e.flags&4098&&(t=e.return),_=e.return;while(_)}return e.tag===3?t:null}function q4(_){if(_.tag===13){var e=_.memoizedState;if(e===null&&(_=_.alternate,_!==null&&(e=_.memoizedState)),e!==null)return e.dehydrated}return null}function d7(_){if($1(_)!==_)throw Error(g(188))}function Ne(_){var e=_.alternate;if(!e){if(e=$1(_),e===null)throw Error(g(188));return e!==_?null:_}for(var t=_,n=e;;){var r=t.return;if(r===null)break;var l=r.alternate;if(l===null){if(n=r.return,n!==null){t=n;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===t)return d7(r),_;if(l===n)return d7(r),e;l=l.sibling}throw Error(g(188))}if(t.return!==n.return)t=r,n=l;else{for(var o=!1,i=r.child;i;){if(i===t){o=!0,t=r,n=l;break}if(i===n){o=!0,n=r,t=l;break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===t){o=!0,t=l,n=r;break}if(i===n){o=!0,n=l,t=r;break}i=i.sibling}if(!o)throw Error(g(189))}}if(t.alternate!==n)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?_:e}function b4(_){return _=Ne(_),_!==null?_8(_):null}function _8(_){if(_.tag===5||_.tag===6)return _;for(_=_.child;_!==null;){var e=_8(_);if(e!==null)return e;_=_.sibling}return null}var e8=x0.unstable_scheduleCallback,p7=x0.unstable_cancelCallback,Pe=x0.unstable_shouldYield,Le=x0.unstable_requestPaint,q=x0.unstable_now,ze=x0.unstable_getCurrentPriorityLevel,d3=x0.unstable_ImmediatePriority,t8=x0.unstable_UserBlockingPriority,W_=x0.unstable_NormalPriority,Te=x0.unstable_LowPriority,n8=x0.unstable_IdlePriority,p6=null,G0=null;function Me(_){if(G0&&typeof G0.onCommitFiberRoot=="function")try{G0.onCommitFiberRoot(p6,_,void 0,(_.current.flags&128)===128)}catch{}}var U0=Math.clz32?Math.clz32:Re,Ie=Math.log,De=Math.LN2;function Re(_){return _>>>=0,_===0?32:31-(Ie(_)/De|0)|0}var m_=64,v_=4194304;function z2(_){switch(_&-_){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return _&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return _&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return _}}function Q_(_,e){var t=_.pendingLanes;if(t===0)return 0;var n=0,r=_.suspendedLanes,l=_.pingedLanes,o=t&268435455;if(o!==0){var i=o&~r;i!==0?n=z2(i):(l&=o,l!==0&&(n=z2(l)))}else o=t&~r,o!==0?n=z2(o):l!==0&&(n=z2(l));if(n===0)return 0;if(e!==0&&e!==n&&!(e&r)&&(r=n&-n,l=e&-e,r>=l||r===16&&(l&4194240)!==0))return e;if(n&4&&(n|=t&16),e=_.entangledLanes,e!==0)for(_=_.entanglements,e&=n;0<e;)t=31-U0(e),r=1<<t,n|=_[t],e&=~r;return n}function Be(_,e){switch(_){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function je(_,e){for(var t=_.suspendedLanes,n=_.pingedLanes,r=_.expirationTimes,l=_.pendingLanes;0<l;){var o=31-U0(l),i=1<<o,u=r[o];u===-1?(!(i&t)||i&n)&&(r[o]=Be(i,e)):u<=e&&(_.expiredLanes|=i),l&=~i}}function x5(_){return _=_.pendingLanes&-1073741825,_!==0?_:_&1073741824?1073741824:0}function r8(){var _=m_;return m_<<=1,!(m_&4194240)&&(m_=64),_}function j6(_){for(var e=[],t=0;31>t;t++)e.push(_);return e}function o_(_,e,t){_.pendingLanes|=e,e!==536870912&&(_.suspendedLanes=0,_.pingedLanes=0),_=_.eventTimes,e=31-U0(e),_[e]=t}function Oe(_,e){var t=_.pendingLanes&~e;_.pendingLanes=e,_.suspendedLanes=0,_.pingedLanes=0,_.expiredLanes&=e,_.mutableReadLanes&=e,_.entangledLanes&=e,e=_.entanglements;var n=_.eventTimes;for(_=_.expirationTimes;0<t;){var r=31-U0(t),l=1<<r;e[r]=0,n[r]=-1,_[r]=-1,t&=~l}}function p3(_,e){var t=_.entangledLanes|=e;for(_=_.entanglements;t;){var n=31-U0(t),r=1<<n;r&e|_[n]&e&&(_[n]|=e),t&=~r}}var V=0;function l8(_){return _&=-_,1<_?4<_?_&268435455?16:536870912:4:1}var o8,h3,i8,u8,s8,N5=!1,y_=[],d1=null,p1=null,h1=null,K2=new Map,W2=new Map,s1=[],Fe="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h7(_,e){switch(_){case"focusin":case"focusout":d1=null;break;case"dragenter":case"dragleave":p1=null;break;case"mouseover":case"mouseout":h1=null;break;case"pointerover":case"pointerout":K2.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":W2.delete(e.pointerId)}}function S2(_,e,t,n,r,l){return _===null||_.nativeEvent!==l?(_={blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:l,targetContainers:[r]},e!==null&&(e=u_(e),e!==null&&h3(e)),_):(_.eventSystemFlags|=n,e=_.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),_)}function Ue(_,e,t,n,r){switch(e){case"focusin":return d1=S2(d1,_,e,t,n,r),!0;case"dragenter":return p1=S2(p1,_,e,t,n,r),!0;case"mouseover":return h1=S2(h1,_,e,t,n,r),!0;case"pointerover":var l=r.pointerId;return K2.set(l,S2(K2.get(l)||null,_,e,t,n,r)),!0;case"gotpointercapture":return l=r.pointerId,W2.set(l,S2(W2.get(l)||null,_,e,t,n,r)),!0}return!1}function a8(_){var e=T1(_.target);if(e!==null){var t=$1(e);if(t!==null){if(e=t.tag,e===13){if(e=q4(t),e!==null){_.blockedOn=e,s8(_.priority,function(){i8(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){_.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}_.blockedOn=null}function M_(_){if(_.blockedOn!==null)return!1;for(var e=_.targetContainers;0<e.length;){var t=P5(_.domEventName,_.eventSystemFlags,e[0],_.nativeEvent);if(t===null){t=_.nativeEvent;var n=new t.constructor(t.type,t);k5=n,t.target.dispatchEvent(n),k5=null}else return e=u_(t),e!==null&&h3(e),_.blockedOn=t,!1;e.shift()}return!0}function m7(_,e,t){M_(_)&&t.delete(e)}function He(){N5=!1,d1!==null&&M_(d1)&&(d1=null),p1!==null&&M_(p1)&&(p1=null),h1!==null&&M_(h1)&&(h1=null),K2.forEach(m7),W2.forEach(m7)}function k2(_,e){_.blockedOn===e&&(_.blockedOn=null,N5||(N5=!0,x0.unstable_scheduleCallback(x0.unstable_NormalPriority,He)))}function Q2(_){function e(r){return k2(r,_)}if(0<y_.length){k2(y_[0],_);for(var t=1;t<y_.length;t++){var n=y_[t];n.blockedOn===_&&(n.blockedOn=null)}}for(d1!==null&&k2(d1,_),p1!==null&&k2(p1,_),h1!==null&&k2(h1,_),K2.forEach(e),W2.forEach(e),t=0;t<s1.length;t++)n=s1[t],n.blockedOn===_&&(n.blockedOn=null);for(;0<s1.length&&(t=s1[0],t.blockedOn===null);)a8(t),t.blockedOn===null&&s1.shift()}var o2=l1.ReactCurrentBatchConfig,G_=!0;function $e(_,e,t,n){var r=V,l=o2.transition;o2.transition=null;try{V=1,m3(_,e,t,n)}finally{V=r,o2.transition=l}}function Ve(_,e,t,n){var r=V,l=o2.transition;o2.transition=null;try{V=4,m3(_,e,t,n)}finally{V=r,o2.transition=l}}function m3(_,e,t,n){if(G_){var r=P5(_,e,t,n);if(r===null)G6(_,e,n,Y_,t),h7(_,n);else if(Ue(r,_,e,t,n))n.stopPropagation();else if(h7(_,n),e&4&&-1<Fe.indexOf(_)){for(;r!==null;){var l=u_(r);if(l!==null&&o8(l),l=P5(_,e,t,n),l===null&&G6(_,e,n,Y_,t),l===r)break;r=l}r!==null&&n.stopPropagation()}else G6(_,e,n,null,t)}}var Y_=null;function P5(_,e,t,n){if(Y_=null,_=f3(n),_=T1(_),_!==null)if(e=$1(_),e===null)_=null;else if(t=e.tag,t===13){if(_=q4(e),_!==null)return _;_=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;_=null}else e!==_&&(_=null);return Y_=_,null}function c8(_){switch(_){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ze()){case d3:return 1;case t8:return 4;case W_:case Te:return 16;case n8:return 536870912;default:return 16}default:return 16}}var c1=null,v3=null,I_=null;function f8(){if(I_)return I_;var _,e=v3,t=e.length,n,r="value"in c1?c1.value:c1.textContent,l=r.length;for(_=0;_<t&&e[_]===r[_];_++);var o=t-_;for(n=1;n<=o&&e[t-n]===r[l-n];n++);return I_=r.slice(_,1<n?1-n:void 0)}function D_(_){var e=_.keyCode;return"charCode"in _?(_=_.charCode,_===0&&e===13&&(_=13)):_=e,_===10&&(_=13),32<=_||_===13?_:0}function g_(){return!0}function v7(){return!1}function P0(_){function e(t,n,r,l,o){this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var i in _)_.hasOwnProperty(i)&&(t=_[i],this[i]=t?t(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?g_:v7,this.isPropagationStopped=v7,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=g_)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=g_)},persist:function(){},isPersistent:g_}),e}var v2={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(_){return _.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},y3=P0(v2),i_=Z({},v2,{view:0,detail:0}),Ke=P0(i_),O6,F6,E2,h6=Z({},i_,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:g3,button:0,buttons:0,relatedTarget:function(_){return _.relatedTarget===void 0?_.fromElement===_.srcElement?_.toElement:_.fromElement:_.relatedTarget},movementX:function(_){return"movementX"in _?_.movementX:(_!==E2&&(E2&&_.type==="mousemove"?(O6=_.screenX-E2.screenX,F6=_.screenY-E2.screenY):F6=O6=0,E2=_),O6)},movementY:function(_){return"movementY"in _?_.movementY:F6}}),y7=P0(h6),We=Z({},h6,{dataTransfer:0}),Qe=P0(We),Ge=Z({},i_,{relatedTarget:0}),U6=P0(Ge),Ye=Z({},v2,{animationName:0,elapsedTime:0,pseudoElement:0}),Xe=P0(Ye),Ze=Z({},v2,{clipboardData:function(_){return"clipboardData"in _?_.clipboardData:window.clipboardData}}),Je=P0(Ze),qe=Z({},v2,{data:0}),g7=P0(qe),be={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},et={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tt(_){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(_):(_=et[_])?!!e[_]:!1}function g3(){return tt}var nt=Z({},i_,{key:function(_){if(_.key){var e=be[_.key]||_.key;if(e!=="Unidentified")return e}return _.type==="keypress"?(_=D_(_),_===13?"Enter":String.fromCharCode(_)):_.type==="keydown"||_.type==="keyup"?_t[_.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:g3,charCode:function(_){return _.type==="keypress"?D_(_):0},keyCode:function(_){return _.type==="keydown"||_.type==="keyup"?_.keyCode:0},which:function(_){return _.type==="keypress"?D_(_):_.type==="keydown"||_.type==="keyup"?_.keyCode:0}}),rt=P0(nt),lt=Z({},h6,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w7=P0(lt),ot=Z({},i_,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:g3}),it=P0(ot),ut=Z({},v2,{propertyName:0,elapsedTime:0,pseudoElement:0}),st=P0(ut),at=Z({},h6,{deltaX:function(_){return"deltaX"in _?_.deltaX:"wheelDeltaX"in _?-_.wheelDeltaX:0},deltaY:function(_){return"deltaY"in _?_.deltaY:"wheelDeltaY"in _?-_.wheelDeltaY:"wheelDelta"in _?-_.wheelDelta:0},deltaZ:0,deltaMode:0}),ct=P0(at),ft=[9,13,27,32],w3=_1&&"CompositionEvent"in window,D2=null;_1&&"documentMode"in document&&(D2=document.documentMode);var dt=_1&&"TextEvent"in window&&!D2,d8=_1&&(!w3||D2&&8<D2&&11>=D2),S7=" ",k7=!1;function p8(_,e){switch(_){case"keyup":return ft.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h8(_){return _=_.detail,typeof _=="object"&&"data"in _?_.data:null}var G1=!1;function pt(_,e){switch(_){case"compositionend":return h8(e);case"keypress":return e.which!==32?null:(k7=!0,S7);case"textInput":return _=e.data,_===S7&&k7?null:_;default:return null}}function ht(_,e){if(G1)return _==="compositionend"||!w3&&p8(_,e)?(_=f8(),I_=v3=c1=null,G1=!1,_):null;switch(_){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d8&&e.locale!=="ko"?null:e.data;default:return null}}var mt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E7(_){var e=_&&_.nodeName&&_.nodeName.toLowerCase();return e==="input"?!!mt[_.type]:e==="textarea"}function m8(_,e,t,n){G4(n),e=X_(e,"onChange"),0<e.length&&(t=new y3("onChange","change",null,t,n),_.push({event:t,listeners:e}))}var R2=null,G2=null;function vt(_){N8(_,0)}function m6(_){var e=Z1(_);if(U4(e))return _}function yt(_,e){if(_==="change")return e}var v8=!1;if(_1){var H6;if(_1){var $6="oninput"in document;if(!$6){var C7=document.createElement("div");C7.setAttribute("oninput","return;"),$6=typeof C7.oninput=="function"}H6=$6}else H6=!1;v8=H6&&(!document.documentMode||9<document.documentMode)}function A7(){R2&&(R2.detachEvent("onpropertychange",y8),G2=R2=null)}function y8(_){if(_.propertyName==="value"&&m6(G2)){var e=[];m8(e,G2,_,f3(_)),J4(vt,e)}}function gt(_,e,t){_==="focusin"?(A7(),R2=e,G2=t,R2.attachEvent("onpropertychange",y8)):_==="focusout"&&A7()}function wt(_){if(_==="selectionchange"||_==="keyup"||_==="keydown")return m6(G2)}function St(_,e){if(_==="click")return m6(e)}function kt(_,e){if(_==="input"||_==="change")return m6(e)}function Et(_,e){return _===e&&(_!==0||1/_===1/e)||_!==_&&e!==e}var $0=typeof Object.is=="function"?Object.is:Et;function Y2(_,e){if($0(_,e))return!0;if(typeof _!="object"||_===null||typeof e!="object"||e===null)return!1;var t=Object.keys(_),n=Object.keys(e);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var r=t[n];if(!a5.call(e,r)||!$0(_[r],e[r]))return!1}return!0}function x7(_){for(;_&&_.firstChild;)_=_.firstChild;return _}function N7(_,e){var t=x7(_);_=0;for(var n;t;){if(t.nodeType===3){if(n=_+t.textContent.length,_<=e&&n>=e)return{node:t,offset:e-_};_=n}_:{for(;t;){if(t.nextSibling){t=t.nextSibling;break _}t=t.parentNode}t=void 0}t=x7(t)}}function g8(_,e){return _&&e?_===e?!0:_&&_.nodeType===3?!1:e&&e.nodeType===3?g8(_,e.parentNode):"contains"in _?_.contains(e):_.compareDocumentPosition?!!(_.compareDocumentPosition(e)&16):!1:!1}function w8(){for(var _=window,e=$_();e instanceof _.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)_=e.contentWindow;else break;e=$_(_.document)}return e}function S3(_){var e=_&&_.nodeName&&_.nodeName.toLowerCase();return e&&(e==="input"&&(_.type==="text"||_.type==="search"||_.type==="tel"||_.type==="url"||_.type==="password")||e==="textarea"||_.contentEditable==="true")}function Ct(_){var e=w8(),t=_.focusedElem,n=_.selectionRange;if(e!==t&&t&&t.ownerDocument&&g8(t.ownerDocument.documentElement,t)){if(n!==null&&S3(t)){if(e=n.start,_=n.end,_===void 0&&(_=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(_,t.value.length);else if(_=(e=t.ownerDocument||document)&&e.defaultView||window,_.getSelection){_=_.getSelection();var r=t.textContent.length,l=Math.min(n.start,r);n=n.end===void 0?l:Math.min(n.end,r),!_.extend&&l>n&&(r=n,n=l,l=r),r=N7(t,l);var o=N7(t,n);r&&o&&(_.rangeCount!==1||_.anchorNode!==r.node||_.anchorOffset!==r.offset||_.focusNode!==o.node||_.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),_.removeAllRanges(),l>n?(_.addRange(e),_.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),_.addRange(e)))}}for(e=[],_=t;_=_.parentNode;)_.nodeType===1&&e.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)_=e[t],_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}var At=_1&&"documentMode"in document&&11>=document.documentMode,Y1=null,L5=null,B2=null,z5=!1;function P7(_,e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;z5||Y1==null||Y1!==$_(n)||(n=Y1,"selectionStart"in n&&S3(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),B2&&Y2(B2,n)||(B2=n,n=X_(L5,"onSelect"),0<n.length&&(e=new y3("onSelect","select",null,e,t),_.push({event:e,listeners:n}),e.target=Y1)))}function w_(_,e){var t={};return t[_.toLowerCase()]=e.toLowerCase(),t["Webkit"+_]="webkit"+e,t["Moz"+_]="moz"+e,t}var X1={animationend:w_("Animation","AnimationEnd"),animationiteration:w_("Animation","AnimationIteration"),animationstart:w_("Animation","AnimationStart"),transitionend:w_("Transition","TransitionEnd")},V6={},S8={};_1&&(S8=document.createElement("div").style,"AnimationEvent"in window||(delete X1.animationend.animation,delete X1.animationiteration.animation,delete X1.animationstart.animation),"TransitionEvent"in window||delete X1.transitionend.transition);function v6(_){if(V6[_])return V6[_];if(!X1[_])return _;var e=X1[_],t;for(t in e)if(e.hasOwnProperty(t)&&t in S8)return V6[_]=e[t];return _}var k8=v6("animationend"),E8=v6("animationiteration"),C8=v6("animationstart"),A8=v6("transitionend"),x8=new Map,L7="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function C1(_,e){x8.set(_,e),H1(e,[_])}for(var K6=0;K6<L7.length;K6++){var W6=L7[K6],xt=W6.toLowerCase(),Nt=W6[0].toUpperCase()+W6.slice(1);C1(xt,"on"+Nt)}C1(k8,"onAnimationEnd");C1(E8,"onAnimationIteration");C1(C8,"onAnimationStart");C1("dblclick","onDoubleClick");C1("focusin","onFocus");C1("focusout","onBlur");C1(A8,"onTransitionEnd");s2("onMouseEnter",["mouseout","mouseover"]);s2("onMouseLeave",["mouseout","mouseover"]);s2("onPointerEnter",["pointerout","pointerover"]);s2("onPointerLeave",["pointerout","pointerover"]);H1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));H1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));H1("onBeforeInput",["compositionend","keypress","textInput","paste"]);H1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));H1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));H1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var T2="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pt=new Set("cancel close invalid load scroll toggle".split(" ").concat(T2));function z7(_,e,t){var n=_.type||"unknown-event";_.currentTarget=t,xe(n,e,void 0,_),_.currentTarget=null}function N8(_,e){e=(e&4)!==0;for(var t=0;t<_.length;t++){var n=_[t],r=n.event;n=n.listeners;_:{var l=void 0;if(e)for(var o=n.length-1;0<=o;o--){var i=n[o],u=i.instance,c=i.currentTarget;if(i=i.listener,u!==l&&r.isPropagationStopped())break _;z7(r,i,c),l=u}else for(o=0;o<n.length;o++){if(i=n[o],u=i.instance,c=i.currentTarget,i=i.listener,u!==l&&r.isPropagationStopped())break _;z7(r,i,c),l=u}}}if(K_)throw _=A5,K_=!1,A5=null,_}function W(_,e){var t=e[R5];t===void 0&&(t=e[R5]=new Set);var n=_+"__bubble";t.has(n)||(P8(e,_,2,!1),t.add(n))}function Q6(_,e,t){var n=0;e&&(n|=4),P8(t,_,n,e)}var S_="_reactListening"+Math.random().toString(36).slice(2);function X2(_){if(!_[S_]){_[S_]=!0,R4.forEach(function(t){t!=="selectionchange"&&(Pt.has(t)||Q6(t,!1,_),Q6(t,!0,_))});var e=_.nodeType===9?_:_.ownerDocument;e===null||e[S_]||(e[S_]=!0,Q6("selectionchange",!1,e))}}function P8(_,e,t,n){switch(c8(e)){case 1:var r=$e;break;case 4:r=Ve;break;default:r=m3}t=r.bind(null,e,t,_),r=void 0,!C5||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),n?r!==void 0?_.addEventListener(e,t,{capture:!0,passive:r}):_.addEventListener(e,t,!0):r!==void 0?_.addEventListener(e,t,{passive:r}):_.addEventListener(e,t,!1)}function G6(_,e,t,n,r){var l=n;if(!(e&1)&&!(e&2)&&n!==null)_:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var i=n.stateNode.containerInfo;if(i===r||i.nodeType===8&&i.parentNode===r)break;if(o===4)for(o=n.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;o=o.return}for(;i!==null;){if(o=T1(i),o===null)return;if(u=o.tag,u===5||u===6){n=l=o;continue _}i=i.parentNode}}n=n.return}J4(function(){var c=l,m=f3(t),h=[];_:{var p=x8.get(_);if(p!==void 0){var y=y3,S=_;switch(_){case"keypress":if(D_(t)===0)break _;case"keydown":case"keyup":y=rt;break;case"focusin":S="focus",y=U6;break;case"focusout":S="blur",y=U6;break;case"beforeblur":case"afterblur":y=U6;break;case"click":if(t.button===2)break _;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=y7;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Qe;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=it;break;case k8:case E8:case C8:y=Xe;break;case A8:y=st;break;case"scroll":y=Ke;break;case"wheel":y=ct;break;case"copy":case"cut":case"paste":y=Je;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=w7}var A=(e&4)!==0,O=!A&&_==="scroll",a=A?p!==null?p+"Capture":null:p;A=[];for(var s=c,f;s!==null;){f=s;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,a!==null&&(v=V2(s,a),v!=null&&A.push(Z2(s,v,f)))),O)break;s=s.return}0<A.length&&(p=new y(p,S,null,t,m),h.push({event:p,listeners:A}))}}if(!(e&7)){_:{if(p=_==="mouseover"||_==="pointerover",y=_==="mouseout"||_==="pointerout",p&&t!==k5&&(S=t.relatedTarget||t.fromElement)&&(T1(S)||S[e1]))break _;if((y||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,y?(S=t.relatedTarget||t.toElement,y=c,S=S?T1(S):null,S!==null&&(O=$1(S),S!==O||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=c),y!==S)){if(A=y7,v="onMouseLeave",a="onMouseEnter",s="mouse",(_==="pointerout"||_==="pointerover")&&(A=w7,v="onPointerLeave",a="onPointerEnter",s="pointer"),O=y==null?p:Z1(y),f=S==null?p:Z1(S),p=new A(v,s+"leave",y,t,m),p.target=O,p.relatedTarget=f,v=null,T1(m)===c&&(A=new A(a,s+"enter",S,t,m),A.target=f,A.relatedTarget=O,v=A),O=v,y&&S)e:{for(A=y,a=S,s=0,f=A;f;f=V1(f))s++;for(f=0,v=a;v;v=V1(v))f++;for(;0<s-f;)A=V1(A),s--;for(;0<f-s;)a=V1(a),f--;for(;s--;){if(A===a||a!==null&&A===a.alternate)break e;A=V1(A),a=V1(a)}A=null}else A=null;y!==null&&T7(h,p,y,A,!1),S!==null&&O!==null&&T7(h,O,S,A,!0)}}_:{if(p=c?Z1(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var x=yt;else if(E7(p))if(v8)x=kt;else{x=wt;var z=gt}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=St);if(x&&(x=x(_,c))){m8(h,x,t,m);break _}z&&z(_,p,c),_==="focusout"&&(z=p._wrapperState)&&z.controlled&&p.type==="number"&&v5(p,"number",p.value)}switch(z=c?Z1(c):window,_){case"focusin":(E7(z)||z.contentEditable==="true")&&(Y1=z,L5=c,B2=null);break;case"focusout":B2=L5=Y1=null;break;case"mousedown":z5=!0;break;case"contextmenu":case"mouseup":case"dragend":z5=!1,P7(h,t,m);break;case"selectionchange":if(At)break;case"keydown":case"keyup":P7(h,t,m)}var P;if(w3)_:{switch(_){case"compositionstart":var I="onCompositionStart";break _;case"compositionend":I="onCompositionEnd";break _;case"compositionupdate":I="onCompositionUpdate";break _}I=void 0}else G1?p8(_,t)&&(I="onCompositionEnd"):_==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(d8&&t.locale!=="ko"&&(G1||I!=="onCompositionStart"?I==="onCompositionEnd"&&G1&&(P=f8()):(c1=m,v3="value"in c1?c1.value:c1.textContent,G1=!0)),z=X_(c,I),0<z.length&&(I=new g7(I,_,null,t,m),h.push({event:I,listeners:z}),P?I.data=P:(P=h8(t),P!==null&&(I.data=P)))),(P=dt?pt(_,t):ht(_,t))&&(c=X_(c,"onBeforeInput"),0<c.length&&(m=new g7("onBeforeInput","beforeinput",null,t,m),h.push({event:m,listeners:c}),m.data=P))}N8(h,e)})}function Z2(_,e,t){return{instance:_,listener:e,currentTarget:t}}function X_(_,e){for(var t=e+"Capture",n=[];_!==null;){var r=_,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=V2(_,t),l!=null&&n.unshift(Z2(_,l,r)),l=V2(_,e),l!=null&&n.push(Z2(_,l,r))),_=_.return}return n}function V1(_){if(_===null)return null;do _=_.return;while(_&&_.tag!==5);return _||null}function T7(_,e,t,n,r){for(var l=e._reactName,o=[];t!==null&&t!==n;){var i=t,u=i.alternate,c=i.stateNode;if(u!==null&&u===n)break;i.tag===5&&c!==null&&(i=c,r?(u=V2(t,l),u!=null&&o.unshift(Z2(t,u,i))):r||(u=V2(t,l),u!=null&&o.push(Z2(t,u,i)))),t=t.return}o.length!==0&&_.push({event:e,listeners:o})}var Lt=/\r\n?/g,zt=/\u0000|\uFFFD/g;function M7(_){return(typeof _=="string"?_:""+_).replace(Lt,`
`).replace(zt,"")}function k_(_,e,t){if(e=M7(e),M7(_)!==e&&t)throw Error(g(425))}function Z_(){}var T5=null,M5=null;function I5(_,e){return _==="textarea"||_==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var D5=typeof setTimeout=="function"?setTimeout:void 0,Tt=typeof clearTimeout=="function"?clearTimeout:void 0,I7=typeof Promise=="function"?Promise:void 0,Mt=typeof queueMicrotask=="function"?queueMicrotask:typeof I7<"u"?function(_){return I7.resolve(null).then(_).catch(It)}:D5;function It(_){setTimeout(function(){throw _})}function Y6(_,e){var t=e,n=0;do{var r=t.nextSibling;if(_.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(n===0){_.removeChild(r),Q2(e);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=r}while(t);Q2(e)}function m1(_){for(;_!=null;_=_.nextSibling){var e=_.nodeType;if(e===1||e===3)break;if(e===8){if(e=_.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return _}function D7(_){_=_.previousSibling;for(var e=0;_;){if(_.nodeType===8){var t=_.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return _;e--}else t==="/$"&&e++}_=_.previousSibling}return null}var y2=Math.random().toString(36).slice(2),W0="__reactFiber$"+y2,J2="__reactProps$"+y2,e1="__reactContainer$"+y2,R5="__reactEvents$"+y2,Dt="__reactListeners$"+y2,Rt="__reactHandles$"+y2;function T1(_){var e=_[W0];if(e)return e;for(var t=_.parentNode;t;){if(e=t[e1]||t[W0]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(_=D7(_);_!==null;){if(t=_[W0])return t;_=D7(_)}return e}_=t,t=_.parentNode}return null}function u_(_){return _=_[W0]||_[e1],!_||_.tag!==5&&_.tag!==6&&_.tag!==13&&_.tag!==3?null:_}function Z1(_){if(_.tag===5||_.tag===6)return _.stateNode;throw Error(g(33))}function y6(_){return _[J2]||null}var B5=[],J1=-1;function A1(_){return{current:_}}function Q(_){0>J1||(_.current=B5[J1],B5[J1]=null,J1--)}function K(_,e){J1++,B5[J1]=_.current,_.current=e}var k1={},f0=A1(k1),w0=A1(!1),B1=k1;function a2(_,e){var t=_.type.contextTypes;if(!t)return k1;var n=_.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in t)r[l]=e[l];return n&&(_=_.stateNode,_.__reactInternalMemoizedUnmaskedChildContext=e,_.__reactInternalMemoizedMaskedChildContext=r),r}function S0(_){return _=_.childContextTypes,_!=null}function J_(){Q(w0),Q(f0)}function R7(_,e,t){if(f0.current!==k1)throw Error(g(168));K(f0,e),K(w0,t)}function L8(_,e,t){var n=_.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var r in n)if(!(r in e))throw Error(g(108,ge(_)||"Unknown",r));return Z({},t,n)}function q_(_){return _=(_=_.stateNode)&&_.__reactInternalMemoizedMergedChildContext||k1,B1=f0.current,K(f0,_),K(w0,w0.current),!0}function B7(_,e,t){var n=_.stateNode;if(!n)throw Error(g(169));t?(_=L8(_,e,B1),n.__reactInternalMemoizedMergedChildContext=_,Q(w0),Q(f0),K(f0,_)):Q(w0),K(w0,t)}var Z0=null,g6=!1,X6=!1;function z8(_){Z0===null?Z0=[_]:Z0.push(_)}function Bt(_){g6=!0,z8(_)}function x1(){if(!X6&&Z0!==null){X6=!0;var _=0,e=V;try{var t=Z0;for(V=1;_<t.length;_++){var n=t[_];do n=n(!0);while(n!==null)}Z0=null,g6=!1}catch(r){throw Z0!==null&&(Z0=Z0.slice(_+1)),e8(d3,x1),r}finally{V=e,X6=!1}}return null}var q1=[],b1=0,b_=null,_6=0,z0=[],T0=0,j1=null,J0=1,q0="";function L1(_,e){q1[b1++]=_6,q1[b1++]=b_,b_=_,_6=e}function T8(_,e,t){z0[T0++]=J0,z0[T0++]=q0,z0[T0++]=j1,j1=_;var n=J0;_=q0;var r=32-U0(n)-1;n&=~(1<<r),t+=1;var l=32-U0(e)+r;if(30<l){var o=r-r%5;l=(n&(1<<o)-1).toString(32),n>>=o,r-=o,J0=1<<32-U0(e)+r|t<<r|n,q0=l+_}else J0=1<<l|t<<r|n,q0=_}function k3(_){_.return!==null&&(L1(_,1),T8(_,1,0))}function E3(_){for(;_===b_;)b_=q1[--b1],q1[b1]=null,_6=q1[--b1],q1[b1]=null;for(;_===j1;)j1=z0[--T0],z0[T0]=null,q0=z0[--T0],z0[T0]=null,J0=z0[--T0],z0[T0]=null}var A0=null,C0=null,G=!1,F0=null;function M8(_,e){var t=M0(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=_,e=_.deletions,e===null?(_.deletions=[t],_.flags|=16):e.push(t)}function j7(_,e){switch(_.tag){case 5:var t=_.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(_.stateNode=e,A0=_,C0=m1(e.firstChild),!0):!1;case 6:return e=_.pendingProps===""||e.nodeType!==3?null:e,e!==null?(_.stateNode=e,A0=_,C0=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=j1!==null?{id:J0,overflow:q0}:null,_.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=M0(18,null,null,0),t.stateNode=e,t.return=_,_.child=t,A0=_,C0=null,!0):!1;default:return!1}}function j5(_){return(_.mode&1)!==0&&(_.flags&128)===0}function O5(_){if(G){var e=C0;if(e){var t=e;if(!j7(_,e)){if(j5(_))throw Error(g(418));e=m1(t.nextSibling);var n=A0;e&&j7(_,e)?M8(n,t):(_.flags=_.flags&-4097|2,G=!1,A0=_)}}else{if(j5(_))throw Error(g(418));_.flags=_.flags&-4097|2,G=!1,A0=_}}}function O7(_){for(_=_.return;_!==null&&_.tag!==5&&_.tag!==3&&_.tag!==13;)_=_.return;A0=_}function E_(_){if(_!==A0)return!1;if(!G)return O7(_),G=!0,!1;var e;if((e=_.tag!==3)&&!(e=_.tag!==5)&&(e=_.type,e=e!=="head"&&e!=="body"&&!I5(_.type,_.memoizedProps)),e&&(e=C0)){if(j5(_))throw I8(),Error(g(418));for(;e;)M8(_,e),e=m1(e.nextSibling)}if(O7(_),_.tag===13){if(_=_.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(g(317));_:{for(_=_.nextSibling,e=0;_;){if(_.nodeType===8){var t=_.data;if(t==="/$"){if(e===0){C0=m1(_.nextSibling);break _}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}_=_.nextSibling}C0=null}}else C0=A0?m1(_.stateNode.nextSibling):null;return!0}function I8(){for(var _=C0;_;)_=m1(_.nextSibling)}function c2(){C0=A0=null,G=!1}function C3(_){F0===null?F0=[_]:F0.push(_)}var jt=l1.ReactCurrentBatchConfig;function j0(_,e){if(_&&_.defaultProps){e=Z({},e),_=_.defaultProps;for(var t in _)e[t]===void 0&&(e[t]=_[t]);return e}return e}var e6=A1(null),t6=null,_2=null,A3=null;function x3(){A3=_2=t6=null}function N3(_){var e=e6.current;Q(e6),_._currentValue=e}function F5(_,e,t){for(;_!==null;){var n=_.alternate;if((_.childLanes&e)!==e?(_.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),_===t)break;_=_.return}}function i2(_,e){t6=_,A3=_2=null,_=_.dependencies,_!==null&&_.firstContext!==null&&(_.lanes&e&&(g0=!0),_.firstContext=null)}function D0(_){var e=_._currentValue;if(A3!==_)if(_={context:_,memoizedValue:e,next:null},_2===null){if(t6===null)throw Error(g(308));_2=_,t6.dependencies={lanes:0,firstContext:_}}else _2=_2.next=_;return e}var M1=null;function P3(_){M1===null?M1=[_]:M1.push(_)}function D8(_,e,t,n){var r=e.interleaved;return r===null?(t.next=t,P3(e)):(t.next=r.next,r.next=t),e.interleaved=t,t1(_,n)}function t1(_,e){_.lanes|=e;var t=_.alternate;for(t!==null&&(t.lanes|=e),t=_,_=_.return;_!==null;)_.childLanes|=e,t=_.alternate,t!==null&&(t.childLanes|=e),t=_,_=_.return;return t.tag===3?t.stateNode:null}var u1=!1;function L3(_){_.updateQueue={baseState:_.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R8(_,e){_=_.updateQueue,e.updateQueue===_&&(e.updateQueue={baseState:_.baseState,firstBaseUpdate:_.firstBaseUpdate,lastBaseUpdate:_.lastBaseUpdate,shared:_.shared,effects:_.effects})}function b0(_,e){return{eventTime:_,lane:e,tag:0,payload:null,callback:null,next:null}}function v1(_,e,t){var n=_.updateQueue;if(n===null)return null;if(n=n.shared,H&2){var r=n.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e,t1(_,t)}return r=n.interleaved,r===null?(e.next=e,P3(n)):(e.next=r.next,r.next=e),n.interleaved=e,t1(_,t)}function R_(_,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var n=e.lanes;n&=_.pendingLanes,t|=n,e.lanes=t,p3(_,t)}}function F7(_,e){var t=_.updateQueue,n=_.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var r=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?r=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?r=l=e:l=l.next=e}else r=l=e;t={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:n.shared,effects:n.effects},_.updateQueue=t;return}_=t.lastBaseUpdate,_===null?t.firstBaseUpdate=e:_.next=e,t.lastBaseUpdate=e}function n6(_,e,t,n){var r=_.updateQueue;u1=!1;var l=r.firstBaseUpdate,o=r.lastBaseUpdate,i=r.shared.pending;if(i!==null){r.shared.pending=null;var u=i,c=u.next;u.next=null,o===null?l=c:o.next=c,o=u;var m=_.alternate;m!==null&&(m=m.updateQueue,i=m.lastBaseUpdate,i!==o&&(i===null?m.firstBaseUpdate=c:i.next=c,m.lastBaseUpdate=u))}if(l!==null){var h=r.baseState;o=0,m=c=u=null,i=l;do{var p=i.lane,y=i.eventTime;if((n&p)===p){m!==null&&(m=m.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});_:{var S=_,A=i;switch(p=e,y=t,A.tag){case 1:if(S=A.payload,typeof S=="function"){h=S.call(y,h,p);break _}h=S;break _;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,p=typeof S=="function"?S.call(y,h,p):S,p==null)break _;h=Z({},h,p);break _;case 2:u1=!0}}i.callback!==null&&i.lane!==0&&(_.flags|=64,p=r.effects,p===null?r.effects=[i]:p.push(i))}else y={eventTime:y,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},m===null?(c=m=y,u=h):m=m.next=y,o|=p;if(i=i.next,i===null){if(i=r.shared.pending,i===null)break;p=i,i=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(m===null&&(u=h),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=m,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else l===null&&(r.shared.lanes=0);F1|=o,_.lanes=o,_.memoizedState=h}}function U7(_,e,t){if(_=e.effects,e.effects=null,_!==null)for(e=0;e<_.length;e++){var n=_[e],r=n.callback;if(r!==null){if(n.callback=null,n=t,typeof r!="function")throw Error(g(191,r));r.call(n)}}}var B8=new D4.Component().refs;function U5(_,e,t,n){e=_.memoizedState,t=t(n,e),t=t==null?e:Z({},e,t),_.memoizedState=t,_.lanes===0&&(_.updateQueue.baseState=t)}var w6={isMounted:function(_){return(_=_._reactInternals)?$1(_)===_:!1},enqueueSetState:function(_,e,t){_=_._reactInternals;var n=p0(),r=g1(_),l=b0(n,r);l.payload=e,t!=null&&(l.callback=t),e=v1(_,l,r),e!==null&&(H0(e,_,r,n),R_(e,_,r))},enqueueReplaceState:function(_,e,t){_=_._reactInternals;var n=p0(),r=g1(_),l=b0(n,r);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=v1(_,l,r),e!==null&&(H0(e,_,r,n),R_(e,_,r))},enqueueForceUpdate:function(_,e){_=_._reactInternals;var t=p0(),n=g1(_),r=b0(t,n);r.tag=2,e!=null&&(r.callback=e),e=v1(_,r,n),e!==null&&(H0(e,_,n,t),R_(e,_,n))}};function H7(_,e,t,n,r,l,o){return _=_.stateNode,typeof _.shouldComponentUpdate=="function"?_.shouldComponentUpdate(n,l,o):e.prototype&&e.prototype.isPureReactComponent?!Y2(t,n)||!Y2(r,l):!0}function j8(_,e,t){var n=!1,r=k1,l=e.contextType;return typeof l=="object"&&l!==null?l=D0(l):(r=S0(e)?B1:f0.current,n=e.contextTypes,l=(n=n!=null)?a2(_,r):k1),e=new e(t,l),_.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=w6,_.stateNode=e,e._reactInternals=_,n&&(_=_.stateNode,_.__reactInternalMemoizedUnmaskedChildContext=r,_.__reactInternalMemoizedMaskedChildContext=l),e}function $7(_,e,t,n){_=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,n),e.state!==_&&w6.enqueueReplaceState(e,e.state,null)}function H5(_,e,t,n){var r=_.stateNode;r.props=t,r.state=_.memoizedState,r.refs=B8,L3(_);var l=e.contextType;typeof l=="object"&&l!==null?r.context=D0(l):(l=S0(e)?B1:f0.current,r.context=a2(_,l)),r.state=_.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(U5(_,e,l,t),r.state=_.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&w6.enqueueReplaceState(r,r.state,null),n6(_,t,r,n),r.state=_.memoizedState),typeof r.componentDidMount=="function"&&(_.flags|=4194308)}function C2(_,e,t){if(_=t.ref,_!==null&&typeof _!="function"&&typeof _!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var n=t.stateNode}if(!n)throw Error(g(147,_));var r=n,l=""+_;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(o){var i=r.refs;i===B8&&(i=r.refs={}),o===null?delete i[l]:i[l]=o},e._stringRef=l,e)}if(typeof _!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,_))}return _}function C_(_,e){throw _=Object.prototype.toString.call(e),Error(g(31,_==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":_))}function V7(_){var e=_._init;return e(_._payload)}function O8(_){function e(a,s){if(_){var f=a.deletions;f===null?(a.deletions=[s],a.flags|=16):f.push(s)}}function t(a,s){if(!_)return null;for(;s!==null;)e(a,s),s=s.sibling;return null}function n(a,s){for(a=new Map;s!==null;)s.key!==null?a.set(s.key,s):a.set(s.index,s),s=s.sibling;return a}function r(a,s){return a=w1(a,s),a.index=0,a.sibling=null,a}function l(a,s,f){return a.index=f,_?(f=a.alternate,f!==null?(f=f.index,f<s?(a.flags|=2,s):f):(a.flags|=2,s)):(a.flags|=1048576,s)}function o(a){return _&&a.alternate===null&&(a.flags|=2),a}function i(a,s,f,v){return s===null||s.tag!==6?(s=t5(f,a.mode,v),s.return=a,s):(s=r(s,f),s.return=a,s)}function u(a,s,f,v){var x=f.type;return x===Q1?m(a,s,f.props.children,v,f.key):s!==null&&(s.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===i1&&V7(x)===s.type)?(v=r(s,f.props),v.ref=C2(a,s,f),v.return=a,v):(v=H_(f.type,f.key,f.props,null,a.mode,v),v.ref=C2(a,s,f),v.return=a,v)}function c(a,s,f,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=n5(f,a.mode,v),s.return=a,s):(s=r(s,f.children||[]),s.return=a,s)}function m(a,s,f,v,x){return s===null||s.tag!==7?(s=R1(f,a.mode,v,x),s.return=a,s):(s=r(s,f),s.return=a,s)}function h(a,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=t5(""+s,a.mode,f),s.return=a,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case d_:return f=H_(s.type,s.key,s.props,null,a.mode,f),f.ref=C2(a,null,s),f.return=a,f;case W1:return s=n5(s,a.mode,f),s.return=a,s;case i1:var v=s._init;return h(a,v(s._payload),f)}if(L2(s)||g2(s))return s=R1(s,a.mode,f,null),s.return=a,s;C_(a,s)}return null}function p(a,s,f,v){var x=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:i(a,s,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case d_:return f.key===x?u(a,s,f,v):null;case W1:return f.key===x?c(a,s,f,v):null;case i1:return x=f._init,p(a,s,x(f._payload),v)}if(L2(f)||g2(f))return x!==null?null:m(a,s,f,v,null);C_(a,f)}return null}function y(a,s,f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return a=a.get(f)||null,i(s,a,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case d_:return a=a.get(v.key===null?f:v.key)||null,u(s,a,v,x);case W1:return a=a.get(v.key===null?f:v.key)||null,c(s,a,v,x);case i1:var z=v._init;return y(a,s,f,z(v._payload),x)}if(L2(v)||g2(v))return a=a.get(f)||null,m(s,a,v,x,null);C_(s,v)}return null}function S(a,s,f,v){for(var x=null,z=null,P=s,I=s=0,F=null;P!==null&&I<f.length;I++){P.index>I?(F=P,P=null):F=P.sibling;var d=p(a,P,f[I],v);if(d===null){P===null&&(P=F);break}_&&P&&d.alternate===null&&e(a,P),s=l(d,s,I),z===null?x=d:z.sibling=d,z=d,P=F}if(I===f.length)return t(a,P),G&&L1(a,I),x;if(P===null){for(;I<f.length;I++)P=h(a,f[I],v),P!==null&&(s=l(P,s,I),z===null?x=P:z.sibling=P,z=P);return G&&L1(a,I),x}for(P=n(a,P);I<f.length;I++)F=y(P,a,I,f[I],v),F!==null&&(_&&F.alternate!==null&&P.delete(F.key===null?I:F.key),s=l(F,s,I),z===null?x=F:z.sibling=F,z=F);return _&&P.forEach(function(k){return e(a,k)}),G&&L1(a,I),x}function A(a,s,f,v){var x=g2(f);if(typeof x!="function")throw Error(g(150));if(f=x.call(f),f==null)throw Error(g(151));for(var z=x=null,P=s,I=s=0,F=null,d=f.next();P!==null&&!d.done;I++,d=f.next()){P.index>I?(F=P,P=null):F=P.sibling;var k=p(a,P,d.value,v);if(k===null){P===null&&(P=F);break}_&&P&&k.alternate===null&&e(a,P),s=l(k,s,I),z===null?x=k:z.sibling=k,z=k,P=F}if(d.done)return t(a,P),G&&L1(a,I),x;if(P===null){for(;!d.done;I++,d=f.next())d=h(a,d.value,v),d!==null&&(s=l(d,s,I),z===null?x=d:z.sibling=d,z=d);return G&&L1(a,I),x}for(P=n(a,P);!d.done;I++,d=f.next())d=y(P,a,I,d.value,v),d!==null&&(_&&d.alternate!==null&&P.delete(d.key===null?I:d.key),s=l(d,s,I),z===null?x=d:z.sibling=d,z=d);return _&&P.forEach(function(R){return e(a,R)}),G&&L1(a,I),x}function O(a,s,f,v){if(typeof f=="object"&&f!==null&&f.type===Q1&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case d_:_:{for(var x=f.key,z=s;z!==null;){if(z.key===x){if(x=f.type,x===Q1){if(z.tag===7){t(a,z.sibling),s=r(z,f.props.children),s.return=a,a=s;break _}}else if(z.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===i1&&V7(x)===z.type){t(a,z.sibling),s=r(z,f.props),s.ref=C2(a,z,f),s.return=a,a=s;break _}t(a,z);break}else e(a,z);z=z.sibling}f.type===Q1?(s=R1(f.props.children,a.mode,v,f.key),s.return=a,a=s):(v=H_(f.type,f.key,f.props,null,a.mode,v),v.ref=C2(a,s,f),v.return=a,a=v)}return o(a);case W1:_:{for(z=f.key;s!==null;){if(s.key===z)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){t(a,s.sibling),s=r(s,f.children||[]),s.return=a,a=s;break _}else{t(a,s);break}else e(a,s);s=s.sibling}s=n5(f,a.mode,v),s.return=a,a=s}return o(a);case i1:return z=f._init,O(a,s,z(f._payload),v)}if(L2(f))return S(a,s,f,v);if(g2(f))return A(a,s,f,v);C_(a,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(t(a,s.sibling),s=r(s,f),s.return=a,a=s):(t(a,s),s=t5(f,a.mode,v),s.return=a,a=s),o(a)):t(a,s)}return O}var f2=O8(!0),F8=O8(!1),s_={},Y0=A1(s_),q2=A1(s_),b2=A1(s_);function I1(_){if(_===s_)throw Error(g(174));return _}function z3(_,e){switch(K(b2,e),K(q2,_),K(Y0,s_),_=e.nodeType,_){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:g5(null,"");break;default:_=_===8?e.parentNode:e,e=_.namespaceURI||null,_=_.tagName,e=g5(e,_)}Q(Y0),K(Y0,e)}function d2(){Q(Y0),Q(q2),Q(b2)}function U8(_){I1(b2.current);var e=I1(Y0.current),t=g5(e,_.type);e!==t&&(K(q2,_),K(Y0,t))}function T3(_){q2.current===_&&(Q(Y0),Q(q2))}var Y=A1(0);function r6(_){for(var e=_;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===_)break;for(;e.sibling===null;){if(e.return===null||e.return===_)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Z6=[];function M3(){for(var _=0;_<Z6.length;_++)Z6[_]._workInProgressVersionPrimary=null;Z6.length=0}var B_=l1.ReactCurrentDispatcher,J6=l1.ReactCurrentBatchConfig,O1=0,X=null,e0=null,r0=null,l6=!1,j2=!1,__=0,Ot=0;function s0(){throw Error(g(321))}function I3(_,e){if(e===null)return!1;for(var t=0;t<e.length&&t<_.length;t++)if(!$0(_[t],e[t]))return!1;return!0}function D3(_,e,t,n,r,l){if(O1=l,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,B_.current=_===null||_.memoizedState===null?$t:Vt,_=t(n,r),j2){l=0;do{if(j2=!1,__=0,25<=l)throw Error(g(301));l+=1,r0=e0=null,e.updateQueue=null,B_.current=Kt,_=t(n,r)}while(j2)}if(B_.current=o6,e=e0!==null&&e0.next!==null,O1=0,r0=e0=X=null,l6=!1,e)throw Error(g(300));return _}function R3(){var _=__!==0;return __=0,_}function K0(){var _={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return r0===null?X.memoizedState=r0=_:r0=r0.next=_,r0}function R0(){if(e0===null){var _=X.alternate;_=_!==null?_.memoizedState:null}else _=e0.next;var e=r0===null?X.memoizedState:r0.next;if(e!==null)r0=e,e0=_;else{if(_===null)throw Error(g(310));e0=_,_={memoizedState:e0.memoizedState,baseState:e0.baseState,baseQueue:e0.baseQueue,queue:e0.queue,next:null},r0===null?X.memoizedState=r0=_:r0=r0.next=_}return r0}function e_(_,e){return typeof e=="function"?e(_):e}function q6(_){var e=R0(),t=e.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=_;var n=e0,r=n.baseQueue,l=t.pending;if(l!==null){if(r!==null){var o=r.next;r.next=l.next,l.next=o}n.baseQueue=r=l,t.pending=null}if(r!==null){l=r.next,n=n.baseState;var i=o=null,u=null,c=l;do{var m=c.lane;if((O1&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:_(n,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(i=u=h,o=n):u=u.next=h,X.lanes|=m,F1|=m}c=c.next}while(c!==null&&c!==l);u===null?o=n:u.next=i,$0(n,e.memoizedState)||(g0=!0),e.memoizedState=n,e.baseState=o,e.baseQueue=u,t.lastRenderedState=n}if(_=t.interleaved,_!==null){r=_;do l=r.lane,X.lanes|=l,F1|=l,r=r.next;while(r!==_)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function b6(_){var e=R0(),t=e.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=_;var n=t.dispatch,r=t.pending,l=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do l=_(l,o.action),o=o.next;while(o!==r);$0(l,e.memoizedState)||(g0=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,n]}function H8(){}function $8(_,e){var t=X,n=R0(),r=e(),l=!$0(n.memoizedState,r);if(l&&(n.memoizedState=r,g0=!0),n=n.queue,B3(W8.bind(null,t,n,_),[_]),n.getSnapshot!==e||l||r0!==null&&r0.memoizedState.tag&1){if(t.flags|=2048,t_(9,K8.bind(null,t,n,r,e),void 0,null),l0===null)throw Error(g(349));O1&30||V8(t,e,r)}return r}function V8(_,e,t){_.flags|=16384,_={getSnapshot:e,value:t},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.stores=[_]):(t=e.stores,t===null?e.stores=[_]:t.push(_))}function K8(_,e,t,n){e.value=t,e.getSnapshot=n,Q8(e)&&G8(_)}function W8(_,e,t){return t(function(){Q8(e)&&G8(_)})}function Q8(_){var e=_.getSnapshot;_=_.value;try{var t=e();return!$0(_,t)}catch{return!0}}function G8(_){var e=t1(_,1);e!==null&&H0(e,_,1,-1)}function K7(_){var e=K0();return typeof _=="function"&&(_=_()),e.memoizedState=e.baseState=_,_={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e_,lastRenderedState:_},e.queue=_,_=_.dispatch=Ht.bind(null,X,_),[e.memoizedState,_]}function t_(_,e,t,n){return _={tag:_,create:e,destroy:t,deps:n,next:null},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.lastEffect=_.next=_):(t=e.lastEffect,t===null?e.lastEffect=_.next=_:(n=t.next,t.next=_,_.next=n,e.lastEffect=_)),_}function Y8(){return R0().memoizedState}function j_(_,e,t,n){var r=K0();X.flags|=_,r.memoizedState=t_(1|e,t,void 0,n===void 0?null:n)}function S6(_,e,t,n){var r=R0();n=n===void 0?null:n;var l=void 0;if(e0!==null){var o=e0.memoizedState;if(l=o.destroy,n!==null&&I3(n,o.deps)){r.memoizedState=t_(e,t,l,n);return}}X.flags|=_,r.memoizedState=t_(1|e,t,l,n)}function W7(_,e){return j_(8390656,8,_,e)}function B3(_,e){return S6(2048,8,_,e)}function X8(_,e){return S6(4,2,_,e)}function Z8(_,e){return S6(4,4,_,e)}function J8(_,e){if(typeof e=="function")return _=_(),e(_),function(){e(null)};if(e!=null)return _=_(),e.current=_,function(){e.current=null}}function q8(_,e,t){return t=t!=null?t.concat([_]):null,S6(4,4,J8.bind(null,e,_),t)}function j3(){}function b8(_,e){var t=R0();e=e===void 0?null:e;var n=t.memoizedState;return n!==null&&e!==null&&I3(e,n[1])?n[0]:(t.memoizedState=[_,e],_)}function _9(_,e){var t=R0();e=e===void 0?null:e;var n=t.memoizedState;return n!==null&&e!==null&&I3(e,n[1])?n[0]:(_=_(),t.memoizedState=[_,e],_)}function e9(_,e,t){return O1&21?($0(t,e)||(t=r8(),X.lanes|=t,F1|=t,_.baseState=!0),e):(_.baseState&&(_.baseState=!1,g0=!0),_.memoizedState=t)}function Ft(_,e){var t=V;V=t!==0&&4>t?t:4,_(!0);var n=J6.transition;J6.transition={};try{_(!1),e()}finally{V=t,J6.transition=n}}function t9(){return R0().memoizedState}function Ut(_,e,t){var n=g1(_);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},n9(_))r9(e,t);else if(t=D8(_,e,t,n),t!==null){var r=p0();H0(t,_,n,r),l9(t,e,n)}}function Ht(_,e,t){var n=g1(_),r={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(n9(_))r9(e,r);else{var l=_.alternate;if(_.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var o=e.lastRenderedState,i=l(o,t);if(r.hasEagerState=!0,r.eagerState=i,$0(i,o)){var u=e.interleaved;u===null?(r.next=r,P3(e)):(r.next=u.next,u.next=r),e.interleaved=r;return}}catch{}finally{}t=D8(_,e,r,n),t!==null&&(r=p0(),H0(t,_,n,r),l9(t,e,n))}}function n9(_){var e=_.alternate;return _===X||e!==null&&e===X}function r9(_,e){j2=l6=!0;var t=_.pending;t===null?e.next=e:(e.next=t.next,t.next=e),_.pending=e}function l9(_,e,t){if(t&4194240){var n=e.lanes;n&=_.pendingLanes,t|=n,e.lanes=t,p3(_,t)}}var o6={readContext:D0,useCallback:s0,useContext:s0,useEffect:s0,useImperativeHandle:s0,useInsertionEffect:s0,useLayoutEffect:s0,useMemo:s0,useReducer:s0,useRef:s0,useState:s0,useDebugValue:s0,useDeferredValue:s0,useTransition:s0,useMutableSource:s0,useSyncExternalStore:s0,useId:s0,unstable_isNewReconciler:!1},$t={readContext:D0,useCallback:function(_,e){return K0().memoizedState=[_,e===void 0?null:e],_},useContext:D0,useEffect:W7,useImperativeHandle:function(_,e,t){return t=t!=null?t.concat([_]):null,j_(4194308,4,J8.bind(null,e,_),t)},useLayoutEffect:function(_,e){return j_(4194308,4,_,e)},useInsertionEffect:function(_,e){return j_(4,2,_,e)},useMemo:function(_,e){var t=K0();return e=e===void 0?null:e,_=_(),t.memoizedState=[_,e],_},useReducer:function(_,e,t){var n=K0();return e=t!==void 0?t(e):e,n.memoizedState=n.baseState=e,_={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_,lastRenderedState:e},n.queue=_,_=_.dispatch=Ut.bind(null,X,_),[n.memoizedState,_]},useRef:function(_){var e=K0();return _={current:_},e.memoizedState=_},useState:K7,useDebugValue:j3,useDeferredValue:function(_){return K0().memoizedState=_},useTransition:function(){var _=K7(!1),e=_[0];return _=Ft.bind(null,_[1]),K0().memoizedState=_,[e,_]},useMutableSource:function(){},useSyncExternalStore:function(_,e,t){var n=X,r=K0();if(G){if(t===void 0)throw Error(g(407));t=t()}else{if(t=e(),l0===null)throw Error(g(349));O1&30||V8(n,e,t)}r.memoizedState=t;var l={value:t,getSnapshot:e};return r.queue=l,W7(W8.bind(null,n,l,_),[_]),n.flags|=2048,t_(9,K8.bind(null,n,l,t,e),void 0,null),t},useId:function(){var _=K0(),e=l0.identifierPrefix;if(G){var t=q0,n=J0;t=(n&~(1<<32-U0(n)-1)).toString(32)+t,e=":"+e+"R"+t,t=__++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Ot++,e=":"+e+"r"+t.toString(32)+":";return _.memoizedState=e},unstable_isNewReconciler:!1},Vt={readContext:D0,useCallback:b8,useContext:D0,useEffect:B3,useImperativeHandle:q8,useInsertionEffect:X8,useLayoutEffect:Z8,useMemo:_9,useReducer:q6,useRef:Y8,useState:function(){return q6(e_)},useDebugValue:j3,useDeferredValue:function(_){var e=R0();return e9(e,e0.memoizedState,_)},useTransition:function(){var _=q6(e_)[0],e=R0().memoizedState;return[_,e]},useMutableSource:H8,useSyncExternalStore:$8,useId:t9,unstable_isNewReconciler:!1},Kt={readContext:D0,useCallback:b8,useContext:D0,useEffect:B3,useImperativeHandle:q8,useInsertionEffect:X8,useLayoutEffect:Z8,useMemo:_9,useReducer:b6,useRef:Y8,useState:function(){return b6(e_)},useDebugValue:j3,useDeferredValue:function(_){var e=R0();return e0===null?e.memoizedState=_:e9(e,e0.memoizedState,_)},useTransition:function(){var _=b6(e_)[0],e=R0().memoizedState;return[_,e]},useMutableSource:H8,useSyncExternalStore:$8,useId:t9,unstable_isNewReconciler:!1};function p2(_,e){try{var t="",n=e;do t+=ye(n),n=n.return;while(n);var r=t}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:_,source:e,stack:r,digest:null}}function _5(_,e,t){return{value:_,source:null,stack:t??null,digest:e??null}}function $5(_,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Wt=typeof WeakMap=="function"?WeakMap:Map;function o9(_,e,t){t=b0(-1,t),t.tag=3,t.payload={element:null};var n=e.value;return t.callback=function(){u6||(u6=!0,q5=n),$5(_,e)},t}function i9(_,e,t){t=b0(-1,t),t.tag=3;var n=_.type.getDerivedStateFromError;if(typeof n=="function"){var r=e.value;t.payload=function(){return n(r)},t.callback=function(){$5(_,e)}}var l=_.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){$5(_,e),typeof n!="function"&&(y1===null?y1=new Set([this]):y1.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Q7(_,e,t){var n=_.pingCache;if(n===null){n=_.pingCache=new Wt;var r=new Set;n.set(e,r)}else r=n.get(e),r===void 0&&(r=new Set,n.set(e,r));r.has(t)||(r.add(t),_=ln.bind(null,_,e,t),e.then(_,_))}function G7(_){do{var e;if((e=_.tag===13)&&(e=_.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return _;_=_.return}while(_!==null);return null}function Y7(_,e,t,n,r){return _.mode&1?(_.flags|=65536,_.lanes=r,_):(_===e?_.flags|=65536:(_.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=b0(-1,1),e.tag=2,v1(t,e,1))),t.lanes|=1),_)}var Qt=l1.ReactCurrentOwner,g0=!1;function d0(_,e,t,n){e.child=_===null?F8(e,null,t,n):f2(e,_.child,t,n)}function X7(_,e,t,n,r){t=t.render;var l=e.ref;return i2(e,r),n=D3(_,e,t,n,l,r),t=R3(),_!==null&&!g0?(e.updateQueue=_.updateQueue,e.flags&=-2053,_.lanes&=~r,n1(_,e,r)):(G&&t&&k3(e),e.flags|=1,d0(_,e,n,r),e.child)}function Z7(_,e,t,n,r){if(_===null){var l=t.type;return typeof l=="function"&&!W3(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=l,u9(_,e,l,n,r)):(_=H_(t.type,null,n,e,e.mode,r),_.ref=e.ref,_.return=e,e.child=_)}if(l=_.child,!(_.lanes&r)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:Y2,t(o,n)&&_.ref===e.ref)return n1(_,e,r)}return e.flags|=1,_=w1(l,n),_.ref=e.ref,_.return=e,e.child=_}function u9(_,e,t,n,r){if(_!==null){var l=_.memoizedProps;if(Y2(l,n)&&_.ref===e.ref)if(g0=!1,e.pendingProps=n=l,(_.lanes&r)!==0)_.flags&131072&&(g0=!0);else return e.lanes=_.lanes,n1(_,e,r)}return V5(_,e,t,n,r)}function s9(_,e,t){var n=e.pendingProps,r=n.children,l=_!==null?_.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(t2,E0),E0|=t;else{if(!(t&1073741824))return _=l!==null?l.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:_,cachePool:null,transitions:null},e.updateQueue=null,K(t2,E0),E0|=_,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:t,K(t2,E0),E0|=n}else l!==null?(n=l.baseLanes|t,e.memoizedState=null):n=t,K(t2,E0),E0|=n;return d0(_,e,r,t),e.child}function a9(_,e){var t=e.ref;(_===null&&t!==null||_!==null&&_.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function V5(_,e,t,n,r){var l=S0(t)?B1:f0.current;return l=a2(e,l),i2(e,r),t=D3(_,e,t,n,l,r),n=R3(),_!==null&&!g0?(e.updateQueue=_.updateQueue,e.flags&=-2053,_.lanes&=~r,n1(_,e,r)):(G&&n&&k3(e),e.flags|=1,d0(_,e,t,r),e.child)}function J7(_,e,t,n,r){if(S0(t)){var l=!0;q_(e)}else l=!1;if(i2(e,r),e.stateNode===null)O_(_,e),j8(e,t,n),H5(e,t,n,r),n=!0;else if(_===null){var o=e.stateNode,i=e.memoizedProps;o.props=i;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=D0(c):(c=S0(t)?B1:f0.current,c=a2(e,c));var m=t.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==n||u!==c)&&$7(e,o,n,c),u1=!1;var p=e.memoizedState;o.state=p,n6(e,n,o,r),u=e.memoizedState,i!==n||p!==u||w0.current||u1?(typeof m=="function"&&(U5(e,t,m,n),u=e.memoizedState),(i=u1||H7(e,t,i,n,p,u,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),o.props=n,o.state=u,o.context=c,n=i):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,R8(_,e),i=e.memoizedProps,c=e.type===e.elementType?i:j0(e.type,i),o.props=c,h=e.pendingProps,p=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=D0(u):(u=S0(t)?B1:f0.current,u=a2(e,u));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==h||p!==u)&&$7(e,o,n,u),u1=!1,p=e.memoizedState,o.state=p,n6(e,n,o,r);var S=e.memoizedState;i!==h||p!==S||w0.current||u1?(typeof y=="function"&&(U5(e,t,y,n),S=e.memoizedState),(c=u1||H7(e,t,c,n,p,S,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===_.memoizedProps&&p===_.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===_.memoizedProps&&p===_.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=S),o.props=n,o.state=S,o.context=u,n=c):(typeof o.componentDidUpdate!="function"||i===_.memoizedProps&&p===_.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===_.memoizedProps&&p===_.memoizedState||(e.flags|=1024),n=!1)}return K5(_,e,t,n,l,r)}function K5(_,e,t,n,r,l){a9(_,e);var o=(e.flags&128)!==0;if(!n&&!o)return r&&B7(e,t,!1),n1(_,e,l);n=e.stateNode,Qt.current=e;var i=o&&typeof t.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,_!==null&&o?(e.child=f2(e,_.child,null,l),e.child=f2(e,null,i,l)):d0(_,e,i,l),e.memoizedState=n.state,r&&B7(e,t,!0),e.child}function c9(_){var e=_.stateNode;e.pendingContext?R7(_,e.pendingContext,e.pendingContext!==e.context):e.context&&R7(_,e.context,!1),z3(_,e.containerInfo)}function q7(_,e,t,n,r){return c2(),C3(r),e.flags|=256,d0(_,e,t,n),e.child}var W5={dehydrated:null,treeContext:null,retryLane:0};function Q5(_){return{baseLanes:_,cachePool:null,transitions:null}}function f9(_,e,t){var n=e.pendingProps,r=Y.current,l=!1,o=(e.flags&128)!==0,i;if((i=o)||(i=_!==null&&_.memoizedState===null?!1:(r&2)!==0),i?(l=!0,e.flags&=-129):(_===null||_.memoizedState!==null)&&(r|=1),K(Y,r&1),_===null)return O5(e),_=e.memoizedState,_!==null&&(_=_.dehydrated,_!==null)?(e.mode&1?_.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=n.children,_=n.fallback,l?(n=e.mode,l=e.child,o={mode:"hidden",children:o},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=C6(o,n,0,null),_=R1(_,n,t,null),l.return=e,_.return=e,l.sibling=_,e.child=l,e.child.memoizedState=Q5(t),e.memoizedState=W5,_):O3(e,o));if(r=_.memoizedState,r!==null&&(i=r.dehydrated,i!==null))return Gt(_,e,o,n,i,r,t);if(l){l=n.fallback,o=e.mode,r=_.child,i=r.sibling;var u={mode:"hidden",children:n.children};return!(o&1)&&e.child!==r?(n=e.child,n.childLanes=0,n.pendingProps=u,e.deletions=null):(n=w1(r,u),n.subtreeFlags=r.subtreeFlags&14680064),i!==null?l=w1(i,l):(l=R1(l,o,t,null),l.flags|=2),l.return=e,n.return=e,n.sibling=l,e.child=n,n=l,l=e.child,o=_.child.memoizedState,o=o===null?Q5(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=_.childLanes&~t,e.memoizedState=W5,n}return l=_.child,_=l.sibling,n=w1(l,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=t),n.return=e,n.sibling=null,_!==null&&(t=e.deletions,t===null?(e.deletions=[_],e.flags|=16):t.push(_)),e.child=n,e.memoizedState=null,n}function O3(_,e){return e=C6({mode:"visible",children:e},_.mode,0,null),e.return=_,_.child=e}function A_(_,e,t,n){return n!==null&&C3(n),f2(e,_.child,null,t),_=O3(e,e.pendingProps.children),_.flags|=2,e.memoizedState=null,_}function Gt(_,e,t,n,r,l,o){if(t)return e.flags&256?(e.flags&=-257,n=_5(Error(g(422))),A_(_,e,o,n)):e.memoizedState!==null?(e.child=_.child,e.flags|=128,null):(l=n.fallback,r=e.mode,n=C6({mode:"visible",children:n.children},r,0,null),l=R1(l,r,o,null),l.flags|=2,n.return=e,l.return=e,n.sibling=l,e.child=n,e.mode&1&&f2(e,_.child,null,o),e.child.memoizedState=Q5(o),e.memoizedState=W5,l);if(!(e.mode&1))return A_(_,e,o,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var i=n.dgst;return n=i,l=Error(g(419)),n=_5(l,n,void 0),A_(_,e,o,n)}if(i=(o&_.childLanes)!==0,g0||i){if(n=l0,n!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|o)?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,t1(_,r),H0(n,_,r,-1))}return K3(),n=_5(Error(g(421))),A_(_,e,o,n)}return r.data==="$?"?(e.flags|=128,e.child=_.child,e=on.bind(null,_),r._reactRetry=e,null):(_=l.treeContext,C0=m1(r.nextSibling),A0=e,G=!0,F0=null,_!==null&&(z0[T0++]=J0,z0[T0++]=q0,z0[T0++]=j1,J0=_.id,q0=_.overflow,j1=e),e=O3(e,n.children),e.flags|=4096,e)}function b7(_,e,t){_.lanes|=e;var n=_.alternate;n!==null&&(n.lanes|=e),F5(_.return,e,t)}function e5(_,e,t,n,r){var l=_.memoizedState;l===null?_.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:r}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=r)}function d9(_,e,t){var n=e.pendingProps,r=n.revealOrder,l=n.tail;if(d0(_,e,n.children,t),n=Y.current,n&2)n=n&1|2,e.flags|=128;else{if(_!==null&&_.flags&128)_:for(_=e.child;_!==null;){if(_.tag===13)_.memoizedState!==null&&b7(_,t,e);else if(_.tag===19)b7(_,t,e);else if(_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break _;for(;_.sibling===null;){if(_.return===null||_.return===e)break _;_=_.return}_.sibling.return=_.return,_=_.sibling}n&=1}if(K(Y,n),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)_=t.alternate,_!==null&&r6(_)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),e5(e,!1,r,t,l);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(_=r.alternate,_!==null&&r6(_)===null){e.child=r;break}_=r.sibling,r.sibling=t,t=r,r=_}e5(e,!0,t,null,l);break;case"together":e5(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function O_(_,e){!(e.mode&1)&&_!==null&&(_.alternate=null,e.alternate=null,e.flags|=2)}function n1(_,e,t){if(_!==null&&(e.dependencies=_.dependencies),F1|=e.lanes,!(t&e.childLanes))return null;if(_!==null&&e.child!==_.child)throw Error(g(153));if(e.child!==null){for(_=e.child,t=w1(_,_.pendingProps),e.child=t,t.return=e;_.sibling!==null;)_=_.sibling,t=t.sibling=w1(_,_.pendingProps),t.return=e;t.sibling=null}return e.child}function Yt(_,e,t){switch(e.tag){case 3:c9(e),c2();break;case 5:U8(e);break;case 1:S0(e.type)&&q_(e);break;case 4:z3(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,r=e.memoizedProps.value;K(e6,n._currentValue),n._currentValue=r;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(K(Y,Y.current&1),e.flags|=128,null):t&e.child.childLanes?f9(_,e,t):(K(Y,Y.current&1),_=n1(_,e,t),_!==null?_.sibling:null);K(Y,Y.current&1);break;case 19:if(n=(t&e.childLanes)!==0,_.flags&128){if(n)return d9(_,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),K(Y,Y.current),n)break;return null;case 22:case 23:return e.lanes=0,s9(_,e,t)}return n1(_,e,t)}var p9,G5,h9,m9;p9=function(_,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)_.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};G5=function(){};h9=function(_,e,t,n){var r=_.memoizedProps;if(r!==n){_=e.stateNode,I1(Y0.current);var l=null;switch(t){case"input":r=h5(_,r),n=h5(_,n),l=[];break;case"select":r=Z({},r,{value:void 0}),n=Z({},n,{value:void 0}),l=[];break;case"textarea":r=y5(_,r),n=y5(_,n),l=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(_.onclick=Z_)}w5(t,n);var o;t=null;for(c in r)if(!n.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var i=r[c];for(o in i)i.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(H2.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in n){var u=n[c];if(i=r!=null?r[c]:void 0,n.hasOwnProperty(c)&&u!==i&&(u!=null||i!=null))if(c==="style")if(i){for(o in i)!i.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&i[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(l||(l=[]),l.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,i=i?i.__html:void 0,u!=null&&i!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(H2.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",_),l||i===u||(l=[])):(l=l||[]).push(c,u))}t&&(l=l||[]).push("style",t);var c=l;(e.updateQueue=c)&&(e.flags|=4)}};m9=function(_,e,t,n){t!==n&&(e.flags|=4)};function A2(_,e){if(!G)switch(_.tailMode){case"hidden":e=_.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?_.tail=null:t.sibling=null;break;case"collapsed":t=_.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e||_.tail===null?_.tail=null:_.tail.sibling=null:n.sibling=null}}function a0(_){var e=_.alternate!==null&&_.alternate.child===_.child,t=0,n=0;if(e)for(var r=_.child;r!==null;)t|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=_,r=r.sibling;else for(r=_.child;r!==null;)t|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=_,r=r.sibling;return _.subtreeFlags|=n,_.childLanes=t,e}function Xt(_,e,t){var n=e.pendingProps;switch(E3(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return a0(e),null;case 1:return S0(e.type)&&J_(),a0(e),null;case 3:return n=e.stateNode,d2(),Q(w0),Q(f0),M3(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(_===null||_.child===null)&&(E_(e)?e.flags|=4:_===null||_.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,F0!==null&&(e3(F0),F0=null))),G5(_,e),a0(e),null;case 5:T3(e);var r=I1(b2.current);if(t=e.type,_!==null&&e.stateNode!=null)h9(_,e,t,n,r),_.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(g(166));return a0(e),null}if(_=I1(Y0.current),E_(e)){n=e.stateNode,t=e.type;var l=e.memoizedProps;switch(n[W0]=e,n[J2]=l,_=(e.mode&1)!==0,t){case"dialog":W("cancel",n),W("close",n);break;case"iframe":case"object":case"embed":W("load",n);break;case"video":case"audio":for(r=0;r<T2.length;r++)W(T2[r],n);break;case"source":W("error",n);break;case"img":case"image":case"link":W("error",n),W("load",n);break;case"details":W("toggle",n);break;case"input":u7(n,l),W("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},W("invalid",n);break;case"textarea":a7(n,l),W("invalid",n)}w5(t,l),r=null;for(var o in l)if(l.hasOwnProperty(o)){var i=l[o];o==="children"?typeof i=="string"?n.textContent!==i&&(l.suppressHydrationWarning!==!0&&k_(n.textContent,i,_),r=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&k_(n.textContent,i,_),r=["children",""+i]):H2.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&W("scroll",n)}switch(t){case"input":p_(n),s7(n,l,!0);break;case"textarea":p_(n),c7(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Z_)}n=r,e.updateQueue=n,n!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,_==="http://www.w3.org/1999/xhtml"&&(_=V4(t)),_==="http://www.w3.org/1999/xhtml"?t==="script"?(_=o.createElement("div"),_.innerHTML="<script><\/script>",_=_.removeChild(_.firstChild)):typeof n.is=="string"?_=o.createElement(t,{is:n.is}):(_=o.createElement(t),t==="select"&&(o=_,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):_=o.createElementNS(_,t),_[W0]=e,_[J2]=n,p9(_,e,!1,!1),e.stateNode=_;_:{switch(o=S5(t,n),t){case"dialog":W("cancel",_),W("close",_),r=n;break;case"iframe":case"object":case"embed":W("load",_),r=n;break;case"video":case"audio":for(r=0;r<T2.length;r++)W(T2[r],_);r=n;break;case"source":W("error",_),r=n;break;case"img":case"image":case"link":W("error",_),W("load",_),r=n;break;case"details":W("toggle",_),r=n;break;case"input":u7(_,n),r=h5(_,n),W("invalid",_);break;case"option":r=n;break;case"select":_._wrapperState={wasMultiple:!!n.multiple},r=Z({},n,{value:void 0}),W("invalid",_);break;case"textarea":a7(_,n),r=y5(_,n),W("invalid",_);break;default:r=n}w5(t,r),i=r;for(l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="style"?Q4(_,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&K4(_,u)):l==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&$2(_,u):typeof u=="number"&&$2(_,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(H2.hasOwnProperty(l)?u!=null&&l==="onScroll"&&W("scroll",_):u!=null&&u3(_,l,u,o))}switch(t){case"input":p_(_),s7(_,n,!1);break;case"textarea":p_(_),c7(_);break;case"option":n.value!=null&&_.setAttribute("value",""+S1(n.value));break;case"select":_.multiple=!!n.multiple,l=n.value,l!=null?n2(_,!!n.multiple,l,!1):n.defaultValue!=null&&n2(_,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(_.onclick=Z_)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break _;case"img":n=!0;break _;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return a0(e),null;case 6:if(_&&e.stateNode!=null)m9(_,e,_.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(g(166));if(t=I1(b2.current),I1(Y0.current),E_(e)){if(n=e.stateNode,t=e.memoizedProps,n[W0]=e,(l=n.nodeValue!==t)&&(_=A0,_!==null))switch(_.tag){case 3:k_(n.nodeValue,t,(_.mode&1)!==0);break;case 5:_.memoizedProps.suppressHydrationWarning!==!0&&k_(n.nodeValue,t,(_.mode&1)!==0)}l&&(e.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[W0]=e,e.stateNode=n}return a0(e),null;case 13:if(Q(Y),n=e.memoizedState,_===null||_.memoizedState!==null&&_.memoizedState.dehydrated!==null){if(G&&C0!==null&&e.mode&1&&!(e.flags&128))I8(),c2(),e.flags|=98560,l=!1;else if(l=E_(e),n!==null&&n.dehydrated!==null){if(_===null){if(!l)throw Error(g(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));l[W0]=e}else c2(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;a0(e),l=!1}else F0!==null&&(e3(F0),F0=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(n=n!==null,n!==(_!==null&&_.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(_===null||Y.current&1?t0===0&&(t0=3):K3())),e.updateQueue!==null&&(e.flags|=4),a0(e),null);case 4:return d2(),G5(_,e),_===null&&X2(e.stateNode.containerInfo),a0(e),null;case 10:return N3(e.type._context),a0(e),null;case 17:return S0(e.type)&&J_(),a0(e),null;case 19:if(Q(Y),l=e.memoizedState,l===null)return a0(e),null;if(n=(e.flags&128)!==0,o=l.rendering,o===null)if(n)A2(l,!1);else{if(t0!==0||_!==null&&_.flags&128)for(_=e.child;_!==null;){if(o=r6(_),o!==null){for(e.flags|=128,A2(l,!1),n=o.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=t,t=e.child;t!==null;)l=t,_=n,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=_,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,_=o.dependencies,l.dependencies=_===null?null:{lanes:_.lanes,firstContext:_.firstContext}),t=t.sibling;return K(Y,Y.current&1|2),e.child}_=_.sibling}l.tail!==null&&q()>h2&&(e.flags|=128,n=!0,A2(l,!1),e.lanes=4194304)}else{if(!n)if(_=r6(o),_!==null){if(e.flags|=128,n=!0,t=_.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),A2(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!G)return a0(e),null}else 2*q()-l.renderingStartTime>h2&&t!==1073741824&&(e.flags|=128,n=!0,A2(l,!1),e.lanes=4194304);l.isBackwards?(o.sibling=e.child,e.child=o):(t=l.last,t!==null?t.sibling=o:e.child=o,l.last=o)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=q(),e.sibling=null,t=Y.current,K(Y,n?t&1|2:t&1),e):(a0(e),null);case 22:case 23:return V3(),n=e.memoizedState!==null,_!==null&&_.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?E0&1073741824&&(a0(e),e.subtreeFlags&6&&(e.flags|=8192)):a0(e),null;case 24:return null;case 25:return null}throw Error(g(156,e.tag))}function Zt(_,e){switch(E3(e),e.tag){case 1:return S0(e.type)&&J_(),_=e.flags,_&65536?(e.flags=_&-65537|128,e):null;case 3:return d2(),Q(w0),Q(f0),M3(),_=e.flags,_&65536&&!(_&128)?(e.flags=_&-65537|128,e):null;case 5:return T3(e),null;case 13:if(Q(Y),_=e.memoizedState,_!==null&&_.dehydrated!==null){if(e.alternate===null)throw Error(g(340));c2()}return _=e.flags,_&65536?(e.flags=_&-65537|128,e):null;case 19:return Q(Y),null;case 4:return d2(),null;case 10:return N3(e.type._context),null;case 22:case 23:return V3(),null;case 24:return null;default:return null}}var x_=!1,c0=!1,Jt=typeof WeakSet=="function"?WeakSet:Set,M=null;function e2(_,e){var t=_.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){J(_,e,n)}else t.current=null}function Y5(_,e,t){try{t()}catch(n){J(_,e,n)}}var _4=!1;function qt(_,e){if(T5=G_,_=w8(),S3(_)){if("selectionStart"in _)var t={start:_.selectionStart,end:_.selectionEnd};else _:{t=(t=_.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var r=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break _}var o=0,i=-1,u=-1,c=0,m=0,h=_,p=null;e:for(;;){for(var y;h!==t||r!==0&&h.nodeType!==3||(i=o+r),h!==l||n!==0&&h.nodeType!==3||(u=o+n),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===_)break e;if(p===t&&++c===r&&(i=o),p===l&&++m===n&&(u=o),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}t=i===-1||u===-1?null:{start:i,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(M5={focusedElem:_,selectionRange:t},G_=!1,M=e;M!==null;)if(e=M,_=e.child,(e.subtreeFlags&1028)!==0&&_!==null)_.return=e,M=_;else for(;M!==null;){e=M;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,O=S.memoizedState,a=e.stateNode,s=a.getSnapshotBeforeUpdate(e.elementType===e.type?A:j0(e.type,A),O);a.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){J(e,e.return,v)}if(_=e.sibling,_!==null){_.return=e.return,M=_;break}M=e.return}return S=_4,_4=!1,S}function O2(_,e,t){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&_)===_){var l=r.destroy;r.destroy=void 0,l!==void 0&&Y5(e,t,l)}r=r.next}while(r!==n)}}function k6(_,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&_)===_){var n=t.create;t.destroy=n()}t=t.next}while(t!==e)}}function X5(_){var e=_.ref;if(e!==null){var t=_.stateNode;switch(_.tag){case 5:_=t;break;default:_=t}typeof e=="function"?e(_):e.current=_}}function v9(_){var e=_.alternate;e!==null&&(_.alternate=null,v9(e)),_.child=null,_.deletions=null,_.sibling=null,_.tag===5&&(e=_.stateNode,e!==null&&(delete e[W0],delete e[J2],delete e[R5],delete e[Dt],delete e[Rt])),_.stateNode=null,_.return=null,_.dependencies=null,_.memoizedProps=null,_.memoizedState=null,_.pendingProps=null,_.stateNode=null,_.updateQueue=null}function y9(_){return _.tag===5||_.tag===3||_.tag===4}function e4(_){_:for(;;){for(;_.sibling===null;){if(_.return===null||y9(_.return))return null;_=_.return}for(_.sibling.return=_.return,_=_.sibling;_.tag!==5&&_.tag!==6&&_.tag!==18;){if(_.flags&2||_.child===null||_.tag===4)continue _;_.child.return=_,_=_.child}if(!(_.flags&2))return _.stateNode}}function Z5(_,e,t){var n=_.tag;if(n===5||n===6)_=_.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(_,e):t.insertBefore(_,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(_,t)):(e=t,e.appendChild(_)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Z_));else if(n!==4&&(_=_.child,_!==null))for(Z5(_,e,t),_=_.sibling;_!==null;)Z5(_,e,t),_=_.sibling}function J5(_,e,t){var n=_.tag;if(n===5||n===6)_=_.stateNode,e?t.insertBefore(_,e):t.appendChild(_);else if(n!==4&&(_=_.child,_!==null))for(J5(_,e,t),_=_.sibling;_!==null;)J5(_,e,t),_=_.sibling}var o0=null,O0=!1;function o1(_,e,t){for(t=t.child;t!==null;)g9(_,e,t),t=t.sibling}function g9(_,e,t){if(G0&&typeof G0.onCommitFiberUnmount=="function")try{G0.onCommitFiberUnmount(p6,t)}catch{}switch(t.tag){case 5:c0||e2(t,e);case 6:var n=o0,r=O0;o0=null,o1(_,e,t),o0=n,O0=r,o0!==null&&(O0?(_=o0,t=t.stateNode,_.nodeType===8?_.parentNode.removeChild(t):_.removeChild(t)):o0.removeChild(t.stateNode));break;case 18:o0!==null&&(O0?(_=o0,t=t.stateNode,_.nodeType===8?Y6(_.parentNode,t):_.nodeType===1&&Y6(_,t),Q2(_)):Y6(o0,t.stateNode));break;case 4:n=o0,r=O0,o0=t.stateNode.containerInfo,O0=!0,o1(_,e,t),o0=n,O0=r;break;case 0:case 11:case 14:case 15:if(!c0&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var l=r,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Y5(t,e,o),r=r.next}while(r!==n)}o1(_,e,t);break;case 1:if(!c0&&(e2(t,e),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(i){J(t,e,i)}o1(_,e,t);break;case 21:o1(_,e,t);break;case 22:t.mode&1?(c0=(n=c0)||t.memoizedState!==null,o1(_,e,t),c0=n):o1(_,e,t);break;default:o1(_,e,t)}}function t4(_){var e=_.updateQueue;if(e!==null){_.updateQueue=null;var t=_.stateNode;t===null&&(t=_.stateNode=new Jt),e.forEach(function(n){var r=un.bind(null,_,n);t.has(n)||(t.add(n),n.then(r,r))})}}function B0(_,e){var t=e.deletions;if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];try{var l=_,o=e,i=o;_:for(;i!==null;){switch(i.tag){case 5:o0=i.stateNode,O0=!1;break _;case 3:o0=i.stateNode.containerInfo,O0=!0;break _;case 4:o0=i.stateNode.containerInfo,O0=!0;break _}i=i.return}if(o0===null)throw Error(g(160));g9(l,o,r),o0=null,O0=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(c){J(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)w9(e,_),e=e.sibling}function w9(_,e){var t=_.alternate,n=_.flags;switch(_.tag){case 0:case 11:case 14:case 15:if(B0(e,_),V0(_),n&4){try{O2(3,_,_.return),k6(3,_)}catch(A){J(_,_.return,A)}try{O2(5,_,_.return)}catch(A){J(_,_.return,A)}}break;case 1:B0(e,_),V0(_),n&512&&t!==null&&e2(t,t.return);break;case 5:if(B0(e,_),V0(_),n&512&&t!==null&&e2(t,t.return),_.flags&32){var r=_.stateNode;try{$2(r,"")}catch(A){J(_,_.return,A)}}if(n&4&&(r=_.stateNode,r!=null)){var l=_.memoizedProps,o=t!==null?t.memoizedProps:l,i=_.type,u=_.updateQueue;if(_.updateQueue=null,u!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&H4(r,l),S5(i,o);var c=S5(i,l);for(o=0;o<u.length;o+=2){var m=u[o],h=u[o+1];m==="style"?Q4(r,h):m==="dangerouslySetInnerHTML"?K4(r,h):m==="children"?$2(r,h):u3(r,m,h,c)}switch(i){case"input":m5(r,l);break;case"textarea":$4(r,l);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?n2(r,!!l.multiple,y,!1):p!==!!l.multiple&&(l.defaultValue!=null?n2(r,!!l.multiple,l.defaultValue,!0):n2(r,!!l.multiple,l.multiple?[]:"",!1))}r[J2]=l}catch(A){J(_,_.return,A)}}break;case 6:if(B0(e,_),V0(_),n&4){if(_.stateNode===null)throw Error(g(162));r=_.stateNode,l=_.memoizedProps;try{r.nodeValue=l}catch(A){J(_,_.return,A)}}break;case 3:if(B0(e,_),V0(_),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Q2(e.containerInfo)}catch(A){J(_,_.return,A)}break;case 4:B0(e,_),V0(_);break;case 13:B0(e,_),V0(_),r=_.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(H3=q())),n&4&&t4(_);break;case 22:if(m=t!==null&&t.memoizedState!==null,_.mode&1?(c0=(c=c0)||m,B0(e,_),c0=c):B0(e,_),V0(_),n&8192){if(c=_.memoizedState!==null,(_.stateNode.isHidden=c)&&!m&&_.mode&1)for(M=_,m=_.child;m!==null;){for(h=M=m;M!==null;){switch(p=M,y=p.child,p.tag){case 0:case 11:case 14:case 15:O2(4,p,p.return);break;case 1:e2(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){n=p,t=p.return;try{e=n,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(A){J(n,t,A)}}break;case 5:e2(p,p.return);break;case 22:if(p.memoizedState!==null){r4(h);continue}}y!==null?(y.return=p,M=y):r4(h)}m=m.sibling}_:for(m=null,h=_;;){if(h.tag===5){if(m===null){m=h;try{r=h.stateNode,c?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,i.style.display=W4("display",o))}catch(A){J(_,_.return,A)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(A){J(_,_.return,A)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===_)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===_)break _;for(;h.sibling===null;){if(h.return===null||h.return===_)break _;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:B0(e,_),V0(_),n&4&&t4(_);break;case 21:break;default:B0(e,_),V0(_)}}function V0(_){var e=_.flags;if(e&2){try{_:{for(var t=_.return;t!==null;){if(y9(t)){var n=t;break _}t=t.return}throw Error(g(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&($2(r,""),n.flags&=-33);var l=e4(_);J5(_,l,r);break;case 3:case 4:var o=n.stateNode.containerInfo,i=e4(_);Z5(_,i,o);break;default:throw Error(g(161))}}catch(u){J(_,_.return,u)}_.flags&=-3}e&4096&&(_.flags&=-4097)}function bt(_,e,t){M=_,S9(_)}function S9(_,e,t){for(var n=(_.mode&1)!==0;M!==null;){var r=M,l=r.child;if(r.tag===22&&n){var o=r.memoizedState!==null||x_;if(!o){var i=r.alternate,u=i!==null&&i.memoizedState!==null||c0;i=x_;var c=c0;if(x_=o,(c0=u)&&!c)for(M=r;M!==null;)o=M,u=o.child,o.tag===22&&o.memoizedState!==null?l4(r):u!==null?(u.return=o,M=u):l4(r);for(;l!==null;)M=l,S9(l),l=l.sibling;M=r,x_=i,c0=c}n4(_)}else r.subtreeFlags&8772&&l!==null?(l.return=r,M=l):n4(_)}}function n4(_){for(;M!==null;){var e=M;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:c0||k6(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!c0)if(t===null)n.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:j0(e.type,t.memoizedProps);n.componentDidUpdate(r,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&U7(e,l,n);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}U7(e,o,t)}break;case 5:var i=e.stateNode;if(t===null&&e.flags&4){t=i;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Q2(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}c0||e.flags&512&&X5(e)}catch(p){J(e,e.return,p)}}if(e===_){M=null;break}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}}function r4(_){for(;M!==null;){var e=M;if(e===_){M=null;break}var t=e.sibling;if(t!==null){t.return=e.return,M=t;break}M=e.return}}function l4(_){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{k6(4,e)}catch(u){J(e,t,u)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var r=e.return;try{n.componentDidMount()}catch(u){J(e,r,u)}}var l=e.return;try{X5(e)}catch(u){J(e,l,u)}break;case 5:var o=e.return;try{X5(e)}catch(u){J(e,o,u)}}}catch(u){J(e,e.return,u)}if(e===_){M=null;break}var i=e.sibling;if(i!==null){i.return=e.return,M=i;break}M=e.return}}var _n=Math.ceil,i6=l1.ReactCurrentDispatcher,F3=l1.ReactCurrentOwner,I0=l1.ReactCurrentBatchConfig,H=0,l0=null,b=null,i0=0,E0=0,t2=A1(0),t0=0,n_=null,F1=0,E6=0,U3=0,F2=null,v0=null,H3=0,h2=1/0,X0=null,u6=!1,q5=null,y1=null,N_=!1,f1=null,s6=0,U2=0,b5=null,F_=-1,U_=0;function p0(){return H&6?q():F_!==-1?F_:F_=q()}function g1(_){return _.mode&1?H&2&&i0!==0?i0&-i0:jt.transition!==null?(U_===0&&(U_=r8()),U_):(_=V,_!==0||(_=window.event,_=_===void 0?16:c8(_.type)),_):1}function H0(_,e,t,n){if(50<U2)throw U2=0,b5=null,Error(g(185));o_(_,t,n),(!(H&2)||_!==l0)&&(_===l0&&(!(H&2)&&(E6|=t),t0===4&&a1(_,i0)),k0(_,n),t===1&&H===0&&!(e.mode&1)&&(h2=q()+500,g6&&x1()))}function k0(_,e){var t=_.callbackNode;je(_,e);var n=Q_(_,_===l0?i0:0);if(n===0)t!==null&&p7(t),_.callbackNode=null,_.callbackPriority=0;else if(e=n&-n,_.callbackPriority!==e){if(t!=null&&p7(t),e===1)_.tag===0?Bt(o4.bind(null,_)):z8(o4.bind(null,_)),Mt(function(){!(H&6)&&x1()}),t=null;else{switch(l8(n)){case 1:t=d3;break;case 4:t=t8;break;case 16:t=W_;break;case 536870912:t=n8;break;default:t=W_}t=L9(t,k9.bind(null,_))}_.callbackPriority=e,_.callbackNode=t}}function k9(_,e){if(F_=-1,U_=0,H&6)throw Error(g(327));var t=_.callbackNode;if(u2()&&_.callbackNode!==t)return null;var n=Q_(_,_===l0?i0:0);if(n===0)return null;if(n&30||n&_.expiredLanes||e)e=a6(_,n);else{e=n;var r=H;H|=2;var l=C9();(l0!==_||i0!==e)&&(X0=null,h2=q()+500,D1(_,e));do try{nn();break}catch(i){E9(_,i)}while(!0);x3(),i6.current=l,H=r,b!==null?e=0:(l0=null,i0=0,e=t0)}if(e!==0){if(e===2&&(r=x5(_),r!==0&&(n=r,e=_3(_,r))),e===1)throw t=n_,D1(_,0),a1(_,n),k0(_,q()),t;if(e===6)a1(_,n);else{if(r=_.current.alternate,!(n&30)&&!en(r)&&(e=a6(_,n),e===2&&(l=x5(_),l!==0&&(n=l,e=_3(_,l))),e===1))throw t=n_,D1(_,0),a1(_,n),k0(_,q()),t;switch(_.finishedWork=r,_.finishedLanes=n,e){case 0:case 1:throw Error(g(345));case 2:z1(_,v0,X0);break;case 3:if(a1(_,n),(n&130023424)===n&&(e=H3+500-q(),10<e)){if(Q_(_,0)!==0)break;if(r=_.suspendedLanes,(r&n)!==n){p0(),_.pingedLanes|=_.suspendedLanes&r;break}_.timeoutHandle=D5(z1.bind(null,_,v0,X0),e);break}z1(_,v0,X0);break;case 4:if(a1(_,n),(n&4194240)===n)break;for(e=_.eventTimes,r=-1;0<n;){var o=31-U0(n);l=1<<o,o=e[o],o>r&&(r=o),n&=~l}if(n=r,n=q()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*_n(n/1960))-n,10<n){_.timeoutHandle=D5(z1.bind(null,_,v0,X0),n);break}z1(_,v0,X0);break;case 5:z1(_,v0,X0);break;default:throw Error(g(329))}}}return k0(_,q()),_.callbackNode===t?k9.bind(null,_):null}function _3(_,e){var t=F2;return _.current.memoizedState.isDehydrated&&(D1(_,e).flags|=256),_=a6(_,e),_!==2&&(e=v0,v0=t,e!==null&&e3(e)),_}function e3(_){v0===null?v0=_:v0.push.apply(v0,_)}function en(_){for(var e=_;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var r=t[n],l=r.getSnapshot;r=r.value;try{if(!$0(l(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===_)break;for(;e.sibling===null;){if(e.return===null||e.return===_)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function a1(_,e){for(e&=~U3,e&=~E6,_.suspendedLanes|=e,_.pingedLanes&=~e,_=_.expirationTimes;0<e;){var t=31-U0(e),n=1<<t;_[t]=-1,e&=~n}}function o4(_){if(H&6)throw Error(g(327));u2();var e=Q_(_,0);if(!(e&1))return k0(_,q()),null;var t=a6(_,e);if(_.tag!==0&&t===2){var n=x5(_);n!==0&&(e=n,t=_3(_,n))}if(t===1)throw t=n_,D1(_,0),a1(_,e),k0(_,q()),t;if(t===6)throw Error(g(345));return _.finishedWork=_.current.alternate,_.finishedLanes=e,z1(_,v0,X0),k0(_,q()),null}function $3(_,e){var t=H;H|=1;try{return _(e)}finally{H=t,H===0&&(h2=q()+500,g6&&x1())}}function U1(_){f1!==null&&f1.tag===0&&!(H&6)&&u2();var e=H;H|=1;var t=I0.transition,n=V;try{if(I0.transition=null,V=1,_)return _()}finally{V=n,I0.transition=t,H=e,!(H&6)&&x1()}}function V3(){E0=t2.current,Q(t2)}function D1(_,e){_.finishedWork=null,_.finishedLanes=0;var t=_.timeoutHandle;if(t!==-1&&(_.timeoutHandle=-1,Tt(t)),b!==null)for(t=b.return;t!==null;){var n=t;switch(E3(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&J_();break;case 3:d2(),Q(w0),Q(f0),M3();break;case 5:T3(n);break;case 4:d2();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:N3(n.type._context);break;case 22:case 23:V3()}t=t.return}if(l0=_,b=_=w1(_.current,null),i0=E0=e,t0=0,n_=null,U3=E6=F1=0,v0=F2=null,M1!==null){for(e=0;e<M1.length;e++)if(t=M1[e],n=t.interleaved,n!==null){t.interleaved=null;var r=n.next,l=t.pending;if(l!==null){var o=l.next;l.next=r,n.next=o}t.pending=n}M1=null}return _}function E9(_,e){do{var t=b;try{if(x3(),B_.current=o6,l6){for(var n=X.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}l6=!1}if(O1=0,r0=e0=X=null,j2=!1,__=0,F3.current=null,t===null||t.return===null){t0=1,n_=e,b=null;break}_:{var l=_,o=t.return,i=t,u=e;if(e=i0,i.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=i,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=G7(o);if(y!==null){y.flags&=-257,Y7(y,o,i,l,e),y.mode&1&&Q7(l,c,e),e=y,u=c;var S=e.updateQueue;if(S===null){var A=new Set;A.add(u),e.updateQueue=A}else S.add(u);break _}else{if(!(e&1)){Q7(l,c,e),K3();break _}u=Error(g(426))}}else if(G&&i.mode&1){var O=G7(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Y7(O,o,i,l,e),C3(p2(u,i));break _}}l=u=p2(u,i),t0!==4&&(t0=2),F2===null?F2=[l]:F2.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var a=o9(l,u,e);F7(l,a);break _;case 1:i=u;var s=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(y1===null||!y1.has(f)))){l.flags|=65536,e&=-e,l.lanes|=e;var v=i9(l,i,e);F7(l,v);break _}}l=l.return}while(l!==null)}x9(t)}catch(x){e=x,b===t&&t!==null&&(b=t=t.return);continue}break}while(!0)}function C9(){var _=i6.current;return i6.current=o6,_===null?o6:_}function K3(){(t0===0||t0===3||t0===2)&&(t0=4),l0===null||!(F1&268435455)&&!(E6&268435455)||a1(l0,i0)}function a6(_,e){var t=H;H|=2;var n=C9();(l0!==_||i0!==e)&&(X0=null,D1(_,e));do try{tn();break}catch(r){E9(_,r)}while(!0);if(x3(),H=t,i6.current=n,b!==null)throw Error(g(261));return l0=null,i0=0,t0}function tn(){for(;b!==null;)A9(b)}function nn(){for(;b!==null&&!Pe();)A9(b)}function A9(_){var e=P9(_.alternate,_,E0);_.memoizedProps=_.pendingProps,e===null?x9(_):b=e,F3.current=null}function x9(_){var e=_;do{var t=e.alternate;if(_=e.return,e.flags&32768){if(t=Zt(t,e),t!==null){t.flags&=32767,b=t;return}if(_!==null)_.flags|=32768,_.subtreeFlags=0,_.deletions=null;else{t0=6,b=null;return}}else if(t=Xt(t,e,E0),t!==null){b=t;return}if(e=e.sibling,e!==null){b=e;return}b=e=_}while(e!==null);t0===0&&(t0=5)}function z1(_,e,t){var n=V,r=I0.transition;try{I0.transition=null,V=1,rn(_,e,t,n)}finally{I0.transition=r,V=n}return null}function rn(_,e,t,n){do u2();while(f1!==null);if(H&6)throw Error(g(327));t=_.finishedWork;var r=_.finishedLanes;if(t===null)return null;if(_.finishedWork=null,_.finishedLanes=0,t===_.current)throw Error(g(177));_.callbackNode=null,_.callbackPriority=0;var l=t.lanes|t.childLanes;if(Oe(_,l),_===l0&&(b=l0=null,i0=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||N_||(N_=!0,L9(W_,function(){return u2(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=I0.transition,I0.transition=null;var o=V;V=1;var i=H;H|=4,F3.current=null,qt(_,t),w9(t,_),Ct(M5),G_=!!T5,M5=T5=null,_.current=t,bt(t),Le(),H=i,V=o,I0.transition=l}else _.current=t;if(N_&&(N_=!1,f1=_,s6=r),l=_.pendingLanes,l===0&&(y1=null),Me(t.stateNode),k0(_,q()),e!==null)for(n=_.onRecoverableError,t=0;t<e.length;t++)r=e[t],n(r.value,{componentStack:r.stack,digest:r.digest});if(u6)throw u6=!1,_=q5,q5=null,_;return s6&1&&_.tag!==0&&u2(),l=_.pendingLanes,l&1?_===b5?U2++:(U2=0,b5=_):U2=0,x1(),null}function u2(){if(f1!==null){var _=l8(s6),e=I0.transition,t=V;try{if(I0.transition=null,V=16>_?16:_,f1===null)var n=!1;else{if(_=f1,f1=null,s6=0,H&6)throw Error(g(331));var r=H;for(H|=4,M=_.current;M!==null;){var l=M,o=l.child;if(M.flags&16){var i=l.deletions;if(i!==null){for(var u=0;u<i.length;u++){var c=i[u];for(M=c;M!==null;){var m=M;switch(m.tag){case 0:case 11:case 15:O2(8,m,l)}var h=m.child;if(h!==null)h.return=m,M=h;else for(;M!==null;){m=M;var p=m.sibling,y=m.return;if(v9(m),m===c){M=null;break}if(p!==null){p.return=y,M=p;break}M=y}}}var S=l.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var O=A.sibling;A.sibling=null,A=O}while(A!==null)}}M=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,M=o;else _:for(;M!==null;){if(l=M,l.flags&2048)switch(l.tag){case 0:case 11:case 15:O2(9,l,l.return)}var a=l.sibling;if(a!==null){a.return=l.return,M=a;break _}M=l.return}}var s=_.current;for(M=s;M!==null;){o=M;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,M=f;else _:for(o=s;M!==null;){if(i=M,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:k6(9,i)}}catch(x){J(i,i.return,x)}if(i===o){M=null;break _}var v=i.sibling;if(v!==null){v.return=i.return,M=v;break _}M=i.return}}if(H=r,x1(),G0&&typeof G0.onPostCommitFiberRoot=="function")try{G0.onPostCommitFiberRoot(p6,_)}catch{}n=!0}return n}finally{V=t,I0.transition=e}}return!1}function i4(_,e,t){e=p2(t,e),e=o9(_,e,1),_=v1(_,e,1),e=p0(),_!==null&&(o_(_,1,e),k0(_,e))}function J(_,e,t){if(_.tag===3)i4(_,_,t);else for(;e!==null;){if(e.tag===3){i4(e,_,t);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(y1===null||!y1.has(n))){_=p2(t,_),_=i9(e,_,1),e=v1(e,_,1),_=p0(),e!==null&&(o_(e,1,_),k0(e,_));break}}e=e.return}}function ln(_,e,t){var n=_.pingCache;n!==null&&n.delete(e),e=p0(),_.pingedLanes|=_.suspendedLanes&t,l0===_&&(i0&t)===t&&(t0===4||t0===3&&(i0&130023424)===i0&&500>q()-H3?D1(_,0):U3|=t),k0(_,e)}function N9(_,e){e===0&&(_.mode&1?(e=v_,v_<<=1,!(v_&130023424)&&(v_=4194304)):e=1);var t=p0();_=t1(_,e),_!==null&&(o_(_,e,t),k0(_,t))}function on(_){var e=_.memoizedState,t=0;e!==null&&(t=e.retryLane),N9(_,t)}function un(_,e){var t=0;switch(_.tag){case 13:var n=_.stateNode,r=_.memoizedState;r!==null&&(t=r.retryLane);break;case 19:n=_.stateNode;break;default:throw Error(g(314))}n!==null&&n.delete(e),N9(_,t)}var P9;P9=function(_,e,t){if(_!==null)if(_.memoizedProps!==e.pendingProps||w0.current)g0=!0;else{if(!(_.lanes&t)&&!(e.flags&128))return g0=!1,Yt(_,e,t);g0=!!(_.flags&131072)}else g0=!1,G&&e.flags&1048576&&T8(e,_6,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;O_(_,e),_=e.pendingProps;var r=a2(e,f0.current);i2(e,t),r=D3(null,e,n,_,r,t);var l=R3();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,S0(n)?(l=!0,q_(e)):l=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,L3(e),r.updater=w6,e.stateNode=r,r._reactInternals=e,H5(e,n,_,t),e=K5(null,e,n,!0,l,t)):(e.tag=0,G&&l&&k3(e),d0(null,e,r,t),e=e.child),e;case 16:n=e.elementType;_:{switch(O_(_,e),_=e.pendingProps,r=n._init,n=r(n._payload),e.type=n,r=e.tag=an(n),_=j0(n,_),r){case 0:e=V5(null,e,n,_,t);break _;case 1:e=J7(null,e,n,_,t);break _;case 11:e=X7(null,e,n,_,t);break _;case 14:e=Z7(null,e,n,j0(n.type,_),t);break _}throw Error(g(306,n,""))}return e;case 0:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:j0(n,r),V5(_,e,n,r,t);case 1:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:j0(n,r),J7(_,e,n,r,t);case 3:_:{if(c9(e),_===null)throw Error(g(387));n=e.pendingProps,l=e.memoizedState,r=l.element,R8(_,e),n6(e,n,null,t);var o=e.memoizedState;if(n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){r=p2(Error(g(423)),e),e=q7(_,e,n,t,r);break _}else if(n!==r){r=p2(Error(g(424)),e),e=q7(_,e,n,t,r);break _}else for(C0=m1(e.stateNode.containerInfo.firstChild),A0=e,G=!0,F0=null,t=F8(e,null,n,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(c2(),n===r){e=n1(_,e,t);break _}d0(_,e,n,t)}e=e.child}return e;case 5:return U8(e),_===null&&O5(e),n=e.type,r=e.pendingProps,l=_!==null?_.memoizedProps:null,o=r.children,I5(n,r)?o=null:l!==null&&I5(n,l)&&(e.flags|=32),a9(_,e),d0(_,e,o,t),e.child;case 6:return _===null&&O5(e),null;case 13:return f9(_,e,t);case 4:return z3(e,e.stateNode.containerInfo),n=e.pendingProps,_===null?e.child=f2(e,null,n,t):d0(_,e,n,t),e.child;case 11:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:j0(n,r),X7(_,e,n,r,t);case 7:return d0(_,e,e.pendingProps,t),e.child;case 8:return d0(_,e,e.pendingProps.children,t),e.child;case 12:return d0(_,e,e.pendingProps.children,t),e.child;case 10:_:{if(n=e.type._context,r=e.pendingProps,l=e.memoizedProps,o=r.value,K(e6,n._currentValue),n._currentValue=o,l!==null)if($0(l.value,o)){if(l.children===r.children&&!w0.current){e=n1(_,e,t);break _}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){o=l.child;for(var u=i.firstContext;u!==null;){if(u.context===n){if(l.tag===1){u=b0(-1,t&-t),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),F5(l.return,t,e),i.lanes|=t;break}u=u.next}}else if(l.tag===10)o=l.type===e.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(g(341));o.lanes|=t,i=o.alternate,i!==null&&(i.lanes|=t),F5(o,t,e),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}d0(_,e,r.children,t),e=e.child}return e;case 9:return r=e.type,n=e.pendingProps.children,i2(e,t),r=D0(r),n=n(r),e.flags|=1,d0(_,e,n,t),e.child;case 14:return n=e.type,r=j0(n,e.pendingProps),r=j0(n.type,r),Z7(_,e,n,r,t);case 15:return u9(_,e,e.type,e.pendingProps,t);case 17:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:j0(n,r),O_(_,e),e.tag=1,S0(n)?(_=!0,q_(e)):_=!1,i2(e,t),j8(e,n,r),H5(e,n,r,t),K5(null,e,n,!0,_,t);case 19:return d9(_,e,t);case 22:return s9(_,e,t)}throw Error(g(156,e.tag))};function L9(_,e){return e8(_,e)}function sn(_,e,t,n){this.tag=_,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function M0(_,e,t,n){return new sn(_,e,t,n)}function W3(_){return _=_.prototype,!(!_||!_.isReactComponent)}function an(_){if(typeof _=="function")return W3(_)?1:0;if(_!=null){if(_=_.$$typeof,_===a3)return 11;if(_===c3)return 14}return 2}function w1(_,e){var t=_.alternate;return t===null?(t=M0(_.tag,e,_.key,_.mode),t.elementType=_.elementType,t.type=_.type,t.stateNode=_.stateNode,t.alternate=_,_.alternate=t):(t.pendingProps=e,t.type=_.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=_.flags&14680064,t.childLanes=_.childLanes,t.lanes=_.lanes,t.child=_.child,t.memoizedProps=_.memoizedProps,t.memoizedState=_.memoizedState,t.updateQueue=_.updateQueue,e=_.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=_.sibling,t.index=_.index,t.ref=_.ref,t}function H_(_,e,t,n,r,l){var o=2;if(n=_,typeof _=="function")W3(_)&&(o=1);else if(typeof _=="string")o=5;else _:switch(_){case Q1:return R1(t.children,r,l,e);case s3:o=8,r|=8;break;case c5:return _=M0(12,t,e,r|2),_.elementType=c5,_.lanes=l,_;case f5:return _=M0(13,t,e,r),_.elementType=f5,_.lanes=l,_;case d5:return _=M0(19,t,e,r),_.elementType=d5,_.lanes=l,_;case O4:return C6(t,r,l,e);default:if(typeof _=="object"&&_!==null)switch(_.$$typeof){case B4:o=10;break _;case j4:o=9;break _;case a3:o=11;break _;case c3:o=14;break _;case i1:o=16,n=null;break _}throw Error(g(130,_==null?_:typeof _,""))}return e=M0(o,t,e,r),e.elementType=_,e.type=n,e.lanes=l,e}function R1(_,e,t,n){return _=M0(7,_,n,e),_.lanes=t,_}function C6(_,e,t,n){return _=M0(22,_,n,e),_.elementType=O4,_.lanes=t,_.stateNode={isHidden:!1},_}function t5(_,e,t){return _=M0(6,_,null,e),_.lanes=t,_}function n5(_,e,t){return e=M0(4,_.children!==null?_.children:[],_.key,e),e.lanes=t,e.stateNode={containerInfo:_.containerInfo,pendingChildren:null,implementation:_.implementation},e}function cn(_,e,t,n,r){this.tag=e,this.containerInfo=_,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=j6(0),this.expirationTimes=j6(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=j6(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Q3(_,e,t,n,r,l,o,i,u){return _=new cn(_,e,t,i,u),e===1?(e=1,l===!0&&(e|=8)):e=0,l=M0(3,null,null,e),_.current=l,l.stateNode=_,l.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},L3(l),_}function fn(_,e,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W1,key:n==null?null:""+n,children:_,containerInfo:e,implementation:t}}function z9(_){if(!_)return k1;_=_._reactInternals;_:{if($1(_)!==_||_.tag!==1)throw Error(g(170));var e=_;do{switch(e.tag){case 3:e=e.stateNode.context;break _;case 1:if(S0(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break _}}e=e.return}while(e!==null);throw Error(g(171))}if(_.tag===1){var t=_.type;if(S0(t))return L8(_,t,e)}return e}function T9(_,e,t,n,r,l,o,i,u){return _=Q3(t,n,!0,_,r,l,o,i,u),_.context=z9(null),t=_.current,n=p0(),r=g1(t),l=b0(n,r),l.callback=e??null,v1(t,l,r),_.current.lanes=r,o_(_,r,n),k0(_,n),_}function A6(_,e,t,n){var r=e.current,l=p0(),o=g1(r);return t=z9(t),e.context===null?e.context=t:e.pendingContext=t,e=b0(l,o),e.payload={element:_},n=n===void 0?null:n,n!==null&&(e.callback=n),_=v1(r,e,o),_!==null&&(H0(_,r,o,l),R_(_,r,o)),o}function c6(_){if(_=_.current,!_.child)return null;switch(_.child.tag){case 5:return _.child.stateNode;default:return _.child.stateNode}}function u4(_,e){if(_=_.memoizedState,_!==null&&_.dehydrated!==null){var t=_.retryLane;_.retryLane=t!==0&&t<e?t:e}}function G3(_,e){u4(_,e),(_=_.alternate)&&u4(_,e)}function dn(){return null}var M9=typeof reportError=="function"?reportError:function(_){console.error(_)};function Y3(_){this._internalRoot=_}x6.prototype.render=Y3.prototype.render=function(_){var e=this._internalRoot;if(e===null)throw Error(g(409));A6(_,e,null,null)};x6.prototype.unmount=Y3.prototype.unmount=function(){var _=this._internalRoot;if(_!==null){this._internalRoot=null;var e=_.containerInfo;U1(function(){A6(null,_,null,null)}),e[e1]=null}};function x6(_){this._internalRoot=_}x6.prototype.unstable_scheduleHydration=function(_){if(_){var e=u8();_={blockedOn:null,target:_,priority:e};for(var t=0;t<s1.length&&e!==0&&e<s1[t].priority;t++);s1.splice(t,0,_),t===0&&a8(_)}};function X3(_){return!(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)}function N6(_){return!(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11&&(_.nodeType!==8||_.nodeValue!==" react-mount-point-unstable "))}function s4(){}function pn(_,e,t,n,r){if(r){if(typeof n=="function"){var l=n;n=function(){var c=c6(o);l.call(c)}}var o=T9(e,n,_,0,null,!1,!1,"",s4);return _._reactRootContainer=o,_[e1]=o.current,X2(_.nodeType===8?_.parentNode:_),U1(),o}for(;r=_.lastChild;)_.removeChild(r);if(typeof n=="function"){var i=n;n=function(){var c=c6(u);i.call(c)}}var u=Q3(_,0,!1,null,null,!1,!1,"",s4);return _._reactRootContainer=u,_[e1]=u.current,X2(_.nodeType===8?_.parentNode:_),U1(function(){A6(e,u,t,n)}),u}function P6(_,e,t,n,r){var l=t._reactRootContainer;if(l){var o=l;if(typeof r=="function"){var i=r;r=function(){var u=c6(o);i.call(u)}}A6(e,o,_,r)}else o=pn(t,e,_,r,n);return c6(o)}o8=function(_){switch(_.tag){case 3:var e=_.stateNode;if(e.current.memoizedState.isDehydrated){var t=z2(e.pendingLanes);t!==0&&(p3(e,t|1),k0(e,q()),!(H&6)&&(h2=q()+500,x1()))}break;case 13:U1(function(){var n=t1(_,1);if(n!==null){var r=p0();H0(n,_,1,r)}}),G3(_,1)}};h3=function(_){if(_.tag===13){var e=t1(_,134217728);if(e!==null){var t=p0();H0(e,_,134217728,t)}G3(_,134217728)}};i8=function(_){if(_.tag===13){var e=g1(_),t=t1(_,e);if(t!==null){var n=p0();H0(t,_,e,n)}G3(_,e)}};u8=function(){return V};s8=function(_,e){var t=V;try{return V=_,e()}finally{V=t}};E5=function(_,e,t){switch(e){case"input":if(m5(_,t),e=t.name,t.type==="radio"&&e!=null){for(t=_;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var n=t[e];if(n!==_&&n.form===_.form){var r=y6(n);if(!r)throw Error(g(90));U4(n),m5(n,r)}}}break;case"textarea":$4(_,t);break;case"select":e=t.value,e!=null&&n2(_,!!t.multiple,e,!1)}};X4=$3;Z4=U1;var hn={usingClientEntryPoint:!1,Events:[u_,Z1,y6,G4,Y4,$3]},x2={findFiberByHostInstance:T1,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mn={bundleType:x2.bundleType,version:x2.version,rendererPackageName:x2.rendererPackageName,rendererConfig:x2.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:l1.ReactCurrentDispatcher,findHostInstanceByFiber:function(_){return _=b4(_),_===null?null:_.stateNode},findFiberByHostInstance:x2.findFiberByHostInstance||dn,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var P_=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!P_.isDisabled&&P_.supportsFiber)try{p6=P_.inject(mn),G0=P_}catch{}}N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hn;N0.createPortal=function(_,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!X3(e))throw Error(g(200));return fn(_,e,null,t)};N0.createRoot=function(_,e){if(!X3(_))throw Error(g(299));var t=!1,n="",r=M9;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Q3(_,1,!1,null,null,t,!1,n,r),_[e1]=e.current,X2(_.nodeType===8?_.parentNode:_),new Y3(e)};N0.findDOMNode=function(_){if(_==null)return null;if(_.nodeType===1)return _;var e=_._reactInternals;if(e===void 0)throw typeof _.render=="function"?Error(g(188)):(_=Object.keys(_).join(","),Error(g(268,_)));return _=b4(e),_=_===null?null:_.stateNode,_};N0.flushSync=function(_){return U1(_)};N0.hydrate=function(_,e,t){if(!N6(e))throw Error(g(200));return P6(null,_,e,!0,t)};N0.hydrateRoot=function(_,e,t){if(!X3(_))throw Error(g(405));var n=t!=null&&t.hydratedSources||null,r=!1,l="",o=M9;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=T9(e,null,_,1,t??null,r,!1,l,o),_[e1]=e.current,X2(_),n)for(_=0;_<n.length;_++)t=n[_],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new x6(e)};N0.render=function(_,e,t){if(!N6(e))throw Error(g(200));return P6(null,_,e,!1,t)};N0.unmountComponentAtNode=function(_){if(!N6(_))throw Error(g(40));return _._reactRootContainer?(U1(function(){P6(null,null,_,!1,function(){_._reactRootContainer=null,_[e1]=null})}),!0):!1};N0.unstable_batchedUpdates=$3;N0.unstable_renderSubtreeIntoContainer=function(_,e,t,n){if(!N6(t))throw Error(g(200));if(_==null||_._reactInternals===void 0)throw Error(g(38));return P6(_,e,t,!1,n)};N0.version="18.2.0-next-9e3b772b8-20220608";function I9(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I9)}catch(_){console.error(_)}}I9(),T4.exports=N0;var vn=T4.exports,a4=vn;s5.createRoot=a4.createRoot,s5.hydrateRoot=a4.hydrateRoot;var _0={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let yn=0;function L0(_,e){const t=`atom${++yn}`,n={toString:()=>t};return typeof _=="function"?n.read=_:(n.init=_,n.read=gn,n.write=wn),e&&(n.write=e),n}function gn(_){return _(this)}function wn(_,e,t){return e(this,typeof t=="function"?t(_(this)):t)}const r5=(_,e)=>_.unstable_is?_.unstable_is(e):e===_,l5=_=>"init"in _,o5=_=>!!_.write,f6=new WeakMap,Sn=(_,e)=>{f6.set(_,e),_.catch(()=>{}).finally(()=>f6.delete(_))},c4=(_,e)=>{const t=f6.get(_);t&&(f6.delete(_),t(e))},f4=(_,e)=>{_.status="fulfilled",_.value=e},d4=(_,e)=>{_.status="rejected",_.reason=e},kn=_=>typeof(_==null?void 0:_.then)=="function",N2=(_,e)=>!!_&&"v"in _&&"v"in e&&Object.is(_.v,e.v),p4=(_,e)=>!!_&&"e"in _&&"e"in e&&Object.is(_.e,e.e),K1=_=>!!_&&"v"in _&&_.v instanceof Promise,En=(_,e)=>"v"in _&&"v"in e&&_.v.orig&&_.v.orig===e.v.orig,L_=_=>{if("e"in _)throw _.e;return _.v},Cn=()=>{const _=new WeakMap,e=new WeakMap,t=[],n=new WeakMap;let r,l;(_0?"production":void 0)!=="production"&&(r=new Set,l=new Set);const o=d=>_.get(d),i=(d,k)=>{k.d.forEach((R,T)=>{var L;if(!n.has(T)){const N=o(T);(L=t[t.length-1])==null||L.add(T),n.set(T,[N,new Set]),N&&i(T,N)}n.get(T)[1].add(d)})},u=(d,k)=>{var R;(_0?"production":void 0)!=="production"&&Object.freeze(k);const T=o(d);if(_.set(d,k),n.has(d)||((R=t[t.length-1])==null||R.add(d),n.set(d,[T,new Set]),i(d,k)),K1(T)){const L="v"in k?k.v instanceof Promise?k.v:Promise.resolve(k.v):Promise.reject(k.e);T.v!==L&&c4(T.v,L)}},c=(d,k,R,T)=>{const L=new Map(T?k.d:null);let N=!1;R.forEach((E,B)=>{!E&&r5(d,B)&&(E=k),E?(L.set(B,E),k.d.get(B)!==E&&(N=!0)):(_0?"production":void 0)!=="production"&&console.warn("[Bug] atom state not found")}),(N||k.d.size!==L.size)&&(k.d=L)},m=(d,k,R,T)=>{const L=o(d),N={d:(L==null?void 0:L.d)||new Map,v:k};if(R&&c(d,N,R,T),N2(L,N)&&L.d===N.d)return L;if(K1(L)&&K1(N)&&En(L,N)){if(L.d===N.d)return L;N.v=L.v}return u(d,N),N},h=(d,k,R,T)=>{if(kn(k)){let L;const N=()=>{const B=o(d);if(!K1(B)||B.v!==E)return;const w=m(d,E,R);e.has(d)&&B.d!==w.d&&P(d,w,B.d)},E=new Promise((B,w)=>{let C=!1;k.then(D=>{C||(C=!0,f4(E,D),B(D),N())},D=>{C||(C=!0,d4(E,D),w(D),N())}),L=D=>{C||(C=!0,D.then($=>f4(E,$),$=>d4(E,$)),B(D))}});return E.orig=k,E.status="pending",Sn(E,B=>{B&&L(B),T==null||T()}),m(d,E,R,!0)}return m(d,k,R)},p=(d,k,R)=>{const T=o(d),L={d:(T==null?void 0:T.d)||new Map,e:k};return R&&c(d,L,R),p4(T,L)&&T.d===L.d?T:(u(d,L),L)},y=(d,k)=>{const R=o(d);if(!k&&R&&(e.has(d)||Array.from(R.d).every(([C,D])=>{if(C===d)return!0;const $=y(C);return $===D||N2($,D)})))return R;const T=new Map;let L=!0;const N=C=>{if(r5(d,C)){const $=o(C);if($)return T.set(C,$),L_($);if(l5(C))return T.set(C,void 0),C.init;throw new Error("no atom init")}const D=y(C);return T.set(C,D),L_(D)};let E,B;const w={get signal(){return E||(E=new AbortController),E.signal},get setSelf(){return(_0?"production":void 0)!=="production"&&!o5(d)&&console.warn("setSelf function cannot be used with read-only atom"),!B&&o5(d)&&(B=(...C)=>{if((_0?"production":void 0)!=="production"&&L&&console.warn("setSelf function cannot be called in sync"),!L)return v(d,...C)}),B}};try{const C=d.read(N,w);return h(d,C,T,()=>E==null?void 0:E.abort())}catch(C){return p(d,C,T)}finally{L=!1}},S=d=>L_(y(d)),A=d=>{let k=e.get(d);return k||(k=x(d)),k},O=(d,k)=>!k.l.size&&(!k.t.size||k.t.size===1&&k.t.has(d)),a=d=>{const k=e.get(d);k&&O(d,k)&&z(d)},s=d=>{const k=E=>{var B,w;const C=new Set((B=e.get(E))==null?void 0:B.t);return(w=n.get(E))==null||w[1].forEach(D=>{C.add(D)}),C},R=new Array,T=new Set,L=E=>{if(!T.has(E)){T.add(E);for(const B of k(E))E!==B&&L(B);R.push(E)}};L(d);const N=new Set([d]);for(let E=R.length-1;E>=0;--E){const B=R[E],w=o(B);if(!w)continue;let C=!1;for(const D of w.d.keys())if(D!==B&&N.has(D)){C=!0;break}if(C){const D=y(B,!0);N2(w,D)||N.add(B)}}},f=(d,...k)=>{let R=!0;const T=E=>L_(y(E)),L=(E,...B)=>{let w;if(r5(d,E)){if(!l5(E))throw new Error("atom not writable");const C=o(E),D=h(E,B[0]);N2(C,D)||s(E)}else w=f(E,...B);if(!R){const C=I([E]);(_0?"production":void 0)!=="production"&&r.forEach(D=>D({type:"async-write",flushed:C}))}return w},N=d.write(T,L,...k);return R=!1,N},v=(d,...k)=>{t.push(new Set([d]));const R=f(d,...k),T=I(t.pop());return(_0?"production":void 0)!=="production"&&r.forEach(L=>L({type:"write",flushed:T})),R},x=(d,k,R)=>{var T;const L=R||[];(T=o(d))==null||T.d.forEach((E,B)=>{const w=e.get(B);w?w.t.add(d):B!==d&&x(B,d,L)}),y(d);const N={t:new Set(k&&[k]),l:new Set};if(e.set(d,N),(_0?"production":void 0)!=="production"&&l.add(d),o5(d)&&d.onMount){const{onMount:E}=d;L.push(()=>{const B=E((...w)=>v(d,...w));B&&(N.u=B)})}return R||L.forEach(E=>E()),N},z=d=>{var k;const R=(k=e.get(d))==null?void 0:k.u;R&&R(),e.delete(d),(_0?"production":void 0)!=="production"&&l.delete(d);const T=o(d);T?(K1(T)&&c4(T.v),T.d.forEach((L,N)=>{if(N!==d){const E=e.get(N);E&&(E.t.delete(d),O(N,E)&&z(N))}})):(_0?"production":void 0)!=="production"&&console.warn("[Bug] could not find atom state to unmount",d)},P=(d,k,R)=>{const T=new Set(k.d.keys()),L=new Set;R==null||R.forEach((N,E)=>{if(T.has(E)){T.delete(E);return}L.add(E);const B=e.get(E);B&&B.t.delete(d)}),T.forEach(N=>{const E=e.get(N);E?E.t.add(d):e.has(d)&&x(N,d)}),L.forEach(N=>{const E=e.get(N);E&&O(N,E)&&z(N)})},I=d=>{let k;(_0?"production":void 0)!=="production"&&(k=new Set);const R=[],T=L=>{var N;if(!n.has(L))return;const[E,B]=n.get(L);n.delete(L),R.push([L,E]),B.forEach(T),(N=o(L))==null||N.d.forEach((w,C)=>T(C))};if(d.forEach(T),R.forEach(([L,N])=>{const E=o(L);if(!E){(_0?"production":void 0)!=="production"&&console.warn("[Bug] no atom state to flush");return}if(E!==N){const B=e.get(L);B&&E.d!==(N==null?void 0:N.d)&&P(L,E,N==null?void 0:N.d),B&&!(!K1(N)&&(N2(N,E)||p4(N,E)))&&(B.l.forEach(w=>w()),(_0?"production":void 0)!=="production"&&k.add(L))}}),(_0?"production":void 0)!=="production")return k},F=(d,k)=>{const R=A(d),T=I([d]),L=R.l;return L.add(k),(_0?"production":void 0)!=="production"&&r.forEach(N=>N({type:"sub",flushed:T})),()=>{L.delete(k),a(d),(_0?"production":void 0)!=="production"&&r.forEach(N=>N({type:"unsub"}))}};return(_0?"production":void 0)!=="production"?{get:S,set:v,sub:F,dev_subscribe_store:(d,k)=>{if(k!==2)throw new Error("The current StoreListener revision is 2.");return r.add(d),()=>{r.delete(d)}},dev_get_mounted_atoms:()=>l.values(),dev_get_atom_state:d=>_.get(d),dev_get_mounted:d=>e.get(d),dev_restore_atoms:d=>{t.push(new Set);for(const[R,T]of d)l5(R)&&(h(R,T),s(R));const k=I(t.pop());r.forEach(R=>R({type:"restore",flushed:k}))}}:{get:S,set:v,sub:F}};let i5;(_0?"production":void 0)!=="production"&&(typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__=="number"?++globalThis.__NUMBER_OF_JOTAI_INSTANCES__:globalThis.__NUMBER_OF_JOTAI_INSTANCES__=1);const An=()=>(i5||((_0?"production":void 0)!=="production"&&globalThis.__NUMBER_OF_JOTAI_INSTANCES__!==1&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"),i5=Cn()),i5);var xn={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Nn=y0.createContext(void 0),D9=_=>{const e=y0.useContext(Nn);return(_==null?void 0:_.store)||e||An()},Pn=_=>typeof(_==null?void 0:_.then)=="function",Ln=L4.use||(_=>{if(_.status==="pending")throw _;if(_.status==="fulfilled")return _.value;throw _.status==="rejected"?_.reason:(_.status="pending",_.then(e=>{_.status="fulfilled",_.value=e},e=>{_.status="rejected",_.reason=e}),_)});function E1(_,e){const t=D9(e),[[n,r,l],o]=y0.useReducer(c=>{const m=t.get(_);return Object.is(c[0],m)&&c[1]===t&&c[2]===_?c:[m,t,_]},void 0,()=>[t.get(_),t,_]);let i=n;(r!==t||l!==_)&&(o(),i=t.get(_));const u=e==null?void 0:e.delay;return y0.useEffect(()=>{const c=t.sub(_,()=>{if(typeof u=="number"){setTimeout(o,u);return}o()});return o(),c},[t,_,u]),y0.useDebugValue(i),Pn(i)?Ln(i):i}function r_(_,e){const t=D9(e);return y0.useCallback((...r)=>{if((xn?"production":void 0)!=="production"&&!("write"in _))throw new Error("not writable atom");return t.set(_,...r)},[t,_])}function zn(_,e){return[E1(_,e),r_(_,e)]}const Tn=`service_id,date,exception_type
平日,20240320,2
日祝,20240320,1
平日,20240429,2
日祝,20240429,1
平日,20240503,2
日祝,20240503,1
土曜,20240504,2
日祝,20240504,1
平日,20240506,2
日祝,20240506,1
平日,20240715,2
日祝,20240715,1
平日,20240812,2
日祝,20240812,1
平日,20240916,2
日祝,20240916,1
平日,20240923,2
日祝,20240923,1
平日,20241014,2
日祝,20241014,1
平日,20241104,2
日祝,20241104,1
土曜,20241123,2
日祝,20241123,1
平日,20241230,2
土曜,20241230,2
日祝,20241230,2
年末・年始,20241230,1
平日,20241231,2
土曜,20241231,2
日祝,20241231,2
年末・年始,20241231,1
平日,20250101,2
土曜,20250101,2
日祝,20250101,2
特別ダイヤ１,20250101,1
平日,20250102,2
土曜,20250102,2
日祝,20250102,2
年末・年始,20250102,1
平日,20250103,2
土曜,20250103,2
日祝,20250103,2
年末・年始,20250103,1
平日,20250113,2
日祝,20250113,1
平日,20250211,2
日祝,20250211,1
平日,20250224,2
日祝,20250224,1`,Mn=`
route_id,service_id,trip_id,trip_headsign,block_id,trip_short_name,direction_id,shape_id
前橋渋川線_A,平日,平日_05時35分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_05時53分_系統267,前橋駅,,,1,267
前橋渋川線_C,平日,平日_06時00分_系統531,前橋駅（南橘団地 経由）,,,1,531
前橋渋川線_A,平日,平日_06時30分_系統268,渋川駅,,,0,268
前橋渋川線_A,平日,平日_06時30分_系統267,前橋駅,,,1,267
前橋渋川線_C,平日,平日_06時40分_系統528,前橋駅,,,1,528
前橋渋川線_A,平日,平日_06時43分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_A,平日,平日_06時45分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_06時46分_系統268,渋川駅,,,0,268
前橋渋川線_K,平日,平日_06時58分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_C,平日,平日_07時00分_系統528,前橋駅,,,1,528
前橋渋川線_C,平日,平日_07時07分_系統531,前橋駅（南橘団地 経由）,,,1,531
前橋渋川線_A,平日,平日_07時13分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_A,平日,平日_07時23分_系統267,前橋駅,,,1,267
前橋渋川線_K,平日,平日_07時23分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,平日,平日_07時38分_系統267,前橋駅,,,1,267
前橋渋川線_B,平日,平日_07時38分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_G,平日,平日_07時40分_系統580,群馬大学荒牧,,,0,580
前橋渋川線_K,平日,平日_07時42分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_B,平日,平日_07時44分_系統263,前橋駅（渋川市内循環・群馬大学荒牧 経由）,,,1,263
前橋渋川線_B,平日,平日_07時52分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_F,平日,平日_07時55分_系統270,小児医療センター（群馬大学荒牧 経由）,,,0,270
前橋渋川線_H,平日,平日_07時57分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_K,平日,平日_07時58分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_B,平日,平日_08時10分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,平日,平日_08時23分_系統267,前橋駅,,,1,267
前橋渋川線_H,平日,平日_08時25分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_B,平日,平日_08時27分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_K,平日,平日_08時40分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_H,平日,平日_08時47分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,平日,平日_08時55分_系統267,前橋駅,,,1,267
前橋渋川線_E,平日,平日_08時56分_系統273,前橋駅,,,1,273
前橋渋川線_F,平日,平日_08時57分_系統270,小児医療センター（群馬大学荒牧 経由）,,,0,270
前橋渋川線_K,平日,平日_09時05分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_B,平日,平日_09時16分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_H,平日,平日_09時20分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_K,平日,平日_09時27分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,平日,平日_09時31分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_09時40分_系統268,渋川駅,,,0,268
前橋渋川線_G,平日,平日_09時40分_系統581,前橋駅,,,1,581
前橋渋川線_A,平日,平日_09時47分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_F,平日,平日_09時50分_系統270,小児医療センター（群馬大学荒牧 経由）,,,0,270
前橋渋川線_E,平日,平日_09時50分_系統273,前橋駅,,,1,273
前橋渋川線_H,平日,平日_10時00分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,平日,平日_10時00分_系統268,渋川駅,,,0,268
前橋渋川線_K,平日,平日_10時10分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,平日,平日_10時26分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_10時27分_系統268,渋川駅,,,0,268
前橋渋川線_E,平日,平日_10時29分_系統273,前橋駅,,,1,273
前橋渋川線_M,平日,平日_10時40分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_M,平日,平日_10時45分_系統585,前橋駅（南橘団地・群大病院 経由）,,,1,585
前橋渋川線_A,平日,平日_10時56分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_10時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_K,平日,平日_11時10分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,平日,平日_11時13分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_H,平日,平日_11時25分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_B,平日,平日_11時28分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_M,平日,平日_11時40分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_K,平日,平日_11時52分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_A,平日,平日_11時56分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_11時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_K,平日,平日_12時10分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_H,平日,平日_12時25分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,平日,平日_12時26分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_12時27分_系統268,渋川駅,,,0,268
前橋渋川線_M,平日,平日_12時40分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,平日,平日_12時43分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_K,平日,平日_12時55分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_B,平日,平日_12時57分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_H,平日,平日_13時10分_系統582,群馬大学荒牧（南橘団地 経由）,,,0,582
前橋渋川線_J,平日,平日_13時15分_系統529,群大病院,,,0,529
前橋渋川線_H,平日,平日_13時25分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,平日,平日_13時26分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_13時27分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_J,平日,平日_13時40分_系統530,前橋駅,,,1,530
前橋渋川線_M,平日,平日_13時40分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,平日,平日_13時43分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_K,平日,平日_13時55分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_B,平日,平日_13時57分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_K,平日,平日_14時10分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_H,平日,平日_14時25分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,平日,平日_14時26分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_14時27分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_A,平日,平日_14時37分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_M,平日,平日_14時40分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_K,平日,平日_14時53分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_A,平日,平日_14時57分_系統268,渋川駅,,,0,268
前橋渋川線_G,平日,平日_15時10分_系統580,群馬大学荒牧,,,0,580
前橋渋川線_B,平日,平日_15時17分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_H,平日,平日_15時20分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_B,平日,平日_15時27分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_H,平日,平日_15時37分_系統582,群馬大学荒牧（南橘団地 経由）,,,0,582
前橋渋川線_A,平日,平日_15時40分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_A,平日,平日_15時48分_系統268,渋川駅,,,0,268
前橋渋川線_K,平日,平日_15時50分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_A,平日,平日_16時05分_系統268,渋川駅,,,0,268
前橋渋川線_A,平日,平日_16時12分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_G,平日,平日_16時17分_系統580,群馬大学荒牧,,,0,580
前橋渋川線_K,平日,平日_16時20分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_A,平日,平日_16時27分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_B,平日,平日_16時45分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_A,平日,平日_16時50分_系統268,渋川駅,,,0,268
前橋渋川線_G,平日,平日_16時55分_系統581,前橋駅,,,1,581
前橋渋川線_B,平日,平日_17時05分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_H,平日,平日_17時05分_系統582,群馬大学荒牧（南橘団地 経由）,,,0,582
前橋渋川線_A,平日,平日_17時13分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,平日,平日_17時17分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,平日,平日_17時41分_系統268,渋川駅,,,0,268
前橋渋川線_A,平日,平日_17時45分_系統267,前橋駅,,,1,267
前橋渋川線_E,平日,平日_17時48分_系統272,小児医療センター,,,0,272
前橋渋川線_G,平日,平日_17時55分_系統581,前橋駅,,,1,581
前橋渋川線_H,平日,平日_17時57分_系統582,群馬大学荒牧（南橘団地 経由）,,,0,582
前橋渋川線_A,平日,平日_18時02分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_18時04分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_A,平日,平日_18時20分_系統268,渋川駅,,,0,268
前橋渋川線_F,平日,平日_18時30分_系統271,前橋駅（群馬大学荒牧 経由）,,,1,271
前橋渋川線_G,平日,平日_18時35分_系統581,前橋駅,,,1,581
前橋渋川線_C,平日,平日_18時37分_系統527,南橘団地,,,0,527
前橋渋川線_B,平日,平日_18時42分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_A,平日,平日_18時45分_系統268,渋川駅,,,0,268
前橋渋川線_B,平日,平日_18時55分_系統263,前橋駅（渋川市内循環・群馬大学荒牧 経由）,,,1,263
前橋渋川線_C,平日,平日_19時00分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,平日,平日_19時27分_系統268,渋川駅,,,0,268
前橋渋川線_A,平日,平日_19時43分_系統267,前橋駅,,,1,267
前橋渋川線_C,平日,平日_19時50分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_C,平日,平日_20時02分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,平日,平日_20時35分_系統268,渋川駅,,,0,268
前橋渋川線_A,平日,平日_20時42分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_21時07分_系統267,前橋駅,,,1,267
前橋渋川線_C,平日,平日_21時35分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,平日,平日_21時38分_系統267,前橋駅,,,1,267
前橋渋川線_A,平日,平日_22時17分_系統268,渋川駅,,,0,268
前橋渋川線_A,平日,平日_22時53分_系統268,渋川駅,,,0,268
前橋渋川線_A,土曜,土曜_05時50分_系統267,前橋駅,,,1,267
前橋渋川線_A,土曜,土曜_06時25分_系統267,前橋駅,,,1,267
前橋渋川線_A,土曜,土曜_06時43分_系統267,前橋駅,,,1,267
前橋渋川線_A,土曜,土曜_06時47分_系統268,渋川駅,,,0,268
前橋渋川線_A,土曜,土曜_07時05分_系統267,前橋駅,,,1,267
前橋渋川線_A,土曜,土曜_07時12分_系統268,渋川駅,,,0,268
前橋渋川線_A,土曜,土曜_07時25分_系統267,前橋駅,,,1,267
前橋渋川線_B,土曜,土曜_07時30分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_C,土曜,土曜_07時35分_系統528,前橋駅,,,1,528
前橋渋川線_K,土曜,土曜_07時40分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,土曜,土曜_07時45分_系統267,前橋駅,,,1,267
前橋渋川線_B,土曜,土曜_07時53分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_B,土曜,土曜_08時05分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_H,土曜,土曜_08時10分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,土曜,土曜_08時12分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,土曜,土曜_08時13分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_K,土曜,土曜_08時28分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,土曜,土曜_08時40分_系統268,渋川駅,,,0,268
前橋渋川線_B,土曜,土曜_08時55分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_B,土曜,土曜_08時58分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_H,土曜,土曜_09時00分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,土曜,土曜_09時10分_系統267,前橋駅,,,1,267
前橋渋川線_K,土曜,土曜_09時17分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,土曜,土曜_09時30分_系統267,前橋駅,,,1,267
前橋渋川線_B,土曜,土曜_09時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_B,土曜,土曜_09時47分_系統263,前橋駅（渋川市内循環・群馬大学荒牧 経由）,,,1,263
前橋渋川線_H,土曜,土曜_09時48分_系統669,けやきウォーク前橋（南橘団地・前橋駅 経由）,,,1,669
前橋渋川線_A,土曜,土曜_10時02分_系統268,渋川駅,,,0,268
前橋渋川線_L,土曜,土曜_10時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_B,土曜,土曜_10時30分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_A,土曜,土曜_10時30分_系統267,前橋駅,,,1,267
前橋渋川線_L,土曜,土曜_10時50分_系統643,前橋駅（南橘団地・群大病院 経由）,,,1,643
前橋渋川線_A,土曜,土曜_10時57分_系統268,渋川駅,,,0,268
前橋渋川線_B,土曜,土曜_11時00分_系統663,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,,,1,663
前橋渋川線_M,土曜,土曜_11時10分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,土曜,土曜_11時17分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,土曜,土曜_11時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,土曜,土曜_11時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_K,土曜,土曜_11時58分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_B,土曜,土曜_12時00分_系統663,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,,,1,663
前橋渋川線_L,土曜,土曜_12時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_B,土曜,土曜_12時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,土曜,土曜_12時30分_系統267,前橋駅,,,1,267
前橋渋川線_A,土曜,土曜_12時47分_系統662,渋川駅（前橋駅・渋川市内循環 経由）,,,0,662
前橋渋川線_L,土曜,土曜_12時50分_系統645,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,,,1,645
前橋渋川線_A,土曜,土曜_12時52分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_M,土曜,土曜_13時10分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,土曜,土曜_13時30分_系統267,前橋駅,,,1,267
前橋渋川線_A,土曜,土曜_13時30分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_K,土曜,土曜_13時55分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_A,土曜,土曜_13時57分_系統268,渋川駅,,,0,268
前橋渋川線_B,土曜,土曜_14時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_L,土曜,土曜_14時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_A,土曜,土曜_14時20分_系統661,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,,,1,661
前橋渋川線_B,土曜,土曜_14時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_L,土曜,土曜_14時50分_系統643,前橋駅（南橘団地・群大病院 経由）,,,1,643
前橋渋川線_A,土曜,土曜_14時55分_系統268,渋川駅,,,0,268
前橋渋川線_M,土曜,土曜_15時00分_系統672,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,,,0,672
前橋渋川線_B,土曜,土曜_15時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_A,土曜,土曜_15時30分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_A,土曜,土曜_15時30分_系統267,前橋駅,,,1,267
前橋渋川線_A,土曜,土曜_15時40分_系統666,渋川駅（前橋駅 経由）,,,0,666
前橋渋川線_A,土曜,土曜_15時47分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_G,土曜,土曜_16時00分_系統581,前橋駅,,,1,581
前橋渋川線_A,土曜,土曜_16時05分_系統268,渋川駅,,,0,268
前橋渋川線_L,土曜,土曜_16時18分_系統642,道の駅まえばし赤城（南橘団地 経由）,,,0,642
前橋渋川線_A,土曜,土曜_16時25分_系統267,前橋駅,,,1,267
前橋渋川線_B,土曜,土曜_16時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,土曜,土曜_16時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_B,土曜,土曜_17時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_L,土曜,土曜_17時02分_系統641,前橋駅,,,1,641
前橋渋川線_C,土曜,土曜_17時10分_系統668,南橘団地（前橋駅 経由）,,,0,668
前橋渋川線_A,土曜,土曜_17時32分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,土曜,土曜_17時41分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_C,土曜,土曜_17時50分_系統528,前橋駅,,,1,528
前橋渋川線_A,土曜,土曜_17時57分_系統268,渋川駅,,,0,268
前橋渋川線_A,土曜,土曜_18時10分_系統267,前橋駅,,,1,267
前橋渋川線_C,土曜,土曜_18時10分_系統668,南橘団地（前橋駅 経由）,,,0,668
前橋渋川線_A,土曜,土曜_18時37分_系統268,渋川駅,,,0,268
前橋渋川線_A,土曜,土曜_18時45分_系統267,前橋駅,,,1,267
前橋渋川線_C,土曜,土曜_19時00分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,土曜,土曜_19時50分_系統268,渋川駅,,,0,268
前橋渋川線_A,土曜,土曜_19時50分_系統267,前橋駅,,,1,267
前橋渋川線_A,土曜,土曜_20時35分_系統267,前橋駅,,,1,267
前橋渋川線_C,土曜,土曜_20時35分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_C,土曜,土曜_21時24分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,日祝,日祝_05時50分_系統267,前橋駅,,,1,267
前橋渋川線_A,日祝,日祝_06時25分_系統267,前橋駅,,,1,267
前橋渋川線_A,日祝,日祝_06時43分_系統267,前橋駅,,,1,267
前橋渋川線_A,日祝,日祝_06時47分_系統268,渋川駅,,,0,268
前橋渋川線_A,日祝,日祝_07時05分_系統267,前橋駅,,,1,267
前橋渋川線_A,日祝,日祝_07時12分_系統268,渋川駅,,,0,268
前橋渋川線_A,日祝,日祝_07時25分_系統267,前橋駅,,,1,267
前橋渋川線_B,日祝,日祝_07時30分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_C,日祝,日祝_07時35分_系統528,前橋駅,,,1,528
前橋渋川線_K,日祝,日祝_07時40分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,日祝,日祝_07時45分_系統267,前橋駅,,,1,267
前橋渋川線_B,日祝,日祝_07時53分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_B,日祝,日祝_08時05分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_H,日祝,日祝_08時10分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,日祝,日祝_08時12分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,日祝,日祝_08時13分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_K,日祝,日祝_08時28分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,日祝,日祝_08時40分_系統268,渋川駅,,,0,268
前橋渋川線_B,日祝,日祝_08時55分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_B,日祝,日祝_08時58分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_H,日祝,日祝_09時00分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,日祝,日祝_09時10分_系統267,前橋駅,,,1,267
前橋渋川線_K,日祝,日祝_09時17分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_B,日祝,日祝_09時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,日祝,日祝_09時30分_系統267,前橋駅,,,1,267
前橋渋川線_B,日祝,日祝_09時47分_系統263,前橋駅（渋川市内循環・群馬大学荒牧 経由）,,,1,263
前橋渋川線_H,日祝,日祝_09時48分_系統669,けやきウォーク前橋（南橘団地・前橋駅 経由）,,,1,669
前橋渋川線_A,日祝,日祝_10時02分_系統268,渋川駅,,,0,268
前橋渋川線_L,日祝,日祝_10時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_B,日祝,日祝_10時30分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_A,日祝,日祝_10時30分_系統267,前橋駅,,,1,267
前橋渋川線_L,日祝,日祝_10時50分_系統643,前橋駅（南橘団地・群大病院 経由）,,,1,643
前橋渋川線_A,日祝,日祝_10時57分_系統268,渋川駅,,,0,268
前橋渋川線_B,日祝,日祝_11時00分_系統663,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,,,1,663
前橋渋川線_M,日祝,日祝_11時10分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,日祝,日祝_11時17分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,日祝,日祝_11時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,日祝,日祝_11時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_K,日祝,日祝_11時58分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_B,日祝,日祝_12時00分_系統663,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,,,1,663
前橋渋川線_L,日祝,日祝_12時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_A,日祝,日祝_12時30分_系統267,前橋駅,,,1,267
前橋渋川線_B,日祝,日祝_12時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,日祝,日祝_12時47分_系統662,渋川駅（前橋駅・渋川市内循環 経由）,,,0,662
前橋渋川線_L,日祝,日祝_12時50分_系統645,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,,,1,645
前橋渋川線_A,日祝,日祝_12時52分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_M,日祝,日祝_13時10分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,日祝,日祝_13時30分_系統267,前橋駅,,,1,267
前橋渋川線_A,日祝,日祝_13時30分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_K,日祝,日祝_13時55分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_A,日祝,日祝_13時57分_系統268,渋川駅,,,0,268
前橋渋川線_B,日祝,日祝_14時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_L,日祝,日祝_14時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_A,日祝,日祝_14時20分_系統661,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,,,1,661
前橋渋川線_B,日祝,日祝_14時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_L,日祝,日祝_14時50分_系統643,前橋駅（南橘団地・群大病院 経由）,,,1,643
前橋渋川線_A,日祝,日祝_14時55分_系統268,渋川駅,,,0,268
前橋渋川線_M,日祝,日祝_15時00分_系統672,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,,,0,672
前橋渋川線_B,日祝,日祝_15時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_A,日祝,日祝_15時30分_系統267,前橋駅,,,1,267
前橋渋川線_A,日祝,日祝_15時30分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_A,日祝,日祝_15時40分_系統666,渋川駅（前橋駅 経由）,,,0,666
前橋渋川線_A,日祝,日祝_15時47分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_G,日祝,日祝_16時00分_系統581,前橋駅,,,1,581
前橋渋川線_A,日祝,日祝_16時05分_系統268,渋川駅,,,0,268
前橋渋川線_L,日祝,日祝_16時18分_系統642,道の駅まえばし赤城（南橘団地 経由）,,,0,642
前橋渋川線_A,日祝,日祝_16時25分_系統267,前橋駅,,,1,267
前橋渋川線_B,日祝,日祝_16時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,日祝,日祝_16時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_B,日祝,日祝_17時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_L,日祝,日祝_17時02分_系統641,前橋駅,,,1,641
前橋渋川線_C,日祝,日祝_17時10分_系統668,南橘団地（前橋駅 経由）,,,0,668
前橋渋川線_A,日祝,日祝_17時32分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,日祝,日祝_17時41分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_C,日祝,日祝_17時50分_系統528,前橋駅,,,1,528
前橋渋川線_A,日祝,日祝_17時57分_系統268,渋川駅,,,0,268
前橋渋川線_A,日祝,日祝_18時10分_系統267,前橋駅,,,1,267
前橋渋川線_C,日祝,日祝_18時10分_系統668,南橘団地（前橋駅 経由）,,,0,668
前橋渋川線_A,日祝,日祝_18時37分_系統268,渋川駅,,,0,268
前橋渋川線_A,日祝,日祝_18時45分_系統267,前橋駅,,,1,267
前橋渋川線_C,日祝,日祝_19時00分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,日祝,日祝_19時50分_系統267,前橋駅,,,1,267
前橋渋川線_A,日祝,日祝_19時50分_系統268,渋川駅,,,0,268
前橋渋川線_C,日祝,日祝_20時35分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,日祝,日祝_20時35分_系統267,前橋駅,,,1,267
前橋渋川線_C,日祝,日祝_21時24分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,年末・年始,年末・年始_05時50分_系統267,前橋駅,,,1,267
前橋渋川線_A,年末・年始,年末・年始_06時25分_系統267,前橋駅,,,1,267
前橋渋川線_A,年末・年始,年末・年始_06時43分_系統267,前橋駅,,,1,267
前橋渋川線_A,年末・年始,年末・年始_06時47分_系統268,渋川駅,,,0,268
前橋渋川線_A,年末・年始,年末・年始_07時05分_系統267,前橋駅,,,1,267
前橋渋川線_A,年末・年始,年末・年始_07時12分_系統268,渋川駅,,,0,268
前橋渋川線_A,年末・年始,年末・年始_07時25分_系統267,前橋駅,,,1,267
前橋渋川線_B,年末・年始,年末・年始_07時30分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_C,年末・年始,年末・年始_07時35分_系統528,前橋駅,,,1,528
前橋渋川線_K,年末・年始,年末・年始_07時40分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,年末・年始,年末・年始_07時45分_系統267,前橋駅,,,1,267
前橋渋川線_B,年末・年始,年末・年始_07時53分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_B,年末・年始,年末・年始_08時05分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_H,年末・年始,年末・年始_08時10分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,年末・年始,年末・年始_08時12分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,年末・年始,年末・年始_08時13分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_K,年末・年始,年末・年始_08時28分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,年末・年始,年末・年始_08時40分_系統268,渋川駅,,,0,268
前橋渋川線_B,年末・年始,年末・年始_08時55分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_B,年末・年始,年末・年始_08時58分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_H,年末・年始,年末・年始_09時00分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,年末・年始,年末・年始_09時10分_系統267,前橋駅,,,1,267
前橋渋川線_K,年末・年始,年末・年始_09時17分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,年末・年始,年末・年始_09時30分_系統267,前橋駅,,,1,267
前橋渋川線_B,年末・年始,年末・年始_09時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_B,年末・年始,年末・年始_09時47分_系統263,前橋駅（渋川市内循環・群馬大学荒牧 経由）,,,1,263
前橋渋川線_H,年末・年始,年末・年始_09時48分_系統669,けやきウォーク前橋（南橘団地・前橋駅 経由）,,,1,669
前橋渋川線_A,年末・年始,年末・年始_10時02分_系統268,渋川駅,,,0,268
前橋渋川線_L,年末・年始,年末・年始_10時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_A,年末・年始,年末・年始_10時30分_系統267,前橋駅,,,1,267
前橋渋川線_B,年末・年始,年末・年始_10時30分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_L,年末・年始,年末・年始_10時50分_系統643,前橋駅（南橘団地・群大病院 経由）,,,1,643
前橋渋川線_A,年末・年始,年末・年始_10時57分_系統268,渋川駅,,,0,268
前橋渋川線_B,年末・年始,年末・年始_11時00分_系統663,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,,,1,663
前橋渋川線_M,年末・年始,年末・年始_11時10分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,年末・年始,年末・年始_11時17分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,年末・年始,年末・年始_11時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,年末・年始,年末・年始_11時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_K,年末・年始,年末・年始_11時58分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_B,年末・年始,年末・年始_12時00分_系統663,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,,,1,663
前橋渋川線_L,年末・年始,年末・年始_12時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_A,年末・年始,年末・年始_12時30分_系統267,前橋駅,,,1,267
前橋渋川線_B,年末・年始,年末・年始_12時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,年末・年始,年末・年始_12時47分_系統662,渋川駅（前橋駅・渋川市内循環 経由）,,,0,662
前橋渋川線_L,年末・年始,年末・年始_12時50分_系統645,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,,,1,645
前橋渋川線_A,年末・年始,年末・年始_12時52分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_M,年末・年始,年末・年始_13時10分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,年末・年始,年末・年始_13時30分_系統267,前橋駅,,,1,267
前橋渋川線_A,年末・年始,年末・年始_13時30分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_K,年末・年始,年末・年始_13時55分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_A,年末・年始,年末・年始_13時57分_系統268,渋川駅,,,0,268
前橋渋川線_B,年末・年始,年末・年始_14時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_L,年末・年始,年末・年始_14時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_A,年末・年始,年末・年始_14時20分_系統661,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,,,1,661
前橋渋川線_B,年末・年始,年末・年始_14時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_L,年末・年始,年末・年始_14時50分_系統643,前橋駅（南橘団地・群大病院 経由）,,,1,643
前橋渋川線_A,年末・年始,年末・年始_14時55分_系統268,渋川駅,,,0,268
前橋渋川線_M,年末・年始,年末・年始_15時00分_系統672,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,,,0,672
前橋渋川線_B,年末・年始,年末・年始_15時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_A,年末・年始,年末・年始_15時30分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_A,年末・年始,年末・年始_15時30分_系統267,前橋駅,,,1,267
前橋渋川線_A,年末・年始,年末・年始_15時40分_系統666,渋川駅（前橋駅 経由）,,,0,666
前橋渋川線_A,年末・年始,年末・年始_15時47分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_G,年末・年始,年末・年始_16時00分_系統581,前橋駅,,,1,581
前橋渋川線_A,年末・年始,年末・年始_16時05分_系統268,渋川駅,,,0,268
前橋渋川線_L,年末・年始,年末・年始_16時18分_系統642,道の駅まえばし赤城（南橘団地 経由）,,,0,642
前橋渋川線_A,年末・年始,年末・年始_16時25分_系統267,前橋駅,,,1,267
前橋渋川線_B,年末・年始,年末・年始_16時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,年末・年始,年末・年始_16時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_B,年末・年始,年末・年始_17時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_L,年末・年始,年末・年始_17時02分_系統641,前橋駅,,,1,641
前橋渋川線_C,年末・年始,年末・年始_17時10分_系統668,南橘団地（前橋駅 経由）,,,0,668
前橋渋川線_A,年末・年始,年末・年始_17時32分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,年末・年始,年末・年始_17時41分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_C,年末・年始,年末・年始_17時50分_系統528,前橋駅,,,1,528
前橋渋川線_A,年末・年始,年末・年始_17時57分_系統268,渋川駅,,,0,268
前橋渋川線_C,年末・年始,年末・年始_18時10分_系統668,南橘団地（前橋駅 経由）,,,0,668
前橋渋川線_A,年末・年始,年末・年始_18時10分_系統267,前橋駅,,,1,267
前橋渋川線_A,年末・年始,年末・年始_18時37分_系統268,渋川駅,,,0,268
前橋渋川線_A,年末・年始,年末・年始_18時45分_系統267,前橋駅,,,1,267
前橋渋川線_C,年末・年始,年末・年始_19時00分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,年末・年始,年末・年始_19時50分_系統268,渋川駅,,,0,268
前橋渋川線_A,年末・年始,年末・年始_19時50分_系統267,前橋駅,,,1,267
前橋渋川線_A,年末・年始,年末・年始_20時35分_系統267,前橋駅,,,1,267
前橋渋川線_C,年末・年始,年末・年始_20時35分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_C,年末・年始,年末・年始_21時24分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_05時50分_系統267,前橋駅,,,1,267
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_06時25分_系統267,前橋駅,,,1,267
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_06時43分_系統267,前橋駅,,,1,267
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_06時47分_系統268,渋川駅,,,0,268
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_07時05分_系統267,前橋駅,,,1,267
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_07時12分_系統268,渋川駅,,,0,268
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_07時25分_系統267,前橋駅,,,1,267
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_07時30分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_C,特別ダイヤ１,特別ダイヤ１_07時35分_系統528,前橋駅,,,1,528
前橋渋川線_K,特別ダイヤ１,特別ダイヤ１_07時40分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_07時45分_系統267,前橋駅,,,1,267
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_07時53分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_08時05分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_H,特別ダイヤ１,特別ダイヤ１_08時10分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_08時12分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_08時13分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_K,特別ダイヤ１,特別ダイヤ１_08時28分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_08時40分_系統268,渋川駅,,,0,268
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_08時55分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_08時58分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_H,特別ダイヤ１,特別ダイヤ１_09時00分_系統583,前橋駅（南橘団地 経由）,,,1,583
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_09時10分_系統267,前橋駅,,,1,267
前橋渋川線_K,特別ダイヤ１,特別ダイヤ１_09時17分_系統586,群馬大学荒牧（群大病院 経由）,,,0,586
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_09時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_09時30分_系統267,前橋駅,,,1,267
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_09時47分_系統263,前橋駅（渋川市内循環・群馬大学荒牧 経由）,,,1,263
前橋渋川線_H,特別ダイヤ１,特別ダイヤ１_09時48分_系統669,けやきウォーク前橋（南橘団地・前橋駅 経由）,,,1,669
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_10時02分_系統268,渋川駅,,,0,268
前橋渋川線_L,特別ダイヤ１,特別ダイヤ１_10時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_10時30分_系統267,前橋駅,,,1,267
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_10時30分_系統264,渋川駅（群馬大学荒牧・渋川市内循環 経由）,,,0,264
前橋渋川線_L,特別ダイヤ１,特別ダイヤ１_10時50分_系統643,前橋駅（南橘団地・群大病院 経由）,,,1,643
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_10時57分_系統268,渋川駅,,,0,268
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_11時00分_系統663,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,,,1,663
前橋渋川線_M,特別ダイヤ１,特別ダイヤ１_11時10分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_11時17分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_11時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_11時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_K,特別ダイヤ１,特別ダイヤ１_11時58分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_12時00分_系統663,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,,,1,663
前橋渋川線_L,特別ダイヤ１,特別ダイヤ１_12時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_12時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_12時30分_系統267,前橋駅,,,1,267
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_12時47分_系統662,渋川駅（前橋駅・渋川市内循環 経由）,,,0,662
前橋渋川線_L,特別ダイヤ１,特別ダイヤ１_12時50分_系統645,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,,,1,645
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_12時52分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_M,特別ダイヤ１,特別ダイヤ１_13時10分_系統584,群馬大学荒牧（群大病院・南橘団地 経由）,,,0,584
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_13時30分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_13時30分_系統267,前橋駅,,,1,267
前橋渋川線_K,特別ダイヤ１,特別ダイヤ１_13時55分_系統587,前橋駅（群大病院 経由）,,,1,587
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_13時57分_系統268,渋川駅,,,0,268
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_14時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_L,特別ダイヤ１,特別ダイヤ１_14時10分_系統644,道の駅まえばし赤城（群大病院 経由）,,,0,644
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_14時20分_系統661,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,,,1,661
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_14時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_L,特別ダイヤ１,特別ダイヤ１_14時50分_系統643,前橋駅（南橘団地・群大病院 経由）,,,1,643
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_14時55分_系統268,渋川駅,,,0,268
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_15時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_M,特別ダイヤ１,特別ダイヤ１_15時00分_系統672,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,,,0,672
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_15時30分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_15時30分_系統267,前橋駅,,,1,267
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_15時40分_系統666,渋川駅（前橋駅 経由）,,,0,666
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_15時47分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_G,特別ダイヤ１,特別ダイヤ１_16時00分_系統581,前橋駅,,,1,581
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_16時05分_系統268,渋川駅,,,0,268
前橋渋川線_L,特別ダイヤ１,特別ダイヤ１_16時18分_系統642,道の駅まえばし赤城（南橘団地 経由）,,,0,642
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_16時25分_系統267,前橋駅,,,1,267
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_16時30分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_16時57分_系統262,渋川駅（渋川市内循環 経由）,,,0,262
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_17時00分_系統265,前橋駅（群馬大学荒牧 経由）,,,1,265
前橋渋川線_L,特別ダイヤ１,特別ダイヤ１_17時02分_系統641,前橋駅,,,1,641
前橋渋川線_C,特別ダイヤ１,特別ダイヤ１_17時10分_系統668,南橘団地（前橋駅 経由）,,,0,668
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_17時32分_系統261,前橋駅（渋川市内循環 経由）,,,1,261
前橋渋川線_B,特別ダイヤ１,特別ダイヤ１_17時41分_系統266,渋川駅（群馬大学荒牧 経由）,,,0,266
前橋渋川線_C,特別ダイヤ１,特別ダイヤ１_17時50分_系統528,前橋駅,,,1,528
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_17時57分_系統268,渋川駅,,,0,268
前橋渋川線_C,特別ダイヤ１,特別ダイヤ１_18時10分_系統668,南橘団地（前橋駅 経由）,,,0,668
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_18時10分_系統267,前橋駅,,,1,267
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_18時37分_系統268,渋川駅,,,0,268
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_18時45分_系統267,前橋駅,,,1,267
前橋渋川線_C,特別ダイヤ１,特別ダイヤ１_19時00分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_19時50分_系統268,渋川駅,,,0,268
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_19時50分_系統267,前橋駅,,,1,267
前橋渋川線_A,特別ダイヤ１,特別ダイヤ１_20時35分_系統267,前橋駅,,,1,267
前橋渋川線_C,特別ダイヤ１,特別ダイヤ１_20時35分_系統532,渋川駅（南橘団地 経由）,,,0,532
前橋渋川線_C,特別ダイヤ１,特別ダイヤ１_21時24分_系統532,渋川駅（南橘団地 経由）,,,0,532`,In=`
stop_id,stop_code,stop_name,stop_desc,stop_lat,stop_lon,zone_id,stop_url,location_type,platform_code,parent_station
200007_01,IK26,ＮＴＴ前,伊香保・渋川温泉方面,36.4909146952518,139.003383578095,200007_01,,0,,
200007_02,IK26,ＮＴＴ前,渋川駅・りんご団地方面,36.4910473899314,139.003585544303,200007_02,,0,,
200017_01,,カーリット前,,36.4732026809544,139.023215753451,200017_01,,0,,
200017_02,,カーリット前,,36.4736007638281,139.023355877796,200017_02,,0,,
200022_01,,けやきウォーク前橋,,36.3793636169717,139.077021084227,200022_01,,0,,
200108_01,,永寿寺前,けやきウォーク方面,36.3844781317566,139.074955413175,200108_01,,0,,
200108_02,南24,永寿寺前,マイバス・前橋駅方面,36.384415,139.075645714286,200108_02,,0,,
200141_01,,下小出,,36.4124819911294,139.063224141587,200141_01,,0,,
200141_02,,下小出,,36.4121604095403,139.063612997598,200141_02,,0,,
200142_01,,下小出町一丁目,,36.4088637881531,139.064920005448,200142_01,,0,,
200142_02,,下小出町一丁目,,36.4082408405705,139.065415991434,200142_02,,0,,
200153_01,,下箱田,,36.46147,139.0384,200153_01,,0,,
200153_02,,下箱田,,36.4611142410175,139.038785345738,200153_02,,0,,
200189_01,,関根,,36.436349257852,139.05011225775,200189_01,,0,,
200189_02,,関根,,36.4359417768287,139.050445970541,200189_02,,0,,
200261_01,,群大病院,,36.406775,139.063031428571,200261_01,,0,,
200262_01,,群大病院入口,,36.4051653513677,139.066624195496,200262_01,,0,,
200262_02,,群大病院入口,,36.4057243580638,139.066576845261,200262_02,,0,,
200273_01,,群馬大学荒牧,,36.4319432459857,139.04784635271,200273_01,,0,,
200343_01,,荒牧,,36.4296666130527,139.054059719933,200343_01,,0,,
200343_02,,荒牧,,36.429066472157,139.054694384608,200343_02,,0,,
200348_01,,荒牧新道,,36.4268937222566,139.055891665574,200348_01,,0,,
200348_02,,荒牧新道,,36.4269516397858,139.056075376906,200348_02,,0,,
200379_01,,国領町一丁目,,36.400025888793,139.068833610641,200379_01,,0,,
200379_02,,国領町一丁目,,36.4018005995071,139.068437143898,200379_02,,0,,
200395_01,,坂東橋,,36.4633164755059,139.037592677898,200395_01,,0,,
200395_02,,坂東橋,,36.463438956014,139.037809866659,200395_02,,0,,
200430_01,IK27,市役所入口,女子高前・伊香保方面,36.4912537779934,139.000769390518,200430_01,,0,,
200430_02,IK27,市役所入口,渋川駅方面,36.4914678775032,139.000268769314,200430_02,,0,,
200455_01,,住吉町交番前,,36.3968797200289,139.068738792726,200455_01,,0,,
200455_02,,住吉町交番前,,36.3985805234102,139.069241018041,200455_02,,0,,
200463_01,1番のりば,渋川駅,前橋方面,36.4906436014106,139.008054676185,200463_01,,0,1,
200463_06,,渋川駅,市内循環左回り,36.4912279895703,139.0076567584,200463_06,,0,6,
200463_10,,渋川駅,降車専用,36.4906654637486,139.00786201627,200463_10,,0,,
200466_01,IK03-1,渋川四ツ角,伊香保・市内循環方面,36.4958377614127,139.000936131436,200466_01,,0,1,
200466_02,IK03-1,渋川四ツ角,渋川駅・前橋駅方面,36.4956895872422,139.003514005951,200466_02,,0,2,
200467_01,IK03-2,渋川四ツ角西,渋川駅方面,36.4958311064045,139.002054785295,200467_01,,0,,
200468_01,IK02,渋川新町,伊香保・高崎・市内循環方面,36.4947861534518,139.005756354749,200468_01,,0,1,
200468_02,IK02,渋川新町,渋川駅方面,36.4947046608401,139.005971668929,200468_02,,0,2,
200474_01,,循環器病院入口,,36.4566332475019,139.046445328164,200474_01,,0,,
200474_02,,循環器病院入口,,36.4565576602768,139.046535213804,200474_02,,0,,
200476_01,,女子高前,,36.4952424723109,138.996028959669,200476_01,,0,,
200476_02,,女子高前,,36.4952222976263,138.996135546029,200476_02,,0,,
200477_01,IK28,女子高入口,女子高前・伊香保方面,36.4920736390905,138.996457678842,200477_01,,0,,
200477_02,IK28,女子高入口,渋川駅方面,36.4918436506963,138.997831760762,200477_02,,0,,
200484_01,,小児医療センター,,36.4591870602197,139.046570264964,200484_01,,0,,
200503_01,,昭和町三丁目,,36.4060931863967,139.063930037969,200503_01,,0,,
200503_02,,昭和町三丁目,,36.4062462338894,139.063327904164,200503_02,,0,,
200506_01,,松原,,36.4759084711448,139.0209211879,200506_01,,0,,
200506_02,,松原,,36.4765483973665,139.020613357443,200506_02,,0,,
200519_01,,沼辺,,36.4695451642026,139.024609831551,200519_01,,0,,
200519_02,,沼辺,,36.4698891627006,139.024858082908,200519_02,,0,,
200542_01,,上小出,,36.4171655507224,139.061046113337,200542_01,,0,,
200542_02,,上小出,,36.4174241062495,139.061167869725,200542_02,,0,,
200668_01,,静和幼稚園前,けやきウォーク方面,36.38190768683,139.076561090386,200668_01,,0,,
200668_02,南22,静和幼稚園前,マイバス・前橋駅方面,36.3815711602437,139.076442833126,200668_02,,0,,
200702_01,,千代田町三丁目,,36.394595,139.06834,200702_01,,0,,
200702_02,,千代田町三丁目,,36.3947463843063,139.068555547148,200702_02,,0,,
200703_01,,千代田町二丁目,,36.3923658979483,139.067884777259,200703_01,,0,,
200703_02,,千代田町二丁目,,36.3920830575421,139.068001585663,200703_02,,0,,
200704_01,IK04,川原町,伊香保・りんご団地方面,36.4967284389296,138.996824297334,200704_01,,0,,
200704_02,IK04,川原町,渋川駅方面,36.4965532161566,138.997468855287,200704_02,,0,,
200718_02,2番のりば,前橋駅,南橘・群大・渋川方面,36.38344,139.072509,200718_02,,0,2,
200718_04,4番のりば,前橋駅,けやきウォーク前橋方面,36.383792,139.072197,200718_04,,0,4,
200718_10,,前橋駅,降車専用,36.38369,139.0729,200718_10,,0,,
200722_01,,前橋自動車教習所前,,36.4323178840214,139.052317830233,200722_01,,0,,
200722_02,,前橋自動車教習所前,,36.4321087786218,139.052681089451,200722_02,,0,,
200730_01,,早尾神社前,,36.4848574995606,139.012296691857,200730_01,,0,,
200730_02,,早尾神社前,,36.4846256250772,139.012716768978,200730_02,,0,,
200768_01,,大崎,,36.4882476945968,139.008466429032,200768_01,,0,,
200768_02,,大崎,,36.4880671385162,139.009631446315,200768_02,,0,,
200800_01,,団地入口,,36.4260465441647,139.063572342518,200800_01,,0,,
200800_02,,団地入口,,36.4261456444721,139.06323558055,200800_02,,0,,
200827_01,,中村,,36.4786530731731,139.016847371944,200827_01,,0,,
200827_02,,中村,,36.4790084162737,139.016726574849,200827_02,,0,,
200872_01,,田口,,36.4473647569087,139.046940422672,200872_01,,0,,
200872_02,,田口,,36.4472186102688,139.047128619489,200872_02,,0,,
200895_01,,東半田,,36.4642325852808,139.033686253724,200895_01,,0,,
200895_02,,東半田,,36.4648116295063,139.031860288775,200895_02,,0,,
200927_01,,南橘団地,,36.427217584599,139.064386249509,200927_01,,0,,
200928_01,,南橘中学校前,,36.4235142190407,139.060729882505,200928_01,,0,,
200928_02,,南橘中学校前,,36.4233936607206,139.060640883721,200928_02,,0,,
200932_01,,南口改良住宅前,けやきウォーク方面,36.3840275376121,139.076442913289,200932_01,,0,,
200932_02,南23,南口改良住宅前,マイバス・前橋駅方面,36.3832389195661,139.07634760136,200932_02,,0,,
200981_01,,発電所前,,36.4534199572209,139.043392709774,200981_01,,0,,
200981_02,,発電所前,,36.4531793544437,139.043704224058,200981_02,,0,,
200985_01,,半田,,36.4653569952123,139.028305065405,200985_01,,0,,
200985_02,,半田,,36.4657977497183,139.0284573737,200985_02,,0,,
200987_01,,半田北,,36.4672353948643,139.026130199358,200987_01,,0,,
200987_02,,半田北,,36.4674629178333,139.026445053459,200987_02,,0,,
200998_01,南26・AG02,表町,県庁・渋川・富士見方面,36.387245,139.072448571429,200998_01,,0,,
200998_02,AG02,表町,前橋駅・けやきウォーク方面,36.38723,139.072677142857,200998_02,,0,,
201015_01,,敷島学校入口,,36.4028995344797,139.067681019923,201015_01,,0,,
201015_02,,敷島学校入口,,36.4037212069499,139.067531951079,201015_02,,0,,
201056_01,,法華沢,,36.4425332798086,139.04836876247,201056_01,,0,,
201056_02,,法華沢,,36.4428266626538,139.048405108448,201056_02,,0,,
201071_01,,北前橋,,36.4222359821293,139.058714252857,201071_01,,0,,
201071_02,,北前橋,,36.4221480572496,139.058955267622,201071_02,,0,,
201081_01,,本町,,36.3902546267633,139.069389613339,201081_01,,0,,
201081_02,,本町,,36.3900882904161,139.070069071993,201081_02,,0,,
201100_01,,木曽神社入口,,36.457947578877,139.040389428005,201100_01,,0,,
201100_02,,木曽神社入口,,36.4581752093532,139.040468910906,201100_02,,0,,
201100_03,,木曽神社入口,,36.4577671679797,139.041056135018,201100_03,,0,,
201100_04,,木曽神社入口,,36.4577009430007,139.041179519499,201100_04,,0,,
201185_01,,南橘保育所北,,36.4267757531434,139.060857474395,201185_01,,0,,
201185_02,,南橘保育所北,,36.4268430067744,139.060825991715,201185_02,,0,,
201440_01,,道の駅　まえばし赤城,,36.4406443729171,139.052812082971,201440_01,,0,,
210463_05,5番のりば,渋川駅,市内循環右回り・医療センター・赤城自然園・神田原・,36.4901470552344,139.007766105759,210463_05,,0,5,
210463_10,,渋川駅,,36.4906654637486,139.00786201627,210463_10,,0,,`,Dn=`
trip_id,arrival_time,departure_time,stop_id,stop_sequence,stop_headsign,pickup_type,drop_off_type,timepoint
平日_05時35分_系統267,05:35:00,05:35:00,200463_01,1,前橋駅,0,1,1
平日_05時35分_系統267,05:36:00,05:36:00,200768_02,2,前橋駅,0,0,1
平日_05時35分_系統267,05:37:00,05:37:00,200730_02,3,前橋駅,0,0,1
平日_05時35分_系統267,05:39:00,05:39:00,200827_02,4,前橋駅,0,0,1
平日_05時35分_系統267,05:40:00,05:40:00,200506_02,5,前橋駅,0,0,1
平日_05時35分_系統267,05:41:00,05:41:00,200017_02,6,前橋駅,0,0,1
平日_05時35分_系統267,05:42:00,05:42:00,200519_02,7,前橋駅,0,0,1
平日_05時35分_系統267,05:42:00,05:42:00,200987_02,8,前橋駅,0,0,1
平日_05時35分_系統267,05:44:00,05:44:00,200985_02,9,前橋駅,0,0,1
平日_05時35分_系統267,05:45:00,05:45:00,200895_02,10,前橋駅,0,0,1
平日_05時35分_系統267,05:47:00,05:47:00,200395_02,11,前橋駅,0,0,1
平日_05時35分_系統267,05:47:00,05:47:00,200153_02,12,前橋駅,0,0,1
平日_05時35分_系統267,05:48:00,05:48:00,201100_02,13,前橋駅,0,0,1
平日_05時35分_系統267,05:49:00,05:49:00,200981_02,14,前橋駅,0,0,1
平日_05時35分_系統267,05:50:00,05:50:00,200872_02,15,前橋駅,0,0,1
平日_05時35分_系統267,05:51:00,05:51:00,201056_02,16,前橋駅,0,0,1
平日_05時35分_系統267,05:53:00,05:53:00,200189_02,17,前橋駅,0,0,1
平日_05時35分_系統267,05:54:00,05:54:00,200722_02,18,前橋駅,0,0,1
平日_05時35分_系統267,05:55:00,05:55:00,200343_02,19,前橋駅,0,0,1
平日_05時35分_系統267,05:56:00,05:56:00,200348_02,20,前橋駅,0,0,1
平日_05時35分_系統267,05:58:00,05:58:00,201071_02,21,前橋駅,0,0,1
平日_05時35分_系統267,06:00:00,06:00:00,200542_02,22,前橋駅,0,0,1
平日_05時35分_系統267,06:01:00,06:01:00,200141_02,23,前橋駅,0,0,1
平日_05時35分_系統267,06:02:00,06:02:00,200142_02,24,前橋駅,0,0,1
平日_05時35分_系統267,06:04:00,06:04:00,200262_02,25,前橋駅,0,0,1
平日_05時35分_系統267,06:05:00,06:05:00,201015_02,26,前橋駅,0,0,1
平日_05時35分_系統267,06:06:00,06:06:00,200379_02,27,前橋駅,0,0,1
平日_05時35分_系統267,06:07:00,06:07:00,200455_02,28,前橋駅,0,0,1
平日_05時35分_系統267,06:08:00,06:08:00,200702_02,29,前橋駅,0,0,1
平日_05時35分_系統267,06:09:00,06:09:00,200703_02,30,前橋駅,0,0,1
平日_05時35分_系統267,06:10:00,06:10:00,201081_02,31,前橋駅,0,0,1
平日_05時35分_系統267,06:11:00,06:11:00,200998_02,32,前橋駅,0,0,1
平日_05時35分_系統267,06:17:00,06:17:00,200718_10,33,前橋駅,1,0,1
平日_05時53分_系統267,05:53:00,05:53:00,200463_01,1,前橋駅,0,1,1
平日_05時53分_系統267,05:54:00,05:54:00,200768_02,2,前橋駅,0,0,1
平日_05時53分_系統267,05:55:00,05:55:00,200730_02,3,前橋駅,0,0,1
平日_05時53分_系統267,05:57:00,05:57:00,200827_02,4,前橋駅,0,0,1
平日_05時53分_系統267,05:58:00,05:58:00,200506_02,5,前橋駅,0,0,1
平日_05時53分_系統267,05:59:00,05:59:00,200017_02,6,前橋駅,0,0,1
平日_05時53分_系統267,06:00:00,06:00:00,200519_02,7,前橋駅,0,0,1
平日_05時53分_系統267,06:00:00,06:00:00,200987_02,8,前橋駅,0,0,1
平日_05時53分_系統267,06:02:00,06:02:00,200985_02,9,前橋駅,0,0,1
平日_05時53分_系統267,06:03:00,06:03:00,200895_02,10,前橋駅,0,0,1
平日_05時53分_系統267,06:05:00,06:05:00,200395_02,11,前橋駅,0,0,1
平日_05時53分_系統267,06:05:00,06:05:00,200153_02,12,前橋駅,0,0,1
平日_05時53分_系統267,06:06:00,06:06:00,201100_02,13,前橋駅,0,0,1
平日_05時53分_系統267,06:07:00,06:07:00,200981_02,14,前橋駅,0,0,1
平日_05時53分_系統267,06:08:00,06:08:00,200872_02,15,前橋駅,0,0,1
平日_05時53分_系統267,06:09:00,06:09:00,201056_02,16,前橋駅,0,0,1
平日_05時53分_系統267,06:11:00,06:11:00,200189_02,17,前橋駅,0,0,1
平日_05時53分_系統267,06:12:00,06:12:00,200722_02,18,前橋駅,0,0,1
平日_05時53分_系統267,06:13:00,06:13:00,200343_02,19,前橋駅,0,0,1
平日_05時53分_系統267,06:14:00,06:14:00,200348_02,20,前橋駅,0,0,1
平日_05時53分_系統267,06:16:00,06:16:00,201071_02,21,前橋駅,0,0,1
平日_05時53分_系統267,06:18:00,06:18:00,200542_02,22,前橋駅,0,0,1
平日_05時53分_系統267,06:19:00,06:19:00,200141_02,23,前橋駅,0,0,1
平日_05時53分_系統267,06:20:00,06:20:00,200142_02,24,前橋駅,0,0,1
平日_05時53分_系統267,06:22:00,06:22:00,200262_02,25,前橋駅,0,0,1
平日_05時53分_系統267,06:23:00,06:23:00,201015_02,26,前橋駅,0,0,1
平日_05時53分_系統267,06:24:00,06:24:00,200379_02,27,前橋駅,0,0,1
平日_05時53分_系統267,06:25:00,06:25:00,200455_02,28,前橋駅,0,0,1
平日_05時53分_系統267,06:26:00,06:26:00,200702_02,29,前橋駅,0,0,1
平日_05時53分_系統267,06:27:00,06:27:00,200703_02,30,前橋駅,0,0,1
平日_05時53分_系統267,06:28:00,06:28:00,201081_02,31,前橋駅,0,0,1
平日_05時53分_系統267,06:29:00,06:29:00,200998_02,32,前橋駅,0,0,1
平日_05時53分_系統267,06:35:00,06:35:00,200718_10,33,前橋駅,1,0,1
平日_06時00分_系統531,06:00:00,06:00:00,200463_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_06時00分_系統531,06:01:00,06:01:00,200768_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:02:00,06:02:00,200730_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:04:00,06:04:00,200827_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:05:00,06:05:00,200506_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:06:00,06:06:00,200017_02,6,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:07:00,06:07:00,200519_02,7,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:07:00,06:07:00,200987_02,8,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:09:00,06:09:00,200985_02,9,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:10:00,06:10:00,200895_02,10,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:12:00,06:12:00,200395_02,11,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:12:00,06:12:00,200153_02,12,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:13:00,06:13:00,201100_02,13,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:14:00,06:14:00,200981_02,14,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:15:00,06:15:00,200872_02,15,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:16:00,06:16:00,201056_02,16,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:18:00,06:18:00,200189_02,17,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:19:00,06:19:00,200722_02,18,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:20:00,06:20:00,200343_02,19,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:21:00,06:21:00,200348_02,20,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:24:00,06:24:00,201185_02,21,前橋駅（南橘団地 経由）,0,0,1
平日_06時00分_系統531,06:27:00,06:27:00,200927_01,22,前橋駅,0,0,1
平日_06時00分_系統531,06:27:00,06:27:00,200800_02,23,前橋駅,0,0,1
平日_06時00分_系統531,06:28:00,06:28:00,200928_02,24,前橋駅,0,0,1
平日_06時00分_系統531,06:30:00,06:30:00,201071_02,25,前橋駅,0,0,1
平日_06時00分_系統531,06:32:00,06:32:00,200542_02,26,前橋駅,0,0,1
平日_06時00分_系統531,06:33:00,06:33:00,200141_02,27,前橋駅,0,0,1
平日_06時00分_系統531,06:34:00,06:34:00,200142_02,28,前橋駅,0,0,1
平日_06時00分_系統531,06:36:00,06:36:00,200262_02,29,前橋駅,0,0,1
平日_06時00分_系統531,06:37:00,06:37:00,201015_02,30,前橋駅,0,0,1
平日_06時00分_系統531,06:38:00,06:38:00,200379_02,31,前橋駅,0,0,1
平日_06時00分_系統531,06:39:00,06:39:00,200455_02,32,前橋駅,0,0,1
平日_06時00分_系統531,06:40:00,06:40:00,200702_02,33,前橋駅,0,0,1
平日_06時00分_系統531,06:41:00,06:41:00,200703_02,34,前橋駅,0,0,1
平日_06時00分_系統531,06:42:00,06:42:00,201081_02,35,前橋駅,0,0,1
平日_06時00分_系統531,06:43:00,06:43:00,200998_02,36,前橋駅,0,0,1
平日_06時00分_系統531,06:49:00,06:49:00,200718_10,37,前橋駅,1,0,1
平日_06時30分_系統268,06:30:00,06:30:00,200718_02,1,渋川駅,0,1,1
平日_06時30分_系統268,06:31:00,06:31:00,200998_01,2,渋川駅,0,0,1
平日_06時30分_系統268,06:33:00,06:33:00,201081_01,3,渋川駅,0,0,1
平日_06時30分_系統268,06:34:00,06:34:00,200703_01,4,渋川駅,0,0,1
平日_06時30分_系統268,06:34:00,06:34:00,200702_01,5,渋川駅,0,0,1
平日_06時30分_系統268,06:35:00,06:35:00,200455_01,6,渋川駅,0,0,1
平日_06時30分_系統268,06:36:00,06:36:00,200379_01,7,渋川駅,0,0,1
平日_06時30分_系統268,06:37:00,06:37:00,201015_01,8,渋川駅,0,0,1
平日_06時30分_系統268,06:38:00,06:38:00,200262_01,9,渋川駅,0,0,1
平日_06時30分_系統268,06:39:00,06:39:00,200142_01,10,渋川駅,0,0,1
平日_06時30分_系統268,06:40:00,06:40:00,200141_01,11,渋川駅,0,0,1
平日_06時30分_系統268,06:41:00,06:41:00,200542_01,12,渋川駅,0,0,1
平日_06時30分_系統268,06:42:00,06:42:00,201071_01,13,渋川駅,0,0,1
平日_06時30分_系統268,06:44:00,06:44:00,200348_01,14,渋川駅,0,0,1
平日_06時30分_系統268,06:45:00,06:45:00,200343_01,15,渋川駅,0,0,1
平日_06時30分_系統268,06:46:00,06:46:00,200722_01,16,渋川駅,0,0,1
平日_06時30分_系統268,06:47:00,06:47:00,200189_01,17,渋川駅,0,0,1
平日_06時30分_系統268,06:49:00,06:49:00,201056_01,18,渋川駅,0,0,1
平日_06時30分_系統268,06:50:00,06:50:00,200872_01,19,渋川駅,0,0,1
平日_06時30分_系統268,06:51:00,06:51:00,200981_01,20,渋川駅,0,0,1
平日_06時30分_系統268,06:52:00,06:52:00,201100_01,21,渋川駅,0,0,1
平日_06時30分_系統268,06:53:00,06:53:00,200153_01,22,渋川駅,0,0,1
平日_06時30分_系統268,06:53:00,06:53:00,200395_01,23,渋川駅,0,0,1
平日_06時30分_系統268,06:54:00,06:54:00,200895_01,24,渋川駅,0,0,1
平日_06時30分_系統268,06:56:00,06:56:00,200985_01,25,渋川駅,0,0,1
平日_06時30分_系統268,06:56:00,06:56:00,200987_01,26,渋川駅,0,0,1
平日_06時30分_系統268,06:57:00,06:57:00,200519_01,27,渋川駅,0,0,1
平日_06時30分_系統268,06:58:00,06:58:00,200017_01,28,渋川駅,0,0,1
平日_06時30分_系統268,07:00:00,07:00:00,200506_01,29,渋川駅,0,0,1
平日_06時30分_系統268,07:02:00,07:02:00,200827_01,30,渋川駅,0,0,1
平日_06時30分_系統268,07:04:00,07:04:00,200730_01,31,渋川駅,0,0,1
平日_06時30分_系統268,07:05:00,07:05:00,200768_01,32,渋川駅,0,0,1
平日_06時30分_系統268,07:08:00,07:08:00,200463_10,33,渋川駅,1,0,1
平日_06時30分_系統267,06:30:00,06:30:00,200463_01,1,前橋駅,0,1,1
平日_06時30分_系統267,06:31:00,06:31:00,200768_02,2,前橋駅,0,0,1
平日_06時30分_系統267,06:32:00,06:32:00,200730_02,3,前橋駅,0,0,1
平日_06時30分_系統267,06:34:00,06:34:00,200827_02,4,前橋駅,0,0,1
平日_06時30分_系統267,06:35:00,06:35:00,200506_02,5,前橋駅,0,0,1
平日_06時30分_系統267,06:36:00,06:36:00,200017_02,6,前橋駅,0,0,1
平日_06時30分_系統267,06:37:00,06:37:00,200519_02,7,前橋駅,0,0,1
平日_06時30分_系統267,06:37:00,06:37:00,200987_02,8,前橋駅,0,0,1
平日_06時30分_系統267,06:39:00,06:39:00,200985_02,9,前橋駅,0,0,1
平日_06時30分_系統267,06:40:00,06:40:00,200895_02,10,前橋駅,0,0,1
平日_06時30分_系統267,06:42:00,06:42:00,200395_02,11,前橋駅,0,0,1
平日_06時30分_系統267,06:42:00,06:42:00,200153_02,12,前橋駅,0,0,1
平日_06時30分_系統267,06:43:00,06:43:00,201100_02,13,前橋駅,0,0,1
平日_06時30分_系統267,06:44:00,06:44:00,200981_02,14,前橋駅,0,0,1
平日_06時30分_系統267,06:45:00,06:45:00,200872_02,15,前橋駅,0,0,1
平日_06時30分_系統267,06:46:00,06:46:00,201056_02,16,前橋駅,0,0,1
平日_06時30分_系統267,06:48:00,06:48:00,200189_02,17,前橋駅,0,0,1
平日_06時30分_系統267,06:49:00,06:49:00,200722_02,18,前橋駅,0,0,1
平日_06時30分_系統267,06:50:00,06:50:00,200343_02,19,前橋駅,0,0,1
平日_06時30分_系統267,06:51:00,06:51:00,200348_02,20,前橋駅,0,0,1
平日_06時30分_系統267,06:53:00,06:53:00,201071_02,21,前橋駅,0,0,1
平日_06時30分_系統267,06:55:00,06:55:00,200542_02,22,前橋駅,0,0,1
平日_06時30分_系統267,06:56:00,06:56:00,200141_02,23,前橋駅,0,0,1
平日_06時30分_系統267,06:57:00,06:57:00,200142_02,24,前橋駅,0,0,1
平日_06時30分_系統267,06:59:00,06:59:00,200262_02,25,前橋駅,0,0,1
平日_06時30分_系統267,07:00:00,07:00:00,201015_02,26,前橋駅,0,0,1
平日_06時30分_系統267,07:01:00,07:01:00,200379_02,27,前橋駅,0,0,1
平日_06時30分_系統267,07:02:00,07:02:00,200455_02,28,前橋駅,0,0,1
平日_06時30分_系統267,07:04:00,07:04:00,200702_02,29,前橋駅,0,0,1
平日_06時30分_系統267,07:05:00,07:05:00,200703_02,30,前橋駅,0,0,1
平日_06時30分_系統267,07:07:00,07:07:00,201081_02,31,前橋駅,0,0,1
平日_06時30分_系統267,07:09:00,07:09:00,200998_02,32,前橋駅,0,0,1
平日_06時30分_系統267,07:12:00,07:12:00,200718_10,33,前橋駅,1,0,1
平日_06時40分_系統528,06:40:00,06:40:00,200927_01,1,前橋駅,0,1,1
平日_06時40分_系統528,06:40:00,06:40:00,200800_02,2,前橋駅,0,0,1
平日_06時40分_系統528,06:41:00,06:41:00,200928_02,3,前橋駅,0,0,1
平日_06時40分_系統528,06:43:00,06:43:00,201071_02,4,前橋駅,0,0,1
平日_06時40分_系統528,06:45:00,06:45:00,200542_02,5,前橋駅,0,0,1
平日_06時40分_系統528,06:46:00,06:46:00,200141_02,6,前橋駅,0,0,1
平日_06時40分_系統528,06:47:00,06:47:00,200142_02,7,前橋駅,0,0,1
平日_06時40分_系統528,06:49:00,06:49:00,200262_02,8,前橋駅,0,0,1
平日_06時40分_系統528,06:50:00,06:50:00,201015_02,9,前橋駅,0,0,1
平日_06時40分_系統528,06:51:00,06:51:00,200379_02,10,前橋駅,0,0,1
平日_06時40分_系統528,06:52:00,06:52:00,200455_02,11,前橋駅,0,0,1
平日_06時40分_系統528,06:54:00,06:54:00,200702_02,12,前橋駅,0,0,1
平日_06時40分_系統528,06:55:00,06:55:00,200703_02,13,前橋駅,0,0,1
平日_06時40分_系統528,06:57:00,06:57:00,201081_02,14,前橋駅,0,0,1
平日_06時40分_系統528,06:59:00,06:59:00,200998_02,15,前橋駅,0,0,1
平日_06時40分_系統528,07:02:00,07:02:00,200718_10,16,前橋駅,1,0,1
平日_06時43分_系統261,06:43:00,06:43:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
平日_06時43分_系統261,06:44:00,06:44:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
平日_06時43分_系統261,06:45:00,06:45:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
平日_06時43分_系統261,06:46:00,06:46:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
平日_06時43分_系統261,06:47:00,06:47:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
平日_06時43分_系統261,06:48:00,06:48:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
平日_06時43分_系統261,06:49:00,06:49:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
平日_06時43分_系統261,06:50:00,06:50:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
平日_06時43分_系統261,06:51:00,06:51:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
平日_06時43分_系統261,06:56:00,06:56:00,200463_01,10,前橋駅,0,0,1
平日_06時43分_系統261,06:57:00,06:57:00,200768_02,11,前橋駅,0,0,1
平日_06時43分_系統261,06:58:00,06:58:00,200730_02,12,前橋駅,0,0,1
平日_06時43分_系統261,07:00:00,07:00:00,200827_02,13,前橋駅,0,0,1
平日_06時43分_系統261,07:01:00,07:01:00,200506_02,14,前橋駅,0,0,1
平日_06時43分_系統261,07:02:00,07:02:00,200017_02,15,前橋駅,0,0,1
平日_06時43分_系統261,07:03:00,07:03:00,200519_02,16,前橋駅,0,0,1
平日_06時43分_系統261,07:03:00,07:03:00,200987_02,17,前橋駅,0,0,1
平日_06時43分_系統261,07:05:00,07:05:00,200985_02,18,前橋駅,0,0,1
平日_06時43分_系統261,07:06:00,07:06:00,200895_02,19,前橋駅,0,0,1
平日_06時43分_系統261,07:08:00,07:08:00,200395_02,20,前橋駅,0,0,1
平日_06時43分_系統261,07:08:00,07:08:00,200153_02,21,前橋駅,0,0,1
平日_06時43分_系統261,07:09:00,07:09:00,201100_02,22,前橋駅,0,0,1
平日_06時43分_系統261,07:10:00,07:10:00,200981_02,23,前橋駅,0,0,1
平日_06時43分_系統261,07:11:00,07:11:00,200872_02,24,前橋駅,0,0,1
平日_06時43分_系統261,07:12:00,07:12:00,201056_02,25,前橋駅,0,0,1
平日_06時43分_系統261,07:14:00,07:14:00,200189_02,26,前橋駅,0,0,1
平日_06時43分_系統261,07:15:00,07:15:00,200722_02,27,前橋駅,0,0,1
平日_06時43分_系統261,07:17:00,07:17:00,200343_02,28,前橋駅,0,0,1
平日_06時43分_系統261,07:18:00,07:18:00,200348_02,29,前橋駅,0,0,1
平日_06時43分_系統261,07:20:00,07:20:00,201071_02,30,前橋駅,0,0,1
平日_06時43分_系統261,07:22:00,07:22:00,200542_02,31,前橋駅,0,0,1
平日_06時43分_系統261,07:24:00,07:24:00,200141_02,32,前橋駅,0,0,1
平日_06時43分_系統261,07:26:00,07:26:00,200142_02,33,前橋駅,0,0,1
平日_06時43分_系統261,07:28:00,07:28:00,200262_02,34,前橋駅,0,0,1
平日_06時43分_系統261,07:29:00,07:29:00,201015_02,35,前橋駅,0,0,1
平日_06時43分_系統261,07:31:00,07:31:00,200379_02,36,前橋駅,0,0,1
平日_06時43分_系統261,07:32:00,07:32:00,200455_02,37,前橋駅,0,0,1
平日_06時43分_系統261,07:34:00,07:34:00,200702_02,38,前橋駅,0,0,1
平日_06時43分_系統261,07:36:00,07:36:00,200703_02,39,前橋駅,0,0,1
平日_06時43分_系統261,07:38:00,07:38:00,201081_02,40,前橋駅,0,0,1
平日_06時43分_系統261,07:40:00,07:40:00,200998_02,41,前橋駅,0,0,1
平日_06時43分_系統261,07:43:00,07:43:00,200718_10,42,前橋駅,1,0,1
平日_06時45分_系統267,06:45:00,06:45:00,200463_01,1,前橋駅,0,1,1
平日_06時45分_系統267,06:46:00,06:46:00,200768_02,2,前橋駅,0,0,1
平日_06時45分_系統267,06:47:00,06:47:00,200730_02,3,前橋駅,0,0,1
平日_06時45分_系統267,06:49:00,06:49:00,200827_02,4,前橋駅,0,0,1
平日_06時45分_系統267,06:50:00,06:50:00,200506_02,5,前橋駅,0,0,1
平日_06時45分_系統267,06:51:00,06:51:00,200017_02,6,前橋駅,0,0,1
平日_06時45分_系統267,06:52:00,06:52:00,200519_02,7,前橋駅,0,0,1
平日_06時45分_系統267,06:52:00,06:52:00,200987_02,8,前橋駅,0,0,1
平日_06時45分_系統267,06:54:00,06:54:00,200985_02,9,前橋駅,0,0,1
平日_06時45分_系統267,06:55:00,06:55:00,200895_02,10,前橋駅,0,0,1
平日_06時45分_系統267,06:57:00,06:57:00,200395_02,11,前橋駅,0,0,1
平日_06時45分_系統267,06:57:00,06:57:00,200153_02,12,前橋駅,0,0,1
平日_06時45分_系統267,06:58:00,06:58:00,201100_02,13,前橋駅,0,0,1
平日_06時45分_系統267,06:59:00,06:59:00,200981_02,14,前橋駅,0,0,1
平日_06時45分_系統267,07:00:00,07:00:00,200872_02,15,前橋駅,0,0,1
平日_06時45分_系統267,07:01:00,07:01:00,201056_02,16,前橋駅,0,0,1
平日_06時45分_系統267,07:03:00,07:03:00,200189_02,17,前橋駅,0,0,1
平日_06時45分_系統267,07:04:00,07:04:00,200722_02,18,前橋駅,0,0,1
平日_06時45分_系統267,07:05:00,07:05:00,200343_02,19,前橋駅,0,0,1
平日_06時45分_系統267,07:06:00,07:06:00,200348_02,20,前橋駅,0,0,1
平日_06時45分_系統267,07:08:00,07:08:00,201071_02,21,前橋駅,0,0,1
平日_06時45分_系統267,07:10:00,07:10:00,200542_02,22,前橋駅,0,0,1
平日_06時45分_系統267,07:12:00,07:12:00,200141_02,23,前橋駅,0,0,1
平日_06時45分_系統267,07:13:00,07:13:00,200142_02,24,前橋駅,0,0,1
平日_06時45分_系統267,07:15:00,07:15:00,200262_02,25,前橋駅,0,0,1
平日_06時45分_系統267,07:16:00,07:16:00,201015_02,26,前橋駅,0,0,1
平日_06時45分_系統267,07:18:00,07:18:00,200379_02,27,前橋駅,0,0,1
平日_06時45分_系統267,07:19:00,07:19:00,200455_02,28,前橋駅,0,0,1
平日_06時45分_系統267,07:21:00,07:21:00,200702_02,29,前橋駅,0,0,1
平日_06時45分_系統267,07:22:00,07:22:00,200703_02,30,前橋駅,0,0,1
平日_06時45分_系統267,07:24:00,07:24:00,201081_02,31,前橋駅,0,0,1
平日_06時45分_系統267,07:26:00,07:26:00,200998_02,32,前橋駅,0,0,1
平日_06時45分_系統267,07:29:00,07:29:00,200718_10,33,前橋駅,1,0,1
平日_06時46分_系統268,06:46:00,06:46:00,200718_02,1,渋川駅,0,1,1
平日_06時46分_系統268,06:47:00,06:47:00,200998_01,2,渋川駅,0,0,1
平日_06時46分_系統268,06:49:00,06:49:00,201081_01,3,渋川駅,0,0,1
平日_06時46分_系統268,06:50:00,06:50:00,200703_01,4,渋川駅,0,0,1
平日_06時46分_系統268,06:50:00,06:50:00,200702_01,5,渋川駅,0,0,1
平日_06時46分_系統268,06:52:00,06:52:00,200455_01,6,渋川駅,0,0,1
平日_06時46分_系統268,06:53:00,06:53:00,200379_01,7,渋川駅,0,0,1
平日_06時46分_系統268,06:55:00,06:55:00,201015_01,8,渋川駅,0,0,1
平日_06時46分_系統268,06:56:00,06:56:00,200262_01,9,渋川駅,0,0,1
平日_06時46分_系統268,06:57:00,06:57:00,200142_01,10,渋川駅,0,0,1
平日_06時46分_系統268,06:58:00,06:58:00,200141_01,11,渋川駅,0,0,1
平日_06時46分_系統268,06:59:00,06:59:00,200542_01,12,渋川駅,0,0,1
平日_06時46分_系統268,07:01:00,07:01:00,201071_01,13,渋川駅,0,0,1
平日_06時46分_系統268,07:03:00,07:03:00,200348_01,14,渋川駅,0,0,1
平日_06時46分_系統268,07:04:00,07:04:00,200343_01,15,渋川駅,0,0,1
平日_06時46分_系統268,07:05:00,07:05:00,200722_01,16,渋川駅,0,0,1
平日_06時46分_系統268,07:06:00,07:06:00,200189_01,17,渋川駅,0,0,1
平日_06時46分_系統268,07:08:00,07:08:00,201056_01,18,渋川駅,0,0,1
平日_06時46分_系統268,07:09:00,07:09:00,200872_01,19,渋川駅,0,0,1
平日_06時46分_系統268,07:10:00,07:10:00,200981_01,20,渋川駅,0,0,1
平日_06時46分_系統268,07:11:00,07:11:00,201100_01,21,渋川駅,0,0,1
平日_06時46分_系統268,07:12:00,07:12:00,200153_01,22,渋川駅,0,0,1
平日_06時46分_系統268,07:12:00,07:12:00,200395_01,23,渋川駅,0,0,1
平日_06時46分_系統268,07:13:00,07:13:00,200895_01,24,渋川駅,0,0,1
平日_06時46分_系統268,07:15:00,07:15:00,200985_01,25,渋川駅,0,0,1
平日_06時46分_系統268,07:15:00,07:15:00,200987_01,26,渋川駅,0,0,1
平日_06時46分_系統268,07:16:00,07:16:00,200519_01,27,渋川駅,0,0,1
平日_06時46分_系統268,07:17:00,07:17:00,200017_01,28,渋川駅,0,0,1
平日_06時46分_系統268,07:19:00,07:19:00,200506_01,29,渋川駅,0,0,1
平日_06時46分_系統268,07:21:00,07:21:00,200827_01,30,渋川駅,0,0,1
平日_06時46分_系統268,07:23:00,07:23:00,200730_01,31,渋川駅,0,0,1
平日_06時46分_系統268,07:24:00,07:24:00,200768_01,32,渋川駅,0,0,1
平日_06時46分_系統268,07:27:00,07:27:00,200463_10,33,渋川駅,1,0,1
平日_06時58分_系統586,06:58:00,06:58:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_06時58分_系統586,06:59:00,06:59:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_06時58分_系統586,07:01:00,07:01:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_06時58分_系統586,07:03:00,07:03:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_06時58分_系統586,07:03:00,07:03:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_06時58分_系統586,07:05:00,07:05:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_06時58分_系統586,07:06:00,07:06:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_06時58分_系統586,07:07:00,07:07:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_06時58分_系統586,07:08:00,07:08:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_06時58分_系統586,07:09:00,07:09:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_06時58分_系統586,07:12:00,07:12:00,200261_01,11,群馬大学荒牧,0,0,1
平日_06時58分_系統586,07:13:00,07:13:00,200503_02,12,群馬大学荒牧,0,0,1
平日_06時58分_系統586,07:14:00,07:14:00,200142_01,13,群馬大学荒牧,0,0,1
平日_06時58分_系統586,07:15:00,07:15:00,200141_01,14,群馬大学荒牧,0,0,1
平日_06時58分_系統586,07:16:00,07:16:00,200542_01,15,群馬大学荒牧,0,0,1
平日_06時58分_系統586,07:18:00,07:18:00,201071_01,16,群馬大学荒牧,0,0,1
平日_06時58分_系統586,07:20:00,07:20:00,200348_01,17,群馬大学荒牧,0,0,1
平日_06時58分_系統586,07:21:00,07:21:00,200343_01,18,群馬大学荒牧,0,0,1
平日_06時58分_系統586,07:22:00,07:22:00,200722_01,19,群馬大学荒牧,0,0,1
平日_06時58分_系統586,07:25:00,07:25:00,200273_01,20,群馬大学荒牧,1,0,1
平日_07時00分_系統528,07:00:00,07:00:00,200927_01,1,前橋駅,0,1,1
平日_07時00分_系統528,07:00:00,07:00:00,200800_02,2,前橋駅,0,0,1
平日_07時00分_系統528,07:01:00,07:01:00,200928_02,3,前橋駅,0,0,1
平日_07時00分_系統528,07:03:00,07:03:00,201071_02,4,前橋駅,0,0,1
平日_07時00分_系統528,07:05:00,07:05:00,200542_02,5,前橋駅,0,0,1
平日_07時00分_系統528,07:06:00,07:06:00,200141_02,6,前橋駅,0,0,1
平日_07時00分_系統528,07:07:00,07:07:00,200142_02,7,前橋駅,0,0,1
平日_07時00分_系統528,07:09:00,07:09:00,200262_02,8,前橋駅,0,0,1
平日_07時00分_系統528,07:10:00,07:10:00,201015_02,9,前橋駅,0,0,1
平日_07時00分_系統528,07:11:00,07:11:00,200379_02,10,前橋駅,0,0,1
平日_07時00分_系統528,07:12:00,07:12:00,200455_02,11,前橋駅,0,0,1
平日_07時00分_系統528,07:14:00,07:14:00,200702_02,12,前橋駅,0,0,1
平日_07時00分_系統528,07:15:00,07:15:00,200703_02,13,前橋駅,0,0,1
平日_07時00分_系統528,07:17:00,07:17:00,201081_02,14,前橋駅,0,0,1
平日_07時00分_系統528,07:19:00,07:19:00,200998_02,15,前橋駅,0,0,1
平日_07時00分_系統528,07:22:00,07:22:00,200718_10,16,前橋駅,1,0,1
平日_07時07分_系統531,07:07:00,07:07:00,200463_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_07時07分_系統531,07:07:00,07:07:00,200768_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:07:00,07:07:00,200730_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:09:00,07:09:00,200827_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:10:00,07:10:00,200506_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:11:00,07:11:00,200017_02,6,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:12:00,07:12:00,200519_02,7,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:12:00,07:12:00,200987_02,8,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:14:00,07:14:00,200985_02,9,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:15:00,07:15:00,200895_02,10,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:17:00,07:17:00,200395_02,11,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:17:00,07:17:00,200153_02,12,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:18:00,07:18:00,201100_02,13,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:19:00,07:19:00,200981_02,14,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:20:00,07:20:00,200872_02,15,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:21:00,07:21:00,201056_02,16,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:23:00,07:23:00,200189_02,17,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:24:00,07:24:00,200722_02,18,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:26:00,07:26:00,200343_02,19,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:27:00,07:27:00,200348_02,20,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:30:00,07:30:00,201185_02,21,前橋駅（南橘団地 経由）,0,0,1
平日_07時07分_系統531,07:33:00,07:33:00,200927_01,22,前橋駅,0,0,1
平日_07時07分_系統531,07:33:00,07:33:00,200800_02,23,前橋駅,0,0,1
平日_07時07分_系統531,07:34:00,07:34:00,200928_02,24,前橋駅,0,0,1
平日_07時07分_系統531,07:36:00,07:36:00,201071_02,25,前橋駅,0,0,1
平日_07時07分_系統531,07:38:00,07:38:00,200542_02,26,前橋駅,0,0,1
平日_07時07分_系統531,07:40:00,07:40:00,200141_02,27,前橋駅,0,0,1
平日_07時07分_系統531,07:42:00,07:42:00,200142_02,28,前橋駅,0,0,1
平日_07時07分_系統531,07:45:00,07:45:00,200262_02,29,前橋駅,0,0,1
平日_07時07分_系統531,07:46:00,07:46:00,201015_02,30,前橋駅,0,0,1
平日_07時07分_系統531,07:48:00,07:48:00,200379_02,31,前橋駅,0,0,1
平日_07時07分_系統531,07:50:00,07:50:00,200455_02,32,前橋駅,0,0,1
平日_07時07分_系統531,07:52:00,07:52:00,200702_02,33,前橋駅,0,0,1
平日_07時07分_系統531,07:54:00,07:54:00,200703_02,34,前橋駅,0,0,1
平日_07時07分_系統531,07:56:00,07:56:00,201081_02,35,前橋駅,0,0,1
平日_07時07分_系統531,07:58:00,07:58:00,200998_02,36,前橋駅,0,0,1
平日_07時07分_系統531,08:01:00,08:01:00,200718_10,37,前橋駅,1,0,1
平日_07時13分_系統262,07:13:00,07:13:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
平日_07時13分_系統262,07:14:00,07:14:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:16:00,07:16:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:18:00,07:18:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:18:00,07:18:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:20:00,07:20:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:21:00,07:21:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:23:00,07:23:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:24:00,07:24:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:25:00,07:25:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:26:00,07:26:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:27:00,07:27:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:29:00,07:29:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:31:00,07:31:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:32:00,07:32:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:33:00,07:33:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:35:00,07:35:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:37:00,07:37:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:38:00,07:38:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:39:00,07:39:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:40:00,07:40:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:41:00,07:41:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:41:00,07:41:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:42:00,07:42:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:44:00,07:44:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:44:00,07:44:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:45:00,07:45:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:46:00,07:46:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:48:00,07:48:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:50:00,07:50:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:52:00,07:52:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:53:00,07:53:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時13分_系統262,07:55:00,07:55:00,200463_06,33,渋川市内循環,0,0,1
平日_07時13分_系統262,07:56:00,07:56:00,200468_01,34,渋川市内循環,0,0,1
平日_07時13分_系統262,07:58:00,07:58:00,200466_01,35,渋川市内循環,0,0,1
平日_07時13分_系統262,07:59:00,07:59:00,200704_01,36,渋川市内循環,0,0,1
平日_07時13分_系統262,08:00:00,08:00:00,200476_02,37,渋川市内循環,0,0,1
平日_07時13分_系統262,08:01:00,08:01:00,200477_02,38,渋川市内循環,0,0,1
平日_07時13分_系統262,08:02:00,08:02:00,200430_02,39,渋川市内循環,0,0,1
平日_07時13分_系統262,08:03:00,08:03:00,200007_02,40,渋川市内循環,0,0,1
平日_07時13分_系統262,08:08:00,08:08:00,210463_10,41,渋川市内循環,1,0,1
平日_07時23分_系統267,07:23:00,07:23:00,200463_01,1,前橋駅,0,1,1
平日_07時23分_系統267,07:24:00,07:24:00,200768_02,2,前橋駅,0,0,1
平日_07時23分_系統267,07:25:00,07:25:00,200730_02,3,前橋駅,0,0,1
平日_07時23分_系統267,07:27:00,07:27:00,200827_02,4,前橋駅,0,0,1
平日_07時23分_系統267,07:29:00,07:29:00,200506_02,5,前橋駅,0,0,1
平日_07時23分_系統267,07:31:00,07:31:00,200017_02,6,前橋駅,0,0,1
平日_07時23分_系統267,07:32:00,07:32:00,200519_02,7,前橋駅,0,0,1
平日_07時23分_系統267,07:32:00,07:32:00,200987_02,8,前橋駅,0,0,1
平日_07時23分_系統267,07:34:00,07:34:00,200985_02,9,前橋駅,0,0,1
平日_07時23分_系統267,07:35:00,07:35:00,200895_02,10,前橋駅,0,0,1
平日_07時23分_系統267,07:37:00,07:37:00,200395_02,11,前橋駅,0,0,1
平日_07時23分_系統267,07:37:00,07:37:00,200153_02,12,前橋駅,0,0,1
平日_07時23分_系統267,07:38:00,07:38:00,201100_02,13,前橋駅,0,0,1
平日_07時23分_系統267,07:39:00,07:39:00,200981_02,14,前橋駅,0,0,1
平日_07時23分_系統267,07:40:00,07:40:00,200872_02,15,前橋駅,0,0,1
平日_07時23分_系統267,07:41:00,07:41:00,201056_02,16,前橋駅,0,0,1
平日_07時23分_系統267,07:43:00,07:43:00,200189_02,17,前橋駅,0,0,1
平日_07時23分_系統267,07:45:00,07:45:00,200722_02,18,前橋駅,0,0,1
平日_07時23分_系統267,07:47:00,07:47:00,200343_02,19,前橋駅,0,0,1
平日_07時23分_系統267,07:48:00,07:48:00,200348_02,20,前橋駅,0,0,1
平日_07時23分_系統267,07:50:00,07:50:00,201071_02,21,前橋駅,0,0,1
平日_07時23分_系統267,07:52:00,07:52:00,200542_02,22,前橋駅,0,0,1
平日_07時23分_系統267,07:54:00,07:54:00,200141_02,23,前橋駅,0,0,1
平日_07時23分_系統267,07:56:00,07:56:00,200142_02,24,前橋駅,0,0,1
平日_07時23分_系統267,07:59:00,07:59:00,200262_02,25,前橋駅,0,0,1
平日_07時23分_系統267,08:00:00,08:00:00,201015_02,26,前橋駅,0,0,1
平日_07時23分_系統267,08:02:00,08:02:00,200379_02,27,前橋駅,0,0,1
平日_07時23分_系統267,08:04:00,08:04:00,200455_02,28,前橋駅,0,0,1
平日_07時23分_系統267,08:06:00,08:06:00,200702_02,29,前橋駅,0,0,1
平日_07時23分_系統267,08:08:00,08:08:00,200703_02,30,前橋駅,0,0,1
平日_07時23分_系統267,08:10:00,08:10:00,201081_02,31,前橋駅,0,0,1
平日_07時23分_系統267,08:12:00,08:12:00,200998_02,32,前橋駅,0,0,1
平日_07時23分_系統267,08:15:00,08:15:00,200718_10,33,前橋駅,1,0,1
平日_07時23分_系統586,07:23:00,07:23:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_07時23分_系統586,07:24:00,07:24:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時23分_系統586,07:26:00,07:26:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時23分_系統586,07:28:00,07:28:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時23分_系統586,07:28:00,07:28:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時23分_系統586,07:30:00,07:30:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時23分_系統586,07:31:00,07:31:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時23分_系統586,07:33:00,07:33:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時23分_系統586,07:34:00,07:34:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時23分_系統586,07:35:00,07:35:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時23分_系統586,07:38:00,07:38:00,200261_01,11,群馬大学荒牧,0,0,1
平日_07時23分_系統586,07:39:00,07:39:00,200503_02,12,群馬大学荒牧,0,0,1
平日_07時23分_系統586,07:40:00,07:40:00,200142_01,13,群馬大学荒牧,0,0,1
平日_07時23分_系統586,07:41:00,07:41:00,200141_01,14,群馬大学荒牧,0,0,1
平日_07時23分_系統586,07:42:00,07:42:00,200542_01,15,群馬大学荒牧,0,0,1
平日_07時23分_系統586,07:44:00,07:44:00,201071_01,16,群馬大学荒牧,0,0,1
平日_07時23分_系統586,07:46:00,07:46:00,200348_01,17,群馬大学荒牧,0,0,1
平日_07時23分_系統586,07:47:00,07:47:00,200343_01,18,群馬大学荒牧,0,0,1
平日_07時23分_系統586,07:48:00,07:48:00,200722_01,19,群馬大学荒牧,0,0,1
平日_07時23分_系統586,07:51:00,07:51:00,200273_01,20,群馬大学荒牧,1,0,1
平日_07時38分_系統267,07:38:00,07:38:00,200463_01,1,前橋駅,0,1,1
平日_07時38分_系統267,07:39:00,07:39:00,200768_02,2,前橋駅,0,0,1
平日_07時38分_系統267,07:40:00,07:40:00,200730_02,3,前橋駅,0,0,1
平日_07時38分_系統267,07:42:00,07:42:00,200827_02,4,前橋駅,0,0,1
平日_07時38分_系統267,07:44:00,07:44:00,200506_02,5,前橋駅,0,0,1
平日_07時38分_系統267,07:46:00,07:46:00,200017_02,6,前橋駅,0,0,1
平日_07時38分_系統267,07:47:00,07:47:00,200519_02,7,前橋駅,0,0,1
平日_07時38分_系統267,07:47:00,07:47:00,200987_02,8,前橋駅,0,0,1
平日_07時38分_系統267,07:49:00,07:49:00,200985_02,9,前橋駅,0,0,1
平日_07時38分_系統267,07:50:00,07:50:00,200895_02,10,前橋駅,0,0,1
平日_07時38分_系統267,07:52:00,07:52:00,200395_02,11,前橋駅,0,0,1
平日_07時38分_系統267,07:52:00,07:52:00,200153_02,12,前橋駅,0,0,1
平日_07時38分_系統267,07:53:00,07:53:00,201100_02,13,前橋駅,0,0,1
平日_07時38分_系統267,07:54:00,07:54:00,200981_02,14,前橋駅,0,0,1
平日_07時38分_系統267,07:55:00,07:55:00,200872_02,15,前橋駅,0,0,1
平日_07時38分_系統267,07:56:00,07:56:00,201056_02,16,前橋駅,0,0,1
平日_07時38分_系統267,07:58:00,07:58:00,200189_02,17,前橋駅,0,0,1
平日_07時38分_系統267,08:00:00,08:00:00,200722_02,18,前橋駅,0,0,1
平日_07時38分_系統267,08:02:00,08:02:00,200343_02,19,前橋駅,0,0,1
平日_07時38分_系統267,08:03:00,08:03:00,200348_02,20,前橋駅,0,0,1
平日_07時38分_系統267,08:05:00,08:05:00,201071_02,21,前橋駅,0,0,1
平日_07時38分_系統267,08:07:00,08:07:00,200542_02,22,前橋駅,0,0,1
平日_07時38分_系統267,08:09:00,08:09:00,200141_02,23,前橋駅,0,0,1
平日_07時38分_系統267,08:11:00,08:11:00,200142_02,24,前橋駅,0,0,1
平日_07時38分_系統267,08:14:00,08:14:00,200262_02,25,前橋駅,0,0,1
平日_07時38分_系統267,08:15:00,08:15:00,201015_02,26,前橋駅,0,0,1
平日_07時38分_系統267,08:17:00,08:17:00,200379_02,27,前橋駅,0,0,1
平日_07時38分_系統267,08:19:00,08:19:00,200455_02,28,前橋駅,0,0,1
平日_07時38分_系統267,08:21:00,08:21:00,200702_02,29,前橋駅,0,0,1
平日_07時38分_系統267,08:23:00,08:23:00,200703_02,30,前橋駅,0,0,1
平日_07時38分_系統267,08:25:00,08:25:00,201081_02,31,前橋駅,0,0,1
平日_07時38分_系統267,08:27:00,08:27:00,200998_02,32,前橋駅,0,0,1
平日_07時38分_系統267,08:30:00,08:30:00,200718_10,33,前橋駅,1,0,1
平日_07時38分_系統266,07:38:00,07:38:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
平日_07時38分_系統266,07:39:00,07:39:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:41:00,07:41:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:43:00,07:43:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:43:00,07:43:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:45:00,07:45:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:46:00,07:46:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:48:00,07:48:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:49:00,07:49:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:50:00,07:50:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:51:00,07:51:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:52:00,07:52:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:54:00,07:54:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:56:00,07:56:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:57:00,07:57:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,07:58:00,07:58:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_07時38分_系統266,08:00:00,08:00:00,200273_01,17,渋川駅,0,0,1
平日_07時38分_系統266,08:03:00,08:03:00,200189_01,18,渋川駅,0,0,1
平日_07時38分_系統266,08:05:00,08:05:00,201056_01,19,渋川駅,0,0,1
平日_07時38分_系統266,08:06:00,08:06:00,200872_01,20,渋川駅,0,0,1
平日_07時38分_系統266,08:07:00,08:07:00,200981_01,21,渋川駅,0,0,1
平日_07時38分_系統266,08:08:00,08:08:00,201100_01,22,渋川駅,0,0,1
平日_07時38分_系統266,08:09:00,08:09:00,200153_01,23,渋川駅,0,0,1
平日_07時38分_系統266,08:09:00,08:09:00,200395_01,24,渋川駅,0,0,1
平日_07時38分_系統266,08:10:00,08:10:00,200895_01,25,渋川駅,0,0,1
平日_07時38分_系統266,08:12:00,08:12:00,200985_01,26,渋川駅,0,0,1
平日_07時38分_系統266,08:12:00,08:12:00,200987_01,27,渋川駅,0,0,1
平日_07時38分_系統266,08:13:00,08:13:00,200519_01,28,渋川駅,0,0,1
平日_07時38分_系統266,08:14:00,08:14:00,200017_01,29,渋川駅,0,0,1
平日_07時38分_系統266,08:16:00,08:16:00,200506_01,30,渋川駅,0,0,1
平日_07時38分_系統266,08:18:00,08:18:00,200827_01,31,渋川駅,0,0,1
平日_07時38分_系統266,08:20:00,08:20:00,200730_01,32,渋川駅,0,0,1
平日_07時38分_系統266,08:21:00,08:21:00,200768_01,33,渋川駅,0,0,1
平日_07時38分_系統266,08:24:00,08:24:00,200463_10,34,渋川駅,1,0,1
平日_07時40分_系統580,07:40:00,07:40:00,200718_02,1,群馬大学荒牧,0,1,1
平日_07時40分_系統580,07:41:00,07:41:00,200998_01,2,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:43:00,07:43:00,201081_01,3,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:45:00,07:45:00,200703_01,4,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:45:00,07:45:00,200702_01,5,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:47:00,07:47:00,200455_01,6,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:48:00,07:48:00,200379_01,7,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:50:00,07:50:00,201015_01,8,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:51:00,07:51:00,200262_01,9,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:52:00,07:52:00,200142_01,10,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:53:00,07:53:00,200141_01,11,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:54:00,07:54:00,200542_01,12,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:56:00,07:56:00,201071_01,13,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:58:00,07:58:00,200348_01,14,群馬大学荒牧,0,0,1
平日_07時40分_系統580,07:59:00,07:59:00,200343_01,15,群馬大学荒牧,0,0,1
平日_07時40分_系統580,08:00:00,08:00:00,200722_01,16,群馬大学荒牧,0,0,1
平日_07時40分_系統580,08:03:00,08:03:00,200273_01,17,群馬大学荒牧,1,0,1
平日_07時42分_系統586,07:42:00,07:42:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_07時42分_系統586,07:43:00,07:43:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時42分_系統586,07:45:00,07:45:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時42分_系統586,07:47:00,07:47:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時42分_系統586,07:47:00,07:47:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時42分_系統586,07:49:00,07:49:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時42分_系統586,07:50:00,07:50:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時42分_系統586,07:52:00,07:52:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時42分_系統586,07:53:00,07:53:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時42分_系統586,07:54:00,07:54:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時42分_系統586,07:57:00,07:57:00,200261_01,11,群馬大学荒牧,0,0,1
平日_07時42分_系統586,07:58:00,07:58:00,200503_02,12,群馬大学荒牧,0,0,1
平日_07時42分_系統586,07:59:00,07:59:00,200142_01,13,群馬大学荒牧,0,0,1
平日_07時42分_系統586,08:00:00,08:00:00,200141_01,14,群馬大学荒牧,0,0,1
平日_07時42分_系統586,08:01:00,08:01:00,200542_01,15,群馬大学荒牧,0,0,1
平日_07時42分_系統586,08:03:00,08:03:00,201071_01,16,群馬大学荒牧,0,0,1
平日_07時42分_系統586,08:05:00,08:05:00,200348_01,17,群馬大学荒牧,0,0,1
平日_07時42分_系統586,08:06:00,08:06:00,200343_01,18,群馬大学荒牧,0,0,1
平日_07時42分_系統586,08:07:00,08:07:00,200722_01,19,群馬大学荒牧,0,0,1
平日_07時42分_系統586,08:10:00,08:10:00,200273_01,20,群馬大学荒牧,1,0,1
平日_07時44分_系統263,07:44:00,07:44:00,210463_05,1,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,1,1
平日_07時44分_系統263,07:45:00,07:45:00,200007_01,2,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:46:00,07:46:00,200430_01,3,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:47:00,07:47:00,200477_01,4,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:48:00,07:48:00,200476_01,5,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:49:00,07:49:00,200704_02,6,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:50:00,07:50:00,200467_01,7,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:51:00,07:51:00,200466_02,8,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:52:00,07:52:00,200468_02,9,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:57:00,07:57:00,200463_01,10,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:58:00,07:58:00,200768_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,07:59:00,07:59:00,200730_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:01:00,08:01:00,200827_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:02:00,08:02:00,200506_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:03:00,08:03:00,200017_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:04:00,08:04:00,200519_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:04:00,08:04:00,200987_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:06:00,08:06:00,200985_02,18,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:07:00,08:07:00,200895_02,19,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:09:00,08:09:00,200395_02,20,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:09:00,08:09:00,200153_02,21,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:10:00,08:10:00,201100_02,22,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:11:00,08:11:00,200981_02,23,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:12:00,08:12:00,200872_02,24,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:13:00,08:13:00,201056_02,25,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:15:00,08:15:00,200189_02,26,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_07時44分_系統263,08:18:00,08:18:00,200273_01,27,前橋駅,0,0,1
平日_07時44分_系統263,08:20:00,08:20:00,200722_02,28,前橋駅,0,0,1
平日_07時44分_系統263,08:21:00,08:21:00,200343_02,29,前橋駅,0,0,1
平日_07時44分_系統263,08:22:00,08:22:00,200348_02,30,前橋駅,0,0,1
平日_07時44分_系統263,08:24:00,08:24:00,201071_02,31,前橋駅,0,0,1
平日_07時44分_系統263,08:26:00,08:26:00,200542_02,32,前橋駅,0,0,1
平日_07時44分_系統263,08:28:00,08:28:00,200141_02,33,前橋駅,0,0,1
平日_07時44分_系統263,08:29:00,08:29:00,200142_02,34,前橋駅,0,0,1
平日_07時44分_系統263,08:31:00,08:31:00,200262_02,35,前橋駅,0,0,1
平日_07時44分_系統263,08:32:00,08:32:00,201015_02,36,前橋駅,0,0,1
平日_07時44分_系統263,08:34:00,08:34:00,200379_02,37,前橋駅,0,0,1
平日_07時44分_系統263,08:35:00,08:35:00,200455_02,38,前橋駅,0,0,1
平日_07時44分_系統263,08:37:00,08:37:00,200702_02,39,前橋駅,0,0,1
平日_07時44分_系統263,08:38:00,08:38:00,200703_02,40,前橋駅,0,0,1
平日_07時44分_系統263,08:40:00,08:40:00,201081_02,41,前橋駅,0,0,1
平日_07時44分_系統263,08:42:00,08:42:00,200998_02,42,前橋駅,0,0,1
平日_07時44分_系統263,08:45:00,08:45:00,200718_10,43,前橋駅,1,0,1
平日_07時52分_系統264,07:52:00,07:52:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
平日_07時52分_系統264,07:53:00,07:53:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,07:55:00,07:55:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,07:57:00,07:57:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,07:57:00,07:57:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,07:59:00,07:59:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:00:00,08:00:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:02:00,08:02:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:03:00,08:03:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:04:00,08:04:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:05:00,08:05:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:06:00,08:06:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:08:00,08:08:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:10:00,08:10:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:11:00,08:11:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:12:00,08:12:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:14:00,08:14:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:17:00,08:17:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:19:00,08:19:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:20:00,08:20:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:21:00,08:21:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:22:00,08:22:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:23:00,08:23:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:23:00,08:23:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:24:00,08:24:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:26:00,08:26:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:26:00,08:26:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:27:00,08:27:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:28:00,08:28:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:30:00,08:30:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:32:00,08:32:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:34:00,08:34:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:35:00,08:35:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
平日_07時52分_系統264,08:37:00,08:37:00,200463_06,34,渋川市内循環,0,0,1
平日_07時52分_系統264,08:38:00,08:38:00,200468_01,35,渋川市内循環,0,0,1
平日_07時52分_系統264,08:40:00,08:40:00,200466_01,36,渋川市内循環,0,0,1
平日_07時52分_系統264,08:41:00,08:41:00,200704_01,37,渋川市内循環,0,0,1
平日_07時52分_系統264,08:42:00,08:42:00,200476_02,38,渋川市内循環,0,0,1
平日_07時52分_系統264,08:43:00,08:43:00,200477_02,39,渋川市内循環,0,0,1
平日_07時52分_系統264,08:44:00,08:44:00,200430_02,40,渋川市内循環,0,0,1
平日_07時52分_系統264,08:45:00,08:45:00,200007_02,41,渋川市内循環,0,0,1
平日_07時52分_系統264,08:50:00,08:50:00,210463_10,42,渋川市内循環,1,0,1
平日_07時55分_系統270,07:55:00,07:55:00,200718_02,1,小児医療センター（群馬大学荒牧 経由）,0,1,1
平日_07時55分_系統270,07:56:00,07:56:00,200998_01,2,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,07:58:00,07:58:00,201081_01,3,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:00:00,08:00:00,200703_01,4,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:00:00,08:00:00,200702_01,5,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:02:00,08:02:00,200455_01,6,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:03:00,08:03:00,200379_01,7,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:05:00,08:05:00,201015_01,8,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:06:00,08:06:00,200262_01,9,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:07:00,08:07:00,200142_01,10,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:08:00,08:08:00,200141_01,11,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:09:00,08:09:00,200542_01,12,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:11:00,08:11:00,201071_01,13,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:13:00,08:13:00,200348_01,14,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:14:00,08:14:00,200343_01,15,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:15:00,08:15:00,200722_01,16,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_07時55分_系統270,08:17:00,08:17:00,200273_01,17,小児医療センター,0,0,1
平日_07時55分_系統270,08:20:00,08:20:00,200189_01,18,小児医療センター,0,0,1
平日_07時55分_系統270,08:22:00,08:22:00,201056_01,19,小児医療センター,0,0,1
平日_07時55分_系統270,08:23:00,08:23:00,200872_01,20,小児医療センター,0,0,1
平日_07時55分_系統270,08:24:00,08:24:00,200981_01,21,小児医療センター,0,0,1
平日_07時55分_系統270,08:25:00,08:25:00,201100_03,22,小児医療センター,0,0,1
平日_07時55分_系統270,08:27:00,08:27:00,200474_01,23,小児医療センター,0,0,1
平日_07時55分_系統270,08:29:00,08:29:00,200484_01,24,小児医療センター,1,0,1
平日_07時57分_系統583,07:57:00,07:57:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_07時57分_系統583,07:58:00,07:58:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_07時57分_系統583,08:00:00,08:00:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_07時57分_系統583,08:01:00,08:01:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_07時57分_系統583,08:04:00,08:04:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_07時57分_系統583,08:07:00,08:07:00,200927_01,6,前橋駅,0,0,1
平日_07時57分_系統583,08:07:00,08:07:00,200800_02,7,前橋駅,0,0,1
平日_07時57分_系統583,08:08:00,08:08:00,200928_02,8,前橋駅,0,0,1
平日_07時57分_系統583,08:10:00,08:10:00,201071_02,9,前橋駅,0,0,1
平日_07時57分_系統583,08:12:00,08:12:00,200542_02,10,前橋駅,0,0,1
平日_07時57分_系統583,08:14:00,08:14:00,200141_02,11,前橋駅,0,0,1
平日_07時57分_系統583,08:16:00,08:16:00,200142_02,12,前橋駅,0,0,1
平日_07時57分_系統583,08:19:00,08:19:00,200262_02,13,前橋駅,0,0,1
平日_07時57分_系統583,08:20:00,08:20:00,201015_02,14,前橋駅,0,0,1
平日_07時57分_系統583,08:22:00,08:22:00,200379_02,15,前橋駅,0,0,1
平日_07時57分_系統583,08:24:00,08:24:00,200455_02,16,前橋駅,0,0,1
平日_07時57分_系統583,08:26:00,08:26:00,200702_02,17,前橋駅,0,0,1
平日_07時57分_系統583,08:28:00,08:28:00,200703_02,18,前橋駅,0,0,1
平日_07時57分_系統583,08:30:00,08:30:00,201081_02,19,前橋駅,0,0,1
平日_07時57分_系統583,08:32:00,08:32:00,200998_02,20,前橋駅,0,0,1
平日_07時57分_系統583,08:35:00,08:35:00,200718_10,21,前橋駅,1,0,1
平日_07時58分_系統586,07:58:00,07:58:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_07時58分_系統586,07:59:00,07:59:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時58分_系統586,08:01:00,08:01:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時58分_系統586,08:03:00,08:03:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時58分_系統586,08:03:00,08:03:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時58分_系統586,08:05:00,08:05:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時58分_系統586,08:06:00,08:06:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時58分_系統586,08:08:00,08:08:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時58分_系統586,08:09:00,08:09:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時58分_系統586,08:10:00,08:10:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_07時58分_系統586,08:13:00,08:13:00,200261_01,11,群馬大学荒牧,0,0,1
平日_07時58分_系統586,08:14:00,08:14:00,200503_02,12,群馬大学荒牧,0,0,1
平日_07時58分_系統586,08:15:00,08:15:00,200142_01,13,群馬大学荒牧,0,0,1
平日_07時58分_系統586,08:16:00,08:16:00,200141_01,14,群馬大学荒牧,0,0,1
平日_07時58分_系統586,08:17:00,08:17:00,200542_01,15,群馬大学荒牧,0,0,1
平日_07時58分_系統586,08:19:00,08:19:00,201071_01,16,群馬大学荒牧,0,0,1
平日_07時58分_系統586,08:21:00,08:21:00,200348_01,17,群馬大学荒牧,0,0,1
平日_07時58分_系統586,08:22:00,08:22:00,200343_01,18,群馬大学荒牧,0,0,1
平日_07時58分_系統586,08:23:00,08:23:00,200722_01,19,群馬大学荒牧,0,0,1
平日_07時58分_系統586,08:26:00,08:26:00,200273_01,20,群馬大学荒牧,1,0,1
平日_08時10分_系統266,08:10:00,08:10:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
平日_08時10分_系統266,08:11:00,08:11:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:13:00,08:13:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:15:00,08:15:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:15:00,08:15:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:17:00,08:17:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:18:00,08:18:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:20:00,08:20:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:21:00,08:21:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:22:00,08:22:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:23:00,08:23:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:24:00,08:24:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:26:00,08:26:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:28:00,08:28:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:29:00,08:29:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:30:00,08:30:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時10分_系統266,08:32:00,08:32:00,200273_01,17,渋川駅,0,0,1
平日_08時10分_系統266,08:35:00,08:35:00,200189_01,18,渋川駅,0,0,1
平日_08時10分_系統266,08:37:00,08:37:00,201056_01,19,渋川駅,0,0,1
平日_08時10分_系統266,08:38:00,08:38:00,200872_01,20,渋川駅,0,0,1
平日_08時10分_系統266,08:39:00,08:39:00,200981_01,21,渋川駅,0,0,1
平日_08時10分_系統266,08:40:00,08:40:00,201100_01,22,渋川駅,0,0,1
平日_08時10分_系統266,08:41:00,08:41:00,200153_01,23,渋川駅,0,0,1
平日_08時10分_系統266,08:41:00,08:41:00,200395_01,24,渋川駅,0,0,1
平日_08時10分_系統266,08:42:00,08:42:00,200895_01,25,渋川駅,0,0,1
平日_08時10分_系統266,08:44:00,08:44:00,200985_01,26,渋川駅,0,0,1
平日_08時10分_系統266,08:44:00,08:44:00,200987_01,27,渋川駅,0,0,1
平日_08時10分_系統266,08:45:00,08:45:00,200519_01,28,渋川駅,0,0,1
平日_08時10分_系統266,08:46:00,08:46:00,200017_01,29,渋川駅,0,0,1
平日_08時10分_系統266,08:48:00,08:48:00,200506_01,30,渋川駅,0,0,1
平日_08時10分_系統266,08:49:00,08:49:00,200827_01,31,渋川駅,0,0,1
平日_08時10分_系統266,08:51:00,08:51:00,200730_01,32,渋川駅,0,0,1
平日_08時10分_系統266,08:52:00,08:52:00,200768_01,33,渋川駅,0,0,1
平日_08時10分_系統266,08:55:00,08:55:00,200463_10,34,渋川駅,1,0,1
平日_08時23分_系統267,08:23:00,08:23:00,200463_01,1,前橋駅,0,1,1
平日_08時23分_系統267,08:24:00,08:24:00,200768_02,2,前橋駅,0,0,1
平日_08時23分_系統267,08:25:00,08:25:00,200730_02,3,前橋駅,0,0,1
平日_08時23分_系統267,08:27:00,08:27:00,200827_02,4,前橋駅,0,0,1
平日_08時23分_系統267,08:28:00,08:28:00,200506_02,5,前橋駅,0,0,1
平日_08時23分_系統267,08:29:00,08:29:00,200017_02,6,前橋駅,0,0,1
平日_08時23分_系統267,08:30:00,08:30:00,200519_02,7,前橋駅,0,0,1
平日_08時23分_系統267,08:30:00,08:30:00,200987_02,8,前橋駅,0,0,1
平日_08時23分_系統267,08:32:00,08:32:00,200985_02,9,前橋駅,0,0,1
平日_08時23分_系統267,08:33:00,08:33:00,200895_02,10,前橋駅,0,0,1
平日_08時23分_系統267,08:35:00,08:35:00,200395_02,11,前橋駅,0,0,1
平日_08時23分_系統267,08:35:00,08:35:00,200153_02,12,前橋駅,0,0,1
平日_08時23分_系統267,08:36:00,08:36:00,201100_02,13,前橋駅,0,0,1
平日_08時23分_系統267,08:37:00,08:37:00,200981_02,14,前橋駅,0,0,1
平日_08時23分_系統267,08:38:00,08:38:00,200872_02,15,前橋駅,0,0,1
平日_08時23分_系統267,08:39:00,08:39:00,201056_02,16,前橋駅,0,0,1
平日_08時23分_系統267,08:41:00,08:41:00,200189_02,17,前橋駅,0,0,1
平日_08時23分_系統267,08:42:00,08:42:00,200722_02,18,前橋駅,0,0,1
平日_08時23分_系統267,08:43:00,08:43:00,200343_02,19,前橋駅,0,0,1
平日_08時23分_系統267,08:44:00,08:44:00,200348_02,20,前橋駅,0,0,1
平日_08時23分_系統267,08:46:00,08:46:00,201071_02,21,前橋駅,0,0,1
平日_08時23分_系統267,08:48:00,08:48:00,200542_02,22,前橋駅,0,0,1
平日_08時23分_系統267,08:50:00,08:50:00,200141_02,23,前橋駅,0,0,1
平日_08時23分_系統267,08:51:00,08:51:00,200142_02,24,前橋駅,0,0,1
平日_08時23分_系統267,08:53:00,08:53:00,200262_02,25,前橋駅,0,0,1
平日_08時23分_系統267,08:54:00,08:54:00,201015_02,26,前橋駅,0,0,1
平日_08時23分_系統267,08:56:00,08:56:00,200379_02,27,前橋駅,0,0,1
平日_08時23分_系統267,08:57:00,08:57:00,200455_02,28,前橋駅,0,0,1
平日_08時23分_系統267,08:59:00,08:59:00,200702_02,29,前橋駅,0,0,1
平日_08時23分_系統267,09:00:00,09:00:00,200703_02,30,前橋駅,0,0,1
平日_08時23分_系統267,09:02:00,09:02:00,201081_02,31,前橋駅,0,0,1
平日_08時23分_系統267,09:04:00,09:04:00,200998_02,32,前橋駅,0,0,1
平日_08時23分_系統267,09:07:00,09:07:00,200718_10,33,前橋駅,1,0,1
平日_08時25分_系統583,08:25:00,08:25:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_08時25分_系統583,08:27:00,08:27:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_08時25分_系統583,08:28:00,08:28:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_08時25分_系統583,08:29:00,08:29:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_08時25分_系統583,08:32:00,08:32:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_08時25分_系統583,08:35:00,08:35:00,200927_01,6,前橋駅,0,0,1
平日_08時25分_系統583,08:35:00,08:35:00,200800_02,7,前橋駅,0,0,1
平日_08時25分_系統583,08:36:00,08:36:00,200928_02,8,前橋駅,0,0,1
平日_08時25分_系統583,08:38:00,08:38:00,201071_02,9,前橋駅,0,0,1
平日_08時25分_系統583,08:40:00,08:40:00,200542_02,10,前橋駅,0,0,1
平日_08時25分_系統583,08:42:00,08:42:00,200141_02,11,前橋駅,0,0,1
平日_08時25分_系統583,08:43:00,08:43:00,200142_02,12,前橋駅,0,0,1
平日_08時25分_系統583,08:45:00,08:45:00,200262_02,13,前橋駅,0,0,1
平日_08時25分_系統583,08:46:00,08:46:00,201015_02,14,前橋駅,0,0,1
平日_08時25分_系統583,08:48:00,08:48:00,200379_02,15,前橋駅,0,0,1
平日_08時25分_系統583,08:49:00,08:49:00,200455_02,16,前橋駅,0,0,1
平日_08時25分_系統583,08:51:00,08:51:00,200702_02,17,前橋駅,0,0,1
平日_08時25分_系統583,08:52:00,08:52:00,200703_02,18,前橋駅,0,0,1
平日_08時25分_系統583,08:54:00,08:54:00,201081_02,19,前橋駅,0,0,1
平日_08時25分_系統583,08:56:00,08:56:00,200998_02,20,前橋駅,0,0,1
平日_08時25分_系統583,08:59:00,08:59:00,200718_10,21,前橋駅,1,0,1
平日_08時27分_系統266,08:27:00,08:27:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
平日_08時27分_系統266,08:28:00,08:28:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:30:00,08:30:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:32:00,08:32:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:32:00,08:32:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:34:00,08:34:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:35:00,08:35:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:37:00,08:37:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:38:00,08:38:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:39:00,08:39:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:40:00,08:40:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:41:00,08:41:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:43:00,08:43:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:45:00,08:45:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:46:00,08:46:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:47:00,08:47:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_08時27分_系統266,08:49:00,08:49:00,200273_01,17,渋川駅,0,0,1
平日_08時27分_系統266,08:52:00,08:52:00,200189_01,18,渋川駅,0,0,1
平日_08時27分_系統266,08:54:00,08:54:00,201056_01,19,渋川駅,0,0,1
平日_08時27分_系統266,08:55:00,08:55:00,200872_01,20,渋川駅,0,0,1
平日_08時27分_系統266,08:56:00,08:56:00,200981_01,21,渋川駅,0,0,1
平日_08時27分_系統266,08:57:00,08:57:00,201100_01,22,渋川駅,0,0,1
平日_08時27分_系統266,08:58:00,08:58:00,200153_01,23,渋川駅,0,0,1
平日_08時27分_系統266,08:58:00,08:58:00,200395_01,24,渋川駅,0,0,1
平日_08時27分_系統266,08:59:00,08:59:00,200895_01,25,渋川駅,0,0,1
平日_08時27分_系統266,09:01:00,09:01:00,200985_01,26,渋川駅,0,0,1
平日_08時27分_系統266,09:01:00,09:01:00,200987_01,27,渋川駅,0,0,1
平日_08時27分_系統266,09:02:00,09:02:00,200519_01,28,渋川駅,0,0,1
平日_08時27分_系統266,09:03:00,09:03:00,200017_01,29,渋川駅,0,0,1
平日_08時27分_系統266,09:05:00,09:05:00,200506_01,30,渋川駅,0,0,1
平日_08時27分_系統266,09:06:00,09:06:00,200827_01,31,渋川駅,0,0,1
平日_08時27分_系統266,09:08:00,09:08:00,200730_01,32,渋川駅,0,0,1
平日_08時27分_系統266,09:09:00,09:09:00,200768_01,33,渋川駅,0,0,1
平日_08時27分_系統266,09:12:00,09:12:00,200463_10,34,渋川駅,1,0,1
平日_08時40分_系統586,08:40:00,08:40:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_08時40分_系統586,08:41:00,08:41:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_08時40分_系統586,08:43:00,08:43:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_08時40分_系統586,08:45:00,08:45:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_08時40分_系統586,08:45:00,08:45:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_08時40分_系統586,08:47:00,08:47:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_08時40分_系統586,08:48:00,08:48:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_08時40分_系統586,08:50:00,08:50:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_08時40分_系統586,08:51:00,08:51:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_08時40分_系統586,08:52:00,08:52:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_08時40分_系統586,08:55:00,08:55:00,200261_01,11,群馬大学荒牧,0,0,1
平日_08時40分_系統586,08:56:00,08:56:00,200503_02,12,群馬大学荒牧,0,0,1
平日_08時40分_系統586,08:57:00,08:57:00,200142_01,13,群馬大学荒牧,0,0,1
平日_08時40分_系統586,08:58:00,08:58:00,200141_01,14,群馬大学荒牧,0,0,1
平日_08時40分_系統586,08:59:00,08:59:00,200542_01,15,群馬大学荒牧,0,0,1
平日_08時40分_系統586,09:01:00,09:01:00,201071_01,16,群馬大学荒牧,0,0,1
平日_08時40分_系統586,09:03:00,09:03:00,200348_01,17,群馬大学荒牧,0,0,1
平日_08時40分_系統586,09:04:00,09:04:00,200343_01,18,群馬大学荒牧,0,0,1
平日_08時40分_系統586,09:05:00,09:05:00,200722_01,19,群馬大学荒牧,0,0,1
平日_08時40分_系統586,09:08:00,09:08:00,200273_01,20,群馬大学荒牧,1,0,1
平日_08時47分_系統583,08:47:00,08:47:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_08時47分_系統583,08:49:00,08:49:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_08時47分_系統583,08:50:00,08:50:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_08時47分_系統583,08:51:00,08:51:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_08時47分_系統583,08:54:00,08:54:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_08時47分_系統583,08:57:00,08:57:00,200927_01,6,前橋駅,0,0,1
平日_08時47分_系統583,08:57:00,08:57:00,200800_02,7,前橋駅,0,0,1
平日_08時47分_系統583,08:58:00,08:58:00,200928_02,8,前橋駅,0,0,1
平日_08時47分_系統583,09:00:00,09:00:00,201071_02,9,前橋駅,0,0,1
平日_08時47分_系統583,09:02:00,09:02:00,200542_02,10,前橋駅,0,0,1
平日_08時47分_系統583,09:04:00,09:04:00,200141_02,11,前橋駅,0,0,1
平日_08時47分_系統583,09:05:00,09:05:00,200142_02,12,前橋駅,0,0,1
平日_08時47分_系統583,09:07:00,09:07:00,200262_02,13,前橋駅,0,0,1
平日_08時47分_系統583,09:08:00,09:08:00,201015_02,14,前橋駅,0,0,1
平日_08時47分_系統583,09:10:00,09:10:00,200379_02,15,前橋駅,0,0,1
平日_08時47分_系統583,09:11:00,09:11:00,200455_02,16,前橋駅,0,0,1
平日_08時47分_系統583,09:13:00,09:13:00,200702_02,17,前橋駅,0,0,1
平日_08時47分_系統583,09:14:00,09:14:00,200703_02,18,前橋駅,0,0,1
平日_08時47分_系統583,09:16:00,09:16:00,201081_02,19,前橋駅,0,0,1
平日_08時47分_系統583,09:18:00,09:18:00,200998_02,20,前橋駅,0,0,1
平日_08時47分_系統583,09:21:00,09:21:00,200718_10,21,前橋駅,1,0,1
平日_08時55分_系統267,08:55:00,08:55:00,200463_01,1,前橋駅,0,1,1
平日_08時55分_系統267,08:56:00,08:56:00,200768_02,2,前橋駅,0,0,1
平日_08時55分_系統267,08:57:00,08:57:00,200730_02,3,前橋駅,0,0,1
平日_08時55分_系統267,08:59:00,08:59:00,200827_02,4,前橋駅,0,0,1
平日_08時55分_系統267,09:00:00,09:00:00,200506_02,5,前橋駅,0,0,1
平日_08時55分_系統267,09:01:00,09:01:00,200017_02,6,前橋駅,0,0,1
平日_08時55分_系統267,09:02:00,09:02:00,200519_02,7,前橋駅,0,0,1
平日_08時55分_系統267,09:02:00,09:02:00,200987_02,8,前橋駅,0,0,1
平日_08時55分_系統267,09:04:00,09:04:00,200985_02,9,前橋駅,0,0,1
平日_08時55分_系統267,09:05:00,09:05:00,200895_02,10,前橋駅,0,0,1
平日_08時55分_系統267,09:07:00,09:07:00,200395_02,11,前橋駅,0,0,1
平日_08時55分_系統267,09:07:00,09:07:00,200153_02,12,前橋駅,0,0,1
平日_08時55分_系統267,09:08:00,09:08:00,201100_02,13,前橋駅,0,0,1
平日_08時55分_系統267,09:09:00,09:09:00,200981_02,14,前橋駅,0,0,1
平日_08時55分_系統267,09:10:00,09:10:00,200872_02,15,前橋駅,0,0,1
平日_08時55分_系統267,09:11:00,09:11:00,201056_02,16,前橋駅,0,0,1
平日_08時55分_系統267,09:13:00,09:13:00,200189_02,17,前橋駅,0,0,1
平日_08時55分_系統267,09:14:00,09:14:00,200722_02,18,前橋駅,0,0,1
平日_08時55分_系統267,09:15:00,09:15:00,200343_02,19,前橋駅,0,0,1
平日_08時55分_系統267,09:16:00,09:16:00,200348_02,20,前橋駅,0,0,1
平日_08時55分_系統267,09:18:00,09:18:00,201071_02,21,前橋駅,0,0,1
平日_08時55分_系統267,09:20:00,09:20:00,200542_02,22,前橋駅,0,0,1
平日_08時55分_系統267,09:22:00,09:22:00,200141_02,23,前橋駅,0,0,1
平日_08時55分_系統267,09:23:00,09:23:00,200142_02,24,前橋駅,0,0,1
平日_08時55分_系統267,09:25:00,09:25:00,200262_02,25,前橋駅,0,0,1
平日_08時55分_系統267,09:26:00,09:26:00,201015_02,26,前橋駅,0,0,1
平日_08時55分_系統267,09:28:00,09:28:00,200379_02,27,前橋駅,0,0,1
平日_08時55分_系統267,09:29:00,09:29:00,200455_02,28,前橋駅,0,0,1
平日_08時55分_系統267,09:31:00,09:31:00,200702_02,29,前橋駅,0,0,1
平日_08時55分_系統267,09:32:00,09:32:00,200703_02,30,前橋駅,0,0,1
平日_08時55分_系統267,09:34:00,09:34:00,201081_02,31,前橋駅,0,0,1
平日_08時55分_系統267,09:36:00,09:36:00,200998_02,32,前橋駅,0,0,1
平日_08時55分_系統267,09:39:00,09:39:00,200718_10,33,前橋駅,1,0,1
平日_08時56分_系統273,08:56:00,08:56:00,200484_01,1,前橋駅,0,1,1
平日_08時56分_系統273,08:57:00,08:57:00,200474_02,2,前橋駅,0,0,1
平日_08時56分_系統273,08:59:00,08:59:00,201100_04,3,前橋駅,0,0,1
平日_08時56分_系統273,09:01:00,09:01:00,200981_02,4,前橋駅,0,0,1
平日_08時56分_系統273,09:02:00,09:02:00,200872_02,5,前橋駅,0,0,1
平日_08時56分_系統273,09:03:00,09:03:00,201056_02,6,前橋駅,0,0,1
平日_08時56分_系統273,09:05:00,09:05:00,200189_02,7,前橋駅,0,0,1
平日_08時56分_系統273,09:06:00,09:06:00,200722_02,8,前橋駅,0,0,1
平日_08時56分_系統273,09:07:00,09:07:00,200343_02,9,前橋駅,0,0,1
平日_08時56分_系統273,09:08:00,09:08:00,200348_02,10,前橋駅,0,0,1
平日_08時56分_系統273,09:10:00,09:10:00,201071_02,11,前橋駅,0,0,1
平日_08時56分_系統273,09:12:00,09:12:00,200542_02,12,前橋駅,0,0,1
平日_08時56分_系統273,09:14:00,09:14:00,200141_02,13,前橋駅,0,0,1
平日_08時56分_系統273,09:15:00,09:15:00,200142_02,14,前橋駅,0,0,1
平日_08時56分_系統273,09:17:00,09:17:00,200262_02,15,前橋駅,0,0,1
平日_08時56分_系統273,09:18:00,09:18:00,201015_02,16,前橋駅,0,0,1
平日_08時56分_系統273,09:20:00,09:20:00,200379_02,17,前橋駅,0,0,1
平日_08時56分_系統273,09:21:00,09:21:00,200455_02,18,前橋駅,0,0,1
平日_08時56分_系統273,09:23:00,09:23:00,200702_02,19,前橋駅,0,0,1
平日_08時56分_系統273,09:24:00,09:24:00,200703_02,20,前橋駅,0,0,1
平日_08時56分_系統273,09:26:00,09:26:00,201081_02,21,前橋駅,0,0,1
平日_08時56分_系統273,09:28:00,09:28:00,200998_02,22,前橋駅,0,0,1
平日_08時56分_系統273,09:31:00,09:31:00,200718_10,23,前橋駅,1,0,1
平日_08時57分_系統270,08:57:00,08:57:00,200718_02,1,小児医療センター（群馬大学荒牧 経由）,0,1,1
平日_08時57分_系統270,08:58:00,08:58:00,200998_01,2,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:00:00,09:00:00,201081_01,3,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:02:00,09:02:00,200703_01,4,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:02:00,09:02:00,200702_01,5,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:04:00,09:04:00,200455_01,6,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:05:00,09:05:00,200379_01,7,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:07:00,09:07:00,201015_01,8,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:08:00,09:08:00,200262_01,9,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:09:00,09:09:00,200142_01,10,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:10:00,09:10:00,200141_01,11,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:11:00,09:11:00,200542_01,12,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:13:00,09:13:00,201071_01,13,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:15:00,09:15:00,200348_01,14,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:16:00,09:16:00,200343_01,15,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:17:00,09:17:00,200722_01,16,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_08時57分_系統270,09:19:00,09:19:00,200273_01,17,小児医療センター,0,0,1
平日_08時57分_系統270,09:22:00,09:22:00,200189_01,18,小児医療センター,0,0,1
平日_08時57分_系統270,09:24:00,09:24:00,201056_01,19,小児医療センター,0,0,1
平日_08時57分_系統270,09:25:00,09:25:00,200872_01,20,小児医療センター,0,0,1
平日_08時57分_系統270,09:26:00,09:26:00,200981_01,21,小児医療センター,0,0,1
平日_08時57分_系統270,09:27:00,09:27:00,201100_03,22,小児医療センター,0,0,1
平日_08時57分_系統270,09:29:00,09:29:00,200474_01,23,小児医療センター,0,0,1
平日_08時57分_系統270,09:31:00,09:31:00,200484_01,24,小児医療センター,1,0,1
平日_09時05分_系統586,09:05:00,09:05:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_09時05分_系統586,09:06:00,09:06:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時05分_系統586,09:08:00,09:08:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時05分_系統586,09:10:00,09:10:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時05分_系統586,09:10:00,09:10:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時05分_系統586,09:12:00,09:12:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時05分_系統586,09:13:00,09:13:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時05分_系統586,09:15:00,09:15:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時05分_系統586,09:16:00,09:16:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時05分_系統586,09:17:00,09:17:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時05分_系統586,09:20:00,09:20:00,200261_01,11,群馬大学荒牧,0,0,1
平日_09時05分_系統586,09:21:00,09:21:00,200503_02,12,群馬大学荒牧,0,0,1
平日_09時05分_系統586,09:22:00,09:22:00,200142_01,13,群馬大学荒牧,0,0,1
平日_09時05分_系統586,09:23:00,09:23:00,200141_01,14,群馬大学荒牧,0,0,1
平日_09時05分_系統586,09:24:00,09:24:00,200542_01,15,群馬大学荒牧,0,0,1
平日_09時05分_系統586,09:26:00,09:26:00,201071_01,16,群馬大学荒牧,0,0,1
平日_09時05分_系統586,09:28:00,09:28:00,200348_01,17,群馬大学荒牧,0,0,1
平日_09時05分_系統586,09:29:00,09:29:00,200343_01,18,群馬大学荒牧,0,0,1
平日_09時05分_系統586,09:30:00,09:30:00,200722_01,19,群馬大学荒牧,0,0,1
平日_09時05分_系統586,09:33:00,09:33:00,200273_01,20,群馬大学荒牧,1,0,1
平日_09時16分_系統264,09:16:00,09:16:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
平日_09時16分_系統264,09:17:00,09:17:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:19:00,09:19:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:21:00,09:21:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:21:00,09:21:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:23:00,09:23:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:24:00,09:24:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:26:00,09:26:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:27:00,09:27:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:28:00,09:28:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:29:00,09:29:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:30:00,09:30:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:32:00,09:32:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:34:00,09:34:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:35:00,09:35:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:36:00,09:36:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:38:00,09:38:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:41:00,09:41:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:43:00,09:43:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:44:00,09:44:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:45:00,09:45:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:46:00,09:46:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:47:00,09:47:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:47:00,09:47:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:48:00,09:48:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:50:00,09:50:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:50:00,09:50:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:51:00,09:51:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:52:00,09:52:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:54:00,09:54:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:55:00,09:55:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:57:00,09:57:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,09:58:00,09:58:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
平日_09時16分_系統264,10:00:00,10:00:00,200463_06,34,渋川市内循環,0,0,1
平日_09時16分_系統264,10:01:00,10:01:00,200468_01,35,渋川市内循環,0,0,1
平日_09時16分_系統264,10:03:00,10:03:00,200466_01,36,渋川市内循環,0,0,1
平日_09時16分_系統264,10:04:00,10:04:00,200704_01,37,渋川市内循環,0,0,1
平日_09時16分_系統264,10:05:00,10:05:00,200476_02,38,渋川市内循環,0,0,1
平日_09時16分_系統264,10:06:00,10:06:00,200477_02,39,渋川市内循環,0,0,1
平日_09時16分_系統264,10:07:00,10:07:00,200430_02,40,渋川市内循環,0,0,1
平日_09時16分_系統264,10:08:00,10:08:00,200007_02,41,渋川市内循環,0,0,1
平日_09時16分_系統264,10:13:00,10:13:00,210463_10,42,渋川市内循環,1,0,1
平日_09時20分_系統583,09:20:00,09:20:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_09時20分_系統583,09:22:00,09:22:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_09時20分_系統583,09:23:00,09:23:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_09時20分_系統583,09:24:00,09:24:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_09時20分_系統583,09:27:00,09:27:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_09時20分_系統583,09:30:00,09:30:00,200927_01,6,前橋駅,0,0,1
平日_09時20分_系統583,09:30:00,09:30:00,200800_02,7,前橋駅,0,0,1
平日_09時20分_系統583,09:31:00,09:31:00,200928_02,8,前橋駅,0,0,1
平日_09時20分_系統583,09:33:00,09:33:00,201071_02,9,前橋駅,0,0,1
平日_09時20分_系統583,09:35:00,09:35:00,200542_02,10,前橋駅,0,0,1
平日_09時20分_系統583,09:37:00,09:37:00,200141_02,11,前橋駅,0,0,1
平日_09時20分_系統583,09:38:00,09:38:00,200142_02,12,前橋駅,0,0,1
平日_09時20分_系統583,09:40:00,09:40:00,200262_02,13,前橋駅,0,0,1
平日_09時20分_系統583,09:41:00,09:41:00,201015_02,14,前橋駅,0,0,1
平日_09時20分_系統583,09:43:00,09:43:00,200379_02,15,前橋駅,0,0,1
平日_09時20分_系統583,09:44:00,09:44:00,200455_02,16,前橋駅,0,0,1
平日_09時20分_系統583,09:46:00,09:46:00,200702_02,17,前橋駅,0,0,1
平日_09時20分_系統583,09:47:00,09:47:00,200703_02,18,前橋駅,0,0,1
平日_09時20分_系統583,09:49:00,09:49:00,201081_02,19,前橋駅,0,0,1
平日_09時20分_系統583,09:51:00,09:51:00,200998_02,20,前橋駅,0,0,1
平日_09時20分_系統583,09:54:00,09:54:00,200718_10,21,前橋駅,1,0,1
平日_09時27分_系統586,09:27:00,09:27:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_09時27分_系統586,09:28:00,09:28:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時27分_系統586,09:30:00,09:30:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時27分_系統586,09:32:00,09:32:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時27分_系統586,09:32:00,09:32:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時27分_系統586,09:34:00,09:34:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時27分_系統586,09:35:00,09:35:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時27分_系統586,09:37:00,09:37:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時27分_系統586,09:38:00,09:38:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時27分_系統586,09:39:00,09:39:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_09時27分_系統586,09:42:00,09:42:00,200261_01,11,群馬大学荒牧,0,0,1
平日_09時27分_系統586,09:43:00,09:43:00,200503_02,12,群馬大学荒牧,0,0,1
平日_09時27分_系統586,09:44:00,09:44:00,200142_01,13,群馬大学荒牧,0,0,1
平日_09時27分_系統586,09:45:00,09:45:00,200141_01,14,群馬大学荒牧,0,0,1
平日_09時27分_系統586,09:46:00,09:46:00,200542_01,15,群馬大学荒牧,0,0,1
平日_09時27分_系統586,09:48:00,09:48:00,201071_01,16,群馬大学荒牧,0,0,1
平日_09時27分_系統586,09:50:00,09:50:00,200348_01,17,群馬大学荒牧,0,0,1
平日_09時27分_系統586,09:51:00,09:51:00,200343_01,18,群馬大学荒牧,0,0,1
平日_09時27分_系統586,09:52:00,09:52:00,200722_01,19,群馬大学荒牧,0,0,1
平日_09時27分_系統586,09:55:00,09:55:00,200273_01,20,群馬大学荒牧,1,0,1
平日_09時31分_系統267,09:31:00,09:31:00,200463_01,1,前橋駅,0,1,1
平日_09時31分_系統267,09:32:00,09:32:00,200768_02,2,前橋駅,0,0,1
平日_09時31分_系統267,09:33:00,09:33:00,200730_02,3,前橋駅,0,0,1
平日_09時31分_系統267,09:35:00,09:35:00,200827_02,4,前橋駅,0,0,1
平日_09時31分_系統267,09:36:00,09:36:00,200506_02,5,前橋駅,0,0,1
平日_09時31分_系統267,09:37:00,09:37:00,200017_02,6,前橋駅,0,0,1
平日_09時31分_系統267,09:38:00,09:38:00,200519_02,7,前橋駅,0,0,1
平日_09時31分_系統267,09:38:00,09:38:00,200987_02,8,前橋駅,0,0,1
平日_09時31分_系統267,09:40:00,09:40:00,200985_02,9,前橋駅,0,0,1
平日_09時31分_系統267,09:41:00,09:41:00,200895_02,10,前橋駅,0,0,1
平日_09時31分_系統267,09:43:00,09:43:00,200395_02,11,前橋駅,0,0,1
平日_09時31分_系統267,09:43:00,09:43:00,200153_02,12,前橋駅,0,0,1
平日_09時31分_系統267,09:44:00,09:44:00,201100_02,13,前橋駅,0,0,1
平日_09時31分_系統267,09:45:00,09:45:00,200981_02,14,前橋駅,0,0,1
平日_09時31分_系統267,09:46:00,09:46:00,200872_02,15,前橋駅,0,0,1
平日_09時31分_系統267,09:47:00,09:47:00,201056_02,16,前橋駅,0,0,1
平日_09時31分_系統267,09:48:00,09:48:00,200189_02,17,前橋駅,0,0,1
平日_09時31分_系統267,09:50:00,09:50:00,200722_02,18,前橋駅,0,0,1
平日_09時31分_系統267,09:51:00,09:51:00,200343_02,19,前橋駅,0,0,1
平日_09時31分_系統267,09:52:00,09:52:00,200348_02,20,前橋駅,0,0,1
平日_09時31分_系統267,09:54:00,09:54:00,201071_02,21,前橋駅,0,0,1
平日_09時31分_系統267,09:56:00,09:56:00,200542_02,22,前橋駅,0,0,1
平日_09時31分_系統267,09:58:00,09:58:00,200141_02,23,前橋駅,0,0,1
平日_09時31分_系統267,09:59:00,09:59:00,200142_02,24,前橋駅,0,0,1
平日_09時31分_系統267,10:01:00,10:01:00,200262_02,25,前橋駅,0,0,1
平日_09時31分_系統267,10:02:00,10:02:00,201015_02,26,前橋駅,0,0,1
平日_09時31分_系統267,10:04:00,10:04:00,200379_02,27,前橋駅,0,0,1
平日_09時31分_系統267,10:05:00,10:05:00,200455_02,28,前橋駅,0,0,1
平日_09時31分_系統267,10:07:00,10:07:00,200702_02,29,前橋駅,0,0,1
平日_09時31分_系統267,10:08:00,10:08:00,200703_02,30,前橋駅,0,0,1
平日_09時31分_系統267,10:10:00,10:10:00,201081_02,31,前橋駅,0,0,1
平日_09時31分_系統267,10:12:00,10:12:00,200998_02,32,前橋駅,0,0,1
平日_09時31分_系統267,10:15:00,10:15:00,200718_10,33,前橋駅,1,0,1
平日_09時40分_系統581,09:40:00,09:40:00,200273_01,1,前橋駅,0,1,1
平日_09時40分_系統581,09:42:00,09:42:00,200722_02,2,前橋駅,0,0,1
平日_09時40分_系統581,09:43:00,09:43:00,200343_02,3,前橋駅,0,0,1
平日_09時40分_系統581,09:44:00,09:44:00,200348_02,4,前橋駅,0,0,1
平日_09時40分_系統581,09:46:00,09:46:00,201071_02,5,前橋駅,0,0,1
平日_09時40分_系統581,09:48:00,09:48:00,200542_02,6,前橋駅,0,0,1
平日_09時40分_系統581,09:50:00,09:50:00,200141_02,7,前橋駅,0,0,1
平日_09時40分_系統581,09:51:00,09:51:00,200142_02,8,前橋駅,0,0,1
平日_09時40分_系統581,09:53:00,09:53:00,200262_02,9,前橋駅,0,0,1
平日_09時40分_系統581,09:54:00,09:54:00,201015_02,10,前橋駅,0,0,1
平日_09時40分_系統581,09:56:00,09:56:00,200379_02,11,前橋駅,0,0,1
平日_09時40分_系統581,09:57:00,09:57:00,200455_02,12,前橋駅,0,0,1
平日_09時40分_系統581,09:59:00,09:59:00,200702_02,13,前橋駅,0,0,1
平日_09時40分_系統581,10:00:00,10:00:00,200703_02,14,前橋駅,0,0,1
平日_09時40分_系統581,10:02:00,10:02:00,201081_02,15,前橋駅,0,0,1
平日_09時40分_系統581,10:04:00,10:04:00,200998_02,16,前橋駅,0,0,1
平日_09時40分_系統581,10:07:00,10:07:00,200718_10,17,前橋駅,1,0,1
平日_09時40分_系統268,09:40:00,09:40:00,200718_02,1,渋川駅,0,1,1
平日_09時40分_系統268,09:41:00,09:41:00,200998_01,2,渋川駅,0,0,1
平日_09時40分_系統268,09:43:00,09:43:00,201081_01,3,渋川駅,0,0,1
平日_09時40分_系統268,09:45:00,09:45:00,200703_01,4,渋川駅,0,0,1
平日_09時40分_系統268,09:45:00,09:45:00,200702_01,5,渋川駅,0,0,1
平日_09時40分_系統268,09:47:00,09:47:00,200455_01,6,渋川駅,0,0,1
平日_09時40分_系統268,09:48:00,09:48:00,200379_01,7,渋川駅,0,0,1
平日_09時40分_系統268,09:50:00,09:50:00,201015_01,8,渋川駅,0,0,1
平日_09時40分_系統268,09:51:00,09:51:00,200262_01,9,渋川駅,0,0,1
平日_09時40分_系統268,09:52:00,09:52:00,200142_01,10,渋川駅,0,0,1
平日_09時40分_系統268,09:53:00,09:53:00,200141_01,11,渋川駅,0,0,1
平日_09時40分_系統268,09:54:00,09:54:00,200542_01,12,渋川駅,0,0,1
平日_09時40分_系統268,09:56:00,09:56:00,201071_01,13,渋川駅,0,0,1
平日_09時40分_系統268,09:58:00,09:58:00,200348_01,14,渋川駅,0,0,1
平日_09時40分_系統268,09:59:00,09:59:00,200343_01,15,渋川駅,0,0,1
平日_09時40分_系統268,10:00:00,10:00:00,200722_01,16,渋川駅,0,0,1
平日_09時40分_系統268,10:03:00,10:03:00,200189_01,17,渋川駅,0,0,1
平日_09時40分_系統268,10:05:00,10:05:00,201056_01,18,渋川駅,0,0,1
平日_09時40分_系統268,10:06:00,10:06:00,200872_01,19,渋川駅,0,0,1
平日_09時40分_系統268,10:07:00,10:07:00,200981_01,20,渋川駅,0,0,1
平日_09時40分_系統268,10:08:00,10:08:00,201100_01,21,渋川駅,0,0,1
平日_09時40分_系統268,10:09:00,10:09:00,200153_01,22,渋川駅,0,0,1
平日_09時40分_系統268,10:09:00,10:09:00,200395_01,23,渋川駅,0,0,1
平日_09時40分_系統268,10:10:00,10:10:00,200895_01,24,渋川駅,0,0,1
平日_09時40分_系統268,10:12:00,10:12:00,200985_01,25,渋川駅,0,0,1
平日_09時40分_系統268,10:12:00,10:12:00,200987_01,26,渋川駅,0,0,1
平日_09時40分_系統268,10:13:00,10:13:00,200519_01,27,渋川駅,0,0,1
平日_09時40分_系統268,10:14:00,10:14:00,200017_01,28,渋川駅,0,0,1
平日_09時40分_系統268,10:16:00,10:16:00,200506_01,29,渋川駅,0,0,1
平日_09時40分_系統268,10:17:00,10:17:00,200827_01,30,渋川駅,0,0,1
平日_09時40分_系統268,10:19:00,10:19:00,200730_01,31,渋川駅,0,0,1
平日_09時40分_系統268,10:20:00,10:20:00,200768_01,32,渋川駅,0,0,1
平日_09時40分_系統268,10:23:00,10:23:00,200463_10,33,渋川駅,1,0,1
平日_09時47分_系統261,09:47:00,09:47:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
平日_09時47分_系統261,09:48:00,09:48:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
平日_09時47分_系統261,09:49:00,09:49:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
平日_09時47分_系統261,09:50:00,09:50:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
平日_09時47分_系統261,09:51:00,09:51:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
平日_09時47分_系統261,09:52:00,09:52:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
平日_09時47分_系統261,09:53:00,09:53:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
平日_09時47分_系統261,09:54:00,09:54:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
平日_09時47分_系統261,09:55:00,09:55:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
平日_09時47分_系統261,10:00:00,10:00:00,200463_01,10,前橋駅,0,0,1
平日_09時47分_系統261,10:01:00,10:01:00,200768_02,11,前橋駅,0,0,1
平日_09時47分_系統261,10:02:00,10:02:00,200730_02,12,前橋駅,0,0,1
平日_09時47分_系統261,10:04:00,10:04:00,200827_02,13,前橋駅,0,0,1
平日_09時47分_系統261,10:05:00,10:05:00,200506_02,14,前橋駅,0,0,1
平日_09時47分_系統261,10:06:00,10:06:00,200017_02,15,前橋駅,0,0,1
平日_09時47分_系統261,10:07:00,10:07:00,200519_02,16,前橋駅,0,0,1
平日_09時47分_系統261,10:07:00,10:07:00,200987_02,17,前橋駅,0,0,1
平日_09時47分_系統261,10:09:00,10:09:00,200985_02,18,前橋駅,0,0,1
平日_09時47分_系統261,10:10:00,10:10:00,200895_02,19,前橋駅,0,0,1
平日_09時47分_系統261,10:12:00,10:12:00,200395_02,20,前橋駅,0,0,1
平日_09時47分_系統261,10:12:00,10:12:00,200153_02,21,前橋駅,0,0,1
平日_09時47分_系統261,10:13:00,10:13:00,201100_02,22,前橋駅,0,0,1
平日_09時47分_系統261,10:14:00,10:14:00,200981_02,23,前橋駅,0,0,1
平日_09時47分_系統261,10:15:00,10:15:00,200872_02,24,前橋駅,0,0,1
平日_09時47分_系統261,10:16:00,10:16:00,201056_02,25,前橋駅,0,0,1
平日_09時47分_系統261,10:18:00,10:18:00,200189_02,26,前橋駅,0,0,1
平日_09時47分_系統261,10:19:00,10:19:00,200722_02,27,前橋駅,0,0,1
平日_09時47分_系統261,10:20:00,10:20:00,200343_02,28,前橋駅,0,0,1
平日_09時47分_系統261,10:21:00,10:21:00,200348_02,29,前橋駅,0,0,1
平日_09時47分_系統261,10:23:00,10:23:00,201071_02,30,前橋駅,0,0,1
平日_09時47分_系統261,10:25:00,10:25:00,200542_02,31,前橋駅,0,0,1
平日_09時47分_系統261,10:27:00,10:27:00,200141_02,32,前橋駅,0,0,1
平日_09時47分_系統261,10:28:00,10:28:00,200142_02,33,前橋駅,0,0,1
平日_09時47分_系統261,10:30:00,10:30:00,200262_02,34,前橋駅,0,0,1
平日_09時47分_系統261,10:31:00,10:31:00,201015_02,35,前橋駅,0,0,1
平日_09時47分_系統261,10:33:00,10:33:00,200379_02,36,前橋駅,0,0,1
平日_09時47分_系統261,10:34:00,10:34:00,200455_02,37,前橋駅,0,0,1
平日_09時47分_系統261,10:36:00,10:36:00,200702_02,38,前橋駅,0,0,1
平日_09時47分_系統261,10:37:00,10:37:00,200703_02,39,前橋駅,0,0,1
平日_09時47分_系統261,10:39:00,10:39:00,201081_02,40,前橋駅,0,0,1
平日_09時47分_系統261,10:41:00,10:41:00,200998_02,41,前橋駅,0,0,1
平日_09時47分_系統261,10:44:00,10:44:00,200718_10,42,前橋駅,1,0,1
平日_09時50分_系統270,09:50:00,09:50:00,200718_02,1,小児医療センター（群馬大学荒牧 経由）,0,1,1
平日_09時50分_系統270,09:51:00,09:51:00,200998_01,2,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,09:53:00,09:53:00,201081_01,3,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,09:55:00,09:55:00,200703_01,4,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,09:55:00,09:55:00,200702_01,5,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,09:57:00,09:57:00,200455_01,6,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,09:58:00,09:58:00,200379_01,7,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:00:00,10:00:00,201015_01,8,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:01:00,10:01:00,200262_01,9,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:02:00,10:02:00,200142_01,10,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:03:00,10:03:00,200141_01,11,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:04:00,10:04:00,200542_01,12,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:06:00,10:06:00,201071_01,13,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:08:00,10:08:00,200348_01,14,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:09:00,10:09:00,200343_01,15,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:10:00,10:10:00,200722_01,16,小児医療センター（群馬大学荒牧 経由）,0,0,1
平日_09時50分_系統270,10:12:00,10:12:00,200273_01,17,小児医療センター,0,0,1
平日_09時50分_系統270,10:15:00,10:15:00,200189_01,18,小児医療センター,0,0,1
平日_09時50分_系統270,10:17:00,10:17:00,201056_01,19,小児医療センター,0,0,1
平日_09時50分_系統270,10:18:00,10:18:00,200872_01,20,小児医療センター,0,0,1
平日_09時50分_系統270,10:19:00,10:19:00,200981_01,21,小児医療センター,0,0,1
平日_09時50分_系統270,10:20:00,10:20:00,201100_03,22,小児医療センター,0,0,1
平日_09時50分_系統270,10:22:00,10:22:00,200474_01,23,小児医療センター,0,0,1
平日_09時50分_系統270,10:24:00,10:24:00,200484_01,24,小児医療センター,1,0,1
平日_09時50分_系統273,09:50:00,09:50:00,200484_01,1,前橋駅,0,1,1
平日_09時50分_系統273,09:51:00,09:51:00,200474_02,2,前橋駅,0,0,1
平日_09時50分_系統273,09:53:00,09:53:00,201100_04,3,前橋駅,0,0,1
平日_09時50分_系統273,09:55:00,09:55:00,200981_02,4,前橋駅,0,0,1
平日_09時50分_系統273,09:56:00,09:56:00,200872_02,5,前橋駅,0,0,1
平日_09時50分_系統273,09:57:00,09:57:00,201056_02,6,前橋駅,0,0,1
平日_09時50分_系統273,09:59:00,09:59:00,200189_02,7,前橋駅,0,0,1
平日_09時50分_系統273,10:00:00,10:00:00,200722_02,8,前橋駅,0,0,1
平日_09時50分_系統273,10:01:00,10:01:00,200343_02,9,前橋駅,0,0,1
平日_09時50分_系統273,10:02:00,10:02:00,200348_02,10,前橋駅,0,0,1
平日_09時50分_系統273,10:04:00,10:04:00,201071_02,11,前橋駅,0,0,1
平日_09時50分_系統273,10:06:00,10:06:00,200542_02,12,前橋駅,0,0,1
平日_09時50分_系統273,10:08:00,10:08:00,200141_02,13,前橋駅,0,0,1
平日_09時50分_系統273,10:09:00,10:09:00,200142_02,14,前橋駅,0,0,1
平日_09時50分_系統273,10:11:00,10:11:00,200262_02,15,前橋駅,0,0,1
平日_09時50分_系統273,10:12:00,10:12:00,201015_02,16,前橋駅,0,0,1
平日_09時50分_系統273,10:14:00,10:14:00,200379_02,17,前橋駅,0,0,1
平日_09時50分_系統273,10:15:00,10:15:00,200455_02,18,前橋駅,0,0,1
平日_09時50分_系統273,10:17:00,10:17:00,200702_02,19,前橋駅,0,0,1
平日_09時50分_系統273,10:18:00,10:18:00,200703_02,20,前橋駅,0,0,1
平日_09時50分_系統273,10:20:00,10:20:00,201081_02,21,前橋駅,0,0,1
平日_09時50分_系統273,10:22:00,10:22:00,200998_02,22,前橋駅,0,0,1
平日_09時50分_系統273,10:25:00,10:25:00,200718_10,23,前橋駅,1,0,1
平日_10時00分_系統583,10:00:00,10:00:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_10時00分_系統583,10:02:00,10:02:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_10時00分_系統583,10:03:00,10:03:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_10時00分_系統583,10:04:00,10:04:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_10時00分_系統583,10:07:00,10:07:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_10時00分_系統583,10:10:00,10:10:00,200927_01,6,前橋駅,0,0,1
平日_10時00分_系統583,10:10:00,10:10:00,200800_02,7,前橋駅,0,0,1
平日_10時00分_系統583,10:11:00,10:11:00,200928_02,8,前橋駅,0,0,1
平日_10時00分_系統583,10:13:00,10:13:00,201071_02,9,前橋駅,0,0,1
平日_10時00分_系統583,10:15:00,10:15:00,200542_02,10,前橋駅,0,0,1
平日_10時00分_系統583,10:17:00,10:17:00,200141_02,11,前橋駅,0,0,1
平日_10時00分_系統583,10:18:00,10:18:00,200142_02,12,前橋駅,0,0,1
平日_10時00分_系統583,10:20:00,10:20:00,200262_02,13,前橋駅,0,0,1
平日_10時00分_系統583,10:21:00,10:21:00,201015_02,14,前橋駅,0,0,1
平日_10時00分_系統583,10:23:00,10:23:00,200379_02,15,前橋駅,0,0,1
平日_10時00分_系統583,10:24:00,10:24:00,200455_02,16,前橋駅,0,0,1
平日_10時00分_系統583,10:26:00,10:26:00,200702_02,17,前橋駅,0,0,1
平日_10時00分_系統583,10:27:00,10:27:00,200703_02,18,前橋駅,0,0,1
平日_10時00分_系統583,10:29:00,10:29:00,201081_02,19,前橋駅,0,0,1
平日_10時00分_系統583,10:31:00,10:31:00,200998_02,20,前橋駅,0,0,1
平日_10時00分_系統583,10:34:00,10:34:00,200718_10,21,前橋駅,1,0,1
平日_10時00分_系統268,10:00:00,10:00:00,200718_02,1,渋川駅,0,1,1
平日_10時00分_系統268,10:01:00,10:01:00,200998_01,2,渋川駅,0,0,1
平日_10時00分_系統268,10:03:00,10:03:00,201081_01,3,渋川駅,0,0,1
平日_10時00分_系統268,10:05:00,10:05:00,200703_01,4,渋川駅,0,0,1
平日_10時00分_系統268,10:05:00,10:05:00,200702_01,5,渋川駅,0,0,1
平日_10時00分_系統268,10:07:00,10:07:00,200455_01,6,渋川駅,0,0,1
平日_10時00分_系統268,10:08:00,10:08:00,200379_01,7,渋川駅,0,0,1
平日_10時00分_系統268,10:10:00,10:10:00,201015_01,8,渋川駅,0,0,1
平日_10時00分_系統268,10:11:00,10:11:00,200262_01,9,渋川駅,0,0,1
平日_10時00分_系統268,10:12:00,10:12:00,200142_01,10,渋川駅,0,0,1
平日_10時00分_系統268,10:13:00,10:13:00,200141_01,11,渋川駅,0,0,1
平日_10時00分_系統268,10:14:00,10:14:00,200542_01,12,渋川駅,0,0,1
平日_10時00分_系統268,10:16:00,10:16:00,201071_01,13,渋川駅,0,0,1
平日_10時00分_系統268,10:18:00,10:18:00,200348_01,14,渋川駅,0,0,1
平日_10時00分_系統268,10:19:00,10:19:00,200343_01,15,渋川駅,0,0,1
平日_10時00分_系統268,10:20:00,10:20:00,200722_01,16,渋川駅,0,0,1
平日_10時00分_系統268,10:23:00,10:23:00,200189_01,17,渋川駅,0,0,1
平日_10時00分_系統268,10:25:00,10:25:00,201056_01,18,渋川駅,0,0,1
平日_10時00分_系統268,10:26:00,10:26:00,200872_01,19,渋川駅,0,0,1
平日_10時00分_系統268,10:27:00,10:27:00,200981_01,20,渋川駅,0,0,1
平日_10時00分_系統268,10:28:00,10:28:00,201100_01,21,渋川駅,0,0,1
平日_10時00分_系統268,10:29:00,10:29:00,200153_01,22,渋川駅,0,0,1
平日_10時00分_系統268,10:29:00,10:29:00,200395_01,23,渋川駅,0,0,1
平日_10時00分_系統268,10:30:00,10:30:00,200895_01,24,渋川駅,0,0,1
平日_10時00分_系統268,10:32:00,10:32:00,200985_01,25,渋川駅,0,0,1
平日_10時00分_系統268,10:32:00,10:32:00,200987_01,26,渋川駅,0,0,1
平日_10時00分_系統268,10:33:00,10:33:00,200519_01,27,渋川駅,0,0,1
平日_10時00分_系統268,10:34:00,10:34:00,200017_01,28,渋川駅,0,0,1
平日_10時00分_系統268,10:36:00,10:36:00,200506_01,29,渋川駅,0,0,1
平日_10時00分_系統268,10:37:00,10:37:00,200827_01,30,渋川駅,0,0,1
平日_10時00分_系統268,10:39:00,10:39:00,200730_01,31,渋川駅,0,0,1
平日_10時00分_系統268,10:40:00,10:40:00,200768_01,32,渋川駅,0,0,1
平日_10時00分_系統268,10:43:00,10:43:00,200463_10,33,渋川駅,1,0,1
平日_10時10分_系統586,10:10:00,10:10:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_10時10分_系統586,10:11:00,10:11:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_10時10分_系統586,10:13:00,10:13:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_10時10分_系統586,10:15:00,10:15:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_10時10分_系統586,10:15:00,10:15:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_10時10分_系統586,10:17:00,10:17:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_10時10分_系統586,10:18:00,10:18:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_10時10分_系統586,10:20:00,10:20:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_10時10分_系統586,10:21:00,10:21:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_10時10分_系統586,10:22:00,10:22:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_10時10分_系統586,10:25:00,10:25:00,200261_01,11,群馬大学荒牧,0,0,1
平日_10時10分_系統586,10:26:00,10:26:00,200503_02,12,群馬大学荒牧,0,0,1
平日_10時10分_系統586,10:27:00,10:27:00,200142_01,13,群馬大学荒牧,0,0,1
平日_10時10分_系統586,10:28:00,10:28:00,200141_01,14,群馬大学荒牧,0,0,1
平日_10時10分_系統586,10:29:00,10:29:00,200542_01,15,群馬大学荒牧,0,0,1
平日_10時10分_系統586,10:31:00,10:31:00,201071_01,16,群馬大学荒牧,0,0,1
平日_10時10分_系統586,10:33:00,10:33:00,200348_01,17,群馬大学荒牧,0,0,1
平日_10時10分_系統586,10:34:00,10:34:00,200343_01,18,群馬大学荒牧,0,0,1
平日_10時10分_系統586,10:35:00,10:35:00,200722_01,19,群馬大学荒牧,0,0,1
平日_10時10分_系統586,10:38:00,10:38:00,200273_01,20,群馬大学荒牧,1,0,1
平日_10時26分_系統267,10:26:00,10:26:00,200463_01,1,前橋駅,0,1,1
平日_10時26分_系統267,10:27:00,10:27:00,200768_02,2,前橋駅,0,0,1
平日_10時26分_系統267,10:28:00,10:28:00,200730_02,3,前橋駅,0,0,1
平日_10時26分_系統267,10:30:00,10:30:00,200827_02,4,前橋駅,0,0,1
平日_10時26分_系統267,10:31:00,10:31:00,200506_02,5,前橋駅,0,0,1
平日_10時26分_系統267,10:32:00,10:32:00,200017_02,6,前橋駅,0,0,1
平日_10時26分_系統267,10:33:00,10:33:00,200519_02,7,前橋駅,0,0,1
平日_10時26分_系統267,10:33:00,10:33:00,200987_02,8,前橋駅,0,0,1
平日_10時26分_系統267,10:35:00,10:35:00,200985_02,9,前橋駅,0,0,1
平日_10時26分_系統267,10:36:00,10:36:00,200895_02,10,前橋駅,0,0,1
平日_10時26分_系統267,10:38:00,10:38:00,200395_02,11,前橋駅,0,0,1
平日_10時26分_系統267,10:38:00,10:38:00,200153_02,12,前橋駅,0,0,1
平日_10時26分_系統267,10:39:00,10:39:00,201100_02,13,前橋駅,0,0,1
平日_10時26分_系統267,10:40:00,10:40:00,200981_02,14,前橋駅,0,0,1
平日_10時26分_系統267,10:41:00,10:41:00,200872_02,15,前橋駅,0,0,1
平日_10時26分_系統267,10:42:00,10:42:00,201056_02,16,前橋駅,0,0,1
平日_10時26分_系統267,10:44:00,10:44:00,200189_02,17,前橋駅,0,0,1
平日_10時26分_系統267,10:45:00,10:45:00,200722_02,18,前橋駅,0,0,1
平日_10時26分_系統267,10:46:00,10:46:00,200343_02,19,前橋駅,0,0,1
平日_10時26分_系統267,10:47:00,10:47:00,200348_02,20,前橋駅,0,0,1
平日_10時26分_系統267,10:49:00,10:49:00,201071_02,21,前橋駅,0,0,1
平日_10時26分_系統267,10:51:00,10:51:00,200542_02,22,前橋駅,0,0,1
平日_10時26分_系統267,10:53:00,10:53:00,200141_02,23,前橋駅,0,0,1
平日_10時26分_系統267,10:54:00,10:54:00,200142_02,24,前橋駅,0,0,1
平日_10時26分_系統267,10:56:00,10:56:00,200262_02,25,前橋駅,0,0,1
平日_10時26分_系統267,10:57:00,10:57:00,201015_02,26,前橋駅,0,0,1
平日_10時26分_系統267,10:59:00,10:59:00,200379_02,27,前橋駅,0,0,1
平日_10時26分_系統267,11:00:00,11:00:00,200455_02,28,前橋駅,0,0,1
平日_10時26分_系統267,11:02:00,11:02:00,200702_02,29,前橋駅,0,0,1
平日_10時26分_系統267,11:03:00,11:03:00,200703_02,30,前橋駅,0,0,1
平日_10時26分_系統267,11:05:00,11:05:00,201081_02,31,前橋駅,0,0,1
平日_10時26分_系統267,11:07:00,11:07:00,200998_02,32,前橋駅,0,0,1
平日_10時26分_系統267,11:10:00,11:10:00,200718_10,33,前橋駅,1,0,1
平日_10時27分_系統268,10:27:00,10:27:00,200718_02,1,渋川駅,0,1,1
平日_10時27分_系統268,10:28:00,10:28:00,200998_01,2,渋川駅,0,0,1
平日_10時27分_系統268,10:30:00,10:30:00,201081_01,3,渋川駅,0,0,1
平日_10時27分_系統268,10:32:00,10:32:00,200703_01,4,渋川駅,0,0,1
平日_10時27分_系統268,10:32:00,10:32:00,200702_01,5,渋川駅,0,0,1
平日_10時27分_系統268,10:34:00,10:34:00,200455_01,6,渋川駅,0,0,1
平日_10時27分_系統268,10:35:00,10:35:00,200379_01,7,渋川駅,0,0,1
平日_10時27分_系統268,10:37:00,10:37:00,201015_01,8,渋川駅,0,0,1
平日_10時27分_系統268,10:38:00,10:38:00,200262_01,9,渋川駅,0,0,1
平日_10時27分_系統268,10:39:00,10:39:00,200142_01,10,渋川駅,0,0,1
平日_10時27分_系統268,10:40:00,10:40:00,200141_01,11,渋川駅,0,0,1
平日_10時27分_系統268,10:41:00,10:41:00,200542_01,12,渋川駅,0,0,1
平日_10時27分_系統268,10:43:00,10:43:00,201071_01,13,渋川駅,0,0,1
平日_10時27分_系統268,10:45:00,10:45:00,200348_01,14,渋川駅,0,0,1
平日_10時27分_系統268,10:46:00,10:46:00,200343_01,15,渋川駅,0,0,1
平日_10時27分_系統268,10:47:00,10:47:00,200722_01,16,渋川駅,0,0,1
平日_10時27分_系統268,10:50:00,10:50:00,200189_01,17,渋川駅,0,0,1
平日_10時27分_系統268,10:52:00,10:52:00,201056_01,18,渋川駅,0,0,1
平日_10時27分_系統268,10:53:00,10:53:00,200872_01,19,渋川駅,0,0,1
平日_10時27分_系統268,10:54:00,10:54:00,200981_01,20,渋川駅,0,0,1
平日_10時27分_系統268,10:55:00,10:55:00,201100_01,21,渋川駅,0,0,1
平日_10時27分_系統268,10:56:00,10:56:00,200153_01,22,渋川駅,0,0,1
平日_10時27分_系統268,10:56:00,10:56:00,200395_01,23,渋川駅,0,0,1
平日_10時27分_系統268,10:57:00,10:57:00,200895_01,24,渋川駅,0,0,1
平日_10時27分_系統268,10:59:00,10:59:00,200985_01,25,渋川駅,0,0,1
平日_10時27分_系統268,10:59:00,10:59:00,200987_01,26,渋川駅,0,0,1
平日_10時27分_系統268,11:00:00,11:00:00,200519_01,27,渋川駅,0,0,1
平日_10時27分_系統268,11:01:00,11:01:00,200017_01,28,渋川駅,0,0,1
平日_10時27分_系統268,11:03:00,11:03:00,200506_01,29,渋川駅,0,0,1
平日_10時27分_系統268,11:04:00,11:04:00,200827_01,30,渋川駅,0,0,1
平日_10時27分_系統268,11:06:00,11:06:00,200730_01,31,渋川駅,0,0,1
平日_10時27分_系統268,11:07:00,11:07:00,200768_01,32,渋川駅,0,0,1
平日_10時27分_系統268,11:10:00,11:10:00,200463_10,33,渋川駅,1,0,1
平日_10時29分_系統273,10:29:00,10:29:00,200484_01,1,前橋駅,0,1,1
平日_10時29分_系統273,10:30:00,10:30:00,200474_02,2,前橋駅,0,0,1
平日_10時29分_系統273,10:32:00,10:32:00,201100_04,3,前橋駅,0,0,1
平日_10時29分_系統273,10:34:00,10:34:00,200981_02,4,前橋駅,0,0,1
平日_10時29分_系統273,10:35:00,10:35:00,200872_02,5,前橋駅,0,0,1
平日_10時29分_系統273,10:36:00,10:36:00,201056_02,6,前橋駅,0,0,1
平日_10時29分_系統273,10:38:00,10:38:00,200189_02,7,前橋駅,0,0,1
平日_10時29分_系統273,10:39:00,10:39:00,200722_02,8,前橋駅,0,0,1
平日_10時29分_系統273,10:40:00,10:40:00,200343_02,9,前橋駅,0,0,1
平日_10時29分_系統273,10:41:00,10:41:00,200348_02,10,前橋駅,0,0,1
平日_10時29分_系統273,10:43:00,10:43:00,201071_02,11,前橋駅,0,0,1
平日_10時29分_系統273,10:45:00,10:45:00,200542_02,12,前橋駅,0,0,1
平日_10時29分_系統273,10:47:00,10:47:00,200141_02,13,前橋駅,0,0,1
平日_10時29分_系統273,10:48:00,10:48:00,200142_02,14,前橋駅,0,0,1
平日_10時29分_系統273,10:50:00,10:50:00,200262_02,15,前橋駅,0,0,1
平日_10時29分_系統273,10:51:00,10:51:00,201015_02,16,前橋駅,0,0,1
平日_10時29分_系統273,10:53:00,10:53:00,200379_02,17,前橋駅,0,0,1
平日_10時29分_系統273,10:54:00,10:54:00,200455_02,18,前橋駅,0,0,1
平日_10時29分_系統273,10:56:00,10:56:00,200702_02,19,前橋駅,0,0,1
平日_10時29分_系統273,10:57:00,10:57:00,200703_02,20,前橋駅,0,0,1
平日_10時29分_系統273,10:59:00,10:59:00,201081_02,21,前橋駅,0,0,1
平日_10時29分_系統273,11:01:00,11:01:00,200998_02,22,前橋駅,0,0,1
平日_10時29分_系統273,11:04:00,11:04:00,200718_10,23,前橋駅,1,0,1
平日_10時40分_系統584,10:40:00,10:40:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
平日_10時40分_系統584,10:41:00,10:41:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:43:00,10:43:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:45:00,10:45:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:45:00,10:45:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:47:00,10:47:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:48:00,10:48:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:50:00,10:50:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:51:00,10:51:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:52:00,10:52:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:55:00,10:55:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:56:00,10:56:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:57:00,10:57:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:58:00,10:58:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_10時40分_系統584,10:59:00,10:59:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_10時40分_系統584,11:01:00,11:01:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_10時40分_系統584,11:02:00,11:02:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_10時40分_系統584,11:03:00,11:03:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_10時40分_系統584,11:05:00,11:05:00,200927_01,19,群馬大学荒牧,0,0,1
平日_10時40分_系統584,11:06:00,11:06:00,201185_01,20,群馬大学荒牧,0,0,1
平日_10時40分_系統584,11:10:00,11:10:00,200348_01,21,群馬大学荒牧,0,0,1
平日_10時40分_系統584,11:11:00,11:11:00,200343_01,22,群馬大学荒牧,0,0,1
平日_10時40分_系統584,11:12:00,11:12:00,200722_01,23,群馬大学荒牧,0,0,1
平日_10時40分_系統584,11:15:00,11:15:00,200273_01,24,群馬大学荒牧,1,0,1
平日_10時45分_系統585,10:45:00,10:45:00,200273_01,1,前橋駅（南橘団地・群大病院 経由）,0,1,1
平日_10時45分_系統585,10:47:00,10:47:00,200722_02,2,前橋駅（南橘団地・群大病院 経由）,0,0,1
平日_10時45分_系統585,10:48:00,10:48:00,200343_02,3,前橋駅（南橘団地・群大病院 経由）,0,0,1
平日_10時45分_系統585,10:49:00,10:49:00,200348_02,4,前橋駅（南橘団地・群大病院 経由）,0,0,1
平日_10時45分_系統585,10:52:00,10:52:00,201185_02,5,前橋駅（南橘団地・群大病院 経由）,0,0,1
平日_10時45分_系統585,10:55:00,10:55:00,200927_01,6,前橋駅（群大病院 経由）,0,0,1
平日_10時45分_系統585,10:55:00,10:55:00,200800_02,7,前橋駅（群大病院 経由）,0,0,1
平日_10時45分_系統585,10:56:00,10:56:00,200928_02,8,前橋駅（群大病院 経由）,0,0,1
平日_10時45分_系統585,10:58:00,10:58:00,201071_02,9,前橋駅（群大病院 経由）,0,0,1
平日_10時45分_系統585,11:00:00,11:00:00,200542_02,10,前橋駅（群大病院 経由）,0,0,1
平日_10時45分_系統585,11:02:00,11:02:00,200141_02,11,前橋駅（群大病院 経由）,0,0,1
平日_10時45分_系統585,11:03:00,11:03:00,200142_02,12,前橋駅（群大病院 経由）,0,0,1
平日_10時45分_系統585,11:04:00,11:04:00,200503_01,13,前橋駅（群大病院 経由）,0,0,1
平日_10時45分_系統585,11:07:00,11:07:00,200261_01,14,前橋駅,0,0,1
平日_10時45分_系統585,11:08:00,11:08:00,200503_02,15,前橋駅,0,0,1
平日_10時45分_系統585,11:10:00,11:10:00,200262_02,16,前橋駅,0,0,1
平日_10時45分_系統585,11:11:00,11:11:00,201015_02,17,前橋駅,0,0,1
平日_10時45分_系統585,11:13:00,11:13:00,200379_02,18,前橋駅,0,0,1
平日_10時45分_系統585,11:14:00,11:14:00,200455_02,19,前橋駅,0,0,1
平日_10時45分_系統585,11:16:00,11:16:00,200702_02,20,前橋駅,0,0,1
平日_10時45分_系統585,11:17:00,11:17:00,200703_02,21,前橋駅,0,0,1
平日_10時45分_系統585,11:19:00,11:19:00,201081_02,22,前橋駅,0,0,1
平日_10時45分_系統585,11:21:00,11:21:00,200998_02,23,前橋駅,0,0,1
平日_10時45分_系統585,11:24:00,11:24:00,200718_10,24,前橋駅,1,0,1
平日_10時56分_系統267,10:56:00,10:56:00,200463_01,1,前橋駅,0,1,1
平日_10時56分_系統267,10:57:00,10:57:00,200768_02,2,前橋駅,0,0,1
平日_10時56分_系統267,10:58:00,10:58:00,200730_02,3,前橋駅,0,0,1
平日_10時56分_系統267,11:00:00,11:00:00,200827_02,4,前橋駅,0,0,1
平日_10時56分_系統267,11:01:00,11:01:00,200506_02,5,前橋駅,0,0,1
平日_10時56分_系統267,11:02:00,11:02:00,200017_02,6,前橋駅,0,0,1
平日_10時56分_系統267,11:03:00,11:03:00,200519_02,7,前橋駅,0,0,1
平日_10時56分_系統267,11:03:00,11:03:00,200987_02,8,前橋駅,0,0,1
平日_10時56分_系統267,11:05:00,11:05:00,200985_02,9,前橋駅,0,0,1
平日_10時56分_系統267,11:06:00,11:06:00,200895_02,10,前橋駅,0,0,1
平日_10時56分_系統267,11:08:00,11:08:00,200395_02,11,前橋駅,0,0,1
平日_10時56分_系統267,11:08:00,11:08:00,200153_02,12,前橋駅,0,0,1
平日_10時56分_系統267,11:09:00,11:09:00,201100_02,13,前橋駅,0,0,1
平日_10時56分_系統267,11:10:00,11:10:00,200981_02,14,前橋駅,0,0,1
平日_10時56分_系統267,11:11:00,11:11:00,200872_02,15,前橋駅,0,0,1
平日_10時56分_系統267,11:12:00,11:12:00,201056_02,16,前橋駅,0,0,1
平日_10時56分_系統267,11:14:00,11:14:00,200189_02,17,前橋駅,0,0,1
平日_10時56分_系統267,11:15:00,11:15:00,200722_02,18,前橋駅,0,0,1
平日_10時56分_系統267,11:16:00,11:16:00,200343_02,19,前橋駅,0,0,1
平日_10時56分_系統267,11:17:00,11:17:00,200348_02,20,前橋駅,0,0,1
平日_10時56分_系統267,11:19:00,11:19:00,201071_02,21,前橋駅,0,0,1
平日_10時56分_系統267,11:21:00,11:21:00,200542_02,22,前橋駅,0,0,1
平日_10時56分_系統267,11:23:00,11:23:00,200141_02,23,前橋駅,0,0,1
平日_10時56分_系統267,11:24:00,11:24:00,200142_02,24,前橋駅,0,0,1
平日_10時56分_系統267,11:26:00,11:26:00,200262_02,25,前橋駅,0,0,1
平日_10時56分_系統267,11:27:00,11:27:00,201015_02,26,前橋駅,0,0,1
平日_10時56分_系統267,11:29:00,11:29:00,200379_02,27,前橋駅,0,0,1
平日_10時56分_系統267,11:30:00,11:30:00,200455_02,28,前橋駅,0,0,1
平日_10時56分_系統267,11:32:00,11:32:00,200702_02,29,前橋駅,0,0,1
平日_10時56分_系統267,11:33:00,11:33:00,200703_02,30,前橋駅,0,0,1
平日_10時56分_系統267,11:35:00,11:35:00,201081_02,31,前橋駅,0,0,1
平日_10時56分_系統267,11:37:00,11:37:00,200998_02,32,前橋駅,0,0,1
平日_10時56分_系統267,11:40:00,11:40:00,200718_10,33,前橋駅,1,0,1
平日_10時57分_系統262,10:57:00,10:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
平日_10時57分_系統262,10:58:00,10:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:00:00,11:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:02:00,11:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:02:00,11:02:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:04:00,11:04:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:05:00,11:05:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:07:00,11:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:08:00,11:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:09:00,11:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:10:00,11:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:11:00,11:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:13:00,11:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:15:00,11:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:16:00,11:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:17:00,11:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:19:00,11:19:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:21:00,11:21:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:22:00,11:22:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:23:00,11:23:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:24:00,11:24:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:25:00,11:25:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:25:00,11:25:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:26:00,11:26:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:28:00,11:28:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:28:00,11:28:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:29:00,11:29:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:30:00,11:30:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:32:00,11:32:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:33:00,11:33:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:35:00,11:35:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:36:00,11:36:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
平日_10時57分_系統262,11:38:00,11:38:00,200463_06,33,渋川市内循環,0,0,1
平日_10時57分_系統262,11:39:00,11:39:00,200468_01,34,渋川市内循環,0,0,1
平日_10時57分_系統262,11:41:00,11:41:00,200466_01,35,渋川市内循環,0,0,1
平日_10時57分_系統262,11:42:00,11:42:00,200704_01,36,渋川市内循環,0,0,1
平日_10時57分_系統262,11:43:00,11:43:00,200476_02,37,渋川市内循環,0,0,1
平日_10時57分_系統262,11:44:00,11:44:00,200477_02,38,渋川市内循環,0,0,1
平日_10時57分_系統262,11:45:00,11:45:00,200430_02,39,渋川市内循環,0,0,1
平日_10時57分_系統262,11:46:00,11:46:00,200007_02,40,渋川市内循環,0,0,1
平日_10時57分_系統262,11:51:00,11:51:00,210463_10,41,渋川市内循環,1,0,1
平日_11時10分_系統586,11:10:00,11:10:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_11時10分_系統586,11:11:00,11:11:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_11時10分_系統586,11:13:00,11:13:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_11時10分_系統586,11:15:00,11:15:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_11時10分_系統586,11:15:00,11:15:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_11時10分_系統586,11:17:00,11:17:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_11時10分_系統586,11:18:00,11:18:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_11時10分_系統586,11:20:00,11:20:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_11時10分_系統586,11:21:00,11:21:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_11時10分_系統586,11:22:00,11:22:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_11時10分_系統586,11:25:00,11:25:00,200261_01,11,群馬大学荒牧,0,0,1
平日_11時10分_系統586,11:26:00,11:26:00,200503_02,12,群馬大学荒牧,0,0,1
平日_11時10分_系統586,11:27:00,11:27:00,200142_01,13,群馬大学荒牧,0,0,1
平日_11時10分_系統586,11:28:00,11:28:00,200141_01,14,群馬大学荒牧,0,0,1
平日_11時10分_系統586,11:29:00,11:29:00,200542_01,15,群馬大学荒牧,0,0,1
平日_11時10分_系統586,11:31:00,11:31:00,201071_01,16,群馬大学荒牧,0,0,1
平日_11時10分_系統586,11:33:00,11:33:00,200348_01,17,群馬大学荒牧,0,0,1
平日_11時10分_系統586,11:34:00,11:34:00,200343_01,18,群馬大学荒牧,0,0,1
平日_11時10分_系統586,11:35:00,11:35:00,200722_01,19,群馬大学荒牧,0,0,1
平日_11時10分_系統586,11:38:00,11:38:00,200273_01,20,群馬大学荒牧,1,0,1
平日_11時13分_系統261,11:13:00,11:13:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
平日_11時13分_系統261,11:14:00,11:14:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
平日_11時13分_系統261,11:15:00,11:15:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
平日_11時13分_系統261,11:16:00,11:16:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
平日_11時13分_系統261,11:17:00,11:17:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
平日_11時13分_系統261,11:18:00,11:18:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
平日_11時13分_系統261,11:19:00,11:19:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
平日_11時13分_系統261,11:20:00,11:20:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
平日_11時13分_系統261,11:21:00,11:21:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
平日_11時13分_系統261,11:26:00,11:26:00,200463_01,10,前橋駅,0,0,1
平日_11時13分_系統261,11:27:00,11:27:00,200768_02,11,前橋駅,0,0,1
平日_11時13分_系統261,11:28:00,11:28:00,200730_02,12,前橋駅,0,0,1
平日_11時13分_系統261,11:30:00,11:30:00,200827_02,13,前橋駅,0,0,1
平日_11時13分_系統261,11:31:00,11:31:00,200506_02,14,前橋駅,0,0,1
平日_11時13分_系統261,11:32:00,11:32:00,200017_02,15,前橋駅,0,0,1
平日_11時13分_系統261,11:33:00,11:33:00,200519_02,16,前橋駅,0,0,1
平日_11時13分_系統261,11:33:00,11:33:00,200987_02,17,前橋駅,0,0,1
平日_11時13分_系統261,11:35:00,11:35:00,200985_02,18,前橋駅,0,0,1
平日_11時13分_系統261,11:36:00,11:36:00,200895_02,19,前橋駅,0,0,1
平日_11時13分_系統261,11:38:00,11:38:00,200395_02,20,前橋駅,0,0,1
平日_11時13分_系統261,11:38:00,11:38:00,200153_02,21,前橋駅,0,0,1
平日_11時13分_系統261,11:39:00,11:39:00,201100_02,22,前橋駅,0,0,1
平日_11時13分_系統261,11:40:00,11:40:00,200981_02,23,前橋駅,0,0,1
平日_11時13分_系統261,11:41:00,11:41:00,200872_02,24,前橋駅,0,0,1
平日_11時13分_系統261,11:42:00,11:42:00,201056_02,25,前橋駅,0,0,1
平日_11時13分_系統261,11:44:00,11:44:00,200189_02,26,前橋駅,0,0,1
平日_11時13分_系統261,11:45:00,11:45:00,200722_02,27,前橋駅,0,0,1
平日_11時13分_系統261,11:46:00,11:46:00,200343_02,28,前橋駅,0,0,1
平日_11時13分_系統261,11:47:00,11:47:00,200348_02,29,前橋駅,0,0,1
平日_11時13分_系統261,11:49:00,11:49:00,201071_02,30,前橋駅,0,0,1
平日_11時13分_系統261,11:51:00,11:51:00,200542_02,31,前橋駅,0,0,1
平日_11時13分_系統261,11:53:00,11:53:00,200141_02,32,前橋駅,0,0,1
平日_11時13分_系統261,11:54:00,11:54:00,200142_02,33,前橋駅,0,0,1
平日_11時13分_系統261,11:56:00,11:56:00,200262_02,34,前橋駅,0,0,1
平日_11時13分_系統261,11:57:00,11:57:00,201015_02,35,前橋駅,0,0,1
平日_11時13分_系統261,11:59:00,11:59:00,200379_02,36,前橋駅,0,0,1
平日_11時13分_系統261,12:00:00,12:00:00,200455_02,37,前橋駅,0,0,1
平日_11時13分_系統261,12:02:00,12:02:00,200702_02,38,前橋駅,0,0,1
平日_11時13分_系統261,12:03:00,12:03:00,200703_02,39,前橋駅,0,0,1
平日_11時13分_系統261,12:05:00,12:05:00,201081_02,40,前橋駅,0,0,1
平日_11時13分_系統261,12:07:00,12:07:00,200998_02,41,前橋駅,0,0,1
平日_11時13分_系統261,12:10:00,12:10:00,200718_10,42,前橋駅,1,0,1
平日_11時25分_系統583,11:25:00,11:25:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_11時25分_系統583,11:27:00,11:27:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_11時25分_系統583,11:28:00,11:28:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_11時25分_系統583,11:29:00,11:29:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_11時25分_系統583,11:32:00,11:32:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_11時25分_系統583,11:35:00,11:35:00,200927_01,6,前橋駅,0,0,1
平日_11時25分_系統583,11:35:00,11:35:00,200800_02,7,前橋駅,0,0,1
平日_11時25分_系統583,11:36:00,11:36:00,200928_02,8,前橋駅,0,0,1
平日_11時25分_系統583,11:38:00,11:38:00,201071_02,9,前橋駅,0,0,1
平日_11時25分_系統583,11:40:00,11:40:00,200542_02,10,前橋駅,0,0,1
平日_11時25分_系統583,11:42:00,11:42:00,200141_02,11,前橋駅,0,0,1
平日_11時25分_系統583,11:43:00,11:43:00,200142_02,12,前橋駅,0,0,1
平日_11時25分_系統583,11:45:00,11:45:00,200262_02,13,前橋駅,0,0,1
平日_11時25分_系統583,11:46:00,11:46:00,201015_02,14,前橋駅,0,0,1
平日_11時25分_系統583,11:48:00,11:48:00,200379_02,15,前橋駅,0,0,1
平日_11時25分_系統583,11:49:00,11:49:00,200455_02,16,前橋駅,0,0,1
平日_11時25分_系統583,11:51:00,11:51:00,200702_02,17,前橋駅,0,0,1
平日_11時25分_系統583,11:52:00,11:52:00,200703_02,18,前橋駅,0,0,1
平日_11時25分_系統583,11:54:00,11:54:00,201081_02,19,前橋駅,0,0,1
平日_11時25分_系統583,11:56:00,11:56:00,200998_02,20,前橋駅,0,0,1
平日_11時25分_系統583,11:59:00,11:59:00,200718_10,21,前橋駅,1,0,1
平日_11時28分_系統266,11:28:00,11:28:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
平日_11時28分_系統266,11:29:00,11:29:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:31:00,11:31:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:33:00,11:33:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:33:00,11:33:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:35:00,11:35:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:36:00,11:36:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:38:00,11:38:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:39:00,11:39:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:40:00,11:40:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:41:00,11:41:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:42:00,11:42:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:44:00,11:44:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:46:00,11:46:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:47:00,11:47:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:48:00,11:48:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_11時28分_系統266,11:50:00,11:50:00,200273_01,17,渋川駅,0,0,1
平日_11時28分_系統266,11:53:00,11:53:00,200189_01,18,渋川駅,0,0,1
平日_11時28分_系統266,11:55:00,11:55:00,201056_01,19,渋川駅,0,0,1
平日_11時28分_系統266,11:56:00,11:56:00,200872_01,20,渋川駅,0,0,1
平日_11時28分_系統266,11:57:00,11:57:00,200981_01,21,渋川駅,0,0,1
平日_11時28分_系統266,11:58:00,11:58:00,201100_01,22,渋川駅,0,0,1
平日_11時28分_系統266,11:59:00,11:59:00,200153_01,23,渋川駅,0,0,1
平日_11時28分_系統266,11:59:00,11:59:00,200395_01,24,渋川駅,0,0,1
平日_11時28分_系統266,12:00:00,12:00:00,200895_01,25,渋川駅,0,0,1
平日_11時28分_系統266,12:02:00,12:02:00,200985_01,26,渋川駅,0,0,1
平日_11時28分_系統266,12:02:00,12:02:00,200987_01,27,渋川駅,0,0,1
平日_11時28分_系統266,12:03:00,12:03:00,200519_01,28,渋川駅,0,0,1
平日_11時28分_系統266,12:04:00,12:04:00,200017_01,29,渋川駅,0,0,1
平日_11時28分_系統266,12:06:00,12:06:00,200506_01,30,渋川駅,0,0,1
平日_11時28分_系統266,12:07:00,12:07:00,200827_01,31,渋川駅,0,0,1
平日_11時28分_系統266,12:09:00,12:09:00,200730_01,32,渋川駅,0,0,1
平日_11時28分_系統266,12:10:00,12:10:00,200768_01,33,渋川駅,0,0,1
平日_11時28分_系統266,12:13:00,12:13:00,200463_10,34,渋川駅,1,0,1
平日_11時40分_系統584,11:40:00,11:40:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
平日_11時40分_系統584,11:41:00,11:41:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:43:00,11:43:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:45:00,11:45:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:45:00,11:45:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:47:00,11:47:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:48:00,11:48:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:50:00,11:50:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:51:00,11:51:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:52:00,11:52:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:55:00,11:55:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:56:00,11:56:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:57:00,11:57:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:58:00,11:58:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_11時40分_系統584,11:59:00,11:59:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_11時40分_系統584,12:01:00,12:01:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_11時40分_系統584,12:02:00,12:02:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_11時40分_系統584,12:03:00,12:03:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_11時40分_系統584,12:05:00,12:05:00,200927_01,19,群馬大学荒牧,0,0,1
平日_11時40分_系統584,12:06:00,12:06:00,201185_01,20,群馬大学荒牧,0,0,1
平日_11時40分_系統584,12:10:00,12:10:00,200348_01,21,群馬大学荒牧,0,0,1
平日_11時40分_系統584,12:11:00,12:11:00,200343_01,22,群馬大学荒牧,0,0,1
平日_11時40分_系統584,12:12:00,12:12:00,200722_01,23,群馬大学荒牧,0,0,1
平日_11時40分_系統584,12:15:00,12:15:00,200273_01,24,群馬大学荒牧,1,0,1
平日_11時52分_系統587,11:52:00,11:52:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
平日_11時52分_系統587,11:54:00,11:54:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
平日_11時52分_系統587,11:55:00,11:55:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
平日_11時52分_系統587,11:56:00,11:56:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
平日_11時52分_系統587,11:58:00,11:58:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
平日_11時52分_系統587,12:00:00,12:00:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
平日_11時52分_系統587,12:02:00,12:02:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
平日_11時52分_系統587,12:03:00,12:03:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
平日_11時52分_系統587,12:04:00,12:04:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
平日_11時52分_系統587,12:07:00,12:07:00,200261_01,10,前橋駅,0,0,1
平日_11時52分_系統587,12:08:00,12:08:00,200503_02,11,前橋駅,0,0,1
平日_11時52分_系統587,12:10:00,12:10:00,200262_02,12,前橋駅,0,0,1
平日_11時52分_系統587,12:11:00,12:11:00,201015_02,13,前橋駅,0,0,1
平日_11時52分_系統587,12:13:00,12:13:00,200379_02,14,前橋駅,0,0,1
平日_11時52分_系統587,12:14:00,12:14:00,200455_02,15,前橋駅,0,0,1
平日_11時52分_系統587,12:16:00,12:16:00,200702_02,16,前橋駅,0,0,1
平日_11時52分_系統587,12:17:00,12:17:00,200703_02,17,前橋駅,0,0,1
平日_11時52分_系統587,12:19:00,12:19:00,201081_02,18,前橋駅,0,0,1
平日_11時52分_系統587,12:21:00,12:21:00,200998_02,19,前橋駅,0,0,1
平日_11時52分_系統587,12:24:00,12:24:00,200718_10,20,前橋駅,1,0,1
平日_11時56分_系統267,11:56:00,11:56:00,200463_01,1,前橋駅,0,1,1
平日_11時56分_系統267,11:57:00,11:57:00,200768_02,2,前橋駅,0,0,1
平日_11時56分_系統267,11:58:00,11:58:00,200730_02,3,前橋駅,0,0,1
平日_11時56分_系統267,12:00:00,12:00:00,200827_02,4,前橋駅,0,0,1
平日_11時56分_系統267,12:01:00,12:01:00,200506_02,5,前橋駅,0,0,1
平日_11時56分_系統267,12:02:00,12:02:00,200017_02,6,前橋駅,0,0,1
平日_11時56分_系統267,12:03:00,12:03:00,200519_02,7,前橋駅,0,0,1
平日_11時56分_系統267,12:03:00,12:03:00,200987_02,8,前橋駅,0,0,1
平日_11時56分_系統267,12:05:00,12:05:00,200985_02,9,前橋駅,0,0,1
平日_11時56分_系統267,12:06:00,12:06:00,200895_02,10,前橋駅,0,0,1
平日_11時56分_系統267,12:08:00,12:08:00,200395_02,11,前橋駅,0,0,1
平日_11時56分_系統267,12:08:00,12:08:00,200153_02,12,前橋駅,0,0,1
平日_11時56分_系統267,12:09:00,12:09:00,201100_02,13,前橋駅,0,0,1
平日_11時56分_系統267,12:10:00,12:10:00,200981_02,14,前橋駅,0,0,1
平日_11時56分_系統267,12:11:00,12:11:00,200872_02,15,前橋駅,0,0,1
平日_11時56分_系統267,12:12:00,12:12:00,201056_02,16,前橋駅,0,0,1
平日_11時56分_系統267,12:14:00,12:14:00,200189_02,17,前橋駅,0,0,1
平日_11時56分_系統267,12:15:00,12:15:00,200722_02,18,前橋駅,0,0,1
平日_11時56分_系統267,12:16:00,12:16:00,200343_02,19,前橋駅,0,0,1
平日_11時56分_系統267,12:17:00,12:17:00,200348_02,20,前橋駅,0,0,1
平日_11時56分_系統267,12:19:00,12:19:00,201071_02,21,前橋駅,0,0,1
平日_11時56分_系統267,12:21:00,12:21:00,200542_02,22,前橋駅,0,0,1
平日_11時56分_系統267,12:23:00,12:23:00,200141_02,23,前橋駅,0,0,1
平日_11時56分_系統267,12:24:00,12:24:00,200142_02,24,前橋駅,0,0,1
平日_11時56分_系統267,12:26:00,12:26:00,200262_02,25,前橋駅,0,0,1
平日_11時56分_系統267,12:27:00,12:27:00,201015_02,26,前橋駅,0,0,1
平日_11時56分_系統267,12:29:00,12:29:00,200379_02,27,前橋駅,0,0,1
平日_11時56分_系統267,12:30:00,12:30:00,200455_02,28,前橋駅,0,0,1
平日_11時56分_系統267,12:32:00,12:32:00,200702_02,29,前橋駅,0,0,1
平日_11時56分_系統267,12:33:00,12:33:00,200703_02,30,前橋駅,0,0,1
平日_11時56分_系統267,12:35:00,12:35:00,201081_02,31,前橋駅,0,0,1
平日_11時56分_系統267,12:37:00,12:37:00,200998_02,32,前橋駅,0,0,1
平日_11時56分_系統267,12:40:00,12:40:00,200718_10,33,前橋駅,1,0,1
平日_11時57分_系統262,11:57:00,11:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
平日_11時57分_系統262,11:58:00,11:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:00:00,12:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:02:00,12:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:02:00,12:02:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:04:00,12:04:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:05:00,12:05:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:07:00,12:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:08:00,12:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:09:00,12:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:10:00,12:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:11:00,12:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:13:00,12:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:15:00,12:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:16:00,12:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:17:00,12:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:20:00,12:20:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:22:00,12:22:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:23:00,12:23:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:24:00,12:24:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:25:00,12:25:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:26:00,12:26:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:26:00,12:26:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:27:00,12:27:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:29:00,12:29:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:29:00,12:29:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:30:00,12:30:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:31:00,12:31:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:33:00,12:33:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:34:00,12:34:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:36:00,12:36:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:37:00,12:37:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
平日_11時57分_系統262,12:39:00,12:39:00,200463_06,33,渋川市内循環,0,0,1
平日_11時57分_系統262,12:40:00,12:40:00,200468_01,34,渋川市内循環,0,0,1
平日_11時57分_系統262,12:42:00,12:42:00,200466_01,35,渋川市内循環,0,0,1
平日_11時57分_系統262,12:43:00,12:43:00,200704_01,36,渋川市内循環,0,0,1
平日_11時57分_系統262,12:44:00,12:44:00,200476_02,37,渋川市内循環,0,0,1
平日_11時57分_系統262,12:45:00,12:45:00,200477_02,38,渋川市内循環,0,0,1
平日_11時57分_系統262,12:46:00,12:46:00,200430_02,39,渋川市内循環,0,0,1
平日_11時57分_系統262,12:47:00,12:47:00,200007_02,40,渋川市内循環,0,0,1
平日_11時57分_系統262,12:52:00,12:52:00,210463_10,41,渋川市内循環,1,0,1
平日_12時10分_系統586,12:10:00,12:10:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_12時10分_系統586,12:11:00,12:11:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_12時10分_系統586,12:13:00,12:13:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_12時10分_系統586,12:15:00,12:15:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_12時10分_系統586,12:15:00,12:15:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_12時10分_系統586,12:17:00,12:17:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_12時10分_系統586,12:18:00,12:18:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_12時10分_系統586,12:20:00,12:20:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_12時10分_系統586,12:21:00,12:21:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_12時10分_系統586,12:22:00,12:22:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_12時10分_系統586,12:25:00,12:25:00,200261_01,11,群馬大学荒牧,0,0,1
平日_12時10分_系統586,12:26:00,12:26:00,200503_02,12,群馬大学荒牧,0,0,1
平日_12時10分_系統586,12:27:00,12:27:00,200142_01,13,群馬大学荒牧,0,0,1
平日_12時10分_系統586,12:28:00,12:28:00,200141_01,14,群馬大学荒牧,0,0,1
平日_12時10分_系統586,12:29:00,12:29:00,200542_01,15,群馬大学荒牧,0,0,1
平日_12時10分_系統586,12:31:00,12:31:00,201071_01,16,群馬大学荒牧,0,0,1
平日_12時10分_系統586,12:33:00,12:33:00,200348_01,17,群馬大学荒牧,0,0,1
平日_12時10分_系統586,12:34:00,12:34:00,200343_01,18,群馬大学荒牧,0,0,1
平日_12時10分_系統586,12:35:00,12:35:00,200722_01,19,群馬大学荒牧,0,0,1
平日_12時10分_系統586,12:38:00,12:38:00,200273_01,20,群馬大学荒牧,1,0,1
平日_12時25分_系統583,12:25:00,12:25:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_12時25分_系統583,12:27:00,12:27:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_12時25分_系統583,12:28:00,12:28:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_12時25分_系統583,12:29:00,12:29:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_12時25分_系統583,12:32:00,12:32:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_12時25分_系統583,12:35:00,12:35:00,200927_01,6,前橋駅,0,0,1
平日_12時25分_系統583,12:35:00,12:35:00,200800_02,7,前橋駅,0,0,1
平日_12時25分_系統583,12:36:00,12:36:00,200928_02,8,前橋駅,0,0,1
平日_12時25分_系統583,12:38:00,12:38:00,201071_02,9,前橋駅,0,0,1
平日_12時25分_系統583,12:40:00,12:40:00,200542_02,10,前橋駅,0,0,1
平日_12時25分_系統583,12:42:00,12:42:00,200141_02,11,前橋駅,0,0,1
平日_12時25分_系統583,12:43:00,12:43:00,200142_02,12,前橋駅,0,0,1
平日_12時25分_系統583,12:45:00,12:45:00,200262_02,13,前橋駅,0,0,1
平日_12時25分_系統583,12:46:00,12:46:00,201015_02,14,前橋駅,0,0,1
平日_12時25分_系統583,12:48:00,12:48:00,200379_02,15,前橋駅,0,0,1
平日_12時25分_系統583,12:49:00,12:49:00,200455_02,16,前橋駅,0,0,1
平日_12時25分_系統583,12:51:00,12:51:00,200702_02,17,前橋駅,0,0,1
平日_12時25分_系統583,12:52:00,12:52:00,200703_02,18,前橋駅,0,0,1
平日_12時25分_系統583,12:54:00,12:54:00,201081_02,19,前橋駅,0,0,1
平日_12時25分_系統583,12:56:00,12:56:00,200998_02,20,前橋駅,0,0,1
平日_12時25分_系統583,12:59:00,12:59:00,200718_10,21,前橋駅,1,0,1
平日_12時26分_系統267,12:26:00,12:26:00,200463_01,1,前橋駅,0,1,1
平日_12時26分_系統267,12:27:00,12:27:00,200768_02,2,前橋駅,0,0,1
平日_12時26分_系統267,12:28:00,12:28:00,200730_02,3,前橋駅,0,0,1
平日_12時26分_系統267,12:30:00,12:30:00,200827_02,4,前橋駅,0,0,1
平日_12時26分_系統267,12:31:00,12:31:00,200506_02,5,前橋駅,0,0,1
平日_12時26分_系統267,12:32:00,12:32:00,200017_02,6,前橋駅,0,0,1
平日_12時26分_系統267,12:33:00,12:33:00,200519_02,7,前橋駅,0,0,1
平日_12時26分_系統267,12:33:00,12:33:00,200987_02,8,前橋駅,0,0,1
平日_12時26分_系統267,12:35:00,12:35:00,200985_02,9,前橋駅,0,0,1
平日_12時26分_系統267,12:36:00,12:36:00,200895_02,10,前橋駅,0,0,1
平日_12時26分_系統267,12:38:00,12:38:00,200395_02,11,前橋駅,0,0,1
平日_12時26分_系統267,12:38:00,12:38:00,200153_02,12,前橋駅,0,0,1
平日_12時26分_系統267,12:39:00,12:39:00,201100_02,13,前橋駅,0,0,1
平日_12時26分_系統267,12:40:00,12:40:00,200981_02,14,前橋駅,0,0,1
平日_12時26分_系統267,12:41:00,12:41:00,200872_02,15,前橋駅,0,0,1
平日_12時26分_系統267,12:42:00,12:42:00,201056_02,16,前橋駅,0,0,1
平日_12時26分_系統267,12:44:00,12:44:00,200189_02,17,前橋駅,0,0,1
平日_12時26分_系統267,12:45:00,12:45:00,200722_02,18,前橋駅,0,0,1
平日_12時26分_系統267,12:46:00,12:46:00,200343_02,19,前橋駅,0,0,1
平日_12時26分_系統267,12:47:00,12:47:00,200348_02,20,前橋駅,0,0,1
平日_12時26分_系統267,12:49:00,12:49:00,201071_02,21,前橋駅,0,0,1
平日_12時26分_系統267,12:51:00,12:51:00,200542_02,22,前橋駅,0,0,1
平日_12時26分_系統267,12:53:00,12:53:00,200141_02,23,前橋駅,0,0,1
平日_12時26分_系統267,12:54:00,12:54:00,200142_02,24,前橋駅,0,0,1
平日_12時26分_系統267,12:56:00,12:56:00,200262_02,25,前橋駅,0,0,1
平日_12時26分_系統267,12:57:00,12:57:00,201015_02,26,前橋駅,0,0,1
平日_12時26分_系統267,12:59:00,12:59:00,200379_02,27,前橋駅,0,0,1
平日_12時26分_系統267,13:00:00,13:00:00,200455_02,28,前橋駅,0,0,1
平日_12時26分_系統267,13:02:00,13:02:00,200702_02,29,前橋駅,0,0,1
平日_12時26分_系統267,13:03:00,13:03:00,200703_02,30,前橋駅,0,0,1
平日_12時26分_系統267,13:05:00,13:05:00,201081_02,31,前橋駅,0,0,1
平日_12時26分_系統267,13:07:00,13:07:00,200998_02,32,前橋駅,0,0,1
平日_12時26分_系統267,13:10:00,13:10:00,200718_10,33,前橋駅,1,0,1
平日_12時27分_系統268,12:27:00,12:27:00,200718_02,1,渋川駅,0,1,1
平日_12時27分_系統268,12:28:00,12:28:00,200998_01,2,渋川駅,0,0,1
平日_12時27分_系統268,12:30:00,12:30:00,201081_01,3,渋川駅,0,0,1
平日_12時27分_系統268,12:32:00,12:32:00,200703_01,4,渋川駅,0,0,1
平日_12時27分_系統268,12:32:00,12:32:00,200702_01,5,渋川駅,0,0,1
平日_12時27分_系統268,12:34:00,12:34:00,200455_01,6,渋川駅,0,0,1
平日_12時27分_系統268,12:35:00,12:35:00,200379_01,7,渋川駅,0,0,1
平日_12時27分_系統268,12:37:00,12:37:00,201015_01,8,渋川駅,0,0,1
平日_12時27分_系統268,12:38:00,12:38:00,200262_01,9,渋川駅,0,0,1
平日_12時27分_系統268,12:39:00,12:39:00,200142_01,10,渋川駅,0,0,1
平日_12時27分_系統268,12:40:00,12:40:00,200141_01,11,渋川駅,0,0,1
平日_12時27分_系統268,12:41:00,12:41:00,200542_01,12,渋川駅,0,0,1
平日_12時27分_系統268,12:43:00,12:43:00,201071_01,13,渋川駅,0,0,1
平日_12時27分_系統268,12:45:00,12:45:00,200348_01,14,渋川駅,0,0,1
平日_12時27分_系統268,12:46:00,12:46:00,200343_01,15,渋川駅,0,0,1
平日_12時27分_系統268,12:47:00,12:47:00,200722_01,16,渋川駅,0,0,1
平日_12時27分_系統268,12:49:00,12:49:00,200189_01,17,渋川駅,0,0,1
平日_12時27分_系統268,12:51:00,12:51:00,201056_01,18,渋川駅,0,0,1
平日_12時27分_系統268,12:52:00,12:52:00,200872_01,19,渋川駅,0,0,1
平日_12時27分_系統268,12:53:00,12:53:00,200981_01,20,渋川駅,0,0,1
平日_12時27分_系統268,12:54:00,12:54:00,201100_01,21,渋川駅,0,0,1
平日_12時27分_系統268,12:55:00,12:55:00,200153_01,22,渋川駅,0,0,1
平日_12時27分_系統268,12:55:00,12:55:00,200395_01,23,渋川駅,0,0,1
平日_12時27分_系統268,12:56:00,12:56:00,200895_01,24,渋川駅,0,0,1
平日_12時27分_系統268,12:58:00,12:58:00,200985_01,25,渋川駅,0,0,1
平日_12時27分_系統268,12:58:00,12:58:00,200987_01,26,渋川駅,0,0,1
平日_12時27分_系統268,12:59:00,12:59:00,200519_01,27,渋川駅,0,0,1
平日_12時27分_系統268,13:00:00,13:00:00,200017_01,28,渋川駅,0,0,1
平日_12時27分_系統268,13:02:00,13:02:00,200506_01,29,渋川駅,0,0,1
平日_12時27分_系統268,13:03:00,13:03:00,200827_01,30,渋川駅,0,0,1
平日_12時27分_系統268,13:05:00,13:05:00,200730_01,31,渋川駅,0,0,1
平日_12時27分_系統268,13:06:00,13:06:00,200768_01,32,渋川駅,0,0,1
平日_12時27分_系統268,13:09:00,13:09:00,200463_10,33,渋川駅,1,0,1
平日_12時40分_系統584,12:40:00,12:40:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
平日_12時40分_系統584,12:41:00,12:41:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:43:00,12:43:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:45:00,12:45:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:45:00,12:45:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:47:00,12:47:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:48:00,12:48:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:50:00,12:50:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:51:00,12:51:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:52:00,12:52:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:55:00,12:55:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:56:00,12:56:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:57:00,12:57:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:58:00,12:58:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_12時40分_系統584,12:59:00,12:59:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_12時40分_系統584,13:01:00,13:01:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_12時40分_系統584,13:02:00,13:02:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_12時40分_系統584,13:03:00,13:03:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_12時40分_系統584,13:05:00,13:05:00,200927_01,19,群馬大学荒牧,0,0,1
平日_12時40分_系統584,13:06:00,13:06:00,201185_01,20,群馬大学荒牧,0,0,1
平日_12時40分_系統584,13:10:00,13:10:00,200348_01,21,群馬大学荒牧,0,0,1
平日_12時40分_系統584,13:11:00,13:11:00,200343_01,22,群馬大学荒牧,0,0,1
平日_12時40分_系統584,13:12:00,13:12:00,200722_01,23,群馬大学荒牧,0,0,1
平日_12時40分_系統584,13:15:00,13:15:00,200273_01,24,群馬大学荒牧,1,0,1
平日_12時43分_系統261,12:43:00,12:43:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
平日_12時43分_系統261,12:44:00,12:44:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
平日_12時43分_系統261,12:45:00,12:45:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
平日_12時43分_系統261,12:46:00,12:46:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
平日_12時43分_系統261,12:47:00,12:47:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
平日_12時43分_系統261,12:48:00,12:48:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
平日_12時43分_系統261,12:49:00,12:49:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
平日_12時43分_系統261,12:50:00,12:50:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
平日_12時43分_系統261,12:51:00,12:51:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
平日_12時43分_系統261,12:56:00,12:56:00,200463_01,10,前橋駅,0,0,1
平日_12時43分_系統261,12:57:00,12:57:00,200768_02,11,前橋駅,0,0,1
平日_12時43分_系統261,12:58:00,12:58:00,200730_02,12,前橋駅,0,0,1
平日_12時43分_系統261,13:00:00,13:00:00,200827_02,13,前橋駅,0,0,1
平日_12時43分_系統261,13:01:00,13:01:00,200506_02,14,前橋駅,0,0,1
平日_12時43分_系統261,13:02:00,13:02:00,200017_02,15,前橋駅,0,0,1
平日_12時43分_系統261,13:03:00,13:03:00,200519_02,16,前橋駅,0,0,1
平日_12時43分_系統261,13:03:00,13:03:00,200987_02,17,前橋駅,0,0,1
平日_12時43分_系統261,13:05:00,13:05:00,200985_02,18,前橋駅,0,0,1
平日_12時43分_系統261,13:06:00,13:06:00,200895_02,19,前橋駅,0,0,1
平日_12時43分_系統261,13:08:00,13:08:00,200395_02,20,前橋駅,0,0,1
平日_12時43分_系統261,13:08:00,13:08:00,200153_02,21,前橋駅,0,0,1
平日_12時43分_系統261,13:09:00,13:09:00,201100_02,22,前橋駅,0,0,1
平日_12時43分_系統261,13:10:00,13:10:00,200981_02,23,前橋駅,0,0,1
平日_12時43分_系統261,13:11:00,13:11:00,200872_02,24,前橋駅,0,0,1
平日_12時43分_系統261,13:12:00,13:12:00,201056_02,25,前橋駅,0,0,1
平日_12時43分_系統261,13:14:00,13:14:00,200189_02,26,前橋駅,0,0,1
平日_12時43分_系統261,13:15:00,13:15:00,200722_02,27,前橋駅,0,0,1
平日_12時43分_系統261,13:16:00,13:16:00,200343_02,28,前橋駅,0,0,1
平日_12時43分_系統261,13:17:00,13:17:00,200348_02,29,前橋駅,0,0,1
平日_12時43分_系統261,13:19:00,13:19:00,201071_02,30,前橋駅,0,0,1
平日_12時43分_系統261,13:21:00,13:21:00,200542_02,31,前橋駅,0,0,1
平日_12時43分_系統261,13:23:00,13:23:00,200141_02,32,前橋駅,0,0,1
平日_12時43分_系統261,13:24:00,13:24:00,200142_02,33,前橋駅,0,0,1
平日_12時43分_系統261,13:26:00,13:26:00,200262_02,34,前橋駅,0,0,1
平日_12時43分_系統261,13:27:00,13:27:00,201015_02,35,前橋駅,0,0,1
平日_12時43分_系統261,13:29:00,13:29:00,200379_02,36,前橋駅,0,0,1
平日_12時43分_系統261,13:30:00,13:30:00,200455_02,37,前橋駅,0,0,1
平日_12時43分_系統261,13:32:00,13:32:00,200702_02,38,前橋駅,0,0,1
平日_12時43分_系統261,13:33:00,13:33:00,200703_02,39,前橋駅,0,0,1
平日_12時43分_系統261,13:35:00,13:35:00,201081_02,40,前橋駅,0,0,1
平日_12時43分_系統261,13:37:00,13:37:00,200998_02,41,前橋駅,0,0,1
平日_12時43分_系統261,13:40:00,13:40:00,200718_10,42,前橋駅,1,0,1
平日_12時55分_系統587,12:55:00,12:55:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
平日_12時55分_系統587,12:57:00,12:57:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
平日_12時55分_系統587,12:58:00,12:58:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
平日_12時55分_系統587,12:59:00,12:59:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
平日_12時55分_系統587,13:01:00,13:01:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
平日_12時55分_系統587,13:03:00,13:03:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
平日_12時55分_系統587,13:05:00,13:05:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
平日_12時55分_系統587,13:06:00,13:06:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
平日_12時55分_系統587,13:07:00,13:07:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
平日_12時55分_系統587,13:10:00,13:10:00,200261_01,10,前橋駅,0,0,1
平日_12時55分_系統587,13:11:00,13:11:00,200503_02,11,前橋駅,0,0,1
平日_12時55分_系統587,13:13:00,13:13:00,200262_02,12,前橋駅,0,0,1
平日_12時55分_系統587,13:14:00,13:14:00,201015_02,13,前橋駅,0,0,1
平日_12時55分_系統587,13:16:00,13:16:00,200379_02,14,前橋駅,0,0,1
平日_12時55分_系統587,13:17:00,13:17:00,200455_02,15,前橋駅,0,0,1
平日_12時55分_系統587,13:19:00,13:19:00,200702_02,16,前橋駅,0,0,1
平日_12時55分_系統587,13:20:00,13:20:00,200703_02,17,前橋駅,0,0,1
平日_12時55分_系統587,13:22:00,13:22:00,201081_02,18,前橋駅,0,0,1
平日_12時55分_系統587,13:24:00,13:24:00,200998_02,19,前橋駅,0,0,1
平日_12時55分_系統587,13:27:00,13:27:00,200718_10,20,前橋駅,1,0,1
平日_12時57分_系統266,12:57:00,12:57:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
平日_12時57分_系統266,12:58:00,12:58:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:00:00,13:00:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:02:00,13:02:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:02:00,13:02:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:04:00,13:04:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:05:00,13:05:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:07:00,13:07:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:08:00,13:08:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:09:00,13:09:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:10:00,13:10:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:11:00,13:11:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:13:00,13:13:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:15:00,13:15:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:16:00,13:16:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:17:00,13:17:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_12時57分_系統266,13:19:00,13:19:00,200273_01,17,渋川駅,0,0,1
平日_12時57分_系統266,13:22:00,13:22:00,200189_01,18,渋川駅,0,0,1
平日_12時57分_系統266,13:24:00,13:24:00,201056_01,19,渋川駅,0,0,1
平日_12時57分_系統266,13:25:00,13:25:00,200872_01,20,渋川駅,0,0,1
平日_12時57分_系統266,13:26:00,13:26:00,200981_01,21,渋川駅,0,0,1
平日_12時57分_系統266,13:27:00,13:27:00,201100_01,22,渋川駅,0,0,1
平日_12時57分_系統266,13:28:00,13:28:00,200153_01,23,渋川駅,0,0,1
平日_12時57分_系統266,13:28:00,13:28:00,200395_01,24,渋川駅,0,0,1
平日_12時57分_系統266,13:29:00,13:29:00,200895_01,25,渋川駅,0,0,1
平日_12時57分_系統266,13:31:00,13:31:00,200985_01,26,渋川駅,0,0,1
平日_12時57分_系統266,13:31:00,13:31:00,200987_01,27,渋川駅,0,0,1
平日_12時57分_系統266,13:32:00,13:32:00,200519_01,28,渋川駅,0,0,1
平日_12時57分_系統266,13:33:00,13:33:00,200017_01,29,渋川駅,0,0,1
平日_12時57分_系統266,13:35:00,13:35:00,200506_01,30,渋川駅,0,0,1
平日_12時57分_系統266,13:36:00,13:36:00,200827_01,31,渋川駅,0,0,1
平日_12時57分_系統266,13:38:00,13:38:00,200730_01,32,渋川駅,0,0,1
平日_12時57分_系統266,13:39:00,13:39:00,200768_01,33,渋川駅,0,0,1
平日_12時57分_系統266,13:42:00,13:42:00,200463_10,34,渋川駅,1,0,1
平日_13時10分_系統582,13:10:00,13:10:00,200718_02,1,群馬大学荒牧（南橘団地 経由）,0,1,1
平日_13時10分_系統582,13:11:00,13:11:00,200998_01,2,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:13:00,13:13:00,201081_01,3,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:15:00,13:15:00,200703_01,4,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:15:00,13:15:00,200702_01,5,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:17:00,13:17:00,200455_01,6,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:18:00,13:18:00,200379_01,7,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:20:00,13:20:00,201015_01,8,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:21:00,13:21:00,200262_01,9,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:22:00,13:22:00,200142_01,10,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:23:00,13:23:00,200141_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:24:00,13:24:00,200542_01,12,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:26:00,13:26:00,201071_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:27:00,13:27:00,200928_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:28:00,13:28:00,200800_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時10分_系統582,13:30:00,13:30:00,200927_01,16,群馬大学荒牧,0,0,1
平日_13時10分_系統582,13:31:00,13:31:00,201185_01,17,群馬大学荒牧,0,0,1
平日_13時10分_系統582,13:35:00,13:35:00,200348_01,18,群馬大学荒牧,0,0,1
平日_13時10分_系統582,13:36:00,13:36:00,200343_01,19,群馬大学荒牧,0,0,1
平日_13時10分_系統582,13:37:00,13:37:00,200722_01,20,群馬大学荒牧,0,0,1
平日_13時10分_系統582,13:40:00,13:40:00,200273_01,21,群馬大学荒牧,1,0,1
平日_13時15分_系統529,13:15:00,13:15:00,200718_02,1,群大病院,0,1,1
平日_13時15分_系統529,13:16:00,13:16:00,200998_01,2,群大病院,0,0,1
平日_13時15分_系統529,13:18:00,13:18:00,201081_01,3,群大病院,0,0,1
平日_13時15分_系統529,13:20:00,13:20:00,200703_01,4,群大病院,0,0,1
平日_13時15分_系統529,13:20:00,13:20:00,200702_01,5,群大病院,0,0,1
平日_13時15分_系統529,13:22:00,13:22:00,200455_01,6,群大病院,0,0,1
平日_13時15分_系統529,13:23:00,13:23:00,200379_01,7,群大病院,0,0,1
平日_13時15分_系統529,13:25:00,13:25:00,201015_01,8,群大病院,0,0,1
平日_13時15分_系統529,13:26:00,13:26:00,200262_01,9,群大病院,0,0,1
平日_13時15分_系統529,13:27:00,13:27:00,200503_01,10,群大病院,0,0,1
平日_13時15分_系統529,13:31:00,13:31:00,200261_01,11,群大病院,1,0,1
平日_13時25分_系統583,13:25:00,13:25:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_13時25分_系統583,13:27:00,13:27:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_13時25分_系統583,13:28:00,13:28:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_13時25分_系統583,13:29:00,13:29:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_13時25分_系統583,13:32:00,13:32:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_13時25分_系統583,13:35:00,13:35:00,200927_01,6,前橋駅,0,0,1
平日_13時25分_系統583,13:35:00,13:35:00,200800_02,7,前橋駅,0,0,1
平日_13時25分_系統583,13:36:00,13:36:00,200928_02,8,前橋駅,0,0,1
平日_13時25分_系統583,13:38:00,13:38:00,201071_02,9,前橋駅,0,0,1
平日_13時25分_系統583,13:40:00,13:40:00,200542_02,10,前橋駅,0,0,1
平日_13時25分_系統583,13:42:00,13:42:00,200141_02,11,前橋駅,0,0,1
平日_13時25分_系統583,13:43:00,13:43:00,200142_02,12,前橋駅,0,0,1
平日_13時25分_系統583,13:45:00,13:45:00,200262_02,13,前橋駅,0,0,1
平日_13時25分_系統583,13:46:00,13:46:00,201015_02,14,前橋駅,0,0,1
平日_13時25分_系統583,13:48:00,13:48:00,200379_02,15,前橋駅,0,0,1
平日_13時25分_系統583,13:49:00,13:49:00,200455_02,16,前橋駅,0,0,1
平日_13時25分_系統583,13:51:00,13:51:00,200702_02,17,前橋駅,0,0,1
平日_13時25分_系統583,13:52:00,13:52:00,200703_02,18,前橋駅,0,0,1
平日_13時25分_系統583,13:54:00,13:54:00,201081_02,19,前橋駅,0,0,1
平日_13時25分_系統583,13:56:00,13:56:00,200998_02,20,前橋駅,0,0,1
平日_13時25分_系統583,13:59:00,13:59:00,200718_10,21,前橋駅,1,0,1
平日_13時26分_系統267,13:26:00,13:26:00,200463_01,1,前橋駅,0,1,1
平日_13時26分_系統267,13:27:00,13:27:00,200768_02,2,前橋駅,0,0,1
平日_13時26分_系統267,13:28:00,13:28:00,200730_02,3,前橋駅,0,0,1
平日_13時26分_系統267,13:30:00,13:30:00,200827_02,4,前橋駅,0,0,1
平日_13時26分_系統267,13:31:00,13:31:00,200506_02,5,前橋駅,0,0,1
平日_13時26分_系統267,13:32:00,13:32:00,200017_02,6,前橋駅,0,0,1
平日_13時26分_系統267,13:33:00,13:33:00,200519_02,7,前橋駅,0,0,1
平日_13時26分_系統267,13:33:00,13:33:00,200987_02,8,前橋駅,0,0,1
平日_13時26分_系統267,13:35:00,13:35:00,200985_02,9,前橋駅,0,0,1
平日_13時26分_系統267,13:36:00,13:36:00,200895_02,10,前橋駅,0,0,1
平日_13時26分_系統267,13:38:00,13:38:00,200395_02,11,前橋駅,0,0,1
平日_13時26分_系統267,13:38:00,13:38:00,200153_02,12,前橋駅,0,0,1
平日_13時26分_系統267,13:39:00,13:39:00,201100_02,13,前橋駅,0,0,1
平日_13時26分_系統267,13:40:00,13:40:00,200981_02,14,前橋駅,0,0,1
平日_13時26分_系統267,13:41:00,13:41:00,200872_02,15,前橋駅,0,0,1
平日_13時26分_系統267,13:42:00,13:42:00,201056_02,16,前橋駅,0,0,1
平日_13時26分_系統267,13:44:00,13:44:00,200189_02,17,前橋駅,0,0,1
平日_13時26分_系統267,13:45:00,13:45:00,200722_02,18,前橋駅,0,0,1
平日_13時26分_系統267,13:46:00,13:46:00,200343_02,19,前橋駅,0,0,1
平日_13時26分_系統267,13:47:00,13:47:00,200348_02,20,前橋駅,0,0,1
平日_13時26分_系統267,13:49:00,13:49:00,201071_02,21,前橋駅,0,0,1
平日_13時26分_系統267,13:51:00,13:51:00,200542_02,22,前橋駅,0,0,1
平日_13時26分_系統267,13:53:00,13:53:00,200141_02,23,前橋駅,0,0,1
平日_13時26分_系統267,13:54:00,13:54:00,200142_02,24,前橋駅,0,0,1
平日_13時26分_系統267,13:56:00,13:56:00,200262_02,25,前橋駅,0,0,1
平日_13時26分_系統267,13:57:00,13:57:00,201015_02,26,前橋駅,0,0,1
平日_13時26分_系統267,13:59:00,13:59:00,200379_02,27,前橋駅,0,0,1
平日_13時26分_系統267,14:00:00,14:00:00,200455_02,28,前橋駅,0,0,1
平日_13時26分_系統267,14:02:00,14:02:00,200702_02,29,前橋駅,0,0,1
平日_13時26分_系統267,14:03:00,14:03:00,200703_02,30,前橋駅,0,0,1
平日_13時26分_系統267,14:05:00,14:05:00,201081_02,31,前橋駅,0,0,1
平日_13時26分_系統267,14:07:00,14:07:00,200998_02,32,前橋駅,0,0,1
平日_13時26分_系統267,14:10:00,14:10:00,200718_10,33,前橋駅,1,0,1
平日_13時27分_系統262,13:27:00,13:27:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
平日_13時27分_系統262,13:28:00,13:28:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:30:00,13:30:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:32:00,13:32:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:32:00,13:32:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:34:00,13:34:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:35:00,13:35:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:37:00,13:37:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:38:00,13:38:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:39:00,13:39:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:40:00,13:40:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:41:00,13:41:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:43:00,13:43:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:45:00,13:45:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:46:00,13:46:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:47:00,13:47:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:49:00,13:49:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:51:00,13:51:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:52:00,13:52:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:53:00,13:53:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:54:00,13:54:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:55:00,13:55:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:55:00,13:55:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:56:00,13:56:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:58:00,13:58:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:58:00,13:58:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,13:59:00,13:59:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,14:00:00,14:00:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,14:02:00,14:02:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,14:03:00,14:03:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,14:05:00,14:05:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,14:06:00,14:06:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
平日_13時27分_系統262,14:08:00,14:08:00,200463_06,33,渋川市内循環,0,0,1
平日_13時27分_系統262,14:09:00,14:09:00,200468_01,34,渋川市内循環,0,0,1
平日_13時27分_系統262,14:11:00,14:11:00,200466_01,35,渋川市内循環,0,0,1
平日_13時27分_系統262,14:12:00,14:12:00,200704_01,36,渋川市内循環,0,0,1
平日_13時27分_系統262,14:13:00,14:13:00,200476_02,37,渋川市内循環,0,0,1
平日_13時27分_系統262,14:14:00,14:14:00,200477_02,38,渋川市内循環,0,0,1
平日_13時27分_系統262,14:15:00,14:15:00,200430_02,39,渋川市内循環,0,0,1
平日_13時27分_系統262,14:16:00,14:16:00,200007_02,40,渋川市内循環,0,0,1
平日_13時27分_系統262,14:21:00,14:21:00,210463_10,41,渋川市内循環,1,0,1
平日_13時40分_系統530,13:40:00,13:40:00,200261_01,1,前橋駅,0,1,1
平日_13時40分_系統530,13:41:00,13:41:00,200503_02,2,前橋駅,0,0,1
平日_13時40分_系統530,13:43:00,13:43:00,200262_02,3,前橋駅,0,0,1
平日_13時40分_系統530,13:44:00,13:44:00,201015_02,4,前橋駅,0,0,1
平日_13時40分_系統530,13:46:00,13:46:00,200379_02,5,前橋駅,0,0,1
平日_13時40分_系統530,13:47:00,13:47:00,200455_02,6,前橋駅,0,0,1
平日_13時40分_系統530,13:49:00,13:49:00,200702_02,7,前橋駅,0,0,1
平日_13時40分_系統530,13:50:00,13:50:00,200703_02,8,前橋駅,0,0,1
平日_13時40分_系統530,13:52:00,13:52:00,201081_02,9,前橋駅,0,0,1
平日_13時40分_系統530,13:54:00,13:54:00,200998_02,10,前橋駅,0,0,1
平日_13時40分_系統530,13:57:00,13:57:00,200718_10,11,前橋駅,1,0,1
平日_13時40分_系統584,13:40:00,13:40:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
平日_13時40分_系統584,13:41:00,13:41:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:43:00,13:43:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:45:00,13:45:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:45:00,13:45:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:47:00,13:47:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:48:00,13:48:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:50:00,13:50:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:51:00,13:51:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:52:00,13:52:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:55:00,13:55:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:56:00,13:56:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:57:00,13:57:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:58:00,13:58:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時40分_系統584,13:59:00,13:59:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時40分_系統584,14:01:00,14:01:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時40分_系統584,14:02:00,14:02:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時40分_系統584,14:03:00,14:03:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_13時40分_系統584,14:05:00,14:05:00,200927_01,19,群馬大学荒牧,0,0,1
平日_13時40分_系統584,14:06:00,14:06:00,201185_01,20,群馬大学荒牧,0,0,1
平日_13時40分_系統584,14:10:00,14:10:00,200348_01,21,群馬大学荒牧,0,0,1
平日_13時40分_系統584,14:11:00,14:11:00,200343_01,22,群馬大学荒牧,0,0,1
平日_13時40分_系統584,14:12:00,14:12:00,200722_01,23,群馬大学荒牧,0,0,1
平日_13時40分_系統584,14:15:00,14:15:00,200273_01,24,群馬大学荒牧,1,0,1
平日_13時43分_系統261,13:43:00,13:43:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
平日_13時43分_系統261,13:44:00,13:44:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
平日_13時43分_系統261,13:45:00,13:45:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
平日_13時43分_系統261,13:46:00,13:46:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
平日_13時43分_系統261,13:47:00,13:47:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
平日_13時43分_系統261,13:48:00,13:48:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
平日_13時43分_系統261,13:49:00,13:49:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
平日_13時43分_系統261,13:50:00,13:50:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
平日_13時43分_系統261,13:51:00,13:51:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
平日_13時43分_系統261,13:56:00,13:56:00,200463_01,10,前橋駅,0,0,1
平日_13時43分_系統261,13:57:00,13:57:00,200768_02,11,前橋駅,0,0,1
平日_13時43分_系統261,13:58:00,13:58:00,200730_02,12,前橋駅,0,0,1
平日_13時43分_系統261,14:00:00,14:00:00,200827_02,13,前橋駅,0,0,1
平日_13時43分_系統261,14:01:00,14:01:00,200506_02,14,前橋駅,0,0,1
平日_13時43分_系統261,14:02:00,14:02:00,200017_02,15,前橋駅,0,0,1
平日_13時43分_系統261,14:03:00,14:03:00,200519_02,16,前橋駅,0,0,1
平日_13時43分_系統261,14:03:00,14:03:00,200987_02,17,前橋駅,0,0,1
平日_13時43分_系統261,14:05:00,14:05:00,200985_02,18,前橋駅,0,0,1
平日_13時43分_系統261,14:06:00,14:06:00,200895_02,19,前橋駅,0,0,1
平日_13時43分_系統261,14:08:00,14:08:00,200395_02,20,前橋駅,0,0,1
平日_13時43分_系統261,14:08:00,14:08:00,200153_02,21,前橋駅,0,0,1
平日_13時43分_系統261,14:09:00,14:09:00,201100_02,22,前橋駅,0,0,1
平日_13時43分_系統261,14:10:00,14:10:00,200981_02,23,前橋駅,0,0,1
平日_13時43分_系統261,14:11:00,14:11:00,200872_02,24,前橋駅,0,0,1
平日_13時43分_系統261,14:12:00,14:12:00,201056_02,25,前橋駅,0,0,1
平日_13時43分_系統261,14:14:00,14:14:00,200189_02,26,前橋駅,0,0,1
平日_13時43分_系統261,14:15:00,14:15:00,200722_02,27,前橋駅,0,0,1
平日_13時43分_系統261,14:16:00,14:16:00,200343_02,28,前橋駅,0,0,1
平日_13時43分_系統261,14:17:00,14:17:00,200348_02,29,前橋駅,0,0,1
平日_13時43分_系統261,14:19:00,14:19:00,201071_02,30,前橋駅,0,0,1
平日_13時43分_系統261,14:21:00,14:21:00,200542_02,31,前橋駅,0,0,1
平日_13時43分_系統261,14:23:00,14:23:00,200141_02,32,前橋駅,0,0,1
平日_13時43分_系統261,14:24:00,14:24:00,200142_02,33,前橋駅,0,0,1
平日_13時43分_系統261,14:26:00,14:26:00,200262_02,34,前橋駅,0,0,1
平日_13時43分_系統261,14:27:00,14:27:00,201015_02,35,前橋駅,0,0,1
平日_13時43分_系統261,14:29:00,14:29:00,200379_02,36,前橋駅,0,0,1
平日_13時43分_系統261,14:30:00,14:30:00,200455_02,37,前橋駅,0,0,1
平日_13時43分_系統261,14:32:00,14:32:00,200702_02,38,前橋駅,0,0,1
平日_13時43分_系統261,14:33:00,14:33:00,200703_02,39,前橋駅,0,0,1
平日_13時43分_系統261,14:35:00,14:35:00,201081_02,40,前橋駅,0,0,1
平日_13時43分_系統261,14:37:00,14:37:00,200998_02,41,前橋駅,0,0,1
平日_13時43分_系統261,14:40:00,14:40:00,200718_10,42,前橋駅,1,0,1
平日_13時55分_系統587,13:55:00,13:55:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
平日_13時55分_系統587,13:57:00,13:57:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
平日_13時55分_系統587,13:58:00,13:58:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
平日_13時55分_系統587,13:59:00,13:59:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
平日_13時55分_系統587,14:01:00,14:01:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
平日_13時55分_系統587,14:03:00,14:03:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
平日_13時55分_系統587,14:05:00,14:05:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
平日_13時55分_系統587,14:06:00,14:06:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
平日_13時55分_系統587,14:07:00,14:07:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
平日_13時55分_系統587,14:10:00,14:10:00,200261_01,10,前橋駅,0,0,1
平日_13時55分_系統587,14:11:00,14:11:00,200503_02,11,前橋駅,0,0,1
平日_13時55分_系統587,14:13:00,14:13:00,200262_02,12,前橋駅,0,0,1
平日_13時55分_系統587,14:14:00,14:14:00,201015_02,13,前橋駅,0,0,1
平日_13時55分_系統587,14:16:00,14:16:00,200379_02,14,前橋駅,0,0,1
平日_13時55分_系統587,14:17:00,14:17:00,200455_02,15,前橋駅,0,0,1
平日_13時55分_系統587,14:19:00,14:19:00,200702_02,16,前橋駅,0,0,1
平日_13時55分_系統587,14:20:00,14:20:00,200703_02,17,前橋駅,0,0,1
平日_13時55分_系統587,14:22:00,14:22:00,201081_02,18,前橋駅,0,0,1
平日_13時55分_系統587,14:24:00,14:24:00,200998_02,19,前橋駅,0,0,1
平日_13時55分_系統587,14:27:00,14:27:00,200718_10,20,前橋駅,1,0,1
平日_13時57分_系統266,13:57:00,13:57:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
平日_13時57分_系統266,13:58:00,13:58:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:00:00,14:00:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:02:00,14:02:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:02:00,14:02:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:04:00,14:04:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:05:00,14:05:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:07:00,14:07:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:08:00,14:08:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:09:00,14:09:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:10:00,14:10:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:11:00,14:11:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:13:00,14:13:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:15:00,14:15:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:16:00,14:16:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:17:00,14:17:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_13時57分_系統266,14:19:00,14:19:00,200273_01,17,渋川駅,0,0,1
平日_13時57分_系統266,14:22:00,14:22:00,200189_01,18,渋川駅,0,0,1
平日_13時57分_系統266,14:24:00,14:24:00,201056_01,19,渋川駅,0,0,1
平日_13時57分_系統266,14:25:00,14:25:00,200872_01,20,渋川駅,0,0,1
平日_13時57分_系統266,14:26:00,14:26:00,200981_01,21,渋川駅,0,0,1
平日_13時57分_系統266,14:27:00,14:27:00,201100_01,22,渋川駅,0,0,1
平日_13時57分_系統266,14:28:00,14:28:00,200153_01,23,渋川駅,0,0,1
平日_13時57分_系統266,14:28:00,14:28:00,200395_01,24,渋川駅,0,0,1
平日_13時57分_系統266,14:29:00,14:29:00,200895_01,25,渋川駅,0,0,1
平日_13時57分_系統266,14:31:00,14:31:00,200985_01,26,渋川駅,0,0,1
平日_13時57分_系統266,14:31:00,14:31:00,200987_01,27,渋川駅,0,0,1
平日_13時57分_系統266,14:32:00,14:32:00,200519_01,28,渋川駅,0,0,1
平日_13時57分_系統266,14:33:00,14:33:00,200017_01,29,渋川駅,0,0,1
平日_13時57分_系統266,14:35:00,14:35:00,200506_01,30,渋川駅,0,0,1
平日_13時57分_系統266,14:36:00,14:36:00,200827_01,31,渋川駅,0,0,1
平日_13時57分_系統266,14:38:00,14:38:00,200730_01,32,渋川駅,0,0,1
平日_13時57分_系統266,14:39:00,14:39:00,200768_01,33,渋川駅,0,0,1
平日_13時57分_系統266,14:42:00,14:42:00,200463_10,34,渋川駅,1,0,1
平日_14時10分_系統586,14:10:00,14:10:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
平日_14時10分_系統586,14:11:00,14:11:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
平日_14時10分_系統586,14:13:00,14:13:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
平日_14時10分_系統586,14:15:00,14:15:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
平日_14時10分_系統586,14:15:00,14:15:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
平日_14時10分_系統586,14:17:00,14:17:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
平日_14時10分_系統586,14:18:00,14:18:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
平日_14時10分_系統586,14:20:00,14:20:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
平日_14時10分_系統586,14:21:00,14:21:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
平日_14時10分_系統586,14:22:00,14:22:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
平日_14時10分_系統586,14:25:00,14:25:00,200261_01,11,群馬大学荒牧,0,0,1
平日_14時10分_系統586,14:26:00,14:26:00,200503_02,12,群馬大学荒牧,0,0,1
平日_14時10分_系統586,14:27:00,14:27:00,200142_01,13,群馬大学荒牧,0,0,1
平日_14時10分_系統586,14:28:00,14:28:00,200141_01,14,群馬大学荒牧,0,0,1
平日_14時10分_系統586,14:29:00,14:29:00,200542_01,15,群馬大学荒牧,0,0,1
平日_14時10分_系統586,14:31:00,14:31:00,201071_01,16,群馬大学荒牧,0,0,1
平日_14時10分_系統586,14:33:00,14:33:00,200348_01,17,群馬大学荒牧,0,0,1
平日_14時10分_系統586,14:34:00,14:34:00,200343_01,18,群馬大学荒牧,0,0,1
平日_14時10分_系統586,14:35:00,14:35:00,200722_01,19,群馬大学荒牧,0,0,1
平日_14時10分_系統586,14:38:00,14:38:00,200273_01,20,群馬大学荒牧,1,0,1
平日_14時25分_系統583,14:25:00,14:25:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_14時25分_系統583,14:27:00,14:27:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_14時25分_系統583,14:28:00,14:28:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_14時25分_系統583,14:29:00,14:29:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_14時25分_系統583,14:32:00,14:32:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_14時25分_系統583,14:35:00,14:35:00,200927_01,6,前橋駅,0,0,1
平日_14時25分_系統583,14:35:00,14:35:00,200800_02,7,前橋駅,0,0,1
平日_14時25分_系統583,14:36:00,14:36:00,200928_02,8,前橋駅,0,0,1
平日_14時25分_系統583,14:38:00,14:38:00,201071_02,9,前橋駅,0,0,1
平日_14時25分_系統583,14:40:00,14:40:00,200542_02,10,前橋駅,0,0,1
平日_14時25分_系統583,14:42:00,14:42:00,200141_02,11,前橋駅,0,0,1
平日_14時25分_系統583,14:43:00,14:43:00,200142_02,12,前橋駅,0,0,1
平日_14時25分_系統583,14:45:00,14:45:00,200262_02,13,前橋駅,0,0,1
平日_14時25分_系統583,14:46:00,14:46:00,201015_02,14,前橋駅,0,0,1
平日_14時25分_系統583,14:48:00,14:48:00,200379_02,15,前橋駅,0,0,1
平日_14時25分_系統583,14:49:00,14:49:00,200455_02,16,前橋駅,0,0,1
平日_14時25分_系統583,14:51:00,14:51:00,200702_02,17,前橋駅,0,0,1
平日_14時25分_系統583,14:52:00,14:52:00,200703_02,18,前橋駅,0,0,1
平日_14時25分_系統583,14:54:00,14:54:00,201081_02,19,前橋駅,0,0,1
平日_14時25分_系統583,14:56:00,14:56:00,200998_02,20,前橋駅,0,0,1
平日_14時25分_系統583,14:59:00,14:59:00,200718_10,21,前橋駅,1,0,1
平日_14時26分_系統267,14:26:00,14:26:00,200463_01,1,前橋駅,0,1,1
平日_14時26分_系統267,14:27:00,14:27:00,200768_02,2,前橋駅,0,0,1
平日_14時26分_系統267,14:28:00,14:28:00,200730_02,3,前橋駅,0,0,1
平日_14時26分_系統267,14:30:00,14:30:00,200827_02,4,前橋駅,0,0,1
平日_14時26分_系統267,14:31:00,14:31:00,200506_02,5,前橋駅,0,0,1
平日_14時26分_系統267,14:32:00,14:32:00,200017_02,6,前橋駅,0,0,1
平日_14時26分_系統267,14:33:00,14:33:00,200519_02,7,前橋駅,0,0,1
平日_14時26分_系統267,14:33:00,14:33:00,200987_02,8,前橋駅,0,0,1
平日_14時26分_系統267,14:35:00,14:35:00,200985_02,9,前橋駅,0,0,1
平日_14時26分_系統267,14:36:00,14:36:00,200895_02,10,前橋駅,0,0,1
平日_14時26分_系統267,14:38:00,14:38:00,200395_02,11,前橋駅,0,0,1
平日_14時26分_系統267,14:38:00,14:38:00,200153_02,12,前橋駅,0,0,1
平日_14時26分_系統267,14:39:00,14:39:00,201100_02,13,前橋駅,0,0,1
平日_14時26分_系統267,14:40:00,14:40:00,200981_02,14,前橋駅,0,0,1
平日_14時26分_系統267,14:41:00,14:41:00,200872_02,15,前橋駅,0,0,1
平日_14時26分_系統267,14:42:00,14:42:00,201056_02,16,前橋駅,0,0,1
平日_14時26分_系統267,14:44:00,14:44:00,200189_02,17,前橋駅,0,0,1
平日_14時26分_系統267,14:45:00,14:45:00,200722_02,18,前橋駅,0,0,1
平日_14時26分_系統267,14:46:00,14:46:00,200343_02,19,前橋駅,0,0,1
平日_14時26分_系統267,14:47:00,14:47:00,200348_02,20,前橋駅,0,0,1
平日_14時26分_系統267,14:49:00,14:49:00,201071_02,21,前橋駅,0,0,1
平日_14時26分_系統267,14:51:00,14:51:00,200542_02,22,前橋駅,0,0,1
平日_14時26分_系統267,14:53:00,14:53:00,200141_02,23,前橋駅,0,0,1
平日_14時26分_系統267,14:54:00,14:54:00,200142_02,24,前橋駅,0,0,1
平日_14時26分_系統267,14:56:00,14:56:00,200262_02,25,前橋駅,0,0,1
平日_14時26分_系統267,14:57:00,14:57:00,201015_02,26,前橋駅,0,0,1
平日_14時26分_系統267,14:59:00,14:59:00,200379_02,27,前橋駅,0,0,1
平日_14時26分_系統267,15:00:00,15:00:00,200455_02,28,前橋駅,0,0,1
平日_14時26分_系統267,15:02:00,15:02:00,200702_02,29,前橋駅,0,0,1
平日_14時26分_系統267,15:03:00,15:03:00,200703_02,30,前橋駅,0,0,1
平日_14時26分_系統267,15:05:00,15:05:00,201081_02,31,前橋駅,0,0,1
平日_14時26分_系統267,15:07:00,15:07:00,200998_02,32,前橋駅,0,0,1
平日_14時26分_系統267,15:10:00,15:10:00,200718_10,33,前橋駅,1,0,1
平日_14時27分_系統262,14:27:00,14:27:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
平日_14時27分_系統262,14:28:00,14:28:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:30:00,14:30:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:32:00,14:32:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:32:00,14:32:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:34:00,14:34:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:35:00,14:35:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:37:00,14:37:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:38:00,14:38:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:39:00,14:39:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:40:00,14:40:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:41:00,14:41:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:43:00,14:43:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:45:00,14:45:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:46:00,14:46:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:47:00,14:47:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:49:00,14:49:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:51:00,14:51:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:52:00,14:52:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:53:00,14:53:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:54:00,14:54:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:55:00,14:55:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:55:00,14:55:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:56:00,14:56:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:58:00,14:58:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:58:00,14:58:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,14:59:00,14:59:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,15:00:00,15:00:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,15:02:00,15:02:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,15:03:00,15:03:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,15:05:00,15:05:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,15:06:00,15:06:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
平日_14時27分_系統262,15:08:00,15:08:00,200463_06,33,渋川市内循環,0,0,1
平日_14時27分_系統262,15:09:00,15:09:00,200468_01,34,渋川市内循環,0,0,1
平日_14時27分_系統262,15:11:00,15:11:00,200466_01,35,渋川市内循環,0,0,1
平日_14時27分_系統262,15:12:00,15:12:00,200704_01,36,渋川市内循環,0,0,1
平日_14時27分_系統262,15:13:00,15:13:00,200476_02,37,渋川市内循環,0,0,1
平日_14時27分_系統262,15:14:00,15:14:00,200477_02,38,渋川市内循環,0,0,1
平日_14時27分_系統262,15:15:00,15:15:00,200430_02,39,渋川市内循環,0,0,1
平日_14時27分_系統262,15:16:00,15:16:00,200007_02,40,渋川市内循環,0,0,1
平日_14時27分_系統262,15:21:00,15:21:00,210463_10,41,渋川市内循環,1,0,1
平日_14時37分_系統261,14:37:00,14:37:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
平日_14時37分_系統261,14:38:00,14:38:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
平日_14時37分_系統261,14:39:00,14:39:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
平日_14時37分_系統261,14:40:00,14:40:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
平日_14時37分_系統261,14:41:00,14:41:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
平日_14時37分_系統261,14:42:00,14:42:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
平日_14時37分_系統261,14:43:00,14:43:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
平日_14時37分_系統261,14:44:00,14:44:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
平日_14時37分_系統261,14:45:00,14:45:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
平日_14時37分_系統261,14:50:00,14:50:00,200463_01,10,前橋駅,0,0,1
平日_14時37分_系統261,14:51:00,14:51:00,200768_02,11,前橋駅,0,0,1
平日_14時37分_系統261,14:52:00,14:52:00,200730_02,12,前橋駅,0,0,1
平日_14時37分_系統261,14:54:00,14:54:00,200827_02,13,前橋駅,0,0,1
平日_14時37分_系統261,14:55:00,14:55:00,200506_02,14,前橋駅,0,0,1
平日_14時37分_系統261,14:56:00,14:56:00,200017_02,15,前橋駅,0,0,1
平日_14時37分_系統261,14:57:00,14:57:00,200519_02,16,前橋駅,0,0,1
平日_14時37分_系統261,14:57:00,14:57:00,200987_02,17,前橋駅,0,0,1
平日_14時37分_系統261,14:59:00,14:59:00,200985_02,18,前橋駅,0,0,1
平日_14時37分_系統261,15:00:00,15:00:00,200895_02,19,前橋駅,0,0,1
平日_14時37分_系統261,15:02:00,15:02:00,200395_02,20,前橋駅,0,0,1
平日_14時37分_系統261,15:02:00,15:02:00,200153_02,21,前橋駅,0,0,1
平日_14時37分_系統261,15:03:00,15:03:00,201100_02,22,前橋駅,0,0,1
平日_14時37分_系統261,15:04:00,15:04:00,200981_02,23,前橋駅,0,0,1
平日_14時37分_系統261,15:05:00,15:05:00,200872_02,24,前橋駅,0,0,1
平日_14時37分_系統261,15:06:00,15:06:00,201056_02,25,前橋駅,0,0,1
平日_14時37分_系統261,15:08:00,15:08:00,200189_02,26,前橋駅,0,0,1
平日_14時37分_系統261,15:09:00,15:09:00,200722_02,27,前橋駅,0,0,1
平日_14時37分_系統261,15:10:00,15:10:00,200343_02,28,前橋駅,0,0,1
平日_14時37分_系統261,15:11:00,15:11:00,200348_02,29,前橋駅,0,0,1
平日_14時37分_系統261,15:13:00,15:13:00,201071_02,30,前橋駅,0,0,1
平日_14時37分_系統261,15:15:00,15:15:00,200542_02,31,前橋駅,0,0,1
平日_14時37分_系統261,15:17:00,15:17:00,200141_02,32,前橋駅,0,0,1
平日_14時37分_系統261,15:18:00,15:18:00,200142_02,33,前橋駅,0,0,1
平日_14時37分_系統261,15:20:00,15:20:00,200262_02,34,前橋駅,0,0,1
平日_14時37分_系統261,15:21:00,15:21:00,201015_02,35,前橋駅,0,0,1
平日_14時37分_系統261,15:23:00,15:23:00,200379_02,36,前橋駅,0,0,1
平日_14時37分_系統261,15:24:00,15:24:00,200455_02,37,前橋駅,0,0,1
平日_14時37分_系統261,15:26:00,15:26:00,200702_02,38,前橋駅,0,0,1
平日_14時37分_系統261,15:27:00,15:27:00,200703_02,39,前橋駅,0,0,1
平日_14時37分_系統261,15:29:00,15:29:00,201081_02,40,前橋駅,0,0,1
平日_14時37分_系統261,15:31:00,15:31:00,200998_02,41,前橋駅,0,0,1
平日_14時37分_系統261,15:34:00,15:34:00,200718_10,42,前橋駅,1,0,1
平日_14時40分_系統584,14:40:00,14:40:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
平日_14時40分_系統584,14:41:00,14:41:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:43:00,14:43:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:45:00,14:45:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:45:00,14:45:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:47:00,14:47:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:48:00,14:48:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:50:00,14:50:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:51:00,14:51:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:52:00,14:52:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:55:00,14:55:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:56:00,14:56:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:57:00,14:57:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:58:00,14:58:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_14時40分_系統584,14:59:00,14:59:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_14時40分_系統584,15:01:00,15:01:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_14時40分_系統584,15:02:00,15:02:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_14時40分_系統584,15:03:00,15:03:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_14時40分_系統584,15:05:00,15:05:00,200927_01,19,群馬大学荒牧,0,0,1
平日_14時40分_系統584,15:06:00,15:06:00,201185_01,20,群馬大学荒牧,0,0,1
平日_14時40分_系統584,15:10:00,15:10:00,200348_01,21,群馬大学荒牧,0,0,1
平日_14時40分_系統584,15:11:00,15:11:00,200343_01,22,群馬大学荒牧,0,0,1
平日_14時40分_系統584,15:12:00,15:12:00,200722_01,23,群馬大学荒牧,0,0,1
平日_14時40分_系統584,15:15:00,15:15:00,200273_01,24,群馬大学荒牧,1,0,1
平日_14時53分_系統587,14:53:00,14:53:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
平日_14時53分_系統587,14:55:00,14:55:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
平日_14時53分_系統587,14:56:00,14:56:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
平日_14時53分_系統587,14:57:00,14:57:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
平日_14時53分_系統587,14:59:00,14:59:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
平日_14時53分_系統587,15:01:00,15:01:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
平日_14時53分_系統587,15:03:00,15:03:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
平日_14時53分_系統587,15:04:00,15:04:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
平日_14時53分_系統587,15:05:00,15:05:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
平日_14時53分_系統587,15:08:00,15:08:00,200261_01,10,前橋駅,0,0,1
平日_14時53分_系統587,15:09:00,15:09:00,200503_02,11,前橋駅,0,0,1
平日_14時53分_系統587,15:11:00,15:11:00,200262_02,12,前橋駅,0,0,1
平日_14時53分_系統587,15:12:00,15:12:00,201015_02,13,前橋駅,0,0,1
平日_14時53分_系統587,15:14:00,15:14:00,200379_02,14,前橋駅,0,0,1
平日_14時53分_系統587,15:15:00,15:15:00,200455_02,15,前橋駅,0,0,1
平日_14時53分_系統587,15:17:00,15:17:00,200702_02,16,前橋駅,0,0,1
平日_14時53分_系統587,15:18:00,15:18:00,200703_02,17,前橋駅,0,0,1
平日_14時53分_系統587,15:20:00,15:20:00,201081_02,18,前橋駅,0,0,1
平日_14時53分_系統587,15:22:00,15:22:00,200998_02,19,前橋駅,0,0,1
平日_14時53分_系統587,15:25:00,15:25:00,200718_10,20,前橋駅,1,0,1
平日_14時57分_系統268,14:57:00,14:57:00,200718_02,1,渋川駅,0,1,1
平日_14時57分_系統268,14:58:00,14:58:00,200998_01,2,渋川駅,0,0,1
平日_14時57分_系統268,15:00:00,15:00:00,201081_01,3,渋川駅,0,0,1
平日_14時57分_系統268,15:02:00,15:02:00,200703_01,4,渋川駅,0,0,1
平日_14時57分_系統268,15:02:00,15:02:00,200702_01,5,渋川駅,0,0,1
平日_14時57分_系統268,15:04:00,15:04:00,200455_01,6,渋川駅,0,0,1
平日_14時57分_系統268,15:05:00,15:05:00,200379_01,7,渋川駅,0,0,1
平日_14時57分_系統268,15:07:00,15:07:00,201015_01,8,渋川駅,0,0,1
平日_14時57分_系統268,15:08:00,15:08:00,200262_01,9,渋川駅,0,0,1
平日_14時57分_系統268,15:09:00,15:09:00,200142_01,10,渋川駅,0,0,1
平日_14時57分_系統268,15:10:00,15:10:00,200141_01,11,渋川駅,0,0,1
平日_14時57分_系統268,15:11:00,15:11:00,200542_01,12,渋川駅,0,0,1
平日_14時57分_系統268,15:13:00,15:13:00,201071_01,13,渋川駅,0,0,1
平日_14時57分_系統268,15:15:00,15:15:00,200348_01,14,渋川駅,0,0,1
平日_14時57分_系統268,15:16:00,15:16:00,200343_01,15,渋川駅,0,0,1
平日_14時57分_系統268,15:17:00,15:17:00,200722_01,16,渋川駅,0,0,1
平日_14時57分_系統268,15:19:00,15:19:00,200189_01,17,渋川駅,0,0,1
平日_14時57分_系統268,15:21:00,15:21:00,201056_01,18,渋川駅,0,0,1
平日_14時57分_系統268,15:22:00,15:22:00,200872_01,19,渋川駅,0,0,1
平日_14時57分_系統268,15:23:00,15:23:00,200981_01,20,渋川駅,0,0,1
平日_14時57分_系統268,15:24:00,15:24:00,201100_01,21,渋川駅,0,0,1
平日_14時57分_系統268,15:25:00,15:25:00,200153_01,22,渋川駅,0,0,1
平日_14時57分_系統268,15:25:00,15:25:00,200395_01,23,渋川駅,0,0,1
平日_14時57分_系統268,15:26:00,15:26:00,200895_01,24,渋川駅,0,0,1
平日_14時57分_系統268,15:28:00,15:28:00,200985_01,25,渋川駅,0,0,1
平日_14時57分_系統268,15:28:00,15:28:00,200987_01,26,渋川駅,0,0,1
平日_14時57分_系統268,15:29:00,15:29:00,200519_01,27,渋川駅,0,0,1
平日_14時57分_系統268,15:30:00,15:30:00,200017_01,28,渋川駅,0,0,1
平日_14時57分_系統268,15:32:00,15:32:00,200506_01,29,渋川駅,0,0,1
平日_14時57分_系統268,15:33:00,15:33:00,200827_01,30,渋川駅,0,0,1
平日_14時57分_系統268,15:35:00,15:35:00,200730_01,31,渋川駅,0,0,1
平日_14時57分_系統268,15:36:00,15:36:00,200768_01,32,渋川駅,0,0,1
平日_14時57分_系統268,15:39:00,15:39:00,200463_10,33,渋川駅,1,0,1
平日_15時10分_系統580,15:10:00,15:10:00,200718_02,1,群馬大学荒牧,0,1,1
平日_15時10分_系統580,15:11:00,15:11:00,200998_01,2,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:13:00,15:13:00,201081_01,3,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:15:00,15:15:00,200703_01,4,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:15:00,15:15:00,200702_01,5,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:17:00,15:17:00,200455_01,6,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:18:00,15:18:00,200379_01,7,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:20:00,15:20:00,201015_01,8,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:21:00,15:21:00,200262_01,9,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:22:00,15:22:00,200142_01,10,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:23:00,15:23:00,200141_01,11,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:24:00,15:24:00,200542_01,12,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:26:00,15:26:00,201071_01,13,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:28:00,15:28:00,200348_01,14,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:29:00,15:29:00,200343_01,15,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:30:00,15:30:00,200722_01,16,群馬大学荒牧,0,0,1
平日_15時10分_系統580,15:33:00,15:33:00,200273_01,17,群馬大学荒牧,1,0,1
平日_15時17分_系統265,15:17:00,15:17:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
平日_15時17分_系統265,15:18:00,15:18:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:19:00,15:19:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:21:00,15:21:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:22:00,15:22:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:23:00,15:23:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:24:00,15:24:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:24:00,15:24:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:26:00,15:26:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:27:00,15:27:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:29:00,15:29:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:29:00,15:29:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:30:00,15:30:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:31:00,15:31:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:32:00,15:32:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:33:00,15:33:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:35:00,15:35:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_15時17分_系統265,15:38:00,15:38:00,200273_01,18,前橋駅,0,0,1
平日_15時17分_系統265,15:40:00,15:40:00,200722_02,19,前橋駅,0,0,1
平日_15時17分_系統265,15:41:00,15:41:00,200343_02,20,前橋駅,0,0,1
平日_15時17分_系統265,15:42:00,15:42:00,200348_02,21,前橋駅,0,0,1
平日_15時17分_系統265,15:44:00,15:44:00,201071_02,22,前橋駅,0,0,1
平日_15時17分_系統265,15:46:00,15:46:00,200542_02,23,前橋駅,0,0,1
平日_15時17分_系統265,15:48:00,15:48:00,200141_02,24,前橋駅,0,0,1
平日_15時17分_系統265,15:49:00,15:49:00,200142_02,25,前橋駅,0,0,1
平日_15時17分_系統265,15:51:00,15:51:00,200262_02,26,前橋駅,0,0,1
平日_15時17分_系統265,15:52:00,15:52:00,201015_02,27,前橋駅,0,0,1
平日_15時17分_系統265,15:54:00,15:54:00,200379_02,28,前橋駅,0,0,1
平日_15時17分_系統265,15:55:00,15:55:00,200455_02,29,前橋駅,0,0,1
平日_15時17分_系統265,15:57:00,15:57:00,200702_02,30,前橋駅,0,0,1
平日_15時17分_系統265,15:58:00,15:58:00,200703_02,31,前橋駅,0,0,1
平日_15時17分_系統265,16:00:00,16:00:00,201081_02,32,前橋駅,0,0,1
平日_15時17分_系統265,16:02:00,16:02:00,200998_02,33,前橋駅,0,0,1
平日_15時17分_系統265,16:05:00,16:05:00,200718_10,34,前橋駅,1,0,1
平日_15時20分_系統583,15:20:00,15:20:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
平日_15時20分_系統583,15:22:00,15:22:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
平日_15時20分_系統583,15:23:00,15:23:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
平日_15時20分_系統583,15:24:00,15:24:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
平日_15時20分_系統583,15:27:00,15:27:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
平日_15時20分_系統583,15:30:00,15:30:00,200927_01,6,前橋駅,0,0,1
平日_15時20分_系統583,15:30:00,15:30:00,200800_02,7,前橋駅,0,0,1
平日_15時20分_系統583,15:31:00,15:31:00,200928_02,8,前橋駅,0,0,1
平日_15時20分_系統583,15:33:00,15:33:00,201071_02,9,前橋駅,0,0,1
平日_15時20分_系統583,15:35:00,15:35:00,200542_02,10,前橋駅,0,0,1
平日_15時20分_系統583,15:37:00,15:37:00,200141_02,11,前橋駅,0,0,1
平日_15時20分_系統583,15:38:00,15:38:00,200142_02,12,前橋駅,0,0,1
平日_15時20分_系統583,15:40:00,15:40:00,200262_02,13,前橋駅,0,0,1
平日_15時20分_系統583,15:41:00,15:41:00,201015_02,14,前橋駅,0,0,1
平日_15時20分_系統583,15:43:00,15:43:00,200379_02,15,前橋駅,0,0,1
平日_15時20分_系統583,15:44:00,15:44:00,200455_02,16,前橋駅,0,0,1
平日_15時20分_系統583,15:46:00,15:46:00,200702_02,17,前橋駅,0,0,1
平日_15時20分_系統583,15:47:00,15:47:00,200703_02,18,前橋駅,0,0,1
平日_15時20分_系統583,15:49:00,15:49:00,201081_02,19,前橋駅,0,0,1
平日_15時20分_系統583,15:51:00,15:51:00,200998_02,20,前橋駅,0,0,1
平日_15時20分_系統583,15:54:00,15:54:00,200718_10,21,前橋駅,1,0,1
平日_15時27分_系統266,15:27:00,15:27:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
平日_15時27分_系統266,15:28:00,15:28:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:30:00,15:30:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:32:00,15:32:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:32:00,15:32:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:34:00,15:34:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:35:00,15:35:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:37:00,15:37:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:38:00,15:38:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:39:00,15:39:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:40:00,15:40:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:41:00,15:41:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:43:00,15:43:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:45:00,15:45:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:46:00,15:46:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:47:00,15:47:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_15時27分_系統266,15:49:00,15:49:00,200273_01,17,渋川駅,0,0,1
平日_15時27分_系統266,15:52:00,15:52:00,200189_01,18,渋川駅,0,0,1
平日_15時27分_系統266,15:54:00,15:54:00,201056_01,19,渋川駅,0,0,1
平日_15時27分_系統266,15:55:00,15:55:00,200872_01,20,渋川駅,0,0,1
平日_15時27分_系統266,15:56:00,15:56:00,200981_01,21,渋川駅,0,0,1
平日_15時27分_系統266,15:57:00,15:57:00,201100_01,22,渋川駅,0,0,1
平日_15時27分_系統266,15:58:00,15:58:00,200153_01,23,渋川駅,0,0,1
平日_15時27分_系統266,15:58:00,15:58:00,200395_01,24,渋川駅,0,0,1
平日_15時27分_系統266,15:59:00,15:59:00,200895_01,25,渋川駅,0,0,1
平日_15時27分_系統266,16:01:00,16:01:00,200985_01,26,渋川駅,0,0,1
平日_15時27分_系統266,16:01:00,16:01:00,200987_01,27,渋川駅,0,0,1
平日_15時27分_系統266,16:02:00,16:02:00,200519_01,28,渋川駅,0,0,1
平日_15時27分_系統266,16:03:00,16:03:00,200017_01,29,渋川駅,0,0,1
平日_15時27分_系統266,16:05:00,16:05:00,200506_01,30,渋川駅,0,0,1
平日_15時27分_系統266,16:06:00,16:06:00,200827_01,31,渋川駅,0,0,1
平日_15時27分_系統266,16:08:00,16:08:00,200730_01,32,渋川駅,0,0,1
平日_15時27分_系統266,16:09:00,16:09:00,200768_01,33,渋川駅,0,0,1
平日_15時27分_系統266,16:12:00,16:12:00,200463_10,34,渋川駅,1,0,1
平日_15時37分_系統582,15:37:00,15:37:00,200718_02,1,群馬大学荒牧（南橘団地 経由）,0,1,1
平日_15時37分_系統582,15:38:00,15:38:00,200998_01,2,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:40:00,15:40:00,201081_01,3,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:42:00,15:42:00,200703_01,4,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:42:00,15:42:00,200702_01,5,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:44:00,15:44:00,200455_01,6,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:45:00,15:45:00,200379_01,7,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:47:00,15:47:00,201015_01,8,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:48:00,15:48:00,200262_01,9,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:49:00,15:49:00,200142_01,10,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:50:00,15:50:00,200141_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:51:00,15:51:00,200542_01,12,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:53:00,15:53:00,201071_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:54:00,15:54:00,200928_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:55:00,15:55:00,200800_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_15時37分_系統582,15:57:00,15:57:00,200927_01,16,群馬大学荒牧,0,0,1
平日_15時37分_系統582,15:58:00,15:58:00,201185_01,17,群馬大学荒牧,0,0,1
平日_15時37分_系統582,16:02:00,16:02:00,200348_01,18,群馬大学荒牧,0,0,1
平日_15時37分_系統582,16:03:00,16:03:00,200343_01,19,群馬大学荒牧,0,0,1
平日_15時37分_系統582,16:04:00,16:04:00,200722_01,20,群馬大学荒牧,0,0,1
平日_15時37分_系統582,16:07:00,16:07:00,200273_01,21,群馬大学荒牧,1,0,1
平日_15時40分_系統261,15:40:00,15:40:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
平日_15時40分_系統261,15:41:00,15:41:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
平日_15時40分_系統261,15:42:00,15:42:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
平日_15時40分_系統261,15:43:00,15:43:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
平日_15時40分_系統261,15:44:00,15:44:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
平日_15時40分_系統261,15:45:00,15:45:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
平日_15時40分_系統261,15:46:00,15:46:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
平日_15時40分_系統261,15:47:00,15:47:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
平日_15時40分_系統261,15:48:00,15:48:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
平日_15時40分_系統261,15:53:00,15:53:00,200463_01,10,前橋駅,0,0,1
平日_15時40分_系統261,15:54:00,15:54:00,200768_02,11,前橋駅,0,0,1
平日_15時40分_系統261,15:55:00,15:55:00,200730_02,12,前橋駅,0,0,1
平日_15時40分_系統261,15:57:00,15:57:00,200827_02,13,前橋駅,0,0,1
平日_15時40分_系統261,15:58:00,15:58:00,200506_02,14,前橋駅,0,0,1
平日_15時40分_系統261,15:59:00,15:59:00,200017_02,15,前橋駅,0,0,1
平日_15時40分_系統261,16:00:00,16:00:00,200519_02,16,前橋駅,0,0,1
平日_15時40分_系統261,16:00:00,16:00:00,200987_02,17,前橋駅,0,0,1
平日_15時40分_系統261,16:02:00,16:02:00,200985_02,18,前橋駅,0,0,1
平日_15時40分_系統261,16:03:00,16:03:00,200895_02,19,前橋駅,0,0,1
平日_15時40分_系統261,16:05:00,16:05:00,200395_02,20,前橋駅,0,0,1
平日_15時40分_系統261,16:05:00,16:05:00,200153_02,21,前橋駅,0,0,1
平日_15時40分_系統261,16:06:00,16:06:00,201100_02,22,前橋駅,0,0,1
平日_15時40分_系統261,16:07:00,16:07:00,200981_02,23,前橋駅,0,0,1
平日_15時40分_系統261,16:08:00,16:08:00,200872_02,24,前橋駅,0,0,1
平日_15時40分_系統261,16:09:00,16:09:00,201056_02,25,前橋駅,0,0,1
平日_15時40分_系統261,16:11:00,16:11:00,200189_02,26,前橋駅,0,0,1
平日_15時40分_系統261,16:12:00,16:12:00,200722_02,27,前橋駅,0,0,1
平日_15時40分_系統261,16:13:00,16:13:00,200343_02,28,前橋駅,0,0,1
平日_15時40分_系統261,16:14:00,16:14:00,200348_02,29,前橋駅,0,0,1
平日_15時40分_系統261,16:16:00,16:16:00,201071_02,30,前橋駅,0,0,1
平日_15時40分_系統261,16:18:00,16:18:00,200542_02,31,前橋駅,0,0,1
平日_15時40分_系統261,16:20:00,16:20:00,200141_02,32,前橋駅,0,0,1
平日_15時40分_系統261,16:21:00,16:21:00,200142_02,33,前橋駅,0,0,1
平日_15時40分_系統261,16:23:00,16:23:00,200262_02,34,前橋駅,0,0,1
平日_15時40分_系統261,16:24:00,16:24:00,201015_02,35,前橋駅,0,0,1
平日_15時40分_系統261,16:26:00,16:26:00,200379_02,36,前橋駅,0,0,1
平日_15時40分_系統261,16:27:00,16:27:00,200455_02,37,前橋駅,0,0,1
平日_15時40分_系統261,16:29:00,16:29:00,200702_02,38,前橋駅,0,0,1
平日_15時40分_系統261,16:30:00,16:30:00,200703_02,39,前橋駅,0,0,1
平日_15時40分_系統261,16:32:00,16:32:00,201081_02,40,前橋駅,0,0,1
平日_15時40分_系統261,16:34:00,16:34:00,200998_02,41,前橋駅,0,0,1
平日_15時40分_系統261,16:37:00,16:37:00,200718_10,42,前橋駅,1,0,1
平日_15時48分_系統268,15:48:00,15:48:00,200718_02,1,渋川駅,0,1,1
平日_15時48分_系統268,15:49:00,15:49:00,200998_01,2,渋川駅,0,0,1
平日_15時48分_系統268,15:51:00,15:51:00,201081_01,3,渋川駅,0,0,1
平日_15時48分_系統268,15:53:00,15:53:00,200703_01,4,渋川駅,0,0,1
平日_15時48分_系統268,15:53:00,15:53:00,200702_01,5,渋川駅,0,0,1
平日_15時48分_系統268,15:55:00,15:55:00,200455_01,6,渋川駅,0,0,1
平日_15時48分_系統268,15:56:00,15:56:00,200379_01,7,渋川駅,0,0,1
平日_15時48分_系統268,15:58:00,15:58:00,201015_01,8,渋川駅,0,0,1
平日_15時48分_系統268,15:59:00,15:59:00,200262_01,9,渋川駅,0,0,1
平日_15時48分_系統268,16:00:00,16:00:00,200142_01,10,渋川駅,0,0,1
平日_15時48分_系統268,16:01:00,16:01:00,200141_01,11,渋川駅,0,0,1
平日_15時48分_系統268,16:02:00,16:02:00,200542_01,12,渋川駅,0,0,1
平日_15時48分_系統268,16:04:00,16:04:00,201071_01,13,渋川駅,0,0,1
平日_15時48分_系統268,16:06:00,16:06:00,200348_01,14,渋川駅,0,0,1
平日_15時48分_系統268,16:07:00,16:07:00,200343_01,15,渋川駅,0,0,1
平日_15時48分_系統268,16:08:00,16:08:00,200722_01,16,渋川駅,0,0,1
平日_15時48分_系統268,16:10:00,16:10:00,200189_01,17,渋川駅,0,0,1
平日_15時48分_系統268,16:12:00,16:12:00,201056_01,18,渋川駅,0,0,1
平日_15時48分_系統268,16:13:00,16:13:00,200872_01,19,渋川駅,0,0,1
平日_15時48分_系統268,16:14:00,16:14:00,200981_01,20,渋川駅,0,0,1
平日_15時48分_系統268,16:15:00,16:15:00,201100_01,21,渋川駅,0,0,1
平日_15時48分_系統268,16:16:00,16:16:00,200153_01,22,渋川駅,0,0,1
平日_15時48分_系統268,16:16:00,16:16:00,200395_01,23,渋川駅,0,0,1
平日_15時48分_系統268,16:17:00,16:17:00,200895_01,24,渋川駅,0,0,1
平日_15時48分_系統268,16:19:00,16:19:00,200985_01,25,渋川駅,0,0,1
平日_15時48分_系統268,16:19:00,16:19:00,200987_01,26,渋川駅,0,0,1
平日_15時48分_系統268,16:20:00,16:20:00,200519_01,27,渋川駅,0,0,1
平日_15時48分_系統268,16:21:00,16:21:00,200017_01,28,渋川駅,0,0,1
平日_15時48分_系統268,16:23:00,16:23:00,200506_01,29,渋川駅,0,0,1
平日_15時48分_系統268,16:24:00,16:24:00,200827_01,30,渋川駅,0,0,1
平日_15時48分_系統268,16:26:00,16:26:00,200730_01,31,渋川駅,0,0,1
平日_15時48分_系統268,16:27:00,16:27:00,200768_01,32,渋川駅,0,0,1
平日_15時48分_系統268,16:30:00,16:30:00,200463_10,33,渋川駅,1,0,1
平日_15時50分_系統587,15:50:00,15:50:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
平日_15時50分_系統587,15:52:00,15:52:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
平日_15時50分_系統587,15:53:00,15:53:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
平日_15時50分_系統587,15:54:00,15:54:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
平日_15時50分_系統587,15:56:00,15:56:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
平日_15時50分_系統587,15:58:00,15:58:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
平日_15時50分_系統587,16:00:00,16:00:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
平日_15時50分_系統587,16:01:00,16:01:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
平日_15時50分_系統587,16:02:00,16:02:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
平日_15時50分_系統587,16:05:00,16:05:00,200261_01,10,前橋駅,0,0,1
平日_15時50分_系統587,16:06:00,16:06:00,200503_02,11,前橋駅,0,0,1
平日_15時50分_系統587,16:08:00,16:08:00,200262_02,12,前橋駅,0,0,1
平日_15時50分_系統587,16:09:00,16:09:00,201015_02,13,前橋駅,0,0,1
平日_15時50分_系統587,16:11:00,16:11:00,200379_02,14,前橋駅,0,0,1
平日_15時50分_系統587,16:12:00,16:12:00,200455_02,15,前橋駅,0,0,1
平日_15時50分_系統587,16:14:00,16:14:00,200702_02,16,前橋駅,0,0,1
平日_15時50分_系統587,16:15:00,16:15:00,200703_02,17,前橋駅,0,0,1
平日_15時50分_系統587,16:17:00,16:17:00,201081_02,18,前橋駅,0,0,1
平日_15時50分_系統587,16:19:00,16:19:00,200998_02,19,前橋駅,0,0,1
平日_15時50分_系統587,16:22:00,16:22:00,200718_10,20,前橋駅,1,0,1
平日_16時05分_系統268,16:05:00,16:05:00,200718_02,1,渋川駅,0,1,1
平日_16時05分_系統268,16:06:00,16:06:00,200998_01,2,渋川駅,0,0,1
平日_16時05分_系統268,16:08:00,16:08:00,201081_01,3,渋川駅,0,0,1
平日_16時05分_系統268,16:10:00,16:10:00,200703_01,4,渋川駅,0,0,1
平日_16時05分_系統268,16:10:00,16:10:00,200702_01,5,渋川駅,0,0,1
平日_16時05分_系統268,16:12:00,16:12:00,200455_01,6,渋川駅,0,0,1
平日_16時05分_系統268,16:13:00,16:13:00,200379_01,7,渋川駅,0,0,1
平日_16時05分_系統268,16:15:00,16:15:00,201015_01,8,渋川駅,0,0,1
平日_16時05分_系統268,16:16:00,16:16:00,200262_01,9,渋川駅,0,0,1
平日_16時05分_系統268,16:17:00,16:17:00,200142_01,10,渋川駅,0,0,1
平日_16時05分_系統268,16:18:00,16:18:00,200141_01,11,渋川駅,0,0,1
平日_16時05分_系統268,16:19:00,16:19:00,200542_01,12,渋川駅,0,0,1
平日_16時05分_系統268,16:21:00,16:21:00,201071_01,13,渋川駅,0,0,1
平日_16時05分_系統268,16:23:00,16:23:00,200348_01,14,渋川駅,0,0,1
平日_16時05分_系統268,16:24:00,16:24:00,200343_01,15,渋川駅,0,0,1
平日_16時05分_系統268,16:25:00,16:25:00,200722_01,16,渋川駅,0,0,1
平日_16時05分_系統268,16:27:00,16:27:00,200189_01,17,渋川駅,0,0,1
平日_16時05分_系統268,16:29:00,16:29:00,201056_01,18,渋川駅,0,0,1
平日_16時05分_系統268,16:30:00,16:30:00,200872_01,19,渋川駅,0,0,1
平日_16時05分_系統268,16:31:00,16:31:00,200981_01,20,渋川駅,0,0,1
平日_16時05分_系統268,16:32:00,16:32:00,201100_01,21,渋川駅,0,0,1
平日_16時05分_系統268,16:33:00,16:33:00,200153_01,22,渋川駅,0,0,1
平日_16時05分_系統268,16:33:00,16:33:00,200395_01,23,渋川駅,0,0,1
平日_16時05分_系統268,16:34:00,16:34:00,200895_01,24,渋川駅,0,0,1
平日_16時05分_系統268,16:36:00,16:36:00,200985_01,25,渋川駅,0,0,1
平日_16時05分_系統268,16:36:00,16:36:00,200987_01,26,渋川駅,0,0,1
平日_16時05分_系統268,16:37:00,16:37:00,200519_01,27,渋川駅,0,0,1
平日_16時05分_系統268,16:38:00,16:38:00,200017_01,28,渋川駅,0,0,1
平日_16時05分_系統268,16:40:00,16:40:00,200506_01,29,渋川駅,0,0,1
平日_16時05分_系統268,16:41:00,16:41:00,200827_01,30,渋川駅,0,0,1
平日_16時05分_系統268,16:43:00,16:43:00,200730_01,31,渋川駅,0,0,1
平日_16時05分_系統268,16:44:00,16:44:00,200768_01,32,渋川駅,0,0,1
平日_16時05分_系統268,16:47:00,16:47:00,200463_10,33,渋川駅,1,0,1
平日_16時12分_系統261,16:12:00,16:12:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
平日_16時12分_系統261,16:13:00,16:13:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
平日_16時12分_系統261,16:14:00,16:14:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
平日_16時12分_系統261,16:15:00,16:15:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
平日_16時12分_系統261,16:16:00,16:16:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
平日_16時12分_系統261,16:17:00,16:17:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
平日_16時12分_系統261,16:18:00,16:18:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
平日_16時12分_系統261,16:19:00,16:19:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
平日_16時12分_系統261,16:20:00,16:20:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
平日_16時12分_系統261,16:25:00,16:25:00,200463_01,10,前橋駅,0,0,1
平日_16時12分_系統261,16:26:00,16:26:00,200768_02,11,前橋駅,0,0,1
平日_16時12分_系統261,16:27:00,16:27:00,200730_02,12,前橋駅,0,0,1
平日_16時12分_系統261,16:29:00,16:29:00,200827_02,13,前橋駅,0,0,1
平日_16時12分_系統261,16:30:00,16:30:00,200506_02,14,前橋駅,0,0,1
平日_16時12分_系統261,16:31:00,16:31:00,200017_02,15,前橋駅,0,0,1
平日_16時12分_系統261,16:32:00,16:32:00,200519_02,16,前橋駅,0,0,1
平日_16時12分_系統261,16:32:00,16:32:00,200987_02,17,前橋駅,0,0,1
平日_16時12分_系統261,16:34:00,16:34:00,200985_02,18,前橋駅,0,0,1
平日_16時12分_系統261,16:35:00,16:35:00,200895_02,19,前橋駅,0,0,1
平日_16時12分_系統261,16:37:00,16:37:00,200395_02,20,前橋駅,0,0,1
平日_16時12分_系統261,16:37:00,16:37:00,200153_02,21,前橋駅,0,0,1
平日_16時12分_系統261,16:38:00,16:38:00,201100_02,22,前橋駅,0,0,1
平日_16時12分_系統261,16:39:00,16:39:00,200981_02,23,前橋駅,0,0,1
平日_16時12分_系統261,16:40:00,16:40:00,200872_02,24,前橋駅,0,0,1
平日_16時12分_系統261,16:41:00,16:41:00,201056_02,25,前橋駅,0,0,1
平日_16時12分_系統261,16:43:00,16:43:00,200189_02,26,前橋駅,0,0,1
平日_16時12分_系統261,16:44:00,16:44:00,200722_02,27,前橋駅,0,0,1
平日_16時12分_系統261,16:45:00,16:45:00,200343_02,28,前橋駅,0,0,1
平日_16時12分_系統261,16:46:00,16:46:00,200348_02,29,前橋駅,0,0,1
平日_16時12分_系統261,16:48:00,16:48:00,201071_02,30,前橋駅,0,0,1
平日_16時12分_系統261,16:50:00,16:50:00,200542_02,31,前橋駅,0,0,1
平日_16時12分_系統261,16:52:00,16:52:00,200141_02,32,前橋駅,0,0,1
平日_16時12分_系統261,16:53:00,16:53:00,200142_02,33,前橋駅,0,0,1
平日_16時12分_系統261,16:55:00,16:55:00,200262_02,34,前橋駅,0,0,1
平日_16時12分_系統261,16:56:00,16:56:00,201015_02,35,前橋駅,0,0,1
平日_16時12分_系統261,16:58:00,16:58:00,200379_02,36,前橋駅,0,0,1
平日_16時12分_系統261,16:59:00,16:59:00,200455_02,37,前橋駅,0,0,1
平日_16時12分_系統261,17:01:00,17:01:00,200702_02,38,前橋駅,0,0,1
平日_16時12分_系統261,17:02:00,17:02:00,200703_02,39,前橋駅,0,0,1
平日_16時12分_系統261,17:04:00,17:04:00,201081_02,40,前橋駅,0,0,1
平日_16時12分_系統261,17:06:00,17:06:00,200998_02,41,前橋駅,0,0,1
平日_16時12分_系統261,17:09:00,17:09:00,200718_10,42,前橋駅,1,0,1
平日_16時17分_系統580,16:17:00,16:17:00,200718_02,1,群馬大学荒牧,0,1,1
平日_16時17分_系統580,16:18:00,16:18:00,200998_01,2,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:20:00,16:20:00,201081_01,3,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:22:00,16:22:00,200703_01,4,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:22:00,16:22:00,200702_01,5,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:24:00,16:24:00,200455_01,6,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:25:00,16:25:00,200379_01,7,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:27:00,16:27:00,201015_01,8,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:28:00,16:28:00,200262_01,9,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:29:00,16:29:00,200142_01,10,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:30:00,16:30:00,200141_01,11,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:31:00,16:31:00,200542_01,12,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:33:00,16:33:00,201071_01,13,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:35:00,16:35:00,200348_01,14,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:36:00,16:36:00,200343_01,15,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:37:00,16:37:00,200722_01,16,群馬大学荒牧,0,0,1
平日_16時17分_系統580,16:40:00,16:40:00,200273_01,17,群馬大学荒牧,1,0,1
平日_16時20分_系統587,16:20:00,16:20:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
平日_16時20分_系統587,16:22:00,16:22:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
平日_16時20分_系統587,16:23:00,16:23:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
平日_16時20分_系統587,16:24:00,16:24:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
平日_16時20分_系統587,16:26:00,16:26:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
平日_16時20分_系統587,16:28:00,16:28:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
平日_16時20分_系統587,16:30:00,16:30:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
平日_16時20分_系統587,16:31:00,16:31:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
平日_16時20分_系統587,16:32:00,16:32:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
平日_16時20分_系統587,16:35:00,16:35:00,200261_01,10,前橋駅,0,0,1
平日_16時20分_系統587,16:36:00,16:36:00,200503_02,11,前橋駅,0,0,1
平日_16時20分_系統587,16:38:00,16:38:00,200262_02,12,前橋駅,0,0,1
平日_16時20分_系統587,16:39:00,16:39:00,201015_02,13,前橋駅,0,0,1
平日_16時20分_系統587,16:41:00,16:41:00,200379_02,14,前橋駅,0,0,1
平日_16時20分_系統587,16:42:00,16:42:00,200455_02,15,前橋駅,0,0,1
平日_16時20分_系統587,16:44:00,16:44:00,200702_02,16,前橋駅,0,0,1
平日_16時20分_系統587,16:45:00,16:45:00,200703_02,17,前橋駅,0,0,1
平日_16時20分_系統587,16:47:00,16:47:00,201081_02,18,前橋駅,0,0,1
平日_16時20分_系統587,16:49:00,16:49:00,200998_02,19,前橋駅,0,0,1
平日_16時20分_系統587,16:52:00,16:52:00,200718_10,20,前橋駅,1,0,1
平日_16時27分_系統262,16:27:00,16:27:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
平日_16時27分_系統262,16:28:00,16:28:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:30:00,16:30:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:32:00,16:32:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:32:00,16:32:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:34:00,16:34:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:35:00,16:35:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:37:00,16:37:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:38:00,16:38:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:39:00,16:39:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:40:00,16:40:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:41:00,16:41:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:43:00,16:43:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:45:00,16:45:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:46:00,16:46:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:47:00,16:47:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:49:00,16:49:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:51:00,16:51:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:52:00,16:52:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:53:00,16:53:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:54:00,16:54:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:55:00,16:55:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:55:00,16:55:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:56:00,16:56:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:58:00,16:58:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:58:00,16:58:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,16:59:00,16:59:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,17:00:00,17:00:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,17:02:00,17:02:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,17:04:00,17:04:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,17:06:00,17:06:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,17:07:00,17:07:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
平日_16時27分_系統262,17:09:00,17:09:00,200463_06,33,渋川市内循環,0,0,1
平日_16時27分_系統262,17:10:00,17:10:00,200468_01,34,渋川市内循環,0,0,1
平日_16時27分_系統262,17:12:00,17:12:00,200466_01,35,渋川市内循環,0,0,1
平日_16時27分_系統262,17:13:00,17:13:00,200704_01,36,渋川市内循環,0,0,1
平日_16時27分_系統262,17:14:00,17:14:00,200476_02,37,渋川市内循環,0,0,1
平日_16時27分_系統262,17:15:00,17:15:00,200477_02,38,渋川市内循環,0,0,1
平日_16時27分_系統262,17:16:00,17:16:00,200430_02,39,渋川市内循環,0,0,1
平日_16時27分_系統262,17:17:00,17:17:00,200007_02,40,渋川市内循環,0,0,1
平日_16時27分_系統262,17:22:00,17:22:00,210463_10,41,渋川市内循環,1,0,1
平日_16時45分_系統265,16:45:00,16:45:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
平日_16時45分_系統265,16:46:00,16:46:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:47:00,16:47:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:49:00,16:49:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:50:00,16:50:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:51:00,16:51:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:52:00,16:52:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:52:00,16:52:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:54:00,16:54:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:55:00,16:55:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:57:00,16:57:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:57:00,16:57:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:58:00,16:58:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,16:59:00,16:59:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,17:00:00,17:00:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,17:01:00,17:01:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,17:03:00,17:03:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_16時45分_系統265,17:06:00,17:06:00,200273_01,18,前橋駅,0,0,1
平日_16時45分_系統265,17:08:00,17:08:00,200722_02,19,前橋駅,0,0,1
平日_16時45分_系統265,17:09:00,17:09:00,200343_02,20,前橋駅,0,0,1
平日_16時45分_系統265,17:10:00,17:10:00,200348_02,21,前橋駅,0,0,1
平日_16時45分_系統265,17:12:00,17:12:00,201071_02,22,前橋駅,0,0,1
平日_16時45分_系統265,17:14:00,17:14:00,200542_02,23,前橋駅,0,0,1
平日_16時45分_系統265,17:16:00,17:16:00,200141_02,24,前橋駅,0,0,1
平日_16時45分_系統265,17:17:00,17:17:00,200142_02,25,前橋駅,0,0,1
平日_16時45分_系統265,17:19:00,17:19:00,200262_02,26,前橋駅,0,0,1
平日_16時45分_系統265,17:20:00,17:20:00,201015_02,27,前橋駅,0,0,1
平日_16時45分_系統265,17:22:00,17:22:00,200379_02,28,前橋駅,0,0,1
平日_16時45分_系統265,17:23:00,17:23:00,200455_02,29,前橋駅,0,0,1
平日_16時45分_系統265,17:25:00,17:25:00,200702_02,30,前橋駅,0,0,1
平日_16時45分_系統265,17:26:00,17:26:00,200703_02,31,前橋駅,0,0,1
平日_16時45分_系統265,17:28:00,17:28:00,201081_02,32,前橋駅,0,0,1
平日_16時45分_系統265,17:30:00,17:30:00,200998_02,33,前橋駅,0,0,1
平日_16時45分_系統265,17:33:00,17:33:00,200718_10,34,前橋駅,1,0,1
平日_16時50分_系統268,16:50:00,16:50:00,200718_02,1,渋川駅,0,1,1
平日_16時50分_系統268,16:51:00,16:51:00,200998_01,2,渋川駅,0,0,1
平日_16時50分_系統268,16:53:00,16:53:00,201081_01,3,渋川駅,0,0,1
平日_16時50分_系統268,16:55:00,16:55:00,200703_01,4,渋川駅,0,0,1
平日_16時50分_系統268,16:55:00,16:55:00,200702_01,5,渋川駅,0,0,1
平日_16時50分_系統268,16:57:00,16:57:00,200455_01,6,渋川駅,0,0,1
平日_16時50分_系統268,16:58:00,16:58:00,200379_01,7,渋川駅,0,0,1
平日_16時50分_系統268,17:00:00,17:00:00,201015_01,8,渋川駅,0,0,1
平日_16時50分_系統268,17:01:00,17:01:00,200262_01,9,渋川駅,0,0,1
平日_16時50分_系統268,17:02:00,17:02:00,200142_01,10,渋川駅,0,0,1
平日_16時50分_系統268,17:03:00,17:03:00,200141_01,11,渋川駅,0,0,1
平日_16時50分_系統268,17:04:00,17:04:00,200542_01,12,渋川駅,0,0,1
平日_16時50分_系統268,17:06:00,17:06:00,201071_01,13,渋川駅,0,0,1
平日_16時50分_系統268,17:08:00,17:08:00,200348_01,14,渋川駅,0,0,1
平日_16時50分_系統268,17:09:00,17:09:00,200343_01,15,渋川駅,0,0,1
平日_16時50分_系統268,17:10:00,17:10:00,200722_01,16,渋川駅,0,0,1
平日_16時50分_系統268,17:12:00,17:12:00,200189_01,17,渋川駅,0,0,1
平日_16時50分_系統268,17:14:00,17:14:00,201056_01,18,渋川駅,0,0,1
平日_16時50分_系統268,17:15:00,17:15:00,200872_01,19,渋川駅,0,0,1
平日_16時50分_系統268,17:16:00,17:16:00,200981_01,20,渋川駅,0,0,1
平日_16時50分_系統268,17:17:00,17:17:00,201100_01,21,渋川駅,0,0,1
平日_16時50分_系統268,17:18:00,17:18:00,200153_01,22,渋川駅,0,0,1
平日_16時50分_系統268,17:18:00,17:18:00,200395_01,23,渋川駅,0,0,1
平日_16時50分_系統268,17:19:00,17:19:00,200895_01,24,渋川駅,0,0,1
平日_16時50分_系統268,17:21:00,17:21:00,200985_01,25,渋川駅,0,0,1
平日_16時50分_系統268,17:21:00,17:21:00,200987_01,26,渋川駅,0,0,1
平日_16時50分_系統268,17:22:00,17:22:00,200519_01,27,渋川駅,0,0,1
平日_16時50分_系統268,17:23:00,17:23:00,200017_01,28,渋川駅,0,0,1
平日_16時50分_系統268,17:25:00,17:25:00,200506_01,29,渋川駅,0,0,1
平日_16時50分_系統268,17:27:00,17:27:00,200827_01,30,渋川駅,0,0,1
平日_16時50分_系統268,17:29:00,17:29:00,200730_01,31,渋川駅,0,0,1
平日_16時50分_系統268,17:30:00,17:30:00,200768_01,32,渋川駅,0,0,1
平日_16時50分_系統268,17:33:00,17:33:00,200463_10,33,渋川駅,1,0,1
平日_16時55分_系統581,16:55:00,16:55:00,200273_01,1,前橋駅,0,1,1
平日_16時55分_系統581,16:57:00,16:57:00,200722_02,2,前橋駅,0,0,1
平日_16時55分_系統581,16:58:00,16:58:00,200343_02,3,前橋駅,0,0,1
平日_16時55分_系統581,16:59:00,16:59:00,200348_02,4,前橋駅,0,0,1
平日_16時55分_系統581,17:01:00,17:01:00,201071_02,5,前橋駅,0,0,1
平日_16時55分_系統581,17:03:00,17:03:00,200542_02,6,前橋駅,0,0,1
平日_16時55分_系統581,17:05:00,17:05:00,200141_02,7,前橋駅,0,0,1
平日_16時55分_系統581,17:06:00,17:06:00,200142_02,8,前橋駅,0,0,1
平日_16時55分_系統581,17:08:00,17:08:00,200262_02,9,前橋駅,0,0,1
平日_16時55分_系統581,17:09:00,17:09:00,201015_02,10,前橋駅,0,0,1
平日_16時55分_系統581,17:11:00,17:11:00,200379_02,11,前橋駅,0,0,1
平日_16時55分_系統581,17:12:00,17:12:00,200455_02,12,前橋駅,0,0,1
平日_16時55分_系統581,17:14:00,17:14:00,200702_02,13,前橋駅,0,0,1
平日_16時55分_系統581,17:15:00,17:15:00,200703_02,14,前橋駅,0,0,1
平日_16時55分_系統581,17:17:00,17:17:00,201081_02,15,前橋駅,0,0,1
平日_16時55分_系統581,17:19:00,17:19:00,200998_02,16,前橋駅,0,0,1
平日_16時55分_系統581,17:22:00,17:22:00,200718_10,17,前橋駅,1,0,1
平日_17時05分_系統265,17:05:00,17:05:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
平日_17時05分_系統265,17:06:00,17:06:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:07:00,17:07:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:09:00,17:09:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:10:00,17:10:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:11:00,17:11:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:12:00,17:12:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:12:00,17:12:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:14:00,17:14:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:15:00,17:15:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:17:00,17:17:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:17:00,17:17:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:18:00,17:18:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:19:00,17:19:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:20:00,17:20:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:21:00,17:21:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:23:00,17:23:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_17時05分_系統265,17:26:00,17:26:00,200273_01,18,前橋駅,0,0,1
平日_17時05分_系統265,17:28:00,17:28:00,200722_02,19,前橋駅,0,0,1
平日_17時05分_系統265,17:29:00,17:29:00,200343_02,20,前橋駅,0,0,1
平日_17時05分_系統265,17:30:00,17:30:00,200348_02,21,前橋駅,0,0,1
平日_17時05分_系統265,17:32:00,17:32:00,201071_02,22,前橋駅,0,0,1
平日_17時05分_系統265,17:34:00,17:34:00,200542_02,23,前橋駅,0,0,1
平日_17時05分_系統265,17:36:00,17:36:00,200141_02,24,前橋駅,0,0,1
平日_17時05分_系統265,17:37:00,17:37:00,200142_02,25,前橋駅,0,0,1
平日_17時05分_系統265,17:39:00,17:39:00,200262_02,26,前橋駅,0,0,1
平日_17時05分_系統265,17:40:00,17:40:00,201015_02,27,前橋駅,0,0,1
平日_17時05分_系統265,17:42:00,17:42:00,200379_02,28,前橋駅,0,0,1
平日_17時05分_系統265,17:43:00,17:43:00,200455_02,29,前橋駅,0,0,1
平日_17時05分_系統265,17:45:00,17:45:00,200702_02,30,前橋駅,0,0,1
平日_17時05分_系統265,17:46:00,17:46:00,200703_02,31,前橋駅,0,0,1
平日_17時05分_系統265,17:48:00,17:48:00,201081_02,32,前橋駅,0,0,1
平日_17時05分_系統265,17:50:00,17:50:00,200998_02,33,前橋駅,0,0,1
平日_17時05分_系統265,17:53:00,17:53:00,200718_10,34,前橋駅,1,0,1
平日_17時05分_系統582,17:05:00,17:05:00,200718_02,1,群馬大学荒牧（南橘団地 経由）,0,1,1
平日_17時05分_系統582,17:06:00,17:06:00,200998_01,2,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:08:00,17:08:00,201081_01,3,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:10:00,17:10:00,200703_01,4,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:10:00,17:10:00,200702_01,5,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:12:00,17:12:00,200455_01,6,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:13:00,17:13:00,200379_01,7,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:15:00,17:15:00,201015_01,8,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:16:00,17:16:00,200262_01,9,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:17:00,17:17:00,200142_01,10,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:18:00,17:18:00,200141_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:19:00,17:19:00,200542_01,12,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:21:00,17:21:00,201071_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:22:00,17:22:00,200928_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:23:00,17:23:00,200800_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時05分_系統582,17:25:00,17:25:00,200927_01,16,群馬大学荒牧,0,0,1
平日_17時05分_系統582,17:26:00,17:26:00,201185_01,17,群馬大学荒牧,0,0,1
平日_17時05分_系統582,17:30:00,17:30:00,200348_01,18,群馬大学荒牧,0,0,1
平日_17時05分_系統582,17:31:00,17:31:00,200343_01,19,群馬大学荒牧,0,0,1
平日_17時05分_系統582,17:32:00,17:32:00,200722_01,20,群馬大学荒牧,0,0,1
平日_17時05分_系統582,17:35:00,17:35:00,200273_01,21,群馬大学荒牧,1,0,1
平日_17時13分_系統261,17:13:00,17:13:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
平日_17時13分_系統261,17:14:00,17:14:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
平日_17時13分_系統261,17:15:00,17:15:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
平日_17時13分_系統261,17:16:00,17:16:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
平日_17時13分_系統261,17:17:00,17:17:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
平日_17時13分_系統261,17:18:00,17:18:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
平日_17時13分_系統261,17:19:00,17:19:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
平日_17時13分_系統261,17:20:00,17:20:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
平日_17時13分_系統261,17:21:00,17:21:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
平日_17時13分_系統261,17:26:00,17:26:00,200463_01,10,前橋駅,0,0,1
平日_17時13分_系統261,17:27:00,17:27:00,200768_02,11,前橋駅,0,0,1
平日_17時13分_系統261,17:28:00,17:28:00,200730_02,12,前橋駅,0,0,1
平日_17時13分_系統261,17:30:00,17:30:00,200827_02,13,前橋駅,0,0,1
平日_17時13分_系統261,17:31:00,17:31:00,200506_02,14,前橋駅,0,0,1
平日_17時13分_系統261,17:32:00,17:32:00,200017_02,15,前橋駅,0,0,1
平日_17時13分_系統261,17:33:00,17:33:00,200519_02,16,前橋駅,0,0,1
平日_17時13分_系統261,17:33:00,17:33:00,200987_02,17,前橋駅,0,0,1
平日_17時13分_系統261,17:35:00,17:35:00,200985_02,18,前橋駅,0,0,1
平日_17時13分_系統261,17:36:00,17:36:00,200895_02,19,前橋駅,0,0,1
平日_17時13分_系統261,17:38:00,17:38:00,200395_02,20,前橋駅,0,0,1
平日_17時13分_系統261,17:38:00,17:38:00,200153_02,21,前橋駅,0,0,1
平日_17時13分_系統261,17:39:00,17:39:00,201100_02,22,前橋駅,0,0,1
平日_17時13分_系統261,17:40:00,17:40:00,200981_02,23,前橋駅,0,0,1
平日_17時13分_系統261,17:41:00,17:41:00,200872_02,24,前橋駅,0,0,1
平日_17時13分_系統261,17:42:00,17:42:00,201056_02,25,前橋駅,0,0,1
平日_17時13分_系統261,17:44:00,17:44:00,200189_02,26,前橋駅,0,0,1
平日_17時13分_系統261,17:45:00,17:45:00,200722_02,27,前橋駅,0,0,1
平日_17時13分_系統261,17:46:00,17:46:00,200343_02,28,前橋駅,0,0,1
平日_17時13分_系統261,17:47:00,17:47:00,200348_02,29,前橋駅,0,0,1
平日_17時13分_系統261,17:49:00,17:49:00,201071_02,30,前橋駅,0,0,1
平日_17時13分_系統261,17:51:00,17:51:00,200542_02,31,前橋駅,0,0,1
平日_17時13分_系統261,17:53:00,17:53:00,200141_02,32,前橋駅,0,0,1
平日_17時13分_系統261,17:54:00,17:54:00,200142_02,33,前橋駅,0,0,1
平日_17時13分_系統261,17:56:00,17:56:00,200262_02,34,前橋駅,0,0,1
平日_17時13分_系統261,17:57:00,17:57:00,201015_02,35,前橋駅,0,0,1
平日_17時13分_系統261,17:59:00,17:59:00,200379_02,36,前橋駅,0,0,1
平日_17時13分_系統261,18:00:00,18:00:00,200455_02,37,前橋駅,0,0,1
平日_17時13分_系統261,18:02:00,18:02:00,200702_02,38,前橋駅,0,0,1
平日_17時13分_系統261,18:03:00,18:03:00,200703_02,39,前橋駅,0,0,1
平日_17時13分_系統261,18:05:00,18:05:00,201081_02,40,前橋駅,0,0,1
平日_17時13分_系統261,18:07:00,18:07:00,200998_02,41,前橋駅,0,0,1
平日_17時13分_系統261,18:10:00,18:10:00,200718_10,42,前橋駅,1,0,1
平日_17時17分_系統266,17:17:00,17:17:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
平日_17時17分_系統266,17:18:00,17:18:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:20:00,17:20:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:22:00,17:22:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:22:00,17:22:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:24:00,17:24:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:25:00,17:25:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:27:00,17:27:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:28:00,17:28:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:29:00,17:29:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:30:00,17:30:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:31:00,17:31:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:33:00,17:33:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:35:00,17:35:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:36:00,17:36:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:37:00,17:37:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
平日_17時17分_系統266,17:39:00,17:39:00,200273_01,17,渋川駅,0,0,1
平日_17時17分_系統266,17:42:00,17:42:00,200189_01,18,渋川駅,0,0,1
平日_17時17分_系統266,17:44:00,17:44:00,201056_01,19,渋川駅,0,0,1
平日_17時17分_系統266,17:45:00,17:45:00,200872_01,20,渋川駅,0,0,1
平日_17時17分_系統266,17:46:00,17:46:00,200981_01,21,渋川駅,0,0,1
平日_17時17分_系統266,17:47:00,17:47:00,201100_01,22,渋川駅,0,0,1
平日_17時17分_系統266,17:48:00,17:48:00,200153_01,23,渋川駅,0,0,1
平日_17時17分_系統266,17:48:00,17:48:00,200395_01,24,渋川駅,0,0,1
平日_17時17分_系統266,17:49:00,17:49:00,200895_01,25,渋川駅,0,0,1
平日_17時17分_系統266,17:51:00,17:51:00,200985_01,26,渋川駅,0,0,1
平日_17時17分_系統266,17:51:00,17:51:00,200987_01,27,渋川駅,0,0,1
平日_17時17分_系統266,17:52:00,17:52:00,200519_01,28,渋川駅,0,0,1
平日_17時17分_系統266,17:53:00,17:53:00,200017_01,29,渋川駅,0,0,1
平日_17時17分_系統266,17:55:00,17:55:00,200506_01,30,渋川駅,0,0,1
平日_17時17分_系統266,17:57:00,17:57:00,200827_01,31,渋川駅,0,0,1
平日_17時17分_系統266,17:59:00,17:59:00,200730_01,32,渋川駅,0,0,1
平日_17時17分_系統266,18:00:00,18:00:00,200768_01,33,渋川駅,0,0,1
平日_17時17分_系統266,18:03:00,18:03:00,200463_10,34,渋川駅,1,0,1
平日_17時41分_系統268,17:41:00,17:41:00,200718_02,1,渋川駅,0,1,1
平日_17時41分_系統268,17:42:00,17:42:00,200998_01,2,渋川駅,0,0,1
平日_17時41分_系統268,17:44:00,17:44:00,201081_01,3,渋川駅,0,0,1
平日_17時41分_系統268,17:46:00,17:46:00,200703_01,4,渋川駅,0,0,1
平日_17時41分_系統268,17:46:00,17:46:00,200702_01,5,渋川駅,0,0,1
平日_17時41分_系統268,17:48:00,17:48:00,200455_01,6,渋川駅,0,0,1
平日_17時41分_系統268,17:49:00,17:49:00,200379_01,7,渋川駅,0,0,1
平日_17時41分_系統268,17:51:00,17:51:00,201015_01,8,渋川駅,0,0,1
平日_17時41分_系統268,17:52:00,17:52:00,200262_01,9,渋川駅,0,0,1
平日_17時41分_系統268,17:53:00,17:53:00,200142_01,10,渋川駅,0,0,1
平日_17時41分_系統268,17:54:00,17:54:00,200141_01,11,渋川駅,0,0,1
平日_17時41分_系統268,17:55:00,17:55:00,200542_01,12,渋川駅,0,0,1
平日_17時41分_系統268,17:57:00,17:57:00,201071_01,13,渋川駅,0,0,1
平日_17時41分_系統268,17:59:00,17:59:00,200348_01,14,渋川駅,0,0,1
平日_17時41分_系統268,18:00:00,18:00:00,200343_01,15,渋川駅,0,0,1
平日_17時41分_系統268,18:01:00,18:01:00,200722_01,16,渋川駅,0,0,1
平日_17時41分_系統268,18:03:00,18:03:00,200189_01,17,渋川駅,0,0,1
平日_17時41分_系統268,18:05:00,18:05:00,201056_01,18,渋川駅,0,0,1
平日_17時41分_系統268,18:06:00,18:06:00,200872_01,19,渋川駅,0,0,1
平日_17時41分_系統268,18:07:00,18:07:00,200981_01,20,渋川駅,0,0,1
平日_17時41分_系統268,18:08:00,18:08:00,201100_01,21,渋川駅,0,0,1
平日_17時41分_系統268,18:09:00,18:09:00,200153_01,22,渋川駅,0,0,1
平日_17時41分_系統268,18:09:00,18:09:00,200395_01,23,渋川駅,0,0,1
平日_17時41分_系統268,18:10:00,18:10:00,200895_01,24,渋川駅,0,0,1
平日_17時41分_系統268,18:12:00,18:12:00,200985_01,25,渋川駅,0,0,1
平日_17時41分_系統268,18:12:00,18:12:00,200987_01,26,渋川駅,0,0,1
平日_17時41分_系統268,18:13:00,18:13:00,200519_01,27,渋川駅,0,0,1
平日_17時41分_系統268,18:14:00,18:14:00,200017_01,28,渋川駅,0,0,1
平日_17時41分_系統268,18:16:00,18:16:00,200506_01,29,渋川駅,0,0,1
平日_17時41分_系統268,18:18:00,18:18:00,200827_01,30,渋川駅,0,0,1
平日_17時41分_系統268,18:20:00,18:20:00,200730_01,31,渋川駅,0,0,1
平日_17時41分_系統268,18:21:00,18:21:00,200768_01,32,渋川駅,0,0,1
平日_17時41分_系統268,18:24:00,18:24:00,200463_10,33,渋川駅,1,0,1
平日_17時45分_系統267,17:45:00,17:45:00,200463_01,1,前橋駅,0,1,1
平日_17時45分_系統267,17:46:00,17:46:00,200768_02,2,前橋駅,0,0,1
平日_17時45分_系統267,17:47:00,17:47:00,200730_02,3,前橋駅,0,0,1
平日_17時45分_系統267,17:49:00,17:49:00,200827_02,4,前橋駅,0,0,1
平日_17時45分_系統267,17:51:00,17:51:00,200506_02,5,前橋駅,0,0,1
平日_17時45分_系統267,17:53:00,17:53:00,200017_02,6,前橋駅,0,0,1
平日_17時45分_系統267,17:54:00,17:54:00,200519_02,7,前橋駅,0,0,1
平日_17時45分_系統267,17:54:00,17:54:00,200987_02,8,前橋駅,0,0,1
平日_17時45分_系統267,17:56:00,17:56:00,200985_02,9,前橋駅,0,0,1
平日_17時45分_系統267,17:57:00,17:57:00,200895_02,10,前橋駅,0,0,1
平日_17時45分_系統267,17:59:00,17:59:00,200395_02,11,前橋駅,0,0,1
平日_17時45分_系統267,17:59:00,17:59:00,200153_02,12,前橋駅,0,0,1
平日_17時45分_系統267,18:00:00,18:00:00,201100_02,13,前橋駅,0,0,1
平日_17時45分_系統267,18:01:00,18:01:00,200981_02,14,前橋駅,0,0,1
平日_17時45分_系統267,18:02:00,18:02:00,200872_02,15,前橋駅,0,0,1
平日_17時45分_系統267,18:03:00,18:03:00,201056_02,16,前橋駅,0,0,1
平日_17時45分_系統267,18:05:00,18:05:00,200189_02,17,前橋駅,0,0,1
平日_17時45分_系統267,18:06:00,18:06:00,200722_02,18,前橋駅,0,0,1
平日_17時45分_系統267,18:07:00,18:07:00,200343_02,19,前橋駅,0,0,1
平日_17時45分_系統267,18:08:00,18:08:00,200348_02,20,前橋駅,0,0,1
平日_17時45分_系統267,18:10:00,18:10:00,201071_02,21,前橋駅,0,0,1
平日_17時45分_系統267,18:12:00,18:12:00,200542_02,22,前橋駅,0,0,1
平日_17時45分_系統267,18:14:00,18:14:00,200141_02,23,前橋駅,0,0,1
平日_17時45分_系統267,18:16:00,18:16:00,200142_02,24,前橋駅,0,0,1
平日_17時45分_系統267,18:18:00,18:18:00,200262_02,25,前橋駅,0,0,1
平日_17時45分_系統267,18:19:00,18:19:00,201015_02,26,前橋駅,0,0,1
平日_17時45分_系統267,18:21:00,18:21:00,200379_02,27,前橋駅,0,0,1
平日_17時45分_系統267,18:22:00,18:22:00,200455_02,28,前橋駅,0,0,1
平日_17時45分_系統267,18:24:00,18:24:00,200702_02,29,前橋駅,0,0,1
平日_17時45分_系統267,18:26:00,18:26:00,200703_02,30,前橋駅,0,0,1
平日_17時45分_系統267,18:28:00,18:28:00,201081_02,31,前橋駅,0,0,1
平日_17時45分_系統267,18:30:00,18:30:00,200998_02,32,前橋駅,0,0,1
平日_17時45分_系統267,18:33:00,18:33:00,200718_10,33,前橋駅,1,0,1
平日_17時48分_系統272,17:48:00,17:48:00,200718_02,1,小児医療センター,0,1,1
平日_17時48分_系統272,17:49:00,17:49:00,200998_01,2,小児医療センター,0,0,1
平日_17時48分_系統272,17:51:00,17:51:00,201081_01,3,小児医療センター,0,0,1
平日_17時48分_系統272,17:53:00,17:53:00,200703_01,4,小児医療センター,0,0,1
平日_17時48分_系統272,17:53:00,17:53:00,200702_01,5,小児医療センター,0,0,1
平日_17時48分_系統272,17:55:00,17:55:00,200455_01,6,小児医療センター,0,0,1
平日_17時48分_系統272,17:56:00,17:56:00,200379_01,7,小児医療センター,0,0,1
平日_17時48分_系統272,17:58:00,17:58:00,201015_01,8,小児医療センター,0,0,1
平日_17時48分_系統272,17:59:00,17:59:00,200262_01,9,小児医療センター,0,0,1
平日_17時48分_系統272,18:00:00,18:00:00,200142_01,10,小児医療センター,0,0,1
平日_17時48分_系統272,18:01:00,18:01:00,200141_01,11,小児医療センター,0,0,1
平日_17時48分_系統272,18:02:00,18:02:00,200542_01,12,小児医療センター,0,0,1
平日_17時48分_系統272,18:04:00,18:04:00,201071_01,13,小児医療センター,0,0,1
平日_17時48分_系統272,18:06:00,18:06:00,200348_01,14,小児医療センター,0,0,1
平日_17時48分_系統272,18:07:00,18:07:00,200343_01,15,小児医療センター,0,0,1
平日_17時48分_系統272,18:08:00,18:08:00,200722_01,16,小児医療センター,0,0,1
平日_17時48分_系統272,18:10:00,18:10:00,200189_01,17,小児医療センター,0,0,1
平日_17時48分_系統272,18:12:00,18:12:00,201056_01,18,小児医療センター,0,0,1
平日_17時48分_系統272,18:13:00,18:13:00,200872_01,19,小児医療センター,0,0,1
平日_17時48分_系統272,18:14:00,18:14:00,200981_01,20,小児医療センター,0,0,1
平日_17時48分_系統272,18:15:00,18:15:00,201100_03,21,小児医療センター,0,0,1
平日_17時48分_系統272,18:17:00,18:17:00,200474_01,22,小児医療センター,0,0,1
平日_17時48分_系統272,18:19:00,18:19:00,200484_01,23,小児医療センター,1,0,1
平日_17時55分_系統581,17:55:00,17:55:00,200273_01,1,前橋駅,0,1,1
平日_17時55分_系統581,17:57:00,17:57:00,200722_02,2,前橋駅,0,0,1
平日_17時55分_系統581,17:58:00,17:58:00,200343_02,3,前橋駅,0,0,1
平日_17時55分_系統581,17:59:00,17:59:00,200348_02,4,前橋駅,0,0,1
平日_17時55分_系統581,18:01:00,18:01:00,201071_02,5,前橋駅,0,0,1
平日_17時55分_系統581,18:03:00,18:03:00,200542_02,6,前橋駅,0,0,1
平日_17時55分_系統581,18:05:00,18:05:00,200141_02,7,前橋駅,0,0,1
平日_17時55分_系統581,18:06:00,18:06:00,200142_02,8,前橋駅,0,0,1
平日_17時55分_系統581,18:08:00,18:08:00,200262_02,9,前橋駅,0,0,1
平日_17時55分_系統581,18:09:00,18:09:00,201015_02,10,前橋駅,0,0,1
平日_17時55分_系統581,18:11:00,18:11:00,200379_02,11,前橋駅,0,0,1
平日_17時55分_系統581,18:12:00,18:12:00,200455_02,12,前橋駅,0,0,1
平日_17時55分_系統581,18:14:00,18:14:00,200702_02,13,前橋駅,0,0,1
平日_17時55分_系統581,18:15:00,18:15:00,200703_02,14,前橋駅,0,0,1
平日_17時55分_系統581,18:17:00,18:17:00,201081_02,15,前橋駅,0,0,1
平日_17時55分_系統581,18:19:00,18:19:00,200998_02,16,前橋駅,0,0,1
平日_17時55分_系統581,18:22:00,18:22:00,200718_10,17,前橋駅,1,0,1
平日_17時57分_系統582,17:57:00,17:57:00,200718_02,1,群馬大学荒牧（南橘団地 経由）,0,1,1
平日_17時57分_系統582,17:58:00,17:58:00,200998_01,2,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:00:00,18:00:00,201081_01,3,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:02:00,18:02:00,200703_01,4,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:02:00,18:02:00,200702_01,5,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:04:00,18:04:00,200455_01,6,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:05:00,18:05:00,200379_01,7,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:07:00,18:07:00,201015_01,8,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:08:00,18:08:00,200262_01,9,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:09:00,18:09:00,200142_01,10,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:10:00,18:10:00,200141_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:11:00,18:11:00,200542_01,12,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:13:00,18:13:00,201071_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:14:00,18:14:00,200928_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:15:00,18:15:00,200800_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
平日_17時57分_系統582,18:17:00,18:17:00,200927_01,16,群馬大学荒牧,0,0,1
平日_17時57分_系統582,18:18:00,18:18:00,201185_01,17,群馬大学荒牧,0,0,1
平日_17時57分_系統582,18:22:00,18:22:00,200348_01,18,群馬大学荒牧,0,0,1
平日_17時57分_系統582,18:23:00,18:23:00,200343_01,19,群馬大学荒牧,0,0,1
平日_17時57分_系統582,18:24:00,18:24:00,200722_01,20,群馬大学荒牧,0,0,1
平日_17時57分_系統582,18:27:00,18:27:00,200273_01,21,群馬大学荒牧,1,0,1
平日_18時02分_系統267,18:02:00,18:02:00,200463_01,1,前橋駅,0,1,1
平日_18時02分_系統267,18:03:00,18:03:00,200768_02,2,前橋駅,0,0,1
平日_18時02分_系統267,18:04:00,18:04:00,200730_02,3,前橋駅,0,0,1
平日_18時02分_系統267,18:06:00,18:06:00,200827_02,4,前橋駅,0,0,1
平日_18時02分_系統267,18:08:00,18:08:00,200506_02,5,前橋駅,0,0,1
平日_18時02分_系統267,18:10:00,18:10:00,200017_02,6,前橋駅,0,0,1
平日_18時02分_系統267,18:11:00,18:11:00,200519_02,7,前橋駅,0,0,1
平日_18時02分_系統267,18:11:00,18:11:00,200987_02,8,前橋駅,0,0,1
平日_18時02分_系統267,18:13:00,18:13:00,200985_02,9,前橋駅,0,0,1
平日_18時02分_系統267,18:14:00,18:14:00,200895_02,10,前橋駅,0,0,1
平日_18時02分_系統267,18:16:00,18:16:00,200395_02,11,前橋駅,0,0,1
平日_18時02分_系統267,18:16:00,18:16:00,200153_02,12,前橋駅,0,0,1
平日_18時02分_系統267,18:17:00,18:17:00,201100_02,13,前橋駅,0,0,1
平日_18時02分_系統267,18:18:00,18:18:00,200981_02,14,前橋駅,0,0,1
平日_18時02分_系統267,18:19:00,18:19:00,200872_02,15,前橋駅,0,0,1
平日_18時02分_系統267,18:20:00,18:20:00,201056_02,16,前橋駅,0,0,1
平日_18時02分_系統267,18:22:00,18:22:00,200189_02,17,前橋駅,0,0,1
平日_18時02分_系統267,18:23:00,18:23:00,200722_02,18,前橋駅,0,0,1
平日_18時02分_系統267,18:24:00,18:24:00,200343_02,19,前橋駅,0,0,1
平日_18時02分_系統267,18:25:00,18:25:00,200348_02,20,前橋駅,0,0,1
平日_18時02分_系統267,18:27:00,18:27:00,201071_02,21,前橋駅,0,0,1
平日_18時02分_系統267,18:29:00,18:29:00,200542_02,22,前橋駅,0,0,1
平日_18時02分_系統267,18:31:00,18:31:00,200141_02,23,前橋駅,0,0,1
平日_18時02分_系統267,18:33:00,18:33:00,200142_02,24,前橋駅,0,0,1
平日_18時02分_系統267,18:35:00,18:35:00,200262_02,25,前橋駅,0,0,1
平日_18時02分_系統267,18:36:00,18:36:00,201015_02,26,前橋駅,0,0,1
平日_18時02分_系統267,18:38:00,18:38:00,200379_02,27,前橋駅,0,0,1
平日_18時02分_系統267,18:39:00,18:39:00,200455_02,28,前橋駅,0,0,1
平日_18時02分_系統267,18:41:00,18:41:00,200702_02,29,前橋駅,0,0,1
平日_18時02分_系統267,18:43:00,18:43:00,200703_02,30,前橋駅,0,0,1
平日_18時02分_系統267,18:45:00,18:45:00,201081_02,31,前橋駅,0,0,1
平日_18時02分_系統267,18:47:00,18:47:00,200998_02,32,前橋駅,0,0,1
平日_18時02分_系統267,18:50:00,18:50:00,200718_10,33,前橋駅,1,0,1
平日_18時04分_系統262,18:04:00,18:04:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
平日_18時04分_系統262,18:05:00,18:05:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:07:00,18:07:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:09:00,18:09:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:09:00,18:09:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:11:00,18:11:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:12:00,18:12:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:14:00,18:14:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:15:00,18:15:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:16:00,18:16:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:17:00,18:17:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:18:00,18:18:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:20:00,18:20:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:22:00,18:22:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:23:00,18:23:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:24:00,18:24:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:26:00,18:26:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:28:00,18:28:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:29:00,18:29:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:30:00,18:30:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:31:00,18:31:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:32:00,18:32:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:32:00,18:32:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:33:00,18:33:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:35:00,18:35:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:35:00,18:35:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:36:00,18:36:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:37:00,18:37:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:39:00,18:39:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:41:00,18:41:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:43:00,18:43:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:44:00,18:44:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
平日_18時04分_系統262,18:46:00,18:46:00,200463_06,33,渋川市内循環,0,0,1
平日_18時04分_系統262,18:47:00,18:47:00,200468_01,34,渋川市内循環,0,0,1
平日_18時04分_系統262,18:49:00,18:49:00,200466_01,35,渋川市内循環,0,0,1
平日_18時04分_系統262,18:50:00,18:50:00,200704_01,36,渋川市内循環,0,0,1
平日_18時04分_系統262,18:51:00,18:51:00,200476_02,37,渋川市内循環,0,0,1
平日_18時04分_系統262,18:52:00,18:52:00,200477_02,38,渋川市内循環,0,0,1
平日_18時04分_系統262,18:53:00,18:53:00,200430_02,39,渋川市内循環,0,0,1
平日_18時04分_系統262,18:54:00,18:54:00,200007_02,40,渋川市内循環,0,0,1
平日_18時04分_系統262,18:59:00,18:59:00,210463_10,41,渋川市内循環,1,0,1
平日_18時20分_系統268,18:20:00,18:20:00,200718_02,1,渋川駅,0,1,1
平日_18時20分_系統268,18:21:00,18:21:00,200998_01,2,渋川駅,0,0,1
平日_18時20分_系統268,18:23:00,18:23:00,201081_01,3,渋川駅,0,0,1
平日_18時20分_系統268,18:25:00,18:25:00,200703_01,4,渋川駅,0,0,1
平日_18時20分_系統268,18:25:00,18:25:00,200702_01,5,渋川駅,0,0,1
平日_18時20分_系統268,18:27:00,18:27:00,200455_01,6,渋川駅,0,0,1
平日_18時20分_系統268,18:28:00,18:28:00,200379_01,7,渋川駅,0,0,1
平日_18時20分_系統268,18:30:00,18:30:00,201015_01,8,渋川駅,0,0,1
平日_18時20分_系統268,18:31:00,18:31:00,200262_01,9,渋川駅,0,0,1
平日_18時20分_系統268,18:32:00,18:32:00,200142_01,10,渋川駅,0,0,1
平日_18時20分_系統268,18:33:00,18:33:00,200141_01,11,渋川駅,0,0,1
平日_18時20分_系統268,18:34:00,18:34:00,200542_01,12,渋川駅,0,0,1
平日_18時20分_系統268,18:36:00,18:36:00,201071_01,13,渋川駅,0,0,1
平日_18時20分_系統268,18:38:00,18:38:00,200348_01,14,渋川駅,0,0,1
平日_18時20分_系統268,18:39:00,18:39:00,200343_01,15,渋川駅,0,0,1
平日_18時20分_系統268,18:40:00,18:40:00,200722_01,16,渋川駅,0,0,1
平日_18時20分_系統268,18:42:00,18:42:00,200189_01,17,渋川駅,0,0,1
平日_18時20分_系統268,18:44:00,18:44:00,201056_01,18,渋川駅,0,0,1
平日_18時20分_系統268,18:45:00,18:45:00,200872_01,19,渋川駅,0,0,1
平日_18時20分_系統268,18:46:00,18:46:00,200981_01,20,渋川駅,0,0,1
平日_18時20分_系統268,18:47:00,18:47:00,201100_01,21,渋川駅,0,0,1
平日_18時20分_系統268,18:48:00,18:48:00,200153_01,22,渋川駅,0,0,1
平日_18時20分_系統268,18:48:00,18:48:00,200395_01,23,渋川駅,0,0,1
平日_18時20分_系統268,18:49:00,18:49:00,200895_01,24,渋川駅,0,0,1
平日_18時20分_系統268,18:51:00,18:51:00,200985_01,25,渋川駅,0,0,1
平日_18時20分_系統268,18:51:00,18:51:00,200987_01,26,渋川駅,0,0,1
平日_18時20分_系統268,18:52:00,18:52:00,200519_01,27,渋川駅,0,0,1
平日_18時20分_系統268,18:53:00,18:53:00,200017_01,28,渋川駅,0,0,1
平日_18時20分_系統268,18:55:00,18:55:00,200506_01,29,渋川駅,0,0,1
平日_18時20分_系統268,18:56:00,18:56:00,200827_01,30,渋川駅,0,0,1
平日_18時20分_系統268,18:58:00,18:58:00,200730_01,31,渋川駅,0,0,1
平日_18時20分_系統268,18:59:00,18:59:00,200768_01,32,渋川駅,0,0,1
平日_18時20分_系統268,19:02:00,19:02:00,200463_10,33,渋川駅,1,0,1
平日_18時30分_系統271,18:30:00,18:30:00,200484_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
平日_18時30分_系統271,18:31:00,18:31:00,200474_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時30分_系統271,18:33:00,18:33:00,201100_04,3,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時30分_系統271,18:35:00,18:35:00,200981_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時30分_系統271,18:36:00,18:36:00,200872_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時30分_系統271,18:37:00,18:37:00,201056_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時30分_系統271,18:39:00,18:39:00,200189_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時30分_系統271,18:42:00,18:42:00,200273_01,8,前橋駅,0,0,1
平日_18時30分_系統271,18:44:00,18:44:00,200722_02,9,前橋駅,0,0,1
平日_18時30分_系統271,18:45:00,18:45:00,200343_02,10,前橋駅,0,0,1
平日_18時30分_系統271,18:46:00,18:46:00,200348_02,11,前橋駅,0,0,1
平日_18時30分_系統271,18:48:00,18:48:00,201071_02,12,前橋駅,0,0,1
平日_18時30分_系統271,18:50:00,18:50:00,200542_02,13,前橋駅,0,0,1
平日_18時30分_系統271,18:52:00,18:52:00,200141_02,14,前橋駅,0,0,1
平日_18時30分_系統271,18:54:00,18:54:00,200142_02,15,前橋駅,0,0,1
平日_18時30分_系統271,18:57:00,18:57:00,200262_02,16,前橋駅,0,0,1
平日_18時30分_系統271,18:58:00,18:58:00,201015_02,17,前橋駅,0,0,1
平日_18時30分_系統271,19:00:00,19:00:00,200379_02,18,前橋駅,0,0,1
平日_18時30分_系統271,19:02:00,19:02:00,200455_02,19,前橋駅,0,0,1
平日_18時30分_系統271,19:04:00,19:04:00,200702_02,20,前橋駅,0,0,1
平日_18時30分_系統271,19:06:00,19:06:00,200703_02,21,前橋駅,0,0,1
平日_18時30分_系統271,19:08:00,19:08:00,201081_02,22,前橋駅,0,0,1
平日_18時30分_系統271,19:10:00,19:10:00,200998_02,23,前橋駅,0,0,1
平日_18時30分_系統271,19:13:00,19:13:00,200718_10,24,前橋駅,1,0,1
平日_18時35分_系統581,18:35:00,18:35:00,200273_01,1,前橋駅,0,1,1
平日_18時35分_系統581,18:37:00,18:37:00,200722_02,2,前橋駅,0,0,1
平日_18時35分_系統581,18:38:00,18:38:00,200343_02,3,前橋駅,0,0,1
平日_18時35分_系統581,18:39:00,18:39:00,200348_02,4,前橋駅,0,0,1
平日_18時35分_系統581,18:41:00,18:41:00,201071_02,5,前橋駅,0,0,1
平日_18時35分_系統581,18:43:00,18:43:00,200542_02,6,前橋駅,0,0,1
平日_18時35分_系統581,18:45:00,18:45:00,200141_02,7,前橋駅,0,0,1
平日_18時35分_系統581,18:46:00,18:46:00,200142_02,8,前橋駅,0,0,1
平日_18時35分_系統581,18:48:00,18:48:00,200262_02,9,前橋駅,0,0,1
平日_18時35分_系統581,18:49:00,18:49:00,201015_02,10,前橋駅,0,0,1
平日_18時35分_系統581,18:51:00,18:51:00,200379_02,11,前橋駅,0,0,1
平日_18時35分_系統581,18:52:00,18:52:00,200455_02,12,前橋駅,0,0,1
平日_18時35分_系統581,18:54:00,18:54:00,200702_02,13,前橋駅,0,0,1
平日_18時35分_系統581,18:55:00,18:55:00,200703_02,14,前橋駅,0,0,1
平日_18時35分_系統581,18:57:00,18:57:00,201081_02,15,前橋駅,0,0,1
平日_18時35分_系統581,18:59:00,18:59:00,200998_02,16,前橋駅,0,0,1
平日_18時35分_系統581,19:02:00,19:02:00,200718_10,17,前橋駅,1,0,1
平日_18時37分_系統527,18:37:00,18:37:00,200718_02,1,南橘団地,0,1,1
平日_18時37分_系統527,18:38:00,18:38:00,200998_01,2,南橘団地,0,0,1
平日_18時37分_系統527,18:40:00,18:40:00,201081_01,3,南橘団地,0,0,1
平日_18時37分_系統527,18:42:00,18:42:00,200703_01,4,南橘団地,0,0,1
平日_18時37分_系統527,18:42:00,18:42:00,200702_01,5,南橘団地,0,0,1
平日_18時37分_系統527,18:44:00,18:44:00,200455_01,6,南橘団地,0,0,1
平日_18時37分_系統527,18:45:00,18:45:00,200379_01,7,南橘団地,0,0,1
平日_18時37分_系統527,18:47:00,18:47:00,201015_01,8,南橘団地,0,0,1
平日_18時37分_系統527,18:48:00,18:48:00,200262_01,9,南橘団地,0,0,1
平日_18時37分_系統527,18:49:00,18:49:00,200142_01,10,南橘団地,0,0,1
平日_18時37分_系統527,18:50:00,18:50:00,200141_01,11,南橘団地,0,0,1
平日_18時37分_系統527,18:51:00,18:51:00,200542_01,12,南橘団地,0,0,1
平日_18時37分_系統527,18:53:00,18:53:00,201071_01,13,南橘団地,0,0,1
平日_18時37分_系統527,18:54:00,18:54:00,200928_01,14,南橘団地,0,0,1
平日_18時37分_系統527,18:55:00,18:55:00,200800_01,15,南橘団地,0,0,1
平日_18時37分_系統527,18:58:00,18:58:00,200927_01,16,南橘団地,1,0,1
平日_18時42分_系統265,18:42:00,18:42:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
平日_18時42分_系統265,18:43:00,18:43:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:44:00,18:44:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:46:00,18:46:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:47:00,18:47:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:48:00,18:48:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:49:00,18:49:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:49:00,18:49:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:51:00,18:51:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:52:00,18:52:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:54:00,18:54:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:54:00,18:54:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:55:00,18:55:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:56:00,18:56:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:57:00,18:57:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,18:58:00,18:58:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,19:00:00,19:00:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時42分_系統265,19:03:00,19:03:00,200273_01,18,前橋駅,0,0,1
平日_18時42分_系統265,19:05:00,19:05:00,200722_02,19,前橋駅,0,0,1
平日_18時42分_系統265,19:06:00,19:06:00,200343_02,20,前橋駅,0,0,1
平日_18時42分_系統265,19:07:00,19:07:00,200348_02,21,前橋駅,0,0,1
平日_18時42分_系統265,19:09:00,19:09:00,201071_02,22,前橋駅,0,0,1
平日_18時42分_系統265,19:11:00,19:11:00,200542_02,23,前橋駅,0,0,1
平日_18時42分_系統265,19:13:00,19:13:00,200141_02,24,前橋駅,0,0,1
平日_18時42分_系統265,19:14:00,19:14:00,200142_02,25,前橋駅,0,0,1
平日_18時42分_系統265,19:16:00,19:16:00,200262_02,26,前橋駅,0,0,1
平日_18時42分_系統265,19:17:00,19:17:00,201015_02,27,前橋駅,0,0,1
平日_18時42分_系統265,19:19:00,19:19:00,200379_02,28,前橋駅,0,0,1
平日_18時42分_系統265,19:20:00,19:20:00,200455_02,29,前橋駅,0,0,1
平日_18時42分_系統265,19:22:00,19:22:00,200702_02,30,前橋駅,0,0,1
平日_18時42分_系統265,19:23:00,19:23:00,200703_02,31,前橋駅,0,0,1
平日_18時42分_系統265,19:25:00,19:25:00,201081_02,32,前橋駅,0,0,1
平日_18時42分_系統265,19:27:00,19:27:00,200998_02,33,前橋駅,0,0,1
平日_18時42分_系統265,19:30:00,19:30:00,200718_10,34,前橋駅,1,0,1
平日_18時45分_系統268,18:45:00,18:45:00,200718_02,1,渋川駅,0,1,1
平日_18時45分_系統268,18:46:00,18:46:00,200998_01,2,渋川駅,0,0,1
平日_18時45分_系統268,18:48:00,18:48:00,201081_01,3,渋川駅,0,0,1
平日_18時45分_系統268,18:50:00,18:50:00,200703_01,4,渋川駅,0,0,1
平日_18時45分_系統268,18:50:00,18:50:00,200702_01,5,渋川駅,0,0,1
平日_18時45分_系統268,18:52:00,18:52:00,200455_01,6,渋川駅,0,0,1
平日_18時45分_系統268,18:53:00,18:53:00,200379_01,7,渋川駅,0,0,1
平日_18時45分_系統268,18:55:00,18:55:00,201015_01,8,渋川駅,0,0,1
平日_18時45分_系統268,18:56:00,18:56:00,200262_01,9,渋川駅,0,0,1
平日_18時45分_系統268,18:57:00,18:57:00,200142_01,10,渋川駅,0,0,1
平日_18時45分_系統268,18:58:00,18:58:00,200141_01,11,渋川駅,0,0,1
平日_18時45分_系統268,18:59:00,18:59:00,200542_01,12,渋川駅,0,0,1
平日_18時45分_系統268,19:01:00,19:01:00,201071_01,13,渋川駅,0,0,1
平日_18時45分_系統268,19:03:00,19:03:00,200348_01,14,渋川駅,0,0,1
平日_18時45分_系統268,19:04:00,19:04:00,200343_01,15,渋川駅,0,0,1
平日_18時45分_系統268,19:05:00,19:05:00,200722_01,16,渋川駅,0,0,1
平日_18時45分_系統268,19:07:00,19:07:00,200189_01,17,渋川駅,0,0,1
平日_18時45分_系統268,19:09:00,19:09:00,201056_01,18,渋川駅,0,0,1
平日_18時45分_系統268,19:10:00,19:10:00,200872_01,19,渋川駅,0,0,1
平日_18時45分_系統268,19:11:00,19:11:00,200981_01,20,渋川駅,0,0,1
平日_18時45分_系統268,19:12:00,19:12:00,201100_01,21,渋川駅,0,0,1
平日_18時45分_系統268,19:13:00,19:13:00,200153_01,22,渋川駅,0,0,1
平日_18時45分_系統268,19:13:00,19:13:00,200395_01,23,渋川駅,0,0,1
平日_18時45分_系統268,19:14:00,19:14:00,200895_01,24,渋川駅,0,0,1
平日_18時45分_系統268,19:16:00,19:16:00,200985_01,25,渋川駅,0,0,1
平日_18時45分_系統268,19:16:00,19:16:00,200987_01,26,渋川駅,0,0,1
平日_18時45分_系統268,19:17:00,19:17:00,200519_01,27,渋川駅,0,0,1
平日_18時45分_系統268,19:18:00,19:18:00,200017_01,28,渋川駅,0,0,1
平日_18時45分_系統268,19:20:00,19:20:00,200506_01,29,渋川駅,0,0,1
平日_18時45分_系統268,19:21:00,19:21:00,200827_01,30,渋川駅,0,0,1
平日_18時45分_系統268,19:23:00,19:23:00,200730_01,31,渋川駅,0,0,1
平日_18時45分_系統268,19:24:00,19:24:00,200768_01,32,渋川駅,0,0,1
平日_18時45分_系統268,19:27:00,19:27:00,200463_10,33,渋川駅,1,0,1
平日_18時55分_系統263,18:55:00,18:55:00,210463_05,1,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,1,1
平日_18時55分_系統263,18:56:00,18:56:00,200007_01,2,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,18:57:00,18:57:00,200430_01,3,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,18:58:00,18:58:00,200477_01,4,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,18:59:00,18:59:00,200476_01,5,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:00:00,19:00:00,200704_02,6,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:01:00,19:01:00,200467_01,7,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:02:00,19:02:00,200466_02,8,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:03:00,19:03:00,200468_02,9,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:08:00,19:08:00,200463_01,10,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:09:00,19:09:00,200768_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:10:00,19:10:00,200730_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:12:00,19:12:00,200827_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:13:00,19:13:00,200506_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:14:00,19:14:00,200017_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:15:00,19:15:00,200519_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:15:00,19:15:00,200987_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:17:00,19:17:00,200985_02,18,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:18:00,19:18:00,200895_02,19,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:20:00,19:20:00,200395_02,20,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:20:00,19:20:00,200153_02,21,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:21:00,19:21:00,201100_02,22,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:22:00,19:22:00,200981_02,23,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:23:00,19:23:00,200872_02,24,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:24:00,19:24:00,201056_02,25,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:26:00,19:26:00,200189_02,26,前橋駅（群馬大学荒牧 経由）,0,0,1
平日_18時55分_系統263,19:29:00,19:29:00,200273_01,27,前橋駅,0,0,1
平日_18時55分_系統263,19:31:00,19:31:00,200722_02,28,前橋駅,0,0,1
平日_18時55分_系統263,19:32:00,19:32:00,200343_02,29,前橋駅,0,0,1
平日_18時55分_系統263,19:33:00,19:33:00,200348_02,30,前橋駅,0,0,1
平日_18時55分_系統263,19:35:00,19:35:00,201071_02,31,前橋駅,0,0,1
平日_18時55分_系統263,19:37:00,19:37:00,200542_02,32,前橋駅,0,0,1
平日_18時55分_系統263,19:39:00,19:39:00,200141_02,33,前橋駅,0,0,1
平日_18時55分_系統263,19:40:00,19:40:00,200142_02,34,前橋駅,0,0,1
平日_18時55分_系統263,19:42:00,19:42:00,200262_02,35,前橋駅,0,0,1
平日_18時55分_系統263,19:43:00,19:43:00,201015_02,36,前橋駅,0,0,1
平日_18時55分_系統263,19:45:00,19:45:00,200379_02,37,前橋駅,0,0,1
平日_18時55分_系統263,19:46:00,19:46:00,200455_02,38,前橋駅,0,0,1
平日_18時55分_系統263,19:48:00,19:48:00,200702_02,39,前橋駅,0,0,1
平日_18時55分_系統263,19:49:00,19:49:00,200703_02,40,前橋駅,0,0,1
平日_18時55分_系統263,19:51:00,19:51:00,201081_02,41,前橋駅,0,0,1
平日_18時55分_系統263,19:53:00,19:53:00,200998_02,42,前橋駅,0,0,1
平日_18時55分_系統263,19:56:00,19:56:00,200718_10,43,前橋駅,1,0,1
平日_19時00分_系統532,19:00:00,19:00:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
平日_19時00分_系統532,19:01:00,19:01:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:03:00,19:03:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:05:00,19:05:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:05:00,19:05:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:07:00,19:07:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:08:00,19:08:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:10:00,19:10:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:11:00,19:11:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:12:00,19:12:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:13:00,19:13:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:14:00,19:14:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:16:00,19:16:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:17:00,19:17:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:18:00,19:18:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
平日_19時00分_系統532,19:21:00,19:21:00,200927_01,16,渋川駅,0,0,1
平日_19時00分_系統532,19:22:00,19:22:00,201185_01,17,渋川駅,0,0,1
平日_19時00分_系統532,19:26:00,19:26:00,200348_01,18,渋川駅,0,0,1
平日_19時00分_系統532,19:27:00,19:27:00,200343_01,19,渋川駅,0,0,1
平日_19時00分_系統532,19:28:00,19:28:00,200722_01,20,渋川駅,0,0,1
平日_19時00分_系統532,19:30:00,19:30:00,200189_01,21,渋川駅,0,0,1
平日_19時00分_系統532,19:32:00,19:32:00,201056_01,22,渋川駅,0,0,1
平日_19時00分_系統532,19:33:00,19:33:00,200872_01,23,渋川駅,0,0,1
平日_19時00分_系統532,19:34:00,19:34:00,200981_01,24,渋川駅,0,0,1
平日_19時00分_系統532,19:35:00,19:35:00,201100_01,25,渋川駅,0,0,1
平日_19時00分_系統532,19:36:00,19:36:00,200153_01,26,渋川駅,0,0,1
平日_19時00分_系統532,19:36:00,19:36:00,200395_01,27,渋川駅,0,0,1
平日_19時00分_系統532,19:37:00,19:37:00,200895_01,28,渋川駅,0,0,1
平日_19時00分_系統532,19:39:00,19:39:00,200985_01,29,渋川駅,0,0,1
平日_19時00分_系統532,19:39:00,19:39:00,200987_01,30,渋川駅,0,0,1
平日_19時00分_系統532,19:40:00,19:40:00,200519_01,31,渋川駅,0,0,1
平日_19時00分_系統532,19:41:00,19:41:00,200017_01,32,渋川駅,0,0,1
平日_19時00分_系統532,19:43:00,19:43:00,200506_01,33,渋川駅,0,0,1
平日_19時00分_系統532,19:44:00,19:44:00,200827_01,34,渋川駅,0,0,1
平日_19時00分_系統532,19:46:00,19:46:00,200730_01,35,渋川駅,0,0,1
平日_19時00分_系統532,19:47:00,19:47:00,200768_01,36,渋川駅,0,0,1
平日_19時00分_系統532,19:50:00,19:50:00,200463_10,37,渋川駅,1,0,1
平日_19時27分_系統268,19:27:00,19:27:00,200718_02,1,渋川駅,0,1,1
平日_19時27分_系統268,19:28:00,19:28:00,200998_01,2,渋川駅,0,0,1
平日_19時27分_系統268,19:30:00,19:30:00,201081_01,3,渋川駅,0,0,1
平日_19時27分_系統268,19:32:00,19:32:00,200703_01,4,渋川駅,0,0,1
平日_19時27分_系統268,19:32:00,19:32:00,200702_01,5,渋川駅,0,0,1
平日_19時27分_系統268,19:34:00,19:34:00,200455_01,6,渋川駅,0,0,1
平日_19時27分_系統268,19:35:00,19:35:00,200379_01,7,渋川駅,0,0,1
平日_19時27分_系統268,19:37:00,19:37:00,201015_01,8,渋川駅,0,0,1
平日_19時27分_系統268,19:38:00,19:38:00,200262_01,9,渋川駅,0,0,1
平日_19時27分_系統268,19:39:00,19:39:00,200142_01,10,渋川駅,0,0,1
平日_19時27分_系統268,19:40:00,19:40:00,200141_01,11,渋川駅,0,0,1
平日_19時27分_系統268,19:41:00,19:41:00,200542_01,12,渋川駅,0,0,1
平日_19時27分_系統268,19:43:00,19:43:00,201071_01,13,渋川駅,0,0,1
平日_19時27分_系統268,19:45:00,19:45:00,200348_01,14,渋川駅,0,0,1
平日_19時27分_系統268,19:46:00,19:46:00,200343_01,15,渋川駅,0,0,1
平日_19時27分_系統268,19:47:00,19:47:00,200722_01,16,渋川駅,0,0,1
平日_19時27分_系統268,19:49:00,19:49:00,200189_01,17,渋川駅,0,0,1
平日_19時27分_系統268,19:51:00,19:51:00,201056_01,18,渋川駅,0,0,1
平日_19時27分_系統268,19:52:00,19:52:00,200872_01,19,渋川駅,0,0,1
平日_19時27分_系統268,19:53:00,19:53:00,200981_01,20,渋川駅,0,0,1
平日_19時27分_系統268,19:54:00,19:54:00,201100_01,21,渋川駅,0,0,1
平日_19時27分_系統268,19:55:00,19:55:00,200153_01,22,渋川駅,0,0,1
平日_19時27分_系統268,19:55:00,19:55:00,200395_01,23,渋川駅,0,0,1
平日_19時27分_系統268,19:56:00,19:56:00,200895_01,24,渋川駅,0,0,1
平日_19時27分_系統268,19:58:00,19:58:00,200985_01,25,渋川駅,0,0,1
平日_19時27分_系統268,19:58:00,19:58:00,200987_01,26,渋川駅,0,0,1
平日_19時27分_系統268,19:59:00,19:59:00,200519_01,27,渋川駅,0,0,1
平日_19時27分_系統268,20:00:00,20:00:00,200017_01,28,渋川駅,0,0,1
平日_19時27分_系統268,20:02:00,20:02:00,200506_01,29,渋川駅,0,0,1
平日_19時27分_系統268,20:03:00,20:03:00,200827_01,30,渋川駅,0,0,1
平日_19時27分_系統268,20:05:00,20:05:00,200730_01,31,渋川駅,0,0,1
平日_19時27分_系統268,20:06:00,20:06:00,200768_01,32,渋川駅,0,0,1
平日_19時27分_系統268,20:09:00,20:09:00,200463_10,33,渋川駅,1,0,1
平日_19時43分_系統267,19:43:00,19:43:00,200463_01,1,前橋駅,0,1,1
平日_19時43分_系統267,19:44:00,19:44:00,200768_02,2,前橋駅,0,0,1
平日_19時43分_系統267,19:45:00,19:45:00,200730_02,3,前橋駅,0,0,1
平日_19時43分_系統267,19:47:00,19:47:00,200827_02,4,前橋駅,0,0,1
平日_19時43分_系統267,19:48:00,19:48:00,200506_02,5,前橋駅,0,0,1
平日_19時43分_系統267,19:49:00,19:49:00,200017_02,6,前橋駅,0,0,1
平日_19時43分_系統267,19:50:00,19:50:00,200519_02,7,前橋駅,0,0,1
平日_19時43分_系統267,19:50:00,19:50:00,200987_02,8,前橋駅,0,0,1
平日_19時43分_系統267,19:52:00,19:52:00,200985_02,9,前橋駅,0,0,1
平日_19時43分_系統267,19:53:00,19:53:00,200895_02,10,前橋駅,0,0,1
平日_19時43分_系統267,19:55:00,19:55:00,200395_02,11,前橋駅,0,0,1
平日_19時43分_系統267,19:55:00,19:55:00,200153_02,12,前橋駅,0,0,1
平日_19時43分_系統267,19:56:00,19:56:00,201100_02,13,前橋駅,0,0,1
平日_19時43分_系統267,19:57:00,19:57:00,200981_02,14,前橋駅,0,0,1
平日_19時43分_系統267,19:58:00,19:58:00,200872_02,15,前橋駅,0,0,1
平日_19時43分_系統267,19:59:00,19:59:00,201056_02,16,前橋駅,0,0,1
平日_19時43分_系統267,20:01:00,20:01:00,200189_02,17,前橋駅,0,0,1
平日_19時43分_系統267,20:02:00,20:02:00,200722_02,18,前橋駅,0,0,1
平日_19時43分_系統267,20:03:00,20:03:00,200343_02,19,前橋駅,0,0,1
平日_19時43分_系統267,20:04:00,20:04:00,200348_02,20,前橋駅,0,0,1
平日_19時43分_系統267,20:06:00,20:06:00,201071_02,21,前橋駅,0,0,1
平日_19時43分_系統267,20:08:00,20:08:00,200542_02,22,前橋駅,0,0,1
平日_19時43分_系統267,20:09:00,20:09:00,200141_02,23,前橋駅,0,0,1
平日_19時43分_系統267,20:10:00,20:10:00,200142_02,24,前橋駅,0,0,1
平日_19時43分_系統267,20:12:00,20:12:00,200262_02,25,前橋駅,0,0,1
平日_19時43分_系統267,20:13:00,20:13:00,201015_02,26,前橋駅,0,0,1
平日_19時43分_系統267,20:14:00,20:14:00,200379_02,27,前橋駅,0,0,1
平日_19時43分_系統267,20:15:00,20:15:00,200455_02,28,前橋駅,0,0,1
平日_19時43分_系統267,20:17:00,20:17:00,200702_02,29,前橋駅,0,0,1
平日_19時43分_系統267,20:18:00,20:18:00,200703_02,30,前橋駅,0,0,1
平日_19時43分_系統267,20:20:00,20:20:00,201081_02,31,前橋駅,0,0,1
平日_19時43分_系統267,20:22:00,20:22:00,200998_02,32,前橋駅,0,0,1
平日_19時43分_系統267,20:25:00,20:25:00,200718_10,33,前橋駅,1,0,1
平日_19時50分_系統532,19:50:00,19:50:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
平日_19時50分_系統532,19:51:00,19:51:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,19:53:00,19:53:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,19:55:00,19:55:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,19:55:00,19:55:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,19:57:00,19:57:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,19:58:00,19:58:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,20:00:00,20:00:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,20:01:00,20:01:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,20:02:00,20:02:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,20:03:00,20:03:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,20:04:00,20:04:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,20:06:00,20:06:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,20:07:00,20:07:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,20:08:00,20:08:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
平日_19時50分_系統532,20:11:00,20:11:00,200927_01,16,渋川駅,0,0,1
平日_19時50分_系統532,20:12:00,20:12:00,201185_01,17,渋川駅,0,0,1
平日_19時50分_系統532,20:16:00,20:16:00,200348_01,18,渋川駅,0,0,1
平日_19時50分_系統532,20:17:00,20:17:00,200343_01,19,渋川駅,0,0,1
平日_19時50分_系統532,20:18:00,20:18:00,200722_01,20,渋川駅,0,0,1
平日_19時50分_系統532,20:19:00,20:19:00,200189_01,21,渋川駅,0,0,1
平日_19時50分_系統532,20:21:00,20:21:00,201056_01,22,渋川駅,0,0,1
平日_19時50分_系統532,20:22:00,20:22:00,200872_01,23,渋川駅,0,0,1
平日_19時50分_系統532,20:23:00,20:23:00,200981_01,24,渋川駅,0,0,1
平日_19時50分_系統532,20:24:00,20:24:00,201100_01,25,渋川駅,0,0,1
平日_19時50分_系統532,20:25:00,20:25:00,200153_01,26,渋川駅,0,0,1
平日_19時50分_系統532,20:25:00,20:25:00,200395_01,27,渋川駅,0,0,1
平日_19時50分_系統532,20:26:00,20:26:00,200895_01,28,渋川駅,0,0,1
平日_19時50分_系統532,20:28:00,20:28:00,200985_01,29,渋川駅,0,0,1
平日_19時50分_系統532,20:28:00,20:28:00,200987_01,30,渋川駅,0,0,1
平日_19時50分_系統532,20:29:00,20:29:00,200519_01,31,渋川駅,0,0,1
平日_19時50分_系統532,20:30:00,20:30:00,200017_01,32,渋川駅,0,0,1
平日_19時50分_系統532,20:31:00,20:31:00,200506_01,33,渋川駅,0,0,1
平日_19時50分_系統532,20:32:00,20:32:00,200827_01,34,渋川駅,0,0,1
平日_19時50分_系統532,20:33:00,20:33:00,200730_01,35,渋川駅,0,0,1
平日_19時50分_系統532,20:34:00,20:34:00,200768_01,36,渋川駅,0,0,1
平日_19時50分_系統532,20:37:00,20:37:00,200463_10,37,渋川駅,1,0,1
平日_20時02分_系統532,20:02:00,20:02:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
平日_20時02分_系統532,20:03:00,20:03:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:05:00,20:05:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:07:00,20:07:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:07:00,20:07:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:09:00,20:09:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:10:00,20:10:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:12:00,20:12:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:13:00,20:13:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:14:00,20:14:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:15:00,20:15:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:16:00,20:16:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:18:00,20:18:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:19:00,20:19:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:20:00,20:20:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
平日_20時02分_系統532,20:23:00,20:23:00,200927_01,16,渋川駅,0,0,1
平日_20時02分_系統532,20:24:00,20:24:00,201185_01,17,渋川駅,0,0,1
平日_20時02分_系統532,20:28:00,20:28:00,200348_01,18,渋川駅,0,0,1
平日_20時02分_系統532,20:29:00,20:29:00,200343_01,19,渋川駅,0,0,1
平日_20時02分_系統532,20:30:00,20:30:00,200722_01,20,渋川駅,0,0,1
平日_20時02分_系統532,20:31:00,20:31:00,200189_01,21,渋川駅,0,0,1
平日_20時02分_系統532,20:33:00,20:33:00,201056_01,22,渋川駅,0,0,1
平日_20時02分_系統532,20:34:00,20:34:00,200872_01,23,渋川駅,0,0,1
平日_20時02分_系統532,20:35:00,20:35:00,200981_01,24,渋川駅,0,0,1
平日_20時02分_系統532,20:36:00,20:36:00,201100_01,25,渋川駅,0,0,1
平日_20時02分_系統532,20:37:00,20:37:00,200153_01,26,渋川駅,0,0,1
平日_20時02分_系統532,20:37:00,20:37:00,200395_01,27,渋川駅,0,0,1
平日_20時02分_系統532,20:38:00,20:38:00,200895_01,28,渋川駅,0,0,1
平日_20時02分_系統532,20:40:00,20:40:00,200985_01,29,渋川駅,0,0,1
平日_20時02分_系統532,20:40:00,20:40:00,200987_01,30,渋川駅,0,0,1
平日_20時02分_系統532,20:41:00,20:41:00,200519_01,31,渋川駅,0,0,1
平日_20時02分_系統532,20:42:00,20:42:00,200017_01,32,渋川駅,0,0,1
平日_20時02分_系統532,20:43:00,20:43:00,200506_01,33,渋川駅,0,0,1
平日_20時02分_系統532,20:44:00,20:44:00,200827_01,34,渋川駅,0,0,1
平日_20時02分_系統532,20:45:00,20:45:00,200730_01,35,渋川駅,0,0,1
平日_20時02分_系統532,20:46:00,20:46:00,200768_01,36,渋川駅,0,0,1
平日_20時02分_系統532,20:49:00,20:49:00,200463_10,37,渋川駅,1,0,1
平日_20時35分_系統268,20:35:00,20:35:00,200718_02,1,渋川駅,0,1,1
平日_20時35分_系統268,20:36:00,20:36:00,200998_01,2,渋川駅,0,0,1
平日_20時35分_系統268,20:38:00,20:38:00,201081_01,3,渋川駅,0,0,1
平日_20時35分_系統268,20:40:00,20:40:00,200703_01,4,渋川駅,0,0,1
平日_20時35分_系統268,20:40:00,20:40:00,200702_01,5,渋川駅,0,0,1
平日_20時35分_系統268,20:42:00,20:42:00,200455_01,6,渋川駅,0,0,1
平日_20時35分_系統268,20:43:00,20:43:00,200379_01,7,渋川駅,0,0,1
平日_20時35分_系統268,20:45:00,20:45:00,201015_01,8,渋川駅,0,0,1
平日_20時35分_系統268,20:46:00,20:46:00,200262_01,9,渋川駅,0,0,1
平日_20時35分_系統268,20:47:00,20:47:00,200142_01,10,渋川駅,0,0,1
平日_20時35分_系統268,20:48:00,20:48:00,200141_01,11,渋川駅,0,0,1
平日_20時35分_系統268,20:49:00,20:49:00,200542_01,12,渋川駅,0,0,1
平日_20時35分_系統268,20:51:00,20:51:00,201071_01,13,渋川駅,0,0,1
平日_20時35分_系統268,20:53:00,20:53:00,200348_01,14,渋川駅,0,0,1
平日_20時35分_系統268,20:54:00,20:54:00,200343_01,15,渋川駅,0,0,1
平日_20時35分_系統268,20:55:00,20:55:00,200722_01,16,渋川駅,0,0,1
平日_20時35分_系統268,20:56:00,20:56:00,200189_01,17,渋川駅,0,0,1
平日_20時35分_系統268,20:58:00,20:58:00,201056_01,18,渋川駅,0,0,1
平日_20時35分_系統268,20:59:00,20:59:00,200872_01,19,渋川駅,0,0,1
平日_20時35分_系統268,21:00:00,21:00:00,200981_01,20,渋川駅,0,0,1
平日_20時35分_系統268,21:01:00,21:01:00,201100_01,21,渋川駅,0,0,1
平日_20時35分_系統268,21:02:00,21:02:00,200153_01,22,渋川駅,0,0,1
平日_20時35分_系統268,21:02:00,21:02:00,200395_01,23,渋川駅,0,0,1
平日_20時35分_系統268,21:03:00,21:03:00,200895_01,24,渋川駅,0,0,1
平日_20時35分_系統268,21:05:00,21:05:00,200985_01,25,渋川駅,0,0,1
平日_20時35分_系統268,21:05:00,21:05:00,200987_01,26,渋川駅,0,0,1
平日_20時35分_系統268,21:06:00,21:06:00,200519_01,27,渋川駅,0,0,1
平日_20時35分_系統268,21:07:00,21:07:00,200017_01,28,渋川駅,0,0,1
平日_20時35分_系統268,21:08:00,21:08:00,200506_01,29,渋川駅,0,0,1
平日_20時35分_系統268,21:09:00,21:09:00,200827_01,30,渋川駅,0,0,1
平日_20時35分_系統268,21:10:00,21:10:00,200730_01,31,渋川駅,0,0,1
平日_20時35分_系統268,21:11:00,21:11:00,200768_01,32,渋川駅,0,0,1
平日_20時35分_系統268,21:14:00,21:14:00,200463_10,33,渋川駅,1,0,1
平日_20時42分_系統267,20:42:00,20:42:00,200463_01,1,前橋駅,0,1,1
平日_20時42分_系統267,20:43:00,20:43:00,200768_02,2,前橋駅,0,0,1
平日_20時42分_系統267,20:44:00,20:44:00,200730_02,3,前橋駅,0,0,1
平日_20時42分_系統267,20:46:00,20:46:00,200827_02,4,前橋駅,0,0,1
平日_20時42分_系統267,20:47:00,20:47:00,200506_02,5,前橋駅,0,0,1
平日_20時42分_系統267,20:48:00,20:48:00,200017_02,6,前橋駅,0,0,1
平日_20時42分_系統267,20:49:00,20:49:00,200519_02,7,前橋駅,0,0,1
平日_20時42分_系統267,20:49:00,20:49:00,200987_02,8,前橋駅,0,0,1
平日_20時42分_系統267,20:51:00,20:51:00,200985_02,9,前橋駅,0,0,1
平日_20時42分_系統267,20:52:00,20:52:00,200895_02,10,前橋駅,0,0,1
平日_20時42分_系統267,20:54:00,20:54:00,200395_02,11,前橋駅,0,0,1
平日_20時42分_系統267,20:54:00,20:54:00,200153_02,12,前橋駅,0,0,1
平日_20時42分_系統267,20:55:00,20:55:00,201100_02,13,前橋駅,0,0,1
平日_20時42分_系統267,20:56:00,20:56:00,200981_02,14,前橋駅,0,0,1
平日_20時42分_系統267,20:57:00,20:57:00,200872_02,15,前橋駅,0,0,1
平日_20時42分_系統267,20:58:00,20:58:00,201056_02,16,前橋駅,0,0,1
平日_20時42分_系統267,21:00:00,21:00:00,200189_02,17,前橋駅,0,0,1
平日_20時42分_系統267,21:01:00,21:01:00,200722_02,18,前橋駅,0,0,1
平日_20時42分_系統267,21:02:00,21:02:00,200343_02,19,前橋駅,0,0,1
平日_20時42分_系統267,21:03:00,21:03:00,200348_02,20,前橋駅,0,0,1
平日_20時42分_系統267,21:05:00,21:05:00,201071_02,21,前橋駅,0,0,1
平日_20時42分_系統267,21:07:00,21:07:00,200542_02,22,前橋駅,0,0,1
平日_20時42分_系統267,21:08:00,21:08:00,200141_02,23,前橋駅,0,0,1
平日_20時42分_系統267,21:09:00,21:09:00,200142_02,24,前橋駅,0,0,1
平日_20時42分_系統267,21:11:00,21:11:00,200262_02,25,前橋駅,0,0,1
平日_20時42分_系統267,21:12:00,21:12:00,201015_02,26,前橋駅,0,0,1
平日_20時42分_系統267,21:13:00,21:13:00,200379_02,27,前橋駅,0,0,1
平日_20時42分_系統267,21:14:00,21:14:00,200455_02,28,前橋駅,0,0,1
平日_20時42分_系統267,21:16:00,21:16:00,200702_02,29,前橋駅,0,0,1
平日_20時42分_系統267,21:17:00,21:17:00,200703_02,30,前橋駅,0,0,1
平日_20時42分_系統267,21:19:00,21:19:00,201081_02,31,前橋駅,0,0,1
平日_20時42分_系統267,21:21:00,21:21:00,200998_02,32,前橋駅,0,0,1
平日_20時42分_系統267,21:24:00,21:24:00,200718_10,33,前橋駅,1,0,1
平日_21時07分_系統267,21:07:00,21:07:00,200463_01,1,前橋駅,0,1,1
平日_21時07分_系統267,21:08:00,21:08:00,200768_02,2,前橋駅,0,0,1
平日_21時07分_系統267,21:09:00,21:09:00,200730_02,3,前橋駅,0,0,1
平日_21時07分_系統267,21:11:00,21:11:00,200827_02,4,前橋駅,0,0,1
平日_21時07分_系統267,21:12:00,21:12:00,200506_02,5,前橋駅,0,0,1
平日_21時07分_系統267,21:13:00,21:13:00,200017_02,6,前橋駅,0,0,1
平日_21時07分_系統267,21:14:00,21:14:00,200519_02,7,前橋駅,0,0,1
平日_21時07分_系統267,21:14:00,21:14:00,200987_02,8,前橋駅,0,0,1
平日_21時07分_系統267,21:16:00,21:16:00,200985_02,9,前橋駅,0,0,1
平日_21時07分_系統267,21:17:00,21:17:00,200895_02,10,前橋駅,0,0,1
平日_21時07分_系統267,21:19:00,21:19:00,200395_02,11,前橋駅,0,0,1
平日_21時07分_系統267,21:19:00,21:19:00,200153_02,12,前橋駅,0,0,1
平日_21時07分_系統267,21:20:00,21:20:00,201100_02,13,前橋駅,0,0,1
平日_21時07分_系統267,21:21:00,21:21:00,200981_02,14,前橋駅,0,0,1
平日_21時07分_系統267,21:22:00,21:22:00,200872_02,15,前橋駅,0,0,1
平日_21時07分_系統267,21:23:00,21:23:00,201056_02,16,前橋駅,0,0,1
平日_21時07分_系統267,21:25:00,21:25:00,200189_02,17,前橋駅,0,0,1
平日_21時07分_系統267,21:26:00,21:26:00,200722_02,18,前橋駅,0,0,1
平日_21時07分_系統267,21:27:00,21:27:00,200343_02,19,前橋駅,0,0,1
平日_21時07分_系統267,21:28:00,21:28:00,200348_02,20,前橋駅,0,0,1
平日_21時07分_系統267,21:30:00,21:30:00,201071_02,21,前橋駅,0,0,1
平日_21時07分_系統267,21:32:00,21:32:00,200542_02,22,前橋駅,0,0,1
平日_21時07分_系統267,21:33:00,21:33:00,200141_02,23,前橋駅,0,0,1
平日_21時07分_系統267,21:34:00,21:34:00,200142_02,24,前橋駅,0,0,1
平日_21時07分_系統267,21:36:00,21:36:00,200262_02,25,前橋駅,0,0,1
平日_21時07分_系統267,21:37:00,21:37:00,201015_02,26,前橋駅,0,0,1
平日_21時07分_系統267,21:38:00,21:38:00,200379_02,27,前橋駅,0,0,1
平日_21時07分_系統267,21:39:00,21:39:00,200455_02,28,前橋駅,0,0,1
平日_21時07分_系統267,21:41:00,21:41:00,200702_02,29,前橋駅,0,0,1
平日_21時07分_系統267,21:42:00,21:42:00,200703_02,30,前橋駅,0,0,1
平日_21時07分_系統267,21:44:00,21:44:00,201081_02,31,前橋駅,0,0,1
平日_21時07分_系統267,21:46:00,21:46:00,200998_02,32,前橋駅,0,0,1
平日_21時07分_系統267,21:49:00,21:49:00,200718_10,33,前橋駅,1,0,1
平日_21時35分_系統532,21:35:00,21:35:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
平日_21時35分_系統532,21:36:00,21:36:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:38:00,21:38:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:40:00,21:40:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:40:00,21:40:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:42:00,21:42:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:43:00,21:43:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:45:00,21:45:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:46:00,21:46:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:47:00,21:47:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:48:00,21:48:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:49:00,21:49:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:51:00,21:51:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:52:00,21:52:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:53:00,21:53:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
平日_21時35分_系統532,21:56:00,21:56:00,200927_01,16,渋川駅,0,0,1
平日_21時35分_系統532,21:57:00,21:57:00,201185_01,17,渋川駅,0,0,1
平日_21時35分_系統532,22:01:00,22:01:00,200348_01,18,渋川駅,0,0,1
平日_21時35分_系統532,22:02:00,22:02:00,200343_01,19,渋川駅,0,0,1
平日_21時35分_系統532,22:03:00,22:03:00,200722_01,20,渋川駅,0,0,1
平日_21時35分_系統532,22:04:00,22:04:00,200189_01,21,渋川駅,0,0,1
平日_21時35分_系統532,22:06:00,22:06:00,201056_01,22,渋川駅,0,0,1
平日_21時35分_系統532,22:07:00,22:07:00,200872_01,23,渋川駅,0,0,1
平日_21時35分_系統532,22:08:00,22:08:00,200981_01,24,渋川駅,0,0,1
平日_21時35分_系統532,22:09:00,22:09:00,201100_01,25,渋川駅,0,0,1
平日_21時35分_系統532,22:10:00,22:10:00,200153_01,26,渋川駅,0,0,1
平日_21時35分_系統532,22:10:00,22:10:00,200395_01,27,渋川駅,0,0,1
平日_21時35分_系統532,22:11:00,22:11:00,200895_01,28,渋川駅,0,0,1
平日_21時35分_系統532,22:13:00,22:13:00,200985_01,29,渋川駅,0,0,1
平日_21時35分_系統532,22:13:00,22:13:00,200987_01,30,渋川駅,0,0,1
平日_21時35分_系統532,22:14:00,22:14:00,200519_01,31,渋川駅,0,0,1
平日_21時35分_系統532,22:15:00,22:15:00,200017_01,32,渋川駅,0,0,1
平日_21時35分_系統532,22:16:00,22:16:00,200506_01,33,渋川駅,0,0,1
平日_21時35分_系統532,22:17:00,22:17:00,200827_01,34,渋川駅,0,0,1
平日_21時35分_系統532,22:18:00,22:18:00,200730_01,35,渋川駅,0,0,1
平日_21時35分_系統532,22:19:00,22:19:00,200768_01,36,渋川駅,0,0,1
平日_21時35分_系統532,22:22:00,22:22:00,200463_10,37,渋川駅,1,0,1
平日_21時38分_系統267,21:38:00,21:38:00,200463_01,1,前橋駅,0,1,1
平日_21時38分_系統267,21:39:00,21:39:00,200768_02,2,前橋駅,0,0,1
平日_21時38分_系統267,21:40:00,21:40:00,200730_02,3,前橋駅,0,0,1
平日_21時38分_系統267,21:42:00,21:42:00,200827_02,4,前橋駅,0,0,1
平日_21時38分_系統267,21:43:00,21:43:00,200506_02,5,前橋駅,0,0,1
平日_21時38分_系統267,21:44:00,21:44:00,200017_02,6,前橋駅,0,0,1
平日_21時38分_系統267,21:45:00,21:45:00,200519_02,7,前橋駅,0,0,1
平日_21時38分_系統267,21:45:00,21:45:00,200987_02,8,前橋駅,0,0,1
平日_21時38分_系統267,21:47:00,21:47:00,200985_02,9,前橋駅,0,0,1
平日_21時38分_系統267,21:48:00,21:48:00,200895_02,10,前橋駅,0,0,1
平日_21時38分_系統267,21:50:00,21:50:00,200395_02,11,前橋駅,0,0,1
平日_21時38分_系統267,21:50:00,21:50:00,200153_02,12,前橋駅,0,0,1
平日_21時38分_系統267,21:51:00,21:51:00,201100_02,13,前橋駅,0,0,1
平日_21時38分_系統267,21:52:00,21:52:00,200981_02,14,前橋駅,0,0,1
平日_21時38分_系統267,21:53:00,21:53:00,200872_02,15,前橋駅,0,0,1
平日_21時38分_系統267,21:54:00,21:54:00,201056_02,16,前橋駅,0,0,1
平日_21時38分_系統267,21:56:00,21:56:00,200189_02,17,前橋駅,0,0,1
平日_21時38分_系統267,21:57:00,21:57:00,200722_02,18,前橋駅,0,0,1
平日_21時38分_系統267,21:58:00,21:58:00,200343_02,19,前橋駅,0,0,1
平日_21時38分_系統267,21:59:00,21:59:00,200348_02,20,前橋駅,0,0,1
平日_21時38分_系統267,22:01:00,22:01:00,201071_02,21,前橋駅,0,0,1
平日_21時38分_系統267,22:03:00,22:03:00,200542_02,22,前橋駅,0,0,1
平日_21時38分_系統267,22:04:00,22:04:00,200141_02,23,前橋駅,0,0,1
平日_21時38分_系統267,22:05:00,22:05:00,200142_02,24,前橋駅,0,0,1
平日_21時38分_系統267,22:07:00,22:07:00,200262_02,25,前橋駅,0,0,1
平日_21時38分_系統267,22:08:00,22:08:00,201015_02,26,前橋駅,0,0,1
平日_21時38分_系統267,22:09:00,22:09:00,200379_02,27,前橋駅,0,0,1
平日_21時38分_系統267,22:10:00,22:10:00,200455_02,28,前橋駅,0,0,1
平日_21時38分_系統267,22:12:00,22:12:00,200702_02,29,前橋駅,0,0,1
平日_21時38分_系統267,22:13:00,22:13:00,200703_02,30,前橋駅,0,0,1
平日_21時38分_系統267,22:15:00,22:15:00,201081_02,31,前橋駅,0,0,1
平日_21時38分_系統267,22:17:00,22:17:00,200998_02,32,前橋駅,0,0,1
平日_21時38分_系統267,22:20:00,22:20:00,200718_10,33,前橋駅,1,0,1
平日_22時17分_系統268,22:17:00,22:17:00,200718_02,1,渋川駅,0,1,1
平日_22時17分_系統268,22:18:00,22:18:00,200998_01,2,渋川駅,0,0,1
平日_22時17分_系統268,22:20:00,22:20:00,201081_01,3,渋川駅,0,0,1
平日_22時17分_系統268,22:22:00,22:22:00,200703_01,4,渋川駅,0,0,1
平日_22時17分_系統268,22:22:00,22:22:00,200702_01,5,渋川駅,0,0,1
平日_22時17分_系統268,22:24:00,22:24:00,200455_01,6,渋川駅,0,0,1
平日_22時17分_系統268,22:25:00,22:25:00,200379_01,7,渋川駅,0,0,1
平日_22時17分_系統268,22:27:00,22:27:00,201015_01,8,渋川駅,0,0,1
平日_22時17分_系統268,22:28:00,22:28:00,200262_01,9,渋川駅,0,0,1
平日_22時17分_系統268,22:29:00,22:29:00,200142_01,10,渋川駅,0,0,1
平日_22時17分_系統268,22:30:00,22:30:00,200141_01,11,渋川駅,0,0,1
平日_22時17分_系統268,22:31:00,22:31:00,200542_01,12,渋川駅,0,0,1
平日_22時17分_系統268,22:33:00,22:33:00,201071_01,13,渋川駅,0,0,1
平日_22時17分_系統268,22:35:00,22:35:00,200348_01,14,渋川駅,0,0,1
平日_22時17分_系統268,22:36:00,22:36:00,200343_01,15,渋川駅,0,0,1
平日_22時17分_系統268,22:37:00,22:37:00,200722_01,16,渋川駅,0,0,1
平日_22時17分_系統268,22:38:00,22:38:00,200189_01,17,渋川駅,0,0,1
平日_22時17分_系統268,22:40:00,22:40:00,201056_01,18,渋川駅,0,0,1
平日_22時17分_系統268,22:41:00,22:41:00,200872_01,19,渋川駅,0,0,1
平日_22時17分_系統268,22:42:00,22:42:00,200981_01,20,渋川駅,0,0,1
平日_22時17分_系統268,22:43:00,22:43:00,201100_01,21,渋川駅,0,0,1
平日_22時17分_系統268,22:44:00,22:44:00,200153_01,22,渋川駅,0,0,1
平日_22時17分_系統268,22:44:00,22:44:00,200395_01,23,渋川駅,0,0,1
平日_22時17分_系統268,22:45:00,22:45:00,200895_01,24,渋川駅,0,0,1
平日_22時17分_系統268,22:47:00,22:47:00,200985_01,25,渋川駅,0,0,1
平日_22時17分_系統268,22:47:00,22:47:00,200987_01,26,渋川駅,0,0,1
平日_22時17分_系統268,22:48:00,22:48:00,200519_01,27,渋川駅,0,0,1
平日_22時17分_系統268,22:49:00,22:49:00,200017_01,28,渋川駅,0,0,1
平日_22時17分_系統268,22:50:00,22:50:00,200506_01,29,渋川駅,0,0,1
平日_22時17分_系統268,22:51:00,22:51:00,200827_01,30,渋川駅,0,0,1
平日_22時17分_系統268,22:52:00,22:52:00,200730_01,31,渋川駅,0,0,1
平日_22時17分_系統268,22:53:00,22:53:00,200768_01,32,渋川駅,0,0,1
平日_22時17分_系統268,22:56:00,22:56:00,200463_10,33,渋川駅,1,0,1
平日_22時53分_系統268,22:53:00,22:53:00,200718_02,1,渋川駅,0,1,1
平日_22時53分_系統268,22:54:00,22:54:00,200998_01,2,渋川駅,0,0,1
平日_22時53分_系統268,22:56:00,22:56:00,201081_01,3,渋川駅,0,0,1
平日_22時53分_系統268,22:58:00,22:58:00,200703_01,4,渋川駅,0,0,1
平日_22時53分_系統268,22:58:00,22:58:00,200702_01,5,渋川駅,0,0,1
平日_22時53分_系統268,23:00:00,23:00:00,200455_01,6,渋川駅,0,0,1
平日_22時53分_系統268,23:01:00,23:01:00,200379_01,7,渋川駅,0,0,1
平日_22時53分_系統268,23:03:00,23:03:00,201015_01,8,渋川駅,0,0,1
平日_22時53分_系統268,23:04:00,23:04:00,200262_01,9,渋川駅,0,0,1
平日_22時53分_系統268,23:05:00,23:05:00,200142_01,10,渋川駅,0,0,1
平日_22時53分_系統268,23:06:00,23:06:00,200141_01,11,渋川駅,0,0,1
平日_22時53分_系統268,23:07:00,23:07:00,200542_01,12,渋川駅,0,0,1
平日_22時53分_系統268,23:09:00,23:09:00,201071_01,13,渋川駅,0,0,1
平日_22時53分_系統268,23:11:00,23:11:00,200348_01,14,渋川駅,0,0,1
平日_22時53分_系統268,23:12:00,23:12:00,200343_01,15,渋川駅,0,0,1
平日_22時53分_系統268,23:13:00,23:13:00,200722_01,16,渋川駅,0,0,1
平日_22時53分_系統268,23:14:00,23:14:00,200189_01,17,渋川駅,0,0,1
平日_22時53分_系統268,23:16:00,23:16:00,201056_01,18,渋川駅,0,0,1
平日_22時53分_系統268,23:17:00,23:17:00,200872_01,19,渋川駅,0,0,1
平日_22時53分_系統268,23:18:00,23:18:00,200981_01,20,渋川駅,0,0,1
平日_22時53分_系統268,23:19:00,23:19:00,201100_01,21,渋川駅,0,0,1
平日_22時53分_系統268,23:20:00,23:20:00,200153_01,22,渋川駅,0,0,1
平日_22時53分_系統268,23:20:00,23:20:00,200395_01,23,渋川駅,0,0,1
平日_22時53分_系統268,23:21:00,23:21:00,200895_01,24,渋川駅,0,0,1
平日_22時53分_系統268,23:23:00,23:23:00,200985_01,25,渋川駅,0,0,1
平日_22時53分_系統268,23:23:00,23:23:00,200987_01,26,渋川駅,0,0,1
平日_22時53分_系統268,23:24:00,23:24:00,200519_01,27,渋川駅,0,0,1
平日_22時53分_系統268,23:25:00,23:25:00,200017_01,28,渋川駅,0,0,1
平日_22時53分_系統268,23:26:00,23:26:00,200506_01,29,渋川駅,0,0,1
平日_22時53分_系統268,23:27:00,23:27:00,200827_01,30,渋川駅,0,0,1
平日_22時53分_系統268,23:28:00,23:28:00,200730_01,31,渋川駅,0,0,1
平日_22時53分_系統268,23:29:00,23:29:00,200768_01,32,渋川駅,0,0,1
平日_22時53分_系統268,23:32:00,23:32:00,200463_10,33,渋川駅,1,0,1
土曜_05時50分_系統267,05:50:00,05:50:00,200463_01,1,前橋駅,0,1,1
土曜_05時50分_系統267,05:51:00,05:51:00,200768_02,2,前橋駅,0,0,1
土曜_05時50分_系統267,05:52:00,05:52:00,200730_02,3,前橋駅,0,0,1
土曜_05時50分_系統267,05:54:00,05:54:00,200827_02,4,前橋駅,0,0,1
土曜_05時50分_系統267,05:55:00,05:55:00,200506_02,5,前橋駅,0,0,1
土曜_05時50分_系統267,05:56:00,05:56:00,200017_02,6,前橋駅,0,0,1
土曜_05時50分_系統267,05:57:00,05:57:00,200519_02,7,前橋駅,0,0,1
土曜_05時50分_系統267,05:57:00,05:57:00,200987_02,8,前橋駅,0,0,1
土曜_05時50分_系統267,05:59:00,05:59:00,200985_02,9,前橋駅,0,0,1
土曜_05時50分_系統267,06:00:00,06:00:00,200895_02,10,前橋駅,0,0,1
土曜_05時50分_系統267,06:01:00,06:01:00,200395_02,11,前橋駅,0,0,1
土曜_05時50分_系統267,06:01:00,06:01:00,200153_02,12,前橋駅,0,0,1
土曜_05時50分_系統267,06:02:00,06:02:00,201100_02,13,前橋駅,0,0,1
土曜_05時50分_系統267,06:03:00,06:03:00,200981_02,14,前橋駅,0,0,1
土曜_05時50分_系統267,06:04:00,06:04:00,200872_02,15,前橋駅,0,0,1
土曜_05時50分_系統267,06:05:00,06:05:00,201056_02,16,前橋駅,0,0,1
土曜_05時50分_系統267,06:07:00,06:07:00,200189_02,17,前橋駅,0,0,1
土曜_05時50分_系統267,06:08:00,06:08:00,200722_02,18,前橋駅,0,0,1
土曜_05時50分_系統267,06:09:00,06:09:00,200343_02,19,前橋駅,0,0,1
土曜_05時50分_系統267,06:10:00,06:10:00,200348_02,20,前橋駅,0,0,1
土曜_05時50分_系統267,06:12:00,06:12:00,201071_02,21,前橋駅,0,0,1
土曜_05時50分_系統267,06:13:00,06:13:00,200542_02,22,前橋駅,0,0,1
土曜_05時50分_系統267,06:14:00,06:14:00,200141_02,23,前橋駅,0,0,1
土曜_05時50分_系統267,06:15:00,06:15:00,200142_02,24,前橋駅,0,0,1
土曜_05時50分_系統267,06:17:00,06:17:00,200262_02,25,前橋駅,0,0,1
土曜_05時50分_系統267,06:18:00,06:18:00,201015_02,26,前橋駅,0,0,1
土曜_05時50分_系統267,06:18:00,06:18:00,200379_02,27,前橋駅,0,0,1
土曜_05時50分_系統267,06:19:00,06:19:00,200455_02,28,前橋駅,0,0,1
土曜_05時50分_系統267,06:20:00,06:20:00,200702_02,29,前橋駅,0,0,1
土曜_05時50分_系統267,06:21:00,06:21:00,200703_02,30,前橋駅,0,0,1
土曜_05時50分_系統267,06:22:00,06:22:00,201081_02,31,前橋駅,0,0,1
土曜_05時50分_系統267,06:23:00,06:23:00,200998_02,32,前橋駅,0,0,1
土曜_05時50分_系統267,06:27:00,06:27:00,200718_10,33,前橋駅,1,0,1
土曜_06時25分_系統267,06:25:00,06:25:00,200463_01,1,前橋駅,0,1,1
土曜_06時25分_系統267,06:26:00,06:26:00,200768_02,2,前橋駅,0,0,1
土曜_06時25分_系統267,06:27:00,06:27:00,200730_02,3,前橋駅,0,0,1
土曜_06時25分_系統267,06:29:00,06:29:00,200827_02,4,前橋駅,0,0,1
土曜_06時25分_系統267,06:30:00,06:30:00,200506_02,5,前橋駅,0,0,1
土曜_06時25分_系統267,06:31:00,06:31:00,200017_02,6,前橋駅,0,0,1
土曜_06時25分_系統267,06:32:00,06:32:00,200519_02,7,前橋駅,0,0,1
土曜_06時25分_系統267,06:32:00,06:32:00,200987_02,8,前橋駅,0,0,1
土曜_06時25分_系統267,06:34:00,06:34:00,200985_02,9,前橋駅,0,0,1
土曜_06時25分_系統267,06:35:00,06:35:00,200895_02,10,前橋駅,0,0,1
土曜_06時25分_系統267,06:36:00,06:36:00,200395_02,11,前橋駅,0,0,1
土曜_06時25分_系統267,06:36:00,06:36:00,200153_02,12,前橋駅,0,0,1
土曜_06時25分_系統267,06:37:00,06:37:00,201100_02,13,前橋駅,0,0,1
土曜_06時25分_系統267,06:38:00,06:38:00,200981_02,14,前橋駅,0,0,1
土曜_06時25分_系統267,06:39:00,06:39:00,200872_02,15,前橋駅,0,0,1
土曜_06時25分_系統267,06:40:00,06:40:00,201056_02,16,前橋駅,0,0,1
土曜_06時25分_系統267,06:42:00,06:42:00,200189_02,17,前橋駅,0,0,1
土曜_06時25分_系統267,06:43:00,06:43:00,200722_02,18,前橋駅,0,0,1
土曜_06時25分_系統267,06:44:00,06:44:00,200343_02,19,前橋駅,0,0,1
土曜_06時25分_系統267,06:45:00,06:45:00,200348_02,20,前橋駅,0,0,1
土曜_06時25分_系統267,06:47:00,06:47:00,201071_02,21,前橋駅,0,0,1
土曜_06時25分_系統267,06:48:00,06:48:00,200542_02,22,前橋駅,0,0,1
土曜_06時25分_系統267,06:49:00,06:49:00,200141_02,23,前橋駅,0,0,1
土曜_06時25分_系統267,06:50:00,06:50:00,200142_02,24,前橋駅,0,0,1
土曜_06時25分_系統267,06:52:00,06:52:00,200262_02,25,前橋駅,0,0,1
土曜_06時25分_系統267,06:53:00,06:53:00,201015_02,26,前橋駅,0,0,1
土曜_06時25分_系統267,06:53:00,06:53:00,200379_02,27,前橋駅,0,0,1
土曜_06時25分_系統267,06:54:00,06:54:00,200455_02,28,前橋駅,0,0,1
土曜_06時25分_系統267,06:55:00,06:55:00,200702_02,29,前橋駅,0,0,1
土曜_06時25分_系統267,06:56:00,06:56:00,200703_02,30,前橋駅,0,0,1
土曜_06時25分_系統267,06:57:00,06:57:00,201081_02,31,前橋駅,0,0,1
土曜_06時25分_系統267,06:59:00,06:59:00,200998_02,32,前橋駅,0,0,1
土曜_06時25分_系統267,07:02:00,07:02:00,200718_10,33,前橋駅,1,0,1
土曜_06時43分_系統267,06:43:00,06:43:00,200463_01,1,前橋駅,0,1,1
土曜_06時43分_系統267,06:44:00,06:44:00,200768_02,2,前橋駅,0,0,1
土曜_06時43分_系統267,06:45:00,06:45:00,200730_02,3,前橋駅,0,0,1
土曜_06時43分_系統267,06:47:00,06:47:00,200827_02,4,前橋駅,0,0,1
土曜_06時43分_系統267,06:48:00,06:48:00,200506_02,5,前橋駅,0,0,1
土曜_06時43分_系統267,06:49:00,06:49:00,200017_02,6,前橋駅,0,0,1
土曜_06時43分_系統267,06:50:00,06:50:00,200519_02,7,前橋駅,0,0,1
土曜_06時43分_系統267,06:50:00,06:50:00,200987_02,8,前橋駅,0,0,1
土曜_06時43分_系統267,06:52:00,06:52:00,200985_02,9,前橋駅,0,0,1
土曜_06時43分_系統267,06:53:00,06:53:00,200895_02,10,前橋駅,0,0,1
土曜_06時43分_系統267,06:54:00,06:54:00,200395_02,11,前橋駅,0,0,1
土曜_06時43分_系統267,06:54:00,06:54:00,200153_02,12,前橋駅,0,0,1
土曜_06時43分_系統267,06:55:00,06:55:00,201100_02,13,前橋駅,0,0,1
土曜_06時43分_系統267,06:56:00,06:56:00,200981_02,14,前橋駅,0,0,1
土曜_06時43分_系統267,06:57:00,06:57:00,200872_02,15,前橋駅,0,0,1
土曜_06時43分_系統267,06:58:00,06:58:00,201056_02,16,前橋駅,0,0,1
土曜_06時43分_系統267,07:00:00,07:00:00,200189_02,17,前橋駅,0,0,1
土曜_06時43分_系統267,07:01:00,07:01:00,200722_02,18,前橋駅,0,0,1
土曜_06時43分_系統267,07:02:00,07:02:00,200343_02,19,前橋駅,0,0,1
土曜_06時43分_系統267,07:03:00,07:03:00,200348_02,20,前橋駅,0,0,1
土曜_06時43分_系統267,07:05:00,07:05:00,201071_02,21,前橋駅,0,0,1
土曜_06時43分_系統267,07:06:00,07:06:00,200542_02,22,前橋駅,0,0,1
土曜_06時43分_系統267,07:07:00,07:07:00,200141_02,23,前橋駅,0,0,1
土曜_06時43分_系統267,07:08:00,07:08:00,200142_02,24,前橋駅,0,0,1
土曜_06時43分_系統267,07:10:00,07:10:00,200262_02,25,前橋駅,0,0,1
土曜_06時43分_系統267,07:11:00,07:11:00,201015_02,26,前橋駅,0,0,1
土曜_06時43分_系統267,07:11:00,07:11:00,200379_02,27,前橋駅,0,0,1
土曜_06時43分_系統267,07:12:00,07:12:00,200455_02,28,前橋駅,0,0,1
土曜_06時43分_系統267,07:13:00,07:13:00,200702_02,29,前橋駅,0,0,1
土曜_06時43分_系統267,07:14:00,07:14:00,200703_02,30,前橋駅,0,0,1
土曜_06時43分_系統267,07:16:00,07:16:00,201081_02,31,前橋駅,0,0,1
土曜_06時43分_系統267,07:18:00,07:18:00,200998_02,32,前橋駅,0,0,1
土曜_06時43分_系統267,07:21:00,07:21:00,200718_10,33,前橋駅,1,0,1
土曜_06時47分_系統268,06:47:00,06:47:00,200718_02,1,渋川駅,0,1,1
土曜_06時47分_系統268,06:48:00,06:48:00,200998_01,2,渋川駅,0,0,1
土曜_06時47分_系統268,06:50:00,06:50:00,201081_01,3,渋川駅,0,0,1
土曜_06時47分_系統268,06:51:00,06:51:00,200703_01,4,渋川駅,0,0,1
土曜_06時47分_系統268,06:51:00,06:51:00,200702_01,5,渋川駅,0,0,1
土曜_06時47分_系統268,06:52:00,06:52:00,200455_01,6,渋川駅,0,0,1
土曜_06時47分_系統268,06:53:00,06:53:00,200379_01,7,渋川駅,0,0,1
土曜_06時47分_系統268,06:54:00,06:54:00,201015_01,8,渋川駅,0,0,1
土曜_06時47分_系統268,06:55:00,06:55:00,200262_01,9,渋川駅,0,0,1
土曜_06時47分_系統268,06:56:00,06:56:00,200142_01,10,渋川駅,0,0,1
土曜_06時47分_系統268,06:57:00,06:57:00,200141_01,11,渋川駅,0,0,1
土曜_06時47分_系統268,06:58:00,06:58:00,200542_01,12,渋川駅,0,0,1
土曜_06時47分_系統268,07:00:00,07:00:00,201071_01,13,渋川駅,0,0,1
土曜_06時47分_系統268,07:01:00,07:01:00,200348_01,14,渋川駅,0,0,1
土曜_06時47分_系統268,07:02:00,07:02:00,200343_01,15,渋川駅,0,0,1
土曜_06時47分_系統268,07:03:00,07:03:00,200722_01,16,渋川駅,0,0,1
土曜_06時47分_系統268,07:05:00,07:05:00,200189_01,17,渋川駅,0,0,1
土曜_06時47分_系統268,07:07:00,07:07:00,201056_01,18,渋川駅,0,0,1
土曜_06時47分_系統268,07:08:00,07:08:00,200872_01,19,渋川駅,0,0,1
土曜_06時47分_系統268,07:09:00,07:09:00,200981_01,20,渋川駅,0,0,1
土曜_06時47分_系統268,07:10:00,07:10:00,201100_01,21,渋川駅,0,0,1
土曜_06時47分_系統268,07:11:00,07:11:00,200153_01,22,渋川駅,0,0,1
土曜_06時47分_系統268,07:11:00,07:11:00,200395_01,23,渋川駅,0,0,1
土曜_06時47分_系統268,07:12:00,07:12:00,200895_01,24,渋川駅,0,0,1
土曜_06時47分_系統268,07:13:00,07:13:00,200985_01,25,渋川駅,0,0,1
土曜_06時47分_系統268,07:13:00,07:13:00,200987_01,26,渋川駅,0,0,1
土曜_06時47分_系統268,07:14:00,07:14:00,200519_01,27,渋川駅,0,0,1
土曜_06時47分_系統268,07:15:00,07:15:00,200017_01,28,渋川駅,0,0,1
土曜_06時47分_系統268,07:16:00,07:16:00,200506_01,29,渋川駅,0,0,1
土曜_06時47分_系統268,07:17:00,07:17:00,200827_01,30,渋川駅,0,0,1
土曜_06時47分_系統268,07:19:00,07:19:00,200730_01,31,渋川駅,0,0,1
土曜_06時47分_系統268,07:20:00,07:20:00,200768_01,32,渋川駅,0,0,1
土曜_06時47分_系統268,07:23:00,07:23:00,200463_10,33,渋川駅,1,0,1
土曜_07時05分_系統267,07:05:00,07:05:00,200463_01,1,前橋駅,0,1,1
土曜_07時05分_系統267,07:06:00,07:06:00,200768_02,2,前橋駅,0,0,1
土曜_07時05分_系統267,07:07:00,07:07:00,200730_02,3,前橋駅,0,0,1
土曜_07時05分_系統267,07:09:00,07:09:00,200827_02,4,前橋駅,0,0,1
土曜_07時05分_系統267,07:10:00,07:10:00,200506_02,5,前橋駅,0,0,1
土曜_07時05分_系統267,07:11:00,07:11:00,200017_02,6,前橋駅,0,0,1
土曜_07時05分_系統267,07:12:00,07:12:00,200519_02,7,前橋駅,0,0,1
土曜_07時05分_系統267,07:12:00,07:12:00,200987_02,8,前橋駅,0,0,1
土曜_07時05分_系統267,07:14:00,07:14:00,200985_02,9,前橋駅,0,0,1
土曜_07時05分_系統267,07:15:00,07:15:00,200895_02,10,前橋駅,0,0,1
土曜_07時05分_系統267,07:16:00,07:16:00,200395_02,11,前橋駅,0,0,1
土曜_07時05分_系統267,07:16:00,07:16:00,200153_02,12,前橋駅,0,0,1
土曜_07時05分_系統267,07:17:00,07:17:00,201100_02,13,前橋駅,0,0,1
土曜_07時05分_系統267,07:18:00,07:18:00,200981_02,14,前橋駅,0,0,1
土曜_07時05分_系統267,07:19:00,07:19:00,200872_02,15,前橋駅,0,0,1
土曜_07時05分_系統267,07:20:00,07:20:00,201056_02,16,前橋駅,0,0,1
土曜_07時05分_系統267,07:22:00,07:22:00,200189_02,17,前橋駅,0,0,1
土曜_07時05分_系統267,07:23:00,07:23:00,200722_02,18,前橋駅,0,0,1
土曜_07時05分_系統267,07:24:00,07:24:00,200343_02,19,前橋駅,0,0,1
土曜_07時05分_系統267,07:25:00,07:25:00,200348_02,20,前橋駅,0,0,1
土曜_07時05分_系統267,07:27:00,07:27:00,201071_02,21,前橋駅,0,0,1
土曜_07時05分_系統267,07:28:00,07:28:00,200542_02,22,前橋駅,0,0,1
土曜_07時05分_系統267,07:29:00,07:29:00,200141_02,23,前橋駅,0,0,1
土曜_07時05分_系統267,07:30:00,07:30:00,200142_02,24,前橋駅,0,0,1
土曜_07時05分_系統267,07:32:00,07:32:00,200262_02,25,前橋駅,0,0,1
土曜_07時05分_系統267,07:33:00,07:33:00,201015_02,26,前橋駅,0,0,1
土曜_07時05分_系統267,07:33:00,07:33:00,200379_02,27,前橋駅,0,0,1
土曜_07時05分_系統267,07:34:00,07:34:00,200455_02,28,前橋駅,0,0,1
土曜_07時05分_系統267,07:35:00,07:35:00,200702_02,29,前橋駅,0,0,1
土曜_07時05分_系統267,07:36:00,07:36:00,200703_02,30,前橋駅,0,0,1
土曜_07時05分_系統267,07:38:00,07:38:00,201081_02,31,前橋駅,0,0,1
土曜_07時05分_系統267,07:40:00,07:40:00,200998_02,32,前橋駅,0,0,1
土曜_07時05分_系統267,07:43:00,07:43:00,200718_10,33,前橋駅,1,0,1
土曜_07時12分_系統268,07:12:00,07:12:00,200718_02,1,渋川駅,0,1,1
土曜_07時12分_系統268,07:13:00,07:13:00,200998_01,2,渋川駅,0,0,1
土曜_07時12分_系統268,07:15:00,07:15:00,201081_01,3,渋川駅,0,0,1
土曜_07時12分_系統268,07:16:00,07:16:00,200703_01,4,渋川駅,0,0,1
土曜_07時12分_系統268,07:16:00,07:16:00,200702_01,5,渋川駅,0,0,1
土曜_07時12分_系統268,07:17:00,07:17:00,200455_01,6,渋川駅,0,0,1
土曜_07時12分_系統268,07:18:00,07:18:00,200379_01,7,渋川駅,0,0,1
土曜_07時12分_系統268,07:19:00,07:19:00,201015_01,8,渋川駅,0,0,1
土曜_07時12分_系統268,07:20:00,07:20:00,200262_01,9,渋川駅,0,0,1
土曜_07時12分_系統268,07:21:00,07:21:00,200142_01,10,渋川駅,0,0,1
土曜_07時12分_系統268,07:22:00,07:22:00,200141_01,11,渋川駅,0,0,1
土曜_07時12分_系統268,07:23:00,07:23:00,200542_01,12,渋川駅,0,0,1
土曜_07時12分_系統268,07:25:00,07:25:00,201071_01,13,渋川駅,0,0,1
土曜_07時12分_系統268,07:26:00,07:26:00,200348_01,14,渋川駅,0,0,1
土曜_07時12分_系統268,07:27:00,07:27:00,200343_01,15,渋川駅,0,0,1
土曜_07時12分_系統268,07:28:00,07:28:00,200722_01,16,渋川駅,0,0,1
土曜_07時12分_系統268,07:30:00,07:30:00,200189_01,17,渋川駅,0,0,1
土曜_07時12分_系統268,07:32:00,07:32:00,201056_01,18,渋川駅,0,0,1
土曜_07時12分_系統268,07:33:00,07:33:00,200872_01,19,渋川駅,0,0,1
土曜_07時12分_系統268,07:34:00,07:34:00,200981_01,20,渋川駅,0,0,1
土曜_07時12分_系統268,07:35:00,07:35:00,201100_01,21,渋川駅,0,0,1
土曜_07時12分_系統268,07:36:00,07:36:00,200153_01,22,渋川駅,0,0,1
土曜_07時12分_系統268,07:36:00,07:36:00,200395_01,23,渋川駅,0,0,1
土曜_07時12分_系統268,07:37:00,07:37:00,200895_01,24,渋川駅,0,0,1
土曜_07時12分_系統268,07:38:00,07:38:00,200985_01,25,渋川駅,0,0,1
土曜_07時12分_系統268,07:38:00,07:38:00,200987_01,26,渋川駅,0,0,1
土曜_07時12分_系統268,07:39:00,07:39:00,200519_01,27,渋川駅,0,0,1
土曜_07時12分_系統268,07:40:00,07:40:00,200017_01,28,渋川駅,0,0,1
土曜_07時12分_系統268,07:41:00,07:41:00,200506_01,29,渋川駅,0,0,1
土曜_07時12分_系統268,07:42:00,07:42:00,200827_01,30,渋川駅,0,0,1
土曜_07時12分_系統268,07:44:00,07:44:00,200730_01,31,渋川駅,0,0,1
土曜_07時12分_系統268,07:45:00,07:45:00,200768_01,32,渋川駅,0,0,1
土曜_07時12分_系統268,07:48:00,07:48:00,200463_10,33,渋川駅,1,0,1
土曜_07時25分_系統267,07:25:00,07:25:00,200463_01,1,前橋駅,0,1,1
土曜_07時25分_系統267,07:26:00,07:26:00,200768_02,2,前橋駅,0,0,1
土曜_07時25分_系統267,07:27:00,07:27:00,200730_02,3,前橋駅,0,0,1
土曜_07時25分_系統267,07:29:00,07:29:00,200827_02,4,前橋駅,0,0,1
土曜_07時25分_系統267,07:30:00,07:30:00,200506_02,5,前橋駅,0,0,1
土曜_07時25分_系統267,07:31:00,07:31:00,200017_02,6,前橋駅,0,0,1
土曜_07時25分_系統267,07:32:00,07:32:00,200519_02,7,前橋駅,0,0,1
土曜_07時25分_系統267,07:32:00,07:32:00,200987_02,8,前橋駅,0,0,1
土曜_07時25分_系統267,07:34:00,07:34:00,200985_02,9,前橋駅,0,0,1
土曜_07時25分_系統267,07:35:00,07:35:00,200895_02,10,前橋駅,0,0,1
土曜_07時25分_系統267,07:36:00,07:36:00,200395_02,11,前橋駅,0,0,1
土曜_07時25分_系統267,07:36:00,07:36:00,200153_02,12,前橋駅,0,0,1
土曜_07時25分_系統267,07:37:00,07:37:00,201100_02,13,前橋駅,0,0,1
土曜_07時25分_系統267,07:38:00,07:38:00,200981_02,14,前橋駅,0,0,1
土曜_07時25分_系統267,07:39:00,07:39:00,200872_02,15,前橋駅,0,0,1
土曜_07時25分_系統267,07:40:00,07:40:00,201056_02,16,前橋駅,0,0,1
土曜_07時25分_系統267,07:42:00,07:42:00,200189_02,17,前橋駅,0,0,1
土曜_07時25分_系統267,07:43:00,07:43:00,200722_02,18,前橋駅,0,0,1
土曜_07時25分_系統267,07:44:00,07:44:00,200343_02,19,前橋駅,0,0,1
土曜_07時25分_系統267,07:45:00,07:45:00,200348_02,20,前橋駅,0,0,1
土曜_07時25分_系統267,07:47:00,07:47:00,201071_02,21,前橋駅,0,0,1
土曜_07時25分_系統267,07:48:00,07:48:00,200542_02,22,前橋駅,0,0,1
土曜_07時25分_系統267,07:49:00,07:49:00,200141_02,23,前橋駅,0,0,1
土曜_07時25分_系統267,07:50:00,07:50:00,200142_02,24,前橋駅,0,0,1
土曜_07時25分_系統267,07:52:00,07:52:00,200262_02,25,前橋駅,0,0,1
土曜_07時25分_系統267,07:53:00,07:53:00,201015_02,26,前橋駅,0,0,1
土曜_07時25分_系統267,07:53:00,07:53:00,200379_02,27,前橋駅,0,0,1
土曜_07時25分_系統267,07:54:00,07:54:00,200455_02,28,前橋駅,0,0,1
土曜_07時25分_系統267,07:55:00,07:55:00,200702_02,29,前橋駅,0,0,1
土曜_07時25分_系統267,07:56:00,07:56:00,200703_02,30,前橋駅,0,0,1
土曜_07時25分_系統267,07:58:00,07:58:00,201081_02,31,前橋駅,0,0,1
土曜_07時25分_系統267,08:00:00,08:00:00,200998_02,32,前橋駅,0,0,1
土曜_07時25分_系統267,08:03:00,08:03:00,200718_10,33,前橋駅,1,0,1
土曜_07時30分_系統264,07:30:00,07:30:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
土曜_07時30分_系統264,07:31:00,07:31:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:33:00,07:33:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:35:00,07:35:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:36:00,07:36:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:38:00,07:38:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:39:00,07:39:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:40:00,07:40:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:41:00,07:41:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:42:00,07:42:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:43:00,07:43:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:44:00,07:44:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:46:00,07:46:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:47:00,07:47:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:48:00,07:48:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:49:00,07:49:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:51:00,07:51:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:54:00,07:54:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:56:00,07:56:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:57:00,07:57:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:58:00,07:58:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,07:59:00,07:59:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:00:00,08:00:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:00:00,08:00:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:01:00,08:01:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:02:00,08:02:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:02:00,08:02:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:03:00,08:03:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:04:00,08:04:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:05:00,08:05:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:06:00,08:06:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:08:00,08:08:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:09:00,08:09:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
土曜_07時30分_系統264,08:10:00,08:10:00,200463_06,34,渋川市内循環,0,0,1
土曜_07時30分_系統264,08:11:00,08:11:00,200468_01,35,渋川市内循環,0,0,1
土曜_07時30分_系統264,08:13:00,08:13:00,200466_01,36,渋川市内循環,0,0,1
土曜_07時30分_系統264,08:14:00,08:14:00,200704_01,37,渋川市内循環,0,0,1
土曜_07時30分_系統264,08:15:00,08:15:00,200476_02,38,渋川市内循環,0,0,1
土曜_07時30分_系統264,08:16:00,08:16:00,200477_02,39,渋川市内循環,0,0,1
土曜_07時30分_系統264,08:17:00,08:17:00,200430_02,40,渋川市内循環,0,0,1
土曜_07時30分_系統264,08:18:00,08:18:00,200007_02,41,渋川市内循環,0,0,1
土曜_07時30分_系統264,08:23:00,08:23:00,210463_10,42,渋川市内循環,1,0,1
土曜_07時35分_系統528,07:35:00,07:35:00,200927_01,1,前橋駅,0,1,1
土曜_07時35分_系統528,07:35:00,07:35:00,200800_02,2,前橋駅,0,0,1
土曜_07時35分_系統528,07:36:00,07:36:00,200928_02,3,前橋駅,0,0,1
土曜_07時35分_系統528,07:38:00,07:38:00,201071_02,4,前橋駅,0,0,1
土曜_07時35分_系統528,07:39:00,07:39:00,200542_02,5,前橋駅,0,0,1
土曜_07時35分_系統528,07:40:00,07:40:00,200141_02,6,前橋駅,0,0,1
土曜_07時35分_系統528,07:41:00,07:41:00,200142_02,7,前橋駅,0,0,1
土曜_07時35分_系統528,07:43:00,07:43:00,200262_02,8,前橋駅,0,0,1
土曜_07時35分_系統528,07:44:00,07:44:00,201015_02,9,前橋駅,0,0,1
土曜_07時35分_系統528,07:44:00,07:44:00,200379_02,10,前橋駅,0,0,1
土曜_07時35分_系統528,07:45:00,07:45:00,200455_02,11,前橋駅,0,0,1
土曜_07時35分_系統528,07:46:00,07:46:00,200702_02,12,前橋駅,0,0,1
土曜_07時35分_系統528,07:47:00,07:47:00,200703_02,13,前橋駅,0,0,1
土曜_07時35分_系統528,07:49:00,07:49:00,201081_02,14,前橋駅,0,0,1
土曜_07時35分_系統528,07:51:00,07:51:00,200998_02,15,前橋駅,0,0,1
土曜_07時35分_系統528,07:54:00,07:54:00,200718_10,16,前橋駅,1,0,1
土曜_07時40分_系統586,07:40:00,07:40:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
土曜_07時40分_系統586,07:41:00,07:41:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_07時40分_系統586,07:43:00,07:43:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_07時40分_系統586,07:45:00,07:45:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_07時40分_系統586,07:46:00,07:46:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_07時40分_系統586,07:47:00,07:47:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_07時40分_系統586,07:48:00,07:48:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_07時40分_系統586,07:49:00,07:49:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_07時40分_系統586,07:50:00,07:50:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_07時40分_系統586,07:51:00,07:51:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_07時40分_系統586,07:53:00,07:53:00,200261_01,11,群馬大学荒牧,0,0,1
土曜_07時40分_系統586,07:54:00,07:54:00,200503_02,12,群馬大学荒牧,0,0,1
土曜_07時40分_系統586,07:55:00,07:55:00,200142_01,13,群馬大学荒牧,0,0,1
土曜_07時40分_系統586,07:56:00,07:56:00,200141_01,14,群馬大学荒牧,0,0,1
土曜_07時40分_系統586,07:57:00,07:57:00,200542_01,15,群馬大学荒牧,0,0,1
土曜_07時40分_系統586,07:59:00,07:59:00,201071_01,16,群馬大学荒牧,0,0,1
土曜_07時40分_系統586,08:00:00,08:00:00,200348_01,17,群馬大学荒牧,0,0,1
土曜_07時40分_系統586,08:01:00,08:01:00,200343_01,18,群馬大学荒牧,0,0,1
土曜_07時40分_系統586,08:02:00,08:02:00,200722_01,19,群馬大学荒牧,0,0,1
土曜_07時40分_系統586,08:05:00,08:05:00,200273_01,20,群馬大学荒牧,1,0,1
土曜_07時45分_系統267,07:45:00,07:45:00,200463_01,1,前橋駅,0,1,1
土曜_07時45分_系統267,07:46:00,07:46:00,200768_02,2,前橋駅,0,0,1
土曜_07時45分_系統267,07:47:00,07:47:00,200730_02,3,前橋駅,0,0,1
土曜_07時45分_系統267,07:49:00,07:49:00,200827_02,4,前橋駅,0,0,1
土曜_07時45分_系統267,07:50:00,07:50:00,200506_02,5,前橋駅,0,0,1
土曜_07時45分_系統267,07:51:00,07:51:00,200017_02,6,前橋駅,0,0,1
土曜_07時45分_系統267,07:52:00,07:52:00,200519_02,7,前橋駅,0,0,1
土曜_07時45分_系統267,07:52:00,07:52:00,200987_02,8,前橋駅,0,0,1
土曜_07時45分_系統267,07:54:00,07:54:00,200985_02,9,前橋駅,0,0,1
土曜_07時45分_系統267,07:55:00,07:55:00,200895_02,10,前橋駅,0,0,1
土曜_07時45分_系統267,07:56:00,07:56:00,200395_02,11,前橋駅,0,0,1
土曜_07時45分_系統267,07:56:00,07:56:00,200153_02,12,前橋駅,0,0,1
土曜_07時45分_系統267,07:57:00,07:57:00,201100_02,13,前橋駅,0,0,1
土曜_07時45分_系統267,07:58:00,07:58:00,200981_02,14,前橋駅,0,0,1
土曜_07時45分_系統267,07:59:00,07:59:00,200872_02,15,前橋駅,0,0,1
土曜_07時45分_系統267,08:00:00,08:00:00,201056_02,16,前橋駅,0,0,1
土曜_07時45分_系統267,08:02:00,08:02:00,200189_02,17,前橋駅,0,0,1
土曜_07時45分_系統267,08:03:00,08:03:00,200722_02,18,前橋駅,0,0,1
土曜_07時45分_系統267,08:04:00,08:04:00,200343_02,19,前橋駅,0,0,1
土曜_07時45分_系統267,08:05:00,08:05:00,200348_02,20,前橋駅,0,0,1
土曜_07時45分_系統267,08:07:00,08:07:00,201071_02,21,前橋駅,0,0,1
土曜_07時45分_系統267,08:09:00,08:09:00,200542_02,22,前橋駅,0,0,1
土曜_07時45分_系統267,08:11:00,08:11:00,200141_02,23,前橋駅,0,0,1
土曜_07時45分_系統267,08:12:00,08:12:00,200142_02,24,前橋駅,0,0,1
土曜_07時45分_系統267,08:14:00,08:14:00,200262_02,25,前橋駅,0,0,1
土曜_07時45分_系統267,08:15:00,08:15:00,201015_02,26,前橋駅,0,0,1
土曜_07時45分_系統267,08:16:00,08:16:00,200379_02,27,前橋駅,0,0,1
土曜_07時45分_系統267,08:17:00,08:17:00,200455_02,28,前橋駅,0,0,1
土曜_07時45分_系統267,08:18:00,08:18:00,200702_02,29,前橋駅,0,0,1
土曜_07時45分_系統267,08:19:00,08:19:00,200703_02,30,前橋駅,0,0,1
土曜_07時45分_系統267,08:21:00,08:21:00,201081_02,31,前橋駅,0,0,1
土曜_07時45分_系統267,08:23:00,08:23:00,200998_02,32,前橋駅,0,0,1
土曜_07時45分_系統267,08:26:00,08:26:00,200718_10,33,前橋駅,1,0,1
土曜_07時53分_系統266,07:53:00,07:53:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
土曜_07時53分_系統266,07:54:00,07:54:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,07:56:00,07:56:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,07:58:00,07:58:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,07:59:00,07:59:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:01:00,08:01:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:02:00,08:02:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:03:00,08:03:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:04:00,08:04:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:05:00,08:05:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:06:00,08:06:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:07:00,08:07:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:09:00,08:09:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:10:00,08:10:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:11:00,08:11:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:12:00,08:12:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_07時53分_系統266,08:14:00,08:14:00,200273_01,17,渋川駅,0,0,1
土曜_07時53分_系統266,08:17:00,08:17:00,200189_01,18,渋川駅,0,0,1
土曜_07時53分_系統266,08:19:00,08:19:00,201056_01,19,渋川駅,0,0,1
土曜_07時53分_系統266,08:20:00,08:20:00,200872_01,20,渋川駅,0,0,1
土曜_07時53分_系統266,08:21:00,08:21:00,200981_01,21,渋川駅,0,0,1
土曜_07時53分_系統266,08:22:00,08:22:00,201100_01,22,渋川駅,0,0,1
土曜_07時53分_系統266,08:23:00,08:23:00,200153_01,23,渋川駅,0,0,1
土曜_07時53分_系統266,08:23:00,08:23:00,200395_01,24,渋川駅,0,0,1
土曜_07時53分_系統266,08:24:00,08:24:00,200895_01,25,渋川駅,0,0,1
土曜_07時53分_系統266,08:25:00,08:25:00,200985_01,26,渋川駅,0,0,1
土曜_07時53分_系統266,08:25:00,08:25:00,200987_01,27,渋川駅,0,0,1
土曜_07時53分_系統266,08:26:00,08:26:00,200519_01,28,渋川駅,0,0,1
土曜_07時53分_系統266,08:27:00,08:27:00,200017_01,29,渋川駅,0,0,1
土曜_07時53分_系統266,08:28:00,08:28:00,200506_01,30,渋川駅,0,0,1
土曜_07時53分_系統266,08:29:00,08:29:00,200827_01,31,渋川駅,0,0,1
土曜_07時53分_系統266,08:31:00,08:31:00,200730_01,32,渋川駅,0,0,1
土曜_07時53分_系統266,08:32:00,08:32:00,200768_01,33,渋川駅,0,0,1
土曜_07時53分_系統266,08:35:00,08:35:00,200463_10,34,渋川駅,1,0,1
土曜_08時05分_系統265,08:05:00,08:05:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
土曜_08時05分_系統265,08:06:00,08:06:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:07:00,08:07:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:09:00,08:09:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:10:00,08:10:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:11:00,08:11:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:12:00,08:12:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:12:00,08:12:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:14:00,08:14:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:15:00,08:15:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:16:00,08:16:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:16:00,08:16:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:17:00,08:17:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:18:00,08:18:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:19:00,08:19:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:20:00,08:20:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:22:00,08:22:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時05分_系統265,08:25:00,08:25:00,200273_01,18,前橋駅,0,0,1
土曜_08時05分_系統265,08:27:00,08:27:00,200722_02,19,前橋駅,0,0,1
土曜_08時05分_系統265,08:28:00,08:28:00,200343_02,20,前橋駅,0,0,1
土曜_08時05分_系統265,08:29:00,08:29:00,200348_02,21,前橋駅,0,0,1
土曜_08時05分_系統265,08:31:00,08:31:00,201071_02,22,前橋駅,0,0,1
土曜_08時05分_系統265,08:33:00,08:33:00,200542_02,23,前橋駅,0,0,1
土曜_08時05分_系統265,08:35:00,08:35:00,200141_02,24,前橋駅,0,0,1
土曜_08時05分_系統265,08:36:00,08:36:00,200142_02,25,前橋駅,0,0,1
土曜_08時05分_系統265,08:38:00,08:38:00,200262_02,26,前橋駅,0,0,1
土曜_08時05分_系統265,08:39:00,08:39:00,201015_02,27,前橋駅,0,0,1
土曜_08時05分_系統265,08:40:00,08:40:00,200379_02,28,前橋駅,0,0,1
土曜_08時05分_系統265,08:41:00,08:41:00,200455_02,29,前橋駅,0,0,1
土曜_08時05分_系統265,08:42:00,08:42:00,200702_02,30,前橋駅,0,0,1
土曜_08時05分_系統265,08:43:00,08:43:00,200703_02,31,前橋駅,0,0,1
土曜_08時05分_系統265,08:45:00,08:45:00,201081_02,32,前橋駅,0,0,1
土曜_08時05分_系統265,08:47:00,08:47:00,200998_02,33,前橋駅,0,0,1
土曜_08時05分_系統265,08:50:00,08:50:00,200718_10,34,前橋駅,1,0,1
土曜_08時10分_系統583,08:10:00,08:10:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
土曜_08時10分_系統583,08:12:00,08:12:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
土曜_08時10分_系統583,08:13:00,08:13:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
土曜_08時10分_系統583,08:14:00,08:14:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
土曜_08時10分_系統583,08:17:00,08:17:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
土曜_08時10分_系統583,08:20:00,08:20:00,200927_01,6,前橋駅,0,0,1
土曜_08時10分_系統583,08:20:00,08:20:00,200800_02,7,前橋駅,0,0,1
土曜_08時10分_系統583,08:21:00,08:21:00,200928_02,8,前橋駅,0,0,1
土曜_08時10分_系統583,08:23:00,08:23:00,201071_02,9,前橋駅,0,0,1
土曜_08時10分_系統583,08:25:00,08:25:00,200542_02,10,前橋駅,0,0,1
土曜_08時10分_系統583,08:27:00,08:27:00,200141_02,11,前橋駅,0,0,1
土曜_08時10分_系統583,08:28:00,08:28:00,200142_02,12,前橋駅,0,0,1
土曜_08時10分_系統583,08:30:00,08:30:00,200262_02,13,前橋駅,0,0,1
土曜_08時10分_系統583,08:31:00,08:31:00,201015_02,14,前橋駅,0,0,1
土曜_08時10分_系統583,08:32:00,08:32:00,200379_02,15,前橋駅,0,0,1
土曜_08時10分_系統583,08:33:00,08:33:00,200455_02,16,前橋駅,0,0,1
土曜_08時10分_系統583,08:34:00,08:34:00,200702_02,17,前橋駅,0,0,1
土曜_08時10分_系統583,08:35:00,08:35:00,200703_02,18,前橋駅,0,0,1
土曜_08時10分_系統583,08:37:00,08:37:00,201081_02,19,前橋駅,0,0,1
土曜_08時10分_系統583,08:39:00,08:39:00,200998_02,20,前橋駅,0,0,1
土曜_08時10分_系統583,08:42:00,08:42:00,200718_10,21,前橋駅,1,0,1
土曜_08時12分_系統261,08:12:00,08:12:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
土曜_08時12分_系統261,08:13:00,08:13:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
土曜_08時12分_系統261,08:14:00,08:14:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
土曜_08時12分_系統261,08:15:00,08:15:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
土曜_08時12分_系統261,08:16:00,08:16:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
土曜_08時12分_系統261,08:17:00,08:17:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
土曜_08時12分_系統261,08:18:00,08:18:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
土曜_08時12分_系統261,08:19:00,08:19:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
土曜_08時12分_系統261,08:20:00,08:20:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
土曜_08時12分_系統261,08:25:00,08:25:00,200463_01,10,前橋駅,0,0,1
土曜_08時12分_系統261,08:26:00,08:26:00,200768_02,11,前橋駅,0,0,1
土曜_08時12分_系統261,08:27:00,08:27:00,200730_02,12,前橋駅,0,0,1
土曜_08時12分_系統261,08:29:00,08:29:00,200827_02,13,前橋駅,0,0,1
土曜_08時12分_系統261,08:30:00,08:30:00,200506_02,14,前橋駅,0,0,1
土曜_08時12分_系統261,08:31:00,08:31:00,200017_02,15,前橋駅,0,0,1
土曜_08時12分_系統261,08:32:00,08:32:00,200519_02,16,前橋駅,0,0,1
土曜_08時12分_系統261,08:32:00,08:32:00,200987_02,17,前橋駅,0,0,1
土曜_08時12分_系統261,08:34:00,08:34:00,200985_02,18,前橋駅,0,0,1
土曜_08時12分_系統261,08:35:00,08:35:00,200895_02,19,前橋駅,0,0,1
土曜_08時12分_系統261,08:36:00,08:36:00,200395_02,20,前橋駅,0,0,1
土曜_08時12分_系統261,08:36:00,08:36:00,200153_02,21,前橋駅,0,0,1
土曜_08時12分_系統261,08:37:00,08:37:00,201100_02,22,前橋駅,0,0,1
土曜_08時12分_系統261,08:38:00,08:38:00,200981_02,23,前橋駅,0,0,1
土曜_08時12分_系統261,08:39:00,08:39:00,200872_02,24,前橋駅,0,0,1
土曜_08時12分_系統261,08:40:00,08:40:00,201056_02,25,前橋駅,0,0,1
土曜_08時12分_系統261,08:42:00,08:42:00,200189_02,26,前橋駅,0,0,1
土曜_08時12分_系統261,08:43:00,08:43:00,200722_02,27,前橋駅,0,0,1
土曜_08時12分_系統261,08:44:00,08:44:00,200343_02,28,前橋駅,0,0,1
土曜_08時12分_系統261,08:45:00,08:45:00,200348_02,29,前橋駅,0,0,1
土曜_08時12分_系統261,08:47:00,08:47:00,201071_02,30,前橋駅,0,0,1
土曜_08時12分_系統261,08:49:00,08:49:00,200542_02,31,前橋駅,0,0,1
土曜_08時12分_系統261,08:51:00,08:51:00,200141_02,32,前橋駅,0,0,1
土曜_08時12分_系統261,08:52:00,08:52:00,200142_02,33,前橋駅,0,0,1
土曜_08時12分_系統261,08:54:00,08:54:00,200262_02,34,前橋駅,0,0,1
土曜_08時12分_系統261,08:55:00,08:55:00,201015_02,35,前橋駅,0,0,1
土曜_08時12分_系統261,08:56:00,08:56:00,200379_02,36,前橋駅,0,0,1
土曜_08時12分_系統261,08:57:00,08:57:00,200455_02,37,前橋駅,0,0,1
土曜_08時12分_系統261,08:58:00,08:58:00,200702_02,38,前橋駅,0,0,1
土曜_08時12分_系統261,08:59:00,08:59:00,200703_02,39,前橋駅,0,0,1
土曜_08時12分_系統261,09:01:00,09:01:00,201081_02,40,前橋駅,0,0,1
土曜_08時12分_系統261,09:03:00,09:03:00,200998_02,41,前橋駅,0,0,1
土曜_08時12分_系統261,09:06:00,09:06:00,200718_10,42,前橋駅,1,0,1
土曜_08時13分_系統266,08:13:00,08:13:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
土曜_08時13分_系統266,08:14:00,08:14:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:16:00,08:16:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:18:00,08:18:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:19:00,08:19:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:21:00,08:21:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:22:00,08:22:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:23:00,08:23:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:24:00,08:24:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:25:00,08:25:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:26:00,08:26:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:27:00,08:27:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:29:00,08:29:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:30:00,08:30:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:31:00,08:31:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:32:00,08:32:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_08時13分_系統266,08:34:00,08:34:00,200273_01,17,渋川駅,0,0,1
土曜_08時13分_系統266,08:37:00,08:37:00,200189_01,18,渋川駅,0,0,1
土曜_08時13分_系統266,08:39:00,08:39:00,201056_01,19,渋川駅,0,0,1
土曜_08時13分_系統266,08:40:00,08:40:00,200872_01,20,渋川駅,0,0,1
土曜_08時13分_系統266,08:41:00,08:41:00,200981_01,21,渋川駅,0,0,1
土曜_08時13分_系統266,08:42:00,08:42:00,201100_01,22,渋川駅,0,0,1
土曜_08時13分_系統266,08:43:00,08:43:00,200153_01,23,渋川駅,0,0,1
土曜_08時13分_系統266,08:43:00,08:43:00,200395_01,24,渋川駅,0,0,1
土曜_08時13分_系統266,08:44:00,08:44:00,200895_01,25,渋川駅,0,0,1
土曜_08時13分_系統266,08:45:00,08:45:00,200985_01,26,渋川駅,0,0,1
土曜_08時13分_系統266,08:45:00,08:45:00,200987_01,27,渋川駅,0,0,1
土曜_08時13分_系統266,08:46:00,08:46:00,200519_01,28,渋川駅,0,0,1
土曜_08時13分_系統266,08:47:00,08:47:00,200017_01,29,渋川駅,0,0,1
土曜_08時13分_系統266,08:48:00,08:48:00,200506_01,30,渋川駅,0,0,1
土曜_08時13分_系統266,08:49:00,08:49:00,200827_01,31,渋川駅,0,0,1
土曜_08時13分_系統266,08:51:00,08:51:00,200730_01,32,渋川駅,0,0,1
土曜_08時13分_系統266,08:52:00,08:52:00,200768_01,33,渋川駅,0,0,1
土曜_08時13分_系統266,08:55:00,08:55:00,200463_10,34,渋川駅,1,0,1
土曜_08時28分_系統586,08:28:00,08:28:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
土曜_08時28分_系統586,08:29:00,08:29:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_08時28分_系統586,08:31:00,08:31:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_08時28分_系統586,08:33:00,08:33:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_08時28分_系統586,08:34:00,08:34:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_08時28分_系統586,08:36:00,08:36:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_08時28分_系統586,08:37:00,08:37:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_08時28分_系統586,08:38:00,08:38:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_08時28分_系統586,08:39:00,08:39:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_08時28分_系統586,08:40:00,08:40:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_08時28分_系統586,08:42:00,08:42:00,200261_01,11,群馬大学荒牧,0,0,1
土曜_08時28分_系統586,08:43:00,08:43:00,200503_02,12,群馬大学荒牧,0,0,1
土曜_08時28分_系統586,08:44:00,08:44:00,200142_01,13,群馬大学荒牧,0,0,1
土曜_08時28分_系統586,08:45:00,08:45:00,200141_01,14,群馬大学荒牧,0,0,1
土曜_08時28分_系統586,08:46:00,08:46:00,200542_01,15,群馬大学荒牧,0,0,1
土曜_08時28分_系統586,08:48:00,08:48:00,201071_01,16,群馬大学荒牧,0,0,1
土曜_08時28分_系統586,08:49:00,08:49:00,200348_01,17,群馬大学荒牧,0,0,1
土曜_08時28分_系統586,08:50:00,08:50:00,200343_01,18,群馬大学荒牧,0,0,1
土曜_08時28分_系統586,08:51:00,08:51:00,200722_01,19,群馬大学荒牧,0,0,1
土曜_08時28分_系統586,08:54:00,08:54:00,200273_01,20,群馬大学荒牧,1,0,1
土曜_08時40分_系統268,08:40:00,08:40:00,200718_02,1,渋川駅,0,1,1
土曜_08時40分_系統268,08:41:00,08:41:00,200998_01,2,渋川駅,0,0,1
土曜_08時40分_系統268,08:43:00,08:43:00,201081_01,3,渋川駅,0,0,1
土曜_08時40分_系統268,08:44:00,08:44:00,200703_01,4,渋川駅,0,0,1
土曜_08時40分_系統268,08:44:00,08:44:00,200702_01,5,渋川駅,0,0,1
土曜_08時40分_系統268,08:45:00,08:45:00,200455_01,6,渋川駅,0,0,1
土曜_08時40分_系統268,08:46:00,08:46:00,200379_01,7,渋川駅,0,0,1
土曜_08時40分_系統268,08:47:00,08:47:00,201015_01,8,渋川駅,0,0,1
土曜_08時40分_系統268,08:48:00,08:48:00,200262_01,9,渋川駅,0,0,1
土曜_08時40分_系統268,08:49:00,08:49:00,200142_01,10,渋川駅,0,0,1
土曜_08時40分_系統268,08:50:00,08:50:00,200141_01,11,渋川駅,0,0,1
土曜_08時40分_系統268,08:51:00,08:51:00,200542_01,12,渋川駅,0,0,1
土曜_08時40分_系統268,08:53:00,08:53:00,201071_01,13,渋川駅,0,0,1
土曜_08時40分_系統268,08:54:00,08:54:00,200348_01,14,渋川駅,0,0,1
土曜_08時40分_系統268,08:55:00,08:55:00,200343_01,15,渋川駅,0,0,1
土曜_08時40分_系統268,08:56:00,08:56:00,200722_01,16,渋川駅,0,0,1
土曜_08時40分_系統268,08:58:00,08:58:00,200189_01,17,渋川駅,0,0,1
土曜_08時40分_系統268,09:00:00,09:00:00,201056_01,18,渋川駅,0,0,1
土曜_08時40分_系統268,09:01:00,09:01:00,200872_01,19,渋川駅,0,0,1
土曜_08時40分_系統268,09:02:00,09:02:00,200981_01,20,渋川駅,0,0,1
土曜_08時40分_系統268,09:03:00,09:03:00,201100_01,21,渋川駅,0,0,1
土曜_08時40分_系統268,09:04:00,09:04:00,200153_01,22,渋川駅,0,0,1
土曜_08時40分_系統268,09:04:00,09:04:00,200395_01,23,渋川駅,0,0,1
土曜_08時40分_系統268,09:05:00,09:05:00,200895_01,24,渋川駅,0,0,1
土曜_08時40分_系統268,09:06:00,09:06:00,200985_01,25,渋川駅,0,0,1
土曜_08時40分_系統268,09:06:00,09:06:00,200987_01,26,渋川駅,0,0,1
土曜_08時40分_系統268,09:07:00,09:07:00,200519_01,27,渋川駅,0,0,1
土曜_08時40分_系統268,09:08:00,09:08:00,200017_01,28,渋川駅,0,0,1
土曜_08時40分_系統268,09:09:00,09:09:00,200506_01,29,渋川駅,0,0,1
土曜_08時40分_系統268,09:10:00,09:10:00,200827_01,30,渋川駅,0,0,1
土曜_08時40分_系統268,09:12:00,09:12:00,200730_01,31,渋川駅,0,0,1
土曜_08時40分_系統268,09:13:00,09:13:00,200768_01,32,渋川駅,0,0,1
土曜_08時40分_系統268,09:16:00,09:16:00,200463_10,33,渋川駅,1,0,1
土曜_08時55分_系統265,08:55:00,08:55:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
土曜_08時55分_系統265,08:56:00,08:56:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,08:57:00,08:57:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,08:59:00,08:59:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:00:00,09:00:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:01:00,09:01:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:02:00,09:02:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:02:00,09:02:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:04:00,09:04:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:05:00,09:05:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:06:00,09:06:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:06:00,09:06:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:07:00,09:07:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:08:00,09:08:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:09:00,09:09:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:10:00,09:10:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:12:00,09:12:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_08時55分_系統265,09:15:00,09:15:00,200273_01,18,前橋駅,0,0,1
土曜_08時55分_系統265,09:17:00,09:17:00,200722_02,19,前橋駅,0,0,1
土曜_08時55分_系統265,09:18:00,09:18:00,200343_02,20,前橋駅,0,0,1
土曜_08時55分_系統265,09:19:00,09:19:00,200348_02,21,前橋駅,0,0,1
土曜_08時55分_系統265,09:21:00,09:21:00,201071_02,22,前橋駅,0,0,1
土曜_08時55分_系統265,09:23:00,09:23:00,200542_02,23,前橋駅,0,0,1
土曜_08時55分_系統265,09:25:00,09:25:00,200141_02,24,前橋駅,0,0,1
土曜_08時55分_系統265,09:26:00,09:26:00,200142_02,25,前橋駅,0,0,1
土曜_08時55分_系統265,09:28:00,09:28:00,200262_02,26,前橋駅,0,0,1
土曜_08時55分_系統265,09:29:00,09:29:00,201015_02,27,前橋駅,0,0,1
土曜_08時55分_系統265,09:30:00,09:30:00,200379_02,28,前橋駅,0,0,1
土曜_08時55分_系統265,09:31:00,09:31:00,200455_02,29,前橋駅,0,0,1
土曜_08時55分_系統265,09:32:00,09:32:00,200702_02,30,前橋駅,0,0,1
土曜_08時55分_系統265,09:33:00,09:33:00,200703_02,31,前橋駅,0,0,1
土曜_08時55分_系統265,09:35:00,09:35:00,201081_02,32,前橋駅,0,0,1
土曜_08時55分_系統265,09:37:00,09:37:00,200998_02,33,前橋駅,0,0,1
土曜_08時55分_系統265,09:40:00,09:40:00,200718_10,34,前橋駅,1,0,1
土曜_08時58分_系統264,08:58:00,08:58:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
土曜_08時58分_系統264,08:59:00,08:59:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:01:00,09:01:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:03:00,09:03:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:04:00,09:04:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:06:00,09:06:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:07:00,09:07:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:08:00,09:08:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:09:00,09:09:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:10:00,09:10:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:11:00,09:11:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:12:00,09:12:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:14:00,09:14:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:15:00,09:15:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:16:00,09:16:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:17:00,09:17:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:19:00,09:19:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:22:00,09:22:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:24:00,09:24:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:25:00,09:25:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:26:00,09:26:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:27:00,09:27:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:28:00,09:28:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:28:00,09:28:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:29:00,09:29:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:30:00,09:30:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:30:00,09:30:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:31:00,09:31:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:32:00,09:32:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:33:00,09:33:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:34:00,09:34:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:36:00,09:36:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:37:00,09:37:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
土曜_08時58分_系統264,09:38:00,09:38:00,200463_06,34,渋川市内循環,0,0,1
土曜_08時58分_系統264,09:39:00,09:39:00,200468_01,35,渋川市内循環,0,0,1
土曜_08時58分_系統264,09:41:00,09:41:00,200466_01,36,渋川市内循環,0,0,1
土曜_08時58分_系統264,09:42:00,09:42:00,200704_01,37,渋川市内循環,0,0,1
土曜_08時58分_系統264,09:43:00,09:43:00,200476_02,38,渋川市内循環,0,0,1
土曜_08時58分_系統264,09:44:00,09:44:00,200477_02,39,渋川市内循環,0,0,1
土曜_08時58分_系統264,09:45:00,09:45:00,200430_02,40,渋川市内循環,0,0,1
土曜_08時58分_系統264,09:46:00,09:46:00,200007_02,41,渋川市内循環,0,0,1
土曜_08時58分_系統264,09:51:00,09:51:00,210463_10,42,渋川市内循環,1,0,1
土曜_09時00分_系統583,09:00:00,09:00:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
土曜_09時00分_系統583,09:02:00,09:02:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
土曜_09時00分_系統583,09:03:00,09:03:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
土曜_09時00分_系統583,09:04:00,09:04:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
土曜_09時00分_系統583,09:07:00,09:07:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
土曜_09時00分_系統583,09:10:00,09:10:00,200927_01,6,前橋駅,0,0,1
土曜_09時00分_系統583,09:10:00,09:10:00,200800_02,7,前橋駅,0,0,1
土曜_09時00分_系統583,09:11:00,09:11:00,200928_02,8,前橋駅,0,0,1
土曜_09時00分_系統583,09:13:00,09:13:00,201071_02,9,前橋駅,0,0,1
土曜_09時00分_系統583,09:15:00,09:15:00,200542_02,10,前橋駅,0,0,1
土曜_09時00分_系統583,09:17:00,09:17:00,200141_02,11,前橋駅,0,0,1
土曜_09時00分_系統583,09:18:00,09:18:00,200142_02,12,前橋駅,0,0,1
土曜_09時00分_系統583,09:20:00,09:20:00,200262_02,13,前橋駅,0,0,1
土曜_09時00分_系統583,09:21:00,09:21:00,201015_02,14,前橋駅,0,0,1
土曜_09時00分_系統583,09:22:00,09:22:00,200379_02,15,前橋駅,0,0,1
土曜_09時00分_系統583,09:23:00,09:23:00,200455_02,16,前橋駅,0,0,1
土曜_09時00分_系統583,09:24:00,09:24:00,200702_02,17,前橋駅,0,0,1
土曜_09時00分_系統583,09:25:00,09:25:00,200703_02,18,前橋駅,0,0,1
土曜_09時00分_系統583,09:27:00,09:27:00,201081_02,19,前橋駅,0,0,1
土曜_09時00分_系統583,09:29:00,09:29:00,200998_02,20,前橋駅,0,0,1
土曜_09時00分_系統583,09:32:00,09:32:00,200718_10,21,前橋駅,1,0,1
土曜_09時10分_系統267,09:10:00,09:10:00,200463_01,1,前橋駅,0,1,1
土曜_09時10分_系統267,09:11:00,09:11:00,200768_02,2,前橋駅,0,0,1
土曜_09時10分_系統267,09:12:00,09:12:00,200730_02,3,前橋駅,0,0,1
土曜_09時10分_系統267,09:14:00,09:14:00,200827_02,4,前橋駅,0,0,1
土曜_09時10分_系統267,09:15:00,09:15:00,200506_02,5,前橋駅,0,0,1
土曜_09時10分_系統267,09:16:00,09:16:00,200017_02,6,前橋駅,0,0,1
土曜_09時10分_系統267,09:17:00,09:17:00,200519_02,7,前橋駅,0,0,1
土曜_09時10分_系統267,09:17:00,09:17:00,200987_02,8,前橋駅,0,0,1
土曜_09時10分_系統267,09:19:00,09:19:00,200985_02,9,前橋駅,0,0,1
土曜_09時10分_系統267,09:20:00,09:20:00,200895_02,10,前橋駅,0,0,1
土曜_09時10分_系統267,09:21:00,09:21:00,200395_02,11,前橋駅,0,0,1
土曜_09時10分_系統267,09:21:00,09:21:00,200153_02,12,前橋駅,0,0,1
土曜_09時10分_系統267,09:22:00,09:22:00,201100_02,13,前橋駅,0,0,1
土曜_09時10分_系統267,09:23:00,09:23:00,200981_02,14,前橋駅,0,0,1
土曜_09時10分_系統267,09:24:00,09:24:00,200872_02,15,前橋駅,0,0,1
土曜_09時10分_系統267,09:25:00,09:25:00,201056_02,16,前橋駅,0,0,1
土曜_09時10分_系統267,09:27:00,09:27:00,200189_02,17,前橋駅,0,0,1
土曜_09時10分_系統267,09:28:00,09:28:00,200722_02,18,前橋駅,0,0,1
土曜_09時10分_系統267,09:29:00,09:29:00,200343_02,19,前橋駅,0,0,1
土曜_09時10分_系統267,09:30:00,09:30:00,200348_02,20,前橋駅,0,0,1
土曜_09時10分_系統267,09:32:00,09:32:00,201071_02,21,前橋駅,0,0,1
土曜_09時10分_系統267,09:34:00,09:34:00,200542_02,22,前橋駅,0,0,1
土曜_09時10分_系統267,09:36:00,09:36:00,200141_02,23,前橋駅,0,0,1
土曜_09時10分_系統267,09:37:00,09:37:00,200142_02,24,前橋駅,0,0,1
土曜_09時10分_系統267,09:39:00,09:39:00,200262_02,25,前橋駅,0,0,1
土曜_09時10分_系統267,09:40:00,09:40:00,201015_02,26,前橋駅,0,0,1
土曜_09時10分_系統267,09:41:00,09:41:00,200379_02,27,前橋駅,0,0,1
土曜_09時10分_系統267,09:42:00,09:42:00,200455_02,28,前橋駅,0,0,1
土曜_09時10分_系統267,09:43:00,09:43:00,200702_02,29,前橋駅,0,0,1
土曜_09時10分_系統267,09:44:00,09:44:00,200703_02,30,前橋駅,0,0,1
土曜_09時10分_系統267,09:46:00,09:46:00,201081_02,31,前橋駅,0,0,1
土曜_09時10分_系統267,09:48:00,09:48:00,200998_02,32,前橋駅,0,0,1
土曜_09時10分_系統267,09:51:00,09:51:00,200718_10,33,前橋駅,1,0,1
土曜_09時17分_系統586,09:17:00,09:17:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
土曜_09時17分_系統586,09:18:00,09:18:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_09時17分_系統586,09:20:00,09:20:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_09時17分_系統586,09:22:00,09:22:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_09時17分_系統586,09:23:00,09:23:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_09時17分_系統586,09:24:00,09:24:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_09時17分_系統586,09:25:00,09:25:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_09時17分_系統586,09:26:00,09:26:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_09時17分_系統586,09:27:00,09:27:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_09時17分_系統586,09:28:00,09:28:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
土曜_09時17分_系統586,09:30:00,09:30:00,200261_01,11,群馬大学荒牧,0,0,1
土曜_09時17分_系統586,09:31:00,09:31:00,200503_02,12,群馬大学荒牧,0,0,1
土曜_09時17分_系統586,09:32:00,09:32:00,200142_01,13,群馬大学荒牧,0,0,1
土曜_09時17分_系統586,09:33:00,09:33:00,200141_01,14,群馬大学荒牧,0,0,1
土曜_09時17分_系統586,09:34:00,09:34:00,200542_01,15,群馬大学荒牧,0,0,1
土曜_09時17分_系統586,09:36:00,09:36:00,201071_01,16,群馬大学荒牧,0,0,1
土曜_09時17分_系統586,09:37:00,09:37:00,200348_01,17,群馬大学荒牧,0,0,1
土曜_09時17分_系統586,09:38:00,09:38:00,200343_01,18,群馬大学荒牧,0,0,1
土曜_09時17分_系統586,09:39:00,09:39:00,200722_01,19,群馬大学荒牧,0,0,1
土曜_09時17分_系統586,09:42:00,09:42:00,200273_01,20,群馬大学荒牧,1,0,1
土曜_09時30分_系統267,09:30:00,09:30:00,200463_01,1,前橋駅,0,1,1
土曜_09時30分_系統267,09:31:00,09:31:00,200768_02,2,前橋駅,0,0,1
土曜_09時30分_系統267,09:32:00,09:32:00,200730_02,3,前橋駅,0,0,1
土曜_09時30分_系統267,09:34:00,09:34:00,200827_02,4,前橋駅,0,0,1
土曜_09時30分_系統267,09:35:00,09:35:00,200506_02,5,前橋駅,0,0,1
土曜_09時30分_系統267,09:36:00,09:36:00,200017_02,6,前橋駅,0,0,1
土曜_09時30分_系統267,09:37:00,09:37:00,200519_02,7,前橋駅,0,0,1
土曜_09時30分_系統267,09:37:00,09:37:00,200987_02,8,前橋駅,0,0,1
土曜_09時30分_系統267,09:39:00,09:39:00,200985_02,9,前橋駅,0,0,1
土曜_09時30分_系統267,09:40:00,09:40:00,200895_02,10,前橋駅,0,0,1
土曜_09時30分_系統267,09:41:00,09:41:00,200395_02,11,前橋駅,0,0,1
土曜_09時30分_系統267,09:41:00,09:41:00,200153_02,12,前橋駅,0,0,1
土曜_09時30分_系統267,09:42:00,09:42:00,201100_02,13,前橋駅,0,0,1
土曜_09時30分_系統267,09:43:00,09:43:00,200981_02,14,前橋駅,0,0,1
土曜_09時30分_系統267,09:44:00,09:44:00,200872_02,15,前橋駅,0,0,1
土曜_09時30分_系統267,09:45:00,09:45:00,201056_02,16,前橋駅,0,0,1
土曜_09時30分_系統267,09:47:00,09:47:00,200189_02,17,前橋駅,0,0,1
土曜_09時30分_系統267,09:48:00,09:48:00,200722_02,18,前橋駅,0,0,1
土曜_09時30分_系統267,09:49:00,09:49:00,200343_02,19,前橋駅,0,0,1
土曜_09時30分_系統267,09:50:00,09:50:00,200348_02,20,前橋駅,0,0,1
土曜_09時30分_系統267,09:52:00,09:52:00,201071_02,21,前橋駅,0,0,1
土曜_09時30分_系統267,09:54:00,09:54:00,200542_02,22,前橋駅,0,0,1
土曜_09時30分_系統267,09:56:00,09:56:00,200141_02,23,前橋駅,0,0,1
土曜_09時30分_系統267,09:57:00,09:57:00,200142_02,24,前橋駅,0,0,1
土曜_09時30分_系統267,09:59:00,09:59:00,200262_02,25,前橋駅,0,0,1
土曜_09時30分_系統267,10:00:00,10:00:00,201015_02,26,前橋駅,0,0,1
土曜_09時30分_系統267,10:01:00,10:01:00,200379_02,27,前橋駅,0,0,1
土曜_09時30分_系統267,10:02:00,10:02:00,200455_02,28,前橋駅,0,0,1
土曜_09時30分_系統267,10:03:00,10:03:00,200702_02,29,前橋駅,0,0,1
土曜_09時30分_系統267,10:04:00,10:04:00,200703_02,30,前橋駅,0,0,1
土曜_09時30分_系統267,10:06:00,10:06:00,201081_02,31,前橋駅,0,0,1
土曜_09時30分_系統267,10:08:00,10:08:00,200998_02,32,前橋駅,0,0,1
土曜_09時30分_系統267,10:11:00,10:11:00,200718_10,33,前橋駅,1,0,1
土曜_09時30分_系統266,09:30:00,09:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
土曜_09時30分_系統266,09:31:00,09:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:33:00,09:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:35:00,09:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:36:00,09:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:38:00,09:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:39:00,09:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:40:00,09:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:41:00,09:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:42:00,09:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:43:00,09:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:44:00,09:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:46:00,09:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:48:00,09:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:49:00,09:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:50:00,09:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_09時30分_系統266,09:52:00,09:52:00,200273_01,17,渋川駅,0,0,1
土曜_09時30分_系統266,09:55:00,09:55:00,200189_01,18,渋川駅,0,0,1
土曜_09時30分_系統266,09:57:00,09:57:00,201056_01,19,渋川駅,0,0,1
土曜_09時30分_系統266,09:58:00,09:58:00,200872_01,20,渋川駅,0,0,1
土曜_09時30分_系統266,09:59:00,09:59:00,200981_01,21,渋川駅,0,0,1
土曜_09時30分_系統266,10:00:00,10:00:00,201100_01,22,渋川駅,0,0,1
土曜_09時30分_系統266,10:01:00,10:01:00,200153_01,23,渋川駅,0,0,1
土曜_09時30分_系統266,10:01:00,10:01:00,200395_01,24,渋川駅,0,0,1
土曜_09時30分_系統266,10:02:00,10:02:00,200895_01,25,渋川駅,0,0,1
土曜_09時30分_系統266,10:03:00,10:03:00,200985_01,26,渋川駅,0,0,1
土曜_09時30分_系統266,10:03:00,10:03:00,200987_01,27,渋川駅,0,0,1
土曜_09時30分_系統266,10:04:00,10:04:00,200519_01,28,渋川駅,0,0,1
土曜_09時30分_系統266,10:05:00,10:05:00,200017_01,29,渋川駅,0,0,1
土曜_09時30分_系統266,10:06:00,10:06:00,200506_01,30,渋川駅,0,0,1
土曜_09時30分_系統266,10:08:00,10:08:00,200827_01,31,渋川駅,0,0,1
土曜_09時30分_系統266,10:10:00,10:10:00,200730_01,32,渋川駅,0,0,1
土曜_09時30分_系統266,10:11:00,10:11:00,200768_01,33,渋川駅,0,0,1
土曜_09時30分_系統266,10:14:00,10:14:00,200463_10,34,渋川駅,1,0,1
土曜_09時47分_系統263,09:47:00,09:47:00,210463_05,1,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,1,1
土曜_09時47分_系統263,09:48:00,09:48:00,200007_01,2,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,09:49:00,09:49:00,200430_01,3,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,09:50:00,09:50:00,200477_01,4,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,09:51:00,09:51:00,200476_01,5,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,09:52:00,09:52:00,200704_02,6,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,09:53:00,09:53:00,200467_01,7,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,09:54:00,09:54:00,200466_02,8,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,09:55:00,09:55:00,200468_02,9,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:00:00,10:00:00,200463_01,10,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:01:00,10:01:00,200768_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:02:00,10:02:00,200730_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:04:00,10:04:00,200827_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:05:00,10:05:00,200506_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:06:00,10:06:00,200017_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:07:00,10:07:00,200519_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:07:00,10:07:00,200987_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:09:00,10:09:00,200985_02,18,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:10:00,10:10:00,200895_02,19,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:11:00,10:11:00,200395_02,20,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:11:00,10:11:00,200153_02,21,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:12:00,10:12:00,201100_02,22,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:13:00,10:13:00,200981_02,23,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:14:00,10:14:00,200872_02,24,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:15:00,10:15:00,201056_02,25,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:17:00,10:17:00,200189_02,26,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_09時47分_系統263,10:20:00,10:20:00,200273_01,27,前橋駅,0,0,1
土曜_09時47分_系統263,10:22:00,10:22:00,200722_02,28,前橋駅,0,0,1
土曜_09時47分_系統263,10:23:00,10:23:00,200343_02,29,前橋駅,0,0,1
土曜_09時47分_系統263,10:24:00,10:24:00,200348_02,30,前橋駅,0,0,1
土曜_09時47分_系統263,10:26:00,10:26:00,201071_02,31,前橋駅,0,0,1
土曜_09時47分_系統263,10:28:00,10:28:00,200542_02,32,前橋駅,0,0,1
土曜_09時47分_系統263,10:30:00,10:30:00,200141_02,33,前橋駅,0,0,1
土曜_09時47分_系統263,10:31:00,10:31:00,200142_02,34,前橋駅,0,0,1
土曜_09時47分_系統263,10:33:00,10:33:00,200262_02,35,前橋駅,0,0,1
土曜_09時47分_系統263,10:34:00,10:34:00,201015_02,36,前橋駅,0,0,1
土曜_09時47分_系統263,10:35:00,10:35:00,200379_02,37,前橋駅,0,0,1
土曜_09時47分_系統263,10:36:00,10:36:00,200455_02,38,前橋駅,0,0,1
土曜_09時47分_系統263,10:37:00,10:37:00,200702_02,39,前橋駅,0,0,1
土曜_09時47分_系統263,10:38:00,10:38:00,200703_02,40,前橋駅,0,0,1
土曜_09時47分_系統263,10:40:00,10:40:00,201081_02,41,前橋駅,0,0,1
土曜_09時47分_系統263,10:42:00,10:42:00,200998_02,42,前橋駅,0,0,1
土曜_09時47分_系統263,10:45:00,10:45:00,200718_10,43,前橋駅,1,0,1
土曜_09時48分_系統669,09:48:00,09:48:00,200273_01,1,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,1,1
土曜_09時48分_系統669,09:50:00,09:50:00,200722_02,2,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
土曜_09時48分_系統669,09:51:00,09:51:00,200343_02,3,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
土曜_09時48分_系統669,09:52:00,09:52:00,200348_02,4,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
土曜_09時48分_系統669,09:55:00,09:55:00,201185_02,5,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
土曜_09時48分_系統669,09:58:00,09:58:00,200927_01,6,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,09:58:00,09:58:00,200800_02,7,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,09:59:00,09:59:00,200928_02,8,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:01:00,10:01:00,201071_02,9,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:03:00,10:03:00,200542_02,10,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:05:00,10:05:00,200141_02,11,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:06:00,10:06:00,200142_02,12,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:08:00,10:08:00,200262_02,13,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:09:00,10:09:00,201015_02,14,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:10:00,10:10:00,200379_02,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:11:00,10:11:00,200455_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:12:00,10:12:00,200702_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:13:00,10:13:00,200703_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:15:00,10:15:00,201081_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:17:00,10:17:00,200998_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_09時48分_系統669,10:20:00,10:20:00,200718_04,21,けやきウォーク前橋,0,0,1
土曜_09時48分_系統669,10:22:00,10:22:00,200108_01,22,けやきウォーク前橋,0,0,1
土曜_09時48分_系統669,10:23:00,10:23:00,200932_01,23,けやきウォーク前橋,0,0,1
土曜_09時48分_系統669,10:24:00,10:24:00,200668_01,24,けやきウォーク前橋,0,0,1
土曜_09時48分_系統669,10:28:00,10:28:00,200022_01,25,けやきウォーク前橋,1,0,1
土曜_10時02分_系統268,10:02:00,10:02:00,200718_02,1,渋川駅,0,1,1
土曜_10時02分_系統268,10:03:00,10:03:00,200998_01,2,渋川駅,0,0,1
土曜_10時02分_系統268,10:05:00,10:05:00,201081_01,3,渋川駅,0,0,1
土曜_10時02分_系統268,10:06:00,10:06:00,200703_01,4,渋川駅,0,0,1
土曜_10時02分_系統268,10:06:00,10:06:00,200702_01,5,渋川駅,0,0,1
土曜_10時02分_系統268,10:07:00,10:07:00,200455_01,6,渋川駅,0,0,1
土曜_10時02分_系統268,10:08:00,10:08:00,200379_01,7,渋川駅,0,0,1
土曜_10時02分_系統268,10:09:00,10:09:00,201015_01,8,渋川駅,0,0,1
土曜_10時02分_系統268,10:10:00,10:10:00,200262_01,9,渋川駅,0,0,1
土曜_10時02分_系統268,10:11:00,10:11:00,200142_01,10,渋川駅,0,0,1
土曜_10時02分_系統268,10:12:00,10:12:00,200141_01,11,渋川駅,0,0,1
土曜_10時02分_系統268,10:13:00,10:13:00,200542_01,12,渋川駅,0,0,1
土曜_10時02分_系統268,10:15:00,10:15:00,201071_01,13,渋川駅,0,0,1
土曜_10時02分_系統268,10:17:00,10:17:00,200348_01,14,渋川駅,0,0,1
土曜_10時02分_系統268,10:18:00,10:18:00,200343_01,15,渋川駅,0,0,1
土曜_10時02分_系統268,10:19:00,10:19:00,200722_01,16,渋川駅,0,0,1
土曜_10時02分_系統268,10:21:00,10:21:00,200189_01,17,渋川駅,0,0,1
土曜_10時02分_系統268,10:23:00,10:23:00,201056_01,18,渋川駅,0,0,1
土曜_10時02分_系統268,10:24:00,10:24:00,200872_01,19,渋川駅,0,0,1
土曜_10時02分_系統268,10:25:00,10:25:00,200981_01,20,渋川駅,0,0,1
土曜_10時02分_系統268,10:26:00,10:26:00,201100_01,21,渋川駅,0,0,1
土曜_10時02分_系統268,10:27:00,10:27:00,200153_01,22,渋川駅,0,0,1
土曜_10時02分_系統268,10:27:00,10:27:00,200395_01,23,渋川駅,0,0,1
土曜_10時02分_系統268,10:28:00,10:28:00,200895_01,24,渋川駅,0,0,1
土曜_10時02分_系統268,10:29:00,10:29:00,200985_01,25,渋川駅,0,0,1
土曜_10時02分_系統268,10:29:00,10:29:00,200987_01,26,渋川駅,0,0,1
土曜_10時02分_系統268,10:30:00,10:30:00,200519_01,27,渋川駅,0,0,1
土曜_10時02分_系統268,10:31:00,10:31:00,200017_01,28,渋川駅,0,0,1
土曜_10時02分_系統268,10:32:00,10:32:00,200506_01,29,渋川駅,0,0,1
土曜_10時02分_系統268,10:34:00,10:34:00,200827_01,30,渋川駅,0,0,1
土曜_10時02分_系統268,10:36:00,10:36:00,200730_01,31,渋川駅,0,0,1
土曜_10時02分_系統268,10:37:00,10:37:00,200768_01,32,渋川駅,0,0,1
土曜_10時02分_系統268,10:40:00,10:40:00,200463_10,33,渋川駅,1,0,1
土曜_10時10分_系統644,10:10:00,10:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
土曜_10時10分_系統644,10:11:00,10:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_10時10分_系統644,10:13:00,10:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_10時10分_系統644,10:15:00,10:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_10時10分_系統644,10:16:00,10:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_10時10分_系統644,10:17:00,10:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_10時10分_系統644,10:18:00,10:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_10時10分_系統644,10:19:00,10:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_10時10分_系統644,10:20:00,10:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_10時10分_系統644,10:21:00,10:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_10時10分_系統644,10:23:00,10:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:24:00,10:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:25:00,10:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:26:00,10:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:27:00,10:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:29:00,10:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:31:00,10:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:32:00,10:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:33:00,10:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:35:00,10:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
土曜_10時10分_系統644,10:42:00,10:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
土曜_10時30分_系統267,10:30:00,10:30:00,200463_01,1,前橋駅,0,1,1
土曜_10時30分_系統267,10:31:00,10:31:00,200768_02,2,前橋駅,0,0,1
土曜_10時30分_系統267,10:32:00,10:32:00,200730_02,3,前橋駅,0,0,1
土曜_10時30分_系統267,10:34:00,10:34:00,200827_02,4,前橋駅,0,0,1
土曜_10時30分_系統267,10:35:00,10:35:00,200506_02,5,前橋駅,0,0,1
土曜_10時30分_系統267,10:36:00,10:36:00,200017_02,6,前橋駅,0,0,1
土曜_10時30分_系統267,10:37:00,10:37:00,200519_02,7,前橋駅,0,0,1
土曜_10時30分_系統267,10:37:00,10:37:00,200987_02,8,前橋駅,0,0,1
土曜_10時30分_系統267,10:39:00,10:39:00,200985_02,9,前橋駅,0,0,1
土曜_10時30分_系統267,10:40:00,10:40:00,200895_02,10,前橋駅,0,0,1
土曜_10時30分_系統267,10:41:00,10:41:00,200395_02,11,前橋駅,0,0,1
土曜_10時30分_系統267,10:41:00,10:41:00,200153_02,12,前橋駅,0,0,1
土曜_10時30分_系統267,10:42:00,10:42:00,201100_02,13,前橋駅,0,0,1
土曜_10時30分_系統267,10:43:00,10:43:00,200981_02,14,前橋駅,0,0,1
土曜_10時30分_系統267,10:44:00,10:44:00,200872_02,15,前橋駅,0,0,1
土曜_10時30分_系統267,10:45:00,10:45:00,201056_02,16,前橋駅,0,0,1
土曜_10時30分_系統267,10:47:00,10:47:00,200189_02,17,前橋駅,0,0,1
土曜_10時30分_系統267,10:48:00,10:48:00,200722_02,18,前橋駅,0,0,1
土曜_10時30分_系統267,10:49:00,10:49:00,200343_02,19,前橋駅,0,0,1
土曜_10時30分_系統267,10:50:00,10:50:00,200348_02,20,前橋駅,0,0,1
土曜_10時30分_系統267,10:52:00,10:52:00,201071_02,21,前橋駅,0,0,1
土曜_10時30分_系統267,10:54:00,10:54:00,200542_02,22,前橋駅,0,0,1
土曜_10時30分_系統267,10:56:00,10:56:00,200141_02,23,前橋駅,0,0,1
土曜_10時30分_系統267,10:57:00,10:57:00,200142_02,24,前橋駅,0,0,1
土曜_10時30分_系統267,10:59:00,10:59:00,200262_02,25,前橋駅,0,0,1
土曜_10時30分_系統267,11:00:00,11:00:00,201015_02,26,前橋駅,0,0,1
土曜_10時30分_系統267,11:01:00,11:01:00,200379_02,27,前橋駅,0,0,1
土曜_10時30分_系統267,11:02:00,11:02:00,200455_02,28,前橋駅,0,0,1
土曜_10時30分_系統267,11:03:00,11:03:00,200702_02,29,前橋駅,0,0,1
土曜_10時30分_系統267,11:04:00,11:04:00,200703_02,30,前橋駅,0,0,1
土曜_10時30分_系統267,11:06:00,11:06:00,201081_02,31,前橋駅,0,0,1
土曜_10時30分_系統267,11:08:00,11:08:00,200998_02,32,前橋駅,0,0,1
土曜_10時30分_系統267,11:11:00,11:11:00,200718_10,33,前橋駅,1,0,1
土曜_10時30分_系統264,10:30:00,10:30:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
土曜_10時30分_系統264,10:31:00,10:31:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:33:00,10:33:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:35:00,10:35:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:36:00,10:36:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:38:00,10:38:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:39:00,10:39:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:40:00,10:40:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:41:00,10:41:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:42:00,10:42:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:43:00,10:43:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:44:00,10:44:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:46:00,10:46:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:48:00,10:48:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:49:00,10:49:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:50:00,10:50:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:52:00,10:52:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:55:00,10:55:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:57:00,10:57:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:58:00,10:58:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,10:59:00,10:59:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:00:00,11:00:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:01:00,11:01:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:01:00,11:01:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:02:00,11:02:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:03:00,11:03:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:03:00,11:03:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:04:00,11:04:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:05:00,11:05:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:06:00,11:06:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:08:00,11:08:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:10:00,11:10:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:11:00,11:11:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
土曜_10時30分_系統264,11:12:00,11:12:00,200463_06,34,渋川市内循環,0,0,1
土曜_10時30分_系統264,11:13:00,11:13:00,200468_01,35,渋川市内循環,0,0,1
土曜_10時30分_系統264,11:15:00,11:15:00,200466_01,36,渋川市内循環,0,0,1
土曜_10時30分_系統264,11:16:00,11:16:00,200704_01,37,渋川市内循環,0,0,1
土曜_10時30分_系統264,11:17:00,11:17:00,200476_02,38,渋川市内循環,0,0,1
土曜_10時30分_系統264,11:18:00,11:18:00,200477_02,39,渋川市内循環,0,0,1
土曜_10時30分_系統264,11:19:00,11:19:00,200430_02,40,渋川市内循環,0,0,1
土曜_10時30分_系統264,11:20:00,11:20:00,200007_02,41,渋川市内循環,0,0,1
土曜_10時30分_系統264,11:25:00,11:25:00,210463_10,42,渋川市内循環,1,0,1
土曜_10時50分_系統643,10:50:00,10:50:00,201440_01,1,前橋駅（南橘団地・群大病院 経由）,0,1,1
土曜_10時50分_系統643,10:55:00,10:55:00,200189_02,2,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_10時50分_系統643,10:57:00,10:57:00,200722_02,3,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_10時50分_系統643,10:58:00,10:58:00,200343_02,4,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_10時50分_系統643,10:59:00,10:59:00,200348_02,5,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:02:00,11:02:00,201185_02,6,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:05:00,11:05:00,200927_01,7,前橋駅（群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:05:00,11:05:00,200800_02,8,前橋駅（群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:06:00,11:06:00,200928_02,9,前橋駅（群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:08:00,11:08:00,201071_02,10,前橋駅（群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:10:00,11:10:00,200542_02,11,前橋駅（群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:12:00,11:12:00,200141_02,12,前橋駅（群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:14:00,11:14:00,200142_02,13,前橋駅（群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:15:00,11:15:00,200503_01,14,前橋駅（群大病院 経由）,0,0,1
土曜_10時50分_系統643,11:17:00,11:17:00,200261_01,15,前橋駅,0,0,1
土曜_10時50分_系統643,11:18:00,11:18:00,200503_02,16,前橋駅,0,0,1
土曜_10時50分_系統643,11:21:00,11:21:00,200262_02,17,前橋駅,0,0,1
土曜_10時50分_系統643,11:22:00,11:22:00,201015_02,18,前橋駅,0,0,1
土曜_10時50分_系統643,11:23:00,11:23:00,200379_02,19,前橋駅,0,0,1
土曜_10時50分_系統643,11:24:00,11:24:00,200455_02,20,前橋駅,0,0,1
土曜_10時50分_系統643,11:25:00,11:25:00,200702_02,21,前橋駅,0,0,1
土曜_10時50分_系統643,11:26:00,11:26:00,200703_02,22,前橋駅,0,0,1
土曜_10時50分_系統643,11:28:00,11:28:00,201081_02,23,前橋駅,0,0,1
土曜_10時50分_系統643,11:30:00,11:30:00,200998_02,24,前橋駅,0,0,1
土曜_10時50分_系統643,11:33:00,11:33:00,200718_10,25,前橋駅,1,0,1
土曜_10時57分_系統268,10:57:00,10:57:00,200718_02,1,渋川駅,0,1,1
土曜_10時57分_系統268,10:58:00,10:58:00,200998_01,2,渋川駅,0,0,1
土曜_10時57分_系統268,11:00:00,11:00:00,201081_01,3,渋川駅,0,0,1
土曜_10時57分_系統268,11:02:00,11:02:00,200703_01,4,渋川駅,0,0,1
土曜_10時57分_系統268,11:03:00,11:03:00,200702_01,5,渋川駅,0,0,1
土曜_10時57分_系統268,11:04:00,11:04:00,200455_01,6,渋川駅,0,0,1
土曜_10時57分_系統268,11:05:00,11:05:00,200379_01,7,渋川駅,0,0,1
土曜_10時57分_系統268,11:06:00,11:06:00,201015_01,8,渋川駅,0,0,1
土曜_10時57分_系統268,11:07:00,11:07:00,200262_01,9,渋川駅,0,0,1
土曜_10時57分_系統268,11:08:00,11:08:00,200142_01,10,渋川駅,0,0,1
土曜_10時57分_系統268,11:09:00,11:09:00,200141_01,11,渋川駅,0,0,1
土曜_10時57分_系統268,11:10:00,11:10:00,200542_01,12,渋川駅,0,0,1
土曜_10時57分_系統268,11:12:00,11:12:00,201071_01,13,渋川駅,0,0,1
土曜_10時57分_系統268,11:14:00,11:14:00,200348_01,14,渋川駅,0,0,1
土曜_10時57分_系統268,11:15:00,11:15:00,200343_01,15,渋川駅,0,0,1
土曜_10時57分_系統268,11:16:00,11:16:00,200722_01,16,渋川駅,0,0,1
土曜_10時57分_系統268,11:18:00,11:18:00,200189_01,17,渋川駅,0,0,1
土曜_10時57分_系統268,11:20:00,11:20:00,201056_01,18,渋川駅,0,0,1
土曜_10時57分_系統268,11:21:00,11:21:00,200872_01,19,渋川駅,0,0,1
土曜_10時57分_系統268,11:22:00,11:22:00,200981_01,20,渋川駅,0,0,1
土曜_10時57分_系統268,11:23:00,11:23:00,201100_01,21,渋川駅,0,0,1
土曜_10時57分_系統268,11:24:00,11:24:00,200153_01,22,渋川駅,0,0,1
土曜_10時57分_系統268,11:24:00,11:24:00,200395_01,23,渋川駅,0,0,1
土曜_10時57分_系統268,11:25:00,11:25:00,200895_01,24,渋川駅,0,0,1
土曜_10時57分_系統268,11:26:00,11:26:00,200985_01,25,渋川駅,0,0,1
土曜_10時57分_系統268,11:26:00,11:26:00,200987_01,26,渋川駅,0,0,1
土曜_10時57分_系統268,11:27:00,11:27:00,200519_01,27,渋川駅,0,0,1
土曜_10時57分_系統268,11:28:00,11:28:00,200017_01,28,渋川駅,0,0,1
土曜_10時57分_系統268,11:29:00,11:29:00,200506_01,29,渋川駅,0,0,1
土曜_10時57分_系統268,11:31:00,11:31:00,200827_01,30,渋川駅,0,0,1
土曜_10時57分_系統268,11:33:00,11:33:00,200730_01,31,渋川駅,0,0,1
土曜_10時57分_系統268,11:34:00,11:34:00,200768_01,32,渋川駅,0,0,1
土曜_10時57分_系統268,11:37:00,11:37:00,200463_10,33,渋川駅,1,0,1
土曜_11時00分_系統663,11:00:00,11:00:00,200463_01,1,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,1,1
土曜_11時00分_系統663,11:01:00,11:01:00,200768_02,2,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:02:00,11:02:00,200730_02,3,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:04:00,11:04:00,200827_02,4,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:05:00,11:05:00,200506_02,5,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:06:00,11:06:00,200017_02,6,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:07:00,11:07:00,200519_02,7,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:07:00,11:07:00,200987_02,8,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:09:00,11:09:00,200985_02,9,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:10:00,11:10:00,200895_02,10,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:11:00,11:11:00,200395_02,11,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:11:00,11:11:00,200153_02,12,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:12:00,11:12:00,201100_02,13,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:13:00,11:13:00,200981_02,14,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:14:00,11:14:00,200872_02,15,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:15:00,11:15:00,201056_02,16,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:17:00,11:17:00,200189_02,17,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:20:00,11:20:00,200273_01,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:22:00,11:22:00,200722_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:23:00,11:23:00,200343_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:24:00,11:24:00,200348_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:26:00,11:26:00,201071_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:28:00,11:28:00,200542_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:30:00,11:30:00,200141_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:31:00,11:31:00,200142_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:33:00,11:33:00,200262_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:34:00,11:34:00,201015_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:35:00,11:35:00,200379_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:36:00,11:36:00,200455_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:37:00,11:37:00,200702_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:38:00,11:38:00,200703_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:40:00,11:40:00,201081_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:42:00,11:42:00,200998_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_11時00分_系統663,11:45:00,11:45:00,200718_04,34,けやきウォーク前橋,0,0,1
土曜_11時00分_系統663,11:47:00,11:47:00,200108_01,35,けやきウォーク前橋,0,0,1
土曜_11時00分_系統663,11:48:00,11:48:00,200932_01,36,けやきウォーク前橋,0,0,1
土曜_11時00分_系統663,11:49:00,11:49:00,200668_01,37,けやきウォーク前橋,0,0,1
土曜_11時00分_系統663,11:53:00,11:53:00,200022_01,38,けやきウォーク前橋,1,0,1
土曜_11時10分_系統584,11:10:00,11:10:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
土曜_11時10分_系統584,11:11:00,11:11:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:13:00,11:13:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:15:00,11:15:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:16:00,11:16:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:18:00,11:18:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:19:00,11:19:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:20:00,11:20:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:21:00,11:21:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:22:00,11:22:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:24:00,11:24:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:25:00,11:25:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:26:00,11:26:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:27:00,11:27:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:28:00,11:28:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:30:00,11:30:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:31:00,11:31:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:32:00,11:32:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_11時10分_系統584,11:34:00,11:34:00,200927_01,19,群馬大学荒牧,0,0,1
土曜_11時10分_系統584,11:35:00,11:35:00,201185_01,20,群馬大学荒牧,0,0,1
土曜_11時10分_系統584,11:39:00,11:39:00,200348_01,21,群馬大学荒牧,0,0,1
土曜_11時10分_系統584,11:40:00,11:40:00,200343_01,22,群馬大学荒牧,0,0,1
土曜_11時10分_系統584,11:41:00,11:41:00,200722_01,23,群馬大学荒牧,0,0,1
土曜_11時10分_系統584,11:44:00,11:44:00,200273_01,24,群馬大学荒牧,1,0,1
土曜_11時17分_系統261,11:17:00,11:17:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
土曜_11時17分_系統261,11:18:00,11:18:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
土曜_11時17分_系統261,11:19:00,11:19:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
土曜_11時17分_系統261,11:20:00,11:20:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
土曜_11時17分_系統261,11:21:00,11:21:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
土曜_11時17分_系統261,11:22:00,11:22:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
土曜_11時17分_系統261,11:23:00,11:23:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
土曜_11時17分_系統261,11:24:00,11:24:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
土曜_11時17分_系統261,11:25:00,11:25:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
土曜_11時17分_系統261,11:30:00,11:30:00,200463_01,10,前橋駅,0,0,1
土曜_11時17分_系統261,11:31:00,11:31:00,200768_02,11,前橋駅,0,0,1
土曜_11時17分_系統261,11:32:00,11:32:00,200730_02,12,前橋駅,0,0,1
土曜_11時17分_系統261,11:34:00,11:34:00,200827_02,13,前橋駅,0,0,1
土曜_11時17分_系統261,11:35:00,11:35:00,200506_02,14,前橋駅,0,0,1
土曜_11時17分_系統261,11:36:00,11:36:00,200017_02,15,前橋駅,0,0,1
土曜_11時17分_系統261,11:37:00,11:37:00,200519_02,16,前橋駅,0,0,1
土曜_11時17分_系統261,11:37:00,11:37:00,200987_02,17,前橋駅,0,0,1
土曜_11時17分_系統261,11:39:00,11:39:00,200985_02,18,前橋駅,0,0,1
土曜_11時17分_系統261,11:40:00,11:40:00,200895_02,19,前橋駅,0,0,1
土曜_11時17分_系統261,11:41:00,11:41:00,200395_02,20,前橋駅,0,0,1
土曜_11時17分_系統261,11:41:00,11:41:00,200153_02,21,前橋駅,0,0,1
土曜_11時17分_系統261,11:42:00,11:42:00,201100_02,22,前橋駅,0,0,1
土曜_11時17分_系統261,11:43:00,11:43:00,200981_02,23,前橋駅,0,0,1
土曜_11時17分_系統261,11:44:00,11:44:00,200872_02,24,前橋駅,0,0,1
土曜_11時17分_系統261,11:45:00,11:45:00,201056_02,25,前橋駅,0,0,1
土曜_11時17分_系統261,11:47:00,11:47:00,200189_02,26,前橋駅,0,0,1
土曜_11時17分_系統261,11:49:00,11:49:00,200722_02,27,前橋駅,0,0,1
土曜_11時17分_系統261,11:50:00,11:50:00,200343_02,28,前橋駅,0,0,1
土曜_11時17分_系統261,11:51:00,11:51:00,200348_02,29,前橋駅,0,0,1
土曜_11時17分_系統261,11:53:00,11:53:00,201071_02,30,前橋駅,0,0,1
土曜_11時17分_系統261,11:55:00,11:55:00,200542_02,31,前橋駅,0,0,1
土曜_11時17分_系統261,11:57:00,11:57:00,200141_02,32,前橋駅,0,0,1
土曜_11時17分_系統261,11:58:00,11:58:00,200142_02,33,前橋駅,0,0,1
土曜_11時17分_系統261,12:00:00,12:00:00,200262_02,34,前橋駅,0,0,1
土曜_11時17分_系統261,12:01:00,12:01:00,201015_02,35,前橋駅,0,0,1
土曜_11時17分_系統261,12:02:00,12:02:00,200379_02,36,前橋駅,0,0,1
土曜_11時17分_系統261,12:03:00,12:03:00,200455_02,37,前橋駅,0,0,1
土曜_11時17分_系統261,12:04:00,12:04:00,200702_02,38,前橋駅,0,0,1
土曜_11時17分_系統261,12:05:00,12:05:00,200703_02,39,前橋駅,0,0,1
土曜_11時17分_系統261,12:07:00,12:07:00,201081_02,40,前橋駅,0,0,1
土曜_11時17分_系統261,12:09:00,12:09:00,200998_02,41,前橋駅,0,0,1
土曜_11時17分_系統261,12:12:00,12:12:00,200718_10,42,前橋駅,1,0,1
土曜_11時30分_系統266,11:30:00,11:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
土曜_11時30分_系統266,11:31:00,11:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:33:00,11:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:35:00,11:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:36:00,11:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:38:00,11:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:39:00,11:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:40:00,11:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:41:00,11:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:42:00,11:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:43:00,11:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:44:00,11:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:46:00,11:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:48:00,11:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:49:00,11:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:50:00,11:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_11時30分_系統266,11:52:00,11:52:00,200273_01,17,渋川駅,0,0,1
土曜_11時30分_系統266,11:55:00,11:55:00,200189_01,18,渋川駅,0,0,1
土曜_11時30分_系統266,11:57:00,11:57:00,201056_01,19,渋川駅,0,0,1
土曜_11時30分_系統266,11:58:00,11:58:00,200872_01,20,渋川駅,0,0,1
土曜_11時30分_系統266,11:59:00,11:59:00,200981_01,21,渋川駅,0,0,1
土曜_11時30分_系統266,12:00:00,12:00:00,201100_01,22,渋川駅,0,0,1
土曜_11時30分_系統266,12:01:00,12:01:00,200153_01,23,渋川駅,0,0,1
土曜_11時30分_系統266,12:01:00,12:01:00,200395_01,24,渋川駅,0,0,1
土曜_11時30分_系統266,12:02:00,12:02:00,200895_01,25,渋川駅,0,0,1
土曜_11時30分_系統266,12:03:00,12:03:00,200985_01,26,渋川駅,0,0,1
土曜_11時30分_系統266,12:03:00,12:03:00,200987_01,27,渋川駅,0,0,1
土曜_11時30分_系統266,12:04:00,12:04:00,200519_01,28,渋川駅,0,0,1
土曜_11時30分_系統266,12:05:00,12:05:00,200017_01,29,渋川駅,0,0,1
土曜_11時30分_系統266,12:06:00,12:06:00,200506_01,30,渋川駅,0,0,1
土曜_11時30分_系統266,12:08:00,12:08:00,200827_01,31,渋川駅,0,0,1
土曜_11時30分_系統266,12:10:00,12:10:00,200730_01,32,渋川駅,0,0,1
土曜_11時30分_系統266,12:11:00,12:11:00,200768_01,33,渋川駅,0,0,1
土曜_11時30分_系統266,12:14:00,12:14:00,200463_10,34,渋川駅,1,0,1
土曜_11時57分_系統262,11:57:00,11:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
土曜_11時57分_系統262,11:58:00,11:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:00:00,12:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:02:00,12:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:03:00,12:03:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:05:00,12:05:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:06:00,12:06:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:07:00,12:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:08:00,12:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:09:00,12:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:10:00,12:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:11:00,12:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:13:00,12:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:15:00,12:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:16:00,12:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:17:00,12:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:20:00,12:20:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:22:00,12:22:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:23:00,12:23:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:24:00,12:24:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:25:00,12:25:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:26:00,12:26:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:26:00,12:26:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:27:00,12:27:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:28:00,12:28:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:28:00,12:28:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:29:00,12:29:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:30:00,12:30:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:31:00,12:31:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:33:00,12:33:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:35:00,12:35:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:36:00,12:36:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
土曜_11時57分_系統262,12:37:00,12:37:00,200463_06,33,渋川市内循環,0,0,1
土曜_11時57分_系統262,12:38:00,12:38:00,200468_01,34,渋川市内循環,0,0,1
土曜_11時57分_系統262,12:40:00,12:40:00,200466_01,35,渋川市内循環,0,0,1
土曜_11時57分_系統262,12:41:00,12:41:00,200704_01,36,渋川市内循環,0,0,1
土曜_11時57分_系統262,12:42:00,12:42:00,200476_02,37,渋川市内循環,0,0,1
土曜_11時57分_系統262,12:43:00,12:43:00,200477_02,38,渋川市内循環,0,0,1
土曜_11時57分_系統262,12:44:00,12:44:00,200430_02,39,渋川市内循環,0,0,1
土曜_11時57分_系統262,12:45:00,12:45:00,200007_02,40,渋川市内循環,0,0,1
土曜_11時57分_系統262,12:50:00,12:50:00,210463_10,41,渋川市内循環,1,0,1
土曜_11時58分_系統587,11:58:00,11:58:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
土曜_11時58分_系統587,12:00:00,12:00:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
土曜_11時58分_系統587,12:01:00,12:01:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
土曜_11時58分_系統587,12:02:00,12:02:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
土曜_11時58分_系統587,12:04:00,12:04:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
土曜_11時58分_系統587,12:06:00,12:06:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
土曜_11時58分_系統587,12:08:00,12:08:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
土曜_11時58分_系統587,12:10:00,12:10:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
土曜_11時58分_系統587,12:11:00,12:11:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
土曜_11時58分_系統587,12:13:00,12:13:00,200261_01,10,前橋駅,0,0,1
土曜_11時58分_系統587,12:14:00,12:14:00,200503_02,11,前橋駅,0,0,1
土曜_11時58分_系統587,12:17:00,12:17:00,200262_02,12,前橋駅,0,0,1
土曜_11時58分_系統587,12:18:00,12:18:00,201015_02,13,前橋駅,0,0,1
土曜_11時58分_系統587,12:19:00,12:19:00,200379_02,14,前橋駅,0,0,1
土曜_11時58分_系統587,12:20:00,12:20:00,200455_02,15,前橋駅,0,0,1
土曜_11時58分_系統587,12:21:00,12:21:00,200702_02,16,前橋駅,0,0,1
土曜_11時58分_系統587,12:22:00,12:22:00,200703_02,17,前橋駅,0,0,1
土曜_11時58分_系統587,12:24:00,12:24:00,201081_02,18,前橋駅,0,0,1
土曜_11時58分_系統587,12:26:00,12:26:00,200998_02,19,前橋駅,0,0,1
土曜_11時58分_系統587,12:29:00,12:29:00,200718_10,20,前橋駅,1,0,1
土曜_12時00分_系統663,12:00:00,12:00:00,200463_01,1,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,1,1
土曜_12時00分_系統663,12:01:00,12:01:00,200768_02,2,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:02:00,12:02:00,200730_02,3,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:04:00,12:04:00,200827_02,4,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:05:00,12:05:00,200506_02,5,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:06:00,12:06:00,200017_02,6,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:07:00,12:07:00,200519_02,7,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:07:00,12:07:00,200987_02,8,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:09:00,12:09:00,200985_02,9,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:10:00,12:10:00,200895_02,10,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:11:00,12:11:00,200395_02,11,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:11:00,12:11:00,200153_02,12,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:12:00,12:12:00,201100_02,13,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:13:00,12:13:00,200981_02,14,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:14:00,12:14:00,200872_02,15,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:15:00,12:15:00,201056_02,16,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:17:00,12:17:00,200189_02,17,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:20:00,12:20:00,200273_01,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:22:00,12:22:00,200722_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:23:00,12:23:00,200343_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:24:00,12:24:00,200348_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:26:00,12:26:00,201071_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:28:00,12:28:00,200542_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:30:00,12:30:00,200141_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:31:00,12:31:00,200142_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:33:00,12:33:00,200262_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:34:00,12:34:00,201015_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:35:00,12:35:00,200379_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:36:00,12:36:00,200455_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:37:00,12:37:00,200702_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:38:00,12:38:00,200703_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:40:00,12:40:00,201081_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:42:00,12:42:00,200998_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時00分_系統663,12:45:00,12:45:00,200718_04,34,けやきウォーク前橋,0,0,1
土曜_12時00分_系統663,12:47:00,12:47:00,200108_01,35,けやきウォーク前橋,0,0,1
土曜_12時00分_系統663,12:48:00,12:48:00,200932_01,36,けやきウォーク前橋,0,0,1
土曜_12時00分_系統663,12:49:00,12:49:00,200668_01,37,けやきウォーク前橋,0,0,1
土曜_12時00分_系統663,12:53:00,12:53:00,200022_01,38,けやきウォーク前橋,1,0,1
土曜_12時10分_系統644,12:10:00,12:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
土曜_12時10分_系統644,12:11:00,12:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_12時10分_系統644,12:13:00,12:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_12時10分_系統644,12:15:00,12:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_12時10分_系統644,12:16:00,12:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_12時10分_系統644,12:17:00,12:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_12時10分_系統644,12:18:00,12:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_12時10分_系統644,12:19:00,12:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_12時10分_系統644,12:20:00,12:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_12時10分_系統644,12:21:00,12:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_12時10分_系統644,12:23:00,12:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:24:00,12:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:25:00,12:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:26:00,12:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:27:00,12:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:29:00,12:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:31:00,12:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:32:00,12:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:33:00,12:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:35:00,12:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
土曜_12時10分_系統644,12:42:00,12:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
土曜_12時30分_系統267,12:30:00,12:30:00,200463_01,1,前橋駅,0,1,1
土曜_12時30分_系統267,12:31:00,12:31:00,200768_02,2,前橋駅,0,0,1
土曜_12時30分_系統267,12:32:00,12:32:00,200730_02,3,前橋駅,0,0,1
土曜_12時30分_系統267,12:34:00,12:34:00,200827_02,4,前橋駅,0,0,1
土曜_12時30分_系統267,12:35:00,12:35:00,200506_02,5,前橋駅,0,0,1
土曜_12時30分_系統267,12:36:00,12:36:00,200017_02,6,前橋駅,0,0,1
土曜_12時30分_系統267,12:37:00,12:37:00,200519_02,7,前橋駅,0,0,1
土曜_12時30分_系統267,12:37:00,12:37:00,200987_02,8,前橋駅,0,0,1
土曜_12時30分_系統267,12:39:00,12:39:00,200985_02,9,前橋駅,0,0,1
土曜_12時30分_系統267,12:40:00,12:40:00,200895_02,10,前橋駅,0,0,1
土曜_12時30分_系統267,12:41:00,12:41:00,200395_02,11,前橋駅,0,0,1
土曜_12時30分_系統267,12:41:00,12:41:00,200153_02,12,前橋駅,0,0,1
土曜_12時30分_系統267,12:42:00,12:42:00,201100_02,13,前橋駅,0,0,1
土曜_12時30分_系統267,12:43:00,12:43:00,200981_02,14,前橋駅,0,0,1
土曜_12時30分_系統267,12:44:00,12:44:00,200872_02,15,前橋駅,0,0,1
土曜_12時30分_系統267,12:45:00,12:45:00,201056_02,16,前橋駅,0,0,1
土曜_12時30分_系統267,12:47:00,12:47:00,200189_02,17,前橋駅,0,0,1
土曜_12時30分_系統267,12:48:00,12:48:00,200722_02,18,前橋駅,0,0,1
土曜_12時30分_系統267,12:49:00,12:49:00,200343_02,19,前橋駅,0,0,1
土曜_12時30分_系統267,12:50:00,12:50:00,200348_02,20,前橋駅,0,0,1
土曜_12時30分_系統267,12:52:00,12:52:00,201071_02,21,前橋駅,0,0,1
土曜_12時30分_系統267,12:54:00,12:54:00,200542_02,22,前橋駅,0,0,1
土曜_12時30分_系統267,12:56:00,12:56:00,200141_02,23,前橋駅,0,0,1
土曜_12時30分_系統267,12:57:00,12:57:00,200142_02,24,前橋駅,0,0,1
土曜_12時30分_系統267,12:59:00,12:59:00,200262_02,25,前橋駅,0,0,1
土曜_12時30分_系統267,13:00:00,13:00:00,201015_02,26,前橋駅,0,0,1
土曜_12時30分_系統267,13:01:00,13:01:00,200379_02,27,前橋駅,0,0,1
土曜_12時30分_系統267,13:02:00,13:02:00,200455_02,28,前橋駅,0,0,1
土曜_12時30分_系統267,13:03:00,13:03:00,200702_02,29,前橋駅,0,0,1
土曜_12時30分_系統267,13:04:00,13:04:00,200703_02,30,前橋駅,0,0,1
土曜_12時30分_系統267,13:06:00,13:06:00,201081_02,31,前橋駅,0,0,1
土曜_12時30分_系統267,13:08:00,13:08:00,200998_02,32,前橋駅,0,0,1
土曜_12時30分_系統267,13:11:00,13:11:00,200718_10,33,前橋駅,1,0,1
土曜_12時30分_系統266,12:30:00,12:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
土曜_12時30分_系統266,12:31:00,12:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:33:00,12:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:35:00,12:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:36:00,12:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:38:00,12:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:39:00,12:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:40:00,12:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:41:00,12:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:42:00,12:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:43:00,12:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:44:00,12:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:46:00,12:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:48:00,12:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:49:00,12:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:50:00,12:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_12時30分_系統266,12:52:00,12:52:00,200273_01,17,渋川駅,0,0,1
土曜_12時30分_系統266,12:55:00,12:55:00,200189_01,18,渋川駅,0,0,1
土曜_12時30分_系統266,12:57:00,12:57:00,201056_01,19,渋川駅,0,0,1
土曜_12時30分_系統266,12:58:00,12:58:00,200872_01,20,渋川駅,0,0,1
土曜_12時30分_系統266,12:59:00,12:59:00,200981_01,21,渋川駅,0,0,1
土曜_12時30分_系統266,13:00:00,13:00:00,201100_01,22,渋川駅,0,0,1
土曜_12時30分_系統266,13:01:00,13:01:00,200153_01,23,渋川駅,0,0,1
土曜_12時30分_系統266,13:01:00,13:01:00,200395_01,24,渋川駅,0,0,1
土曜_12時30分_系統266,13:02:00,13:02:00,200895_01,25,渋川駅,0,0,1
土曜_12時30分_系統266,13:03:00,13:03:00,200985_01,26,渋川駅,0,0,1
土曜_12時30分_系統266,13:03:00,13:03:00,200987_01,27,渋川駅,0,0,1
土曜_12時30分_系統266,13:04:00,13:04:00,200519_01,28,渋川駅,0,0,1
土曜_12時30分_系統266,13:05:00,13:05:00,200017_01,29,渋川駅,0,0,1
土曜_12時30分_系統266,13:06:00,13:06:00,200506_01,30,渋川駅,0,0,1
土曜_12時30分_系統266,13:08:00,13:08:00,200827_01,31,渋川駅,0,0,1
土曜_12時30分_系統266,13:10:00,13:10:00,200730_01,32,渋川駅,0,0,1
土曜_12時30分_系統266,13:11:00,13:11:00,200768_01,33,渋川駅,0,0,1
土曜_12時30分_系統266,13:14:00,13:14:00,200463_10,34,渋川駅,1,0,1
土曜_12時47分_系統662,12:47:00,12:47:00,200022_01,1,渋川駅（前橋駅・渋川市内循環 経由）,0,1,1
土曜_12時47分_系統662,12:50:00,12:50:00,200668_02,2,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,12:51:00,12:51:00,200932_02,3,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,12:52:00,12:52:00,200108_02,4,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,12:57:00,12:57:00,200718_02,5,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,12:58:00,12:58:00,200998_01,6,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:00:00,13:00:00,201081_01,7,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:02:00,13:02:00,200703_01,8,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:03:00,13:03:00,200702_01,9,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:05:00,13:05:00,200455_01,10,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:06:00,13:06:00,200379_01,11,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:07:00,13:07:00,201015_01,12,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:08:00,13:08:00,200262_01,13,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:09:00,13:09:00,200142_01,14,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:10:00,13:10:00,200141_01,15,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:11:00,13:11:00,200542_01,16,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:13:00,13:13:00,201071_01,17,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:15:00,13:15:00,200348_01,18,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:16:00,13:16:00,200343_01,19,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:17:00,13:17:00,200722_01,20,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:19:00,13:19:00,200189_01,21,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:21:00,13:21:00,201056_01,22,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:22:00,13:22:00,200872_01,23,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:23:00,13:23:00,200981_01,24,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:24:00,13:24:00,201100_01,25,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:25:00,13:25:00,200153_01,26,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:25:00,13:25:00,200395_01,27,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:26:00,13:26:00,200895_01,28,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:27:00,13:27:00,200985_01,29,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:27:00,13:27:00,200987_01,30,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:28:00,13:28:00,200519_01,31,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:29:00,13:29:00,200017_01,32,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:30:00,13:30:00,200506_01,33,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:32:00,13:32:00,200827_01,34,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:34:00,13:34:00,200730_01,35,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:35:00,13:35:00,200768_01,36,渋川駅（渋川市内循環 経由）,0,0,1
土曜_12時47分_系統662,13:36:00,13:36:00,200463_06,37,渋川市内循環,0,0,1
土曜_12時47分_系統662,13:37:00,13:37:00,200468_01,38,渋川市内循環,0,0,1
土曜_12時47分_系統662,13:39:00,13:39:00,200466_01,39,渋川市内循環,0,0,1
土曜_12時47分_系統662,13:40:00,13:40:00,200704_01,40,渋川市内循環,0,0,1
土曜_12時47分_系統662,13:41:00,13:41:00,200476_02,41,渋川市内循環,0,0,1
土曜_12時47分_系統662,13:42:00,13:42:00,200477_02,42,渋川市内循環,0,0,1
土曜_12時47分_系統662,13:43:00,13:43:00,200430_02,43,渋川市内循環,0,0,1
土曜_12時47分_系統662,13:44:00,13:44:00,200007_02,44,渋川市内循環,0,0,1
土曜_12時47分_系統662,13:49:00,13:49:00,210463_10,45,渋川市内循環,1,0,1
土曜_12時50分_系統645,12:50:00,12:50:00,201440_01,1,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,1,1
土曜_12時50分_系統645,12:55:00,12:55:00,200189_02,2,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,12:57:00,12:57:00,200722_02,3,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,12:58:00,12:58:00,200343_02,4,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,12:59:00,12:59:00,200348_02,5,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:02:00,13:02:00,201185_02,6,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:05:00,13:05:00,200927_01,7,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:05:00,13:05:00,200800_02,8,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:06:00,13:06:00,200928_02,9,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:08:00,13:08:00,201071_02,10,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:10:00,13:10:00,200542_02,11,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:12:00,13:12:00,200141_02,12,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:14:00,13:14:00,200142_02,13,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:15:00,13:15:00,200503_01,14,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:17:00,13:17:00,200261_01,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:18:00,13:18:00,200503_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:21:00,13:21:00,200262_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:22:00,13:22:00,201015_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:23:00,13:23:00,200379_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:24:00,13:24:00,200455_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:25:00,13:25:00,200702_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:26:00,13:26:00,200703_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:28:00,13:28:00,201081_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:30:00,13:30:00,200998_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_12時50分_系統645,13:33:00,13:33:00,200718_04,25,けやきウォーク前橋,0,0,1
土曜_12時50分_系統645,13:35:00,13:35:00,200108_01,26,けやきウォーク前橋,0,0,1
土曜_12時50分_系統645,13:36:00,13:36:00,200932_01,27,けやきウォーク前橋,0,0,1
土曜_12時50分_系統645,13:37:00,13:37:00,200668_01,28,けやきウォーク前橋,0,0,1
土曜_12時50分_系統645,13:41:00,13:41:00,200022_01,29,けやきウォーク前橋,1,0,1
土曜_12時52分_系統261,12:52:00,12:52:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
土曜_12時52分_系統261,12:53:00,12:53:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
土曜_12時52分_系統261,12:54:00,12:54:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
土曜_12時52分_系統261,12:55:00,12:55:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
土曜_12時52分_系統261,12:56:00,12:56:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
土曜_12時52分_系統261,12:57:00,12:57:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
土曜_12時52分_系統261,12:58:00,12:58:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
土曜_12時52分_系統261,12:59:00,12:59:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
土曜_12時52分_系統261,13:00:00,13:00:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
土曜_12時52分_系統261,13:05:00,13:05:00,200463_01,10,前橋駅,0,0,1
土曜_12時52分_系統261,13:06:00,13:06:00,200768_02,11,前橋駅,0,0,1
土曜_12時52分_系統261,13:07:00,13:07:00,200730_02,12,前橋駅,0,0,1
土曜_12時52分_系統261,13:09:00,13:09:00,200827_02,13,前橋駅,0,0,1
土曜_12時52分_系統261,13:10:00,13:10:00,200506_02,14,前橋駅,0,0,1
土曜_12時52分_系統261,13:11:00,13:11:00,200017_02,15,前橋駅,0,0,1
土曜_12時52分_系統261,13:12:00,13:12:00,200519_02,16,前橋駅,0,0,1
土曜_12時52分_系統261,13:12:00,13:12:00,200987_02,17,前橋駅,0,0,1
土曜_12時52分_系統261,13:14:00,13:14:00,200985_02,18,前橋駅,0,0,1
土曜_12時52分_系統261,13:15:00,13:15:00,200895_02,19,前橋駅,0,0,1
土曜_12時52分_系統261,13:16:00,13:16:00,200395_02,20,前橋駅,0,0,1
土曜_12時52分_系統261,13:16:00,13:16:00,200153_02,21,前橋駅,0,0,1
土曜_12時52分_系統261,13:17:00,13:17:00,201100_02,22,前橋駅,0,0,1
土曜_12時52分_系統261,13:18:00,13:18:00,200981_02,23,前橋駅,0,0,1
土曜_12時52分_系統261,13:19:00,13:19:00,200872_02,24,前橋駅,0,0,1
土曜_12時52分_系統261,13:20:00,13:20:00,201056_02,25,前橋駅,0,0,1
土曜_12時52分_系統261,13:22:00,13:22:00,200189_02,26,前橋駅,0,0,1
土曜_12時52分_系統261,13:23:00,13:23:00,200722_02,27,前橋駅,0,0,1
土曜_12時52分_系統261,13:24:00,13:24:00,200343_02,28,前橋駅,0,0,1
土曜_12時52分_系統261,13:25:00,13:25:00,200348_02,29,前橋駅,0,0,1
土曜_12時52分_系統261,13:27:00,13:27:00,201071_02,30,前橋駅,0,0,1
土曜_12時52分_系統261,13:29:00,13:29:00,200542_02,31,前橋駅,0,0,1
土曜_12時52分_系統261,13:31:00,13:31:00,200141_02,32,前橋駅,0,0,1
土曜_12時52分_系統261,13:32:00,13:32:00,200142_02,33,前橋駅,0,0,1
土曜_12時52分_系統261,13:34:00,13:34:00,200262_02,34,前橋駅,0,0,1
土曜_12時52分_系統261,13:35:00,13:35:00,201015_02,35,前橋駅,0,0,1
土曜_12時52分_系統261,13:36:00,13:36:00,200379_02,36,前橋駅,0,0,1
土曜_12時52分_系統261,13:37:00,13:37:00,200455_02,37,前橋駅,0,0,1
土曜_12時52分_系統261,13:38:00,13:38:00,200702_02,38,前橋駅,0,0,1
土曜_12時52分_系統261,13:39:00,13:39:00,200703_02,39,前橋駅,0,0,1
土曜_12時52分_系統261,13:41:00,13:41:00,201081_02,40,前橋駅,0,0,1
土曜_12時52分_系統261,13:43:00,13:43:00,200998_02,41,前橋駅,0,0,1
土曜_12時52分_系統261,13:46:00,13:46:00,200718_10,42,前橋駅,1,0,1
土曜_13時10分_系統584,13:10:00,13:10:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
土曜_13時10分_系統584,13:11:00,13:11:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:13:00,13:13:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:15:00,13:15:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:16:00,13:16:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:18:00,13:18:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:19:00,13:19:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:20:00,13:20:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:21:00,13:21:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:22:00,13:22:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:24:00,13:24:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:25:00,13:25:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:26:00,13:26:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:27:00,13:27:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:28:00,13:28:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:30:00,13:30:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:31:00,13:31:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:32:00,13:32:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_13時10分_系統584,13:34:00,13:34:00,200927_01,19,群馬大学荒牧,0,0,1
土曜_13時10分_系統584,13:35:00,13:35:00,201185_01,20,群馬大学荒牧,0,0,1
土曜_13時10分_系統584,13:39:00,13:39:00,200348_01,21,群馬大学荒牧,0,0,1
土曜_13時10分_系統584,13:40:00,13:40:00,200343_01,22,群馬大学荒牧,0,0,1
土曜_13時10分_系統584,13:41:00,13:41:00,200722_01,23,群馬大学荒牧,0,0,1
土曜_13時10分_系統584,13:44:00,13:44:00,200273_01,24,群馬大学荒牧,1,0,1
土曜_13時30分_系統267,13:30:00,13:30:00,200463_01,1,前橋駅,0,1,1
土曜_13時30分_系統267,13:31:00,13:31:00,200768_02,2,前橋駅,0,0,1
土曜_13時30分_系統267,13:32:00,13:32:00,200730_02,3,前橋駅,0,0,1
土曜_13時30分_系統267,13:34:00,13:34:00,200827_02,4,前橋駅,0,0,1
土曜_13時30分_系統267,13:35:00,13:35:00,200506_02,5,前橋駅,0,0,1
土曜_13時30分_系統267,13:36:00,13:36:00,200017_02,6,前橋駅,0,0,1
土曜_13時30分_系統267,13:37:00,13:37:00,200519_02,7,前橋駅,0,0,1
土曜_13時30分_系統267,13:37:00,13:37:00,200987_02,8,前橋駅,0,0,1
土曜_13時30分_系統267,13:39:00,13:39:00,200985_02,9,前橋駅,0,0,1
土曜_13時30分_系統267,13:40:00,13:40:00,200895_02,10,前橋駅,0,0,1
土曜_13時30分_系統267,13:41:00,13:41:00,200395_02,11,前橋駅,0,0,1
土曜_13時30分_系統267,13:41:00,13:41:00,200153_02,12,前橋駅,0,0,1
土曜_13時30分_系統267,13:42:00,13:42:00,201100_02,13,前橋駅,0,0,1
土曜_13時30分_系統267,13:43:00,13:43:00,200981_02,14,前橋駅,0,0,1
土曜_13時30分_系統267,13:44:00,13:44:00,200872_02,15,前橋駅,0,0,1
土曜_13時30分_系統267,13:45:00,13:45:00,201056_02,16,前橋駅,0,0,1
土曜_13時30分_系統267,13:47:00,13:47:00,200189_02,17,前橋駅,0,0,1
土曜_13時30分_系統267,13:48:00,13:48:00,200722_02,18,前橋駅,0,0,1
土曜_13時30分_系統267,13:49:00,13:49:00,200343_02,19,前橋駅,0,0,1
土曜_13時30分_系統267,13:50:00,13:50:00,200348_02,20,前橋駅,0,0,1
土曜_13時30分_系統267,13:52:00,13:52:00,201071_02,21,前橋駅,0,0,1
土曜_13時30分_系統267,13:54:00,13:54:00,200542_02,22,前橋駅,0,0,1
土曜_13時30分_系統267,13:56:00,13:56:00,200141_02,23,前橋駅,0,0,1
土曜_13時30分_系統267,13:57:00,13:57:00,200142_02,24,前橋駅,0,0,1
土曜_13時30分_系統267,13:59:00,13:59:00,200262_02,25,前橋駅,0,0,1
土曜_13時30分_系統267,14:00:00,14:00:00,201015_02,26,前橋駅,0,0,1
土曜_13時30分_系統267,14:01:00,14:01:00,200379_02,27,前橋駅,0,0,1
土曜_13時30分_系統267,14:02:00,14:02:00,200455_02,28,前橋駅,0,0,1
土曜_13時30分_系統267,14:03:00,14:03:00,200702_02,29,前橋駅,0,0,1
土曜_13時30分_系統267,14:04:00,14:04:00,200703_02,30,前橋駅,0,0,1
土曜_13時30分_系統267,14:06:00,14:06:00,201081_02,31,前橋駅,0,0,1
土曜_13時30分_系統267,14:08:00,14:08:00,200998_02,32,前橋駅,0,0,1
土曜_13時30分_系統267,14:11:00,14:11:00,200718_10,33,前橋駅,1,0,1
土曜_13時30分_系統262,13:30:00,13:30:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
土曜_13時30分_系統262,13:31:00,13:31:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:33:00,13:33:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:35:00,13:35:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:36:00,13:36:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:38:00,13:38:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:39:00,13:39:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:40:00,13:40:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:41:00,13:41:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:42:00,13:42:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:43:00,13:43:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:44:00,13:44:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:46:00,13:46:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:48:00,13:48:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:49:00,13:49:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:50:00,13:50:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:52:00,13:52:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:54:00,13:54:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:55:00,13:55:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:56:00,13:56:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:57:00,13:57:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:58:00,13:58:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:58:00,13:58:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,13:59:00,13:59:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,14:00:00,14:00:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,14:00:00,14:00:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,14:01:00,14:01:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,14:02:00,14:02:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,14:03:00,14:03:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,14:05:00,14:05:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,14:07:00,14:07:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,14:08:00,14:08:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
土曜_13時30分_系統262,14:09:00,14:09:00,200463_06,33,渋川市内循環,0,0,1
土曜_13時30分_系統262,14:10:00,14:10:00,200468_01,34,渋川市内循環,0,0,1
土曜_13時30分_系統262,14:12:00,14:12:00,200466_01,35,渋川市内循環,0,0,1
土曜_13時30分_系統262,14:13:00,14:13:00,200704_01,36,渋川市内循環,0,0,1
土曜_13時30分_系統262,14:14:00,14:14:00,200476_02,37,渋川市内循環,0,0,1
土曜_13時30分_系統262,14:15:00,14:15:00,200477_02,38,渋川市内循環,0,0,1
土曜_13時30分_系統262,14:16:00,14:16:00,200430_02,39,渋川市内循環,0,0,1
土曜_13時30分_系統262,14:17:00,14:17:00,200007_02,40,渋川市内循環,0,0,1
土曜_13時30分_系統262,14:22:00,14:22:00,210463_10,41,渋川市内循環,1,0,1
土曜_13時55分_系統587,13:55:00,13:55:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
土曜_13時55分_系統587,13:57:00,13:57:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
土曜_13時55分_系統587,13:58:00,13:58:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
土曜_13時55分_系統587,13:59:00,13:59:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
土曜_13時55分_系統587,14:01:00,14:01:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
土曜_13時55分_系統587,14:03:00,14:03:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
土曜_13時55分_系統587,14:05:00,14:05:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
土曜_13時55分_系統587,14:07:00,14:07:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
土曜_13時55分_系統587,14:08:00,14:08:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
土曜_13時55分_系統587,14:10:00,14:10:00,200261_01,10,前橋駅,0,0,1
土曜_13時55分_系統587,14:11:00,14:11:00,200503_02,11,前橋駅,0,0,1
土曜_13時55分_系統587,14:14:00,14:14:00,200262_02,12,前橋駅,0,0,1
土曜_13時55分_系統587,14:15:00,14:15:00,201015_02,13,前橋駅,0,0,1
土曜_13時55分_系統587,14:16:00,14:16:00,200379_02,14,前橋駅,0,0,1
土曜_13時55分_系統587,14:17:00,14:17:00,200455_02,15,前橋駅,0,0,1
土曜_13時55分_系統587,14:18:00,14:18:00,200702_02,16,前橋駅,0,0,1
土曜_13時55分_系統587,14:19:00,14:19:00,200703_02,17,前橋駅,0,0,1
土曜_13時55分_系統587,14:21:00,14:21:00,201081_02,18,前橋駅,0,0,1
土曜_13時55分_系統587,14:23:00,14:23:00,200998_02,19,前橋駅,0,0,1
土曜_13時55分_系統587,14:26:00,14:26:00,200718_10,20,前橋駅,1,0,1
土曜_13時57分_系統268,13:57:00,13:57:00,200718_02,1,渋川駅,0,1,1
土曜_13時57分_系統268,13:58:00,13:58:00,200998_01,2,渋川駅,0,0,1
土曜_13時57分_系統268,14:00:00,14:00:00,201081_01,3,渋川駅,0,0,1
土曜_13時57分_系統268,14:02:00,14:02:00,200703_01,4,渋川駅,0,0,1
土曜_13時57分_系統268,14:03:00,14:03:00,200702_01,5,渋川駅,0,0,1
土曜_13時57分_系統268,14:04:00,14:04:00,200455_01,6,渋川駅,0,0,1
土曜_13時57分_系統268,14:05:00,14:05:00,200379_01,7,渋川駅,0,0,1
土曜_13時57分_系統268,14:06:00,14:06:00,201015_01,8,渋川駅,0,0,1
土曜_13時57分_系統268,14:07:00,14:07:00,200262_01,9,渋川駅,0,0,1
土曜_13時57分_系統268,14:08:00,14:08:00,200142_01,10,渋川駅,0,0,1
土曜_13時57分_系統268,14:09:00,14:09:00,200141_01,11,渋川駅,0,0,1
土曜_13時57分_系統268,14:10:00,14:10:00,200542_01,12,渋川駅,0,0,1
土曜_13時57分_系統268,14:12:00,14:12:00,201071_01,13,渋川駅,0,0,1
土曜_13時57分_系統268,14:14:00,14:14:00,200348_01,14,渋川駅,0,0,1
土曜_13時57分_系統268,14:15:00,14:15:00,200343_01,15,渋川駅,0,0,1
土曜_13時57分_系統268,14:16:00,14:16:00,200722_01,16,渋川駅,0,0,1
土曜_13時57分_系統268,14:18:00,14:18:00,200189_01,17,渋川駅,0,0,1
土曜_13時57分_系統268,14:20:00,14:20:00,201056_01,18,渋川駅,0,0,1
土曜_13時57分_系統268,14:21:00,14:21:00,200872_01,19,渋川駅,0,0,1
土曜_13時57分_系統268,14:22:00,14:22:00,200981_01,20,渋川駅,0,0,1
土曜_13時57分_系統268,14:23:00,14:23:00,201100_01,21,渋川駅,0,0,1
土曜_13時57分_系統268,14:24:00,14:24:00,200153_01,22,渋川駅,0,0,1
土曜_13時57分_系統268,14:24:00,14:24:00,200395_01,23,渋川駅,0,0,1
土曜_13時57分_系統268,14:25:00,14:25:00,200895_01,24,渋川駅,0,0,1
土曜_13時57分_系統268,14:26:00,14:26:00,200985_01,25,渋川駅,0,0,1
土曜_13時57分_系統268,14:26:00,14:26:00,200987_01,26,渋川駅,0,0,1
土曜_13時57分_系統268,14:27:00,14:27:00,200519_01,27,渋川駅,0,0,1
土曜_13時57分_系統268,14:28:00,14:28:00,200017_01,28,渋川駅,0,0,1
土曜_13時57分_系統268,14:29:00,14:29:00,200506_01,29,渋川駅,0,0,1
土曜_13時57分_系統268,14:31:00,14:31:00,200827_01,30,渋川駅,0,0,1
土曜_13時57分_系統268,14:33:00,14:33:00,200730_01,31,渋川駅,0,0,1
土曜_13時57分_系統268,14:34:00,14:34:00,200768_01,32,渋川駅,0,0,1
土曜_13時57分_系統268,14:37:00,14:37:00,200463_10,33,渋川駅,1,0,1
土曜_14時00分_系統265,14:00:00,14:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
土曜_14時00分_系統265,14:01:00,14:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:02:00,14:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:04:00,14:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:05:00,14:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:06:00,14:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:07:00,14:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:07:00,14:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:09:00,14:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:10:00,14:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:11:00,14:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:11:00,14:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:12:00,14:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:13:00,14:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:14:00,14:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:15:00,14:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:17:00,14:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_14時00分_系統265,14:20:00,14:20:00,200273_01,18,前橋駅,0,0,1
土曜_14時00分_系統265,14:22:00,14:22:00,200722_02,19,前橋駅,0,0,1
土曜_14時00分_系統265,14:23:00,14:23:00,200343_02,20,前橋駅,0,0,1
土曜_14時00分_系統265,14:24:00,14:24:00,200348_02,21,前橋駅,0,0,1
土曜_14時00分_系統265,14:26:00,14:26:00,201071_02,22,前橋駅,0,0,1
土曜_14時00分_系統265,14:28:00,14:28:00,200542_02,23,前橋駅,0,0,1
土曜_14時00分_系統265,14:30:00,14:30:00,200141_02,24,前橋駅,0,0,1
土曜_14時00分_系統265,14:31:00,14:31:00,200142_02,25,前橋駅,0,0,1
土曜_14時00分_系統265,14:33:00,14:33:00,200262_02,26,前橋駅,0,0,1
土曜_14時00分_系統265,14:34:00,14:34:00,201015_02,27,前橋駅,0,0,1
土曜_14時00分_系統265,14:35:00,14:35:00,200379_02,28,前橋駅,0,0,1
土曜_14時00分_系統265,14:36:00,14:36:00,200455_02,29,前橋駅,0,0,1
土曜_14時00分_系統265,14:37:00,14:37:00,200702_02,30,前橋駅,0,0,1
土曜_14時00分_系統265,14:38:00,14:38:00,200703_02,31,前橋駅,0,0,1
土曜_14時00分_系統265,14:40:00,14:40:00,201081_02,32,前橋駅,0,0,1
土曜_14時00分_系統265,14:42:00,14:42:00,200998_02,33,前橋駅,0,0,1
土曜_14時00分_系統265,14:45:00,14:45:00,200718_10,34,前橋駅,1,0,1
土曜_14時10分_系統644,14:10:00,14:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
土曜_14時10分_系統644,14:11:00,14:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_14時10分_系統644,14:13:00,14:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_14時10分_系統644,14:15:00,14:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_14時10分_系統644,14:16:00,14:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_14時10分_系統644,14:17:00,14:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_14時10分_系統644,14:18:00,14:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_14時10分_系統644,14:19:00,14:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_14時10分_系統644,14:20:00,14:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_14時10分_系統644,14:21:00,14:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
土曜_14時10分_系統644,14:23:00,14:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:24:00,14:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:25:00,14:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:26:00,14:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:27:00,14:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:29:00,14:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:31:00,14:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:32:00,14:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:33:00,14:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:35:00,14:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
土曜_14時10分_系統644,14:42:00,14:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
土曜_14時20分_系統661,14:20:00,14:20:00,210463_05,1,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,1,1
土曜_14時20分_系統661,14:21:00,14:21:00,200007_01,2,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:22:00,14:22:00,200430_01,3,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:23:00,14:23:00,200477_01,4,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:24:00,14:24:00,200476_01,5,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:25:00,14:25:00,200704_02,6,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:26:00,14:26:00,200467_01,7,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:27:00,14:27:00,200466_02,8,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:28:00,14:28:00,200468_02,9,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:33:00,14:33:00,200463_01,10,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:34:00,14:34:00,200768_02,11,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:35:00,14:35:00,200730_02,12,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:37:00,14:37:00,200827_02,13,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:38:00,14:38:00,200506_02,14,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:39:00,14:39:00,200017_02,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:40:00,14:40:00,200519_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:40:00,14:40:00,200987_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:42:00,14:42:00,200985_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:43:00,14:43:00,200895_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:44:00,14:44:00,200395_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:44:00,14:44:00,200153_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:45:00,14:45:00,201100_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:46:00,14:46:00,200981_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:47:00,14:47:00,200872_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:48:00,14:48:00,201056_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:50:00,14:50:00,200189_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:52:00,14:52:00,200722_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:53:00,14:53:00,200343_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:54:00,14:54:00,200348_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:56:00,14:56:00,201071_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,14:58:00,14:58:00,200542_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:00:00,15:00:00,200141_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:01:00,15:01:00,200142_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:03:00,15:03:00,200262_02,34,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:04:00,15:04:00,201015_02,35,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:05:00,15:05:00,200379_02,36,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:06:00,15:06:00,200455_02,37,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:07:00,15:07:00,200702_02,38,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:08:00,15:08:00,200703_02,39,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:10:00,15:10:00,201081_02,40,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:12:00,15:12:00,200998_02,41,けやきウォーク前橋（前橋駅 経由）,0,0,1
土曜_14時20分_系統661,15:15:00,15:15:00,200718_04,42,けやきウォーク前橋,0,0,1
土曜_14時20分_系統661,15:17:00,15:17:00,200108_01,43,けやきウォーク前橋,0,0,1
土曜_14時20分_系統661,15:18:00,15:18:00,200932_01,44,けやきウォーク前橋,0,0,1
土曜_14時20分_系統661,15:19:00,15:19:00,200668_01,45,けやきウォーク前橋,0,0,1
土曜_14時20分_系統661,15:23:00,15:23:00,200022_01,46,けやきウォーク前橋,1,0,1
土曜_14時30分_系統266,14:30:00,14:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
土曜_14時30分_系統266,14:31:00,14:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:33:00,14:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:35:00,14:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:36:00,14:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:38:00,14:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:39:00,14:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:40:00,14:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:41:00,14:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:42:00,14:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:43:00,14:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:44:00,14:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:46:00,14:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:48:00,14:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:49:00,14:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:50:00,14:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_14時30分_系統266,14:52:00,14:52:00,200273_01,17,渋川駅,0,0,1
土曜_14時30分_系統266,14:55:00,14:55:00,200189_01,18,渋川駅,0,0,1
土曜_14時30分_系統266,14:57:00,14:57:00,201056_01,19,渋川駅,0,0,1
土曜_14時30分_系統266,14:58:00,14:58:00,200872_01,20,渋川駅,0,0,1
土曜_14時30分_系統266,14:59:00,14:59:00,200981_01,21,渋川駅,0,0,1
土曜_14時30分_系統266,15:00:00,15:00:00,201100_01,22,渋川駅,0,0,1
土曜_14時30分_系統266,15:01:00,15:01:00,200153_01,23,渋川駅,0,0,1
土曜_14時30分_系統266,15:01:00,15:01:00,200395_01,24,渋川駅,0,0,1
土曜_14時30分_系統266,15:02:00,15:02:00,200895_01,25,渋川駅,0,0,1
土曜_14時30分_系統266,15:03:00,15:03:00,200985_01,26,渋川駅,0,0,1
土曜_14時30分_系統266,15:03:00,15:03:00,200987_01,27,渋川駅,0,0,1
土曜_14時30分_系統266,15:04:00,15:04:00,200519_01,28,渋川駅,0,0,1
土曜_14時30分_系統266,15:05:00,15:05:00,200017_01,29,渋川駅,0,0,1
土曜_14時30分_系統266,15:06:00,15:06:00,200506_01,30,渋川駅,0,0,1
土曜_14時30分_系統266,15:08:00,15:08:00,200827_01,31,渋川駅,0,0,1
土曜_14時30分_系統266,15:10:00,15:10:00,200730_01,32,渋川駅,0,0,1
土曜_14時30分_系統266,15:11:00,15:11:00,200768_01,33,渋川駅,0,0,1
土曜_14時30分_系統266,15:14:00,15:14:00,200463_10,34,渋川駅,1,0,1
土曜_14時50分_系統643,14:50:00,14:50:00,201440_01,1,前橋駅（南橘団地・群大病院 経由）,0,1,1
土曜_14時50分_系統643,14:55:00,14:55:00,200189_02,2,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_14時50分_系統643,14:57:00,14:57:00,200722_02,3,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_14時50分_系統643,14:58:00,14:58:00,200343_02,4,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_14時50分_系統643,14:59:00,14:59:00,200348_02,5,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:02:00,15:02:00,201185_02,6,前橋駅（南橘団地・群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:05:00,15:05:00,200927_01,7,前橋駅（群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:05:00,15:05:00,200800_02,8,前橋駅（群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:06:00,15:06:00,200928_02,9,前橋駅（群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:08:00,15:08:00,201071_02,10,前橋駅（群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:10:00,15:10:00,200542_02,11,前橋駅（群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:12:00,15:12:00,200141_02,12,前橋駅（群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:13:00,15:13:00,200142_02,13,前橋駅（群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:14:00,15:14:00,200503_01,14,前橋駅（群大病院 経由）,0,0,1
土曜_14時50分_系統643,15:16:00,15:16:00,200261_01,15,前橋駅,0,0,1
土曜_14時50分_系統643,15:17:00,15:17:00,200503_02,16,前橋駅,0,0,1
土曜_14時50分_系統643,15:19:00,15:19:00,200262_02,17,前橋駅,0,0,1
土曜_14時50分_系統643,15:20:00,15:20:00,201015_02,18,前橋駅,0,0,1
土曜_14時50分_系統643,15:22:00,15:22:00,200379_02,19,前橋駅,0,0,1
土曜_14時50分_系統643,15:23:00,15:23:00,200455_02,20,前橋駅,0,0,1
土曜_14時50分_系統643,15:25:00,15:25:00,200702_02,21,前橋駅,0,0,1
土曜_14時50分_系統643,15:27:00,15:27:00,200703_02,22,前橋駅,0,0,1
土曜_14時50分_系統643,15:29:00,15:29:00,201081_02,23,前橋駅,0,0,1
土曜_14時50分_系統643,15:31:00,15:31:00,200998_02,24,前橋駅,0,0,1
土曜_14時50分_系統643,15:34:00,15:34:00,200718_10,25,前橋駅,1,0,1
土曜_14時55分_系統268,14:55:00,14:55:00,200718_02,1,渋川駅,0,1,1
土曜_14時55分_系統268,14:56:00,14:56:00,200998_01,2,渋川駅,0,0,1
土曜_14時55分_系統268,14:58:00,14:58:00,201081_01,3,渋川駅,0,0,1
土曜_14時55分_系統268,15:00:00,15:00:00,200703_01,4,渋川駅,0,0,1
土曜_14時55分_系統268,15:01:00,15:01:00,200702_01,5,渋川駅,0,0,1
土曜_14時55分_系統268,15:02:00,15:02:00,200455_01,6,渋川駅,0,0,1
土曜_14時55分_系統268,15:03:00,15:03:00,200379_01,7,渋川駅,0,0,1
土曜_14時55分_系統268,15:04:00,15:04:00,201015_01,8,渋川駅,0,0,1
土曜_14時55分_系統268,15:05:00,15:05:00,200262_01,9,渋川駅,0,0,1
土曜_14時55分_系統268,15:06:00,15:06:00,200142_01,10,渋川駅,0,0,1
土曜_14時55分_系統268,15:07:00,15:07:00,200141_01,11,渋川駅,0,0,1
土曜_14時55分_系統268,15:08:00,15:08:00,200542_01,12,渋川駅,0,0,1
土曜_14時55分_系統268,15:10:00,15:10:00,201071_01,13,渋川駅,0,0,1
土曜_14時55分_系統268,15:12:00,15:12:00,200348_01,14,渋川駅,0,0,1
土曜_14時55分_系統268,15:13:00,15:13:00,200343_01,15,渋川駅,0,0,1
土曜_14時55分_系統268,15:14:00,15:14:00,200722_01,16,渋川駅,0,0,1
土曜_14時55分_系統268,15:16:00,15:16:00,200189_01,17,渋川駅,0,0,1
土曜_14時55分_系統268,15:18:00,15:18:00,201056_01,18,渋川駅,0,0,1
土曜_14時55分_系統268,15:19:00,15:19:00,200872_01,19,渋川駅,0,0,1
土曜_14時55分_系統268,15:20:00,15:20:00,200981_01,20,渋川駅,0,0,1
土曜_14時55分_系統268,15:21:00,15:21:00,201100_01,21,渋川駅,0,0,1
土曜_14時55分_系統268,15:22:00,15:22:00,200153_01,22,渋川駅,0,0,1
土曜_14時55分_系統268,15:22:00,15:22:00,200395_01,23,渋川駅,0,0,1
土曜_14時55分_系統268,15:23:00,15:23:00,200895_01,24,渋川駅,0,0,1
土曜_14時55分_系統268,15:24:00,15:24:00,200985_01,25,渋川駅,0,0,1
土曜_14時55分_系統268,15:24:00,15:24:00,200987_01,26,渋川駅,0,0,1
土曜_14時55分_系統268,15:25:00,15:25:00,200519_01,27,渋川駅,0,0,1
土曜_14時55分_系統268,15:26:00,15:26:00,200017_01,28,渋川駅,0,0,1
土曜_14時55分_系統268,15:27:00,15:27:00,200506_01,29,渋川駅,0,0,1
土曜_14時55分_系統268,15:29:00,15:29:00,200827_01,30,渋川駅,0,0,1
土曜_14時55分_系統268,15:31:00,15:31:00,200730_01,31,渋川駅,0,0,1
土曜_14時55分_系統268,15:32:00,15:32:00,200768_01,32,渋川駅,0,0,1
土曜_14時55分_系統268,15:35:00,15:35:00,200463_10,33,渋川駅,1,0,1
土曜_15時00分_系統265,15:00:00,15:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
土曜_15時00分_系統265,15:01:00,15:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:02:00,15:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:04:00,15:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:05:00,15:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:06:00,15:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:07:00,15:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:07:00,15:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:09:00,15:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:10:00,15:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:11:00,15:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:11:00,15:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:12:00,15:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:13:00,15:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:14:00,15:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:15:00,15:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:17:00,15:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_15時00分_系統265,15:20:00,15:20:00,200273_01,18,前橋駅,0,0,1
土曜_15時00分_系統265,15:22:00,15:22:00,200722_02,19,前橋駅,0,0,1
土曜_15時00分_系統265,15:23:00,15:23:00,200343_02,20,前橋駅,0,0,1
土曜_15時00分_系統265,15:24:00,15:24:00,200348_02,21,前橋駅,0,0,1
土曜_15時00分_系統265,15:26:00,15:26:00,201071_02,22,前橋駅,0,0,1
土曜_15時00分_系統265,15:28:00,15:28:00,200542_02,23,前橋駅,0,0,1
土曜_15時00分_系統265,15:30:00,15:30:00,200141_02,24,前橋駅,0,0,1
土曜_15時00分_系統265,15:31:00,15:31:00,200142_02,25,前橋駅,0,0,1
土曜_15時00分_系統265,15:33:00,15:33:00,200262_02,26,前橋駅,0,0,1
土曜_15時00分_系統265,15:34:00,15:34:00,201015_02,27,前橋駅,0,0,1
土曜_15時00分_系統265,15:35:00,15:35:00,200379_02,28,前橋駅,0,0,1
土曜_15時00分_系統265,15:36:00,15:36:00,200455_02,29,前橋駅,0,0,1
土曜_15時00分_系統265,15:37:00,15:37:00,200702_02,30,前橋駅,0,0,1
土曜_15時00分_系統265,15:38:00,15:38:00,200703_02,31,前橋駅,0,0,1
土曜_15時00分_系統265,15:40:00,15:40:00,201081_02,32,前橋駅,0,0,1
土曜_15時00分_系統265,15:42:00,15:42:00,200998_02,33,前橋駅,0,0,1
土曜_15時00分_系統265,15:45:00,15:45:00,200718_10,34,前橋駅,1,0,1
土曜_15時00分_系統672,15:00:00,15:00:00,200022_01,1,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,1,1
土曜_15時00分_系統672,15:03:00,15:03:00,200668_02,2,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:04:00,15:04:00,200932_02,3,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:05:00,15:05:00,200108_02,4,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:10:00,15:10:00,200718_02,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:11:00,15:11:00,200998_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:13:00,15:13:00,201081_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:15:00,15:15:00,200703_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:16:00,15:16:00,200702_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:18:00,15:18:00,200455_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:19:00,15:19:00,200379_01,11,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:20:00,15:20:00,201015_01,12,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:21:00,15:21:00,200262_01,13,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:22:00,15:22:00,200503_01,14,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:24:00,15:24:00,200261_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:25:00,15:25:00,200503_02,16,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:26:00,15:26:00,200142_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:27:00,15:27:00,200141_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:28:00,15:28:00,200542_01,19,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:30:00,15:30:00,201071_01,20,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:31:00,15:31:00,200928_01,21,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:32:00,15:32:00,200800_01,22,群馬大学荒牧（南橘団地 経由）,0,0,1
土曜_15時00分_系統672,15:34:00,15:34:00,200927_01,23,群馬大学荒牧,0,0,1
土曜_15時00分_系統672,15:35:00,15:35:00,201185_01,24,群馬大学荒牧,0,0,1
土曜_15時00分_系統672,15:39:00,15:39:00,200348_01,25,群馬大学荒牧,0,0,1
土曜_15時00分_系統672,15:40:00,15:40:00,200343_01,26,群馬大学荒牧,0,0,1
土曜_15時00分_系統672,15:41:00,15:41:00,200722_01,27,群馬大学荒牧,0,0,1
土曜_15時00分_系統672,15:44:00,15:44:00,200273_01,28,群馬大学荒牧,1,0,1
土曜_15時30分_系統262,15:30:00,15:30:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
土曜_15時30分_系統262,15:31:00,15:31:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:33:00,15:33:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:35:00,15:35:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:36:00,15:36:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:38:00,15:38:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:39:00,15:39:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:40:00,15:40:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:41:00,15:41:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:42:00,15:42:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:43:00,15:43:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:44:00,15:44:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:46:00,15:46:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:48:00,15:48:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:49:00,15:49:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:50:00,15:50:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:52:00,15:52:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:54:00,15:54:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:55:00,15:55:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:56:00,15:56:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:57:00,15:57:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:58:00,15:58:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:58:00,15:58:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,15:59:00,15:59:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,16:00:00,16:00:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,16:00:00,16:00:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,16:01:00,16:01:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,16:02:00,16:02:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,16:03:00,16:03:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,16:05:00,16:05:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,16:07:00,16:07:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,16:08:00,16:08:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
土曜_15時30分_系統262,16:09:00,16:09:00,200463_06,33,渋川市内循環,0,0,1
土曜_15時30分_系統262,16:10:00,16:10:00,200468_01,34,渋川市内循環,0,0,1
土曜_15時30分_系統262,16:12:00,16:12:00,200466_01,35,渋川市内循環,0,0,1
土曜_15時30分_系統262,16:13:00,16:13:00,200704_01,36,渋川市内循環,0,0,1
土曜_15時30分_系統262,16:14:00,16:14:00,200476_02,37,渋川市内循環,0,0,1
土曜_15時30分_系統262,16:15:00,16:15:00,200477_02,38,渋川市内循環,0,0,1
土曜_15時30分_系統262,16:16:00,16:16:00,200430_02,39,渋川市内循環,0,0,1
土曜_15時30分_系統262,16:17:00,16:17:00,200007_02,40,渋川市内循環,0,0,1
土曜_15時30分_系統262,16:22:00,16:22:00,210463_10,41,渋川市内循環,1,0,1
土曜_15時30分_系統267,15:30:00,15:30:00,200463_01,1,前橋駅,0,1,1
土曜_15時30分_系統267,15:31:00,15:31:00,200768_02,2,前橋駅,0,0,1
土曜_15時30分_系統267,15:32:00,15:32:00,200730_02,3,前橋駅,0,0,1
土曜_15時30分_系統267,15:34:00,15:34:00,200827_02,4,前橋駅,0,0,1
土曜_15時30分_系統267,15:35:00,15:35:00,200506_02,5,前橋駅,0,0,1
土曜_15時30分_系統267,15:36:00,15:36:00,200017_02,6,前橋駅,0,0,1
土曜_15時30分_系統267,15:37:00,15:37:00,200519_02,7,前橋駅,0,0,1
土曜_15時30分_系統267,15:37:00,15:37:00,200987_02,8,前橋駅,0,0,1
土曜_15時30分_系統267,15:39:00,15:39:00,200985_02,9,前橋駅,0,0,1
土曜_15時30分_系統267,15:40:00,15:40:00,200895_02,10,前橋駅,0,0,1
土曜_15時30分_系統267,15:41:00,15:41:00,200395_02,11,前橋駅,0,0,1
土曜_15時30分_系統267,15:41:00,15:41:00,200153_02,12,前橋駅,0,0,1
土曜_15時30分_系統267,15:42:00,15:42:00,201100_02,13,前橋駅,0,0,1
土曜_15時30分_系統267,15:43:00,15:43:00,200981_02,14,前橋駅,0,0,1
土曜_15時30分_系統267,15:44:00,15:44:00,200872_02,15,前橋駅,0,0,1
土曜_15時30分_系統267,15:45:00,15:45:00,201056_02,16,前橋駅,0,0,1
土曜_15時30分_系統267,15:47:00,15:47:00,200189_02,17,前橋駅,0,0,1
土曜_15時30分_系統267,15:48:00,15:48:00,200722_02,18,前橋駅,0,0,1
土曜_15時30分_系統267,15:49:00,15:49:00,200343_02,19,前橋駅,0,0,1
土曜_15時30分_系統267,15:50:00,15:50:00,200348_02,20,前橋駅,0,0,1
土曜_15時30分_系統267,15:52:00,15:52:00,201071_02,21,前橋駅,0,0,1
土曜_15時30分_系統267,15:54:00,15:54:00,200542_02,22,前橋駅,0,0,1
土曜_15時30分_系統267,15:56:00,15:56:00,200141_02,23,前橋駅,0,0,1
土曜_15時30分_系統267,15:57:00,15:57:00,200142_02,24,前橋駅,0,0,1
土曜_15時30分_系統267,15:59:00,15:59:00,200262_02,25,前橋駅,0,0,1
土曜_15時30分_系統267,16:00:00,16:00:00,201015_02,26,前橋駅,0,0,1
土曜_15時30分_系統267,16:01:00,16:01:00,200379_02,27,前橋駅,0,0,1
土曜_15時30分_系統267,16:02:00,16:02:00,200455_02,28,前橋駅,0,0,1
土曜_15時30分_系統267,16:03:00,16:03:00,200702_02,29,前橋駅,0,0,1
土曜_15時30分_系統267,16:04:00,16:04:00,200703_02,30,前橋駅,0,0,1
土曜_15時30分_系統267,16:06:00,16:06:00,201081_02,31,前橋駅,0,0,1
土曜_15時30分_系統267,16:08:00,16:08:00,200998_02,32,前橋駅,0,0,1
土曜_15時30分_系統267,16:11:00,16:11:00,200718_10,33,前橋駅,1,0,1
土曜_15時40分_系統666,15:40:00,15:40:00,200022_01,1,渋川駅（前橋駅 経由）,0,1,1
土曜_15時40分_系統666,15:43:00,15:43:00,200668_02,2,渋川駅（前橋駅 経由）,0,0,1
土曜_15時40分_系統666,15:44:00,15:44:00,200932_02,3,渋川駅（前橋駅 経由）,0,0,1
土曜_15時40分_系統666,15:45:00,15:45:00,200108_02,4,渋川駅（前橋駅 経由）,0,0,1
土曜_15時40分_系統666,15:50:00,15:50:00,200718_02,5,渋川駅,0,0,1
土曜_15時40分_系統666,15:51:00,15:51:00,200998_01,6,渋川駅,0,0,1
土曜_15時40分_系統666,15:53:00,15:53:00,201081_01,7,渋川駅,0,0,1
土曜_15時40分_系統666,15:55:00,15:55:00,200703_01,8,渋川駅,0,0,1
土曜_15時40分_系統666,15:56:00,15:56:00,200702_01,9,渋川駅,0,0,1
土曜_15時40分_系統666,15:57:00,15:57:00,200455_01,10,渋川駅,0,0,1
土曜_15時40分_系統666,15:58:00,15:58:00,200379_01,11,渋川駅,0,0,1
土曜_15時40分_系統666,15:59:00,15:59:00,201015_01,12,渋川駅,0,0,1
土曜_15時40分_系統666,16:00:00,16:00:00,200262_01,13,渋川駅,0,0,1
土曜_15時40分_系統666,16:01:00,16:01:00,200142_01,14,渋川駅,0,0,1
土曜_15時40分_系統666,16:02:00,16:02:00,200141_01,15,渋川駅,0,0,1
土曜_15時40分_系統666,16:03:00,16:03:00,200542_01,16,渋川駅,0,0,1
土曜_15時40分_系統666,16:05:00,16:05:00,201071_01,17,渋川駅,0,0,1
土曜_15時40分_系統666,16:07:00,16:07:00,200348_01,18,渋川駅,0,0,1
土曜_15時40分_系統666,16:08:00,16:08:00,200343_01,19,渋川駅,0,0,1
土曜_15時40分_系統666,16:09:00,16:09:00,200722_01,20,渋川駅,0,0,1
土曜_15時40分_系統666,16:11:00,16:11:00,200189_01,21,渋川駅,0,0,1
土曜_15時40分_系統666,16:13:00,16:13:00,201056_01,22,渋川駅,0,0,1
土曜_15時40分_系統666,16:14:00,16:14:00,200872_01,23,渋川駅,0,0,1
土曜_15時40分_系統666,16:15:00,16:15:00,200981_01,24,渋川駅,0,0,1
土曜_15時40分_系統666,16:16:00,16:16:00,201100_01,25,渋川駅,0,0,1
土曜_15時40分_系統666,16:17:00,16:17:00,200153_01,26,渋川駅,0,0,1
土曜_15時40分_系統666,16:17:00,16:17:00,200395_01,27,渋川駅,0,0,1
土曜_15時40分_系統666,16:18:00,16:18:00,200895_01,28,渋川駅,0,0,1
土曜_15時40分_系統666,16:19:00,16:19:00,200985_01,29,渋川駅,0,0,1
土曜_15時40分_系統666,16:19:00,16:19:00,200987_01,30,渋川駅,0,0,1
土曜_15時40分_系統666,16:20:00,16:20:00,200519_01,31,渋川駅,0,0,1
土曜_15時40分_系統666,16:21:00,16:21:00,200017_01,32,渋川駅,0,0,1
土曜_15時40分_系統666,16:22:00,16:22:00,200506_01,33,渋川駅,0,0,1
土曜_15時40分_系統666,16:24:00,16:24:00,200827_01,34,渋川駅,0,0,1
土曜_15時40分_系統666,16:26:00,16:26:00,200730_01,35,渋川駅,0,0,1
土曜_15時40分_系統666,16:27:00,16:27:00,200768_01,36,渋川駅,0,0,1
土曜_15時40分_系統666,16:30:00,16:30:00,200463_10,37,渋川駅,1,0,1
土曜_15時47分_系統261,15:47:00,15:47:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
土曜_15時47分_系統261,15:48:00,15:48:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
土曜_15時47分_系統261,15:49:00,15:49:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
土曜_15時47分_系統261,15:50:00,15:50:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
土曜_15時47分_系統261,15:51:00,15:51:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
土曜_15時47分_系統261,15:52:00,15:52:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
土曜_15時47分_系統261,15:53:00,15:53:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
土曜_15時47分_系統261,15:54:00,15:54:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
土曜_15時47分_系統261,15:55:00,15:55:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
土曜_15時47分_系統261,16:00:00,16:00:00,200463_01,10,前橋駅,0,0,1
土曜_15時47分_系統261,16:01:00,16:01:00,200768_02,11,前橋駅,0,0,1
土曜_15時47分_系統261,16:02:00,16:02:00,200730_02,12,前橋駅,0,0,1
土曜_15時47分_系統261,16:04:00,16:04:00,200827_02,13,前橋駅,0,0,1
土曜_15時47分_系統261,16:05:00,16:05:00,200506_02,14,前橋駅,0,0,1
土曜_15時47分_系統261,16:06:00,16:06:00,200017_02,15,前橋駅,0,0,1
土曜_15時47分_系統261,16:07:00,16:07:00,200519_02,16,前橋駅,0,0,1
土曜_15時47分_系統261,16:07:00,16:07:00,200987_02,17,前橋駅,0,0,1
土曜_15時47分_系統261,16:09:00,16:09:00,200985_02,18,前橋駅,0,0,1
土曜_15時47分_系統261,16:10:00,16:10:00,200895_02,19,前橋駅,0,0,1
土曜_15時47分_系統261,16:11:00,16:11:00,200395_02,20,前橋駅,0,0,1
土曜_15時47分_系統261,16:11:00,16:11:00,200153_02,21,前橋駅,0,0,1
土曜_15時47分_系統261,16:12:00,16:12:00,201100_02,22,前橋駅,0,0,1
土曜_15時47分_系統261,16:13:00,16:13:00,200981_02,23,前橋駅,0,0,1
土曜_15時47分_系統261,16:14:00,16:14:00,200872_02,24,前橋駅,0,0,1
土曜_15時47分_系統261,16:15:00,16:15:00,201056_02,25,前橋駅,0,0,1
土曜_15時47分_系統261,16:17:00,16:17:00,200189_02,26,前橋駅,0,0,1
土曜_15時47分_系統261,16:18:00,16:18:00,200722_02,27,前橋駅,0,0,1
土曜_15時47分_系統261,16:19:00,16:19:00,200343_02,28,前橋駅,0,0,1
土曜_15時47分_系統261,16:20:00,16:20:00,200348_02,29,前橋駅,0,0,1
土曜_15時47分_系統261,16:22:00,16:22:00,201071_02,30,前橋駅,0,0,1
土曜_15時47分_系統261,16:24:00,16:24:00,200542_02,31,前橋駅,0,0,1
土曜_15時47分_系統261,16:26:00,16:26:00,200141_02,32,前橋駅,0,0,1
土曜_15時47分_系統261,16:27:00,16:27:00,200142_02,33,前橋駅,0,0,1
土曜_15時47分_系統261,16:29:00,16:29:00,200262_02,34,前橋駅,0,0,1
土曜_15時47分_系統261,16:30:00,16:30:00,201015_02,35,前橋駅,0,0,1
土曜_15時47分_系統261,16:31:00,16:31:00,200379_02,36,前橋駅,0,0,1
土曜_15時47分_系統261,16:32:00,16:32:00,200455_02,37,前橋駅,0,0,1
土曜_15時47分_系統261,16:33:00,16:33:00,200702_02,38,前橋駅,0,0,1
土曜_15時47分_系統261,16:34:00,16:34:00,200703_02,39,前橋駅,0,0,1
土曜_15時47分_系統261,16:36:00,16:36:00,201081_02,40,前橋駅,0,0,1
土曜_15時47分_系統261,16:38:00,16:38:00,200998_02,41,前橋駅,0,0,1
土曜_15時47分_系統261,16:41:00,16:41:00,200718_10,42,前橋駅,1,0,1
土曜_16時00分_系統581,16:00:00,16:00:00,200273_01,1,前橋駅,0,1,1
土曜_16時00分_系統581,16:02:00,16:02:00,200722_02,2,前橋駅,0,0,1
土曜_16時00分_系統581,16:03:00,16:03:00,200343_02,3,前橋駅,0,0,1
土曜_16時00分_系統581,16:04:00,16:04:00,200348_02,4,前橋駅,0,0,1
土曜_16時00分_系統581,16:06:00,16:06:00,201071_02,5,前橋駅,0,0,1
土曜_16時00分_系統581,16:08:00,16:08:00,200542_02,6,前橋駅,0,0,1
土曜_16時00分_系統581,16:10:00,16:10:00,200141_02,7,前橋駅,0,0,1
土曜_16時00分_系統581,16:11:00,16:11:00,200142_02,8,前橋駅,0,0,1
土曜_16時00分_系統581,16:13:00,16:13:00,200262_02,9,前橋駅,0,0,1
土曜_16時00分_系統581,16:14:00,16:14:00,201015_02,10,前橋駅,0,0,1
土曜_16時00分_系統581,16:15:00,16:15:00,200379_02,11,前橋駅,0,0,1
土曜_16時00分_系統581,16:16:00,16:16:00,200455_02,12,前橋駅,0,0,1
土曜_16時00分_系統581,16:17:00,16:17:00,200702_02,13,前橋駅,0,0,1
土曜_16時00分_系統581,16:18:00,16:18:00,200703_02,14,前橋駅,0,0,1
土曜_16時00分_系統581,16:20:00,16:20:00,201081_02,15,前橋駅,0,0,1
土曜_16時00分_系統581,16:22:00,16:22:00,200998_02,16,前橋駅,0,0,1
土曜_16時00分_系統581,16:25:00,16:25:00,200718_10,17,前橋駅,1,0,1
土曜_16時05分_系統268,16:05:00,16:05:00,200718_02,1,渋川駅,0,1,1
土曜_16時05分_系統268,16:06:00,16:06:00,200998_01,2,渋川駅,0,0,1
土曜_16時05分_系統268,16:08:00,16:08:00,201081_01,3,渋川駅,0,0,1
土曜_16時05分_系統268,16:10:00,16:10:00,200703_01,4,渋川駅,0,0,1
土曜_16時05分_系統268,16:11:00,16:11:00,200702_01,5,渋川駅,0,0,1
土曜_16時05分_系統268,16:12:00,16:12:00,200455_01,6,渋川駅,0,0,1
土曜_16時05分_系統268,16:13:00,16:13:00,200379_01,7,渋川駅,0,0,1
土曜_16時05分_系統268,16:14:00,16:14:00,201015_01,8,渋川駅,0,0,1
土曜_16時05分_系統268,16:15:00,16:15:00,200262_01,9,渋川駅,0,0,1
土曜_16時05分_系統268,16:16:00,16:16:00,200142_01,10,渋川駅,0,0,1
土曜_16時05分_系統268,16:17:00,16:17:00,200141_01,11,渋川駅,0,0,1
土曜_16時05分_系統268,16:18:00,16:18:00,200542_01,12,渋川駅,0,0,1
土曜_16時05分_系統268,16:20:00,16:20:00,201071_01,13,渋川駅,0,0,1
土曜_16時05分_系統268,16:22:00,16:22:00,200348_01,14,渋川駅,0,0,1
土曜_16時05分_系統268,16:23:00,16:23:00,200343_01,15,渋川駅,0,0,1
土曜_16時05分_系統268,16:24:00,16:24:00,200722_01,16,渋川駅,0,0,1
土曜_16時05分_系統268,16:26:00,16:26:00,200189_01,17,渋川駅,0,0,1
土曜_16時05分_系統268,16:28:00,16:28:00,201056_01,18,渋川駅,0,0,1
土曜_16時05分_系統268,16:29:00,16:29:00,200872_01,19,渋川駅,0,0,1
土曜_16時05分_系統268,16:30:00,16:30:00,200981_01,20,渋川駅,0,0,1
土曜_16時05分_系統268,16:31:00,16:31:00,201100_01,21,渋川駅,0,0,1
土曜_16時05分_系統268,16:32:00,16:32:00,200153_01,22,渋川駅,0,0,1
土曜_16時05分_系統268,16:32:00,16:32:00,200395_01,23,渋川駅,0,0,1
土曜_16時05分_系統268,16:33:00,16:33:00,200895_01,24,渋川駅,0,0,1
土曜_16時05分_系統268,16:34:00,16:34:00,200985_01,25,渋川駅,0,0,1
土曜_16時05分_系統268,16:34:00,16:34:00,200987_01,26,渋川駅,0,0,1
土曜_16時05分_系統268,16:35:00,16:35:00,200519_01,27,渋川駅,0,0,1
土曜_16時05分_系統268,16:36:00,16:36:00,200017_01,28,渋川駅,0,0,1
土曜_16時05分_系統268,16:37:00,16:37:00,200506_01,29,渋川駅,0,0,1
土曜_16時05分_系統268,16:39:00,16:39:00,200827_01,30,渋川駅,0,0,1
土曜_16時05分_系統268,16:41:00,16:41:00,200730_01,31,渋川駅,0,0,1
土曜_16時05分_系統268,16:42:00,16:42:00,200768_01,32,渋川駅,0,0,1
土曜_16時05分_系統268,16:45:00,16:45:00,200463_10,33,渋川駅,1,0,1
土曜_16時18分_系統642,16:18:00,16:18:00,200718_02,1,道の駅まえばし赤城（南橘団地 経由）,0,1,1
土曜_16時18分_系統642,16:19:00,16:19:00,200998_01,2,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:21:00,16:21:00,201081_01,3,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:23:00,16:23:00,200703_01,4,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:24:00,16:24:00,200702_01,5,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:26:00,16:26:00,200455_01,6,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:27:00,16:27:00,200379_01,7,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:28:00,16:28:00,201015_01,8,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:29:00,16:29:00,200262_01,9,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:30:00,16:30:00,200142_01,10,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:31:00,16:31:00,200141_01,11,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:32:00,16:32:00,200542_01,12,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:34:00,16:34:00,201071_01,13,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:35:00,16:35:00,200928_01,14,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:36:00,16:36:00,200800_01,15,道の駅まえばし赤城（南橘団地 経由）,0,0,1
土曜_16時18分_系統642,16:38:00,16:38:00,200927_01,16,道の駅まえばし赤城,0,0,1
土曜_16時18分_系統642,16:39:00,16:39:00,201185_01,17,道の駅まえばし赤城,0,0,1
土曜_16時18分_系統642,16:43:00,16:43:00,200348_01,18,道の駅まえばし赤城,0,0,1
土曜_16時18分_系統642,16:44:00,16:44:00,200343_01,19,道の駅まえばし赤城,0,0,1
土曜_16時18分_系統642,16:45:00,16:45:00,200722_01,20,道の駅まえばし赤城,0,0,1
土曜_16時18分_系統642,16:47:00,16:47:00,200189_01,21,道の駅まえばし赤城,0,0,1
土曜_16時18分_系統642,16:54:00,16:54:00,201440_01,22,道の駅まえばし赤城,1,0,1
土曜_16時25分_系統267,16:25:00,16:25:00,200463_01,1,前橋駅,0,1,1
土曜_16時25分_系統267,16:26:00,16:26:00,200768_02,2,前橋駅,0,0,1
土曜_16時25分_系統267,16:27:00,16:27:00,200730_02,3,前橋駅,0,0,1
土曜_16時25分_系統267,16:29:00,16:29:00,200827_02,4,前橋駅,0,0,1
土曜_16時25分_系統267,16:30:00,16:30:00,200506_02,5,前橋駅,0,0,1
土曜_16時25分_系統267,16:31:00,16:31:00,200017_02,6,前橋駅,0,0,1
土曜_16時25分_系統267,16:32:00,16:32:00,200519_02,7,前橋駅,0,0,1
土曜_16時25分_系統267,16:32:00,16:32:00,200987_02,8,前橋駅,0,0,1
土曜_16時25分_系統267,16:34:00,16:34:00,200985_02,9,前橋駅,0,0,1
土曜_16時25分_系統267,16:35:00,16:35:00,200895_02,10,前橋駅,0,0,1
土曜_16時25分_系統267,16:36:00,16:36:00,200395_02,11,前橋駅,0,0,1
土曜_16時25分_系統267,16:36:00,16:36:00,200153_02,12,前橋駅,0,0,1
土曜_16時25分_系統267,16:37:00,16:37:00,201100_02,13,前橋駅,0,0,1
土曜_16時25分_系統267,16:38:00,16:38:00,200981_02,14,前橋駅,0,0,1
土曜_16時25分_系統267,16:39:00,16:39:00,200872_02,15,前橋駅,0,0,1
土曜_16時25分_系統267,16:40:00,16:40:00,201056_02,16,前橋駅,0,0,1
土曜_16時25分_系統267,16:42:00,16:42:00,200189_02,17,前橋駅,0,0,1
土曜_16時25分_系統267,16:43:00,16:43:00,200722_02,18,前橋駅,0,0,1
土曜_16時25分_系統267,16:44:00,16:44:00,200343_02,19,前橋駅,0,0,1
土曜_16時25分_系統267,16:45:00,16:45:00,200348_02,20,前橋駅,0,0,1
土曜_16時25分_系統267,16:47:00,16:47:00,201071_02,21,前橋駅,0,0,1
土曜_16時25分_系統267,16:49:00,16:49:00,200542_02,22,前橋駅,0,0,1
土曜_16時25分_系統267,16:51:00,16:51:00,200141_02,23,前橋駅,0,0,1
土曜_16時25分_系統267,16:52:00,16:52:00,200142_02,24,前橋駅,0,0,1
土曜_16時25分_系統267,16:54:00,16:54:00,200262_02,25,前橋駅,0,0,1
土曜_16時25分_系統267,16:55:00,16:55:00,201015_02,26,前橋駅,0,0,1
土曜_16時25分_系統267,16:56:00,16:56:00,200379_02,27,前橋駅,0,0,1
土曜_16時25分_系統267,16:57:00,16:57:00,200455_02,28,前橋駅,0,0,1
土曜_16時25分_系統267,16:58:00,16:58:00,200702_02,29,前橋駅,0,0,1
土曜_16時25分_系統267,16:59:00,16:59:00,200703_02,30,前橋駅,0,0,1
土曜_16時25分_系統267,17:01:00,17:01:00,201081_02,31,前橋駅,0,0,1
土曜_16時25分_系統267,17:03:00,17:03:00,200998_02,32,前橋駅,0,0,1
土曜_16時25分_系統267,17:06:00,17:06:00,200718_10,33,前橋駅,1,0,1
土曜_16時30分_系統266,16:30:00,16:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
土曜_16時30分_系統266,16:31:00,16:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:33:00,16:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:35:00,16:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:36:00,16:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:37:00,16:37:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:38:00,16:38:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:39:00,16:39:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:40:00,16:40:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:41:00,16:41:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:42:00,16:42:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:43:00,16:43:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:45:00,16:45:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:47:00,16:47:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:48:00,16:48:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:49:00,16:49:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_16時30分_系統266,16:51:00,16:51:00,200273_01,17,渋川駅,0,0,1
土曜_16時30分_系統266,16:54:00,16:54:00,200189_01,18,渋川駅,0,0,1
土曜_16時30分_系統266,16:56:00,16:56:00,201056_01,19,渋川駅,0,0,1
土曜_16時30分_系統266,16:57:00,16:57:00,200872_01,20,渋川駅,0,0,1
土曜_16時30分_系統266,16:58:00,16:58:00,200981_01,21,渋川駅,0,0,1
土曜_16時30分_系統266,16:59:00,16:59:00,201100_01,22,渋川駅,0,0,1
土曜_16時30分_系統266,17:00:00,17:00:00,200153_01,23,渋川駅,0,0,1
土曜_16時30分_系統266,17:00:00,17:00:00,200395_01,24,渋川駅,0,0,1
土曜_16時30分_系統266,17:01:00,17:01:00,200895_01,25,渋川駅,0,0,1
土曜_16時30分_系統266,17:02:00,17:02:00,200985_01,26,渋川駅,0,0,1
土曜_16時30分_系統266,17:02:00,17:02:00,200987_01,27,渋川駅,0,0,1
土曜_16時30分_系統266,17:03:00,17:03:00,200519_01,28,渋川駅,0,0,1
土曜_16時30分_系統266,17:04:00,17:04:00,200017_01,29,渋川駅,0,0,1
土曜_16時30分_系統266,17:05:00,17:05:00,200506_01,30,渋川駅,0,0,1
土曜_16時30分_系統266,17:07:00,17:07:00,200827_01,31,渋川駅,0,0,1
土曜_16時30分_系統266,17:09:00,17:09:00,200730_01,32,渋川駅,0,0,1
土曜_16時30分_系統266,17:10:00,17:10:00,200768_01,33,渋川駅,0,0,1
土曜_16時30分_系統266,17:13:00,17:13:00,200463_10,34,渋川駅,1,0,1
土曜_16時57分_系統262,16:57:00,16:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
土曜_16時57分_系統262,16:58:00,16:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:00:00,17:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:02:00,17:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:03:00,17:03:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:05:00,17:05:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:06:00,17:06:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:07:00,17:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:08:00,17:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:09:00,17:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:10:00,17:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:11:00,17:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:13:00,17:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:15:00,17:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:16:00,17:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:17:00,17:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:19:00,17:19:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:21:00,17:21:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:22:00,17:22:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:23:00,17:23:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:24:00,17:24:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:25:00,17:25:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:25:00,17:25:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:26:00,17:26:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:27:00,17:27:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:27:00,17:27:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:28:00,17:28:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:29:00,17:29:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:30:00,17:30:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:32:00,17:32:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:34:00,17:34:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:35:00,17:35:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
土曜_16時57分_系統262,17:36:00,17:36:00,200463_06,33,渋川市内循環,0,0,1
土曜_16時57分_系統262,17:37:00,17:37:00,200468_01,34,渋川市内循環,0,0,1
土曜_16時57分_系統262,17:39:00,17:39:00,200466_01,35,渋川市内循環,0,0,1
土曜_16時57分_系統262,17:40:00,17:40:00,200704_01,36,渋川市内循環,0,0,1
土曜_16時57分_系統262,17:41:00,17:41:00,200476_02,37,渋川市内循環,0,0,1
土曜_16時57分_系統262,17:42:00,17:42:00,200477_02,38,渋川市内循環,0,0,1
土曜_16時57分_系統262,17:43:00,17:43:00,200430_02,39,渋川市内循環,0,0,1
土曜_16時57分_系統262,17:44:00,17:44:00,200007_02,40,渋川市内循環,0,0,1
土曜_16時57分_系統262,17:49:00,17:49:00,210463_10,41,渋川市内循環,1,0,1
土曜_17時00分_系統265,17:00:00,17:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
土曜_17時00分_系統265,17:01:00,17:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:02:00,17:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:04:00,17:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:05:00,17:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:06:00,17:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:07:00,17:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:07:00,17:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:09:00,17:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:10:00,17:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:11:00,17:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:11:00,17:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:12:00,17:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:13:00,17:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:14:00,17:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:15:00,17:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:17:00,17:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
土曜_17時00分_系統265,17:20:00,17:20:00,200273_01,18,前橋駅,0,0,1
土曜_17時00分_系統265,17:22:00,17:22:00,200722_02,19,前橋駅,0,0,1
土曜_17時00分_系統265,17:23:00,17:23:00,200343_02,20,前橋駅,0,0,1
土曜_17時00分_系統265,17:24:00,17:24:00,200348_02,21,前橋駅,0,0,1
土曜_17時00分_系統265,17:26:00,17:26:00,201071_02,22,前橋駅,0,0,1
土曜_17時00分_系統265,17:28:00,17:28:00,200542_02,23,前橋駅,0,0,1
土曜_17時00分_系統265,17:30:00,17:30:00,200141_02,24,前橋駅,0,0,1
土曜_17時00分_系統265,17:31:00,17:31:00,200142_02,25,前橋駅,0,0,1
土曜_17時00分_系統265,17:33:00,17:33:00,200262_02,26,前橋駅,0,0,1
土曜_17時00分_系統265,17:34:00,17:34:00,201015_02,27,前橋駅,0,0,1
土曜_17時00分_系統265,17:35:00,17:35:00,200379_02,28,前橋駅,0,0,1
土曜_17時00分_系統265,17:36:00,17:36:00,200455_02,29,前橋駅,0,0,1
土曜_17時00分_系統265,17:37:00,17:37:00,200702_02,30,前橋駅,0,0,1
土曜_17時00分_系統265,17:38:00,17:38:00,200703_02,31,前橋駅,0,0,1
土曜_17時00分_系統265,17:40:00,17:40:00,201081_02,32,前橋駅,0,0,1
土曜_17時00分_系統265,17:42:00,17:42:00,200998_02,33,前橋駅,0,0,1
土曜_17時00分_系統265,17:45:00,17:45:00,200718_10,34,前橋駅,1,0,1
土曜_17時02分_系統641,17:02:00,17:02:00,201440_01,1,前橋駅,0,1,1
土曜_17時02分_系統641,17:07:00,17:07:00,200189_02,2,前橋駅,0,0,1
土曜_17時02分_系統641,17:09:00,17:09:00,200722_02,3,前橋駅,0,0,1
土曜_17時02分_系統641,17:10:00,17:10:00,200343_02,4,前橋駅,0,0,1
土曜_17時02分_系統641,17:11:00,17:11:00,200348_02,5,前橋駅,0,0,1
土曜_17時02分_系統641,17:13:00,17:13:00,201071_02,6,前橋駅,0,0,1
土曜_17時02分_系統641,17:14:00,17:14:00,200542_02,7,前橋駅,0,0,1
土曜_17時02分_系統641,17:16:00,17:16:00,200141_02,8,前橋駅,0,0,1
土曜_17時02分_系統641,17:17:00,17:17:00,200142_02,9,前橋駅,0,0,1
土曜_17時02分_系統641,17:19:00,17:19:00,200262_02,10,前橋駅,0,0,1
土曜_17時02分_系統641,17:20:00,17:20:00,201015_02,11,前橋駅,0,0,1
土曜_17時02分_系統641,17:22:00,17:22:00,200379_02,12,前橋駅,0,0,1
土曜_17時02分_系統641,17:23:00,17:23:00,200455_02,13,前橋駅,0,0,1
土曜_17時02分_系統641,17:25:00,17:25:00,200702_02,14,前橋駅,0,0,1
土曜_17時02分_系統641,17:27:00,17:27:00,200703_02,15,前橋駅,0,0,1
土曜_17時02分_系統641,17:29:00,17:29:00,201081_02,16,前橋駅,0,0,1
土曜_17時02分_系統641,17:31:00,17:31:00,200998_02,17,前橋駅,0,0,1
土曜_17時02分_系統641,17:34:00,17:34:00,200718_10,18,前橋駅,1,0,1
土曜_17時10分_系統668,17:10:00,17:10:00,200022_01,1,南橘団地（前橋駅 経由）,0,1,1
土曜_17時10分_系統668,17:13:00,17:13:00,200668_02,2,南橘団地（前橋駅 経由）,0,0,1
土曜_17時10分_系統668,17:14:00,17:14:00,200932_02,3,南橘団地（前橋駅 経由）,0,0,1
土曜_17時10分_系統668,17:15:00,17:15:00,200108_02,4,南橘団地（前橋駅 経由）,0,0,1
土曜_17時10分_系統668,17:20:00,17:20:00,200718_02,5,南橘団地,0,0,1
土曜_17時10分_系統668,17:21:00,17:21:00,200998_01,6,南橘団地,0,0,1
土曜_17時10分_系統668,17:23:00,17:23:00,201081_01,7,南橘団地,0,0,1
土曜_17時10分_系統668,17:25:00,17:25:00,200703_01,8,南橘団地,0,0,1
土曜_17時10分_系統668,17:26:00,17:26:00,200702_01,9,南橘団地,0,0,1
土曜_17時10分_系統668,17:28:00,17:28:00,200455_01,10,南橘団地,0,0,1
土曜_17時10分_系統668,17:29:00,17:29:00,200379_01,11,南橘団地,0,0,1
土曜_17時10分_系統668,17:30:00,17:30:00,201015_01,12,南橘団地,0,0,1
土曜_17時10分_系統668,17:31:00,17:31:00,200262_01,13,南橘団地,0,0,1
土曜_17時10分_系統668,17:32:00,17:32:00,200142_01,14,南橘団地,0,0,1
土曜_17時10分_系統668,17:33:00,17:33:00,200141_01,15,南橘団地,0,0,1
土曜_17時10分_系統668,17:34:00,17:34:00,200542_01,16,南橘団地,0,0,1
土曜_17時10分_系統668,17:36:00,17:36:00,201071_01,17,南橘団地,0,0,1
土曜_17時10分_系統668,17:37:00,17:37:00,200928_01,18,南橘団地,0,0,1
土曜_17時10分_系統668,17:38:00,17:38:00,200800_01,19,南橘団地,0,0,1
土曜_17時10分_系統668,17:41:00,17:41:00,200927_01,20,南橘団地,1,0,1
土曜_17時32分_系統261,17:32:00,17:32:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
土曜_17時32分_系統261,17:33:00,17:33:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
土曜_17時32分_系統261,17:34:00,17:34:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
土曜_17時32分_系統261,17:35:00,17:35:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
土曜_17時32分_系統261,17:36:00,17:36:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
土曜_17時32分_系統261,17:37:00,17:37:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
土曜_17時32分_系統261,17:38:00,17:38:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
土曜_17時32分_系統261,17:39:00,17:39:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
土曜_17時32分_系統261,17:40:00,17:40:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
土曜_17時32分_系統261,17:45:00,17:45:00,200463_01,10,前橋駅,0,0,1
土曜_17時32分_系統261,17:46:00,17:46:00,200768_02,11,前橋駅,0,0,1
土曜_17時32分_系統261,17:47:00,17:47:00,200730_02,12,前橋駅,0,0,1
土曜_17時32分_系統261,17:49:00,17:49:00,200827_02,13,前橋駅,0,0,1
土曜_17時32分_系統261,17:50:00,17:50:00,200506_02,14,前橋駅,0,0,1
土曜_17時32分_系統261,17:51:00,17:51:00,200017_02,15,前橋駅,0,0,1
土曜_17時32分_系統261,17:52:00,17:52:00,200519_02,16,前橋駅,0,0,1
土曜_17時32分_系統261,17:52:00,17:52:00,200987_02,17,前橋駅,0,0,1
土曜_17時32分_系統261,17:54:00,17:54:00,200985_02,18,前橋駅,0,0,1
土曜_17時32分_系統261,17:55:00,17:55:00,200895_02,19,前橋駅,0,0,1
土曜_17時32分_系統261,17:56:00,17:56:00,200395_02,20,前橋駅,0,0,1
土曜_17時32分_系統261,17:56:00,17:56:00,200153_02,21,前橋駅,0,0,1
土曜_17時32分_系統261,17:57:00,17:57:00,201100_02,22,前橋駅,0,0,1
土曜_17時32分_系統261,17:58:00,17:58:00,200981_02,23,前橋駅,0,0,1
土曜_17時32分_系統261,17:59:00,17:59:00,200872_02,24,前橋駅,0,0,1
土曜_17時32分_系統261,18:00:00,18:00:00,201056_02,25,前橋駅,0,0,1
土曜_17時32分_系統261,18:02:00,18:02:00,200189_02,26,前橋駅,0,0,1
土曜_17時32分_系統261,18:03:00,18:03:00,200722_02,27,前橋駅,0,0,1
土曜_17時32分_系統261,18:04:00,18:04:00,200343_02,28,前橋駅,0,0,1
土曜_17時32分_系統261,18:05:00,18:05:00,200348_02,29,前橋駅,0,0,1
土曜_17時32分_系統261,18:07:00,18:07:00,201071_02,30,前橋駅,0,0,1
土曜_17時32分_系統261,18:09:00,18:09:00,200542_02,31,前橋駅,0,0,1
土曜_17時32分_系統261,18:11:00,18:11:00,200141_02,32,前橋駅,0,0,1
土曜_17時32分_系統261,18:12:00,18:12:00,200142_02,33,前橋駅,0,0,1
土曜_17時32分_系統261,18:14:00,18:14:00,200262_02,34,前橋駅,0,0,1
土曜_17時32分_系統261,18:15:00,18:15:00,201015_02,35,前橋駅,0,0,1
土曜_17時32分_系統261,18:16:00,18:16:00,200379_02,36,前橋駅,0,0,1
土曜_17時32分_系統261,18:17:00,18:17:00,200455_02,37,前橋駅,0,0,1
土曜_17時32分_系統261,18:18:00,18:18:00,200702_02,38,前橋駅,0,0,1
土曜_17時32分_系統261,18:19:00,18:19:00,200703_02,39,前橋駅,0,0,1
土曜_17時32分_系統261,18:21:00,18:21:00,201081_02,40,前橋駅,0,0,1
土曜_17時32分_系統261,18:23:00,18:23:00,200998_02,41,前橋駅,0,0,1
土曜_17時32分_系統261,18:26:00,18:26:00,200718_10,42,前橋駅,1,0,1
土曜_17時41分_系統266,17:41:00,17:41:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
土曜_17時41分_系統266,17:42:00,17:42:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:44:00,17:44:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:46:00,17:46:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:47:00,17:47:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:48:00,17:48:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:49:00,17:49:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:50:00,17:50:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:51:00,17:51:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:52:00,17:52:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:53:00,17:53:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:54:00,17:54:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:56:00,17:56:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:58:00,17:58:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,17:59:00,17:59:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,18:00:00,18:00:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
土曜_17時41分_系統266,18:02:00,18:02:00,200273_01,17,渋川駅,0,0,1
土曜_17時41分_系統266,18:05:00,18:05:00,200189_01,18,渋川駅,0,0,1
土曜_17時41分_系統266,18:07:00,18:07:00,201056_01,19,渋川駅,0,0,1
土曜_17時41分_系統266,18:08:00,18:08:00,200872_01,20,渋川駅,0,0,1
土曜_17時41分_系統266,18:09:00,18:09:00,200981_01,21,渋川駅,0,0,1
土曜_17時41分_系統266,18:10:00,18:10:00,201100_01,22,渋川駅,0,0,1
土曜_17時41分_系統266,18:11:00,18:11:00,200153_01,23,渋川駅,0,0,1
土曜_17時41分_系統266,18:11:00,18:11:00,200395_01,24,渋川駅,0,0,1
土曜_17時41分_系統266,18:12:00,18:12:00,200895_01,25,渋川駅,0,0,1
土曜_17時41分_系統266,18:13:00,18:13:00,200985_01,26,渋川駅,0,0,1
土曜_17時41分_系統266,18:13:00,18:13:00,200987_01,27,渋川駅,0,0,1
土曜_17時41分_系統266,18:14:00,18:14:00,200519_01,28,渋川駅,0,0,1
土曜_17時41分_系統266,18:15:00,18:15:00,200017_01,29,渋川駅,0,0,1
土曜_17時41分_系統266,18:16:00,18:16:00,200506_01,30,渋川駅,0,0,1
土曜_17時41分_系統266,18:18:00,18:18:00,200827_01,31,渋川駅,0,0,1
土曜_17時41分_系統266,18:20:00,18:20:00,200730_01,32,渋川駅,0,0,1
土曜_17時41分_系統266,18:21:00,18:21:00,200768_01,33,渋川駅,0,0,1
土曜_17時41分_系統266,18:24:00,18:24:00,200463_10,34,渋川駅,1,0,1
土曜_17時50分_系統528,17:50:00,17:50:00,200927_01,1,前橋駅,0,1,1
土曜_17時50分_系統528,17:50:00,17:50:00,200800_02,2,前橋駅,0,0,1
土曜_17時50分_系統528,17:51:00,17:51:00,200928_02,3,前橋駅,0,0,1
土曜_17時50分_系統528,17:52:00,17:52:00,201071_02,4,前橋駅,0,0,1
土曜_17時50分_系統528,17:53:00,17:53:00,200542_02,5,前橋駅,0,0,1
土曜_17時50分_系統528,17:55:00,17:55:00,200141_02,6,前橋駅,0,0,1
土曜_17時50分_系統528,17:56:00,17:56:00,200142_02,7,前橋駅,0,0,1
土曜_17時50分_系統528,17:57:00,17:57:00,200262_02,8,前橋駅,0,0,1
土曜_17時50分_系統528,17:58:00,17:58:00,201015_02,9,前橋駅,0,0,1
土曜_17時50分_系統528,17:59:00,17:59:00,200379_02,10,前橋駅,0,0,1
土曜_17時50分_系統528,18:00:00,18:00:00,200455_02,11,前橋駅,0,0,1
土曜_17時50分_系統528,18:02:00,18:02:00,200702_02,12,前橋駅,0,0,1
土曜_17時50分_系統528,18:04:00,18:04:00,200703_02,13,前橋駅,0,0,1
土曜_17時50分_系統528,18:06:00,18:06:00,201081_02,14,前橋駅,0,0,1
土曜_17時50分_系統528,18:08:00,18:08:00,200998_02,15,前橋駅,0,0,1
土曜_17時50分_系統528,18:11:00,18:11:00,200718_10,16,前橋駅,1,0,1
土曜_17時57分_系統268,17:57:00,17:57:00,200718_02,1,渋川駅,0,1,1
土曜_17時57分_系統268,17:58:00,17:58:00,200998_01,2,渋川駅,0,0,1
土曜_17時57分_系統268,18:00:00,18:00:00,201081_01,3,渋川駅,0,0,1
土曜_17時57分_系統268,18:02:00,18:02:00,200703_01,4,渋川駅,0,0,1
土曜_17時57分_系統268,18:03:00,18:03:00,200702_01,5,渋川駅,0,0,1
土曜_17時57分_系統268,18:04:00,18:04:00,200455_01,6,渋川駅,0,0,1
土曜_17時57分_系統268,18:05:00,18:05:00,200379_01,7,渋川駅,0,0,1
土曜_17時57分_系統268,18:06:00,18:06:00,201015_01,8,渋川駅,0,0,1
土曜_17時57分_系統268,18:07:00,18:07:00,200262_01,9,渋川駅,0,0,1
土曜_17時57分_系統268,18:08:00,18:08:00,200142_01,10,渋川駅,0,0,1
土曜_17時57分_系統268,18:09:00,18:09:00,200141_01,11,渋川駅,0,0,1
土曜_17時57分_系統268,18:10:00,18:10:00,200542_01,12,渋川駅,0,0,1
土曜_17時57分_系統268,18:12:00,18:12:00,201071_01,13,渋川駅,0,0,1
土曜_17時57分_系統268,18:14:00,18:14:00,200348_01,14,渋川駅,0,0,1
土曜_17時57分_系統268,18:15:00,18:15:00,200343_01,15,渋川駅,0,0,1
土曜_17時57分_系統268,18:16:00,18:16:00,200722_01,16,渋川駅,0,0,1
土曜_17時57分_系統268,18:18:00,18:18:00,200189_01,17,渋川駅,0,0,1
土曜_17時57分_系統268,18:20:00,18:20:00,201056_01,18,渋川駅,0,0,1
土曜_17時57分_系統268,18:21:00,18:21:00,200872_01,19,渋川駅,0,0,1
土曜_17時57分_系統268,18:22:00,18:22:00,200981_01,20,渋川駅,0,0,1
土曜_17時57分_系統268,18:23:00,18:23:00,201100_01,21,渋川駅,0,0,1
土曜_17時57分_系統268,18:24:00,18:24:00,200153_01,22,渋川駅,0,0,1
土曜_17時57分_系統268,18:24:00,18:24:00,200395_01,23,渋川駅,0,0,1
土曜_17時57分_系統268,18:25:00,18:25:00,200895_01,24,渋川駅,0,0,1
土曜_17時57分_系統268,18:26:00,18:26:00,200985_01,25,渋川駅,0,0,1
土曜_17時57分_系統268,18:26:00,18:26:00,200987_01,26,渋川駅,0,0,1
土曜_17時57分_系統268,18:27:00,18:27:00,200519_01,27,渋川駅,0,0,1
土曜_17時57分_系統268,18:28:00,18:28:00,200017_01,28,渋川駅,0,0,1
土曜_17時57分_系統268,18:29:00,18:29:00,200506_01,29,渋川駅,0,0,1
土曜_17時57分_系統268,18:31:00,18:31:00,200827_01,30,渋川駅,0,0,1
土曜_17時57分_系統268,18:33:00,18:33:00,200730_01,31,渋川駅,0,0,1
土曜_17時57分_系統268,18:34:00,18:34:00,200768_01,32,渋川駅,0,0,1
土曜_17時57分_系統268,18:37:00,18:37:00,200463_10,33,渋川駅,1,0,1
土曜_18時10分_系統668,18:10:00,18:10:00,200022_01,1,南橘団地（前橋駅 経由）,0,1,1
土曜_18時10分_系統668,18:13:00,18:13:00,200668_02,2,南橘団地（前橋駅 経由）,0,0,1
土曜_18時10分_系統668,18:14:00,18:14:00,200932_02,3,南橘団地（前橋駅 経由）,0,0,1
土曜_18時10分_系統668,18:15:00,18:15:00,200108_02,4,南橘団地（前橋駅 経由）,0,0,1
土曜_18時10分_系統668,18:20:00,18:20:00,200718_02,5,南橘団地,0,0,1
土曜_18時10分_系統668,18:21:00,18:21:00,200998_01,6,南橘団地,0,0,1
土曜_18時10分_系統668,18:23:00,18:23:00,201081_01,7,南橘団地,0,0,1
土曜_18時10分_系統668,18:25:00,18:25:00,200703_01,8,南橘団地,0,0,1
土曜_18時10分_系統668,18:26:00,18:26:00,200702_01,9,南橘団地,0,0,1
土曜_18時10分_系統668,18:28:00,18:28:00,200455_01,10,南橘団地,0,0,1
土曜_18時10分_系統668,18:29:00,18:29:00,200379_01,11,南橘団地,0,0,1
土曜_18時10分_系統668,18:30:00,18:30:00,201015_01,12,南橘団地,0,0,1
土曜_18時10分_系統668,18:31:00,18:31:00,200262_01,13,南橘団地,0,0,1
土曜_18時10分_系統668,18:32:00,18:32:00,200142_01,14,南橘団地,0,0,1
土曜_18時10分_系統668,18:33:00,18:33:00,200141_01,15,南橘団地,0,0,1
土曜_18時10分_系統668,18:34:00,18:34:00,200542_01,16,南橘団地,0,0,1
土曜_18時10分_系統668,18:36:00,18:36:00,201071_01,17,南橘団地,0,0,1
土曜_18時10分_系統668,18:37:00,18:37:00,200928_01,18,南橘団地,0,0,1
土曜_18時10分_系統668,18:38:00,18:38:00,200800_01,19,南橘団地,0,0,1
土曜_18時10分_系統668,18:41:00,18:41:00,200927_01,20,南橘団地,1,0,1
土曜_18時10分_系統267,18:10:00,18:10:00,200463_01,1,前橋駅,0,1,1
土曜_18時10分_系統267,18:11:00,18:11:00,200768_02,2,前橋駅,0,0,1
土曜_18時10分_系統267,18:12:00,18:12:00,200730_02,3,前橋駅,0,0,1
土曜_18時10分_系統267,18:14:00,18:14:00,200827_02,4,前橋駅,0,0,1
土曜_18時10分_系統267,18:15:00,18:15:00,200506_02,5,前橋駅,0,0,1
土曜_18時10分_系統267,18:16:00,18:16:00,200017_02,6,前橋駅,0,0,1
土曜_18時10分_系統267,18:17:00,18:17:00,200519_02,7,前橋駅,0,0,1
土曜_18時10分_系統267,18:17:00,18:17:00,200987_02,8,前橋駅,0,0,1
土曜_18時10分_系統267,18:19:00,18:19:00,200985_02,9,前橋駅,0,0,1
土曜_18時10分_系統267,18:20:00,18:20:00,200895_02,10,前橋駅,0,0,1
土曜_18時10分_系統267,18:21:00,18:21:00,200395_02,11,前橋駅,0,0,1
土曜_18時10分_系統267,18:21:00,18:21:00,200153_02,12,前橋駅,0,0,1
土曜_18時10分_系統267,18:22:00,18:22:00,201100_02,13,前橋駅,0,0,1
土曜_18時10分_系統267,18:23:00,18:23:00,200981_02,14,前橋駅,0,0,1
土曜_18時10分_系統267,18:24:00,18:24:00,200872_02,15,前橋駅,0,0,1
土曜_18時10分_系統267,18:25:00,18:25:00,201056_02,16,前橋駅,0,0,1
土曜_18時10分_系統267,18:27:00,18:27:00,200189_02,17,前橋駅,0,0,1
土曜_18時10分_系統267,18:28:00,18:28:00,200722_02,18,前橋駅,0,0,1
土曜_18時10分_系統267,18:29:00,18:29:00,200343_02,19,前橋駅,0,0,1
土曜_18時10分_系統267,18:30:00,18:30:00,200348_02,20,前橋駅,0,0,1
土曜_18時10分_系統267,18:32:00,18:32:00,201071_02,21,前橋駅,0,0,1
土曜_18時10分_系統267,18:34:00,18:34:00,200542_02,22,前橋駅,0,0,1
土曜_18時10分_系統267,18:36:00,18:36:00,200141_02,23,前橋駅,0,0,1
土曜_18時10分_系統267,18:37:00,18:37:00,200142_02,24,前橋駅,0,0,1
土曜_18時10分_系統267,18:39:00,18:39:00,200262_02,25,前橋駅,0,0,1
土曜_18時10分_系統267,18:40:00,18:40:00,201015_02,26,前橋駅,0,0,1
土曜_18時10分_系統267,18:41:00,18:41:00,200379_02,27,前橋駅,0,0,1
土曜_18時10分_系統267,18:42:00,18:42:00,200455_02,28,前橋駅,0,0,1
土曜_18時10分_系統267,18:43:00,18:43:00,200702_02,29,前橋駅,0,0,1
土曜_18時10分_系統267,18:44:00,18:44:00,200703_02,30,前橋駅,0,0,1
土曜_18時10分_系統267,18:46:00,18:46:00,201081_02,31,前橋駅,0,0,1
土曜_18時10分_系統267,18:48:00,18:48:00,200998_02,32,前橋駅,0,0,1
土曜_18時10分_系統267,18:51:00,18:51:00,200718_10,33,前橋駅,1,0,1
土曜_18時37分_系統268,18:37:00,18:37:00,200718_02,1,渋川駅,0,1,1
土曜_18時37分_系統268,18:38:00,18:38:00,200998_01,2,渋川駅,0,0,1
土曜_18時37分_系統268,18:40:00,18:40:00,201081_01,3,渋川駅,0,0,1
土曜_18時37分_系統268,18:42:00,18:42:00,200703_01,4,渋川駅,0,0,1
土曜_18時37分_系統268,18:43:00,18:43:00,200702_01,5,渋川駅,0,0,1
土曜_18時37分_系統268,18:45:00,18:45:00,200455_01,6,渋川駅,0,0,1
土曜_18時37分_系統268,18:46:00,18:46:00,200379_01,7,渋川駅,0,0,1
土曜_18時37分_系統268,18:47:00,18:47:00,201015_01,8,渋川駅,0,0,1
土曜_18時37分_系統268,18:48:00,18:48:00,200262_01,9,渋川駅,0,0,1
土曜_18時37分_系統268,18:49:00,18:49:00,200142_01,10,渋川駅,0,0,1
土曜_18時37分_系統268,18:50:00,18:50:00,200141_01,11,渋川駅,0,0,1
土曜_18時37分_系統268,18:51:00,18:51:00,200542_01,12,渋川駅,0,0,1
土曜_18時37分_系統268,18:53:00,18:53:00,201071_01,13,渋川駅,0,0,1
土曜_18時37分_系統268,18:55:00,18:55:00,200348_01,14,渋川駅,0,0,1
土曜_18時37分_系統268,18:56:00,18:56:00,200343_01,15,渋川駅,0,0,1
土曜_18時37分_系統268,18:57:00,18:57:00,200722_01,16,渋川駅,0,0,1
土曜_18時37分_系統268,18:59:00,18:59:00,200189_01,17,渋川駅,0,0,1
土曜_18時37分_系統268,19:01:00,19:01:00,201056_01,18,渋川駅,0,0,1
土曜_18時37分_系統268,19:02:00,19:02:00,200872_01,19,渋川駅,0,0,1
土曜_18時37分_系統268,19:03:00,19:03:00,200981_01,20,渋川駅,0,0,1
土曜_18時37分_系統268,19:04:00,19:04:00,201100_01,21,渋川駅,0,0,1
土曜_18時37分_系統268,19:05:00,19:05:00,200153_01,22,渋川駅,0,0,1
土曜_18時37分_系統268,19:05:00,19:05:00,200395_01,23,渋川駅,0,0,1
土曜_18時37分_系統268,19:06:00,19:06:00,200895_01,24,渋川駅,0,0,1
土曜_18時37分_系統268,19:07:00,19:07:00,200985_01,25,渋川駅,0,0,1
土曜_18時37分_系統268,19:07:00,19:07:00,200987_01,26,渋川駅,0,0,1
土曜_18時37分_系統268,19:08:00,19:08:00,200519_01,27,渋川駅,0,0,1
土曜_18時37分_系統268,19:09:00,19:09:00,200017_01,28,渋川駅,0,0,1
土曜_18時37分_系統268,19:10:00,19:10:00,200506_01,29,渋川駅,0,0,1
土曜_18時37分_系統268,19:12:00,19:12:00,200827_01,30,渋川駅,0,0,1
土曜_18時37分_系統268,19:14:00,19:14:00,200730_01,31,渋川駅,0,0,1
土曜_18時37分_系統268,19:15:00,19:15:00,200768_01,32,渋川駅,0,0,1
土曜_18時37分_系統268,19:18:00,19:18:00,200463_10,33,渋川駅,1,0,1
土曜_18時45分_系統267,18:45:00,18:45:00,200463_01,1,前橋駅,0,1,1
土曜_18時45分_系統267,18:46:00,18:46:00,200768_02,2,前橋駅,0,0,1
土曜_18時45分_系統267,18:47:00,18:47:00,200730_02,3,前橋駅,0,0,1
土曜_18時45分_系統267,18:49:00,18:49:00,200827_02,4,前橋駅,0,0,1
土曜_18時45分_系統267,18:50:00,18:50:00,200506_02,5,前橋駅,0,0,1
土曜_18時45分_系統267,18:51:00,18:51:00,200017_02,6,前橋駅,0,0,1
土曜_18時45分_系統267,18:52:00,18:52:00,200519_02,7,前橋駅,0,0,1
土曜_18時45分_系統267,18:52:00,18:52:00,200987_02,8,前橋駅,0,0,1
土曜_18時45分_系統267,18:54:00,18:54:00,200985_02,9,前橋駅,0,0,1
土曜_18時45分_系統267,18:55:00,18:55:00,200895_02,10,前橋駅,0,0,1
土曜_18時45分_系統267,18:56:00,18:56:00,200395_02,11,前橋駅,0,0,1
土曜_18時45分_系統267,18:56:00,18:56:00,200153_02,12,前橋駅,0,0,1
土曜_18時45分_系統267,18:57:00,18:57:00,201100_02,13,前橋駅,0,0,1
土曜_18時45分_系統267,18:58:00,18:58:00,200981_02,14,前橋駅,0,0,1
土曜_18時45分_系統267,18:59:00,18:59:00,200872_02,15,前橋駅,0,0,1
土曜_18時45分_系統267,19:00:00,19:00:00,201056_02,16,前橋駅,0,0,1
土曜_18時45分_系統267,19:02:00,19:02:00,200189_02,17,前橋駅,0,0,1
土曜_18時45分_系統267,19:03:00,19:03:00,200722_02,18,前橋駅,0,0,1
土曜_18時45分_系統267,19:04:00,19:04:00,200343_02,19,前橋駅,0,0,1
土曜_18時45分_系統267,19:05:00,19:05:00,200348_02,20,前橋駅,0,0,1
土曜_18時45分_系統267,19:07:00,19:07:00,201071_02,21,前橋駅,0,0,1
土曜_18時45分_系統267,19:09:00,19:09:00,200542_02,22,前橋駅,0,0,1
土曜_18時45分_系統267,19:11:00,19:11:00,200141_02,23,前橋駅,0,0,1
土曜_18時45分_系統267,19:12:00,19:12:00,200142_02,24,前橋駅,0,0,1
土曜_18時45分_系統267,19:14:00,19:14:00,200262_02,25,前橋駅,0,0,1
土曜_18時45分_系統267,19:15:00,19:15:00,201015_02,26,前橋駅,0,0,1
土曜_18時45分_系統267,19:16:00,19:16:00,200379_02,27,前橋駅,0,0,1
土曜_18時45分_系統267,19:17:00,19:17:00,200455_02,28,前橋駅,0,0,1
土曜_18時45分_系統267,19:18:00,19:18:00,200702_02,29,前橋駅,0,0,1
土曜_18時45分_系統267,19:19:00,19:19:00,200703_02,30,前橋駅,0,0,1
土曜_18時45分_系統267,19:21:00,19:21:00,201081_02,31,前橋駅,0,0,1
土曜_18時45分_系統267,19:23:00,19:23:00,200998_02,32,前橋駅,0,0,1
土曜_18時45分_系統267,19:26:00,19:26:00,200718_10,33,前橋駅,1,0,1
土曜_19時00分_系統532,19:00:00,19:00:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
土曜_19時00分_系統532,19:01:00,19:01:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:03:00,19:03:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:05:00,19:05:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:06:00,19:06:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:07:00,19:07:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:08:00,19:08:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:09:00,19:09:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:10:00,19:10:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:11:00,19:11:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:12:00,19:12:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:13:00,19:13:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:15:00,19:15:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:16:00,19:16:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:17:00,19:17:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
土曜_19時00分_系統532,19:19:00,19:19:00,200927_01,16,渋川駅,0,0,1
土曜_19時00分_系統532,19:20:00,19:20:00,201185_01,17,渋川駅,0,0,1
土曜_19時00分_系統532,19:24:00,19:24:00,200348_01,18,渋川駅,0,0,1
土曜_19時00分_系統532,19:25:00,19:25:00,200343_01,19,渋川駅,0,0,1
土曜_19時00分_系統532,19:26:00,19:26:00,200722_01,20,渋川駅,0,0,1
土曜_19時00分_系統532,19:27:00,19:27:00,200189_01,21,渋川駅,0,0,1
土曜_19時00分_系統532,19:29:00,19:29:00,201056_01,22,渋川駅,0,0,1
土曜_19時00分_系統532,19:30:00,19:30:00,200872_01,23,渋川駅,0,0,1
土曜_19時00分_系統532,19:31:00,19:31:00,200981_01,24,渋川駅,0,0,1
土曜_19時00分_系統532,19:32:00,19:32:00,201100_01,25,渋川駅,0,0,1
土曜_19時00分_系統532,19:33:00,19:33:00,200153_01,26,渋川駅,0,0,1
土曜_19時00分_系統532,19:33:00,19:33:00,200395_01,27,渋川駅,0,0,1
土曜_19時00分_系統532,19:34:00,19:34:00,200895_01,28,渋川駅,0,0,1
土曜_19時00分_系統532,19:35:00,19:35:00,200985_01,29,渋川駅,0,0,1
土曜_19時00分_系統532,19:35:00,19:35:00,200987_01,30,渋川駅,0,0,1
土曜_19時00分_系統532,19:36:00,19:36:00,200519_01,31,渋川駅,0,0,1
土曜_19時00分_系統532,19:37:00,19:37:00,200017_01,32,渋川駅,0,0,1
土曜_19時00分_系統532,19:38:00,19:38:00,200506_01,33,渋川駅,0,0,1
土曜_19時00分_系統532,19:39:00,19:39:00,200827_01,34,渋川駅,0,0,1
土曜_19時00分_系統532,19:41:00,19:41:00,200730_01,35,渋川駅,0,0,1
土曜_19時00分_系統532,19:42:00,19:42:00,200768_01,36,渋川駅,0,0,1
土曜_19時00分_系統532,19:45:00,19:45:00,200463_10,37,渋川駅,1,0,1
土曜_19時50分_系統268,19:50:00,19:50:00,200718_02,1,渋川駅,0,1,1
土曜_19時50分_系統268,19:51:00,19:51:00,200998_01,2,渋川駅,0,0,1
土曜_19時50分_系統268,19:53:00,19:53:00,201081_01,3,渋川駅,0,0,1
土曜_19時50分_系統268,19:55:00,19:55:00,200703_01,4,渋川駅,0,0,1
土曜_19時50分_系統268,19:56:00,19:56:00,200702_01,5,渋川駅,0,0,1
土曜_19時50分_系統268,19:58:00,19:58:00,200455_01,6,渋川駅,0,0,1
土曜_19時50分_系統268,19:59:00,19:59:00,200379_01,7,渋川駅,0,0,1
土曜_19時50分_系統268,20:00:00,20:00:00,201015_01,8,渋川駅,0,0,1
土曜_19時50分_系統268,20:01:00,20:01:00,200262_01,9,渋川駅,0,0,1
土曜_19時50分_系統268,20:02:00,20:02:00,200142_01,10,渋川駅,0,0,1
土曜_19時50分_系統268,20:03:00,20:03:00,200141_01,11,渋川駅,0,0,1
土曜_19時50分_系統268,20:04:00,20:04:00,200542_01,12,渋川駅,0,0,1
土曜_19時50分_系統268,20:06:00,20:06:00,201071_01,13,渋川駅,0,0,1
土曜_19時50分_系統268,20:08:00,20:08:00,200348_01,14,渋川駅,0,0,1
土曜_19時50分_系統268,20:09:00,20:09:00,200343_01,15,渋川駅,0,0,1
土曜_19時50分_系統268,20:10:00,20:10:00,200722_01,16,渋川駅,0,0,1
土曜_19時50分_系統268,20:11:00,20:11:00,200189_01,17,渋川駅,0,0,1
土曜_19時50分_系統268,20:13:00,20:13:00,201056_01,18,渋川駅,0,0,1
土曜_19時50分_系統268,20:14:00,20:14:00,200872_01,19,渋川駅,0,0,1
土曜_19時50分_系統268,20:15:00,20:15:00,200981_01,20,渋川駅,0,0,1
土曜_19時50分_系統268,20:16:00,20:16:00,201100_01,21,渋川駅,0,0,1
土曜_19時50分_系統268,20:17:00,20:17:00,200153_01,22,渋川駅,0,0,1
土曜_19時50分_系統268,20:17:00,20:17:00,200395_01,23,渋川駅,0,0,1
土曜_19時50分_系統268,20:18:00,20:18:00,200895_01,24,渋川駅,0,0,1
土曜_19時50分_系統268,20:19:00,20:19:00,200985_01,25,渋川駅,0,0,1
土曜_19時50分_系統268,20:19:00,20:19:00,200987_01,26,渋川駅,0,0,1
土曜_19時50分_系統268,20:20:00,20:20:00,200519_01,27,渋川駅,0,0,1
土曜_19時50分_系統268,20:21:00,20:21:00,200017_01,28,渋川駅,0,0,1
土曜_19時50分_系統268,20:22:00,20:22:00,200506_01,29,渋川駅,0,0,1
土曜_19時50分_系統268,20:23:00,20:23:00,200827_01,30,渋川駅,0,0,1
土曜_19時50分_系統268,20:25:00,20:25:00,200730_01,31,渋川駅,0,0,1
土曜_19時50分_系統268,20:26:00,20:26:00,200768_01,32,渋川駅,0,0,1
土曜_19時50分_系統268,20:29:00,20:29:00,200463_10,33,渋川駅,1,0,1
土曜_19時50分_系統267,19:50:00,19:50:00,200463_01,1,前橋駅,0,1,1
土曜_19時50分_系統267,19:51:00,19:51:00,200768_02,2,前橋駅,0,0,1
土曜_19時50分_系統267,19:52:00,19:52:00,200730_02,3,前橋駅,0,0,1
土曜_19時50分_系統267,19:54:00,19:54:00,200827_02,4,前橋駅,0,0,1
土曜_19時50分_系統267,19:55:00,19:55:00,200506_02,5,前橋駅,0,0,1
土曜_19時50分_系統267,19:56:00,19:56:00,200017_02,6,前橋駅,0,0,1
土曜_19時50分_系統267,19:57:00,19:57:00,200519_02,7,前橋駅,0,0,1
土曜_19時50分_系統267,19:57:00,19:57:00,200987_02,8,前橋駅,0,0,1
土曜_19時50分_系統267,19:59:00,19:59:00,200985_02,9,前橋駅,0,0,1
土曜_19時50分_系統267,20:00:00,20:00:00,200895_02,10,前橋駅,0,0,1
土曜_19時50分_系統267,20:01:00,20:01:00,200395_02,11,前橋駅,0,0,1
土曜_19時50分_系統267,20:01:00,20:01:00,200153_02,12,前橋駅,0,0,1
土曜_19時50分_系統267,20:02:00,20:02:00,201100_02,13,前橋駅,0,0,1
土曜_19時50分_系統267,20:03:00,20:03:00,200981_02,14,前橋駅,0,0,1
土曜_19時50分_系統267,20:04:00,20:04:00,200872_02,15,前橋駅,0,0,1
土曜_19時50分_系統267,20:05:00,20:05:00,201056_02,16,前橋駅,0,0,1
土曜_19時50分_系統267,20:06:00,20:06:00,200189_02,17,前橋駅,0,0,1
土曜_19時50分_系統267,20:07:00,20:07:00,200722_02,18,前橋駅,0,0,1
土曜_19時50分_系統267,20:08:00,20:08:00,200343_02,19,前橋駅,0,0,1
土曜_19時50分_系統267,20:09:00,20:09:00,200348_02,20,前橋駅,0,0,1
土曜_19時50分_系統267,20:10:00,20:10:00,201071_02,21,前橋駅,0,0,1
土曜_19時50分_系統267,20:11:00,20:11:00,200542_02,22,前橋駅,0,0,1
土曜_19時50分_系統267,20:12:00,20:12:00,200141_02,23,前橋駅,0,0,1
土曜_19時50分_系統267,20:13:00,20:13:00,200142_02,24,前橋駅,0,0,1
土曜_19時50分_系統267,20:15:00,20:15:00,200262_02,25,前橋駅,0,0,1
土曜_19時50分_系統267,20:16:00,20:16:00,201015_02,26,前橋駅,0,0,1
土曜_19時50分_系統267,20:16:00,20:16:00,200379_02,27,前橋駅,0,0,1
土曜_19時50分_系統267,20:17:00,20:17:00,200455_02,28,前橋駅,0,0,1
土曜_19時50分_系統267,20:18:00,20:18:00,200702_02,29,前橋駅,0,0,1
土曜_19時50分_系統267,20:19:00,20:19:00,200703_02,30,前橋駅,0,0,1
土曜_19時50分_系統267,20:21:00,20:21:00,201081_02,31,前橋駅,0,0,1
土曜_19時50分_系統267,20:23:00,20:23:00,200998_02,32,前橋駅,0,0,1
土曜_19時50分_系統267,20:26:00,20:26:00,200718_10,33,前橋駅,1,0,1
土曜_20時35分_系統267,20:35:00,20:35:00,200463_01,1,前橋駅,0,1,1
土曜_20時35分_系統267,20:36:00,20:36:00,200768_02,2,前橋駅,0,0,1
土曜_20時35分_系統267,20:37:00,20:37:00,200730_02,3,前橋駅,0,0,1
土曜_20時35分_系統267,20:39:00,20:39:00,200827_02,4,前橋駅,0,0,1
土曜_20時35分_系統267,20:40:00,20:40:00,200506_02,5,前橋駅,0,0,1
土曜_20時35分_系統267,20:41:00,20:41:00,200017_02,6,前橋駅,0,0,1
土曜_20時35分_系統267,20:42:00,20:42:00,200519_02,7,前橋駅,0,0,1
土曜_20時35分_系統267,20:42:00,20:42:00,200987_02,8,前橋駅,0,0,1
土曜_20時35分_系統267,20:44:00,20:44:00,200985_02,9,前橋駅,0,0,1
土曜_20時35分_系統267,20:45:00,20:45:00,200895_02,10,前橋駅,0,0,1
土曜_20時35分_系統267,20:46:00,20:46:00,200395_02,11,前橋駅,0,0,1
土曜_20時35分_系統267,20:46:00,20:46:00,200153_02,12,前橋駅,0,0,1
土曜_20時35分_系統267,20:47:00,20:47:00,201100_02,13,前橋駅,0,0,1
土曜_20時35分_系統267,20:48:00,20:48:00,200981_02,14,前橋駅,0,0,1
土曜_20時35分_系統267,20:49:00,20:49:00,200872_02,15,前橋駅,0,0,1
土曜_20時35分_系統267,20:50:00,20:50:00,201056_02,16,前橋駅,0,0,1
土曜_20時35分_系統267,20:51:00,20:51:00,200189_02,17,前橋駅,0,0,1
土曜_20時35分_系統267,20:52:00,20:52:00,200722_02,18,前橋駅,0,0,1
土曜_20時35分_系統267,20:53:00,20:53:00,200343_02,19,前橋駅,0,0,1
土曜_20時35分_系統267,20:54:00,20:54:00,200348_02,20,前橋駅,0,0,1
土曜_20時35分_系統267,20:55:00,20:55:00,201071_02,21,前橋駅,0,0,1
土曜_20時35分_系統267,20:56:00,20:56:00,200542_02,22,前橋駅,0,0,1
土曜_20時35分_系統267,20:57:00,20:57:00,200141_02,23,前橋駅,0,0,1
土曜_20時35分_系統267,20:58:00,20:58:00,200142_02,24,前橋駅,0,0,1
土曜_20時35分_系統267,21:00:00,21:00:00,200262_02,25,前橋駅,0,0,1
土曜_20時35分_系統267,21:01:00,21:01:00,201015_02,26,前橋駅,0,0,1
土曜_20時35分_系統267,21:01:00,21:01:00,200379_02,27,前橋駅,0,0,1
土曜_20時35分_系統267,21:02:00,21:02:00,200455_02,28,前橋駅,0,0,1
土曜_20時35分_系統267,21:03:00,21:03:00,200702_02,29,前橋駅,0,0,1
土曜_20時35分_系統267,21:04:00,21:04:00,200703_02,30,前橋駅,0,0,1
土曜_20時35分_系統267,21:06:00,21:06:00,201081_02,31,前橋駅,0,0,1
土曜_20時35分_系統267,21:08:00,21:08:00,200998_02,32,前橋駅,0,0,1
土曜_20時35分_系統267,21:11:00,21:11:00,200718_10,33,前橋駅,1,0,1
土曜_20時35分_系統532,20:35:00,20:35:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
土曜_20時35分_系統532,20:36:00,20:36:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:38:00,20:38:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:40:00,20:40:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:41:00,20:41:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:42:00,20:42:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:43:00,20:43:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:44:00,20:44:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:45:00,20:45:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:46:00,20:46:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:47:00,20:47:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:48:00,20:48:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:50:00,20:50:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:51:00,20:51:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:52:00,20:52:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
土曜_20時35分_系統532,20:54:00,20:54:00,200927_01,16,渋川駅,0,0,1
土曜_20時35分_系統532,20:55:00,20:55:00,201185_01,17,渋川駅,0,0,1
土曜_20時35分_系統532,20:59:00,20:59:00,200348_01,18,渋川駅,0,0,1
土曜_20時35分_系統532,21:00:00,21:00:00,200343_01,19,渋川駅,0,0,1
土曜_20時35分_系統532,21:01:00,21:01:00,200722_01,20,渋川駅,0,0,1
土曜_20時35分_系統532,21:02:00,21:02:00,200189_01,21,渋川駅,0,0,1
土曜_20時35分_系統532,21:04:00,21:04:00,201056_01,22,渋川駅,0,0,1
土曜_20時35分_系統532,21:05:00,21:05:00,200872_01,23,渋川駅,0,0,1
土曜_20時35分_系統532,21:06:00,21:06:00,200981_01,24,渋川駅,0,0,1
土曜_20時35分_系統532,21:07:00,21:07:00,201100_01,25,渋川駅,0,0,1
土曜_20時35分_系統532,21:08:00,21:08:00,200153_01,26,渋川駅,0,0,1
土曜_20時35分_系統532,21:08:00,21:08:00,200395_01,27,渋川駅,0,0,1
土曜_20時35分_系統532,21:09:00,21:09:00,200895_01,28,渋川駅,0,0,1
土曜_20時35分_系統532,21:10:00,21:10:00,200985_01,29,渋川駅,0,0,1
土曜_20時35分_系統532,21:10:00,21:10:00,200987_01,30,渋川駅,0,0,1
土曜_20時35分_系統532,21:11:00,21:11:00,200519_01,31,渋川駅,0,0,1
土曜_20時35分_系統532,21:12:00,21:12:00,200017_01,32,渋川駅,0,0,1
土曜_20時35分_系統532,21:13:00,21:13:00,200506_01,33,渋川駅,0,0,1
土曜_20時35分_系統532,21:14:00,21:14:00,200827_01,34,渋川駅,0,0,1
土曜_20時35分_系統532,21:16:00,21:16:00,200730_01,35,渋川駅,0,0,1
土曜_20時35分_系統532,21:17:00,21:17:00,200768_01,36,渋川駅,0,0,1
土曜_20時35分_系統532,21:20:00,21:20:00,200463_10,37,渋川駅,1,0,1
土曜_21時24分_系統532,21:24:00,21:24:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
土曜_21時24分_系統532,21:25:00,21:25:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:27:00,21:27:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:29:00,21:29:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:30:00,21:30:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:31:00,21:31:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:32:00,21:32:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:33:00,21:33:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:34:00,21:34:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:35:00,21:35:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:36:00,21:36:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:37:00,21:37:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:39:00,21:39:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:40:00,21:40:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:41:00,21:41:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
土曜_21時24分_系統532,21:43:00,21:43:00,200927_01,16,渋川駅,0,0,1
土曜_21時24分_系統532,21:44:00,21:44:00,201185_01,17,渋川駅,0,0,1
土曜_21時24分_系統532,21:48:00,21:48:00,200348_01,18,渋川駅,0,0,1
土曜_21時24分_系統532,21:49:00,21:49:00,200343_01,19,渋川駅,0,0,1
土曜_21時24分_系統532,21:50:00,21:50:00,200722_01,20,渋川駅,0,0,1
土曜_21時24分_系統532,21:51:00,21:51:00,200189_01,21,渋川駅,0,0,1
土曜_21時24分_系統532,21:53:00,21:53:00,201056_01,22,渋川駅,0,0,1
土曜_21時24分_系統532,21:54:00,21:54:00,200872_01,23,渋川駅,0,0,1
土曜_21時24分_系統532,21:55:00,21:55:00,200981_01,24,渋川駅,0,0,1
土曜_21時24分_系統532,21:56:00,21:56:00,201100_01,25,渋川駅,0,0,1
土曜_21時24分_系統532,21:57:00,21:57:00,200153_01,26,渋川駅,0,0,1
土曜_21時24分_系統532,21:57:00,21:57:00,200395_01,27,渋川駅,0,0,1
土曜_21時24分_系統532,21:58:00,21:58:00,200895_01,28,渋川駅,0,0,1
土曜_21時24分_系統532,21:59:00,21:59:00,200985_01,29,渋川駅,0,0,1
土曜_21時24分_系統532,21:59:00,21:59:00,200987_01,30,渋川駅,0,0,1
土曜_21時24分_系統532,22:00:00,22:00:00,200519_01,31,渋川駅,0,0,1
土曜_21時24分_系統532,22:01:00,22:01:00,200017_01,32,渋川駅,0,0,1
土曜_21時24分_系統532,22:02:00,22:02:00,200506_01,33,渋川駅,0,0,1
土曜_21時24分_系統532,22:03:00,22:03:00,200827_01,34,渋川駅,0,0,1
土曜_21時24分_系統532,22:05:00,22:05:00,200730_01,35,渋川駅,0,0,1
土曜_21時24分_系統532,22:06:00,22:06:00,200768_01,36,渋川駅,0,0,1
土曜_21時24分_系統532,22:09:00,22:09:00,200463_10,37,渋川駅,1,0,1
日祝_05時50分_系統267,05:50:00,05:50:00,200463_01,1,前橋駅,0,1,1
日祝_05時50分_系統267,05:51:00,05:51:00,200768_02,2,前橋駅,0,0,1
日祝_05時50分_系統267,05:52:00,05:52:00,200730_02,3,前橋駅,0,0,1
日祝_05時50分_系統267,05:54:00,05:54:00,200827_02,4,前橋駅,0,0,1
日祝_05時50分_系統267,05:55:00,05:55:00,200506_02,5,前橋駅,0,0,1
日祝_05時50分_系統267,05:56:00,05:56:00,200017_02,6,前橋駅,0,0,1
日祝_05時50分_系統267,05:57:00,05:57:00,200519_02,7,前橋駅,0,0,1
日祝_05時50分_系統267,05:57:00,05:57:00,200987_02,8,前橋駅,0,0,1
日祝_05時50分_系統267,05:59:00,05:59:00,200985_02,9,前橋駅,0,0,1
日祝_05時50分_系統267,06:00:00,06:00:00,200895_02,10,前橋駅,0,0,1
日祝_05時50分_系統267,06:01:00,06:01:00,200395_02,11,前橋駅,0,0,1
日祝_05時50分_系統267,06:01:00,06:01:00,200153_02,12,前橋駅,0,0,1
日祝_05時50分_系統267,06:02:00,06:02:00,201100_02,13,前橋駅,0,0,1
日祝_05時50分_系統267,06:03:00,06:03:00,200981_02,14,前橋駅,0,0,1
日祝_05時50分_系統267,06:04:00,06:04:00,200872_02,15,前橋駅,0,0,1
日祝_05時50分_系統267,06:05:00,06:05:00,201056_02,16,前橋駅,0,0,1
日祝_05時50分_系統267,06:07:00,06:07:00,200189_02,17,前橋駅,0,0,1
日祝_05時50分_系統267,06:08:00,06:08:00,200722_02,18,前橋駅,0,0,1
日祝_05時50分_系統267,06:09:00,06:09:00,200343_02,19,前橋駅,0,0,1
日祝_05時50分_系統267,06:10:00,06:10:00,200348_02,20,前橋駅,0,0,1
日祝_05時50分_系統267,06:12:00,06:12:00,201071_02,21,前橋駅,0,0,1
日祝_05時50分_系統267,06:13:00,06:13:00,200542_02,22,前橋駅,0,0,1
日祝_05時50分_系統267,06:14:00,06:14:00,200141_02,23,前橋駅,0,0,1
日祝_05時50分_系統267,06:15:00,06:15:00,200142_02,24,前橋駅,0,0,1
日祝_05時50分_系統267,06:17:00,06:17:00,200262_02,25,前橋駅,0,0,1
日祝_05時50分_系統267,06:18:00,06:18:00,201015_02,26,前橋駅,0,0,1
日祝_05時50分_系統267,06:18:00,06:18:00,200379_02,27,前橋駅,0,0,1
日祝_05時50分_系統267,06:19:00,06:19:00,200455_02,28,前橋駅,0,0,1
日祝_05時50分_系統267,06:20:00,06:20:00,200702_02,29,前橋駅,0,0,1
日祝_05時50分_系統267,06:21:00,06:21:00,200703_02,30,前橋駅,0,0,1
日祝_05時50分_系統267,06:22:00,06:22:00,201081_02,31,前橋駅,0,0,1
日祝_05時50分_系統267,06:23:00,06:23:00,200998_02,32,前橋駅,0,0,1
日祝_05時50分_系統267,06:27:00,06:27:00,200718_10,33,前橋駅,1,0,1
日祝_06時25分_系統267,06:25:00,06:25:00,200463_01,1,前橋駅,0,1,1
日祝_06時25分_系統267,06:26:00,06:26:00,200768_02,2,前橋駅,0,0,1
日祝_06時25分_系統267,06:27:00,06:27:00,200730_02,3,前橋駅,0,0,1
日祝_06時25分_系統267,06:29:00,06:29:00,200827_02,4,前橋駅,0,0,1
日祝_06時25分_系統267,06:30:00,06:30:00,200506_02,5,前橋駅,0,0,1
日祝_06時25分_系統267,06:31:00,06:31:00,200017_02,6,前橋駅,0,0,1
日祝_06時25分_系統267,06:32:00,06:32:00,200519_02,7,前橋駅,0,0,1
日祝_06時25分_系統267,06:32:00,06:32:00,200987_02,8,前橋駅,0,0,1
日祝_06時25分_系統267,06:34:00,06:34:00,200985_02,9,前橋駅,0,0,1
日祝_06時25分_系統267,06:35:00,06:35:00,200895_02,10,前橋駅,0,0,1
日祝_06時25分_系統267,06:36:00,06:36:00,200395_02,11,前橋駅,0,0,1
日祝_06時25分_系統267,06:36:00,06:36:00,200153_02,12,前橋駅,0,0,1
日祝_06時25分_系統267,06:37:00,06:37:00,201100_02,13,前橋駅,0,0,1
日祝_06時25分_系統267,06:38:00,06:38:00,200981_02,14,前橋駅,0,0,1
日祝_06時25分_系統267,06:39:00,06:39:00,200872_02,15,前橋駅,0,0,1
日祝_06時25分_系統267,06:40:00,06:40:00,201056_02,16,前橋駅,0,0,1
日祝_06時25分_系統267,06:42:00,06:42:00,200189_02,17,前橋駅,0,0,1
日祝_06時25分_系統267,06:43:00,06:43:00,200722_02,18,前橋駅,0,0,1
日祝_06時25分_系統267,06:44:00,06:44:00,200343_02,19,前橋駅,0,0,1
日祝_06時25分_系統267,06:45:00,06:45:00,200348_02,20,前橋駅,0,0,1
日祝_06時25分_系統267,06:47:00,06:47:00,201071_02,21,前橋駅,0,0,1
日祝_06時25分_系統267,06:48:00,06:48:00,200542_02,22,前橋駅,0,0,1
日祝_06時25分_系統267,06:49:00,06:49:00,200141_02,23,前橋駅,0,0,1
日祝_06時25分_系統267,06:50:00,06:50:00,200142_02,24,前橋駅,0,0,1
日祝_06時25分_系統267,06:52:00,06:52:00,200262_02,25,前橋駅,0,0,1
日祝_06時25分_系統267,06:53:00,06:53:00,201015_02,26,前橋駅,0,0,1
日祝_06時25分_系統267,06:53:00,06:53:00,200379_02,27,前橋駅,0,0,1
日祝_06時25分_系統267,06:54:00,06:54:00,200455_02,28,前橋駅,0,0,1
日祝_06時25分_系統267,06:55:00,06:55:00,200702_02,29,前橋駅,0,0,1
日祝_06時25分_系統267,06:56:00,06:56:00,200703_02,30,前橋駅,0,0,1
日祝_06時25分_系統267,06:57:00,06:57:00,201081_02,31,前橋駅,0,0,1
日祝_06時25分_系統267,06:59:00,06:59:00,200998_02,32,前橋駅,0,0,1
日祝_06時25分_系統267,07:02:00,07:02:00,200718_10,33,前橋駅,1,0,1
日祝_06時43分_系統267,06:43:00,06:43:00,200463_01,1,前橋駅,0,1,1
日祝_06時43分_系統267,06:44:00,06:44:00,200768_02,2,前橋駅,0,0,1
日祝_06時43分_系統267,06:45:00,06:45:00,200730_02,3,前橋駅,0,0,1
日祝_06時43分_系統267,06:47:00,06:47:00,200827_02,4,前橋駅,0,0,1
日祝_06時43分_系統267,06:48:00,06:48:00,200506_02,5,前橋駅,0,0,1
日祝_06時43分_系統267,06:49:00,06:49:00,200017_02,6,前橋駅,0,0,1
日祝_06時43分_系統267,06:50:00,06:50:00,200519_02,7,前橋駅,0,0,1
日祝_06時43分_系統267,06:50:00,06:50:00,200987_02,8,前橋駅,0,0,1
日祝_06時43分_系統267,06:52:00,06:52:00,200985_02,9,前橋駅,0,0,1
日祝_06時43分_系統267,06:53:00,06:53:00,200895_02,10,前橋駅,0,0,1
日祝_06時43分_系統267,06:54:00,06:54:00,200395_02,11,前橋駅,0,0,1
日祝_06時43分_系統267,06:54:00,06:54:00,200153_02,12,前橋駅,0,0,1
日祝_06時43分_系統267,06:55:00,06:55:00,201100_02,13,前橋駅,0,0,1
日祝_06時43分_系統267,06:56:00,06:56:00,200981_02,14,前橋駅,0,0,1
日祝_06時43分_系統267,06:57:00,06:57:00,200872_02,15,前橋駅,0,0,1
日祝_06時43分_系統267,06:58:00,06:58:00,201056_02,16,前橋駅,0,0,1
日祝_06時43分_系統267,07:00:00,07:00:00,200189_02,17,前橋駅,0,0,1
日祝_06時43分_系統267,07:01:00,07:01:00,200722_02,18,前橋駅,0,0,1
日祝_06時43分_系統267,07:02:00,07:02:00,200343_02,19,前橋駅,0,0,1
日祝_06時43分_系統267,07:03:00,07:03:00,200348_02,20,前橋駅,0,0,1
日祝_06時43分_系統267,07:05:00,07:05:00,201071_02,21,前橋駅,0,0,1
日祝_06時43分_系統267,07:06:00,07:06:00,200542_02,22,前橋駅,0,0,1
日祝_06時43分_系統267,07:07:00,07:07:00,200141_02,23,前橋駅,0,0,1
日祝_06時43分_系統267,07:08:00,07:08:00,200142_02,24,前橋駅,0,0,1
日祝_06時43分_系統267,07:10:00,07:10:00,200262_02,25,前橋駅,0,0,1
日祝_06時43分_系統267,07:11:00,07:11:00,201015_02,26,前橋駅,0,0,1
日祝_06時43分_系統267,07:11:00,07:11:00,200379_02,27,前橋駅,0,0,1
日祝_06時43分_系統267,07:12:00,07:12:00,200455_02,28,前橋駅,0,0,1
日祝_06時43分_系統267,07:13:00,07:13:00,200702_02,29,前橋駅,0,0,1
日祝_06時43分_系統267,07:14:00,07:14:00,200703_02,30,前橋駅,0,0,1
日祝_06時43分_系統267,07:16:00,07:16:00,201081_02,31,前橋駅,0,0,1
日祝_06時43分_系統267,07:18:00,07:18:00,200998_02,32,前橋駅,0,0,1
日祝_06時43分_系統267,07:21:00,07:21:00,200718_10,33,前橋駅,1,0,1
日祝_06時47分_系統268,06:47:00,06:47:00,200718_02,1,渋川駅,0,1,1
日祝_06時47分_系統268,06:48:00,06:48:00,200998_01,2,渋川駅,0,0,1
日祝_06時47分_系統268,06:50:00,06:50:00,201081_01,3,渋川駅,0,0,1
日祝_06時47分_系統268,06:51:00,06:51:00,200703_01,4,渋川駅,0,0,1
日祝_06時47分_系統268,06:51:00,06:51:00,200702_01,5,渋川駅,0,0,1
日祝_06時47分_系統268,06:52:00,06:52:00,200455_01,6,渋川駅,0,0,1
日祝_06時47分_系統268,06:53:00,06:53:00,200379_01,7,渋川駅,0,0,1
日祝_06時47分_系統268,06:54:00,06:54:00,201015_01,8,渋川駅,0,0,1
日祝_06時47分_系統268,06:55:00,06:55:00,200262_01,9,渋川駅,0,0,1
日祝_06時47分_系統268,06:56:00,06:56:00,200142_01,10,渋川駅,0,0,1
日祝_06時47分_系統268,06:57:00,06:57:00,200141_01,11,渋川駅,0,0,1
日祝_06時47分_系統268,06:58:00,06:58:00,200542_01,12,渋川駅,0,0,1
日祝_06時47分_系統268,07:00:00,07:00:00,201071_01,13,渋川駅,0,0,1
日祝_06時47分_系統268,07:01:00,07:01:00,200348_01,14,渋川駅,0,0,1
日祝_06時47分_系統268,07:02:00,07:02:00,200343_01,15,渋川駅,0,0,1
日祝_06時47分_系統268,07:03:00,07:03:00,200722_01,16,渋川駅,0,0,1
日祝_06時47分_系統268,07:05:00,07:05:00,200189_01,17,渋川駅,0,0,1
日祝_06時47分_系統268,07:07:00,07:07:00,201056_01,18,渋川駅,0,0,1
日祝_06時47分_系統268,07:08:00,07:08:00,200872_01,19,渋川駅,0,0,1
日祝_06時47分_系統268,07:09:00,07:09:00,200981_01,20,渋川駅,0,0,1
日祝_06時47分_系統268,07:10:00,07:10:00,201100_01,21,渋川駅,0,0,1
日祝_06時47分_系統268,07:11:00,07:11:00,200153_01,22,渋川駅,0,0,1
日祝_06時47分_系統268,07:11:00,07:11:00,200395_01,23,渋川駅,0,0,1
日祝_06時47分_系統268,07:12:00,07:12:00,200895_01,24,渋川駅,0,0,1
日祝_06時47分_系統268,07:13:00,07:13:00,200985_01,25,渋川駅,0,0,1
日祝_06時47分_系統268,07:13:00,07:13:00,200987_01,26,渋川駅,0,0,1
日祝_06時47分_系統268,07:14:00,07:14:00,200519_01,27,渋川駅,0,0,1
日祝_06時47分_系統268,07:15:00,07:15:00,200017_01,28,渋川駅,0,0,1
日祝_06時47分_系統268,07:16:00,07:16:00,200506_01,29,渋川駅,0,0,1
日祝_06時47分_系統268,07:17:00,07:17:00,200827_01,30,渋川駅,0,0,1
日祝_06時47分_系統268,07:19:00,07:19:00,200730_01,31,渋川駅,0,0,1
日祝_06時47分_系統268,07:20:00,07:20:00,200768_01,32,渋川駅,0,0,1
日祝_06時47分_系統268,07:23:00,07:23:00,200463_10,33,渋川駅,1,0,1
日祝_07時05分_系統267,07:05:00,07:05:00,200463_01,1,前橋駅,0,1,1
日祝_07時05分_系統267,07:06:00,07:06:00,200768_02,2,前橋駅,0,0,1
日祝_07時05分_系統267,07:07:00,07:07:00,200730_02,3,前橋駅,0,0,1
日祝_07時05分_系統267,07:09:00,07:09:00,200827_02,4,前橋駅,0,0,1
日祝_07時05分_系統267,07:10:00,07:10:00,200506_02,5,前橋駅,0,0,1
日祝_07時05分_系統267,07:11:00,07:11:00,200017_02,6,前橋駅,0,0,1
日祝_07時05分_系統267,07:12:00,07:12:00,200519_02,7,前橋駅,0,0,1
日祝_07時05分_系統267,07:12:00,07:12:00,200987_02,8,前橋駅,0,0,1
日祝_07時05分_系統267,07:14:00,07:14:00,200985_02,9,前橋駅,0,0,1
日祝_07時05分_系統267,07:15:00,07:15:00,200895_02,10,前橋駅,0,0,1
日祝_07時05分_系統267,07:16:00,07:16:00,200395_02,11,前橋駅,0,0,1
日祝_07時05分_系統267,07:16:00,07:16:00,200153_02,12,前橋駅,0,0,1
日祝_07時05分_系統267,07:17:00,07:17:00,201100_02,13,前橋駅,0,0,1
日祝_07時05分_系統267,07:18:00,07:18:00,200981_02,14,前橋駅,0,0,1
日祝_07時05分_系統267,07:19:00,07:19:00,200872_02,15,前橋駅,0,0,1
日祝_07時05分_系統267,07:20:00,07:20:00,201056_02,16,前橋駅,0,0,1
日祝_07時05分_系統267,07:22:00,07:22:00,200189_02,17,前橋駅,0,0,1
日祝_07時05分_系統267,07:23:00,07:23:00,200722_02,18,前橋駅,0,0,1
日祝_07時05分_系統267,07:24:00,07:24:00,200343_02,19,前橋駅,0,0,1
日祝_07時05分_系統267,07:25:00,07:25:00,200348_02,20,前橋駅,0,0,1
日祝_07時05分_系統267,07:27:00,07:27:00,201071_02,21,前橋駅,0,0,1
日祝_07時05分_系統267,07:28:00,07:28:00,200542_02,22,前橋駅,0,0,1
日祝_07時05分_系統267,07:29:00,07:29:00,200141_02,23,前橋駅,0,0,1
日祝_07時05分_系統267,07:30:00,07:30:00,200142_02,24,前橋駅,0,0,1
日祝_07時05分_系統267,07:32:00,07:32:00,200262_02,25,前橋駅,0,0,1
日祝_07時05分_系統267,07:33:00,07:33:00,201015_02,26,前橋駅,0,0,1
日祝_07時05分_系統267,07:33:00,07:33:00,200379_02,27,前橋駅,0,0,1
日祝_07時05分_系統267,07:34:00,07:34:00,200455_02,28,前橋駅,0,0,1
日祝_07時05分_系統267,07:35:00,07:35:00,200702_02,29,前橋駅,0,0,1
日祝_07時05分_系統267,07:36:00,07:36:00,200703_02,30,前橋駅,0,0,1
日祝_07時05分_系統267,07:38:00,07:38:00,201081_02,31,前橋駅,0,0,1
日祝_07時05分_系統267,07:40:00,07:40:00,200998_02,32,前橋駅,0,0,1
日祝_07時05分_系統267,07:43:00,07:43:00,200718_10,33,前橋駅,1,0,1
日祝_07時12分_系統268,07:12:00,07:12:00,200718_02,1,渋川駅,0,1,1
日祝_07時12分_系統268,07:13:00,07:13:00,200998_01,2,渋川駅,0,0,1
日祝_07時12分_系統268,07:15:00,07:15:00,201081_01,3,渋川駅,0,0,1
日祝_07時12分_系統268,07:16:00,07:16:00,200703_01,4,渋川駅,0,0,1
日祝_07時12分_系統268,07:16:00,07:16:00,200702_01,5,渋川駅,0,0,1
日祝_07時12分_系統268,07:17:00,07:17:00,200455_01,6,渋川駅,0,0,1
日祝_07時12分_系統268,07:18:00,07:18:00,200379_01,7,渋川駅,0,0,1
日祝_07時12分_系統268,07:19:00,07:19:00,201015_01,8,渋川駅,0,0,1
日祝_07時12分_系統268,07:20:00,07:20:00,200262_01,9,渋川駅,0,0,1
日祝_07時12分_系統268,07:21:00,07:21:00,200142_01,10,渋川駅,0,0,1
日祝_07時12分_系統268,07:22:00,07:22:00,200141_01,11,渋川駅,0,0,1
日祝_07時12分_系統268,07:23:00,07:23:00,200542_01,12,渋川駅,0,0,1
日祝_07時12分_系統268,07:25:00,07:25:00,201071_01,13,渋川駅,0,0,1
日祝_07時12分_系統268,07:26:00,07:26:00,200348_01,14,渋川駅,0,0,1
日祝_07時12分_系統268,07:27:00,07:27:00,200343_01,15,渋川駅,0,0,1
日祝_07時12分_系統268,07:28:00,07:28:00,200722_01,16,渋川駅,0,0,1
日祝_07時12分_系統268,07:30:00,07:30:00,200189_01,17,渋川駅,0,0,1
日祝_07時12分_系統268,07:32:00,07:32:00,201056_01,18,渋川駅,0,0,1
日祝_07時12分_系統268,07:33:00,07:33:00,200872_01,19,渋川駅,0,0,1
日祝_07時12分_系統268,07:34:00,07:34:00,200981_01,20,渋川駅,0,0,1
日祝_07時12分_系統268,07:35:00,07:35:00,201100_01,21,渋川駅,0,0,1
日祝_07時12分_系統268,07:36:00,07:36:00,200153_01,22,渋川駅,0,0,1
日祝_07時12分_系統268,07:36:00,07:36:00,200395_01,23,渋川駅,0,0,1
日祝_07時12分_系統268,07:37:00,07:37:00,200895_01,24,渋川駅,0,0,1
日祝_07時12分_系統268,07:38:00,07:38:00,200985_01,25,渋川駅,0,0,1
日祝_07時12分_系統268,07:38:00,07:38:00,200987_01,26,渋川駅,0,0,1
日祝_07時12分_系統268,07:39:00,07:39:00,200519_01,27,渋川駅,0,0,1
日祝_07時12分_系統268,07:40:00,07:40:00,200017_01,28,渋川駅,0,0,1
日祝_07時12分_系統268,07:41:00,07:41:00,200506_01,29,渋川駅,0,0,1
日祝_07時12分_系統268,07:42:00,07:42:00,200827_01,30,渋川駅,0,0,1
日祝_07時12分_系統268,07:44:00,07:44:00,200730_01,31,渋川駅,0,0,1
日祝_07時12分_系統268,07:45:00,07:45:00,200768_01,32,渋川駅,0,0,1
日祝_07時12分_系統268,07:48:00,07:48:00,200463_10,33,渋川駅,1,0,1
日祝_07時25分_系統267,07:25:00,07:25:00,200463_01,1,前橋駅,0,1,1
日祝_07時25分_系統267,07:26:00,07:26:00,200768_02,2,前橋駅,0,0,1
日祝_07時25分_系統267,07:27:00,07:27:00,200730_02,3,前橋駅,0,0,1
日祝_07時25分_系統267,07:29:00,07:29:00,200827_02,4,前橋駅,0,0,1
日祝_07時25分_系統267,07:30:00,07:30:00,200506_02,5,前橋駅,0,0,1
日祝_07時25分_系統267,07:31:00,07:31:00,200017_02,6,前橋駅,0,0,1
日祝_07時25分_系統267,07:32:00,07:32:00,200519_02,7,前橋駅,0,0,1
日祝_07時25分_系統267,07:32:00,07:32:00,200987_02,8,前橋駅,0,0,1
日祝_07時25分_系統267,07:34:00,07:34:00,200985_02,9,前橋駅,0,0,1
日祝_07時25分_系統267,07:35:00,07:35:00,200895_02,10,前橋駅,0,0,1
日祝_07時25分_系統267,07:36:00,07:36:00,200395_02,11,前橋駅,0,0,1
日祝_07時25分_系統267,07:36:00,07:36:00,200153_02,12,前橋駅,0,0,1
日祝_07時25分_系統267,07:37:00,07:37:00,201100_02,13,前橋駅,0,0,1
日祝_07時25分_系統267,07:38:00,07:38:00,200981_02,14,前橋駅,0,0,1
日祝_07時25分_系統267,07:39:00,07:39:00,200872_02,15,前橋駅,0,0,1
日祝_07時25分_系統267,07:40:00,07:40:00,201056_02,16,前橋駅,0,0,1
日祝_07時25分_系統267,07:42:00,07:42:00,200189_02,17,前橋駅,0,0,1
日祝_07時25分_系統267,07:43:00,07:43:00,200722_02,18,前橋駅,0,0,1
日祝_07時25分_系統267,07:44:00,07:44:00,200343_02,19,前橋駅,0,0,1
日祝_07時25分_系統267,07:45:00,07:45:00,200348_02,20,前橋駅,0,0,1
日祝_07時25分_系統267,07:47:00,07:47:00,201071_02,21,前橋駅,0,0,1
日祝_07時25分_系統267,07:48:00,07:48:00,200542_02,22,前橋駅,0,0,1
日祝_07時25分_系統267,07:49:00,07:49:00,200141_02,23,前橋駅,0,0,1
日祝_07時25分_系統267,07:50:00,07:50:00,200142_02,24,前橋駅,0,0,1
日祝_07時25分_系統267,07:52:00,07:52:00,200262_02,25,前橋駅,0,0,1
日祝_07時25分_系統267,07:53:00,07:53:00,201015_02,26,前橋駅,0,0,1
日祝_07時25分_系統267,07:53:00,07:53:00,200379_02,27,前橋駅,0,0,1
日祝_07時25分_系統267,07:54:00,07:54:00,200455_02,28,前橋駅,0,0,1
日祝_07時25分_系統267,07:55:00,07:55:00,200702_02,29,前橋駅,0,0,1
日祝_07時25分_系統267,07:56:00,07:56:00,200703_02,30,前橋駅,0,0,1
日祝_07時25分_系統267,07:58:00,07:58:00,201081_02,31,前橋駅,0,0,1
日祝_07時25分_系統267,08:00:00,08:00:00,200998_02,32,前橋駅,0,0,1
日祝_07時25分_系統267,08:03:00,08:03:00,200718_10,33,前橋駅,1,0,1
日祝_07時30分_系統264,07:30:00,07:30:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
日祝_07時30分_系統264,07:31:00,07:31:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:33:00,07:33:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:35:00,07:35:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:36:00,07:36:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:38:00,07:38:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:39:00,07:39:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:40:00,07:40:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:41:00,07:41:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:42:00,07:42:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:43:00,07:43:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:44:00,07:44:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:46:00,07:46:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:47:00,07:47:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:48:00,07:48:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:49:00,07:49:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:51:00,07:51:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:54:00,07:54:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:56:00,07:56:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:57:00,07:57:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:58:00,07:58:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,07:59:00,07:59:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:00:00,08:00:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:00:00,08:00:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:01:00,08:01:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:02:00,08:02:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:02:00,08:02:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:03:00,08:03:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:04:00,08:04:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:05:00,08:05:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:06:00,08:06:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:08:00,08:08:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:09:00,08:09:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
日祝_07時30分_系統264,08:10:00,08:10:00,200463_06,34,渋川市内循環,0,0,1
日祝_07時30分_系統264,08:11:00,08:11:00,200468_01,35,渋川市内循環,0,0,1
日祝_07時30分_系統264,08:13:00,08:13:00,200466_01,36,渋川市内循環,0,0,1
日祝_07時30分_系統264,08:14:00,08:14:00,200704_01,37,渋川市内循環,0,0,1
日祝_07時30分_系統264,08:15:00,08:15:00,200476_02,38,渋川市内循環,0,0,1
日祝_07時30分_系統264,08:16:00,08:16:00,200477_02,39,渋川市内循環,0,0,1
日祝_07時30分_系統264,08:17:00,08:17:00,200430_02,40,渋川市内循環,0,0,1
日祝_07時30分_系統264,08:18:00,08:18:00,200007_02,41,渋川市内循環,0,0,1
日祝_07時30分_系統264,08:23:00,08:23:00,210463_10,42,渋川市内循環,1,0,1
日祝_07時35分_系統528,07:35:00,07:35:00,200927_01,1,前橋駅,0,1,1
日祝_07時35分_系統528,07:35:00,07:35:00,200800_02,2,前橋駅,0,0,1
日祝_07時35分_系統528,07:36:00,07:36:00,200928_02,3,前橋駅,0,0,1
日祝_07時35分_系統528,07:38:00,07:38:00,201071_02,4,前橋駅,0,0,1
日祝_07時35分_系統528,07:39:00,07:39:00,200542_02,5,前橋駅,0,0,1
日祝_07時35分_系統528,07:40:00,07:40:00,200141_02,6,前橋駅,0,0,1
日祝_07時35分_系統528,07:41:00,07:41:00,200142_02,7,前橋駅,0,0,1
日祝_07時35分_系統528,07:43:00,07:43:00,200262_02,8,前橋駅,0,0,1
日祝_07時35分_系統528,07:44:00,07:44:00,201015_02,9,前橋駅,0,0,1
日祝_07時35分_系統528,07:44:00,07:44:00,200379_02,10,前橋駅,0,0,1
日祝_07時35分_系統528,07:45:00,07:45:00,200455_02,11,前橋駅,0,0,1
日祝_07時35分_系統528,07:46:00,07:46:00,200702_02,12,前橋駅,0,0,1
日祝_07時35分_系統528,07:47:00,07:47:00,200703_02,13,前橋駅,0,0,1
日祝_07時35分_系統528,07:49:00,07:49:00,201081_02,14,前橋駅,0,0,1
日祝_07時35分_系統528,07:51:00,07:51:00,200998_02,15,前橋駅,0,0,1
日祝_07時35分_系統528,07:54:00,07:54:00,200718_10,16,前橋駅,1,0,1
日祝_07時40分_系統586,07:40:00,07:40:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
日祝_07時40分_系統586,07:41:00,07:41:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_07時40分_系統586,07:43:00,07:43:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_07時40分_系統586,07:45:00,07:45:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_07時40分_系統586,07:46:00,07:46:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_07時40分_系統586,07:47:00,07:47:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_07時40分_系統586,07:48:00,07:48:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_07時40分_系統586,07:49:00,07:49:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_07時40分_系統586,07:50:00,07:50:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_07時40分_系統586,07:51:00,07:51:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_07時40分_系統586,07:53:00,07:53:00,200261_01,11,群馬大学荒牧,0,0,1
日祝_07時40分_系統586,07:54:00,07:54:00,200503_02,12,群馬大学荒牧,0,0,1
日祝_07時40分_系統586,07:55:00,07:55:00,200142_01,13,群馬大学荒牧,0,0,1
日祝_07時40分_系統586,07:56:00,07:56:00,200141_01,14,群馬大学荒牧,0,0,1
日祝_07時40分_系統586,07:57:00,07:57:00,200542_01,15,群馬大学荒牧,0,0,1
日祝_07時40分_系統586,07:59:00,07:59:00,201071_01,16,群馬大学荒牧,0,0,1
日祝_07時40分_系統586,08:00:00,08:00:00,200348_01,17,群馬大学荒牧,0,0,1
日祝_07時40分_系統586,08:01:00,08:01:00,200343_01,18,群馬大学荒牧,0,0,1
日祝_07時40分_系統586,08:02:00,08:02:00,200722_01,19,群馬大学荒牧,0,0,1
日祝_07時40分_系統586,08:05:00,08:05:00,200273_01,20,群馬大学荒牧,1,0,1
日祝_07時45分_系統267,07:45:00,07:45:00,200463_01,1,前橋駅,0,1,1
日祝_07時45分_系統267,07:46:00,07:46:00,200768_02,2,前橋駅,0,0,1
日祝_07時45分_系統267,07:47:00,07:47:00,200730_02,3,前橋駅,0,0,1
日祝_07時45分_系統267,07:49:00,07:49:00,200827_02,4,前橋駅,0,0,1
日祝_07時45分_系統267,07:50:00,07:50:00,200506_02,5,前橋駅,0,0,1
日祝_07時45分_系統267,07:51:00,07:51:00,200017_02,6,前橋駅,0,0,1
日祝_07時45分_系統267,07:52:00,07:52:00,200519_02,7,前橋駅,0,0,1
日祝_07時45分_系統267,07:52:00,07:52:00,200987_02,8,前橋駅,0,0,1
日祝_07時45分_系統267,07:54:00,07:54:00,200985_02,9,前橋駅,0,0,1
日祝_07時45分_系統267,07:55:00,07:55:00,200895_02,10,前橋駅,0,0,1
日祝_07時45分_系統267,07:56:00,07:56:00,200395_02,11,前橋駅,0,0,1
日祝_07時45分_系統267,07:56:00,07:56:00,200153_02,12,前橋駅,0,0,1
日祝_07時45分_系統267,07:57:00,07:57:00,201100_02,13,前橋駅,0,0,1
日祝_07時45分_系統267,07:58:00,07:58:00,200981_02,14,前橋駅,0,0,1
日祝_07時45分_系統267,07:59:00,07:59:00,200872_02,15,前橋駅,0,0,1
日祝_07時45分_系統267,08:00:00,08:00:00,201056_02,16,前橋駅,0,0,1
日祝_07時45分_系統267,08:02:00,08:02:00,200189_02,17,前橋駅,0,0,1
日祝_07時45分_系統267,08:03:00,08:03:00,200722_02,18,前橋駅,0,0,1
日祝_07時45分_系統267,08:04:00,08:04:00,200343_02,19,前橋駅,0,0,1
日祝_07時45分_系統267,08:05:00,08:05:00,200348_02,20,前橋駅,0,0,1
日祝_07時45分_系統267,08:07:00,08:07:00,201071_02,21,前橋駅,0,0,1
日祝_07時45分_系統267,08:09:00,08:09:00,200542_02,22,前橋駅,0,0,1
日祝_07時45分_系統267,08:11:00,08:11:00,200141_02,23,前橋駅,0,0,1
日祝_07時45分_系統267,08:12:00,08:12:00,200142_02,24,前橋駅,0,0,1
日祝_07時45分_系統267,08:14:00,08:14:00,200262_02,25,前橋駅,0,0,1
日祝_07時45分_系統267,08:15:00,08:15:00,201015_02,26,前橋駅,0,0,1
日祝_07時45分_系統267,08:16:00,08:16:00,200379_02,27,前橋駅,0,0,1
日祝_07時45分_系統267,08:17:00,08:17:00,200455_02,28,前橋駅,0,0,1
日祝_07時45分_系統267,08:18:00,08:18:00,200702_02,29,前橋駅,0,0,1
日祝_07時45分_系統267,08:19:00,08:19:00,200703_02,30,前橋駅,0,0,1
日祝_07時45分_系統267,08:21:00,08:21:00,201081_02,31,前橋駅,0,0,1
日祝_07時45分_系統267,08:23:00,08:23:00,200998_02,32,前橋駅,0,0,1
日祝_07時45分_系統267,08:26:00,08:26:00,200718_10,33,前橋駅,1,0,1
日祝_07時53分_系統266,07:53:00,07:53:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
日祝_07時53分_系統266,07:54:00,07:54:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,07:56:00,07:56:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,07:58:00,07:58:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,07:59:00,07:59:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:01:00,08:01:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:02:00,08:02:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:03:00,08:03:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:04:00,08:04:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:05:00,08:05:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:06:00,08:06:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:07:00,08:07:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:09:00,08:09:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:10:00,08:10:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:11:00,08:11:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:12:00,08:12:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_07時53分_系統266,08:14:00,08:14:00,200273_01,17,渋川駅,0,0,1
日祝_07時53分_系統266,08:17:00,08:17:00,200189_01,18,渋川駅,0,0,1
日祝_07時53分_系統266,08:19:00,08:19:00,201056_01,19,渋川駅,0,0,1
日祝_07時53分_系統266,08:20:00,08:20:00,200872_01,20,渋川駅,0,0,1
日祝_07時53分_系統266,08:21:00,08:21:00,200981_01,21,渋川駅,0,0,1
日祝_07時53分_系統266,08:22:00,08:22:00,201100_01,22,渋川駅,0,0,1
日祝_07時53分_系統266,08:23:00,08:23:00,200153_01,23,渋川駅,0,0,1
日祝_07時53分_系統266,08:23:00,08:23:00,200395_01,24,渋川駅,0,0,1
日祝_07時53分_系統266,08:24:00,08:24:00,200895_01,25,渋川駅,0,0,1
日祝_07時53分_系統266,08:25:00,08:25:00,200985_01,26,渋川駅,0,0,1
日祝_07時53分_系統266,08:25:00,08:25:00,200987_01,27,渋川駅,0,0,1
日祝_07時53分_系統266,08:26:00,08:26:00,200519_01,28,渋川駅,0,0,1
日祝_07時53分_系統266,08:27:00,08:27:00,200017_01,29,渋川駅,0,0,1
日祝_07時53分_系統266,08:28:00,08:28:00,200506_01,30,渋川駅,0,0,1
日祝_07時53分_系統266,08:29:00,08:29:00,200827_01,31,渋川駅,0,0,1
日祝_07時53分_系統266,08:31:00,08:31:00,200730_01,32,渋川駅,0,0,1
日祝_07時53分_系統266,08:32:00,08:32:00,200768_01,33,渋川駅,0,0,1
日祝_07時53分_系統266,08:35:00,08:35:00,200463_10,34,渋川駅,1,0,1
日祝_08時05分_系統265,08:05:00,08:05:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
日祝_08時05分_系統265,08:06:00,08:06:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:07:00,08:07:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:09:00,08:09:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:10:00,08:10:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:11:00,08:11:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:12:00,08:12:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:12:00,08:12:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:14:00,08:14:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:15:00,08:15:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:16:00,08:16:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:16:00,08:16:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:17:00,08:17:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:18:00,08:18:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:19:00,08:19:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:20:00,08:20:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:22:00,08:22:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時05分_系統265,08:25:00,08:25:00,200273_01,18,前橋駅,0,0,1
日祝_08時05分_系統265,08:27:00,08:27:00,200722_02,19,前橋駅,0,0,1
日祝_08時05分_系統265,08:28:00,08:28:00,200343_02,20,前橋駅,0,0,1
日祝_08時05分_系統265,08:29:00,08:29:00,200348_02,21,前橋駅,0,0,1
日祝_08時05分_系統265,08:31:00,08:31:00,201071_02,22,前橋駅,0,0,1
日祝_08時05分_系統265,08:33:00,08:33:00,200542_02,23,前橋駅,0,0,1
日祝_08時05分_系統265,08:35:00,08:35:00,200141_02,24,前橋駅,0,0,1
日祝_08時05分_系統265,08:36:00,08:36:00,200142_02,25,前橋駅,0,0,1
日祝_08時05分_系統265,08:38:00,08:38:00,200262_02,26,前橋駅,0,0,1
日祝_08時05分_系統265,08:39:00,08:39:00,201015_02,27,前橋駅,0,0,1
日祝_08時05分_系統265,08:40:00,08:40:00,200379_02,28,前橋駅,0,0,1
日祝_08時05分_系統265,08:41:00,08:41:00,200455_02,29,前橋駅,0,0,1
日祝_08時05分_系統265,08:42:00,08:42:00,200702_02,30,前橋駅,0,0,1
日祝_08時05分_系統265,08:43:00,08:43:00,200703_02,31,前橋駅,0,0,1
日祝_08時05分_系統265,08:45:00,08:45:00,201081_02,32,前橋駅,0,0,1
日祝_08時05分_系統265,08:47:00,08:47:00,200998_02,33,前橋駅,0,0,1
日祝_08時05分_系統265,08:50:00,08:50:00,200718_10,34,前橋駅,1,0,1
日祝_08時10分_系統583,08:10:00,08:10:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
日祝_08時10分_系統583,08:12:00,08:12:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
日祝_08時10分_系統583,08:13:00,08:13:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
日祝_08時10分_系統583,08:14:00,08:14:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
日祝_08時10分_系統583,08:17:00,08:17:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
日祝_08時10分_系統583,08:20:00,08:20:00,200927_01,6,前橋駅,0,0,1
日祝_08時10分_系統583,08:20:00,08:20:00,200800_02,7,前橋駅,0,0,1
日祝_08時10分_系統583,08:21:00,08:21:00,200928_02,8,前橋駅,0,0,1
日祝_08時10分_系統583,08:23:00,08:23:00,201071_02,9,前橋駅,0,0,1
日祝_08時10分_系統583,08:25:00,08:25:00,200542_02,10,前橋駅,0,0,1
日祝_08時10分_系統583,08:27:00,08:27:00,200141_02,11,前橋駅,0,0,1
日祝_08時10分_系統583,08:28:00,08:28:00,200142_02,12,前橋駅,0,0,1
日祝_08時10分_系統583,08:30:00,08:30:00,200262_02,13,前橋駅,0,0,1
日祝_08時10分_系統583,08:31:00,08:31:00,201015_02,14,前橋駅,0,0,1
日祝_08時10分_系統583,08:32:00,08:32:00,200379_02,15,前橋駅,0,0,1
日祝_08時10分_系統583,08:33:00,08:33:00,200455_02,16,前橋駅,0,0,1
日祝_08時10分_系統583,08:34:00,08:34:00,200702_02,17,前橋駅,0,0,1
日祝_08時10分_系統583,08:35:00,08:35:00,200703_02,18,前橋駅,0,0,1
日祝_08時10分_系統583,08:37:00,08:37:00,201081_02,19,前橋駅,0,0,1
日祝_08時10分_系統583,08:39:00,08:39:00,200998_02,20,前橋駅,0,0,1
日祝_08時10分_系統583,08:42:00,08:42:00,200718_10,21,前橋駅,1,0,1
日祝_08時12分_系統261,08:12:00,08:12:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
日祝_08時12分_系統261,08:13:00,08:13:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
日祝_08時12分_系統261,08:14:00,08:14:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
日祝_08時12分_系統261,08:15:00,08:15:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
日祝_08時12分_系統261,08:16:00,08:16:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
日祝_08時12分_系統261,08:17:00,08:17:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
日祝_08時12分_系統261,08:18:00,08:18:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
日祝_08時12分_系統261,08:19:00,08:19:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
日祝_08時12分_系統261,08:20:00,08:20:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
日祝_08時12分_系統261,08:25:00,08:25:00,200463_01,10,前橋駅,0,0,1
日祝_08時12分_系統261,08:26:00,08:26:00,200768_02,11,前橋駅,0,0,1
日祝_08時12分_系統261,08:27:00,08:27:00,200730_02,12,前橋駅,0,0,1
日祝_08時12分_系統261,08:29:00,08:29:00,200827_02,13,前橋駅,0,0,1
日祝_08時12分_系統261,08:30:00,08:30:00,200506_02,14,前橋駅,0,0,1
日祝_08時12分_系統261,08:31:00,08:31:00,200017_02,15,前橋駅,0,0,1
日祝_08時12分_系統261,08:32:00,08:32:00,200519_02,16,前橋駅,0,0,1
日祝_08時12分_系統261,08:32:00,08:32:00,200987_02,17,前橋駅,0,0,1
日祝_08時12分_系統261,08:34:00,08:34:00,200985_02,18,前橋駅,0,0,1
日祝_08時12分_系統261,08:35:00,08:35:00,200895_02,19,前橋駅,0,0,1
日祝_08時12分_系統261,08:36:00,08:36:00,200395_02,20,前橋駅,0,0,1
日祝_08時12分_系統261,08:36:00,08:36:00,200153_02,21,前橋駅,0,0,1
日祝_08時12分_系統261,08:37:00,08:37:00,201100_02,22,前橋駅,0,0,1
日祝_08時12分_系統261,08:38:00,08:38:00,200981_02,23,前橋駅,0,0,1
日祝_08時12分_系統261,08:39:00,08:39:00,200872_02,24,前橋駅,0,0,1
日祝_08時12分_系統261,08:40:00,08:40:00,201056_02,25,前橋駅,0,0,1
日祝_08時12分_系統261,08:42:00,08:42:00,200189_02,26,前橋駅,0,0,1
日祝_08時12分_系統261,08:43:00,08:43:00,200722_02,27,前橋駅,0,0,1
日祝_08時12分_系統261,08:44:00,08:44:00,200343_02,28,前橋駅,0,0,1
日祝_08時12分_系統261,08:45:00,08:45:00,200348_02,29,前橋駅,0,0,1
日祝_08時12分_系統261,08:47:00,08:47:00,201071_02,30,前橋駅,0,0,1
日祝_08時12分_系統261,08:49:00,08:49:00,200542_02,31,前橋駅,0,0,1
日祝_08時12分_系統261,08:51:00,08:51:00,200141_02,32,前橋駅,0,0,1
日祝_08時12分_系統261,08:52:00,08:52:00,200142_02,33,前橋駅,0,0,1
日祝_08時12分_系統261,08:54:00,08:54:00,200262_02,34,前橋駅,0,0,1
日祝_08時12分_系統261,08:55:00,08:55:00,201015_02,35,前橋駅,0,0,1
日祝_08時12分_系統261,08:56:00,08:56:00,200379_02,36,前橋駅,0,0,1
日祝_08時12分_系統261,08:57:00,08:57:00,200455_02,37,前橋駅,0,0,1
日祝_08時12分_系統261,08:58:00,08:58:00,200702_02,38,前橋駅,0,0,1
日祝_08時12分_系統261,08:59:00,08:59:00,200703_02,39,前橋駅,0,0,1
日祝_08時12分_系統261,09:01:00,09:01:00,201081_02,40,前橋駅,0,0,1
日祝_08時12分_系統261,09:03:00,09:03:00,200998_02,41,前橋駅,0,0,1
日祝_08時12分_系統261,09:06:00,09:06:00,200718_10,42,前橋駅,1,0,1
日祝_08時13分_系統266,08:13:00,08:13:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
日祝_08時13分_系統266,08:14:00,08:14:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:16:00,08:16:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:18:00,08:18:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:19:00,08:19:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:21:00,08:21:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:22:00,08:22:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:23:00,08:23:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:24:00,08:24:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:25:00,08:25:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:26:00,08:26:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:27:00,08:27:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:29:00,08:29:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:30:00,08:30:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:31:00,08:31:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:32:00,08:32:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_08時13分_系統266,08:34:00,08:34:00,200273_01,17,渋川駅,0,0,1
日祝_08時13分_系統266,08:37:00,08:37:00,200189_01,18,渋川駅,0,0,1
日祝_08時13分_系統266,08:39:00,08:39:00,201056_01,19,渋川駅,0,0,1
日祝_08時13分_系統266,08:40:00,08:40:00,200872_01,20,渋川駅,0,0,1
日祝_08時13分_系統266,08:41:00,08:41:00,200981_01,21,渋川駅,0,0,1
日祝_08時13分_系統266,08:42:00,08:42:00,201100_01,22,渋川駅,0,0,1
日祝_08時13分_系統266,08:43:00,08:43:00,200153_01,23,渋川駅,0,0,1
日祝_08時13分_系統266,08:43:00,08:43:00,200395_01,24,渋川駅,0,0,1
日祝_08時13分_系統266,08:44:00,08:44:00,200895_01,25,渋川駅,0,0,1
日祝_08時13分_系統266,08:45:00,08:45:00,200985_01,26,渋川駅,0,0,1
日祝_08時13分_系統266,08:45:00,08:45:00,200987_01,27,渋川駅,0,0,1
日祝_08時13分_系統266,08:46:00,08:46:00,200519_01,28,渋川駅,0,0,1
日祝_08時13分_系統266,08:47:00,08:47:00,200017_01,29,渋川駅,0,0,1
日祝_08時13分_系統266,08:48:00,08:48:00,200506_01,30,渋川駅,0,0,1
日祝_08時13分_系統266,08:49:00,08:49:00,200827_01,31,渋川駅,0,0,1
日祝_08時13分_系統266,08:51:00,08:51:00,200730_01,32,渋川駅,0,0,1
日祝_08時13分_系統266,08:52:00,08:52:00,200768_01,33,渋川駅,0,0,1
日祝_08時13分_系統266,08:55:00,08:55:00,200463_10,34,渋川駅,1,0,1
日祝_08時28分_系統586,08:28:00,08:28:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
日祝_08時28分_系統586,08:29:00,08:29:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_08時28分_系統586,08:31:00,08:31:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_08時28分_系統586,08:33:00,08:33:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_08時28分_系統586,08:34:00,08:34:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_08時28分_系統586,08:36:00,08:36:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_08時28分_系統586,08:37:00,08:37:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_08時28分_系統586,08:38:00,08:38:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_08時28分_系統586,08:39:00,08:39:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_08時28分_系統586,08:40:00,08:40:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_08時28分_系統586,08:42:00,08:42:00,200261_01,11,群馬大学荒牧,0,0,1
日祝_08時28分_系統586,08:43:00,08:43:00,200503_02,12,群馬大学荒牧,0,0,1
日祝_08時28分_系統586,08:44:00,08:44:00,200142_01,13,群馬大学荒牧,0,0,1
日祝_08時28分_系統586,08:45:00,08:45:00,200141_01,14,群馬大学荒牧,0,0,1
日祝_08時28分_系統586,08:46:00,08:46:00,200542_01,15,群馬大学荒牧,0,0,1
日祝_08時28分_系統586,08:48:00,08:48:00,201071_01,16,群馬大学荒牧,0,0,1
日祝_08時28分_系統586,08:49:00,08:49:00,200348_01,17,群馬大学荒牧,0,0,1
日祝_08時28分_系統586,08:50:00,08:50:00,200343_01,18,群馬大学荒牧,0,0,1
日祝_08時28分_系統586,08:51:00,08:51:00,200722_01,19,群馬大学荒牧,0,0,1
日祝_08時28分_系統586,08:54:00,08:54:00,200273_01,20,群馬大学荒牧,1,0,1
日祝_08時40分_系統268,08:40:00,08:40:00,200718_02,1,渋川駅,0,1,1
日祝_08時40分_系統268,08:41:00,08:41:00,200998_01,2,渋川駅,0,0,1
日祝_08時40分_系統268,08:43:00,08:43:00,201081_01,3,渋川駅,0,0,1
日祝_08時40分_系統268,08:44:00,08:44:00,200703_01,4,渋川駅,0,0,1
日祝_08時40分_系統268,08:44:00,08:44:00,200702_01,5,渋川駅,0,0,1
日祝_08時40分_系統268,08:45:00,08:45:00,200455_01,6,渋川駅,0,0,1
日祝_08時40分_系統268,08:46:00,08:46:00,200379_01,7,渋川駅,0,0,1
日祝_08時40分_系統268,08:47:00,08:47:00,201015_01,8,渋川駅,0,0,1
日祝_08時40分_系統268,08:48:00,08:48:00,200262_01,9,渋川駅,0,0,1
日祝_08時40分_系統268,08:49:00,08:49:00,200142_01,10,渋川駅,0,0,1
日祝_08時40分_系統268,08:50:00,08:50:00,200141_01,11,渋川駅,0,0,1
日祝_08時40分_系統268,08:51:00,08:51:00,200542_01,12,渋川駅,0,0,1
日祝_08時40分_系統268,08:53:00,08:53:00,201071_01,13,渋川駅,0,0,1
日祝_08時40分_系統268,08:54:00,08:54:00,200348_01,14,渋川駅,0,0,1
日祝_08時40分_系統268,08:55:00,08:55:00,200343_01,15,渋川駅,0,0,1
日祝_08時40分_系統268,08:56:00,08:56:00,200722_01,16,渋川駅,0,0,1
日祝_08時40分_系統268,08:58:00,08:58:00,200189_01,17,渋川駅,0,0,1
日祝_08時40分_系統268,09:00:00,09:00:00,201056_01,18,渋川駅,0,0,1
日祝_08時40分_系統268,09:01:00,09:01:00,200872_01,19,渋川駅,0,0,1
日祝_08時40分_系統268,09:02:00,09:02:00,200981_01,20,渋川駅,0,0,1
日祝_08時40分_系統268,09:03:00,09:03:00,201100_01,21,渋川駅,0,0,1
日祝_08時40分_系統268,09:04:00,09:04:00,200153_01,22,渋川駅,0,0,1
日祝_08時40分_系統268,09:04:00,09:04:00,200395_01,23,渋川駅,0,0,1
日祝_08時40分_系統268,09:05:00,09:05:00,200895_01,24,渋川駅,0,0,1
日祝_08時40分_系統268,09:06:00,09:06:00,200985_01,25,渋川駅,0,0,1
日祝_08時40分_系統268,09:06:00,09:06:00,200987_01,26,渋川駅,0,0,1
日祝_08時40分_系統268,09:07:00,09:07:00,200519_01,27,渋川駅,0,0,1
日祝_08時40分_系統268,09:08:00,09:08:00,200017_01,28,渋川駅,0,0,1
日祝_08時40分_系統268,09:09:00,09:09:00,200506_01,29,渋川駅,0,0,1
日祝_08時40分_系統268,09:10:00,09:10:00,200827_01,30,渋川駅,0,0,1
日祝_08時40分_系統268,09:12:00,09:12:00,200730_01,31,渋川駅,0,0,1
日祝_08時40分_系統268,09:13:00,09:13:00,200768_01,32,渋川駅,0,0,1
日祝_08時40分_系統268,09:16:00,09:16:00,200463_10,33,渋川駅,1,0,1
日祝_08時55分_系統265,08:55:00,08:55:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
日祝_08時55分_系統265,08:56:00,08:56:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,08:57:00,08:57:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,08:59:00,08:59:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:00:00,09:00:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:01:00,09:01:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:02:00,09:02:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:02:00,09:02:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:04:00,09:04:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:05:00,09:05:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:06:00,09:06:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:06:00,09:06:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:07:00,09:07:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:08:00,09:08:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:09:00,09:09:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:10:00,09:10:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:12:00,09:12:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_08時55分_系統265,09:15:00,09:15:00,200273_01,18,前橋駅,0,0,1
日祝_08時55分_系統265,09:17:00,09:17:00,200722_02,19,前橋駅,0,0,1
日祝_08時55分_系統265,09:18:00,09:18:00,200343_02,20,前橋駅,0,0,1
日祝_08時55分_系統265,09:19:00,09:19:00,200348_02,21,前橋駅,0,0,1
日祝_08時55分_系統265,09:21:00,09:21:00,201071_02,22,前橋駅,0,0,1
日祝_08時55分_系統265,09:23:00,09:23:00,200542_02,23,前橋駅,0,0,1
日祝_08時55分_系統265,09:25:00,09:25:00,200141_02,24,前橋駅,0,0,1
日祝_08時55分_系統265,09:26:00,09:26:00,200142_02,25,前橋駅,0,0,1
日祝_08時55分_系統265,09:28:00,09:28:00,200262_02,26,前橋駅,0,0,1
日祝_08時55分_系統265,09:29:00,09:29:00,201015_02,27,前橋駅,0,0,1
日祝_08時55分_系統265,09:30:00,09:30:00,200379_02,28,前橋駅,0,0,1
日祝_08時55分_系統265,09:31:00,09:31:00,200455_02,29,前橋駅,0,0,1
日祝_08時55分_系統265,09:32:00,09:32:00,200702_02,30,前橋駅,0,0,1
日祝_08時55分_系統265,09:33:00,09:33:00,200703_02,31,前橋駅,0,0,1
日祝_08時55分_系統265,09:35:00,09:35:00,201081_02,32,前橋駅,0,0,1
日祝_08時55分_系統265,09:37:00,09:37:00,200998_02,33,前橋駅,0,0,1
日祝_08時55分_系統265,09:40:00,09:40:00,200718_10,34,前橋駅,1,0,1
日祝_08時58分_系統264,08:58:00,08:58:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
日祝_08時58分_系統264,08:59:00,08:59:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:01:00,09:01:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:03:00,09:03:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:04:00,09:04:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:06:00,09:06:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:07:00,09:07:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:08:00,09:08:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:09:00,09:09:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:10:00,09:10:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:11:00,09:11:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:12:00,09:12:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:14:00,09:14:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:15:00,09:15:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:16:00,09:16:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:17:00,09:17:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:19:00,09:19:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:22:00,09:22:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:24:00,09:24:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:25:00,09:25:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:26:00,09:26:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:27:00,09:27:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:28:00,09:28:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:28:00,09:28:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:29:00,09:29:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:30:00,09:30:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:30:00,09:30:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:31:00,09:31:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:32:00,09:32:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:33:00,09:33:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:34:00,09:34:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:36:00,09:36:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:37:00,09:37:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
日祝_08時58分_系統264,09:38:00,09:38:00,200463_06,34,渋川市内循環,0,0,1
日祝_08時58分_系統264,09:39:00,09:39:00,200468_01,35,渋川市内循環,0,0,1
日祝_08時58分_系統264,09:41:00,09:41:00,200466_01,36,渋川市内循環,0,0,1
日祝_08時58分_系統264,09:42:00,09:42:00,200704_01,37,渋川市内循環,0,0,1
日祝_08時58分_系統264,09:43:00,09:43:00,200476_02,38,渋川市内循環,0,0,1
日祝_08時58分_系統264,09:44:00,09:44:00,200477_02,39,渋川市内循環,0,0,1
日祝_08時58分_系統264,09:45:00,09:45:00,200430_02,40,渋川市内循環,0,0,1
日祝_08時58分_系統264,09:46:00,09:46:00,200007_02,41,渋川市内循環,0,0,1
日祝_08時58分_系統264,09:51:00,09:51:00,210463_10,42,渋川市内循環,1,0,1
日祝_09時00分_系統583,09:00:00,09:00:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
日祝_09時00分_系統583,09:02:00,09:02:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
日祝_09時00分_系統583,09:03:00,09:03:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
日祝_09時00分_系統583,09:04:00,09:04:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
日祝_09時00分_系統583,09:07:00,09:07:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
日祝_09時00分_系統583,09:10:00,09:10:00,200927_01,6,前橋駅,0,0,1
日祝_09時00分_系統583,09:10:00,09:10:00,200800_02,7,前橋駅,0,0,1
日祝_09時00分_系統583,09:11:00,09:11:00,200928_02,8,前橋駅,0,0,1
日祝_09時00分_系統583,09:13:00,09:13:00,201071_02,9,前橋駅,0,0,1
日祝_09時00分_系統583,09:15:00,09:15:00,200542_02,10,前橋駅,0,0,1
日祝_09時00分_系統583,09:17:00,09:17:00,200141_02,11,前橋駅,0,0,1
日祝_09時00分_系統583,09:18:00,09:18:00,200142_02,12,前橋駅,0,0,1
日祝_09時00分_系統583,09:20:00,09:20:00,200262_02,13,前橋駅,0,0,1
日祝_09時00分_系統583,09:21:00,09:21:00,201015_02,14,前橋駅,0,0,1
日祝_09時00分_系統583,09:22:00,09:22:00,200379_02,15,前橋駅,0,0,1
日祝_09時00分_系統583,09:23:00,09:23:00,200455_02,16,前橋駅,0,0,1
日祝_09時00分_系統583,09:24:00,09:24:00,200702_02,17,前橋駅,0,0,1
日祝_09時00分_系統583,09:25:00,09:25:00,200703_02,18,前橋駅,0,0,1
日祝_09時00分_系統583,09:27:00,09:27:00,201081_02,19,前橋駅,0,0,1
日祝_09時00分_系統583,09:29:00,09:29:00,200998_02,20,前橋駅,0,0,1
日祝_09時00分_系統583,09:32:00,09:32:00,200718_10,21,前橋駅,1,0,1
日祝_09時10分_系統267,09:10:00,09:10:00,200463_01,1,前橋駅,0,1,1
日祝_09時10分_系統267,09:11:00,09:11:00,200768_02,2,前橋駅,0,0,1
日祝_09時10分_系統267,09:12:00,09:12:00,200730_02,3,前橋駅,0,0,1
日祝_09時10分_系統267,09:14:00,09:14:00,200827_02,4,前橋駅,0,0,1
日祝_09時10分_系統267,09:15:00,09:15:00,200506_02,5,前橋駅,0,0,1
日祝_09時10分_系統267,09:16:00,09:16:00,200017_02,6,前橋駅,0,0,1
日祝_09時10分_系統267,09:17:00,09:17:00,200519_02,7,前橋駅,0,0,1
日祝_09時10分_系統267,09:17:00,09:17:00,200987_02,8,前橋駅,0,0,1
日祝_09時10分_系統267,09:19:00,09:19:00,200985_02,9,前橋駅,0,0,1
日祝_09時10分_系統267,09:20:00,09:20:00,200895_02,10,前橋駅,0,0,1
日祝_09時10分_系統267,09:21:00,09:21:00,200395_02,11,前橋駅,0,0,1
日祝_09時10分_系統267,09:21:00,09:21:00,200153_02,12,前橋駅,0,0,1
日祝_09時10分_系統267,09:22:00,09:22:00,201100_02,13,前橋駅,0,0,1
日祝_09時10分_系統267,09:23:00,09:23:00,200981_02,14,前橋駅,0,0,1
日祝_09時10分_系統267,09:24:00,09:24:00,200872_02,15,前橋駅,0,0,1
日祝_09時10分_系統267,09:25:00,09:25:00,201056_02,16,前橋駅,0,0,1
日祝_09時10分_系統267,09:27:00,09:27:00,200189_02,17,前橋駅,0,0,1
日祝_09時10分_系統267,09:28:00,09:28:00,200722_02,18,前橋駅,0,0,1
日祝_09時10分_系統267,09:29:00,09:29:00,200343_02,19,前橋駅,0,0,1
日祝_09時10分_系統267,09:30:00,09:30:00,200348_02,20,前橋駅,0,0,1
日祝_09時10分_系統267,09:32:00,09:32:00,201071_02,21,前橋駅,0,0,1
日祝_09時10分_系統267,09:34:00,09:34:00,200542_02,22,前橋駅,0,0,1
日祝_09時10分_系統267,09:36:00,09:36:00,200141_02,23,前橋駅,0,0,1
日祝_09時10分_系統267,09:37:00,09:37:00,200142_02,24,前橋駅,0,0,1
日祝_09時10分_系統267,09:39:00,09:39:00,200262_02,25,前橋駅,0,0,1
日祝_09時10分_系統267,09:40:00,09:40:00,201015_02,26,前橋駅,0,0,1
日祝_09時10分_系統267,09:41:00,09:41:00,200379_02,27,前橋駅,0,0,1
日祝_09時10分_系統267,09:42:00,09:42:00,200455_02,28,前橋駅,0,0,1
日祝_09時10分_系統267,09:43:00,09:43:00,200702_02,29,前橋駅,0,0,1
日祝_09時10分_系統267,09:44:00,09:44:00,200703_02,30,前橋駅,0,0,1
日祝_09時10分_系統267,09:46:00,09:46:00,201081_02,31,前橋駅,0,0,1
日祝_09時10分_系統267,09:48:00,09:48:00,200998_02,32,前橋駅,0,0,1
日祝_09時10分_系統267,09:51:00,09:51:00,200718_10,33,前橋駅,1,0,1
日祝_09時17分_系統586,09:17:00,09:17:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
日祝_09時17分_系統586,09:18:00,09:18:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_09時17分_系統586,09:20:00,09:20:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_09時17分_系統586,09:22:00,09:22:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_09時17分_系統586,09:23:00,09:23:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_09時17分_系統586,09:24:00,09:24:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_09時17分_系統586,09:25:00,09:25:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_09時17分_系統586,09:26:00,09:26:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_09時17分_系統586,09:27:00,09:27:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_09時17分_系統586,09:28:00,09:28:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
日祝_09時17分_系統586,09:30:00,09:30:00,200261_01,11,群馬大学荒牧,0,0,1
日祝_09時17分_系統586,09:31:00,09:31:00,200503_02,12,群馬大学荒牧,0,0,1
日祝_09時17分_系統586,09:32:00,09:32:00,200142_01,13,群馬大学荒牧,0,0,1
日祝_09時17分_系統586,09:33:00,09:33:00,200141_01,14,群馬大学荒牧,0,0,1
日祝_09時17分_系統586,09:34:00,09:34:00,200542_01,15,群馬大学荒牧,0,0,1
日祝_09時17分_系統586,09:36:00,09:36:00,201071_01,16,群馬大学荒牧,0,0,1
日祝_09時17分_系統586,09:37:00,09:37:00,200348_01,17,群馬大学荒牧,0,0,1
日祝_09時17分_系統586,09:38:00,09:38:00,200343_01,18,群馬大学荒牧,0,0,1
日祝_09時17分_系統586,09:39:00,09:39:00,200722_01,19,群馬大学荒牧,0,0,1
日祝_09時17分_系統586,09:42:00,09:42:00,200273_01,20,群馬大学荒牧,1,0,1
日祝_09時30分_系統266,09:30:00,09:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
日祝_09時30分_系統266,09:31:00,09:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:33:00,09:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:35:00,09:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:36:00,09:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:38:00,09:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:39:00,09:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:40:00,09:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:41:00,09:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:42:00,09:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:43:00,09:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:44:00,09:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:46:00,09:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:48:00,09:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:49:00,09:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:50:00,09:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_09時30分_系統266,09:52:00,09:52:00,200273_01,17,渋川駅,0,0,1
日祝_09時30分_系統266,09:55:00,09:55:00,200189_01,18,渋川駅,0,0,1
日祝_09時30分_系統266,09:57:00,09:57:00,201056_01,19,渋川駅,0,0,1
日祝_09時30分_系統266,09:58:00,09:58:00,200872_01,20,渋川駅,0,0,1
日祝_09時30分_系統266,09:59:00,09:59:00,200981_01,21,渋川駅,0,0,1
日祝_09時30分_系統266,10:00:00,10:00:00,201100_01,22,渋川駅,0,0,1
日祝_09時30分_系統266,10:01:00,10:01:00,200153_01,23,渋川駅,0,0,1
日祝_09時30分_系統266,10:01:00,10:01:00,200395_01,24,渋川駅,0,0,1
日祝_09時30分_系統266,10:02:00,10:02:00,200895_01,25,渋川駅,0,0,1
日祝_09時30分_系統266,10:03:00,10:03:00,200985_01,26,渋川駅,0,0,1
日祝_09時30分_系統266,10:03:00,10:03:00,200987_01,27,渋川駅,0,0,1
日祝_09時30分_系統266,10:04:00,10:04:00,200519_01,28,渋川駅,0,0,1
日祝_09時30分_系統266,10:05:00,10:05:00,200017_01,29,渋川駅,0,0,1
日祝_09時30分_系統266,10:06:00,10:06:00,200506_01,30,渋川駅,0,0,1
日祝_09時30分_系統266,10:08:00,10:08:00,200827_01,31,渋川駅,0,0,1
日祝_09時30分_系統266,10:10:00,10:10:00,200730_01,32,渋川駅,0,0,1
日祝_09時30分_系統266,10:11:00,10:11:00,200768_01,33,渋川駅,0,0,1
日祝_09時30分_系統266,10:14:00,10:14:00,200463_10,34,渋川駅,1,0,1
日祝_09時30分_系統267,09:30:00,09:30:00,200463_01,1,前橋駅,0,1,1
日祝_09時30分_系統267,09:31:00,09:31:00,200768_02,2,前橋駅,0,0,1
日祝_09時30分_系統267,09:32:00,09:32:00,200730_02,3,前橋駅,0,0,1
日祝_09時30分_系統267,09:34:00,09:34:00,200827_02,4,前橋駅,0,0,1
日祝_09時30分_系統267,09:35:00,09:35:00,200506_02,5,前橋駅,0,0,1
日祝_09時30分_系統267,09:36:00,09:36:00,200017_02,6,前橋駅,0,0,1
日祝_09時30分_系統267,09:37:00,09:37:00,200519_02,7,前橋駅,0,0,1
日祝_09時30分_系統267,09:37:00,09:37:00,200987_02,8,前橋駅,0,0,1
日祝_09時30分_系統267,09:39:00,09:39:00,200985_02,9,前橋駅,0,0,1
日祝_09時30分_系統267,09:40:00,09:40:00,200895_02,10,前橋駅,0,0,1
日祝_09時30分_系統267,09:41:00,09:41:00,200395_02,11,前橋駅,0,0,1
日祝_09時30分_系統267,09:41:00,09:41:00,200153_02,12,前橋駅,0,0,1
日祝_09時30分_系統267,09:42:00,09:42:00,201100_02,13,前橋駅,0,0,1
日祝_09時30分_系統267,09:43:00,09:43:00,200981_02,14,前橋駅,0,0,1
日祝_09時30分_系統267,09:44:00,09:44:00,200872_02,15,前橋駅,0,0,1
日祝_09時30分_系統267,09:45:00,09:45:00,201056_02,16,前橋駅,0,0,1
日祝_09時30分_系統267,09:47:00,09:47:00,200189_02,17,前橋駅,0,0,1
日祝_09時30分_系統267,09:48:00,09:48:00,200722_02,18,前橋駅,0,0,1
日祝_09時30分_系統267,09:49:00,09:49:00,200343_02,19,前橋駅,0,0,1
日祝_09時30分_系統267,09:50:00,09:50:00,200348_02,20,前橋駅,0,0,1
日祝_09時30分_系統267,09:52:00,09:52:00,201071_02,21,前橋駅,0,0,1
日祝_09時30分_系統267,09:54:00,09:54:00,200542_02,22,前橋駅,0,0,1
日祝_09時30分_系統267,09:56:00,09:56:00,200141_02,23,前橋駅,0,0,1
日祝_09時30分_系統267,09:57:00,09:57:00,200142_02,24,前橋駅,0,0,1
日祝_09時30分_系統267,09:59:00,09:59:00,200262_02,25,前橋駅,0,0,1
日祝_09時30分_系統267,10:00:00,10:00:00,201015_02,26,前橋駅,0,0,1
日祝_09時30分_系統267,10:01:00,10:01:00,200379_02,27,前橋駅,0,0,1
日祝_09時30分_系統267,10:02:00,10:02:00,200455_02,28,前橋駅,0,0,1
日祝_09時30分_系統267,10:03:00,10:03:00,200702_02,29,前橋駅,0,0,1
日祝_09時30分_系統267,10:04:00,10:04:00,200703_02,30,前橋駅,0,0,1
日祝_09時30分_系統267,10:06:00,10:06:00,201081_02,31,前橋駅,0,0,1
日祝_09時30分_系統267,10:08:00,10:08:00,200998_02,32,前橋駅,0,0,1
日祝_09時30分_系統267,10:11:00,10:11:00,200718_10,33,前橋駅,1,0,1
日祝_09時47分_系統263,09:47:00,09:47:00,210463_05,1,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,1,1
日祝_09時47分_系統263,09:48:00,09:48:00,200007_01,2,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,09:49:00,09:49:00,200430_01,3,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,09:50:00,09:50:00,200477_01,4,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,09:51:00,09:51:00,200476_01,5,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,09:52:00,09:52:00,200704_02,6,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,09:53:00,09:53:00,200467_01,7,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,09:54:00,09:54:00,200466_02,8,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,09:55:00,09:55:00,200468_02,9,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:00:00,10:00:00,200463_01,10,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:01:00,10:01:00,200768_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:02:00,10:02:00,200730_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:04:00,10:04:00,200827_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:05:00,10:05:00,200506_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:06:00,10:06:00,200017_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:07:00,10:07:00,200519_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:07:00,10:07:00,200987_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:09:00,10:09:00,200985_02,18,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:10:00,10:10:00,200895_02,19,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:11:00,10:11:00,200395_02,20,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:11:00,10:11:00,200153_02,21,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:12:00,10:12:00,201100_02,22,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:13:00,10:13:00,200981_02,23,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:14:00,10:14:00,200872_02,24,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:15:00,10:15:00,201056_02,25,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:17:00,10:17:00,200189_02,26,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_09時47分_系統263,10:20:00,10:20:00,200273_01,27,前橋駅,0,0,1
日祝_09時47分_系統263,10:22:00,10:22:00,200722_02,28,前橋駅,0,0,1
日祝_09時47分_系統263,10:23:00,10:23:00,200343_02,29,前橋駅,0,0,1
日祝_09時47分_系統263,10:24:00,10:24:00,200348_02,30,前橋駅,0,0,1
日祝_09時47分_系統263,10:26:00,10:26:00,201071_02,31,前橋駅,0,0,1
日祝_09時47分_系統263,10:28:00,10:28:00,200542_02,32,前橋駅,0,0,1
日祝_09時47分_系統263,10:30:00,10:30:00,200141_02,33,前橋駅,0,0,1
日祝_09時47分_系統263,10:31:00,10:31:00,200142_02,34,前橋駅,0,0,1
日祝_09時47分_系統263,10:33:00,10:33:00,200262_02,35,前橋駅,0,0,1
日祝_09時47分_系統263,10:34:00,10:34:00,201015_02,36,前橋駅,0,0,1
日祝_09時47分_系統263,10:35:00,10:35:00,200379_02,37,前橋駅,0,0,1
日祝_09時47分_系統263,10:36:00,10:36:00,200455_02,38,前橋駅,0,0,1
日祝_09時47分_系統263,10:37:00,10:37:00,200702_02,39,前橋駅,0,0,1
日祝_09時47分_系統263,10:38:00,10:38:00,200703_02,40,前橋駅,0,0,1
日祝_09時47分_系統263,10:40:00,10:40:00,201081_02,41,前橋駅,0,0,1
日祝_09時47分_系統263,10:42:00,10:42:00,200998_02,42,前橋駅,0,0,1
日祝_09時47分_系統263,10:45:00,10:45:00,200718_10,43,前橋駅,1,0,1
日祝_09時48分_系統669,09:48:00,09:48:00,200273_01,1,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,1,1
日祝_09時48分_系統669,09:50:00,09:50:00,200722_02,2,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
日祝_09時48分_系統669,09:51:00,09:51:00,200343_02,3,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
日祝_09時48分_系統669,09:52:00,09:52:00,200348_02,4,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
日祝_09時48分_系統669,09:55:00,09:55:00,201185_02,5,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
日祝_09時48分_系統669,09:58:00,09:58:00,200927_01,6,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,09:58:00,09:58:00,200800_02,7,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,09:59:00,09:59:00,200928_02,8,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:01:00,10:01:00,201071_02,9,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:03:00,10:03:00,200542_02,10,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:05:00,10:05:00,200141_02,11,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:06:00,10:06:00,200142_02,12,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:08:00,10:08:00,200262_02,13,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:09:00,10:09:00,201015_02,14,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:10:00,10:10:00,200379_02,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:11:00,10:11:00,200455_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:12:00,10:12:00,200702_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:13:00,10:13:00,200703_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:15:00,10:15:00,201081_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:17:00,10:17:00,200998_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_09時48分_系統669,10:20:00,10:20:00,200718_04,21,けやきウォーク前橋,0,0,1
日祝_09時48分_系統669,10:22:00,10:22:00,200108_01,22,けやきウォーク前橋,0,0,1
日祝_09時48分_系統669,10:23:00,10:23:00,200932_01,23,けやきウォーク前橋,0,0,1
日祝_09時48分_系統669,10:24:00,10:24:00,200668_01,24,けやきウォーク前橋,0,0,1
日祝_09時48分_系統669,10:28:00,10:28:00,200022_01,25,けやきウォーク前橋,1,0,1
日祝_10時02分_系統268,10:02:00,10:02:00,200718_02,1,渋川駅,0,1,1
日祝_10時02分_系統268,10:03:00,10:03:00,200998_01,2,渋川駅,0,0,1
日祝_10時02分_系統268,10:05:00,10:05:00,201081_01,3,渋川駅,0,0,1
日祝_10時02分_系統268,10:06:00,10:06:00,200703_01,4,渋川駅,0,0,1
日祝_10時02分_系統268,10:06:00,10:06:00,200702_01,5,渋川駅,0,0,1
日祝_10時02分_系統268,10:07:00,10:07:00,200455_01,6,渋川駅,0,0,1
日祝_10時02分_系統268,10:08:00,10:08:00,200379_01,7,渋川駅,0,0,1
日祝_10時02分_系統268,10:09:00,10:09:00,201015_01,8,渋川駅,0,0,1
日祝_10時02分_系統268,10:10:00,10:10:00,200262_01,9,渋川駅,0,0,1
日祝_10時02分_系統268,10:11:00,10:11:00,200142_01,10,渋川駅,0,0,1
日祝_10時02分_系統268,10:12:00,10:12:00,200141_01,11,渋川駅,0,0,1
日祝_10時02分_系統268,10:13:00,10:13:00,200542_01,12,渋川駅,0,0,1
日祝_10時02分_系統268,10:15:00,10:15:00,201071_01,13,渋川駅,0,0,1
日祝_10時02分_系統268,10:17:00,10:17:00,200348_01,14,渋川駅,0,0,1
日祝_10時02分_系統268,10:18:00,10:18:00,200343_01,15,渋川駅,0,0,1
日祝_10時02分_系統268,10:19:00,10:19:00,200722_01,16,渋川駅,0,0,1
日祝_10時02分_系統268,10:21:00,10:21:00,200189_01,17,渋川駅,0,0,1
日祝_10時02分_系統268,10:23:00,10:23:00,201056_01,18,渋川駅,0,0,1
日祝_10時02分_系統268,10:24:00,10:24:00,200872_01,19,渋川駅,0,0,1
日祝_10時02分_系統268,10:25:00,10:25:00,200981_01,20,渋川駅,0,0,1
日祝_10時02分_系統268,10:26:00,10:26:00,201100_01,21,渋川駅,0,0,1
日祝_10時02分_系統268,10:27:00,10:27:00,200153_01,22,渋川駅,0,0,1
日祝_10時02分_系統268,10:27:00,10:27:00,200395_01,23,渋川駅,0,0,1
日祝_10時02分_系統268,10:28:00,10:28:00,200895_01,24,渋川駅,0,0,1
日祝_10時02分_系統268,10:29:00,10:29:00,200985_01,25,渋川駅,0,0,1
日祝_10時02分_系統268,10:29:00,10:29:00,200987_01,26,渋川駅,0,0,1
日祝_10時02分_系統268,10:30:00,10:30:00,200519_01,27,渋川駅,0,0,1
日祝_10時02分_系統268,10:31:00,10:31:00,200017_01,28,渋川駅,0,0,1
日祝_10時02分_系統268,10:32:00,10:32:00,200506_01,29,渋川駅,0,0,1
日祝_10時02分_系統268,10:34:00,10:34:00,200827_01,30,渋川駅,0,0,1
日祝_10時02分_系統268,10:36:00,10:36:00,200730_01,31,渋川駅,0,0,1
日祝_10時02分_系統268,10:37:00,10:37:00,200768_01,32,渋川駅,0,0,1
日祝_10時02分_系統268,10:40:00,10:40:00,200463_10,33,渋川駅,1,0,1
日祝_10時10分_系統644,10:10:00,10:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
日祝_10時10分_系統644,10:11:00,10:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_10時10分_系統644,10:13:00,10:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_10時10分_系統644,10:15:00,10:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_10時10分_系統644,10:16:00,10:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_10時10分_系統644,10:17:00,10:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_10時10分_系統644,10:18:00,10:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_10時10分_系統644,10:19:00,10:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_10時10分_系統644,10:20:00,10:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_10時10分_系統644,10:21:00,10:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_10時10分_系統644,10:23:00,10:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:24:00,10:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:25:00,10:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:26:00,10:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:27:00,10:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:29:00,10:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:31:00,10:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:32:00,10:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:33:00,10:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:35:00,10:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
日祝_10時10分_系統644,10:42:00,10:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
日祝_10時30分_系統264,10:30:00,10:30:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
日祝_10時30分_系統264,10:31:00,10:31:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:33:00,10:33:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:35:00,10:35:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:36:00,10:36:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:38:00,10:38:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:39:00,10:39:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:40:00,10:40:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:41:00,10:41:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:42:00,10:42:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:43:00,10:43:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:44:00,10:44:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:46:00,10:46:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:48:00,10:48:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:49:00,10:49:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:50:00,10:50:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:52:00,10:52:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:55:00,10:55:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:57:00,10:57:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:58:00,10:58:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,10:59:00,10:59:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:00:00,11:00:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:01:00,11:01:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:01:00,11:01:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:02:00,11:02:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:03:00,11:03:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:03:00,11:03:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:04:00,11:04:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:05:00,11:05:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:06:00,11:06:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:08:00,11:08:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:10:00,11:10:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:11:00,11:11:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
日祝_10時30分_系統264,11:12:00,11:12:00,200463_06,34,渋川市内循環,0,0,1
日祝_10時30分_系統264,11:13:00,11:13:00,200468_01,35,渋川市内循環,0,0,1
日祝_10時30分_系統264,11:15:00,11:15:00,200466_01,36,渋川市内循環,0,0,1
日祝_10時30分_系統264,11:16:00,11:16:00,200704_01,37,渋川市内循環,0,0,1
日祝_10時30分_系統264,11:17:00,11:17:00,200476_02,38,渋川市内循環,0,0,1
日祝_10時30分_系統264,11:18:00,11:18:00,200477_02,39,渋川市内循環,0,0,1
日祝_10時30分_系統264,11:19:00,11:19:00,200430_02,40,渋川市内循環,0,0,1
日祝_10時30分_系統264,11:20:00,11:20:00,200007_02,41,渋川市内循環,0,0,1
日祝_10時30分_系統264,11:25:00,11:25:00,210463_10,42,渋川市内循環,1,0,1
日祝_10時30分_系統267,10:30:00,10:30:00,200463_01,1,前橋駅,0,1,1
日祝_10時30分_系統267,10:31:00,10:31:00,200768_02,2,前橋駅,0,0,1
日祝_10時30分_系統267,10:32:00,10:32:00,200730_02,3,前橋駅,0,0,1
日祝_10時30分_系統267,10:34:00,10:34:00,200827_02,4,前橋駅,0,0,1
日祝_10時30分_系統267,10:35:00,10:35:00,200506_02,5,前橋駅,0,0,1
日祝_10時30分_系統267,10:36:00,10:36:00,200017_02,6,前橋駅,0,0,1
日祝_10時30分_系統267,10:37:00,10:37:00,200519_02,7,前橋駅,0,0,1
日祝_10時30分_系統267,10:37:00,10:37:00,200987_02,8,前橋駅,0,0,1
日祝_10時30分_系統267,10:39:00,10:39:00,200985_02,9,前橋駅,0,0,1
日祝_10時30分_系統267,10:40:00,10:40:00,200895_02,10,前橋駅,0,0,1
日祝_10時30分_系統267,10:41:00,10:41:00,200395_02,11,前橋駅,0,0,1
日祝_10時30分_系統267,10:41:00,10:41:00,200153_02,12,前橋駅,0,0,1
日祝_10時30分_系統267,10:42:00,10:42:00,201100_02,13,前橋駅,0,0,1
日祝_10時30分_系統267,10:43:00,10:43:00,200981_02,14,前橋駅,0,0,1
日祝_10時30分_系統267,10:44:00,10:44:00,200872_02,15,前橋駅,0,0,1
日祝_10時30分_系統267,10:45:00,10:45:00,201056_02,16,前橋駅,0,0,1
日祝_10時30分_系統267,10:47:00,10:47:00,200189_02,17,前橋駅,0,0,1
日祝_10時30分_系統267,10:48:00,10:48:00,200722_02,18,前橋駅,0,0,1
日祝_10時30分_系統267,10:49:00,10:49:00,200343_02,19,前橋駅,0,0,1
日祝_10時30分_系統267,10:50:00,10:50:00,200348_02,20,前橋駅,0,0,1
日祝_10時30分_系統267,10:52:00,10:52:00,201071_02,21,前橋駅,0,0,1
日祝_10時30分_系統267,10:54:00,10:54:00,200542_02,22,前橋駅,0,0,1
日祝_10時30分_系統267,10:56:00,10:56:00,200141_02,23,前橋駅,0,0,1
日祝_10時30分_系統267,10:57:00,10:57:00,200142_02,24,前橋駅,0,0,1
日祝_10時30分_系統267,10:59:00,10:59:00,200262_02,25,前橋駅,0,0,1
日祝_10時30分_系統267,11:00:00,11:00:00,201015_02,26,前橋駅,0,0,1
日祝_10時30分_系統267,11:01:00,11:01:00,200379_02,27,前橋駅,0,0,1
日祝_10時30分_系統267,11:02:00,11:02:00,200455_02,28,前橋駅,0,0,1
日祝_10時30分_系統267,11:03:00,11:03:00,200702_02,29,前橋駅,0,0,1
日祝_10時30分_系統267,11:04:00,11:04:00,200703_02,30,前橋駅,0,0,1
日祝_10時30分_系統267,11:06:00,11:06:00,201081_02,31,前橋駅,0,0,1
日祝_10時30分_系統267,11:08:00,11:08:00,200998_02,32,前橋駅,0,0,1
日祝_10時30分_系統267,11:11:00,11:11:00,200718_10,33,前橋駅,1,0,1
日祝_10時50分_系統643,10:50:00,10:50:00,201440_01,1,前橋駅（南橘団地・群大病院 経由）,0,1,1
日祝_10時50分_系統643,10:55:00,10:55:00,200189_02,2,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_10時50分_系統643,10:57:00,10:57:00,200722_02,3,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_10時50分_系統643,10:58:00,10:58:00,200343_02,4,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_10時50分_系統643,10:59:00,10:59:00,200348_02,5,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:02:00,11:02:00,201185_02,6,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:05:00,11:05:00,200927_01,7,前橋駅（群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:05:00,11:05:00,200800_02,8,前橋駅（群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:06:00,11:06:00,200928_02,9,前橋駅（群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:08:00,11:08:00,201071_02,10,前橋駅（群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:10:00,11:10:00,200542_02,11,前橋駅（群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:12:00,11:12:00,200141_02,12,前橋駅（群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:14:00,11:14:00,200142_02,13,前橋駅（群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:15:00,11:15:00,200503_01,14,前橋駅（群大病院 経由）,0,0,1
日祝_10時50分_系統643,11:17:00,11:17:00,200261_01,15,前橋駅,0,0,1
日祝_10時50分_系統643,11:18:00,11:18:00,200503_02,16,前橋駅,0,0,1
日祝_10時50分_系統643,11:21:00,11:21:00,200262_02,17,前橋駅,0,0,1
日祝_10時50分_系統643,11:22:00,11:22:00,201015_02,18,前橋駅,0,0,1
日祝_10時50分_系統643,11:23:00,11:23:00,200379_02,19,前橋駅,0,0,1
日祝_10時50分_系統643,11:24:00,11:24:00,200455_02,20,前橋駅,0,0,1
日祝_10時50分_系統643,11:25:00,11:25:00,200702_02,21,前橋駅,0,0,1
日祝_10時50分_系統643,11:26:00,11:26:00,200703_02,22,前橋駅,0,0,1
日祝_10時50分_系統643,11:28:00,11:28:00,201081_02,23,前橋駅,0,0,1
日祝_10時50分_系統643,11:30:00,11:30:00,200998_02,24,前橋駅,0,0,1
日祝_10時50分_系統643,11:33:00,11:33:00,200718_10,25,前橋駅,1,0,1
日祝_10時57分_系統268,10:57:00,10:57:00,200718_02,1,渋川駅,0,1,1
日祝_10時57分_系統268,10:58:00,10:58:00,200998_01,2,渋川駅,0,0,1
日祝_10時57分_系統268,11:00:00,11:00:00,201081_01,3,渋川駅,0,0,1
日祝_10時57分_系統268,11:02:00,11:02:00,200703_01,4,渋川駅,0,0,1
日祝_10時57分_系統268,11:03:00,11:03:00,200702_01,5,渋川駅,0,0,1
日祝_10時57分_系統268,11:04:00,11:04:00,200455_01,6,渋川駅,0,0,1
日祝_10時57分_系統268,11:05:00,11:05:00,200379_01,7,渋川駅,0,0,1
日祝_10時57分_系統268,11:06:00,11:06:00,201015_01,8,渋川駅,0,0,1
日祝_10時57分_系統268,11:07:00,11:07:00,200262_01,9,渋川駅,0,0,1
日祝_10時57分_系統268,11:08:00,11:08:00,200142_01,10,渋川駅,0,0,1
日祝_10時57分_系統268,11:09:00,11:09:00,200141_01,11,渋川駅,0,0,1
日祝_10時57分_系統268,11:10:00,11:10:00,200542_01,12,渋川駅,0,0,1
日祝_10時57分_系統268,11:12:00,11:12:00,201071_01,13,渋川駅,0,0,1
日祝_10時57分_系統268,11:14:00,11:14:00,200348_01,14,渋川駅,0,0,1
日祝_10時57分_系統268,11:15:00,11:15:00,200343_01,15,渋川駅,0,0,1
日祝_10時57分_系統268,11:16:00,11:16:00,200722_01,16,渋川駅,0,0,1
日祝_10時57分_系統268,11:18:00,11:18:00,200189_01,17,渋川駅,0,0,1
日祝_10時57分_系統268,11:20:00,11:20:00,201056_01,18,渋川駅,0,0,1
日祝_10時57分_系統268,11:21:00,11:21:00,200872_01,19,渋川駅,0,0,1
日祝_10時57分_系統268,11:22:00,11:22:00,200981_01,20,渋川駅,0,0,1
日祝_10時57分_系統268,11:23:00,11:23:00,201100_01,21,渋川駅,0,0,1
日祝_10時57分_系統268,11:24:00,11:24:00,200153_01,22,渋川駅,0,0,1
日祝_10時57分_系統268,11:24:00,11:24:00,200395_01,23,渋川駅,0,0,1
日祝_10時57分_系統268,11:25:00,11:25:00,200895_01,24,渋川駅,0,0,1
日祝_10時57分_系統268,11:26:00,11:26:00,200985_01,25,渋川駅,0,0,1
日祝_10時57分_系統268,11:26:00,11:26:00,200987_01,26,渋川駅,0,0,1
日祝_10時57分_系統268,11:27:00,11:27:00,200519_01,27,渋川駅,0,0,1
日祝_10時57分_系統268,11:28:00,11:28:00,200017_01,28,渋川駅,0,0,1
日祝_10時57分_系統268,11:29:00,11:29:00,200506_01,29,渋川駅,0,0,1
日祝_10時57分_系統268,11:31:00,11:31:00,200827_01,30,渋川駅,0,0,1
日祝_10時57分_系統268,11:33:00,11:33:00,200730_01,31,渋川駅,0,0,1
日祝_10時57分_系統268,11:34:00,11:34:00,200768_01,32,渋川駅,0,0,1
日祝_10時57分_系統268,11:37:00,11:37:00,200463_10,33,渋川駅,1,0,1
日祝_11時00分_系統663,11:00:00,11:00:00,200463_01,1,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,1,1
日祝_11時00分_系統663,11:01:00,11:01:00,200768_02,2,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:02:00,11:02:00,200730_02,3,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:04:00,11:04:00,200827_02,4,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:05:00,11:05:00,200506_02,5,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:06:00,11:06:00,200017_02,6,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:07:00,11:07:00,200519_02,7,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:07:00,11:07:00,200987_02,8,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:09:00,11:09:00,200985_02,9,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:10:00,11:10:00,200895_02,10,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:11:00,11:11:00,200395_02,11,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:11:00,11:11:00,200153_02,12,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:12:00,11:12:00,201100_02,13,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:13:00,11:13:00,200981_02,14,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:14:00,11:14:00,200872_02,15,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:15:00,11:15:00,201056_02,16,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:17:00,11:17:00,200189_02,17,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:20:00,11:20:00,200273_01,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:22:00,11:22:00,200722_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:23:00,11:23:00,200343_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:24:00,11:24:00,200348_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:26:00,11:26:00,201071_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:28:00,11:28:00,200542_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:30:00,11:30:00,200141_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:31:00,11:31:00,200142_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:33:00,11:33:00,200262_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:34:00,11:34:00,201015_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:35:00,11:35:00,200379_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:36:00,11:36:00,200455_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:37:00,11:37:00,200702_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:38:00,11:38:00,200703_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:40:00,11:40:00,201081_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:42:00,11:42:00,200998_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_11時00分_系統663,11:45:00,11:45:00,200718_04,34,けやきウォーク前橋,0,0,1
日祝_11時00分_系統663,11:47:00,11:47:00,200108_01,35,けやきウォーク前橋,0,0,1
日祝_11時00分_系統663,11:48:00,11:48:00,200932_01,36,けやきウォーク前橋,0,0,1
日祝_11時00分_系統663,11:49:00,11:49:00,200668_01,37,けやきウォーク前橋,0,0,1
日祝_11時00分_系統663,11:53:00,11:53:00,200022_01,38,けやきウォーク前橋,1,0,1
日祝_11時10分_系統584,11:10:00,11:10:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
日祝_11時10分_系統584,11:11:00,11:11:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:13:00,11:13:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:15:00,11:15:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:16:00,11:16:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:18:00,11:18:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:19:00,11:19:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:20:00,11:20:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:21:00,11:21:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:22:00,11:22:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:24:00,11:24:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:25:00,11:25:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:26:00,11:26:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:27:00,11:27:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:28:00,11:28:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:30:00,11:30:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:31:00,11:31:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:32:00,11:32:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_11時10分_系統584,11:34:00,11:34:00,200927_01,19,群馬大学荒牧,0,0,1
日祝_11時10分_系統584,11:35:00,11:35:00,201185_01,20,群馬大学荒牧,0,0,1
日祝_11時10分_系統584,11:39:00,11:39:00,200348_01,21,群馬大学荒牧,0,0,1
日祝_11時10分_系統584,11:40:00,11:40:00,200343_01,22,群馬大学荒牧,0,0,1
日祝_11時10分_系統584,11:41:00,11:41:00,200722_01,23,群馬大学荒牧,0,0,1
日祝_11時10分_系統584,11:44:00,11:44:00,200273_01,24,群馬大学荒牧,1,0,1
日祝_11時17分_系統261,11:17:00,11:17:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
日祝_11時17分_系統261,11:18:00,11:18:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
日祝_11時17分_系統261,11:19:00,11:19:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
日祝_11時17分_系統261,11:20:00,11:20:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
日祝_11時17分_系統261,11:21:00,11:21:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
日祝_11時17分_系統261,11:22:00,11:22:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
日祝_11時17分_系統261,11:23:00,11:23:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
日祝_11時17分_系統261,11:24:00,11:24:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
日祝_11時17分_系統261,11:25:00,11:25:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
日祝_11時17分_系統261,11:30:00,11:30:00,200463_01,10,前橋駅,0,0,1
日祝_11時17分_系統261,11:31:00,11:31:00,200768_02,11,前橋駅,0,0,1
日祝_11時17分_系統261,11:32:00,11:32:00,200730_02,12,前橋駅,0,0,1
日祝_11時17分_系統261,11:34:00,11:34:00,200827_02,13,前橋駅,0,0,1
日祝_11時17分_系統261,11:35:00,11:35:00,200506_02,14,前橋駅,0,0,1
日祝_11時17分_系統261,11:36:00,11:36:00,200017_02,15,前橋駅,0,0,1
日祝_11時17分_系統261,11:37:00,11:37:00,200519_02,16,前橋駅,0,0,1
日祝_11時17分_系統261,11:37:00,11:37:00,200987_02,17,前橋駅,0,0,1
日祝_11時17分_系統261,11:39:00,11:39:00,200985_02,18,前橋駅,0,0,1
日祝_11時17分_系統261,11:40:00,11:40:00,200895_02,19,前橋駅,0,0,1
日祝_11時17分_系統261,11:41:00,11:41:00,200395_02,20,前橋駅,0,0,1
日祝_11時17分_系統261,11:41:00,11:41:00,200153_02,21,前橋駅,0,0,1
日祝_11時17分_系統261,11:42:00,11:42:00,201100_02,22,前橋駅,0,0,1
日祝_11時17分_系統261,11:43:00,11:43:00,200981_02,23,前橋駅,0,0,1
日祝_11時17分_系統261,11:44:00,11:44:00,200872_02,24,前橋駅,0,0,1
日祝_11時17分_系統261,11:45:00,11:45:00,201056_02,25,前橋駅,0,0,1
日祝_11時17分_系統261,11:47:00,11:47:00,200189_02,26,前橋駅,0,0,1
日祝_11時17分_系統261,11:49:00,11:49:00,200722_02,27,前橋駅,0,0,1
日祝_11時17分_系統261,11:50:00,11:50:00,200343_02,28,前橋駅,0,0,1
日祝_11時17分_系統261,11:51:00,11:51:00,200348_02,29,前橋駅,0,0,1
日祝_11時17分_系統261,11:53:00,11:53:00,201071_02,30,前橋駅,0,0,1
日祝_11時17分_系統261,11:55:00,11:55:00,200542_02,31,前橋駅,0,0,1
日祝_11時17分_系統261,11:57:00,11:57:00,200141_02,32,前橋駅,0,0,1
日祝_11時17分_系統261,11:58:00,11:58:00,200142_02,33,前橋駅,0,0,1
日祝_11時17分_系統261,12:00:00,12:00:00,200262_02,34,前橋駅,0,0,1
日祝_11時17分_系統261,12:01:00,12:01:00,201015_02,35,前橋駅,0,0,1
日祝_11時17分_系統261,12:02:00,12:02:00,200379_02,36,前橋駅,0,0,1
日祝_11時17分_系統261,12:03:00,12:03:00,200455_02,37,前橋駅,0,0,1
日祝_11時17分_系統261,12:04:00,12:04:00,200702_02,38,前橋駅,0,0,1
日祝_11時17分_系統261,12:05:00,12:05:00,200703_02,39,前橋駅,0,0,1
日祝_11時17分_系統261,12:07:00,12:07:00,201081_02,40,前橋駅,0,0,1
日祝_11時17分_系統261,12:09:00,12:09:00,200998_02,41,前橋駅,0,0,1
日祝_11時17分_系統261,12:12:00,12:12:00,200718_10,42,前橋駅,1,0,1
日祝_11時30分_系統266,11:30:00,11:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
日祝_11時30分_系統266,11:31:00,11:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:33:00,11:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:35:00,11:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:36:00,11:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:38:00,11:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:39:00,11:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:40:00,11:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:41:00,11:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:42:00,11:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:43:00,11:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:44:00,11:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:46:00,11:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:48:00,11:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:49:00,11:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:50:00,11:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_11時30分_系統266,11:52:00,11:52:00,200273_01,17,渋川駅,0,0,1
日祝_11時30分_系統266,11:55:00,11:55:00,200189_01,18,渋川駅,0,0,1
日祝_11時30分_系統266,11:57:00,11:57:00,201056_01,19,渋川駅,0,0,1
日祝_11時30分_系統266,11:58:00,11:58:00,200872_01,20,渋川駅,0,0,1
日祝_11時30分_系統266,11:59:00,11:59:00,200981_01,21,渋川駅,0,0,1
日祝_11時30分_系統266,12:00:00,12:00:00,201100_01,22,渋川駅,0,0,1
日祝_11時30分_系統266,12:01:00,12:01:00,200153_01,23,渋川駅,0,0,1
日祝_11時30分_系統266,12:01:00,12:01:00,200395_01,24,渋川駅,0,0,1
日祝_11時30分_系統266,12:02:00,12:02:00,200895_01,25,渋川駅,0,0,1
日祝_11時30分_系統266,12:03:00,12:03:00,200985_01,26,渋川駅,0,0,1
日祝_11時30分_系統266,12:03:00,12:03:00,200987_01,27,渋川駅,0,0,1
日祝_11時30分_系統266,12:04:00,12:04:00,200519_01,28,渋川駅,0,0,1
日祝_11時30分_系統266,12:05:00,12:05:00,200017_01,29,渋川駅,0,0,1
日祝_11時30分_系統266,12:06:00,12:06:00,200506_01,30,渋川駅,0,0,1
日祝_11時30分_系統266,12:08:00,12:08:00,200827_01,31,渋川駅,0,0,1
日祝_11時30分_系統266,12:10:00,12:10:00,200730_01,32,渋川駅,0,0,1
日祝_11時30分_系統266,12:11:00,12:11:00,200768_01,33,渋川駅,0,0,1
日祝_11時30分_系統266,12:14:00,12:14:00,200463_10,34,渋川駅,1,0,1
日祝_11時57分_系統262,11:57:00,11:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
日祝_11時57分_系統262,11:58:00,11:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:00:00,12:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:02:00,12:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:03:00,12:03:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:05:00,12:05:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:06:00,12:06:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:07:00,12:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:08:00,12:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:09:00,12:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:10:00,12:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:11:00,12:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:13:00,12:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:15:00,12:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:16:00,12:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:17:00,12:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:20:00,12:20:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:22:00,12:22:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:23:00,12:23:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:24:00,12:24:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:25:00,12:25:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:26:00,12:26:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:26:00,12:26:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:27:00,12:27:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:28:00,12:28:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:28:00,12:28:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:29:00,12:29:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:30:00,12:30:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:31:00,12:31:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:33:00,12:33:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:35:00,12:35:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:36:00,12:36:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
日祝_11時57分_系統262,12:37:00,12:37:00,200463_06,33,渋川市内循環,0,0,1
日祝_11時57分_系統262,12:38:00,12:38:00,200468_01,34,渋川市内循環,0,0,1
日祝_11時57分_系統262,12:40:00,12:40:00,200466_01,35,渋川市内循環,0,0,1
日祝_11時57分_系統262,12:41:00,12:41:00,200704_01,36,渋川市内循環,0,0,1
日祝_11時57分_系統262,12:42:00,12:42:00,200476_02,37,渋川市内循環,0,0,1
日祝_11時57分_系統262,12:43:00,12:43:00,200477_02,38,渋川市内循環,0,0,1
日祝_11時57分_系統262,12:44:00,12:44:00,200430_02,39,渋川市内循環,0,0,1
日祝_11時57分_系統262,12:45:00,12:45:00,200007_02,40,渋川市内循環,0,0,1
日祝_11時57分_系統262,12:50:00,12:50:00,210463_10,41,渋川市内循環,1,0,1
日祝_11時58分_系統587,11:58:00,11:58:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
日祝_11時58分_系統587,12:00:00,12:00:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
日祝_11時58分_系統587,12:01:00,12:01:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
日祝_11時58分_系統587,12:02:00,12:02:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
日祝_11時58分_系統587,12:04:00,12:04:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
日祝_11時58分_系統587,12:06:00,12:06:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
日祝_11時58分_系統587,12:08:00,12:08:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
日祝_11時58分_系統587,12:10:00,12:10:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
日祝_11時58分_系統587,12:11:00,12:11:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
日祝_11時58分_系統587,12:13:00,12:13:00,200261_01,10,前橋駅,0,0,1
日祝_11時58分_系統587,12:14:00,12:14:00,200503_02,11,前橋駅,0,0,1
日祝_11時58分_系統587,12:17:00,12:17:00,200262_02,12,前橋駅,0,0,1
日祝_11時58分_系統587,12:18:00,12:18:00,201015_02,13,前橋駅,0,0,1
日祝_11時58分_系統587,12:19:00,12:19:00,200379_02,14,前橋駅,0,0,1
日祝_11時58分_系統587,12:20:00,12:20:00,200455_02,15,前橋駅,0,0,1
日祝_11時58分_系統587,12:21:00,12:21:00,200702_02,16,前橋駅,0,0,1
日祝_11時58分_系統587,12:22:00,12:22:00,200703_02,17,前橋駅,0,0,1
日祝_11時58分_系統587,12:24:00,12:24:00,201081_02,18,前橋駅,0,0,1
日祝_11時58分_系統587,12:26:00,12:26:00,200998_02,19,前橋駅,0,0,1
日祝_11時58分_系統587,12:29:00,12:29:00,200718_10,20,前橋駅,1,0,1
日祝_12時00分_系統663,12:00:00,12:00:00,200463_01,1,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,1,1
日祝_12時00分_系統663,12:01:00,12:01:00,200768_02,2,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:02:00,12:02:00,200730_02,3,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:04:00,12:04:00,200827_02,4,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:05:00,12:05:00,200506_02,5,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:06:00,12:06:00,200017_02,6,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:07:00,12:07:00,200519_02,7,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:07:00,12:07:00,200987_02,8,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:09:00,12:09:00,200985_02,9,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:10:00,12:10:00,200895_02,10,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:11:00,12:11:00,200395_02,11,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:11:00,12:11:00,200153_02,12,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:12:00,12:12:00,201100_02,13,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:13:00,12:13:00,200981_02,14,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:14:00,12:14:00,200872_02,15,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:15:00,12:15:00,201056_02,16,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:17:00,12:17:00,200189_02,17,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:20:00,12:20:00,200273_01,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:22:00,12:22:00,200722_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:23:00,12:23:00,200343_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:24:00,12:24:00,200348_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:26:00,12:26:00,201071_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:28:00,12:28:00,200542_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:30:00,12:30:00,200141_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:31:00,12:31:00,200142_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:33:00,12:33:00,200262_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:34:00,12:34:00,201015_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:35:00,12:35:00,200379_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:36:00,12:36:00,200455_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:37:00,12:37:00,200702_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:38:00,12:38:00,200703_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:40:00,12:40:00,201081_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:42:00,12:42:00,200998_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時00分_系統663,12:45:00,12:45:00,200718_04,34,けやきウォーク前橋,0,0,1
日祝_12時00分_系統663,12:47:00,12:47:00,200108_01,35,けやきウォーク前橋,0,0,1
日祝_12時00分_系統663,12:48:00,12:48:00,200932_01,36,けやきウォーク前橋,0,0,1
日祝_12時00分_系統663,12:49:00,12:49:00,200668_01,37,けやきウォーク前橋,0,0,1
日祝_12時00分_系統663,12:53:00,12:53:00,200022_01,38,けやきウォーク前橋,1,0,1
日祝_12時10分_系統644,12:10:00,12:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
日祝_12時10分_系統644,12:11:00,12:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_12時10分_系統644,12:13:00,12:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_12時10分_系統644,12:15:00,12:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_12時10分_系統644,12:16:00,12:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_12時10分_系統644,12:17:00,12:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_12時10分_系統644,12:18:00,12:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_12時10分_系統644,12:19:00,12:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_12時10分_系統644,12:20:00,12:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_12時10分_系統644,12:21:00,12:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_12時10分_系統644,12:23:00,12:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:24:00,12:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:25:00,12:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:26:00,12:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:27:00,12:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:29:00,12:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:31:00,12:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:32:00,12:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:33:00,12:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:35:00,12:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
日祝_12時10分_系統644,12:42:00,12:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
日祝_12時30分_系統266,12:30:00,12:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
日祝_12時30分_系統266,12:31:00,12:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:33:00,12:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:35:00,12:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:36:00,12:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:38:00,12:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:39:00,12:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:40:00,12:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:41:00,12:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:42:00,12:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:43:00,12:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:44:00,12:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:46:00,12:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:48:00,12:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:49:00,12:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:50:00,12:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_12時30分_系統266,12:52:00,12:52:00,200273_01,17,渋川駅,0,0,1
日祝_12時30分_系統266,12:55:00,12:55:00,200189_01,18,渋川駅,0,0,1
日祝_12時30分_系統266,12:57:00,12:57:00,201056_01,19,渋川駅,0,0,1
日祝_12時30分_系統266,12:58:00,12:58:00,200872_01,20,渋川駅,0,0,1
日祝_12時30分_系統266,12:59:00,12:59:00,200981_01,21,渋川駅,0,0,1
日祝_12時30分_系統266,13:00:00,13:00:00,201100_01,22,渋川駅,0,0,1
日祝_12時30分_系統266,13:01:00,13:01:00,200153_01,23,渋川駅,0,0,1
日祝_12時30分_系統266,13:01:00,13:01:00,200395_01,24,渋川駅,0,0,1
日祝_12時30分_系統266,13:02:00,13:02:00,200895_01,25,渋川駅,0,0,1
日祝_12時30分_系統266,13:03:00,13:03:00,200985_01,26,渋川駅,0,0,1
日祝_12時30分_系統266,13:03:00,13:03:00,200987_01,27,渋川駅,0,0,1
日祝_12時30分_系統266,13:04:00,13:04:00,200519_01,28,渋川駅,0,0,1
日祝_12時30分_系統266,13:05:00,13:05:00,200017_01,29,渋川駅,0,0,1
日祝_12時30分_系統266,13:06:00,13:06:00,200506_01,30,渋川駅,0,0,1
日祝_12時30分_系統266,13:08:00,13:08:00,200827_01,31,渋川駅,0,0,1
日祝_12時30分_系統266,13:10:00,13:10:00,200730_01,32,渋川駅,0,0,1
日祝_12時30分_系統266,13:11:00,13:11:00,200768_01,33,渋川駅,0,0,1
日祝_12時30分_系統266,13:14:00,13:14:00,200463_10,34,渋川駅,1,0,1
日祝_12時30分_系統267,12:30:00,12:30:00,200463_01,1,前橋駅,0,1,1
日祝_12時30分_系統267,12:31:00,12:31:00,200768_02,2,前橋駅,0,0,1
日祝_12時30分_系統267,12:32:00,12:32:00,200730_02,3,前橋駅,0,0,1
日祝_12時30分_系統267,12:34:00,12:34:00,200827_02,4,前橋駅,0,0,1
日祝_12時30分_系統267,12:35:00,12:35:00,200506_02,5,前橋駅,0,0,1
日祝_12時30分_系統267,12:36:00,12:36:00,200017_02,6,前橋駅,0,0,1
日祝_12時30分_系統267,12:37:00,12:37:00,200519_02,7,前橋駅,0,0,1
日祝_12時30分_系統267,12:37:00,12:37:00,200987_02,8,前橋駅,0,0,1
日祝_12時30分_系統267,12:39:00,12:39:00,200985_02,9,前橋駅,0,0,1
日祝_12時30分_系統267,12:40:00,12:40:00,200895_02,10,前橋駅,0,0,1
日祝_12時30分_系統267,12:41:00,12:41:00,200395_02,11,前橋駅,0,0,1
日祝_12時30分_系統267,12:41:00,12:41:00,200153_02,12,前橋駅,0,0,1
日祝_12時30分_系統267,12:42:00,12:42:00,201100_02,13,前橋駅,0,0,1
日祝_12時30分_系統267,12:43:00,12:43:00,200981_02,14,前橋駅,0,0,1
日祝_12時30分_系統267,12:44:00,12:44:00,200872_02,15,前橋駅,0,0,1
日祝_12時30分_系統267,12:45:00,12:45:00,201056_02,16,前橋駅,0,0,1
日祝_12時30分_系統267,12:47:00,12:47:00,200189_02,17,前橋駅,0,0,1
日祝_12時30分_系統267,12:48:00,12:48:00,200722_02,18,前橋駅,0,0,1
日祝_12時30分_系統267,12:49:00,12:49:00,200343_02,19,前橋駅,0,0,1
日祝_12時30分_系統267,12:50:00,12:50:00,200348_02,20,前橋駅,0,0,1
日祝_12時30分_系統267,12:52:00,12:52:00,201071_02,21,前橋駅,0,0,1
日祝_12時30分_系統267,12:54:00,12:54:00,200542_02,22,前橋駅,0,0,1
日祝_12時30分_系統267,12:56:00,12:56:00,200141_02,23,前橋駅,0,0,1
日祝_12時30分_系統267,12:57:00,12:57:00,200142_02,24,前橋駅,0,0,1
日祝_12時30分_系統267,12:59:00,12:59:00,200262_02,25,前橋駅,0,0,1
日祝_12時30分_系統267,13:00:00,13:00:00,201015_02,26,前橋駅,0,0,1
日祝_12時30分_系統267,13:01:00,13:01:00,200379_02,27,前橋駅,0,0,1
日祝_12時30分_系統267,13:02:00,13:02:00,200455_02,28,前橋駅,0,0,1
日祝_12時30分_系統267,13:03:00,13:03:00,200702_02,29,前橋駅,0,0,1
日祝_12時30分_系統267,13:04:00,13:04:00,200703_02,30,前橋駅,0,0,1
日祝_12時30分_系統267,13:06:00,13:06:00,201081_02,31,前橋駅,0,0,1
日祝_12時30分_系統267,13:08:00,13:08:00,200998_02,32,前橋駅,0,0,1
日祝_12時30分_系統267,13:11:00,13:11:00,200718_10,33,前橋駅,1,0,1
日祝_12時47分_系統662,12:47:00,12:47:00,200022_01,1,渋川駅（前橋駅・渋川市内循環 経由）,0,1,1
日祝_12時47分_系統662,12:50:00,12:50:00,200668_02,2,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,12:51:00,12:51:00,200932_02,3,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,12:52:00,12:52:00,200108_02,4,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,12:57:00,12:57:00,200718_02,5,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,12:58:00,12:58:00,200998_01,6,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:00:00,13:00:00,201081_01,7,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:02:00,13:02:00,200703_01,8,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:03:00,13:03:00,200702_01,9,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:05:00,13:05:00,200455_01,10,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:06:00,13:06:00,200379_01,11,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:07:00,13:07:00,201015_01,12,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:08:00,13:08:00,200262_01,13,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:09:00,13:09:00,200142_01,14,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:10:00,13:10:00,200141_01,15,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:11:00,13:11:00,200542_01,16,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:13:00,13:13:00,201071_01,17,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:15:00,13:15:00,200348_01,18,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:16:00,13:16:00,200343_01,19,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:17:00,13:17:00,200722_01,20,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:19:00,13:19:00,200189_01,21,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:21:00,13:21:00,201056_01,22,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:22:00,13:22:00,200872_01,23,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:23:00,13:23:00,200981_01,24,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:24:00,13:24:00,201100_01,25,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:25:00,13:25:00,200153_01,26,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:25:00,13:25:00,200395_01,27,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:26:00,13:26:00,200895_01,28,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:27:00,13:27:00,200985_01,29,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:27:00,13:27:00,200987_01,30,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:28:00,13:28:00,200519_01,31,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:29:00,13:29:00,200017_01,32,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:30:00,13:30:00,200506_01,33,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:32:00,13:32:00,200827_01,34,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:34:00,13:34:00,200730_01,35,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:35:00,13:35:00,200768_01,36,渋川駅（渋川市内循環 経由）,0,0,1
日祝_12時47分_系統662,13:36:00,13:36:00,200463_06,37,渋川市内循環,0,0,1
日祝_12時47分_系統662,13:37:00,13:37:00,200468_01,38,渋川市内循環,0,0,1
日祝_12時47分_系統662,13:39:00,13:39:00,200466_01,39,渋川市内循環,0,0,1
日祝_12時47分_系統662,13:40:00,13:40:00,200704_01,40,渋川市内循環,0,0,1
日祝_12時47分_系統662,13:41:00,13:41:00,200476_02,41,渋川市内循環,0,0,1
日祝_12時47分_系統662,13:42:00,13:42:00,200477_02,42,渋川市内循環,0,0,1
日祝_12時47分_系統662,13:43:00,13:43:00,200430_02,43,渋川市内循環,0,0,1
日祝_12時47分_系統662,13:44:00,13:44:00,200007_02,44,渋川市内循環,0,0,1
日祝_12時47分_系統662,13:49:00,13:49:00,210463_10,45,渋川市内循環,1,0,1
日祝_12時50分_系統645,12:50:00,12:50:00,201440_01,1,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,1,1
日祝_12時50分_系統645,12:55:00,12:55:00,200189_02,2,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,12:57:00,12:57:00,200722_02,3,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,12:58:00,12:58:00,200343_02,4,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,12:59:00,12:59:00,200348_02,5,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:02:00,13:02:00,201185_02,6,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:05:00,13:05:00,200927_01,7,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:05:00,13:05:00,200800_02,8,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:06:00,13:06:00,200928_02,9,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:08:00,13:08:00,201071_02,10,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:10:00,13:10:00,200542_02,11,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:12:00,13:12:00,200141_02,12,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:14:00,13:14:00,200142_02,13,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:15:00,13:15:00,200503_01,14,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:17:00,13:17:00,200261_01,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:18:00,13:18:00,200503_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:21:00,13:21:00,200262_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:22:00,13:22:00,201015_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:23:00,13:23:00,200379_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:24:00,13:24:00,200455_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:25:00,13:25:00,200702_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:26:00,13:26:00,200703_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:28:00,13:28:00,201081_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:30:00,13:30:00,200998_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_12時50分_系統645,13:33:00,13:33:00,200718_04,25,けやきウォーク前橋,0,0,1
日祝_12時50分_系統645,13:35:00,13:35:00,200108_01,26,けやきウォーク前橋,0,0,1
日祝_12時50分_系統645,13:36:00,13:36:00,200932_01,27,けやきウォーク前橋,0,0,1
日祝_12時50分_系統645,13:37:00,13:37:00,200668_01,28,けやきウォーク前橋,0,0,1
日祝_12時50分_系統645,13:41:00,13:41:00,200022_01,29,けやきウォーク前橋,1,0,1
日祝_12時52分_系統261,12:52:00,12:52:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
日祝_12時52分_系統261,12:53:00,12:53:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
日祝_12時52分_系統261,12:54:00,12:54:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
日祝_12時52分_系統261,12:55:00,12:55:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
日祝_12時52分_系統261,12:56:00,12:56:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
日祝_12時52分_系統261,12:57:00,12:57:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
日祝_12時52分_系統261,12:58:00,12:58:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
日祝_12時52分_系統261,12:59:00,12:59:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
日祝_12時52分_系統261,13:00:00,13:00:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
日祝_12時52分_系統261,13:05:00,13:05:00,200463_01,10,前橋駅,0,0,1
日祝_12時52分_系統261,13:06:00,13:06:00,200768_02,11,前橋駅,0,0,1
日祝_12時52分_系統261,13:07:00,13:07:00,200730_02,12,前橋駅,0,0,1
日祝_12時52分_系統261,13:09:00,13:09:00,200827_02,13,前橋駅,0,0,1
日祝_12時52分_系統261,13:10:00,13:10:00,200506_02,14,前橋駅,0,0,1
日祝_12時52分_系統261,13:11:00,13:11:00,200017_02,15,前橋駅,0,0,1
日祝_12時52分_系統261,13:12:00,13:12:00,200519_02,16,前橋駅,0,0,1
日祝_12時52分_系統261,13:12:00,13:12:00,200987_02,17,前橋駅,0,0,1
日祝_12時52分_系統261,13:14:00,13:14:00,200985_02,18,前橋駅,0,0,1
日祝_12時52分_系統261,13:15:00,13:15:00,200895_02,19,前橋駅,0,0,1
日祝_12時52分_系統261,13:16:00,13:16:00,200395_02,20,前橋駅,0,0,1
日祝_12時52分_系統261,13:16:00,13:16:00,200153_02,21,前橋駅,0,0,1
日祝_12時52分_系統261,13:17:00,13:17:00,201100_02,22,前橋駅,0,0,1
日祝_12時52分_系統261,13:18:00,13:18:00,200981_02,23,前橋駅,0,0,1
日祝_12時52分_系統261,13:19:00,13:19:00,200872_02,24,前橋駅,0,0,1
日祝_12時52分_系統261,13:20:00,13:20:00,201056_02,25,前橋駅,0,0,1
日祝_12時52分_系統261,13:22:00,13:22:00,200189_02,26,前橋駅,0,0,1
日祝_12時52分_系統261,13:23:00,13:23:00,200722_02,27,前橋駅,0,0,1
日祝_12時52分_系統261,13:24:00,13:24:00,200343_02,28,前橋駅,0,0,1
日祝_12時52分_系統261,13:25:00,13:25:00,200348_02,29,前橋駅,0,0,1
日祝_12時52分_系統261,13:27:00,13:27:00,201071_02,30,前橋駅,0,0,1
日祝_12時52分_系統261,13:29:00,13:29:00,200542_02,31,前橋駅,0,0,1
日祝_12時52分_系統261,13:31:00,13:31:00,200141_02,32,前橋駅,0,0,1
日祝_12時52分_系統261,13:32:00,13:32:00,200142_02,33,前橋駅,0,0,1
日祝_12時52分_系統261,13:34:00,13:34:00,200262_02,34,前橋駅,0,0,1
日祝_12時52分_系統261,13:35:00,13:35:00,201015_02,35,前橋駅,0,0,1
日祝_12時52分_系統261,13:36:00,13:36:00,200379_02,36,前橋駅,0,0,1
日祝_12時52分_系統261,13:37:00,13:37:00,200455_02,37,前橋駅,0,0,1
日祝_12時52分_系統261,13:38:00,13:38:00,200702_02,38,前橋駅,0,0,1
日祝_12時52分_系統261,13:39:00,13:39:00,200703_02,39,前橋駅,0,0,1
日祝_12時52分_系統261,13:41:00,13:41:00,201081_02,40,前橋駅,0,0,1
日祝_12時52分_系統261,13:43:00,13:43:00,200998_02,41,前橋駅,0,0,1
日祝_12時52分_系統261,13:46:00,13:46:00,200718_10,42,前橋駅,1,0,1
日祝_13時10分_系統584,13:10:00,13:10:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
日祝_13時10分_系統584,13:11:00,13:11:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:13:00,13:13:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:15:00,13:15:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:16:00,13:16:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:18:00,13:18:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:19:00,13:19:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:20:00,13:20:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:21:00,13:21:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:22:00,13:22:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:24:00,13:24:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:25:00,13:25:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:26:00,13:26:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:27:00,13:27:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:28:00,13:28:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:30:00,13:30:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:31:00,13:31:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:32:00,13:32:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_13時10分_系統584,13:34:00,13:34:00,200927_01,19,群馬大学荒牧,0,0,1
日祝_13時10分_系統584,13:35:00,13:35:00,201185_01,20,群馬大学荒牧,0,0,1
日祝_13時10分_系統584,13:39:00,13:39:00,200348_01,21,群馬大学荒牧,0,0,1
日祝_13時10分_系統584,13:40:00,13:40:00,200343_01,22,群馬大学荒牧,0,0,1
日祝_13時10分_系統584,13:41:00,13:41:00,200722_01,23,群馬大学荒牧,0,0,1
日祝_13時10分_系統584,13:44:00,13:44:00,200273_01,24,群馬大学荒牧,1,0,1
日祝_13時30分_系統262,13:30:00,13:30:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
日祝_13時30分_系統262,13:31:00,13:31:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:33:00,13:33:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:35:00,13:35:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:36:00,13:36:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:38:00,13:38:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:39:00,13:39:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:40:00,13:40:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:41:00,13:41:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:42:00,13:42:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:43:00,13:43:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:44:00,13:44:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:46:00,13:46:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:48:00,13:48:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:49:00,13:49:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:50:00,13:50:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:52:00,13:52:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:54:00,13:54:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:55:00,13:55:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:56:00,13:56:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:57:00,13:57:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:58:00,13:58:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:58:00,13:58:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,13:59:00,13:59:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,14:00:00,14:00:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,14:00:00,14:00:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,14:01:00,14:01:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,14:02:00,14:02:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,14:03:00,14:03:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,14:05:00,14:05:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,14:07:00,14:07:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,14:08:00,14:08:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
日祝_13時30分_系統262,14:09:00,14:09:00,200463_06,33,渋川市内循環,0,0,1
日祝_13時30分_系統262,14:10:00,14:10:00,200468_01,34,渋川市内循環,0,0,1
日祝_13時30分_系統262,14:12:00,14:12:00,200466_01,35,渋川市内循環,0,0,1
日祝_13時30分_系統262,14:13:00,14:13:00,200704_01,36,渋川市内循環,0,0,1
日祝_13時30分_系統262,14:14:00,14:14:00,200476_02,37,渋川市内循環,0,0,1
日祝_13時30分_系統262,14:15:00,14:15:00,200477_02,38,渋川市内循環,0,0,1
日祝_13時30分_系統262,14:16:00,14:16:00,200430_02,39,渋川市内循環,0,0,1
日祝_13時30分_系統262,14:17:00,14:17:00,200007_02,40,渋川市内循環,0,0,1
日祝_13時30分_系統262,14:22:00,14:22:00,210463_10,41,渋川市内循環,1,0,1
日祝_13時30分_系統267,13:30:00,13:30:00,200463_01,1,前橋駅,0,1,1
日祝_13時30分_系統267,13:31:00,13:31:00,200768_02,2,前橋駅,0,0,1
日祝_13時30分_系統267,13:32:00,13:32:00,200730_02,3,前橋駅,0,0,1
日祝_13時30分_系統267,13:34:00,13:34:00,200827_02,4,前橋駅,0,0,1
日祝_13時30分_系統267,13:35:00,13:35:00,200506_02,5,前橋駅,0,0,1
日祝_13時30分_系統267,13:36:00,13:36:00,200017_02,6,前橋駅,0,0,1
日祝_13時30分_系統267,13:37:00,13:37:00,200519_02,7,前橋駅,0,0,1
日祝_13時30分_系統267,13:37:00,13:37:00,200987_02,8,前橋駅,0,0,1
日祝_13時30分_系統267,13:39:00,13:39:00,200985_02,9,前橋駅,0,0,1
日祝_13時30分_系統267,13:40:00,13:40:00,200895_02,10,前橋駅,0,0,1
日祝_13時30分_系統267,13:41:00,13:41:00,200395_02,11,前橋駅,0,0,1
日祝_13時30分_系統267,13:41:00,13:41:00,200153_02,12,前橋駅,0,0,1
日祝_13時30分_系統267,13:42:00,13:42:00,201100_02,13,前橋駅,0,0,1
日祝_13時30分_系統267,13:43:00,13:43:00,200981_02,14,前橋駅,0,0,1
日祝_13時30分_系統267,13:44:00,13:44:00,200872_02,15,前橋駅,0,0,1
日祝_13時30分_系統267,13:45:00,13:45:00,201056_02,16,前橋駅,0,0,1
日祝_13時30分_系統267,13:47:00,13:47:00,200189_02,17,前橋駅,0,0,1
日祝_13時30分_系統267,13:48:00,13:48:00,200722_02,18,前橋駅,0,0,1
日祝_13時30分_系統267,13:49:00,13:49:00,200343_02,19,前橋駅,0,0,1
日祝_13時30分_系統267,13:50:00,13:50:00,200348_02,20,前橋駅,0,0,1
日祝_13時30分_系統267,13:52:00,13:52:00,201071_02,21,前橋駅,0,0,1
日祝_13時30分_系統267,13:54:00,13:54:00,200542_02,22,前橋駅,0,0,1
日祝_13時30分_系統267,13:56:00,13:56:00,200141_02,23,前橋駅,0,0,1
日祝_13時30分_系統267,13:57:00,13:57:00,200142_02,24,前橋駅,0,0,1
日祝_13時30分_系統267,13:59:00,13:59:00,200262_02,25,前橋駅,0,0,1
日祝_13時30分_系統267,14:00:00,14:00:00,201015_02,26,前橋駅,0,0,1
日祝_13時30分_系統267,14:01:00,14:01:00,200379_02,27,前橋駅,0,0,1
日祝_13時30分_系統267,14:02:00,14:02:00,200455_02,28,前橋駅,0,0,1
日祝_13時30分_系統267,14:03:00,14:03:00,200702_02,29,前橋駅,0,0,1
日祝_13時30分_系統267,14:04:00,14:04:00,200703_02,30,前橋駅,0,0,1
日祝_13時30分_系統267,14:06:00,14:06:00,201081_02,31,前橋駅,0,0,1
日祝_13時30分_系統267,14:08:00,14:08:00,200998_02,32,前橋駅,0,0,1
日祝_13時30分_系統267,14:11:00,14:11:00,200718_10,33,前橋駅,1,0,1
日祝_13時55分_系統587,13:55:00,13:55:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
日祝_13時55分_系統587,13:57:00,13:57:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
日祝_13時55分_系統587,13:58:00,13:58:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
日祝_13時55分_系統587,13:59:00,13:59:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
日祝_13時55分_系統587,14:01:00,14:01:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
日祝_13時55分_系統587,14:03:00,14:03:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
日祝_13時55分_系統587,14:05:00,14:05:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
日祝_13時55分_系統587,14:07:00,14:07:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
日祝_13時55分_系統587,14:08:00,14:08:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
日祝_13時55分_系統587,14:10:00,14:10:00,200261_01,10,前橋駅,0,0,1
日祝_13時55分_系統587,14:11:00,14:11:00,200503_02,11,前橋駅,0,0,1
日祝_13時55分_系統587,14:14:00,14:14:00,200262_02,12,前橋駅,0,0,1
日祝_13時55分_系統587,14:15:00,14:15:00,201015_02,13,前橋駅,0,0,1
日祝_13時55分_系統587,14:16:00,14:16:00,200379_02,14,前橋駅,0,0,1
日祝_13時55分_系統587,14:17:00,14:17:00,200455_02,15,前橋駅,0,0,1
日祝_13時55分_系統587,14:18:00,14:18:00,200702_02,16,前橋駅,0,0,1
日祝_13時55分_系統587,14:19:00,14:19:00,200703_02,17,前橋駅,0,0,1
日祝_13時55分_系統587,14:21:00,14:21:00,201081_02,18,前橋駅,0,0,1
日祝_13時55分_系統587,14:23:00,14:23:00,200998_02,19,前橋駅,0,0,1
日祝_13時55分_系統587,14:26:00,14:26:00,200718_10,20,前橋駅,1,0,1
日祝_13時57分_系統268,13:57:00,13:57:00,200718_02,1,渋川駅,0,1,1
日祝_13時57分_系統268,13:58:00,13:58:00,200998_01,2,渋川駅,0,0,1
日祝_13時57分_系統268,14:00:00,14:00:00,201081_01,3,渋川駅,0,0,1
日祝_13時57分_系統268,14:02:00,14:02:00,200703_01,4,渋川駅,0,0,1
日祝_13時57分_系統268,14:03:00,14:03:00,200702_01,5,渋川駅,0,0,1
日祝_13時57分_系統268,14:04:00,14:04:00,200455_01,6,渋川駅,0,0,1
日祝_13時57分_系統268,14:05:00,14:05:00,200379_01,7,渋川駅,0,0,1
日祝_13時57分_系統268,14:06:00,14:06:00,201015_01,8,渋川駅,0,0,1
日祝_13時57分_系統268,14:07:00,14:07:00,200262_01,9,渋川駅,0,0,1
日祝_13時57分_系統268,14:08:00,14:08:00,200142_01,10,渋川駅,0,0,1
日祝_13時57分_系統268,14:09:00,14:09:00,200141_01,11,渋川駅,0,0,1
日祝_13時57分_系統268,14:10:00,14:10:00,200542_01,12,渋川駅,0,0,1
日祝_13時57分_系統268,14:12:00,14:12:00,201071_01,13,渋川駅,0,0,1
日祝_13時57分_系統268,14:14:00,14:14:00,200348_01,14,渋川駅,0,0,1
日祝_13時57分_系統268,14:15:00,14:15:00,200343_01,15,渋川駅,0,0,1
日祝_13時57分_系統268,14:16:00,14:16:00,200722_01,16,渋川駅,0,0,1
日祝_13時57分_系統268,14:18:00,14:18:00,200189_01,17,渋川駅,0,0,1
日祝_13時57分_系統268,14:20:00,14:20:00,201056_01,18,渋川駅,0,0,1
日祝_13時57分_系統268,14:21:00,14:21:00,200872_01,19,渋川駅,0,0,1
日祝_13時57分_系統268,14:22:00,14:22:00,200981_01,20,渋川駅,0,0,1
日祝_13時57分_系統268,14:23:00,14:23:00,201100_01,21,渋川駅,0,0,1
日祝_13時57分_系統268,14:24:00,14:24:00,200153_01,22,渋川駅,0,0,1
日祝_13時57分_系統268,14:24:00,14:24:00,200395_01,23,渋川駅,0,0,1
日祝_13時57分_系統268,14:25:00,14:25:00,200895_01,24,渋川駅,0,0,1
日祝_13時57分_系統268,14:26:00,14:26:00,200985_01,25,渋川駅,0,0,1
日祝_13時57分_系統268,14:26:00,14:26:00,200987_01,26,渋川駅,0,0,1
日祝_13時57分_系統268,14:27:00,14:27:00,200519_01,27,渋川駅,0,0,1
日祝_13時57分_系統268,14:28:00,14:28:00,200017_01,28,渋川駅,0,0,1
日祝_13時57分_系統268,14:29:00,14:29:00,200506_01,29,渋川駅,0,0,1
日祝_13時57分_系統268,14:31:00,14:31:00,200827_01,30,渋川駅,0,0,1
日祝_13時57分_系統268,14:33:00,14:33:00,200730_01,31,渋川駅,0,0,1
日祝_13時57分_系統268,14:34:00,14:34:00,200768_01,32,渋川駅,0,0,1
日祝_13時57分_系統268,14:37:00,14:37:00,200463_10,33,渋川駅,1,0,1
日祝_14時00分_系統265,14:00:00,14:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
日祝_14時00分_系統265,14:01:00,14:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:02:00,14:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:04:00,14:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:05:00,14:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:06:00,14:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:07:00,14:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:07:00,14:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:09:00,14:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:10:00,14:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:11:00,14:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:11:00,14:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:12:00,14:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:13:00,14:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:14:00,14:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:15:00,14:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:17:00,14:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_14時00分_系統265,14:20:00,14:20:00,200273_01,18,前橋駅,0,0,1
日祝_14時00分_系統265,14:22:00,14:22:00,200722_02,19,前橋駅,0,0,1
日祝_14時00分_系統265,14:23:00,14:23:00,200343_02,20,前橋駅,0,0,1
日祝_14時00分_系統265,14:24:00,14:24:00,200348_02,21,前橋駅,0,0,1
日祝_14時00分_系統265,14:26:00,14:26:00,201071_02,22,前橋駅,0,0,1
日祝_14時00分_系統265,14:28:00,14:28:00,200542_02,23,前橋駅,0,0,1
日祝_14時00分_系統265,14:30:00,14:30:00,200141_02,24,前橋駅,0,0,1
日祝_14時00分_系統265,14:31:00,14:31:00,200142_02,25,前橋駅,0,0,1
日祝_14時00分_系統265,14:33:00,14:33:00,200262_02,26,前橋駅,0,0,1
日祝_14時00分_系統265,14:34:00,14:34:00,201015_02,27,前橋駅,0,0,1
日祝_14時00分_系統265,14:35:00,14:35:00,200379_02,28,前橋駅,0,0,1
日祝_14時00分_系統265,14:36:00,14:36:00,200455_02,29,前橋駅,0,0,1
日祝_14時00分_系統265,14:37:00,14:37:00,200702_02,30,前橋駅,0,0,1
日祝_14時00分_系統265,14:38:00,14:38:00,200703_02,31,前橋駅,0,0,1
日祝_14時00分_系統265,14:40:00,14:40:00,201081_02,32,前橋駅,0,0,1
日祝_14時00分_系統265,14:42:00,14:42:00,200998_02,33,前橋駅,0,0,1
日祝_14時00分_系統265,14:45:00,14:45:00,200718_10,34,前橋駅,1,0,1
日祝_14時10分_系統644,14:10:00,14:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
日祝_14時10分_系統644,14:11:00,14:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_14時10分_系統644,14:13:00,14:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_14時10分_系統644,14:15:00,14:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_14時10分_系統644,14:16:00,14:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_14時10分_系統644,14:17:00,14:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_14時10分_系統644,14:18:00,14:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_14時10分_系統644,14:19:00,14:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_14時10分_系統644,14:20:00,14:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_14時10分_系統644,14:21:00,14:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
日祝_14時10分_系統644,14:23:00,14:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:24:00,14:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:25:00,14:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:26:00,14:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:27:00,14:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:29:00,14:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:31:00,14:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:32:00,14:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:33:00,14:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:35:00,14:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
日祝_14時10分_系統644,14:42:00,14:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
日祝_14時20分_系統661,14:20:00,14:20:00,210463_05,1,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,1,1
日祝_14時20分_系統661,14:21:00,14:21:00,200007_01,2,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:22:00,14:22:00,200430_01,3,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:23:00,14:23:00,200477_01,4,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:24:00,14:24:00,200476_01,5,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:25:00,14:25:00,200704_02,6,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:26:00,14:26:00,200467_01,7,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:27:00,14:27:00,200466_02,8,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:28:00,14:28:00,200468_02,9,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:33:00,14:33:00,200463_01,10,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:34:00,14:34:00,200768_02,11,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:35:00,14:35:00,200730_02,12,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:37:00,14:37:00,200827_02,13,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:38:00,14:38:00,200506_02,14,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:39:00,14:39:00,200017_02,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:40:00,14:40:00,200519_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:40:00,14:40:00,200987_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:42:00,14:42:00,200985_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:43:00,14:43:00,200895_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:44:00,14:44:00,200395_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:44:00,14:44:00,200153_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:45:00,14:45:00,201100_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:46:00,14:46:00,200981_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:47:00,14:47:00,200872_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:48:00,14:48:00,201056_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:50:00,14:50:00,200189_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:52:00,14:52:00,200722_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:53:00,14:53:00,200343_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:54:00,14:54:00,200348_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:56:00,14:56:00,201071_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,14:58:00,14:58:00,200542_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:00:00,15:00:00,200141_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:01:00,15:01:00,200142_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:03:00,15:03:00,200262_02,34,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:04:00,15:04:00,201015_02,35,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:05:00,15:05:00,200379_02,36,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:06:00,15:06:00,200455_02,37,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:07:00,15:07:00,200702_02,38,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:08:00,15:08:00,200703_02,39,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:10:00,15:10:00,201081_02,40,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:12:00,15:12:00,200998_02,41,けやきウォーク前橋（前橋駅 経由）,0,0,1
日祝_14時20分_系統661,15:15:00,15:15:00,200718_04,42,けやきウォーク前橋,0,0,1
日祝_14時20分_系統661,15:17:00,15:17:00,200108_01,43,けやきウォーク前橋,0,0,1
日祝_14時20分_系統661,15:18:00,15:18:00,200932_01,44,けやきウォーク前橋,0,0,1
日祝_14時20分_系統661,15:19:00,15:19:00,200668_01,45,けやきウォーク前橋,0,0,1
日祝_14時20分_系統661,15:23:00,15:23:00,200022_01,46,けやきウォーク前橋,1,0,1
日祝_14時30分_系統266,14:30:00,14:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
日祝_14時30分_系統266,14:31:00,14:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:33:00,14:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:35:00,14:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:36:00,14:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:38:00,14:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:39:00,14:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:40:00,14:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:41:00,14:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:42:00,14:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:43:00,14:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:44:00,14:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:46:00,14:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:48:00,14:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:49:00,14:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:50:00,14:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_14時30分_系統266,14:52:00,14:52:00,200273_01,17,渋川駅,0,0,1
日祝_14時30分_系統266,14:55:00,14:55:00,200189_01,18,渋川駅,0,0,1
日祝_14時30分_系統266,14:57:00,14:57:00,201056_01,19,渋川駅,0,0,1
日祝_14時30分_系統266,14:58:00,14:58:00,200872_01,20,渋川駅,0,0,1
日祝_14時30分_系統266,14:59:00,14:59:00,200981_01,21,渋川駅,0,0,1
日祝_14時30分_系統266,15:00:00,15:00:00,201100_01,22,渋川駅,0,0,1
日祝_14時30分_系統266,15:01:00,15:01:00,200153_01,23,渋川駅,0,0,1
日祝_14時30分_系統266,15:01:00,15:01:00,200395_01,24,渋川駅,0,0,1
日祝_14時30分_系統266,15:02:00,15:02:00,200895_01,25,渋川駅,0,0,1
日祝_14時30分_系統266,15:03:00,15:03:00,200985_01,26,渋川駅,0,0,1
日祝_14時30分_系統266,15:03:00,15:03:00,200987_01,27,渋川駅,0,0,1
日祝_14時30分_系統266,15:04:00,15:04:00,200519_01,28,渋川駅,0,0,1
日祝_14時30分_系統266,15:05:00,15:05:00,200017_01,29,渋川駅,0,0,1
日祝_14時30分_系統266,15:06:00,15:06:00,200506_01,30,渋川駅,0,0,1
日祝_14時30分_系統266,15:08:00,15:08:00,200827_01,31,渋川駅,0,0,1
日祝_14時30分_系統266,15:10:00,15:10:00,200730_01,32,渋川駅,0,0,1
日祝_14時30分_系統266,15:11:00,15:11:00,200768_01,33,渋川駅,0,0,1
日祝_14時30分_系統266,15:14:00,15:14:00,200463_10,34,渋川駅,1,0,1
日祝_14時50分_系統643,14:50:00,14:50:00,201440_01,1,前橋駅（南橘団地・群大病院 経由）,0,1,1
日祝_14時50分_系統643,14:55:00,14:55:00,200189_02,2,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_14時50分_系統643,14:57:00,14:57:00,200722_02,3,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_14時50分_系統643,14:58:00,14:58:00,200343_02,4,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_14時50分_系統643,14:59:00,14:59:00,200348_02,5,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:02:00,15:02:00,201185_02,6,前橋駅（南橘団地・群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:05:00,15:05:00,200927_01,7,前橋駅（群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:05:00,15:05:00,200800_02,8,前橋駅（群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:06:00,15:06:00,200928_02,9,前橋駅（群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:08:00,15:08:00,201071_02,10,前橋駅（群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:10:00,15:10:00,200542_02,11,前橋駅（群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:12:00,15:12:00,200141_02,12,前橋駅（群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:13:00,15:13:00,200142_02,13,前橋駅（群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:14:00,15:14:00,200503_01,14,前橋駅（群大病院 経由）,0,0,1
日祝_14時50分_系統643,15:16:00,15:16:00,200261_01,15,前橋駅,0,0,1
日祝_14時50分_系統643,15:17:00,15:17:00,200503_02,16,前橋駅,0,0,1
日祝_14時50分_系統643,15:19:00,15:19:00,200262_02,17,前橋駅,0,0,1
日祝_14時50分_系統643,15:20:00,15:20:00,201015_02,18,前橋駅,0,0,1
日祝_14時50分_系統643,15:22:00,15:22:00,200379_02,19,前橋駅,0,0,1
日祝_14時50分_系統643,15:23:00,15:23:00,200455_02,20,前橋駅,0,0,1
日祝_14時50分_系統643,15:25:00,15:25:00,200702_02,21,前橋駅,0,0,1
日祝_14時50分_系統643,15:27:00,15:27:00,200703_02,22,前橋駅,0,0,1
日祝_14時50分_系統643,15:29:00,15:29:00,201081_02,23,前橋駅,0,0,1
日祝_14時50分_系統643,15:31:00,15:31:00,200998_02,24,前橋駅,0,0,1
日祝_14時50分_系統643,15:34:00,15:34:00,200718_10,25,前橋駅,1,0,1
日祝_14時55分_系統268,14:55:00,14:55:00,200718_02,1,渋川駅,0,1,1
日祝_14時55分_系統268,14:56:00,14:56:00,200998_01,2,渋川駅,0,0,1
日祝_14時55分_系統268,14:58:00,14:58:00,201081_01,3,渋川駅,0,0,1
日祝_14時55分_系統268,15:00:00,15:00:00,200703_01,4,渋川駅,0,0,1
日祝_14時55分_系統268,15:01:00,15:01:00,200702_01,5,渋川駅,0,0,1
日祝_14時55分_系統268,15:02:00,15:02:00,200455_01,6,渋川駅,0,0,1
日祝_14時55分_系統268,15:03:00,15:03:00,200379_01,7,渋川駅,0,0,1
日祝_14時55分_系統268,15:04:00,15:04:00,201015_01,8,渋川駅,0,0,1
日祝_14時55分_系統268,15:05:00,15:05:00,200262_01,9,渋川駅,0,0,1
日祝_14時55分_系統268,15:06:00,15:06:00,200142_01,10,渋川駅,0,0,1
日祝_14時55分_系統268,15:07:00,15:07:00,200141_01,11,渋川駅,0,0,1
日祝_14時55分_系統268,15:08:00,15:08:00,200542_01,12,渋川駅,0,0,1
日祝_14時55分_系統268,15:10:00,15:10:00,201071_01,13,渋川駅,0,0,1
日祝_14時55分_系統268,15:12:00,15:12:00,200348_01,14,渋川駅,0,0,1
日祝_14時55分_系統268,15:13:00,15:13:00,200343_01,15,渋川駅,0,0,1
日祝_14時55分_系統268,15:14:00,15:14:00,200722_01,16,渋川駅,0,0,1
日祝_14時55分_系統268,15:16:00,15:16:00,200189_01,17,渋川駅,0,0,1
日祝_14時55分_系統268,15:18:00,15:18:00,201056_01,18,渋川駅,0,0,1
日祝_14時55分_系統268,15:19:00,15:19:00,200872_01,19,渋川駅,0,0,1
日祝_14時55分_系統268,15:20:00,15:20:00,200981_01,20,渋川駅,0,0,1
日祝_14時55分_系統268,15:21:00,15:21:00,201100_01,21,渋川駅,0,0,1
日祝_14時55分_系統268,15:22:00,15:22:00,200153_01,22,渋川駅,0,0,1
日祝_14時55分_系統268,15:22:00,15:22:00,200395_01,23,渋川駅,0,0,1
日祝_14時55分_系統268,15:23:00,15:23:00,200895_01,24,渋川駅,0,0,1
日祝_14時55分_系統268,15:24:00,15:24:00,200985_01,25,渋川駅,0,0,1
日祝_14時55分_系統268,15:24:00,15:24:00,200987_01,26,渋川駅,0,0,1
日祝_14時55分_系統268,15:25:00,15:25:00,200519_01,27,渋川駅,0,0,1
日祝_14時55分_系統268,15:26:00,15:26:00,200017_01,28,渋川駅,0,0,1
日祝_14時55分_系統268,15:27:00,15:27:00,200506_01,29,渋川駅,0,0,1
日祝_14時55分_系統268,15:29:00,15:29:00,200827_01,30,渋川駅,0,0,1
日祝_14時55分_系統268,15:31:00,15:31:00,200730_01,31,渋川駅,0,0,1
日祝_14時55分_系統268,15:32:00,15:32:00,200768_01,32,渋川駅,0,0,1
日祝_14時55分_系統268,15:35:00,15:35:00,200463_10,33,渋川駅,1,0,1
日祝_15時00分_系統672,15:00:00,15:00:00,200022_01,1,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,1,1
日祝_15時00分_系統672,15:03:00,15:03:00,200668_02,2,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:04:00,15:04:00,200932_02,3,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:05:00,15:05:00,200108_02,4,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:10:00,15:10:00,200718_02,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:11:00,15:11:00,200998_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:13:00,15:13:00,201081_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:15:00,15:15:00,200703_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:16:00,15:16:00,200702_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:18:00,15:18:00,200455_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:19:00,15:19:00,200379_01,11,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:20:00,15:20:00,201015_01,12,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:21:00,15:21:00,200262_01,13,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:22:00,15:22:00,200503_01,14,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:24:00,15:24:00,200261_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:25:00,15:25:00,200503_02,16,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:26:00,15:26:00,200142_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:27:00,15:27:00,200141_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:28:00,15:28:00,200542_01,19,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:30:00,15:30:00,201071_01,20,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:31:00,15:31:00,200928_01,21,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:32:00,15:32:00,200800_01,22,群馬大学荒牧（南橘団地 経由）,0,0,1
日祝_15時00分_系統672,15:34:00,15:34:00,200927_01,23,群馬大学荒牧,0,0,1
日祝_15時00分_系統672,15:35:00,15:35:00,201185_01,24,群馬大学荒牧,0,0,1
日祝_15時00分_系統672,15:39:00,15:39:00,200348_01,25,群馬大学荒牧,0,0,1
日祝_15時00分_系統672,15:40:00,15:40:00,200343_01,26,群馬大学荒牧,0,0,1
日祝_15時00分_系統672,15:41:00,15:41:00,200722_01,27,群馬大学荒牧,0,0,1
日祝_15時00分_系統672,15:44:00,15:44:00,200273_01,28,群馬大学荒牧,1,0,1
日祝_15時00分_系統265,15:00:00,15:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
日祝_15時00分_系統265,15:01:00,15:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:02:00,15:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:04:00,15:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:05:00,15:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:06:00,15:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:07:00,15:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:07:00,15:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:09:00,15:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:10:00,15:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:11:00,15:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:11:00,15:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:12:00,15:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:13:00,15:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:14:00,15:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:15:00,15:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:17:00,15:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_15時00分_系統265,15:20:00,15:20:00,200273_01,18,前橋駅,0,0,1
日祝_15時00分_系統265,15:22:00,15:22:00,200722_02,19,前橋駅,0,0,1
日祝_15時00分_系統265,15:23:00,15:23:00,200343_02,20,前橋駅,0,0,1
日祝_15時00分_系統265,15:24:00,15:24:00,200348_02,21,前橋駅,0,0,1
日祝_15時00分_系統265,15:26:00,15:26:00,201071_02,22,前橋駅,0,0,1
日祝_15時00分_系統265,15:28:00,15:28:00,200542_02,23,前橋駅,0,0,1
日祝_15時00分_系統265,15:30:00,15:30:00,200141_02,24,前橋駅,0,0,1
日祝_15時00分_系統265,15:31:00,15:31:00,200142_02,25,前橋駅,0,0,1
日祝_15時00分_系統265,15:33:00,15:33:00,200262_02,26,前橋駅,0,0,1
日祝_15時00分_系統265,15:34:00,15:34:00,201015_02,27,前橋駅,0,0,1
日祝_15時00分_系統265,15:35:00,15:35:00,200379_02,28,前橋駅,0,0,1
日祝_15時00分_系統265,15:36:00,15:36:00,200455_02,29,前橋駅,0,0,1
日祝_15時00分_系統265,15:37:00,15:37:00,200702_02,30,前橋駅,0,0,1
日祝_15時00分_系統265,15:38:00,15:38:00,200703_02,31,前橋駅,0,0,1
日祝_15時00分_系統265,15:40:00,15:40:00,201081_02,32,前橋駅,0,0,1
日祝_15時00分_系統265,15:42:00,15:42:00,200998_02,33,前橋駅,0,0,1
日祝_15時00分_系統265,15:45:00,15:45:00,200718_10,34,前橋駅,1,0,1
日祝_15時30分_系統262,15:30:00,15:30:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
日祝_15時30分_系統262,15:31:00,15:31:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:33:00,15:33:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:35:00,15:35:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:36:00,15:36:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:38:00,15:38:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:39:00,15:39:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:40:00,15:40:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:41:00,15:41:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:42:00,15:42:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:43:00,15:43:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:44:00,15:44:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:46:00,15:46:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:48:00,15:48:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:49:00,15:49:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:50:00,15:50:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:52:00,15:52:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:54:00,15:54:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:55:00,15:55:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:56:00,15:56:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:57:00,15:57:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:58:00,15:58:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:58:00,15:58:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,15:59:00,15:59:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,16:00:00,16:00:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,16:00:00,16:00:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,16:01:00,16:01:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,16:02:00,16:02:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,16:03:00,16:03:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,16:05:00,16:05:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,16:07:00,16:07:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,16:08:00,16:08:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
日祝_15時30分_系統262,16:09:00,16:09:00,200463_06,33,渋川市内循環,0,0,1
日祝_15時30分_系統262,16:10:00,16:10:00,200468_01,34,渋川市内循環,0,0,1
日祝_15時30分_系統262,16:12:00,16:12:00,200466_01,35,渋川市内循環,0,0,1
日祝_15時30分_系統262,16:13:00,16:13:00,200704_01,36,渋川市内循環,0,0,1
日祝_15時30分_系統262,16:14:00,16:14:00,200476_02,37,渋川市内循環,0,0,1
日祝_15時30分_系統262,16:15:00,16:15:00,200477_02,38,渋川市内循環,0,0,1
日祝_15時30分_系統262,16:16:00,16:16:00,200430_02,39,渋川市内循環,0,0,1
日祝_15時30分_系統262,16:17:00,16:17:00,200007_02,40,渋川市内循環,0,0,1
日祝_15時30分_系統262,16:22:00,16:22:00,210463_10,41,渋川市内循環,1,0,1
日祝_15時30分_系統267,15:30:00,15:30:00,200463_01,1,前橋駅,0,1,1
日祝_15時30分_系統267,15:31:00,15:31:00,200768_02,2,前橋駅,0,0,1
日祝_15時30分_系統267,15:32:00,15:32:00,200730_02,3,前橋駅,0,0,1
日祝_15時30分_系統267,15:34:00,15:34:00,200827_02,4,前橋駅,0,0,1
日祝_15時30分_系統267,15:35:00,15:35:00,200506_02,5,前橋駅,0,0,1
日祝_15時30分_系統267,15:36:00,15:36:00,200017_02,6,前橋駅,0,0,1
日祝_15時30分_系統267,15:37:00,15:37:00,200519_02,7,前橋駅,0,0,1
日祝_15時30分_系統267,15:37:00,15:37:00,200987_02,8,前橋駅,0,0,1
日祝_15時30分_系統267,15:39:00,15:39:00,200985_02,9,前橋駅,0,0,1
日祝_15時30分_系統267,15:40:00,15:40:00,200895_02,10,前橋駅,0,0,1
日祝_15時30分_系統267,15:41:00,15:41:00,200395_02,11,前橋駅,0,0,1
日祝_15時30分_系統267,15:41:00,15:41:00,200153_02,12,前橋駅,0,0,1
日祝_15時30分_系統267,15:42:00,15:42:00,201100_02,13,前橋駅,0,0,1
日祝_15時30分_系統267,15:43:00,15:43:00,200981_02,14,前橋駅,0,0,1
日祝_15時30分_系統267,15:44:00,15:44:00,200872_02,15,前橋駅,0,0,1
日祝_15時30分_系統267,15:45:00,15:45:00,201056_02,16,前橋駅,0,0,1
日祝_15時30分_系統267,15:47:00,15:47:00,200189_02,17,前橋駅,0,0,1
日祝_15時30分_系統267,15:48:00,15:48:00,200722_02,18,前橋駅,0,0,1
日祝_15時30分_系統267,15:49:00,15:49:00,200343_02,19,前橋駅,0,0,1
日祝_15時30分_系統267,15:50:00,15:50:00,200348_02,20,前橋駅,0,0,1
日祝_15時30分_系統267,15:52:00,15:52:00,201071_02,21,前橋駅,0,0,1
日祝_15時30分_系統267,15:54:00,15:54:00,200542_02,22,前橋駅,0,0,1
日祝_15時30分_系統267,15:56:00,15:56:00,200141_02,23,前橋駅,0,0,1
日祝_15時30分_系統267,15:57:00,15:57:00,200142_02,24,前橋駅,0,0,1
日祝_15時30分_系統267,15:59:00,15:59:00,200262_02,25,前橋駅,0,0,1
日祝_15時30分_系統267,16:00:00,16:00:00,201015_02,26,前橋駅,0,0,1
日祝_15時30分_系統267,16:01:00,16:01:00,200379_02,27,前橋駅,0,0,1
日祝_15時30分_系統267,16:02:00,16:02:00,200455_02,28,前橋駅,0,0,1
日祝_15時30分_系統267,16:03:00,16:03:00,200702_02,29,前橋駅,0,0,1
日祝_15時30分_系統267,16:04:00,16:04:00,200703_02,30,前橋駅,0,0,1
日祝_15時30分_系統267,16:06:00,16:06:00,201081_02,31,前橋駅,0,0,1
日祝_15時30分_系統267,16:08:00,16:08:00,200998_02,32,前橋駅,0,0,1
日祝_15時30分_系統267,16:11:00,16:11:00,200718_10,33,前橋駅,1,0,1
日祝_15時40分_系統666,15:40:00,15:40:00,200022_01,1,渋川駅（前橋駅 経由）,0,1,1
日祝_15時40分_系統666,15:43:00,15:43:00,200668_02,2,渋川駅（前橋駅 経由）,0,0,1
日祝_15時40分_系統666,15:44:00,15:44:00,200932_02,3,渋川駅（前橋駅 経由）,0,0,1
日祝_15時40分_系統666,15:45:00,15:45:00,200108_02,4,渋川駅（前橋駅 経由）,0,0,1
日祝_15時40分_系統666,15:50:00,15:50:00,200718_02,5,渋川駅,0,0,1
日祝_15時40分_系統666,15:51:00,15:51:00,200998_01,6,渋川駅,0,0,1
日祝_15時40分_系統666,15:53:00,15:53:00,201081_01,7,渋川駅,0,0,1
日祝_15時40分_系統666,15:55:00,15:55:00,200703_01,8,渋川駅,0,0,1
日祝_15時40分_系統666,15:56:00,15:56:00,200702_01,9,渋川駅,0,0,1
日祝_15時40分_系統666,15:57:00,15:57:00,200455_01,10,渋川駅,0,0,1
日祝_15時40分_系統666,15:58:00,15:58:00,200379_01,11,渋川駅,0,0,1
日祝_15時40分_系統666,15:59:00,15:59:00,201015_01,12,渋川駅,0,0,1
日祝_15時40分_系統666,16:00:00,16:00:00,200262_01,13,渋川駅,0,0,1
日祝_15時40分_系統666,16:01:00,16:01:00,200142_01,14,渋川駅,0,0,1
日祝_15時40分_系統666,16:02:00,16:02:00,200141_01,15,渋川駅,0,0,1
日祝_15時40分_系統666,16:03:00,16:03:00,200542_01,16,渋川駅,0,0,1
日祝_15時40分_系統666,16:05:00,16:05:00,201071_01,17,渋川駅,0,0,1
日祝_15時40分_系統666,16:07:00,16:07:00,200348_01,18,渋川駅,0,0,1
日祝_15時40分_系統666,16:08:00,16:08:00,200343_01,19,渋川駅,0,0,1
日祝_15時40分_系統666,16:09:00,16:09:00,200722_01,20,渋川駅,0,0,1
日祝_15時40分_系統666,16:11:00,16:11:00,200189_01,21,渋川駅,0,0,1
日祝_15時40分_系統666,16:13:00,16:13:00,201056_01,22,渋川駅,0,0,1
日祝_15時40分_系統666,16:14:00,16:14:00,200872_01,23,渋川駅,0,0,1
日祝_15時40分_系統666,16:15:00,16:15:00,200981_01,24,渋川駅,0,0,1
日祝_15時40分_系統666,16:16:00,16:16:00,201100_01,25,渋川駅,0,0,1
日祝_15時40分_系統666,16:17:00,16:17:00,200153_01,26,渋川駅,0,0,1
日祝_15時40分_系統666,16:17:00,16:17:00,200395_01,27,渋川駅,0,0,1
日祝_15時40分_系統666,16:18:00,16:18:00,200895_01,28,渋川駅,0,0,1
日祝_15時40分_系統666,16:19:00,16:19:00,200985_01,29,渋川駅,0,0,1
日祝_15時40分_系統666,16:19:00,16:19:00,200987_01,30,渋川駅,0,0,1
日祝_15時40分_系統666,16:20:00,16:20:00,200519_01,31,渋川駅,0,0,1
日祝_15時40分_系統666,16:21:00,16:21:00,200017_01,32,渋川駅,0,0,1
日祝_15時40分_系統666,16:22:00,16:22:00,200506_01,33,渋川駅,0,0,1
日祝_15時40分_系統666,16:24:00,16:24:00,200827_01,34,渋川駅,0,0,1
日祝_15時40分_系統666,16:26:00,16:26:00,200730_01,35,渋川駅,0,0,1
日祝_15時40分_系統666,16:27:00,16:27:00,200768_01,36,渋川駅,0,0,1
日祝_15時40分_系統666,16:30:00,16:30:00,200463_10,37,渋川駅,1,0,1
日祝_15時47分_系統261,15:47:00,15:47:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
日祝_15時47分_系統261,15:48:00,15:48:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
日祝_15時47分_系統261,15:49:00,15:49:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
日祝_15時47分_系統261,15:50:00,15:50:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
日祝_15時47分_系統261,15:51:00,15:51:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
日祝_15時47分_系統261,15:52:00,15:52:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
日祝_15時47分_系統261,15:53:00,15:53:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
日祝_15時47分_系統261,15:54:00,15:54:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
日祝_15時47分_系統261,15:55:00,15:55:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
日祝_15時47分_系統261,16:00:00,16:00:00,200463_01,10,前橋駅,0,0,1
日祝_15時47分_系統261,16:01:00,16:01:00,200768_02,11,前橋駅,0,0,1
日祝_15時47分_系統261,16:02:00,16:02:00,200730_02,12,前橋駅,0,0,1
日祝_15時47分_系統261,16:04:00,16:04:00,200827_02,13,前橋駅,0,0,1
日祝_15時47分_系統261,16:05:00,16:05:00,200506_02,14,前橋駅,0,0,1
日祝_15時47分_系統261,16:06:00,16:06:00,200017_02,15,前橋駅,0,0,1
日祝_15時47分_系統261,16:07:00,16:07:00,200519_02,16,前橋駅,0,0,1
日祝_15時47分_系統261,16:07:00,16:07:00,200987_02,17,前橋駅,0,0,1
日祝_15時47分_系統261,16:09:00,16:09:00,200985_02,18,前橋駅,0,0,1
日祝_15時47分_系統261,16:10:00,16:10:00,200895_02,19,前橋駅,0,0,1
日祝_15時47分_系統261,16:11:00,16:11:00,200395_02,20,前橋駅,0,0,1
日祝_15時47分_系統261,16:11:00,16:11:00,200153_02,21,前橋駅,0,0,1
日祝_15時47分_系統261,16:12:00,16:12:00,201100_02,22,前橋駅,0,0,1
日祝_15時47分_系統261,16:13:00,16:13:00,200981_02,23,前橋駅,0,0,1
日祝_15時47分_系統261,16:14:00,16:14:00,200872_02,24,前橋駅,0,0,1
日祝_15時47分_系統261,16:15:00,16:15:00,201056_02,25,前橋駅,0,0,1
日祝_15時47分_系統261,16:17:00,16:17:00,200189_02,26,前橋駅,0,0,1
日祝_15時47分_系統261,16:18:00,16:18:00,200722_02,27,前橋駅,0,0,1
日祝_15時47分_系統261,16:19:00,16:19:00,200343_02,28,前橋駅,0,0,1
日祝_15時47分_系統261,16:20:00,16:20:00,200348_02,29,前橋駅,0,0,1
日祝_15時47分_系統261,16:22:00,16:22:00,201071_02,30,前橋駅,0,0,1
日祝_15時47分_系統261,16:24:00,16:24:00,200542_02,31,前橋駅,0,0,1
日祝_15時47分_系統261,16:26:00,16:26:00,200141_02,32,前橋駅,0,0,1
日祝_15時47分_系統261,16:27:00,16:27:00,200142_02,33,前橋駅,0,0,1
日祝_15時47分_系統261,16:29:00,16:29:00,200262_02,34,前橋駅,0,0,1
日祝_15時47分_系統261,16:30:00,16:30:00,201015_02,35,前橋駅,0,0,1
日祝_15時47分_系統261,16:31:00,16:31:00,200379_02,36,前橋駅,0,0,1
日祝_15時47分_系統261,16:32:00,16:32:00,200455_02,37,前橋駅,0,0,1
日祝_15時47分_系統261,16:33:00,16:33:00,200702_02,38,前橋駅,0,0,1
日祝_15時47分_系統261,16:34:00,16:34:00,200703_02,39,前橋駅,0,0,1
日祝_15時47分_系統261,16:36:00,16:36:00,201081_02,40,前橋駅,0,0,1
日祝_15時47分_系統261,16:38:00,16:38:00,200998_02,41,前橋駅,0,0,1
日祝_15時47分_系統261,16:41:00,16:41:00,200718_10,42,前橋駅,1,0,1
日祝_16時00分_系統581,16:00:00,16:00:00,200273_01,1,前橋駅,0,1,1
日祝_16時00分_系統581,16:02:00,16:02:00,200722_02,2,前橋駅,0,0,1
日祝_16時00分_系統581,16:03:00,16:03:00,200343_02,3,前橋駅,0,0,1
日祝_16時00分_系統581,16:04:00,16:04:00,200348_02,4,前橋駅,0,0,1
日祝_16時00分_系統581,16:06:00,16:06:00,201071_02,5,前橋駅,0,0,1
日祝_16時00分_系統581,16:08:00,16:08:00,200542_02,6,前橋駅,0,0,1
日祝_16時00分_系統581,16:10:00,16:10:00,200141_02,7,前橋駅,0,0,1
日祝_16時00分_系統581,16:11:00,16:11:00,200142_02,8,前橋駅,0,0,1
日祝_16時00分_系統581,16:13:00,16:13:00,200262_02,9,前橋駅,0,0,1
日祝_16時00分_系統581,16:14:00,16:14:00,201015_02,10,前橋駅,0,0,1
日祝_16時00分_系統581,16:15:00,16:15:00,200379_02,11,前橋駅,0,0,1
日祝_16時00分_系統581,16:16:00,16:16:00,200455_02,12,前橋駅,0,0,1
日祝_16時00分_系統581,16:17:00,16:17:00,200702_02,13,前橋駅,0,0,1
日祝_16時00分_系統581,16:18:00,16:18:00,200703_02,14,前橋駅,0,0,1
日祝_16時00分_系統581,16:20:00,16:20:00,201081_02,15,前橋駅,0,0,1
日祝_16時00分_系統581,16:22:00,16:22:00,200998_02,16,前橋駅,0,0,1
日祝_16時00分_系統581,16:25:00,16:25:00,200718_10,17,前橋駅,1,0,1
日祝_16時05分_系統268,16:05:00,16:05:00,200718_02,1,渋川駅,0,1,1
日祝_16時05分_系統268,16:06:00,16:06:00,200998_01,2,渋川駅,0,0,1
日祝_16時05分_系統268,16:08:00,16:08:00,201081_01,3,渋川駅,0,0,1
日祝_16時05分_系統268,16:10:00,16:10:00,200703_01,4,渋川駅,0,0,1
日祝_16時05分_系統268,16:11:00,16:11:00,200702_01,5,渋川駅,0,0,1
日祝_16時05分_系統268,16:12:00,16:12:00,200455_01,6,渋川駅,0,0,1
日祝_16時05分_系統268,16:13:00,16:13:00,200379_01,7,渋川駅,0,0,1
日祝_16時05分_系統268,16:14:00,16:14:00,201015_01,8,渋川駅,0,0,1
日祝_16時05分_系統268,16:15:00,16:15:00,200262_01,9,渋川駅,0,0,1
日祝_16時05分_系統268,16:16:00,16:16:00,200142_01,10,渋川駅,0,0,1
日祝_16時05分_系統268,16:17:00,16:17:00,200141_01,11,渋川駅,0,0,1
日祝_16時05分_系統268,16:18:00,16:18:00,200542_01,12,渋川駅,0,0,1
日祝_16時05分_系統268,16:20:00,16:20:00,201071_01,13,渋川駅,0,0,1
日祝_16時05分_系統268,16:22:00,16:22:00,200348_01,14,渋川駅,0,0,1
日祝_16時05分_系統268,16:23:00,16:23:00,200343_01,15,渋川駅,0,0,1
日祝_16時05分_系統268,16:24:00,16:24:00,200722_01,16,渋川駅,0,0,1
日祝_16時05分_系統268,16:26:00,16:26:00,200189_01,17,渋川駅,0,0,1
日祝_16時05分_系統268,16:28:00,16:28:00,201056_01,18,渋川駅,0,0,1
日祝_16時05分_系統268,16:29:00,16:29:00,200872_01,19,渋川駅,0,0,1
日祝_16時05分_系統268,16:30:00,16:30:00,200981_01,20,渋川駅,0,0,1
日祝_16時05分_系統268,16:31:00,16:31:00,201100_01,21,渋川駅,0,0,1
日祝_16時05分_系統268,16:32:00,16:32:00,200153_01,22,渋川駅,0,0,1
日祝_16時05分_系統268,16:32:00,16:32:00,200395_01,23,渋川駅,0,0,1
日祝_16時05分_系統268,16:33:00,16:33:00,200895_01,24,渋川駅,0,0,1
日祝_16時05分_系統268,16:34:00,16:34:00,200985_01,25,渋川駅,0,0,1
日祝_16時05分_系統268,16:34:00,16:34:00,200987_01,26,渋川駅,0,0,1
日祝_16時05分_系統268,16:35:00,16:35:00,200519_01,27,渋川駅,0,0,1
日祝_16時05分_系統268,16:36:00,16:36:00,200017_01,28,渋川駅,0,0,1
日祝_16時05分_系統268,16:37:00,16:37:00,200506_01,29,渋川駅,0,0,1
日祝_16時05分_系統268,16:39:00,16:39:00,200827_01,30,渋川駅,0,0,1
日祝_16時05分_系統268,16:41:00,16:41:00,200730_01,31,渋川駅,0,0,1
日祝_16時05分_系統268,16:42:00,16:42:00,200768_01,32,渋川駅,0,0,1
日祝_16時05分_系統268,16:45:00,16:45:00,200463_10,33,渋川駅,1,0,1
日祝_16時18分_系統642,16:18:00,16:18:00,200718_02,1,道の駅まえばし赤城（南橘団地 経由）,0,1,1
日祝_16時18分_系統642,16:19:00,16:19:00,200998_01,2,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:21:00,16:21:00,201081_01,3,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:23:00,16:23:00,200703_01,4,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:24:00,16:24:00,200702_01,5,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:26:00,16:26:00,200455_01,6,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:27:00,16:27:00,200379_01,7,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:28:00,16:28:00,201015_01,8,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:29:00,16:29:00,200262_01,9,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:30:00,16:30:00,200142_01,10,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:31:00,16:31:00,200141_01,11,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:32:00,16:32:00,200542_01,12,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:34:00,16:34:00,201071_01,13,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:35:00,16:35:00,200928_01,14,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:36:00,16:36:00,200800_01,15,道の駅まえばし赤城（南橘団地 経由）,0,0,1
日祝_16時18分_系統642,16:38:00,16:38:00,200927_01,16,道の駅まえばし赤城,0,0,1
日祝_16時18分_系統642,16:39:00,16:39:00,201185_01,17,道の駅まえばし赤城,0,0,1
日祝_16時18分_系統642,16:43:00,16:43:00,200348_01,18,道の駅まえばし赤城,0,0,1
日祝_16時18分_系統642,16:44:00,16:44:00,200343_01,19,道の駅まえばし赤城,0,0,1
日祝_16時18分_系統642,16:45:00,16:45:00,200722_01,20,道の駅まえばし赤城,0,0,1
日祝_16時18分_系統642,16:47:00,16:47:00,200189_01,21,道の駅まえばし赤城,0,0,1
日祝_16時18分_系統642,16:54:00,16:54:00,201440_01,22,道の駅まえばし赤城,1,0,1
日祝_16時25分_系統267,16:25:00,16:25:00,200463_01,1,前橋駅,0,1,1
日祝_16時25分_系統267,16:26:00,16:26:00,200768_02,2,前橋駅,0,0,1
日祝_16時25分_系統267,16:27:00,16:27:00,200730_02,3,前橋駅,0,0,1
日祝_16時25分_系統267,16:29:00,16:29:00,200827_02,4,前橋駅,0,0,1
日祝_16時25分_系統267,16:30:00,16:30:00,200506_02,5,前橋駅,0,0,1
日祝_16時25分_系統267,16:31:00,16:31:00,200017_02,6,前橋駅,0,0,1
日祝_16時25分_系統267,16:32:00,16:32:00,200519_02,7,前橋駅,0,0,1
日祝_16時25分_系統267,16:32:00,16:32:00,200987_02,8,前橋駅,0,0,1
日祝_16時25分_系統267,16:34:00,16:34:00,200985_02,9,前橋駅,0,0,1
日祝_16時25分_系統267,16:35:00,16:35:00,200895_02,10,前橋駅,0,0,1
日祝_16時25分_系統267,16:36:00,16:36:00,200395_02,11,前橋駅,0,0,1
日祝_16時25分_系統267,16:36:00,16:36:00,200153_02,12,前橋駅,0,0,1
日祝_16時25分_系統267,16:37:00,16:37:00,201100_02,13,前橋駅,0,0,1
日祝_16時25分_系統267,16:38:00,16:38:00,200981_02,14,前橋駅,0,0,1
日祝_16時25分_系統267,16:39:00,16:39:00,200872_02,15,前橋駅,0,0,1
日祝_16時25分_系統267,16:40:00,16:40:00,201056_02,16,前橋駅,0,0,1
日祝_16時25分_系統267,16:42:00,16:42:00,200189_02,17,前橋駅,0,0,1
日祝_16時25分_系統267,16:43:00,16:43:00,200722_02,18,前橋駅,0,0,1
日祝_16時25分_系統267,16:44:00,16:44:00,200343_02,19,前橋駅,0,0,1
日祝_16時25分_系統267,16:45:00,16:45:00,200348_02,20,前橋駅,0,0,1
日祝_16時25分_系統267,16:47:00,16:47:00,201071_02,21,前橋駅,0,0,1
日祝_16時25分_系統267,16:49:00,16:49:00,200542_02,22,前橋駅,0,0,1
日祝_16時25分_系統267,16:51:00,16:51:00,200141_02,23,前橋駅,0,0,1
日祝_16時25分_系統267,16:52:00,16:52:00,200142_02,24,前橋駅,0,0,1
日祝_16時25分_系統267,16:54:00,16:54:00,200262_02,25,前橋駅,0,0,1
日祝_16時25分_系統267,16:55:00,16:55:00,201015_02,26,前橋駅,0,0,1
日祝_16時25分_系統267,16:56:00,16:56:00,200379_02,27,前橋駅,0,0,1
日祝_16時25分_系統267,16:57:00,16:57:00,200455_02,28,前橋駅,0,0,1
日祝_16時25分_系統267,16:58:00,16:58:00,200702_02,29,前橋駅,0,0,1
日祝_16時25分_系統267,16:59:00,16:59:00,200703_02,30,前橋駅,0,0,1
日祝_16時25分_系統267,17:01:00,17:01:00,201081_02,31,前橋駅,0,0,1
日祝_16時25分_系統267,17:03:00,17:03:00,200998_02,32,前橋駅,0,0,1
日祝_16時25分_系統267,17:06:00,17:06:00,200718_10,33,前橋駅,1,0,1
日祝_16時30分_系統266,16:30:00,16:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
日祝_16時30分_系統266,16:31:00,16:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:33:00,16:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:35:00,16:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:36:00,16:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:37:00,16:37:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:38:00,16:38:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:39:00,16:39:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:40:00,16:40:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:41:00,16:41:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:42:00,16:42:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:43:00,16:43:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:45:00,16:45:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:47:00,16:47:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:48:00,16:48:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:49:00,16:49:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_16時30分_系統266,16:51:00,16:51:00,200273_01,17,渋川駅,0,0,1
日祝_16時30分_系統266,16:54:00,16:54:00,200189_01,18,渋川駅,0,0,1
日祝_16時30分_系統266,16:56:00,16:56:00,201056_01,19,渋川駅,0,0,1
日祝_16時30分_系統266,16:57:00,16:57:00,200872_01,20,渋川駅,0,0,1
日祝_16時30分_系統266,16:58:00,16:58:00,200981_01,21,渋川駅,0,0,1
日祝_16時30分_系統266,16:59:00,16:59:00,201100_01,22,渋川駅,0,0,1
日祝_16時30分_系統266,17:00:00,17:00:00,200153_01,23,渋川駅,0,0,1
日祝_16時30分_系統266,17:00:00,17:00:00,200395_01,24,渋川駅,0,0,1
日祝_16時30分_系統266,17:01:00,17:01:00,200895_01,25,渋川駅,0,0,1
日祝_16時30分_系統266,17:02:00,17:02:00,200985_01,26,渋川駅,0,0,1
日祝_16時30分_系統266,17:02:00,17:02:00,200987_01,27,渋川駅,0,0,1
日祝_16時30分_系統266,17:03:00,17:03:00,200519_01,28,渋川駅,0,0,1
日祝_16時30分_系統266,17:04:00,17:04:00,200017_01,29,渋川駅,0,0,1
日祝_16時30分_系統266,17:05:00,17:05:00,200506_01,30,渋川駅,0,0,1
日祝_16時30分_系統266,17:07:00,17:07:00,200827_01,31,渋川駅,0,0,1
日祝_16時30分_系統266,17:09:00,17:09:00,200730_01,32,渋川駅,0,0,1
日祝_16時30分_系統266,17:10:00,17:10:00,200768_01,33,渋川駅,0,0,1
日祝_16時30分_系統266,17:13:00,17:13:00,200463_10,34,渋川駅,1,0,1
日祝_16時57分_系統262,16:57:00,16:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
日祝_16時57分_系統262,16:58:00,16:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:00:00,17:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:02:00,17:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:03:00,17:03:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:05:00,17:05:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:06:00,17:06:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:07:00,17:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:08:00,17:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:09:00,17:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:10:00,17:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:11:00,17:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:13:00,17:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:15:00,17:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:16:00,17:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:17:00,17:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:19:00,17:19:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:21:00,17:21:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:22:00,17:22:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:23:00,17:23:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:24:00,17:24:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:25:00,17:25:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:25:00,17:25:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:26:00,17:26:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:27:00,17:27:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:27:00,17:27:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:28:00,17:28:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:29:00,17:29:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:30:00,17:30:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:32:00,17:32:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:34:00,17:34:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:35:00,17:35:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
日祝_16時57分_系統262,17:36:00,17:36:00,200463_06,33,渋川市内循環,0,0,1
日祝_16時57分_系統262,17:37:00,17:37:00,200468_01,34,渋川市内循環,0,0,1
日祝_16時57分_系統262,17:39:00,17:39:00,200466_01,35,渋川市内循環,0,0,1
日祝_16時57分_系統262,17:40:00,17:40:00,200704_01,36,渋川市内循環,0,0,1
日祝_16時57分_系統262,17:41:00,17:41:00,200476_02,37,渋川市内循環,0,0,1
日祝_16時57分_系統262,17:42:00,17:42:00,200477_02,38,渋川市内循環,0,0,1
日祝_16時57分_系統262,17:43:00,17:43:00,200430_02,39,渋川市内循環,0,0,1
日祝_16時57分_系統262,17:44:00,17:44:00,200007_02,40,渋川市内循環,0,0,1
日祝_16時57分_系統262,17:49:00,17:49:00,210463_10,41,渋川市内循環,1,0,1
日祝_17時00分_系統265,17:00:00,17:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
日祝_17時00分_系統265,17:01:00,17:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:02:00,17:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:04:00,17:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:05:00,17:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:06:00,17:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:07:00,17:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:07:00,17:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:09:00,17:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:10:00,17:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:11:00,17:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:11:00,17:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:12:00,17:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:13:00,17:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:14:00,17:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:15:00,17:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:17:00,17:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
日祝_17時00分_系統265,17:20:00,17:20:00,200273_01,18,前橋駅,0,0,1
日祝_17時00分_系統265,17:22:00,17:22:00,200722_02,19,前橋駅,0,0,1
日祝_17時00分_系統265,17:23:00,17:23:00,200343_02,20,前橋駅,0,0,1
日祝_17時00分_系統265,17:24:00,17:24:00,200348_02,21,前橋駅,0,0,1
日祝_17時00分_系統265,17:26:00,17:26:00,201071_02,22,前橋駅,0,0,1
日祝_17時00分_系統265,17:28:00,17:28:00,200542_02,23,前橋駅,0,0,1
日祝_17時00分_系統265,17:30:00,17:30:00,200141_02,24,前橋駅,0,0,1
日祝_17時00分_系統265,17:31:00,17:31:00,200142_02,25,前橋駅,0,0,1
日祝_17時00分_系統265,17:33:00,17:33:00,200262_02,26,前橋駅,0,0,1
日祝_17時00分_系統265,17:34:00,17:34:00,201015_02,27,前橋駅,0,0,1
日祝_17時00分_系統265,17:35:00,17:35:00,200379_02,28,前橋駅,0,0,1
日祝_17時00分_系統265,17:36:00,17:36:00,200455_02,29,前橋駅,0,0,1
日祝_17時00分_系統265,17:37:00,17:37:00,200702_02,30,前橋駅,0,0,1
日祝_17時00分_系統265,17:38:00,17:38:00,200703_02,31,前橋駅,0,0,1
日祝_17時00分_系統265,17:40:00,17:40:00,201081_02,32,前橋駅,0,0,1
日祝_17時00分_系統265,17:42:00,17:42:00,200998_02,33,前橋駅,0,0,1
日祝_17時00分_系統265,17:45:00,17:45:00,200718_10,34,前橋駅,1,0,1
日祝_17時02分_系統641,17:02:00,17:02:00,201440_01,1,前橋駅,0,1,1
日祝_17時02分_系統641,17:07:00,17:07:00,200189_02,2,前橋駅,0,0,1
日祝_17時02分_系統641,17:09:00,17:09:00,200722_02,3,前橋駅,0,0,1
日祝_17時02分_系統641,17:10:00,17:10:00,200343_02,4,前橋駅,0,0,1
日祝_17時02分_系統641,17:11:00,17:11:00,200348_02,5,前橋駅,0,0,1
日祝_17時02分_系統641,17:13:00,17:13:00,201071_02,6,前橋駅,0,0,1
日祝_17時02分_系統641,17:14:00,17:14:00,200542_02,7,前橋駅,0,0,1
日祝_17時02分_系統641,17:16:00,17:16:00,200141_02,8,前橋駅,0,0,1
日祝_17時02分_系統641,17:17:00,17:17:00,200142_02,9,前橋駅,0,0,1
日祝_17時02分_系統641,17:19:00,17:19:00,200262_02,10,前橋駅,0,0,1
日祝_17時02分_系統641,17:20:00,17:20:00,201015_02,11,前橋駅,0,0,1
日祝_17時02分_系統641,17:22:00,17:22:00,200379_02,12,前橋駅,0,0,1
日祝_17時02分_系統641,17:23:00,17:23:00,200455_02,13,前橋駅,0,0,1
日祝_17時02分_系統641,17:25:00,17:25:00,200702_02,14,前橋駅,0,0,1
日祝_17時02分_系統641,17:27:00,17:27:00,200703_02,15,前橋駅,0,0,1
日祝_17時02分_系統641,17:29:00,17:29:00,201081_02,16,前橋駅,0,0,1
日祝_17時02分_系統641,17:31:00,17:31:00,200998_02,17,前橋駅,0,0,1
日祝_17時02分_系統641,17:34:00,17:34:00,200718_10,18,前橋駅,1,0,1
日祝_17時10分_系統668,17:10:00,17:10:00,200022_01,1,南橘団地（前橋駅 経由）,0,1,1
日祝_17時10分_系統668,17:13:00,17:13:00,200668_02,2,南橘団地（前橋駅 経由）,0,0,1
日祝_17時10分_系統668,17:14:00,17:14:00,200932_02,3,南橘団地（前橋駅 経由）,0,0,1
日祝_17時10分_系統668,17:15:00,17:15:00,200108_02,4,南橘団地（前橋駅 経由）,0,0,1
日祝_17時10分_系統668,17:20:00,17:20:00,200718_02,5,南橘団地,0,0,1
日祝_17時10分_系統668,17:21:00,17:21:00,200998_01,6,南橘団地,0,0,1
日祝_17時10分_系統668,17:23:00,17:23:00,201081_01,7,南橘団地,0,0,1
日祝_17時10分_系統668,17:25:00,17:25:00,200703_01,8,南橘団地,0,0,1
日祝_17時10分_系統668,17:26:00,17:26:00,200702_01,9,南橘団地,0,0,1
日祝_17時10分_系統668,17:28:00,17:28:00,200455_01,10,南橘団地,0,0,1
日祝_17時10分_系統668,17:29:00,17:29:00,200379_01,11,南橘団地,0,0,1
日祝_17時10分_系統668,17:30:00,17:30:00,201015_01,12,南橘団地,0,0,1
日祝_17時10分_系統668,17:31:00,17:31:00,200262_01,13,南橘団地,0,0,1
日祝_17時10分_系統668,17:32:00,17:32:00,200142_01,14,南橘団地,0,0,1
日祝_17時10分_系統668,17:33:00,17:33:00,200141_01,15,南橘団地,0,0,1
日祝_17時10分_系統668,17:34:00,17:34:00,200542_01,16,南橘団地,0,0,1
日祝_17時10分_系統668,17:36:00,17:36:00,201071_01,17,南橘団地,0,0,1
日祝_17時10分_系統668,17:37:00,17:37:00,200928_01,18,南橘団地,0,0,1
日祝_17時10分_系統668,17:38:00,17:38:00,200800_01,19,南橘団地,0,0,1
日祝_17時10分_系統668,17:41:00,17:41:00,200927_01,20,南橘団地,1,0,1
日祝_17時32分_系統261,17:32:00,17:32:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
日祝_17時32分_系統261,17:33:00,17:33:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
日祝_17時32分_系統261,17:34:00,17:34:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
日祝_17時32分_系統261,17:35:00,17:35:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
日祝_17時32分_系統261,17:36:00,17:36:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
日祝_17時32分_系統261,17:37:00,17:37:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
日祝_17時32分_系統261,17:38:00,17:38:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
日祝_17時32分_系統261,17:39:00,17:39:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
日祝_17時32分_系統261,17:40:00,17:40:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
日祝_17時32分_系統261,17:45:00,17:45:00,200463_01,10,前橋駅,0,0,1
日祝_17時32分_系統261,17:46:00,17:46:00,200768_02,11,前橋駅,0,0,1
日祝_17時32分_系統261,17:47:00,17:47:00,200730_02,12,前橋駅,0,0,1
日祝_17時32分_系統261,17:49:00,17:49:00,200827_02,13,前橋駅,0,0,1
日祝_17時32分_系統261,17:50:00,17:50:00,200506_02,14,前橋駅,0,0,1
日祝_17時32分_系統261,17:51:00,17:51:00,200017_02,15,前橋駅,0,0,1
日祝_17時32分_系統261,17:52:00,17:52:00,200519_02,16,前橋駅,0,0,1
日祝_17時32分_系統261,17:52:00,17:52:00,200987_02,17,前橋駅,0,0,1
日祝_17時32分_系統261,17:54:00,17:54:00,200985_02,18,前橋駅,0,0,1
日祝_17時32分_系統261,17:55:00,17:55:00,200895_02,19,前橋駅,0,0,1
日祝_17時32分_系統261,17:56:00,17:56:00,200395_02,20,前橋駅,0,0,1
日祝_17時32分_系統261,17:56:00,17:56:00,200153_02,21,前橋駅,0,0,1
日祝_17時32分_系統261,17:57:00,17:57:00,201100_02,22,前橋駅,0,0,1
日祝_17時32分_系統261,17:58:00,17:58:00,200981_02,23,前橋駅,0,0,1
日祝_17時32分_系統261,17:59:00,17:59:00,200872_02,24,前橋駅,0,0,1
日祝_17時32分_系統261,18:00:00,18:00:00,201056_02,25,前橋駅,0,0,1
日祝_17時32分_系統261,18:02:00,18:02:00,200189_02,26,前橋駅,0,0,1
日祝_17時32分_系統261,18:03:00,18:03:00,200722_02,27,前橋駅,0,0,1
日祝_17時32分_系統261,18:04:00,18:04:00,200343_02,28,前橋駅,0,0,1
日祝_17時32分_系統261,18:05:00,18:05:00,200348_02,29,前橋駅,0,0,1
日祝_17時32分_系統261,18:07:00,18:07:00,201071_02,30,前橋駅,0,0,1
日祝_17時32分_系統261,18:09:00,18:09:00,200542_02,31,前橋駅,0,0,1
日祝_17時32分_系統261,18:11:00,18:11:00,200141_02,32,前橋駅,0,0,1
日祝_17時32分_系統261,18:12:00,18:12:00,200142_02,33,前橋駅,0,0,1
日祝_17時32分_系統261,18:14:00,18:14:00,200262_02,34,前橋駅,0,0,1
日祝_17時32分_系統261,18:15:00,18:15:00,201015_02,35,前橋駅,0,0,1
日祝_17時32分_系統261,18:16:00,18:16:00,200379_02,36,前橋駅,0,0,1
日祝_17時32分_系統261,18:17:00,18:17:00,200455_02,37,前橋駅,0,0,1
日祝_17時32分_系統261,18:18:00,18:18:00,200702_02,38,前橋駅,0,0,1
日祝_17時32分_系統261,18:19:00,18:19:00,200703_02,39,前橋駅,0,0,1
日祝_17時32分_系統261,18:21:00,18:21:00,201081_02,40,前橋駅,0,0,1
日祝_17時32分_系統261,18:23:00,18:23:00,200998_02,41,前橋駅,0,0,1
日祝_17時32分_系統261,18:26:00,18:26:00,200718_10,42,前橋駅,1,0,1
日祝_17時41分_系統266,17:41:00,17:41:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
日祝_17時41分_系統266,17:42:00,17:42:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:44:00,17:44:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:46:00,17:46:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:47:00,17:47:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:48:00,17:48:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:49:00,17:49:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:50:00,17:50:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:51:00,17:51:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:52:00,17:52:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:53:00,17:53:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:54:00,17:54:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:56:00,17:56:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:58:00,17:58:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,17:59:00,17:59:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,18:00:00,18:00:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
日祝_17時41分_系統266,18:02:00,18:02:00,200273_01,17,渋川駅,0,0,1
日祝_17時41分_系統266,18:05:00,18:05:00,200189_01,18,渋川駅,0,0,1
日祝_17時41分_系統266,18:07:00,18:07:00,201056_01,19,渋川駅,0,0,1
日祝_17時41分_系統266,18:08:00,18:08:00,200872_01,20,渋川駅,0,0,1
日祝_17時41分_系統266,18:09:00,18:09:00,200981_01,21,渋川駅,0,0,1
日祝_17時41分_系統266,18:10:00,18:10:00,201100_01,22,渋川駅,0,0,1
日祝_17時41分_系統266,18:11:00,18:11:00,200153_01,23,渋川駅,0,0,1
日祝_17時41分_系統266,18:11:00,18:11:00,200395_01,24,渋川駅,0,0,1
日祝_17時41分_系統266,18:12:00,18:12:00,200895_01,25,渋川駅,0,0,1
日祝_17時41分_系統266,18:13:00,18:13:00,200985_01,26,渋川駅,0,0,1
日祝_17時41分_系統266,18:13:00,18:13:00,200987_01,27,渋川駅,0,0,1
日祝_17時41分_系統266,18:14:00,18:14:00,200519_01,28,渋川駅,0,0,1
日祝_17時41分_系統266,18:15:00,18:15:00,200017_01,29,渋川駅,0,0,1
日祝_17時41分_系統266,18:16:00,18:16:00,200506_01,30,渋川駅,0,0,1
日祝_17時41分_系統266,18:18:00,18:18:00,200827_01,31,渋川駅,0,0,1
日祝_17時41分_系統266,18:20:00,18:20:00,200730_01,32,渋川駅,0,0,1
日祝_17時41分_系統266,18:21:00,18:21:00,200768_01,33,渋川駅,0,0,1
日祝_17時41分_系統266,18:24:00,18:24:00,200463_10,34,渋川駅,1,0,1
日祝_17時50分_系統528,17:50:00,17:50:00,200927_01,1,前橋駅,0,1,1
日祝_17時50分_系統528,17:50:00,17:50:00,200800_02,2,前橋駅,0,0,1
日祝_17時50分_系統528,17:51:00,17:51:00,200928_02,3,前橋駅,0,0,1
日祝_17時50分_系統528,17:52:00,17:52:00,201071_02,4,前橋駅,0,0,1
日祝_17時50分_系統528,17:53:00,17:53:00,200542_02,5,前橋駅,0,0,1
日祝_17時50分_系統528,17:55:00,17:55:00,200141_02,6,前橋駅,0,0,1
日祝_17時50分_系統528,17:56:00,17:56:00,200142_02,7,前橋駅,0,0,1
日祝_17時50分_系統528,17:57:00,17:57:00,200262_02,8,前橋駅,0,0,1
日祝_17時50分_系統528,17:58:00,17:58:00,201015_02,9,前橋駅,0,0,1
日祝_17時50分_系統528,17:59:00,17:59:00,200379_02,10,前橋駅,0,0,1
日祝_17時50分_系統528,18:00:00,18:00:00,200455_02,11,前橋駅,0,0,1
日祝_17時50分_系統528,18:02:00,18:02:00,200702_02,12,前橋駅,0,0,1
日祝_17時50分_系統528,18:04:00,18:04:00,200703_02,13,前橋駅,0,0,1
日祝_17時50分_系統528,18:06:00,18:06:00,201081_02,14,前橋駅,0,0,1
日祝_17時50分_系統528,18:08:00,18:08:00,200998_02,15,前橋駅,0,0,1
日祝_17時50分_系統528,18:11:00,18:11:00,200718_10,16,前橋駅,1,0,1
日祝_17時57分_系統268,17:57:00,17:57:00,200718_02,1,渋川駅,0,1,1
日祝_17時57分_系統268,17:58:00,17:58:00,200998_01,2,渋川駅,0,0,1
日祝_17時57分_系統268,18:00:00,18:00:00,201081_01,3,渋川駅,0,0,1
日祝_17時57分_系統268,18:02:00,18:02:00,200703_01,4,渋川駅,0,0,1
日祝_17時57分_系統268,18:03:00,18:03:00,200702_01,5,渋川駅,0,0,1
日祝_17時57分_系統268,18:04:00,18:04:00,200455_01,6,渋川駅,0,0,1
日祝_17時57分_系統268,18:05:00,18:05:00,200379_01,7,渋川駅,0,0,1
日祝_17時57分_系統268,18:06:00,18:06:00,201015_01,8,渋川駅,0,0,1
日祝_17時57分_系統268,18:07:00,18:07:00,200262_01,9,渋川駅,0,0,1
日祝_17時57分_系統268,18:08:00,18:08:00,200142_01,10,渋川駅,0,0,1
日祝_17時57分_系統268,18:09:00,18:09:00,200141_01,11,渋川駅,0,0,1
日祝_17時57分_系統268,18:10:00,18:10:00,200542_01,12,渋川駅,0,0,1
日祝_17時57分_系統268,18:12:00,18:12:00,201071_01,13,渋川駅,0,0,1
日祝_17時57分_系統268,18:14:00,18:14:00,200348_01,14,渋川駅,0,0,1
日祝_17時57分_系統268,18:15:00,18:15:00,200343_01,15,渋川駅,0,0,1
日祝_17時57分_系統268,18:16:00,18:16:00,200722_01,16,渋川駅,0,0,1
日祝_17時57分_系統268,18:18:00,18:18:00,200189_01,17,渋川駅,0,0,1
日祝_17時57分_系統268,18:20:00,18:20:00,201056_01,18,渋川駅,0,0,1
日祝_17時57分_系統268,18:21:00,18:21:00,200872_01,19,渋川駅,0,0,1
日祝_17時57分_系統268,18:22:00,18:22:00,200981_01,20,渋川駅,0,0,1
日祝_17時57分_系統268,18:23:00,18:23:00,201100_01,21,渋川駅,0,0,1
日祝_17時57分_系統268,18:24:00,18:24:00,200153_01,22,渋川駅,0,0,1
日祝_17時57分_系統268,18:24:00,18:24:00,200395_01,23,渋川駅,0,0,1
日祝_17時57分_系統268,18:25:00,18:25:00,200895_01,24,渋川駅,0,0,1
日祝_17時57分_系統268,18:26:00,18:26:00,200985_01,25,渋川駅,0,0,1
日祝_17時57分_系統268,18:26:00,18:26:00,200987_01,26,渋川駅,0,0,1
日祝_17時57分_系統268,18:27:00,18:27:00,200519_01,27,渋川駅,0,0,1
日祝_17時57分_系統268,18:28:00,18:28:00,200017_01,28,渋川駅,0,0,1
日祝_17時57分_系統268,18:29:00,18:29:00,200506_01,29,渋川駅,0,0,1
日祝_17時57分_系統268,18:31:00,18:31:00,200827_01,30,渋川駅,0,0,1
日祝_17時57分_系統268,18:33:00,18:33:00,200730_01,31,渋川駅,0,0,1
日祝_17時57分_系統268,18:34:00,18:34:00,200768_01,32,渋川駅,0,0,1
日祝_17時57分_系統268,18:37:00,18:37:00,200463_10,33,渋川駅,1,0,1
日祝_18時10分_系統267,18:10:00,18:10:00,200463_01,1,前橋駅,0,1,1
日祝_18時10分_系統267,18:11:00,18:11:00,200768_02,2,前橋駅,0,0,1
日祝_18時10分_系統267,18:12:00,18:12:00,200730_02,3,前橋駅,0,0,1
日祝_18時10分_系統267,18:14:00,18:14:00,200827_02,4,前橋駅,0,0,1
日祝_18時10分_系統267,18:15:00,18:15:00,200506_02,5,前橋駅,0,0,1
日祝_18時10分_系統267,18:16:00,18:16:00,200017_02,6,前橋駅,0,0,1
日祝_18時10分_系統267,18:17:00,18:17:00,200519_02,7,前橋駅,0,0,1
日祝_18時10分_系統267,18:17:00,18:17:00,200987_02,8,前橋駅,0,0,1
日祝_18時10分_系統267,18:19:00,18:19:00,200985_02,9,前橋駅,0,0,1
日祝_18時10分_系統267,18:20:00,18:20:00,200895_02,10,前橋駅,0,0,1
日祝_18時10分_系統267,18:21:00,18:21:00,200395_02,11,前橋駅,0,0,1
日祝_18時10分_系統267,18:21:00,18:21:00,200153_02,12,前橋駅,0,0,1
日祝_18時10分_系統267,18:22:00,18:22:00,201100_02,13,前橋駅,0,0,1
日祝_18時10分_系統267,18:23:00,18:23:00,200981_02,14,前橋駅,0,0,1
日祝_18時10分_系統267,18:24:00,18:24:00,200872_02,15,前橋駅,0,0,1
日祝_18時10分_系統267,18:25:00,18:25:00,201056_02,16,前橋駅,0,0,1
日祝_18時10分_系統267,18:27:00,18:27:00,200189_02,17,前橋駅,0,0,1
日祝_18時10分_系統267,18:28:00,18:28:00,200722_02,18,前橋駅,0,0,1
日祝_18時10分_系統267,18:29:00,18:29:00,200343_02,19,前橋駅,0,0,1
日祝_18時10分_系統267,18:30:00,18:30:00,200348_02,20,前橋駅,0,0,1
日祝_18時10分_系統267,18:32:00,18:32:00,201071_02,21,前橋駅,0,0,1
日祝_18時10分_系統267,18:34:00,18:34:00,200542_02,22,前橋駅,0,0,1
日祝_18時10分_系統267,18:36:00,18:36:00,200141_02,23,前橋駅,0,0,1
日祝_18時10分_系統267,18:37:00,18:37:00,200142_02,24,前橋駅,0,0,1
日祝_18時10分_系統267,18:39:00,18:39:00,200262_02,25,前橋駅,0,0,1
日祝_18時10分_系統267,18:40:00,18:40:00,201015_02,26,前橋駅,0,0,1
日祝_18時10分_系統267,18:41:00,18:41:00,200379_02,27,前橋駅,0,0,1
日祝_18時10分_系統267,18:42:00,18:42:00,200455_02,28,前橋駅,0,0,1
日祝_18時10分_系統267,18:43:00,18:43:00,200702_02,29,前橋駅,0,0,1
日祝_18時10分_系統267,18:44:00,18:44:00,200703_02,30,前橋駅,0,0,1
日祝_18時10分_系統267,18:46:00,18:46:00,201081_02,31,前橋駅,0,0,1
日祝_18時10分_系統267,18:48:00,18:48:00,200998_02,32,前橋駅,0,0,1
日祝_18時10分_系統267,18:51:00,18:51:00,200718_10,33,前橋駅,1,0,1
日祝_18時10分_系統668,18:10:00,18:10:00,200022_01,1,南橘団地（前橋駅 経由）,0,1,1
日祝_18時10分_系統668,18:13:00,18:13:00,200668_02,2,南橘団地（前橋駅 経由）,0,0,1
日祝_18時10分_系統668,18:14:00,18:14:00,200932_02,3,南橘団地（前橋駅 経由）,0,0,1
日祝_18時10分_系統668,18:15:00,18:15:00,200108_02,4,南橘団地（前橋駅 経由）,0,0,1
日祝_18時10分_系統668,18:20:00,18:20:00,200718_02,5,南橘団地,0,0,1
日祝_18時10分_系統668,18:21:00,18:21:00,200998_01,6,南橘団地,0,0,1
日祝_18時10分_系統668,18:23:00,18:23:00,201081_01,7,南橘団地,0,0,1
日祝_18時10分_系統668,18:25:00,18:25:00,200703_01,8,南橘団地,0,0,1
日祝_18時10分_系統668,18:26:00,18:26:00,200702_01,9,南橘団地,0,0,1
日祝_18時10分_系統668,18:28:00,18:28:00,200455_01,10,南橘団地,0,0,1
日祝_18時10分_系統668,18:29:00,18:29:00,200379_01,11,南橘団地,0,0,1
日祝_18時10分_系統668,18:30:00,18:30:00,201015_01,12,南橘団地,0,0,1
日祝_18時10分_系統668,18:31:00,18:31:00,200262_01,13,南橘団地,0,0,1
日祝_18時10分_系統668,18:32:00,18:32:00,200142_01,14,南橘団地,0,0,1
日祝_18時10分_系統668,18:33:00,18:33:00,200141_01,15,南橘団地,0,0,1
日祝_18時10分_系統668,18:34:00,18:34:00,200542_01,16,南橘団地,0,0,1
日祝_18時10分_系統668,18:36:00,18:36:00,201071_01,17,南橘団地,0,0,1
日祝_18時10分_系統668,18:37:00,18:37:00,200928_01,18,南橘団地,0,0,1
日祝_18時10分_系統668,18:38:00,18:38:00,200800_01,19,南橘団地,0,0,1
日祝_18時10分_系統668,18:41:00,18:41:00,200927_01,20,南橘団地,1,0,1
日祝_18時37分_系統268,18:37:00,18:37:00,200718_02,1,渋川駅,0,1,1
日祝_18時37分_系統268,18:38:00,18:38:00,200998_01,2,渋川駅,0,0,1
日祝_18時37分_系統268,18:40:00,18:40:00,201081_01,3,渋川駅,0,0,1
日祝_18時37分_系統268,18:42:00,18:42:00,200703_01,4,渋川駅,0,0,1
日祝_18時37分_系統268,18:43:00,18:43:00,200702_01,5,渋川駅,0,0,1
日祝_18時37分_系統268,18:45:00,18:45:00,200455_01,6,渋川駅,0,0,1
日祝_18時37分_系統268,18:46:00,18:46:00,200379_01,7,渋川駅,0,0,1
日祝_18時37分_系統268,18:47:00,18:47:00,201015_01,8,渋川駅,0,0,1
日祝_18時37分_系統268,18:48:00,18:48:00,200262_01,9,渋川駅,0,0,1
日祝_18時37分_系統268,18:49:00,18:49:00,200142_01,10,渋川駅,0,0,1
日祝_18時37分_系統268,18:50:00,18:50:00,200141_01,11,渋川駅,0,0,1
日祝_18時37分_系統268,18:51:00,18:51:00,200542_01,12,渋川駅,0,0,1
日祝_18時37分_系統268,18:53:00,18:53:00,201071_01,13,渋川駅,0,0,1
日祝_18時37分_系統268,18:55:00,18:55:00,200348_01,14,渋川駅,0,0,1
日祝_18時37分_系統268,18:56:00,18:56:00,200343_01,15,渋川駅,0,0,1
日祝_18時37分_系統268,18:57:00,18:57:00,200722_01,16,渋川駅,0,0,1
日祝_18時37分_系統268,18:59:00,18:59:00,200189_01,17,渋川駅,0,0,1
日祝_18時37分_系統268,19:01:00,19:01:00,201056_01,18,渋川駅,0,0,1
日祝_18時37分_系統268,19:02:00,19:02:00,200872_01,19,渋川駅,0,0,1
日祝_18時37分_系統268,19:03:00,19:03:00,200981_01,20,渋川駅,0,0,1
日祝_18時37分_系統268,19:04:00,19:04:00,201100_01,21,渋川駅,0,0,1
日祝_18時37分_系統268,19:05:00,19:05:00,200153_01,22,渋川駅,0,0,1
日祝_18時37分_系統268,19:05:00,19:05:00,200395_01,23,渋川駅,0,0,1
日祝_18時37分_系統268,19:06:00,19:06:00,200895_01,24,渋川駅,0,0,1
日祝_18時37分_系統268,19:07:00,19:07:00,200985_01,25,渋川駅,0,0,1
日祝_18時37分_系統268,19:07:00,19:07:00,200987_01,26,渋川駅,0,0,1
日祝_18時37分_系統268,19:08:00,19:08:00,200519_01,27,渋川駅,0,0,1
日祝_18時37分_系統268,19:09:00,19:09:00,200017_01,28,渋川駅,0,0,1
日祝_18時37分_系統268,19:10:00,19:10:00,200506_01,29,渋川駅,0,0,1
日祝_18時37分_系統268,19:12:00,19:12:00,200827_01,30,渋川駅,0,0,1
日祝_18時37分_系統268,19:14:00,19:14:00,200730_01,31,渋川駅,0,0,1
日祝_18時37分_系統268,19:15:00,19:15:00,200768_01,32,渋川駅,0,0,1
日祝_18時37分_系統268,19:18:00,19:18:00,200463_10,33,渋川駅,1,0,1
日祝_18時45分_系統267,18:45:00,18:45:00,200463_01,1,前橋駅,0,1,1
日祝_18時45分_系統267,18:46:00,18:46:00,200768_02,2,前橋駅,0,0,1
日祝_18時45分_系統267,18:47:00,18:47:00,200730_02,3,前橋駅,0,0,1
日祝_18時45分_系統267,18:49:00,18:49:00,200827_02,4,前橋駅,0,0,1
日祝_18時45分_系統267,18:50:00,18:50:00,200506_02,5,前橋駅,0,0,1
日祝_18時45分_系統267,18:51:00,18:51:00,200017_02,6,前橋駅,0,0,1
日祝_18時45分_系統267,18:52:00,18:52:00,200519_02,7,前橋駅,0,0,1
日祝_18時45分_系統267,18:52:00,18:52:00,200987_02,8,前橋駅,0,0,1
日祝_18時45分_系統267,18:54:00,18:54:00,200985_02,9,前橋駅,0,0,1
日祝_18時45分_系統267,18:55:00,18:55:00,200895_02,10,前橋駅,0,0,1
日祝_18時45分_系統267,18:56:00,18:56:00,200395_02,11,前橋駅,0,0,1
日祝_18時45分_系統267,18:56:00,18:56:00,200153_02,12,前橋駅,0,0,1
日祝_18時45分_系統267,18:57:00,18:57:00,201100_02,13,前橋駅,0,0,1
日祝_18時45分_系統267,18:58:00,18:58:00,200981_02,14,前橋駅,0,0,1
日祝_18時45分_系統267,18:59:00,18:59:00,200872_02,15,前橋駅,0,0,1
日祝_18時45分_系統267,19:00:00,19:00:00,201056_02,16,前橋駅,0,0,1
日祝_18時45分_系統267,19:02:00,19:02:00,200189_02,17,前橋駅,0,0,1
日祝_18時45分_系統267,19:03:00,19:03:00,200722_02,18,前橋駅,0,0,1
日祝_18時45分_系統267,19:04:00,19:04:00,200343_02,19,前橋駅,0,0,1
日祝_18時45分_系統267,19:05:00,19:05:00,200348_02,20,前橋駅,0,0,1
日祝_18時45分_系統267,19:07:00,19:07:00,201071_02,21,前橋駅,0,0,1
日祝_18時45分_系統267,19:09:00,19:09:00,200542_02,22,前橋駅,0,0,1
日祝_18時45分_系統267,19:11:00,19:11:00,200141_02,23,前橋駅,0,0,1
日祝_18時45分_系統267,19:12:00,19:12:00,200142_02,24,前橋駅,0,0,1
日祝_18時45分_系統267,19:14:00,19:14:00,200262_02,25,前橋駅,0,0,1
日祝_18時45分_系統267,19:15:00,19:15:00,201015_02,26,前橋駅,0,0,1
日祝_18時45分_系統267,19:16:00,19:16:00,200379_02,27,前橋駅,0,0,1
日祝_18時45分_系統267,19:17:00,19:17:00,200455_02,28,前橋駅,0,0,1
日祝_18時45分_系統267,19:18:00,19:18:00,200702_02,29,前橋駅,0,0,1
日祝_18時45分_系統267,19:19:00,19:19:00,200703_02,30,前橋駅,0,0,1
日祝_18時45分_系統267,19:21:00,19:21:00,201081_02,31,前橋駅,0,0,1
日祝_18時45分_系統267,19:23:00,19:23:00,200998_02,32,前橋駅,0,0,1
日祝_18時45分_系統267,19:26:00,19:26:00,200718_10,33,前橋駅,1,0,1
日祝_19時00分_系統532,19:00:00,19:00:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
日祝_19時00分_系統532,19:01:00,19:01:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:03:00,19:03:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:05:00,19:05:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:06:00,19:06:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:07:00,19:07:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:08:00,19:08:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:09:00,19:09:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:10:00,19:10:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:11:00,19:11:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:12:00,19:12:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:13:00,19:13:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:15:00,19:15:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:16:00,19:16:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:17:00,19:17:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
日祝_19時00分_系統532,19:19:00,19:19:00,200927_01,16,渋川駅,0,0,1
日祝_19時00分_系統532,19:20:00,19:20:00,201185_01,17,渋川駅,0,0,1
日祝_19時00分_系統532,19:24:00,19:24:00,200348_01,18,渋川駅,0,0,1
日祝_19時00分_系統532,19:25:00,19:25:00,200343_01,19,渋川駅,0,0,1
日祝_19時00分_系統532,19:26:00,19:26:00,200722_01,20,渋川駅,0,0,1
日祝_19時00分_系統532,19:27:00,19:27:00,200189_01,21,渋川駅,0,0,1
日祝_19時00分_系統532,19:29:00,19:29:00,201056_01,22,渋川駅,0,0,1
日祝_19時00分_系統532,19:30:00,19:30:00,200872_01,23,渋川駅,0,0,1
日祝_19時00分_系統532,19:31:00,19:31:00,200981_01,24,渋川駅,0,0,1
日祝_19時00分_系統532,19:32:00,19:32:00,201100_01,25,渋川駅,0,0,1
日祝_19時00分_系統532,19:33:00,19:33:00,200153_01,26,渋川駅,0,0,1
日祝_19時00分_系統532,19:33:00,19:33:00,200395_01,27,渋川駅,0,0,1
日祝_19時00分_系統532,19:34:00,19:34:00,200895_01,28,渋川駅,0,0,1
日祝_19時00分_系統532,19:35:00,19:35:00,200985_01,29,渋川駅,0,0,1
日祝_19時00分_系統532,19:35:00,19:35:00,200987_01,30,渋川駅,0,0,1
日祝_19時00分_系統532,19:36:00,19:36:00,200519_01,31,渋川駅,0,0,1
日祝_19時00分_系統532,19:37:00,19:37:00,200017_01,32,渋川駅,0,0,1
日祝_19時00分_系統532,19:38:00,19:38:00,200506_01,33,渋川駅,0,0,1
日祝_19時00分_系統532,19:39:00,19:39:00,200827_01,34,渋川駅,0,0,1
日祝_19時00分_系統532,19:41:00,19:41:00,200730_01,35,渋川駅,0,0,1
日祝_19時00分_系統532,19:42:00,19:42:00,200768_01,36,渋川駅,0,0,1
日祝_19時00分_系統532,19:45:00,19:45:00,200463_10,37,渋川駅,1,0,1
日祝_19時50分_系統268,19:50:00,19:50:00,200718_02,1,渋川駅,0,1,1
日祝_19時50分_系統268,19:51:00,19:51:00,200998_01,2,渋川駅,0,0,1
日祝_19時50分_系統268,19:53:00,19:53:00,201081_01,3,渋川駅,0,0,1
日祝_19時50分_系統268,19:55:00,19:55:00,200703_01,4,渋川駅,0,0,1
日祝_19時50分_系統268,19:56:00,19:56:00,200702_01,5,渋川駅,0,0,1
日祝_19時50分_系統268,19:58:00,19:58:00,200455_01,6,渋川駅,0,0,1
日祝_19時50分_系統268,19:59:00,19:59:00,200379_01,7,渋川駅,0,0,1
日祝_19時50分_系統268,20:00:00,20:00:00,201015_01,8,渋川駅,0,0,1
日祝_19時50分_系統268,20:01:00,20:01:00,200262_01,9,渋川駅,0,0,1
日祝_19時50分_系統268,20:02:00,20:02:00,200142_01,10,渋川駅,0,0,1
日祝_19時50分_系統268,20:03:00,20:03:00,200141_01,11,渋川駅,0,0,1
日祝_19時50分_系統268,20:04:00,20:04:00,200542_01,12,渋川駅,0,0,1
日祝_19時50分_系統268,20:06:00,20:06:00,201071_01,13,渋川駅,0,0,1
日祝_19時50分_系統268,20:08:00,20:08:00,200348_01,14,渋川駅,0,0,1
日祝_19時50分_系統268,20:09:00,20:09:00,200343_01,15,渋川駅,0,0,1
日祝_19時50分_系統268,20:10:00,20:10:00,200722_01,16,渋川駅,0,0,1
日祝_19時50分_系統268,20:11:00,20:11:00,200189_01,17,渋川駅,0,0,1
日祝_19時50分_系統268,20:13:00,20:13:00,201056_01,18,渋川駅,0,0,1
日祝_19時50分_系統268,20:14:00,20:14:00,200872_01,19,渋川駅,0,0,1
日祝_19時50分_系統268,20:15:00,20:15:00,200981_01,20,渋川駅,0,0,1
日祝_19時50分_系統268,20:16:00,20:16:00,201100_01,21,渋川駅,0,0,1
日祝_19時50分_系統268,20:17:00,20:17:00,200153_01,22,渋川駅,0,0,1
日祝_19時50分_系統268,20:17:00,20:17:00,200395_01,23,渋川駅,0,0,1
日祝_19時50分_系統268,20:18:00,20:18:00,200895_01,24,渋川駅,0,0,1
日祝_19時50分_系統268,20:19:00,20:19:00,200985_01,25,渋川駅,0,0,1
日祝_19時50分_系統268,20:19:00,20:19:00,200987_01,26,渋川駅,0,0,1
日祝_19時50分_系統268,20:20:00,20:20:00,200519_01,27,渋川駅,0,0,1
日祝_19時50分_系統268,20:21:00,20:21:00,200017_01,28,渋川駅,0,0,1
日祝_19時50分_系統268,20:22:00,20:22:00,200506_01,29,渋川駅,0,0,1
日祝_19時50分_系統268,20:23:00,20:23:00,200827_01,30,渋川駅,0,0,1
日祝_19時50分_系統268,20:25:00,20:25:00,200730_01,31,渋川駅,0,0,1
日祝_19時50分_系統268,20:26:00,20:26:00,200768_01,32,渋川駅,0,0,1
日祝_19時50分_系統268,20:29:00,20:29:00,200463_10,33,渋川駅,1,0,1
日祝_19時50分_系統267,19:50:00,19:50:00,200463_01,1,前橋駅,0,1,1
日祝_19時50分_系統267,19:51:00,19:51:00,200768_02,2,前橋駅,0,0,1
日祝_19時50分_系統267,19:52:00,19:52:00,200730_02,3,前橋駅,0,0,1
日祝_19時50分_系統267,19:54:00,19:54:00,200827_02,4,前橋駅,0,0,1
日祝_19時50分_系統267,19:55:00,19:55:00,200506_02,5,前橋駅,0,0,1
日祝_19時50分_系統267,19:56:00,19:56:00,200017_02,6,前橋駅,0,0,1
日祝_19時50分_系統267,19:57:00,19:57:00,200519_02,7,前橋駅,0,0,1
日祝_19時50分_系統267,19:57:00,19:57:00,200987_02,8,前橋駅,0,0,1
日祝_19時50分_系統267,19:59:00,19:59:00,200985_02,9,前橋駅,0,0,1
日祝_19時50分_系統267,20:00:00,20:00:00,200895_02,10,前橋駅,0,0,1
日祝_19時50分_系統267,20:01:00,20:01:00,200395_02,11,前橋駅,0,0,1
日祝_19時50分_系統267,20:01:00,20:01:00,200153_02,12,前橋駅,0,0,1
日祝_19時50分_系統267,20:02:00,20:02:00,201100_02,13,前橋駅,0,0,1
日祝_19時50分_系統267,20:03:00,20:03:00,200981_02,14,前橋駅,0,0,1
日祝_19時50分_系統267,20:04:00,20:04:00,200872_02,15,前橋駅,0,0,1
日祝_19時50分_系統267,20:05:00,20:05:00,201056_02,16,前橋駅,0,0,1
日祝_19時50分_系統267,20:06:00,20:06:00,200189_02,17,前橋駅,0,0,1
日祝_19時50分_系統267,20:07:00,20:07:00,200722_02,18,前橋駅,0,0,1
日祝_19時50分_系統267,20:08:00,20:08:00,200343_02,19,前橋駅,0,0,1
日祝_19時50分_系統267,20:09:00,20:09:00,200348_02,20,前橋駅,0,0,1
日祝_19時50分_系統267,20:10:00,20:10:00,201071_02,21,前橋駅,0,0,1
日祝_19時50分_系統267,20:11:00,20:11:00,200542_02,22,前橋駅,0,0,1
日祝_19時50分_系統267,20:12:00,20:12:00,200141_02,23,前橋駅,0,0,1
日祝_19時50分_系統267,20:13:00,20:13:00,200142_02,24,前橋駅,0,0,1
日祝_19時50分_系統267,20:15:00,20:15:00,200262_02,25,前橋駅,0,0,1
日祝_19時50分_系統267,20:16:00,20:16:00,201015_02,26,前橋駅,0,0,1
日祝_19時50分_系統267,20:16:00,20:16:00,200379_02,27,前橋駅,0,0,1
日祝_19時50分_系統267,20:17:00,20:17:00,200455_02,28,前橋駅,0,0,1
日祝_19時50分_系統267,20:18:00,20:18:00,200702_02,29,前橋駅,0,0,1
日祝_19時50分_系統267,20:19:00,20:19:00,200703_02,30,前橋駅,0,0,1
日祝_19時50分_系統267,20:21:00,20:21:00,201081_02,31,前橋駅,0,0,1
日祝_19時50分_系統267,20:23:00,20:23:00,200998_02,32,前橋駅,0,0,1
日祝_19時50分_系統267,20:26:00,20:26:00,200718_10,33,前橋駅,1,0,1
日祝_20時35分_系統267,20:35:00,20:35:00,200463_01,1,前橋駅,0,1,1
日祝_20時35分_系統267,20:36:00,20:36:00,200768_02,2,前橋駅,0,0,1
日祝_20時35分_系統267,20:37:00,20:37:00,200730_02,3,前橋駅,0,0,1
日祝_20時35分_系統267,20:39:00,20:39:00,200827_02,4,前橋駅,0,0,1
日祝_20時35分_系統267,20:40:00,20:40:00,200506_02,5,前橋駅,0,0,1
日祝_20時35分_系統267,20:41:00,20:41:00,200017_02,6,前橋駅,0,0,1
日祝_20時35分_系統267,20:42:00,20:42:00,200519_02,7,前橋駅,0,0,1
日祝_20時35分_系統267,20:42:00,20:42:00,200987_02,8,前橋駅,0,0,1
日祝_20時35分_系統267,20:44:00,20:44:00,200985_02,9,前橋駅,0,0,1
日祝_20時35分_系統267,20:45:00,20:45:00,200895_02,10,前橋駅,0,0,1
日祝_20時35分_系統267,20:46:00,20:46:00,200395_02,11,前橋駅,0,0,1
日祝_20時35分_系統267,20:46:00,20:46:00,200153_02,12,前橋駅,0,0,1
日祝_20時35分_系統267,20:47:00,20:47:00,201100_02,13,前橋駅,0,0,1
日祝_20時35分_系統267,20:48:00,20:48:00,200981_02,14,前橋駅,0,0,1
日祝_20時35分_系統267,20:49:00,20:49:00,200872_02,15,前橋駅,0,0,1
日祝_20時35分_系統267,20:50:00,20:50:00,201056_02,16,前橋駅,0,0,1
日祝_20時35分_系統267,20:51:00,20:51:00,200189_02,17,前橋駅,0,0,1
日祝_20時35分_系統267,20:52:00,20:52:00,200722_02,18,前橋駅,0,0,1
日祝_20時35分_系統267,20:53:00,20:53:00,200343_02,19,前橋駅,0,0,1
日祝_20時35分_系統267,20:54:00,20:54:00,200348_02,20,前橋駅,0,0,1
日祝_20時35分_系統267,20:55:00,20:55:00,201071_02,21,前橋駅,0,0,1
日祝_20時35分_系統267,20:56:00,20:56:00,200542_02,22,前橋駅,0,0,1
日祝_20時35分_系統267,20:57:00,20:57:00,200141_02,23,前橋駅,0,0,1
日祝_20時35分_系統267,20:58:00,20:58:00,200142_02,24,前橋駅,0,0,1
日祝_20時35分_系統267,21:00:00,21:00:00,200262_02,25,前橋駅,0,0,1
日祝_20時35分_系統267,21:01:00,21:01:00,201015_02,26,前橋駅,0,0,1
日祝_20時35分_系統267,21:01:00,21:01:00,200379_02,27,前橋駅,0,0,1
日祝_20時35分_系統267,21:02:00,21:02:00,200455_02,28,前橋駅,0,0,1
日祝_20時35分_系統267,21:03:00,21:03:00,200702_02,29,前橋駅,0,0,1
日祝_20時35分_系統267,21:04:00,21:04:00,200703_02,30,前橋駅,0,0,1
日祝_20時35分_系統267,21:06:00,21:06:00,201081_02,31,前橋駅,0,0,1
日祝_20時35分_系統267,21:08:00,21:08:00,200998_02,32,前橋駅,0,0,1
日祝_20時35分_系統267,21:11:00,21:11:00,200718_10,33,前橋駅,1,0,1
日祝_20時35分_系統532,20:35:00,20:35:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
日祝_20時35分_系統532,20:36:00,20:36:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:38:00,20:38:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:40:00,20:40:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:41:00,20:41:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:42:00,20:42:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:43:00,20:43:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:44:00,20:44:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:45:00,20:45:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:46:00,20:46:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:47:00,20:47:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:48:00,20:48:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:50:00,20:50:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:51:00,20:51:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:52:00,20:52:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
日祝_20時35分_系統532,20:54:00,20:54:00,200927_01,16,渋川駅,0,0,1
日祝_20時35分_系統532,20:55:00,20:55:00,201185_01,17,渋川駅,0,0,1
日祝_20時35分_系統532,20:59:00,20:59:00,200348_01,18,渋川駅,0,0,1
日祝_20時35分_系統532,21:00:00,21:00:00,200343_01,19,渋川駅,0,0,1
日祝_20時35分_系統532,21:01:00,21:01:00,200722_01,20,渋川駅,0,0,1
日祝_20時35分_系統532,21:02:00,21:02:00,200189_01,21,渋川駅,0,0,1
日祝_20時35分_系統532,21:04:00,21:04:00,201056_01,22,渋川駅,0,0,1
日祝_20時35分_系統532,21:05:00,21:05:00,200872_01,23,渋川駅,0,0,1
日祝_20時35分_系統532,21:06:00,21:06:00,200981_01,24,渋川駅,0,0,1
日祝_20時35分_系統532,21:07:00,21:07:00,201100_01,25,渋川駅,0,0,1
日祝_20時35分_系統532,21:08:00,21:08:00,200153_01,26,渋川駅,0,0,1
日祝_20時35分_系統532,21:08:00,21:08:00,200395_01,27,渋川駅,0,0,1
日祝_20時35分_系統532,21:09:00,21:09:00,200895_01,28,渋川駅,0,0,1
日祝_20時35分_系統532,21:10:00,21:10:00,200985_01,29,渋川駅,0,0,1
日祝_20時35分_系統532,21:10:00,21:10:00,200987_01,30,渋川駅,0,0,1
日祝_20時35分_系統532,21:11:00,21:11:00,200519_01,31,渋川駅,0,0,1
日祝_20時35分_系統532,21:12:00,21:12:00,200017_01,32,渋川駅,0,0,1
日祝_20時35分_系統532,21:13:00,21:13:00,200506_01,33,渋川駅,0,0,1
日祝_20時35分_系統532,21:14:00,21:14:00,200827_01,34,渋川駅,0,0,1
日祝_20時35分_系統532,21:16:00,21:16:00,200730_01,35,渋川駅,0,0,1
日祝_20時35分_系統532,21:17:00,21:17:00,200768_01,36,渋川駅,0,0,1
日祝_20時35分_系統532,21:20:00,21:20:00,200463_10,37,渋川駅,1,0,1
日祝_21時24分_系統532,21:24:00,21:24:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
日祝_21時24分_系統532,21:25:00,21:25:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:27:00,21:27:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:29:00,21:29:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:30:00,21:30:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:31:00,21:31:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:32:00,21:32:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:33:00,21:33:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:34:00,21:34:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:35:00,21:35:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:36:00,21:36:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:37:00,21:37:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:39:00,21:39:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:40:00,21:40:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:41:00,21:41:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
日祝_21時24分_系統532,21:43:00,21:43:00,200927_01,16,渋川駅,0,0,1
日祝_21時24分_系統532,21:44:00,21:44:00,201185_01,17,渋川駅,0,0,1
日祝_21時24分_系統532,21:48:00,21:48:00,200348_01,18,渋川駅,0,0,1
日祝_21時24分_系統532,21:49:00,21:49:00,200343_01,19,渋川駅,0,0,1
日祝_21時24分_系統532,21:50:00,21:50:00,200722_01,20,渋川駅,0,0,1
日祝_21時24分_系統532,21:51:00,21:51:00,200189_01,21,渋川駅,0,0,1
日祝_21時24分_系統532,21:53:00,21:53:00,201056_01,22,渋川駅,0,0,1
日祝_21時24分_系統532,21:54:00,21:54:00,200872_01,23,渋川駅,0,0,1
日祝_21時24分_系統532,21:55:00,21:55:00,200981_01,24,渋川駅,0,0,1
日祝_21時24分_系統532,21:56:00,21:56:00,201100_01,25,渋川駅,0,0,1
日祝_21時24分_系統532,21:57:00,21:57:00,200153_01,26,渋川駅,0,0,1
日祝_21時24分_系統532,21:57:00,21:57:00,200395_01,27,渋川駅,0,0,1
日祝_21時24分_系統532,21:58:00,21:58:00,200895_01,28,渋川駅,0,0,1
日祝_21時24分_系統532,21:59:00,21:59:00,200985_01,29,渋川駅,0,0,1
日祝_21時24分_系統532,21:59:00,21:59:00,200987_01,30,渋川駅,0,0,1
日祝_21時24分_系統532,22:00:00,22:00:00,200519_01,31,渋川駅,0,0,1
日祝_21時24分_系統532,22:01:00,22:01:00,200017_01,32,渋川駅,0,0,1
日祝_21時24分_系統532,22:02:00,22:02:00,200506_01,33,渋川駅,0,0,1
日祝_21時24分_系統532,22:03:00,22:03:00,200827_01,34,渋川駅,0,0,1
日祝_21時24分_系統532,22:05:00,22:05:00,200730_01,35,渋川駅,0,0,1
日祝_21時24分_系統532,22:06:00,22:06:00,200768_01,36,渋川駅,0,0,1
日祝_21時24分_系統532,22:09:00,22:09:00,200463_10,37,渋川駅,1,0,1
年末・年始_05時50分_系統267,05:50:00,05:50:00,200463_01,1,前橋駅,0,1,1
年末・年始_05時50分_系統267,05:51:00,05:51:00,200768_02,2,前橋駅,0,0,1
年末・年始_05時50分_系統267,05:52:00,05:52:00,200730_02,3,前橋駅,0,0,1
年末・年始_05時50分_系統267,05:54:00,05:54:00,200827_02,4,前橋駅,0,0,1
年末・年始_05時50分_系統267,05:55:00,05:55:00,200506_02,5,前橋駅,0,0,1
年末・年始_05時50分_系統267,05:56:00,05:56:00,200017_02,6,前橋駅,0,0,1
年末・年始_05時50分_系統267,05:57:00,05:57:00,200519_02,7,前橋駅,0,0,1
年末・年始_05時50分_系統267,05:57:00,05:57:00,200987_02,8,前橋駅,0,0,1
年末・年始_05時50分_系統267,05:59:00,05:59:00,200985_02,9,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:00:00,06:00:00,200895_02,10,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:01:00,06:01:00,200395_02,11,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:01:00,06:01:00,200153_02,12,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:02:00,06:02:00,201100_02,13,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:03:00,06:03:00,200981_02,14,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:04:00,06:04:00,200872_02,15,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:05:00,06:05:00,201056_02,16,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:07:00,06:07:00,200189_02,17,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:08:00,06:08:00,200722_02,18,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:09:00,06:09:00,200343_02,19,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:10:00,06:10:00,200348_02,20,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:12:00,06:12:00,201071_02,21,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:13:00,06:13:00,200542_02,22,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:14:00,06:14:00,200141_02,23,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:15:00,06:15:00,200142_02,24,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:17:00,06:17:00,200262_02,25,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:18:00,06:18:00,201015_02,26,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:18:00,06:18:00,200379_02,27,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:19:00,06:19:00,200455_02,28,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:20:00,06:20:00,200702_02,29,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:21:00,06:21:00,200703_02,30,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:22:00,06:22:00,201081_02,31,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:23:00,06:23:00,200998_02,32,前橋駅,0,0,1
年末・年始_05時50分_系統267,06:27:00,06:27:00,200718_10,33,前橋駅,1,0,1
年末・年始_06時25分_系統267,06:25:00,06:25:00,200463_01,1,前橋駅,0,1,1
年末・年始_06時25分_系統267,06:26:00,06:26:00,200768_02,2,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:27:00,06:27:00,200730_02,3,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:29:00,06:29:00,200827_02,4,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:30:00,06:30:00,200506_02,5,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:31:00,06:31:00,200017_02,6,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:32:00,06:32:00,200519_02,7,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:32:00,06:32:00,200987_02,8,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:34:00,06:34:00,200985_02,9,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:35:00,06:35:00,200895_02,10,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:36:00,06:36:00,200395_02,11,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:36:00,06:36:00,200153_02,12,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:37:00,06:37:00,201100_02,13,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:38:00,06:38:00,200981_02,14,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:39:00,06:39:00,200872_02,15,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:40:00,06:40:00,201056_02,16,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:42:00,06:42:00,200189_02,17,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:43:00,06:43:00,200722_02,18,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:44:00,06:44:00,200343_02,19,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:45:00,06:45:00,200348_02,20,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:47:00,06:47:00,201071_02,21,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:48:00,06:48:00,200542_02,22,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:49:00,06:49:00,200141_02,23,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:50:00,06:50:00,200142_02,24,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:52:00,06:52:00,200262_02,25,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:53:00,06:53:00,201015_02,26,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:53:00,06:53:00,200379_02,27,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:54:00,06:54:00,200455_02,28,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:55:00,06:55:00,200702_02,29,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:56:00,06:56:00,200703_02,30,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:57:00,06:57:00,201081_02,31,前橋駅,0,0,1
年末・年始_06時25分_系統267,06:59:00,06:59:00,200998_02,32,前橋駅,0,0,1
年末・年始_06時25分_系統267,07:02:00,07:02:00,200718_10,33,前橋駅,1,0,1
年末・年始_06時43分_系統267,06:43:00,06:43:00,200463_01,1,前橋駅,0,1,1
年末・年始_06時43分_系統267,06:44:00,06:44:00,200768_02,2,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:45:00,06:45:00,200730_02,3,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:47:00,06:47:00,200827_02,4,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:48:00,06:48:00,200506_02,5,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:49:00,06:49:00,200017_02,6,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:50:00,06:50:00,200519_02,7,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:50:00,06:50:00,200987_02,8,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:52:00,06:52:00,200985_02,9,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:53:00,06:53:00,200895_02,10,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:54:00,06:54:00,200395_02,11,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:54:00,06:54:00,200153_02,12,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:55:00,06:55:00,201100_02,13,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:56:00,06:56:00,200981_02,14,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:57:00,06:57:00,200872_02,15,前橋駅,0,0,1
年末・年始_06時43分_系統267,06:58:00,06:58:00,201056_02,16,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:00:00,07:00:00,200189_02,17,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:01:00,07:01:00,200722_02,18,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:02:00,07:02:00,200343_02,19,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:03:00,07:03:00,200348_02,20,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:05:00,07:05:00,201071_02,21,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:06:00,07:06:00,200542_02,22,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:07:00,07:07:00,200141_02,23,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:08:00,07:08:00,200142_02,24,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:10:00,07:10:00,200262_02,25,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:11:00,07:11:00,201015_02,26,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:11:00,07:11:00,200379_02,27,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:12:00,07:12:00,200455_02,28,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:13:00,07:13:00,200702_02,29,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:14:00,07:14:00,200703_02,30,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:16:00,07:16:00,201081_02,31,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:18:00,07:18:00,200998_02,32,前橋駅,0,0,1
年末・年始_06時43分_系統267,07:21:00,07:21:00,200718_10,33,前橋駅,1,0,1
年末・年始_06時47分_系統268,06:47:00,06:47:00,200718_02,1,渋川駅,0,1,1
年末・年始_06時47分_系統268,06:48:00,06:48:00,200998_01,2,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:50:00,06:50:00,201081_01,3,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:51:00,06:51:00,200703_01,4,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:51:00,06:51:00,200702_01,5,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:52:00,06:52:00,200455_01,6,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:53:00,06:53:00,200379_01,7,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:54:00,06:54:00,201015_01,8,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:55:00,06:55:00,200262_01,9,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:56:00,06:56:00,200142_01,10,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:57:00,06:57:00,200141_01,11,渋川駅,0,0,1
年末・年始_06時47分_系統268,06:58:00,06:58:00,200542_01,12,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:00:00,07:00:00,201071_01,13,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:01:00,07:01:00,200348_01,14,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:02:00,07:02:00,200343_01,15,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:03:00,07:03:00,200722_01,16,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:05:00,07:05:00,200189_01,17,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:07:00,07:07:00,201056_01,18,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:08:00,07:08:00,200872_01,19,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:09:00,07:09:00,200981_01,20,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:10:00,07:10:00,201100_01,21,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:11:00,07:11:00,200153_01,22,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:11:00,07:11:00,200395_01,23,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:12:00,07:12:00,200895_01,24,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:13:00,07:13:00,200985_01,25,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:13:00,07:13:00,200987_01,26,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:14:00,07:14:00,200519_01,27,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:15:00,07:15:00,200017_01,28,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:16:00,07:16:00,200506_01,29,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:17:00,07:17:00,200827_01,30,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:19:00,07:19:00,200730_01,31,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:20:00,07:20:00,200768_01,32,渋川駅,0,0,1
年末・年始_06時47分_系統268,07:23:00,07:23:00,200463_10,33,渋川駅,1,0,1
年末・年始_07時05分_系統267,07:05:00,07:05:00,200463_01,1,前橋駅,0,1,1
年末・年始_07時05分_系統267,07:06:00,07:06:00,200768_02,2,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:07:00,07:07:00,200730_02,3,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:09:00,07:09:00,200827_02,4,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:10:00,07:10:00,200506_02,5,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:11:00,07:11:00,200017_02,6,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:12:00,07:12:00,200519_02,7,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:12:00,07:12:00,200987_02,8,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:14:00,07:14:00,200985_02,9,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:15:00,07:15:00,200895_02,10,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:16:00,07:16:00,200395_02,11,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:16:00,07:16:00,200153_02,12,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:17:00,07:17:00,201100_02,13,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:18:00,07:18:00,200981_02,14,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:19:00,07:19:00,200872_02,15,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:20:00,07:20:00,201056_02,16,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:22:00,07:22:00,200189_02,17,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:23:00,07:23:00,200722_02,18,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:24:00,07:24:00,200343_02,19,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:25:00,07:25:00,200348_02,20,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:27:00,07:27:00,201071_02,21,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:28:00,07:28:00,200542_02,22,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:29:00,07:29:00,200141_02,23,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:30:00,07:30:00,200142_02,24,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:32:00,07:32:00,200262_02,25,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:33:00,07:33:00,201015_02,26,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:33:00,07:33:00,200379_02,27,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:34:00,07:34:00,200455_02,28,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:35:00,07:35:00,200702_02,29,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:36:00,07:36:00,200703_02,30,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:38:00,07:38:00,201081_02,31,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:40:00,07:40:00,200998_02,32,前橋駅,0,0,1
年末・年始_07時05分_系統267,07:43:00,07:43:00,200718_10,33,前橋駅,1,0,1
年末・年始_07時12分_系統268,07:12:00,07:12:00,200718_02,1,渋川駅,0,1,1
年末・年始_07時12分_系統268,07:13:00,07:13:00,200998_01,2,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:15:00,07:15:00,201081_01,3,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:16:00,07:16:00,200703_01,4,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:16:00,07:16:00,200702_01,5,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:17:00,07:17:00,200455_01,6,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:18:00,07:18:00,200379_01,7,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:19:00,07:19:00,201015_01,8,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:20:00,07:20:00,200262_01,9,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:21:00,07:21:00,200142_01,10,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:22:00,07:22:00,200141_01,11,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:23:00,07:23:00,200542_01,12,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:25:00,07:25:00,201071_01,13,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:26:00,07:26:00,200348_01,14,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:27:00,07:27:00,200343_01,15,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:28:00,07:28:00,200722_01,16,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:30:00,07:30:00,200189_01,17,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:32:00,07:32:00,201056_01,18,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:33:00,07:33:00,200872_01,19,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:34:00,07:34:00,200981_01,20,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:35:00,07:35:00,201100_01,21,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:36:00,07:36:00,200153_01,22,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:36:00,07:36:00,200395_01,23,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:37:00,07:37:00,200895_01,24,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:38:00,07:38:00,200985_01,25,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:38:00,07:38:00,200987_01,26,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:39:00,07:39:00,200519_01,27,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:40:00,07:40:00,200017_01,28,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:41:00,07:41:00,200506_01,29,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:42:00,07:42:00,200827_01,30,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:44:00,07:44:00,200730_01,31,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:45:00,07:45:00,200768_01,32,渋川駅,0,0,1
年末・年始_07時12分_系統268,07:48:00,07:48:00,200463_10,33,渋川駅,1,0,1
年末・年始_07時25分_系統267,07:25:00,07:25:00,200463_01,1,前橋駅,0,1,1
年末・年始_07時25分_系統267,07:26:00,07:26:00,200768_02,2,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:27:00,07:27:00,200730_02,3,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:29:00,07:29:00,200827_02,4,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:30:00,07:30:00,200506_02,5,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:31:00,07:31:00,200017_02,6,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:32:00,07:32:00,200519_02,7,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:32:00,07:32:00,200987_02,8,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:34:00,07:34:00,200985_02,9,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:35:00,07:35:00,200895_02,10,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:36:00,07:36:00,200395_02,11,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:36:00,07:36:00,200153_02,12,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:37:00,07:37:00,201100_02,13,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:38:00,07:38:00,200981_02,14,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:39:00,07:39:00,200872_02,15,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:40:00,07:40:00,201056_02,16,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:42:00,07:42:00,200189_02,17,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:43:00,07:43:00,200722_02,18,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:44:00,07:44:00,200343_02,19,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:45:00,07:45:00,200348_02,20,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:47:00,07:47:00,201071_02,21,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:48:00,07:48:00,200542_02,22,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:49:00,07:49:00,200141_02,23,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:50:00,07:50:00,200142_02,24,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:52:00,07:52:00,200262_02,25,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:53:00,07:53:00,201015_02,26,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:53:00,07:53:00,200379_02,27,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:54:00,07:54:00,200455_02,28,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:55:00,07:55:00,200702_02,29,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:56:00,07:56:00,200703_02,30,前橋駅,0,0,1
年末・年始_07時25分_系統267,07:58:00,07:58:00,201081_02,31,前橋駅,0,0,1
年末・年始_07時25分_系統267,08:00:00,08:00:00,200998_02,32,前橋駅,0,0,1
年末・年始_07時25分_系統267,08:03:00,08:03:00,200718_10,33,前橋駅,1,0,1
年末・年始_07時30分_系統264,07:30:00,07:30:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
年末・年始_07時30分_系統264,07:31:00,07:31:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:33:00,07:33:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:35:00,07:35:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:36:00,07:36:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:38:00,07:38:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:39:00,07:39:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:40:00,07:40:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:41:00,07:41:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:42:00,07:42:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:43:00,07:43:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:44:00,07:44:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:46:00,07:46:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:47:00,07:47:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:48:00,07:48:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:49:00,07:49:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:51:00,07:51:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:54:00,07:54:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:56:00,07:56:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:57:00,07:57:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:58:00,07:58:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,07:59:00,07:59:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:00:00,08:00:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:00:00,08:00:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:01:00,08:01:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:02:00,08:02:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:02:00,08:02:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:03:00,08:03:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:04:00,08:04:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:05:00,08:05:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:06:00,08:06:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:08:00,08:08:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:09:00,08:09:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_07時30分_系統264,08:10:00,08:10:00,200463_06,34,渋川市内循環,0,0,1
年末・年始_07時30分_系統264,08:11:00,08:11:00,200468_01,35,渋川市内循環,0,0,1
年末・年始_07時30分_系統264,08:13:00,08:13:00,200466_01,36,渋川市内循環,0,0,1
年末・年始_07時30分_系統264,08:14:00,08:14:00,200704_01,37,渋川市内循環,0,0,1
年末・年始_07時30分_系統264,08:15:00,08:15:00,200476_02,38,渋川市内循環,0,0,1
年末・年始_07時30分_系統264,08:16:00,08:16:00,200477_02,39,渋川市内循環,0,0,1
年末・年始_07時30分_系統264,08:17:00,08:17:00,200430_02,40,渋川市内循環,0,0,1
年末・年始_07時30分_系統264,08:18:00,08:18:00,200007_02,41,渋川市内循環,0,0,1
年末・年始_07時30分_系統264,08:23:00,08:23:00,210463_10,42,渋川市内循環,1,0,1
年末・年始_07時35分_系統528,07:35:00,07:35:00,200927_01,1,前橋駅,0,1,1
年末・年始_07時35分_系統528,07:35:00,07:35:00,200800_02,2,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:36:00,07:36:00,200928_02,3,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:38:00,07:38:00,201071_02,4,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:39:00,07:39:00,200542_02,5,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:40:00,07:40:00,200141_02,6,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:41:00,07:41:00,200142_02,7,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:43:00,07:43:00,200262_02,8,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:44:00,07:44:00,201015_02,9,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:44:00,07:44:00,200379_02,10,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:45:00,07:45:00,200455_02,11,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:46:00,07:46:00,200702_02,12,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:47:00,07:47:00,200703_02,13,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:49:00,07:49:00,201081_02,14,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:51:00,07:51:00,200998_02,15,前橋駅,0,0,1
年末・年始_07時35分_系統528,07:54:00,07:54:00,200718_10,16,前橋駅,1,0,1
年末・年始_07時40分_系統586,07:40:00,07:40:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
年末・年始_07時40分_系統586,07:41:00,07:41:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_07時40分_系統586,07:43:00,07:43:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_07時40分_系統586,07:45:00,07:45:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_07時40分_系統586,07:46:00,07:46:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_07時40分_系統586,07:47:00,07:47:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_07時40分_系統586,07:48:00,07:48:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_07時40分_系統586,07:49:00,07:49:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_07時40分_系統586,07:50:00,07:50:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_07時40分_系統586,07:51:00,07:51:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_07時40分_系統586,07:53:00,07:53:00,200261_01,11,群馬大学荒牧,0,0,1
年末・年始_07時40分_系統586,07:54:00,07:54:00,200503_02,12,群馬大学荒牧,0,0,1
年末・年始_07時40分_系統586,07:55:00,07:55:00,200142_01,13,群馬大学荒牧,0,0,1
年末・年始_07時40分_系統586,07:56:00,07:56:00,200141_01,14,群馬大学荒牧,0,0,1
年末・年始_07時40分_系統586,07:57:00,07:57:00,200542_01,15,群馬大学荒牧,0,0,1
年末・年始_07時40分_系統586,07:59:00,07:59:00,201071_01,16,群馬大学荒牧,0,0,1
年末・年始_07時40分_系統586,08:00:00,08:00:00,200348_01,17,群馬大学荒牧,0,0,1
年末・年始_07時40分_系統586,08:01:00,08:01:00,200343_01,18,群馬大学荒牧,0,0,1
年末・年始_07時40分_系統586,08:02:00,08:02:00,200722_01,19,群馬大学荒牧,0,0,1
年末・年始_07時40分_系統586,08:05:00,08:05:00,200273_01,20,群馬大学荒牧,1,0,1
年末・年始_07時45分_系統267,07:45:00,07:45:00,200463_01,1,前橋駅,0,1,1
年末・年始_07時45分_系統267,07:46:00,07:46:00,200768_02,2,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:47:00,07:47:00,200730_02,3,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:49:00,07:49:00,200827_02,4,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:50:00,07:50:00,200506_02,5,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:51:00,07:51:00,200017_02,6,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:52:00,07:52:00,200519_02,7,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:52:00,07:52:00,200987_02,8,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:54:00,07:54:00,200985_02,9,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:55:00,07:55:00,200895_02,10,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:56:00,07:56:00,200395_02,11,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:56:00,07:56:00,200153_02,12,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:57:00,07:57:00,201100_02,13,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:58:00,07:58:00,200981_02,14,前橋駅,0,0,1
年末・年始_07時45分_系統267,07:59:00,07:59:00,200872_02,15,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:00:00,08:00:00,201056_02,16,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:02:00,08:02:00,200189_02,17,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:03:00,08:03:00,200722_02,18,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:04:00,08:04:00,200343_02,19,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:05:00,08:05:00,200348_02,20,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:07:00,08:07:00,201071_02,21,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:09:00,08:09:00,200542_02,22,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:11:00,08:11:00,200141_02,23,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:12:00,08:12:00,200142_02,24,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:14:00,08:14:00,200262_02,25,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:15:00,08:15:00,201015_02,26,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:16:00,08:16:00,200379_02,27,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:17:00,08:17:00,200455_02,28,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:18:00,08:18:00,200702_02,29,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:19:00,08:19:00,200703_02,30,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:21:00,08:21:00,201081_02,31,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:23:00,08:23:00,200998_02,32,前橋駅,0,0,1
年末・年始_07時45分_系統267,08:26:00,08:26:00,200718_10,33,前橋駅,1,0,1
年末・年始_07時53分_系統266,07:53:00,07:53:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
年末・年始_07時53分_系統266,07:54:00,07:54:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,07:56:00,07:56:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,07:58:00,07:58:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,07:59:00,07:59:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:01:00,08:01:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:02:00,08:02:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:03:00,08:03:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:04:00,08:04:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:05:00,08:05:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:06:00,08:06:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:07:00,08:07:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:09:00,08:09:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:10:00,08:10:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:11:00,08:11:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:12:00,08:12:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_07時53分_系統266,08:14:00,08:14:00,200273_01,17,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:17:00,08:17:00,200189_01,18,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:19:00,08:19:00,201056_01,19,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:20:00,08:20:00,200872_01,20,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:21:00,08:21:00,200981_01,21,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:22:00,08:22:00,201100_01,22,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:23:00,08:23:00,200153_01,23,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:23:00,08:23:00,200395_01,24,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:24:00,08:24:00,200895_01,25,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:25:00,08:25:00,200985_01,26,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:25:00,08:25:00,200987_01,27,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:26:00,08:26:00,200519_01,28,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:27:00,08:27:00,200017_01,29,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:28:00,08:28:00,200506_01,30,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:29:00,08:29:00,200827_01,31,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:31:00,08:31:00,200730_01,32,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:32:00,08:32:00,200768_01,33,渋川駅,0,0,1
年末・年始_07時53分_系統266,08:35:00,08:35:00,200463_10,34,渋川駅,1,0,1
年末・年始_08時05分_系統265,08:05:00,08:05:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
年末・年始_08時05分_系統265,08:06:00,08:06:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:07:00,08:07:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:09:00,08:09:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:10:00,08:10:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:11:00,08:11:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:12:00,08:12:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:12:00,08:12:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:14:00,08:14:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:15:00,08:15:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:16:00,08:16:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:16:00,08:16:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:17:00,08:17:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:18:00,08:18:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:19:00,08:19:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:20:00,08:20:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:22:00,08:22:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時05分_系統265,08:25:00,08:25:00,200273_01,18,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:27:00,08:27:00,200722_02,19,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:28:00,08:28:00,200343_02,20,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:29:00,08:29:00,200348_02,21,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:31:00,08:31:00,201071_02,22,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:33:00,08:33:00,200542_02,23,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:35:00,08:35:00,200141_02,24,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:36:00,08:36:00,200142_02,25,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:38:00,08:38:00,200262_02,26,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:39:00,08:39:00,201015_02,27,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:40:00,08:40:00,200379_02,28,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:41:00,08:41:00,200455_02,29,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:42:00,08:42:00,200702_02,30,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:43:00,08:43:00,200703_02,31,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:45:00,08:45:00,201081_02,32,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:47:00,08:47:00,200998_02,33,前橋駅,0,0,1
年末・年始_08時05分_系統265,08:50:00,08:50:00,200718_10,34,前橋駅,1,0,1
年末・年始_08時10分_系統583,08:10:00,08:10:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
年末・年始_08時10分_系統583,08:12:00,08:12:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
年末・年始_08時10分_系統583,08:13:00,08:13:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
年末・年始_08時10分_系統583,08:14:00,08:14:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
年末・年始_08時10分_系統583,08:17:00,08:17:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
年末・年始_08時10分_系統583,08:20:00,08:20:00,200927_01,6,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:20:00,08:20:00,200800_02,7,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:21:00,08:21:00,200928_02,8,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:23:00,08:23:00,201071_02,9,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:25:00,08:25:00,200542_02,10,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:27:00,08:27:00,200141_02,11,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:28:00,08:28:00,200142_02,12,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:30:00,08:30:00,200262_02,13,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:31:00,08:31:00,201015_02,14,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:32:00,08:32:00,200379_02,15,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:33:00,08:33:00,200455_02,16,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:34:00,08:34:00,200702_02,17,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:35:00,08:35:00,200703_02,18,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:37:00,08:37:00,201081_02,19,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:39:00,08:39:00,200998_02,20,前橋駅,0,0,1
年末・年始_08時10分_系統583,08:42:00,08:42:00,200718_10,21,前橋駅,1,0,1
年末・年始_08時12分_系統261,08:12:00,08:12:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
年末・年始_08時12分_系統261,08:13:00,08:13:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_08時12分_系統261,08:14:00,08:14:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_08時12分_系統261,08:15:00,08:15:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_08時12分_系統261,08:16:00,08:16:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_08時12分_系統261,08:17:00,08:17:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_08時12分_系統261,08:18:00,08:18:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_08時12分_系統261,08:19:00,08:19:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_08時12分_系統261,08:20:00,08:20:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_08時12分_系統261,08:25:00,08:25:00,200463_01,10,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:26:00,08:26:00,200768_02,11,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:27:00,08:27:00,200730_02,12,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:29:00,08:29:00,200827_02,13,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:30:00,08:30:00,200506_02,14,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:31:00,08:31:00,200017_02,15,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:32:00,08:32:00,200519_02,16,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:32:00,08:32:00,200987_02,17,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:34:00,08:34:00,200985_02,18,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:35:00,08:35:00,200895_02,19,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:36:00,08:36:00,200395_02,20,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:36:00,08:36:00,200153_02,21,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:37:00,08:37:00,201100_02,22,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:38:00,08:38:00,200981_02,23,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:39:00,08:39:00,200872_02,24,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:40:00,08:40:00,201056_02,25,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:42:00,08:42:00,200189_02,26,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:43:00,08:43:00,200722_02,27,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:44:00,08:44:00,200343_02,28,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:45:00,08:45:00,200348_02,29,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:47:00,08:47:00,201071_02,30,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:49:00,08:49:00,200542_02,31,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:51:00,08:51:00,200141_02,32,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:52:00,08:52:00,200142_02,33,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:54:00,08:54:00,200262_02,34,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:55:00,08:55:00,201015_02,35,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:56:00,08:56:00,200379_02,36,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:57:00,08:57:00,200455_02,37,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:58:00,08:58:00,200702_02,38,前橋駅,0,0,1
年末・年始_08時12分_系統261,08:59:00,08:59:00,200703_02,39,前橋駅,0,0,1
年末・年始_08時12分_系統261,09:01:00,09:01:00,201081_02,40,前橋駅,0,0,1
年末・年始_08時12分_系統261,09:03:00,09:03:00,200998_02,41,前橋駅,0,0,1
年末・年始_08時12分_系統261,09:06:00,09:06:00,200718_10,42,前橋駅,1,0,1
年末・年始_08時13分_系統266,08:13:00,08:13:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
年末・年始_08時13分_系統266,08:14:00,08:14:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:16:00,08:16:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:18:00,08:18:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:19:00,08:19:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:21:00,08:21:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:22:00,08:22:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:23:00,08:23:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:24:00,08:24:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:25:00,08:25:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:26:00,08:26:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:27:00,08:27:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:29:00,08:29:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:30:00,08:30:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:31:00,08:31:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:32:00,08:32:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時13分_系統266,08:34:00,08:34:00,200273_01,17,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:37:00,08:37:00,200189_01,18,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:39:00,08:39:00,201056_01,19,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:40:00,08:40:00,200872_01,20,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:41:00,08:41:00,200981_01,21,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:42:00,08:42:00,201100_01,22,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:43:00,08:43:00,200153_01,23,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:43:00,08:43:00,200395_01,24,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:44:00,08:44:00,200895_01,25,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:45:00,08:45:00,200985_01,26,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:45:00,08:45:00,200987_01,27,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:46:00,08:46:00,200519_01,28,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:47:00,08:47:00,200017_01,29,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:48:00,08:48:00,200506_01,30,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:49:00,08:49:00,200827_01,31,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:51:00,08:51:00,200730_01,32,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:52:00,08:52:00,200768_01,33,渋川駅,0,0,1
年末・年始_08時13分_系統266,08:55:00,08:55:00,200463_10,34,渋川駅,1,0,1
年末・年始_08時28分_系統586,08:28:00,08:28:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
年末・年始_08時28分_系統586,08:29:00,08:29:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_08時28分_系統586,08:31:00,08:31:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_08時28分_系統586,08:33:00,08:33:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_08時28分_系統586,08:34:00,08:34:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_08時28分_系統586,08:36:00,08:36:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_08時28分_系統586,08:37:00,08:37:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_08時28分_系統586,08:38:00,08:38:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_08時28分_系統586,08:39:00,08:39:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_08時28分_系統586,08:40:00,08:40:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_08時28分_系統586,08:42:00,08:42:00,200261_01,11,群馬大学荒牧,0,0,1
年末・年始_08時28分_系統586,08:43:00,08:43:00,200503_02,12,群馬大学荒牧,0,0,1
年末・年始_08時28分_系統586,08:44:00,08:44:00,200142_01,13,群馬大学荒牧,0,0,1
年末・年始_08時28分_系統586,08:45:00,08:45:00,200141_01,14,群馬大学荒牧,0,0,1
年末・年始_08時28分_系統586,08:46:00,08:46:00,200542_01,15,群馬大学荒牧,0,0,1
年末・年始_08時28分_系統586,08:48:00,08:48:00,201071_01,16,群馬大学荒牧,0,0,1
年末・年始_08時28分_系統586,08:49:00,08:49:00,200348_01,17,群馬大学荒牧,0,0,1
年末・年始_08時28分_系統586,08:50:00,08:50:00,200343_01,18,群馬大学荒牧,0,0,1
年末・年始_08時28分_系統586,08:51:00,08:51:00,200722_01,19,群馬大学荒牧,0,0,1
年末・年始_08時28分_系統586,08:54:00,08:54:00,200273_01,20,群馬大学荒牧,1,0,1
年末・年始_08時40分_系統268,08:40:00,08:40:00,200718_02,1,渋川駅,0,1,1
年末・年始_08時40分_系統268,08:41:00,08:41:00,200998_01,2,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:43:00,08:43:00,201081_01,3,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:44:00,08:44:00,200703_01,4,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:44:00,08:44:00,200702_01,5,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:45:00,08:45:00,200455_01,6,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:46:00,08:46:00,200379_01,7,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:47:00,08:47:00,201015_01,8,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:48:00,08:48:00,200262_01,9,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:49:00,08:49:00,200142_01,10,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:50:00,08:50:00,200141_01,11,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:51:00,08:51:00,200542_01,12,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:53:00,08:53:00,201071_01,13,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:54:00,08:54:00,200348_01,14,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:55:00,08:55:00,200343_01,15,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:56:00,08:56:00,200722_01,16,渋川駅,0,0,1
年末・年始_08時40分_系統268,08:58:00,08:58:00,200189_01,17,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:00:00,09:00:00,201056_01,18,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:01:00,09:01:00,200872_01,19,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:02:00,09:02:00,200981_01,20,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:03:00,09:03:00,201100_01,21,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:04:00,09:04:00,200153_01,22,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:04:00,09:04:00,200395_01,23,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:05:00,09:05:00,200895_01,24,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:06:00,09:06:00,200985_01,25,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:06:00,09:06:00,200987_01,26,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:07:00,09:07:00,200519_01,27,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:08:00,09:08:00,200017_01,28,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:09:00,09:09:00,200506_01,29,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:10:00,09:10:00,200827_01,30,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:12:00,09:12:00,200730_01,31,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:13:00,09:13:00,200768_01,32,渋川駅,0,0,1
年末・年始_08時40分_系統268,09:16:00,09:16:00,200463_10,33,渋川駅,1,0,1
年末・年始_08時55分_系統265,08:55:00,08:55:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
年末・年始_08時55分_系統265,08:56:00,08:56:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,08:57:00,08:57:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,08:59:00,08:59:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:00:00,09:00:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:01:00,09:01:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:02:00,09:02:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:02:00,09:02:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:04:00,09:04:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:05:00,09:05:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:06:00,09:06:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:06:00,09:06:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:07:00,09:07:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:08:00,09:08:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:09:00,09:09:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:10:00,09:10:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:12:00,09:12:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_08時55分_系統265,09:15:00,09:15:00,200273_01,18,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:17:00,09:17:00,200722_02,19,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:18:00,09:18:00,200343_02,20,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:19:00,09:19:00,200348_02,21,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:21:00,09:21:00,201071_02,22,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:23:00,09:23:00,200542_02,23,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:25:00,09:25:00,200141_02,24,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:26:00,09:26:00,200142_02,25,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:28:00,09:28:00,200262_02,26,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:29:00,09:29:00,201015_02,27,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:30:00,09:30:00,200379_02,28,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:31:00,09:31:00,200455_02,29,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:32:00,09:32:00,200702_02,30,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:33:00,09:33:00,200703_02,31,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:35:00,09:35:00,201081_02,32,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:37:00,09:37:00,200998_02,33,前橋駅,0,0,1
年末・年始_08時55分_系統265,09:40:00,09:40:00,200718_10,34,前橋駅,1,0,1
年末・年始_08時58分_系統264,08:58:00,08:58:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
年末・年始_08時58分_系統264,08:59:00,08:59:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:01:00,09:01:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:03:00,09:03:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:04:00,09:04:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:06:00,09:06:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:07:00,09:07:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:08:00,09:08:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:09:00,09:09:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:10:00,09:10:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:11:00,09:11:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:12:00,09:12:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:14:00,09:14:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:15:00,09:15:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:16:00,09:16:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:17:00,09:17:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:19:00,09:19:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:22:00,09:22:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:24:00,09:24:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:25:00,09:25:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:26:00,09:26:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:27:00,09:27:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:28:00,09:28:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:28:00,09:28:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:29:00,09:29:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:30:00,09:30:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:30:00,09:30:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:31:00,09:31:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:32:00,09:32:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:33:00,09:33:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:34:00,09:34:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:36:00,09:36:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:37:00,09:37:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_08時58分_系統264,09:38:00,09:38:00,200463_06,34,渋川市内循環,0,0,1
年末・年始_08時58分_系統264,09:39:00,09:39:00,200468_01,35,渋川市内循環,0,0,1
年末・年始_08時58分_系統264,09:41:00,09:41:00,200466_01,36,渋川市内循環,0,0,1
年末・年始_08時58分_系統264,09:42:00,09:42:00,200704_01,37,渋川市内循環,0,0,1
年末・年始_08時58分_系統264,09:43:00,09:43:00,200476_02,38,渋川市内循環,0,0,1
年末・年始_08時58分_系統264,09:44:00,09:44:00,200477_02,39,渋川市内循環,0,0,1
年末・年始_08時58分_系統264,09:45:00,09:45:00,200430_02,40,渋川市内循環,0,0,1
年末・年始_08時58分_系統264,09:46:00,09:46:00,200007_02,41,渋川市内循環,0,0,1
年末・年始_08時58分_系統264,09:51:00,09:51:00,210463_10,42,渋川市内循環,1,0,1
年末・年始_09時00分_系統583,09:00:00,09:00:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
年末・年始_09時00分_系統583,09:02:00,09:02:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
年末・年始_09時00分_系統583,09:03:00,09:03:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
年末・年始_09時00分_系統583,09:04:00,09:04:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
年末・年始_09時00分_系統583,09:07:00,09:07:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
年末・年始_09時00分_系統583,09:10:00,09:10:00,200927_01,6,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:10:00,09:10:00,200800_02,7,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:11:00,09:11:00,200928_02,8,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:13:00,09:13:00,201071_02,9,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:15:00,09:15:00,200542_02,10,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:17:00,09:17:00,200141_02,11,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:18:00,09:18:00,200142_02,12,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:20:00,09:20:00,200262_02,13,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:21:00,09:21:00,201015_02,14,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:22:00,09:22:00,200379_02,15,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:23:00,09:23:00,200455_02,16,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:24:00,09:24:00,200702_02,17,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:25:00,09:25:00,200703_02,18,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:27:00,09:27:00,201081_02,19,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:29:00,09:29:00,200998_02,20,前橋駅,0,0,1
年末・年始_09時00分_系統583,09:32:00,09:32:00,200718_10,21,前橋駅,1,0,1
年末・年始_09時10分_系統267,09:10:00,09:10:00,200463_01,1,前橋駅,0,1,1
年末・年始_09時10分_系統267,09:11:00,09:11:00,200768_02,2,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:12:00,09:12:00,200730_02,3,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:14:00,09:14:00,200827_02,4,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:15:00,09:15:00,200506_02,5,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:16:00,09:16:00,200017_02,6,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:17:00,09:17:00,200519_02,7,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:17:00,09:17:00,200987_02,8,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:19:00,09:19:00,200985_02,9,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:20:00,09:20:00,200895_02,10,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:21:00,09:21:00,200395_02,11,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:21:00,09:21:00,200153_02,12,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:22:00,09:22:00,201100_02,13,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:23:00,09:23:00,200981_02,14,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:24:00,09:24:00,200872_02,15,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:25:00,09:25:00,201056_02,16,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:27:00,09:27:00,200189_02,17,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:28:00,09:28:00,200722_02,18,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:29:00,09:29:00,200343_02,19,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:30:00,09:30:00,200348_02,20,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:32:00,09:32:00,201071_02,21,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:34:00,09:34:00,200542_02,22,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:36:00,09:36:00,200141_02,23,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:37:00,09:37:00,200142_02,24,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:39:00,09:39:00,200262_02,25,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:40:00,09:40:00,201015_02,26,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:41:00,09:41:00,200379_02,27,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:42:00,09:42:00,200455_02,28,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:43:00,09:43:00,200702_02,29,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:44:00,09:44:00,200703_02,30,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:46:00,09:46:00,201081_02,31,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:48:00,09:48:00,200998_02,32,前橋駅,0,0,1
年末・年始_09時10分_系統267,09:51:00,09:51:00,200718_10,33,前橋駅,1,0,1
年末・年始_09時17分_系統586,09:17:00,09:17:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
年末・年始_09時17分_系統586,09:18:00,09:18:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_09時17分_系統586,09:20:00,09:20:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_09時17分_系統586,09:22:00,09:22:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_09時17分_系統586,09:23:00,09:23:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_09時17分_系統586,09:24:00,09:24:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_09時17分_系統586,09:25:00,09:25:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_09時17分_系統586,09:26:00,09:26:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_09時17分_系統586,09:27:00,09:27:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_09時17分_系統586,09:28:00,09:28:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
年末・年始_09時17分_系統586,09:30:00,09:30:00,200261_01,11,群馬大学荒牧,0,0,1
年末・年始_09時17分_系統586,09:31:00,09:31:00,200503_02,12,群馬大学荒牧,0,0,1
年末・年始_09時17分_系統586,09:32:00,09:32:00,200142_01,13,群馬大学荒牧,0,0,1
年末・年始_09時17分_系統586,09:33:00,09:33:00,200141_01,14,群馬大学荒牧,0,0,1
年末・年始_09時17分_系統586,09:34:00,09:34:00,200542_01,15,群馬大学荒牧,0,0,1
年末・年始_09時17分_系統586,09:36:00,09:36:00,201071_01,16,群馬大学荒牧,0,0,1
年末・年始_09時17分_系統586,09:37:00,09:37:00,200348_01,17,群馬大学荒牧,0,0,1
年末・年始_09時17分_系統586,09:38:00,09:38:00,200343_01,18,群馬大学荒牧,0,0,1
年末・年始_09時17分_系統586,09:39:00,09:39:00,200722_01,19,群馬大学荒牧,0,0,1
年末・年始_09時17分_系統586,09:42:00,09:42:00,200273_01,20,群馬大学荒牧,1,0,1
年末・年始_09時30分_系統266,09:30:00,09:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
年末・年始_09時30分_系統266,09:31:00,09:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:33:00,09:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:35:00,09:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:36:00,09:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:38:00,09:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:39:00,09:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:40:00,09:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:41:00,09:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:42:00,09:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:43:00,09:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:44:00,09:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:46:00,09:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:48:00,09:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:49:00,09:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:50:00,09:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時30分_系統266,09:52:00,09:52:00,200273_01,17,渋川駅,0,0,1
年末・年始_09時30分_系統266,09:55:00,09:55:00,200189_01,18,渋川駅,0,0,1
年末・年始_09時30分_系統266,09:57:00,09:57:00,201056_01,19,渋川駅,0,0,1
年末・年始_09時30分_系統266,09:58:00,09:58:00,200872_01,20,渋川駅,0,0,1
年末・年始_09時30分_系統266,09:59:00,09:59:00,200981_01,21,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:00:00,10:00:00,201100_01,22,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:01:00,10:01:00,200153_01,23,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:01:00,10:01:00,200395_01,24,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:02:00,10:02:00,200895_01,25,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:03:00,10:03:00,200985_01,26,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:03:00,10:03:00,200987_01,27,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:04:00,10:04:00,200519_01,28,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:05:00,10:05:00,200017_01,29,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:06:00,10:06:00,200506_01,30,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:08:00,10:08:00,200827_01,31,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:10:00,10:10:00,200730_01,32,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:11:00,10:11:00,200768_01,33,渋川駅,0,0,1
年末・年始_09時30分_系統266,10:14:00,10:14:00,200463_10,34,渋川駅,1,0,1
年末・年始_09時30分_系統267,09:30:00,09:30:00,200463_01,1,前橋駅,0,1,1
年末・年始_09時30分_系統267,09:31:00,09:31:00,200768_02,2,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:32:00,09:32:00,200730_02,3,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:34:00,09:34:00,200827_02,4,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:35:00,09:35:00,200506_02,5,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:36:00,09:36:00,200017_02,6,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:37:00,09:37:00,200519_02,7,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:37:00,09:37:00,200987_02,8,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:39:00,09:39:00,200985_02,9,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:40:00,09:40:00,200895_02,10,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:41:00,09:41:00,200395_02,11,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:41:00,09:41:00,200153_02,12,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:42:00,09:42:00,201100_02,13,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:43:00,09:43:00,200981_02,14,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:44:00,09:44:00,200872_02,15,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:45:00,09:45:00,201056_02,16,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:47:00,09:47:00,200189_02,17,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:48:00,09:48:00,200722_02,18,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:49:00,09:49:00,200343_02,19,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:50:00,09:50:00,200348_02,20,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:52:00,09:52:00,201071_02,21,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:54:00,09:54:00,200542_02,22,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:56:00,09:56:00,200141_02,23,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:57:00,09:57:00,200142_02,24,前橋駅,0,0,1
年末・年始_09時30分_系統267,09:59:00,09:59:00,200262_02,25,前橋駅,0,0,1
年末・年始_09時30分_系統267,10:00:00,10:00:00,201015_02,26,前橋駅,0,0,1
年末・年始_09時30分_系統267,10:01:00,10:01:00,200379_02,27,前橋駅,0,0,1
年末・年始_09時30分_系統267,10:02:00,10:02:00,200455_02,28,前橋駅,0,0,1
年末・年始_09時30分_系統267,10:03:00,10:03:00,200702_02,29,前橋駅,0,0,1
年末・年始_09時30分_系統267,10:04:00,10:04:00,200703_02,30,前橋駅,0,0,1
年末・年始_09時30分_系統267,10:06:00,10:06:00,201081_02,31,前橋駅,0,0,1
年末・年始_09時30分_系統267,10:08:00,10:08:00,200998_02,32,前橋駅,0,0,1
年末・年始_09時30分_系統267,10:11:00,10:11:00,200718_10,33,前橋駅,1,0,1
年末・年始_09時47分_系統263,09:47:00,09:47:00,210463_05,1,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,1,1
年末・年始_09時47分_系統263,09:48:00,09:48:00,200007_01,2,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,09:49:00,09:49:00,200430_01,3,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,09:50:00,09:50:00,200477_01,4,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,09:51:00,09:51:00,200476_01,5,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,09:52:00,09:52:00,200704_02,6,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,09:53:00,09:53:00,200467_01,7,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,09:54:00,09:54:00,200466_02,8,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,09:55:00,09:55:00,200468_02,9,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:00:00,10:00:00,200463_01,10,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:01:00,10:01:00,200768_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:02:00,10:02:00,200730_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:04:00,10:04:00,200827_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:05:00,10:05:00,200506_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:06:00,10:06:00,200017_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:07:00,10:07:00,200519_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:07:00,10:07:00,200987_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:09:00,10:09:00,200985_02,18,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:10:00,10:10:00,200895_02,19,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:11:00,10:11:00,200395_02,20,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:11:00,10:11:00,200153_02,21,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:12:00,10:12:00,201100_02,22,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:13:00,10:13:00,200981_02,23,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:14:00,10:14:00,200872_02,24,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:15:00,10:15:00,201056_02,25,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:17:00,10:17:00,200189_02,26,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_09時47分_系統263,10:20:00,10:20:00,200273_01,27,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:22:00,10:22:00,200722_02,28,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:23:00,10:23:00,200343_02,29,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:24:00,10:24:00,200348_02,30,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:26:00,10:26:00,201071_02,31,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:28:00,10:28:00,200542_02,32,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:30:00,10:30:00,200141_02,33,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:31:00,10:31:00,200142_02,34,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:33:00,10:33:00,200262_02,35,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:34:00,10:34:00,201015_02,36,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:35:00,10:35:00,200379_02,37,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:36:00,10:36:00,200455_02,38,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:37:00,10:37:00,200702_02,39,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:38:00,10:38:00,200703_02,40,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:40:00,10:40:00,201081_02,41,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:42:00,10:42:00,200998_02,42,前橋駅,0,0,1
年末・年始_09時47分_系統263,10:45:00,10:45:00,200718_10,43,前橋駅,1,0,1
年末・年始_09時48分_系統669,09:48:00,09:48:00,200273_01,1,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,1,1
年末・年始_09時48分_系統669,09:50:00,09:50:00,200722_02,2,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,09:51:00,09:51:00,200343_02,3,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,09:52:00,09:52:00,200348_02,4,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,09:55:00,09:55:00,201185_02,5,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,09:58:00,09:58:00,200927_01,6,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,09:58:00,09:58:00,200800_02,7,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,09:59:00,09:59:00,200928_02,8,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:01:00,10:01:00,201071_02,9,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:03:00,10:03:00,200542_02,10,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:05:00,10:05:00,200141_02,11,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:06:00,10:06:00,200142_02,12,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:08:00,10:08:00,200262_02,13,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:09:00,10:09:00,201015_02,14,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:10:00,10:10:00,200379_02,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:11:00,10:11:00,200455_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:12:00,10:12:00,200702_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:13:00,10:13:00,200703_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:15:00,10:15:00,201081_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:17:00,10:17:00,200998_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_09時48分_系統669,10:20:00,10:20:00,200718_04,21,けやきウォーク前橋,0,0,1
年末・年始_09時48分_系統669,10:22:00,10:22:00,200108_01,22,けやきウォーク前橋,0,0,1
年末・年始_09時48分_系統669,10:23:00,10:23:00,200932_01,23,けやきウォーク前橋,0,0,1
年末・年始_09時48分_系統669,10:24:00,10:24:00,200668_01,24,けやきウォーク前橋,0,0,1
年末・年始_09時48分_系統669,10:28:00,10:28:00,200022_01,25,けやきウォーク前橋,1,0,1
年末・年始_10時02分_系統268,10:02:00,10:02:00,200718_02,1,渋川駅,0,1,1
年末・年始_10時02分_系統268,10:03:00,10:03:00,200998_01,2,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:05:00,10:05:00,201081_01,3,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:06:00,10:06:00,200703_01,4,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:06:00,10:06:00,200702_01,5,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:07:00,10:07:00,200455_01,6,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:08:00,10:08:00,200379_01,7,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:09:00,10:09:00,201015_01,8,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:10:00,10:10:00,200262_01,9,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:11:00,10:11:00,200142_01,10,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:12:00,10:12:00,200141_01,11,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:13:00,10:13:00,200542_01,12,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:15:00,10:15:00,201071_01,13,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:17:00,10:17:00,200348_01,14,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:18:00,10:18:00,200343_01,15,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:19:00,10:19:00,200722_01,16,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:21:00,10:21:00,200189_01,17,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:23:00,10:23:00,201056_01,18,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:24:00,10:24:00,200872_01,19,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:25:00,10:25:00,200981_01,20,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:26:00,10:26:00,201100_01,21,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:27:00,10:27:00,200153_01,22,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:27:00,10:27:00,200395_01,23,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:28:00,10:28:00,200895_01,24,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:29:00,10:29:00,200985_01,25,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:29:00,10:29:00,200987_01,26,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:30:00,10:30:00,200519_01,27,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:31:00,10:31:00,200017_01,28,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:32:00,10:32:00,200506_01,29,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:34:00,10:34:00,200827_01,30,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:36:00,10:36:00,200730_01,31,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:37:00,10:37:00,200768_01,32,渋川駅,0,0,1
年末・年始_10時02分_系統268,10:40:00,10:40:00,200463_10,33,渋川駅,1,0,1
年末・年始_10時10分_系統644,10:10:00,10:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
年末・年始_10時10分_系統644,10:11:00,10:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_10時10分_系統644,10:13:00,10:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_10時10分_系統644,10:15:00,10:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_10時10分_系統644,10:16:00,10:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_10時10分_系統644,10:17:00,10:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_10時10分_系統644,10:18:00,10:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_10時10分_系統644,10:19:00,10:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_10時10分_系統644,10:20:00,10:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_10時10分_系統644,10:21:00,10:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_10時10分_系統644,10:23:00,10:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:24:00,10:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:25:00,10:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:26:00,10:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:27:00,10:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:29:00,10:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:31:00,10:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:32:00,10:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:33:00,10:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:35:00,10:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
年末・年始_10時10分_系統644,10:42:00,10:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
年末・年始_10時30分_系統264,10:30:00,10:30:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
年末・年始_10時30分_系統264,10:31:00,10:31:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:33:00,10:33:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:35:00,10:35:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:36:00,10:36:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:38:00,10:38:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:39:00,10:39:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:40:00,10:40:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:41:00,10:41:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:42:00,10:42:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:43:00,10:43:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:44:00,10:44:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:46:00,10:46:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:48:00,10:48:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:49:00,10:49:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:50:00,10:50:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:52:00,10:52:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:55:00,10:55:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:57:00,10:57:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:58:00,10:58:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,10:59:00,10:59:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:00:00,11:00:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:01:00,11:01:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:01:00,11:01:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:02:00,11:02:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:03:00,11:03:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:03:00,11:03:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:04:00,11:04:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:05:00,11:05:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:06:00,11:06:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:08:00,11:08:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:10:00,11:10:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:11:00,11:11:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_10時30分_系統264,11:12:00,11:12:00,200463_06,34,渋川市内循環,0,0,1
年末・年始_10時30分_系統264,11:13:00,11:13:00,200468_01,35,渋川市内循環,0,0,1
年末・年始_10時30分_系統264,11:15:00,11:15:00,200466_01,36,渋川市内循環,0,0,1
年末・年始_10時30分_系統264,11:16:00,11:16:00,200704_01,37,渋川市内循環,0,0,1
年末・年始_10時30分_系統264,11:17:00,11:17:00,200476_02,38,渋川市内循環,0,0,1
年末・年始_10時30分_系統264,11:18:00,11:18:00,200477_02,39,渋川市内循環,0,0,1
年末・年始_10時30分_系統264,11:19:00,11:19:00,200430_02,40,渋川市内循環,0,0,1
年末・年始_10時30分_系統264,11:20:00,11:20:00,200007_02,41,渋川市内循環,0,0,1
年末・年始_10時30分_系統264,11:25:00,11:25:00,210463_10,42,渋川市内循環,1,0,1
年末・年始_10時30分_系統267,10:30:00,10:30:00,200463_01,1,前橋駅,0,1,1
年末・年始_10時30分_系統267,10:31:00,10:31:00,200768_02,2,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:32:00,10:32:00,200730_02,3,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:34:00,10:34:00,200827_02,4,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:35:00,10:35:00,200506_02,5,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:36:00,10:36:00,200017_02,6,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:37:00,10:37:00,200519_02,7,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:37:00,10:37:00,200987_02,8,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:39:00,10:39:00,200985_02,9,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:40:00,10:40:00,200895_02,10,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:41:00,10:41:00,200395_02,11,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:41:00,10:41:00,200153_02,12,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:42:00,10:42:00,201100_02,13,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:43:00,10:43:00,200981_02,14,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:44:00,10:44:00,200872_02,15,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:45:00,10:45:00,201056_02,16,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:47:00,10:47:00,200189_02,17,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:48:00,10:48:00,200722_02,18,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:49:00,10:49:00,200343_02,19,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:50:00,10:50:00,200348_02,20,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:52:00,10:52:00,201071_02,21,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:54:00,10:54:00,200542_02,22,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:56:00,10:56:00,200141_02,23,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:57:00,10:57:00,200142_02,24,前橋駅,0,0,1
年末・年始_10時30分_系統267,10:59:00,10:59:00,200262_02,25,前橋駅,0,0,1
年末・年始_10時30分_系統267,11:00:00,11:00:00,201015_02,26,前橋駅,0,0,1
年末・年始_10時30分_系統267,11:01:00,11:01:00,200379_02,27,前橋駅,0,0,1
年末・年始_10時30分_系統267,11:02:00,11:02:00,200455_02,28,前橋駅,0,0,1
年末・年始_10時30分_系統267,11:03:00,11:03:00,200702_02,29,前橋駅,0,0,1
年末・年始_10時30分_系統267,11:04:00,11:04:00,200703_02,30,前橋駅,0,0,1
年末・年始_10時30分_系統267,11:06:00,11:06:00,201081_02,31,前橋駅,0,0,1
年末・年始_10時30分_系統267,11:08:00,11:08:00,200998_02,32,前橋駅,0,0,1
年末・年始_10時30分_系統267,11:11:00,11:11:00,200718_10,33,前橋駅,1,0,1
年末・年始_10時50分_系統643,10:50:00,10:50:00,201440_01,1,前橋駅（南橘団地・群大病院 経由）,0,1,1
年末・年始_10時50分_系統643,10:55:00,10:55:00,200189_02,2,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,10:57:00,10:57:00,200722_02,3,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,10:58:00,10:58:00,200343_02,4,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,10:59:00,10:59:00,200348_02,5,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:02:00,11:02:00,201185_02,6,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:05:00,11:05:00,200927_01,7,前橋駅（群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:05:00,11:05:00,200800_02,8,前橋駅（群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:06:00,11:06:00,200928_02,9,前橋駅（群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:08:00,11:08:00,201071_02,10,前橋駅（群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:10:00,11:10:00,200542_02,11,前橋駅（群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:12:00,11:12:00,200141_02,12,前橋駅（群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:14:00,11:14:00,200142_02,13,前橋駅（群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:15:00,11:15:00,200503_01,14,前橋駅（群大病院 経由）,0,0,1
年末・年始_10時50分_系統643,11:17:00,11:17:00,200261_01,15,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:18:00,11:18:00,200503_02,16,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:21:00,11:21:00,200262_02,17,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:22:00,11:22:00,201015_02,18,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:23:00,11:23:00,200379_02,19,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:24:00,11:24:00,200455_02,20,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:25:00,11:25:00,200702_02,21,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:26:00,11:26:00,200703_02,22,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:28:00,11:28:00,201081_02,23,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:30:00,11:30:00,200998_02,24,前橋駅,0,0,1
年末・年始_10時50分_系統643,11:33:00,11:33:00,200718_10,25,前橋駅,1,0,1
年末・年始_10時57分_系統268,10:57:00,10:57:00,200718_02,1,渋川駅,0,1,1
年末・年始_10時57分_系統268,10:58:00,10:58:00,200998_01,2,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:00:00,11:00:00,201081_01,3,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:02:00,11:02:00,200703_01,4,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:03:00,11:03:00,200702_01,5,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:04:00,11:04:00,200455_01,6,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:05:00,11:05:00,200379_01,7,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:06:00,11:06:00,201015_01,8,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:07:00,11:07:00,200262_01,9,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:08:00,11:08:00,200142_01,10,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:09:00,11:09:00,200141_01,11,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:10:00,11:10:00,200542_01,12,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:12:00,11:12:00,201071_01,13,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:14:00,11:14:00,200348_01,14,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:15:00,11:15:00,200343_01,15,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:16:00,11:16:00,200722_01,16,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:18:00,11:18:00,200189_01,17,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:20:00,11:20:00,201056_01,18,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:21:00,11:21:00,200872_01,19,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:22:00,11:22:00,200981_01,20,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:23:00,11:23:00,201100_01,21,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:24:00,11:24:00,200153_01,22,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:24:00,11:24:00,200395_01,23,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:25:00,11:25:00,200895_01,24,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:26:00,11:26:00,200985_01,25,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:26:00,11:26:00,200987_01,26,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:27:00,11:27:00,200519_01,27,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:28:00,11:28:00,200017_01,28,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:29:00,11:29:00,200506_01,29,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:31:00,11:31:00,200827_01,30,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:33:00,11:33:00,200730_01,31,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:34:00,11:34:00,200768_01,32,渋川駅,0,0,1
年末・年始_10時57分_系統268,11:37:00,11:37:00,200463_10,33,渋川駅,1,0,1
年末・年始_11時00分_系統663,11:00:00,11:00:00,200463_01,1,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,1,1
年末・年始_11時00分_系統663,11:01:00,11:01:00,200768_02,2,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:02:00,11:02:00,200730_02,3,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:04:00,11:04:00,200827_02,4,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:05:00,11:05:00,200506_02,5,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:06:00,11:06:00,200017_02,6,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:07:00,11:07:00,200519_02,7,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:07:00,11:07:00,200987_02,8,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:09:00,11:09:00,200985_02,9,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:10:00,11:10:00,200895_02,10,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:11:00,11:11:00,200395_02,11,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:11:00,11:11:00,200153_02,12,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:12:00,11:12:00,201100_02,13,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:13:00,11:13:00,200981_02,14,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:14:00,11:14:00,200872_02,15,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:15:00,11:15:00,201056_02,16,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:17:00,11:17:00,200189_02,17,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:20:00,11:20:00,200273_01,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:22:00,11:22:00,200722_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:23:00,11:23:00,200343_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:24:00,11:24:00,200348_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:26:00,11:26:00,201071_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:28:00,11:28:00,200542_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:30:00,11:30:00,200141_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:31:00,11:31:00,200142_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:33:00,11:33:00,200262_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:34:00,11:34:00,201015_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:35:00,11:35:00,200379_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:36:00,11:36:00,200455_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:37:00,11:37:00,200702_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:38:00,11:38:00,200703_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:40:00,11:40:00,201081_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:42:00,11:42:00,200998_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_11時00分_系統663,11:45:00,11:45:00,200718_04,34,けやきウォーク前橋,0,0,1
年末・年始_11時00分_系統663,11:47:00,11:47:00,200108_01,35,けやきウォーク前橋,0,0,1
年末・年始_11時00分_系統663,11:48:00,11:48:00,200932_01,36,けやきウォーク前橋,0,0,1
年末・年始_11時00分_系統663,11:49:00,11:49:00,200668_01,37,けやきウォーク前橋,0,0,1
年末・年始_11時00分_系統663,11:53:00,11:53:00,200022_01,38,けやきウォーク前橋,1,0,1
年末・年始_11時10分_系統584,11:10:00,11:10:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
年末・年始_11時10分_系統584,11:11:00,11:11:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:13:00,11:13:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:15:00,11:15:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:16:00,11:16:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:18:00,11:18:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:19:00,11:19:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:20:00,11:20:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:21:00,11:21:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:22:00,11:22:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:24:00,11:24:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:25:00,11:25:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:26:00,11:26:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:27:00,11:27:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:28:00,11:28:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:30:00,11:30:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:31:00,11:31:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:32:00,11:32:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_11時10分_系統584,11:34:00,11:34:00,200927_01,19,群馬大学荒牧,0,0,1
年末・年始_11時10分_系統584,11:35:00,11:35:00,201185_01,20,群馬大学荒牧,0,0,1
年末・年始_11時10分_系統584,11:39:00,11:39:00,200348_01,21,群馬大学荒牧,0,0,1
年末・年始_11時10分_系統584,11:40:00,11:40:00,200343_01,22,群馬大学荒牧,0,0,1
年末・年始_11時10分_系統584,11:41:00,11:41:00,200722_01,23,群馬大学荒牧,0,0,1
年末・年始_11時10分_系統584,11:44:00,11:44:00,200273_01,24,群馬大学荒牧,1,0,1
年末・年始_11時17分_系統261,11:17:00,11:17:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
年末・年始_11時17分_系統261,11:18:00,11:18:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_11時17分_系統261,11:19:00,11:19:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_11時17分_系統261,11:20:00,11:20:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_11時17分_系統261,11:21:00,11:21:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_11時17分_系統261,11:22:00,11:22:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_11時17分_系統261,11:23:00,11:23:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_11時17分_系統261,11:24:00,11:24:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_11時17分_系統261,11:25:00,11:25:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_11時17分_系統261,11:30:00,11:30:00,200463_01,10,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:31:00,11:31:00,200768_02,11,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:32:00,11:32:00,200730_02,12,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:34:00,11:34:00,200827_02,13,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:35:00,11:35:00,200506_02,14,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:36:00,11:36:00,200017_02,15,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:37:00,11:37:00,200519_02,16,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:37:00,11:37:00,200987_02,17,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:39:00,11:39:00,200985_02,18,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:40:00,11:40:00,200895_02,19,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:41:00,11:41:00,200395_02,20,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:41:00,11:41:00,200153_02,21,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:42:00,11:42:00,201100_02,22,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:43:00,11:43:00,200981_02,23,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:44:00,11:44:00,200872_02,24,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:45:00,11:45:00,201056_02,25,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:47:00,11:47:00,200189_02,26,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:49:00,11:49:00,200722_02,27,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:50:00,11:50:00,200343_02,28,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:51:00,11:51:00,200348_02,29,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:53:00,11:53:00,201071_02,30,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:55:00,11:55:00,200542_02,31,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:57:00,11:57:00,200141_02,32,前橋駅,0,0,1
年末・年始_11時17分_系統261,11:58:00,11:58:00,200142_02,33,前橋駅,0,0,1
年末・年始_11時17分_系統261,12:00:00,12:00:00,200262_02,34,前橋駅,0,0,1
年末・年始_11時17分_系統261,12:01:00,12:01:00,201015_02,35,前橋駅,0,0,1
年末・年始_11時17分_系統261,12:02:00,12:02:00,200379_02,36,前橋駅,0,0,1
年末・年始_11時17分_系統261,12:03:00,12:03:00,200455_02,37,前橋駅,0,0,1
年末・年始_11時17分_系統261,12:04:00,12:04:00,200702_02,38,前橋駅,0,0,1
年末・年始_11時17分_系統261,12:05:00,12:05:00,200703_02,39,前橋駅,0,0,1
年末・年始_11時17分_系統261,12:07:00,12:07:00,201081_02,40,前橋駅,0,0,1
年末・年始_11時17分_系統261,12:09:00,12:09:00,200998_02,41,前橋駅,0,0,1
年末・年始_11時17分_系統261,12:12:00,12:12:00,200718_10,42,前橋駅,1,0,1
年末・年始_11時30分_系統266,11:30:00,11:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
年末・年始_11時30分_系統266,11:31:00,11:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:33:00,11:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:35:00,11:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:36:00,11:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:38:00,11:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:39:00,11:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:40:00,11:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:41:00,11:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:42:00,11:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:43:00,11:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:44:00,11:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:46:00,11:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:48:00,11:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:49:00,11:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:50:00,11:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_11時30分_系統266,11:52:00,11:52:00,200273_01,17,渋川駅,0,0,1
年末・年始_11時30分_系統266,11:55:00,11:55:00,200189_01,18,渋川駅,0,0,1
年末・年始_11時30分_系統266,11:57:00,11:57:00,201056_01,19,渋川駅,0,0,1
年末・年始_11時30分_系統266,11:58:00,11:58:00,200872_01,20,渋川駅,0,0,1
年末・年始_11時30分_系統266,11:59:00,11:59:00,200981_01,21,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:00:00,12:00:00,201100_01,22,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:01:00,12:01:00,200153_01,23,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:01:00,12:01:00,200395_01,24,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:02:00,12:02:00,200895_01,25,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:03:00,12:03:00,200985_01,26,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:03:00,12:03:00,200987_01,27,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:04:00,12:04:00,200519_01,28,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:05:00,12:05:00,200017_01,29,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:06:00,12:06:00,200506_01,30,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:08:00,12:08:00,200827_01,31,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:10:00,12:10:00,200730_01,32,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:11:00,12:11:00,200768_01,33,渋川駅,0,0,1
年末・年始_11時30分_系統266,12:14:00,12:14:00,200463_10,34,渋川駅,1,0,1
年末・年始_11時57分_系統262,11:57:00,11:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
年末・年始_11時57分_系統262,11:58:00,11:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:00:00,12:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:02:00,12:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:03:00,12:03:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:05:00,12:05:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:06:00,12:06:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:07:00,12:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:08:00,12:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:09:00,12:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:10:00,12:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:11:00,12:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:13:00,12:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:15:00,12:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:16:00,12:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:17:00,12:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:20:00,12:20:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:22:00,12:22:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:23:00,12:23:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:24:00,12:24:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:25:00,12:25:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:26:00,12:26:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:26:00,12:26:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:27:00,12:27:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:28:00,12:28:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:28:00,12:28:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:29:00,12:29:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:30:00,12:30:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:31:00,12:31:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:33:00,12:33:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:35:00,12:35:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:36:00,12:36:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_11時57分_系統262,12:37:00,12:37:00,200463_06,33,渋川市内循環,0,0,1
年末・年始_11時57分_系統262,12:38:00,12:38:00,200468_01,34,渋川市内循環,0,0,1
年末・年始_11時57分_系統262,12:40:00,12:40:00,200466_01,35,渋川市内循環,0,0,1
年末・年始_11時57分_系統262,12:41:00,12:41:00,200704_01,36,渋川市内循環,0,0,1
年末・年始_11時57分_系統262,12:42:00,12:42:00,200476_02,37,渋川市内循環,0,0,1
年末・年始_11時57分_系統262,12:43:00,12:43:00,200477_02,38,渋川市内循環,0,0,1
年末・年始_11時57分_系統262,12:44:00,12:44:00,200430_02,39,渋川市内循環,0,0,1
年末・年始_11時57分_系統262,12:45:00,12:45:00,200007_02,40,渋川市内循環,0,0,1
年末・年始_11時57分_系統262,12:50:00,12:50:00,210463_10,41,渋川市内循環,1,0,1
年末・年始_11時58分_系統587,11:58:00,11:58:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
年末・年始_11時58分_系統587,12:00:00,12:00:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
年末・年始_11時58分_系統587,12:01:00,12:01:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
年末・年始_11時58分_系統587,12:02:00,12:02:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
年末・年始_11時58分_系統587,12:04:00,12:04:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
年末・年始_11時58分_系統587,12:06:00,12:06:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
年末・年始_11時58分_系統587,12:08:00,12:08:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
年末・年始_11時58分_系統587,12:10:00,12:10:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
年末・年始_11時58分_系統587,12:11:00,12:11:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
年末・年始_11時58分_系統587,12:13:00,12:13:00,200261_01,10,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:14:00,12:14:00,200503_02,11,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:17:00,12:17:00,200262_02,12,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:18:00,12:18:00,201015_02,13,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:19:00,12:19:00,200379_02,14,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:20:00,12:20:00,200455_02,15,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:21:00,12:21:00,200702_02,16,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:22:00,12:22:00,200703_02,17,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:24:00,12:24:00,201081_02,18,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:26:00,12:26:00,200998_02,19,前橋駅,0,0,1
年末・年始_11時58分_系統587,12:29:00,12:29:00,200718_10,20,前橋駅,1,0,1
年末・年始_12時00分_系統663,12:00:00,12:00:00,200463_01,1,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,1,1
年末・年始_12時00分_系統663,12:01:00,12:01:00,200768_02,2,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:02:00,12:02:00,200730_02,3,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:04:00,12:04:00,200827_02,4,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:05:00,12:05:00,200506_02,5,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:06:00,12:06:00,200017_02,6,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:07:00,12:07:00,200519_02,7,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:07:00,12:07:00,200987_02,8,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:09:00,12:09:00,200985_02,9,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:10:00,12:10:00,200895_02,10,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:11:00,12:11:00,200395_02,11,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:11:00,12:11:00,200153_02,12,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:12:00,12:12:00,201100_02,13,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:13:00,12:13:00,200981_02,14,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:14:00,12:14:00,200872_02,15,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:15:00,12:15:00,201056_02,16,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:17:00,12:17:00,200189_02,17,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:20:00,12:20:00,200273_01,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:22:00,12:22:00,200722_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:23:00,12:23:00,200343_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:24:00,12:24:00,200348_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:26:00,12:26:00,201071_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:28:00,12:28:00,200542_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:30:00,12:30:00,200141_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:31:00,12:31:00,200142_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:33:00,12:33:00,200262_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:34:00,12:34:00,201015_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:35:00,12:35:00,200379_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:36:00,12:36:00,200455_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:37:00,12:37:00,200702_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:38:00,12:38:00,200703_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:40:00,12:40:00,201081_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:42:00,12:42:00,200998_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時00分_系統663,12:45:00,12:45:00,200718_04,34,けやきウォーク前橋,0,0,1
年末・年始_12時00分_系統663,12:47:00,12:47:00,200108_01,35,けやきウォーク前橋,0,0,1
年末・年始_12時00分_系統663,12:48:00,12:48:00,200932_01,36,けやきウォーク前橋,0,0,1
年末・年始_12時00分_系統663,12:49:00,12:49:00,200668_01,37,けやきウォーク前橋,0,0,1
年末・年始_12時00分_系統663,12:53:00,12:53:00,200022_01,38,けやきウォーク前橋,1,0,1
年末・年始_12時10分_系統644,12:10:00,12:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
年末・年始_12時10分_系統644,12:11:00,12:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_12時10分_系統644,12:13:00,12:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_12時10分_系統644,12:15:00,12:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_12時10分_系統644,12:16:00,12:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_12時10分_系統644,12:17:00,12:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_12時10分_系統644,12:18:00,12:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_12時10分_系統644,12:19:00,12:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_12時10分_系統644,12:20:00,12:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_12時10分_系統644,12:21:00,12:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_12時10分_系統644,12:23:00,12:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:24:00,12:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:25:00,12:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:26:00,12:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:27:00,12:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:29:00,12:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:31:00,12:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:32:00,12:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:33:00,12:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:35:00,12:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
年末・年始_12時10分_系統644,12:42:00,12:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
年末・年始_12時30分_系統267,12:30:00,12:30:00,200463_01,1,前橋駅,0,1,1
年末・年始_12時30分_系統267,12:31:00,12:31:00,200768_02,2,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:32:00,12:32:00,200730_02,3,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:34:00,12:34:00,200827_02,4,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:35:00,12:35:00,200506_02,5,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:36:00,12:36:00,200017_02,6,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:37:00,12:37:00,200519_02,7,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:37:00,12:37:00,200987_02,8,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:39:00,12:39:00,200985_02,9,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:40:00,12:40:00,200895_02,10,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:41:00,12:41:00,200395_02,11,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:41:00,12:41:00,200153_02,12,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:42:00,12:42:00,201100_02,13,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:43:00,12:43:00,200981_02,14,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:44:00,12:44:00,200872_02,15,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:45:00,12:45:00,201056_02,16,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:47:00,12:47:00,200189_02,17,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:48:00,12:48:00,200722_02,18,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:49:00,12:49:00,200343_02,19,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:50:00,12:50:00,200348_02,20,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:52:00,12:52:00,201071_02,21,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:54:00,12:54:00,200542_02,22,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:56:00,12:56:00,200141_02,23,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:57:00,12:57:00,200142_02,24,前橋駅,0,0,1
年末・年始_12時30分_系統267,12:59:00,12:59:00,200262_02,25,前橋駅,0,0,1
年末・年始_12時30分_系統267,13:00:00,13:00:00,201015_02,26,前橋駅,0,0,1
年末・年始_12時30分_系統267,13:01:00,13:01:00,200379_02,27,前橋駅,0,0,1
年末・年始_12時30分_系統267,13:02:00,13:02:00,200455_02,28,前橋駅,0,0,1
年末・年始_12時30分_系統267,13:03:00,13:03:00,200702_02,29,前橋駅,0,0,1
年末・年始_12時30分_系統267,13:04:00,13:04:00,200703_02,30,前橋駅,0,0,1
年末・年始_12時30分_系統267,13:06:00,13:06:00,201081_02,31,前橋駅,0,0,1
年末・年始_12時30分_系統267,13:08:00,13:08:00,200998_02,32,前橋駅,0,0,1
年末・年始_12時30分_系統267,13:11:00,13:11:00,200718_10,33,前橋駅,1,0,1
年末・年始_12時30分_系統266,12:30:00,12:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
年末・年始_12時30分_系統266,12:31:00,12:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:33:00,12:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:35:00,12:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:36:00,12:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:38:00,12:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:39:00,12:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:40:00,12:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:41:00,12:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:42:00,12:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:43:00,12:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:44:00,12:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:46:00,12:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:48:00,12:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:49:00,12:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:50:00,12:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_12時30分_系統266,12:52:00,12:52:00,200273_01,17,渋川駅,0,0,1
年末・年始_12時30分_系統266,12:55:00,12:55:00,200189_01,18,渋川駅,0,0,1
年末・年始_12時30分_系統266,12:57:00,12:57:00,201056_01,19,渋川駅,0,0,1
年末・年始_12時30分_系統266,12:58:00,12:58:00,200872_01,20,渋川駅,0,0,1
年末・年始_12時30分_系統266,12:59:00,12:59:00,200981_01,21,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:00:00,13:00:00,201100_01,22,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:01:00,13:01:00,200153_01,23,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:01:00,13:01:00,200395_01,24,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:02:00,13:02:00,200895_01,25,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:03:00,13:03:00,200985_01,26,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:03:00,13:03:00,200987_01,27,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:04:00,13:04:00,200519_01,28,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:05:00,13:05:00,200017_01,29,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:06:00,13:06:00,200506_01,30,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:08:00,13:08:00,200827_01,31,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:10:00,13:10:00,200730_01,32,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:11:00,13:11:00,200768_01,33,渋川駅,0,0,1
年末・年始_12時30分_系統266,13:14:00,13:14:00,200463_10,34,渋川駅,1,0,1
年末・年始_12時47分_系統662,12:47:00,12:47:00,200022_01,1,渋川駅（前橋駅・渋川市内循環 経由）,0,1,1
年末・年始_12時47分_系統662,12:50:00,12:50:00,200668_02,2,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,12:51:00,12:51:00,200932_02,3,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,12:52:00,12:52:00,200108_02,4,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,12:57:00,12:57:00,200718_02,5,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,12:58:00,12:58:00,200998_01,6,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:00:00,13:00:00,201081_01,7,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:02:00,13:02:00,200703_01,8,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:03:00,13:03:00,200702_01,9,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:05:00,13:05:00,200455_01,10,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:06:00,13:06:00,200379_01,11,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:07:00,13:07:00,201015_01,12,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:08:00,13:08:00,200262_01,13,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:09:00,13:09:00,200142_01,14,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:10:00,13:10:00,200141_01,15,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:11:00,13:11:00,200542_01,16,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:13:00,13:13:00,201071_01,17,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:15:00,13:15:00,200348_01,18,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:16:00,13:16:00,200343_01,19,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:17:00,13:17:00,200722_01,20,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:19:00,13:19:00,200189_01,21,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:21:00,13:21:00,201056_01,22,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:22:00,13:22:00,200872_01,23,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:23:00,13:23:00,200981_01,24,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:24:00,13:24:00,201100_01,25,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:25:00,13:25:00,200153_01,26,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:25:00,13:25:00,200395_01,27,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:26:00,13:26:00,200895_01,28,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:27:00,13:27:00,200985_01,29,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:27:00,13:27:00,200987_01,30,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:28:00,13:28:00,200519_01,31,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:29:00,13:29:00,200017_01,32,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:30:00,13:30:00,200506_01,33,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:32:00,13:32:00,200827_01,34,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:34:00,13:34:00,200730_01,35,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:35:00,13:35:00,200768_01,36,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_12時47分_系統662,13:36:00,13:36:00,200463_06,37,渋川市内循環,0,0,1
年末・年始_12時47分_系統662,13:37:00,13:37:00,200468_01,38,渋川市内循環,0,0,1
年末・年始_12時47分_系統662,13:39:00,13:39:00,200466_01,39,渋川市内循環,0,0,1
年末・年始_12時47分_系統662,13:40:00,13:40:00,200704_01,40,渋川市内循環,0,0,1
年末・年始_12時47分_系統662,13:41:00,13:41:00,200476_02,41,渋川市内循環,0,0,1
年末・年始_12時47分_系統662,13:42:00,13:42:00,200477_02,42,渋川市内循環,0,0,1
年末・年始_12時47分_系統662,13:43:00,13:43:00,200430_02,43,渋川市内循環,0,0,1
年末・年始_12時47分_系統662,13:44:00,13:44:00,200007_02,44,渋川市内循環,0,0,1
年末・年始_12時47分_系統662,13:49:00,13:49:00,210463_10,45,渋川市内循環,1,0,1
年末・年始_12時50分_系統645,12:50:00,12:50:00,201440_01,1,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,1,1
年末・年始_12時50分_系統645,12:55:00,12:55:00,200189_02,2,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,12:57:00,12:57:00,200722_02,3,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,12:58:00,12:58:00,200343_02,4,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,12:59:00,12:59:00,200348_02,5,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:02:00,13:02:00,201185_02,6,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:05:00,13:05:00,200927_01,7,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:05:00,13:05:00,200800_02,8,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:06:00,13:06:00,200928_02,9,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:08:00,13:08:00,201071_02,10,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:10:00,13:10:00,200542_02,11,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:12:00,13:12:00,200141_02,12,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:14:00,13:14:00,200142_02,13,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:15:00,13:15:00,200503_01,14,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:17:00,13:17:00,200261_01,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:18:00,13:18:00,200503_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:21:00,13:21:00,200262_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:22:00,13:22:00,201015_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:23:00,13:23:00,200379_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:24:00,13:24:00,200455_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:25:00,13:25:00,200702_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:26:00,13:26:00,200703_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:28:00,13:28:00,201081_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:30:00,13:30:00,200998_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_12時50分_系統645,13:33:00,13:33:00,200718_04,25,けやきウォーク前橋,0,0,1
年末・年始_12時50分_系統645,13:35:00,13:35:00,200108_01,26,けやきウォーク前橋,0,0,1
年末・年始_12時50分_系統645,13:36:00,13:36:00,200932_01,27,けやきウォーク前橋,0,0,1
年末・年始_12時50分_系統645,13:37:00,13:37:00,200668_01,28,けやきウォーク前橋,0,0,1
年末・年始_12時50分_系統645,13:41:00,13:41:00,200022_01,29,けやきウォーク前橋,1,0,1
年末・年始_12時52分_系統261,12:52:00,12:52:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
年末・年始_12時52分_系統261,12:53:00,12:53:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_12時52分_系統261,12:54:00,12:54:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_12時52分_系統261,12:55:00,12:55:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_12時52分_系統261,12:56:00,12:56:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_12時52分_系統261,12:57:00,12:57:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_12時52分_系統261,12:58:00,12:58:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_12時52分_系統261,12:59:00,12:59:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_12時52分_系統261,13:00:00,13:00:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_12時52分_系統261,13:05:00,13:05:00,200463_01,10,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:06:00,13:06:00,200768_02,11,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:07:00,13:07:00,200730_02,12,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:09:00,13:09:00,200827_02,13,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:10:00,13:10:00,200506_02,14,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:11:00,13:11:00,200017_02,15,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:12:00,13:12:00,200519_02,16,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:12:00,13:12:00,200987_02,17,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:14:00,13:14:00,200985_02,18,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:15:00,13:15:00,200895_02,19,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:16:00,13:16:00,200395_02,20,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:16:00,13:16:00,200153_02,21,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:17:00,13:17:00,201100_02,22,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:18:00,13:18:00,200981_02,23,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:19:00,13:19:00,200872_02,24,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:20:00,13:20:00,201056_02,25,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:22:00,13:22:00,200189_02,26,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:23:00,13:23:00,200722_02,27,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:24:00,13:24:00,200343_02,28,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:25:00,13:25:00,200348_02,29,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:27:00,13:27:00,201071_02,30,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:29:00,13:29:00,200542_02,31,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:31:00,13:31:00,200141_02,32,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:32:00,13:32:00,200142_02,33,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:34:00,13:34:00,200262_02,34,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:35:00,13:35:00,201015_02,35,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:36:00,13:36:00,200379_02,36,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:37:00,13:37:00,200455_02,37,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:38:00,13:38:00,200702_02,38,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:39:00,13:39:00,200703_02,39,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:41:00,13:41:00,201081_02,40,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:43:00,13:43:00,200998_02,41,前橋駅,0,0,1
年末・年始_12時52分_系統261,13:46:00,13:46:00,200718_10,42,前橋駅,1,0,1
年末・年始_13時10分_系統584,13:10:00,13:10:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
年末・年始_13時10分_系統584,13:11:00,13:11:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:13:00,13:13:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:15:00,13:15:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:16:00,13:16:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:18:00,13:18:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:19:00,13:19:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:20:00,13:20:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:21:00,13:21:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:22:00,13:22:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:24:00,13:24:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:25:00,13:25:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:26:00,13:26:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:27:00,13:27:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:28:00,13:28:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:30:00,13:30:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:31:00,13:31:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:32:00,13:32:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_13時10分_系統584,13:34:00,13:34:00,200927_01,19,群馬大学荒牧,0,0,1
年末・年始_13時10分_系統584,13:35:00,13:35:00,201185_01,20,群馬大学荒牧,0,0,1
年末・年始_13時10分_系統584,13:39:00,13:39:00,200348_01,21,群馬大学荒牧,0,0,1
年末・年始_13時10分_系統584,13:40:00,13:40:00,200343_01,22,群馬大学荒牧,0,0,1
年末・年始_13時10分_系統584,13:41:00,13:41:00,200722_01,23,群馬大学荒牧,0,0,1
年末・年始_13時10分_系統584,13:44:00,13:44:00,200273_01,24,群馬大学荒牧,1,0,1
年末・年始_13時30分_系統267,13:30:00,13:30:00,200463_01,1,前橋駅,0,1,1
年末・年始_13時30分_系統267,13:31:00,13:31:00,200768_02,2,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:32:00,13:32:00,200730_02,3,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:34:00,13:34:00,200827_02,4,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:35:00,13:35:00,200506_02,5,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:36:00,13:36:00,200017_02,6,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:37:00,13:37:00,200519_02,7,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:37:00,13:37:00,200987_02,8,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:39:00,13:39:00,200985_02,9,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:40:00,13:40:00,200895_02,10,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:41:00,13:41:00,200395_02,11,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:41:00,13:41:00,200153_02,12,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:42:00,13:42:00,201100_02,13,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:43:00,13:43:00,200981_02,14,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:44:00,13:44:00,200872_02,15,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:45:00,13:45:00,201056_02,16,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:47:00,13:47:00,200189_02,17,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:48:00,13:48:00,200722_02,18,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:49:00,13:49:00,200343_02,19,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:50:00,13:50:00,200348_02,20,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:52:00,13:52:00,201071_02,21,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:54:00,13:54:00,200542_02,22,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:56:00,13:56:00,200141_02,23,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:57:00,13:57:00,200142_02,24,前橋駅,0,0,1
年末・年始_13時30分_系統267,13:59:00,13:59:00,200262_02,25,前橋駅,0,0,1
年末・年始_13時30分_系統267,14:00:00,14:00:00,201015_02,26,前橋駅,0,0,1
年末・年始_13時30分_系統267,14:01:00,14:01:00,200379_02,27,前橋駅,0,0,1
年末・年始_13時30分_系統267,14:02:00,14:02:00,200455_02,28,前橋駅,0,0,1
年末・年始_13時30分_系統267,14:03:00,14:03:00,200702_02,29,前橋駅,0,0,1
年末・年始_13時30分_系統267,14:04:00,14:04:00,200703_02,30,前橋駅,0,0,1
年末・年始_13時30分_系統267,14:06:00,14:06:00,201081_02,31,前橋駅,0,0,1
年末・年始_13時30分_系統267,14:08:00,14:08:00,200998_02,32,前橋駅,0,0,1
年末・年始_13時30分_系統267,14:11:00,14:11:00,200718_10,33,前橋駅,1,0,1
年末・年始_13時30分_系統262,13:30:00,13:30:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
年末・年始_13時30分_系統262,13:31:00,13:31:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:33:00,13:33:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:35:00,13:35:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:36:00,13:36:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:38:00,13:38:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:39:00,13:39:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:40:00,13:40:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:41:00,13:41:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:42:00,13:42:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:43:00,13:43:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:44:00,13:44:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:46:00,13:46:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:48:00,13:48:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:49:00,13:49:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:50:00,13:50:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:52:00,13:52:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:54:00,13:54:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:55:00,13:55:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:56:00,13:56:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:57:00,13:57:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:58:00,13:58:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:58:00,13:58:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,13:59:00,13:59:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,14:00:00,14:00:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,14:00:00,14:00:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,14:01:00,14:01:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,14:02:00,14:02:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,14:03:00,14:03:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,14:05:00,14:05:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,14:07:00,14:07:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,14:08:00,14:08:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_13時30分_系統262,14:09:00,14:09:00,200463_06,33,渋川市内循環,0,0,1
年末・年始_13時30分_系統262,14:10:00,14:10:00,200468_01,34,渋川市内循環,0,0,1
年末・年始_13時30分_系統262,14:12:00,14:12:00,200466_01,35,渋川市内循環,0,0,1
年末・年始_13時30分_系統262,14:13:00,14:13:00,200704_01,36,渋川市内循環,0,0,1
年末・年始_13時30分_系統262,14:14:00,14:14:00,200476_02,37,渋川市内循環,0,0,1
年末・年始_13時30分_系統262,14:15:00,14:15:00,200477_02,38,渋川市内循環,0,0,1
年末・年始_13時30分_系統262,14:16:00,14:16:00,200430_02,39,渋川市内循環,0,0,1
年末・年始_13時30分_系統262,14:17:00,14:17:00,200007_02,40,渋川市内循環,0,0,1
年末・年始_13時30分_系統262,14:22:00,14:22:00,210463_10,41,渋川市内循環,1,0,1
年末・年始_13時55分_系統587,13:55:00,13:55:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
年末・年始_13時55分_系統587,13:57:00,13:57:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
年末・年始_13時55分_系統587,13:58:00,13:58:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
年末・年始_13時55分_系統587,13:59:00,13:59:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
年末・年始_13時55分_系統587,14:01:00,14:01:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
年末・年始_13時55分_系統587,14:03:00,14:03:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
年末・年始_13時55分_系統587,14:05:00,14:05:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
年末・年始_13時55分_系統587,14:07:00,14:07:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
年末・年始_13時55分_系統587,14:08:00,14:08:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
年末・年始_13時55分_系統587,14:10:00,14:10:00,200261_01,10,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:11:00,14:11:00,200503_02,11,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:14:00,14:14:00,200262_02,12,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:15:00,14:15:00,201015_02,13,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:16:00,14:16:00,200379_02,14,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:17:00,14:17:00,200455_02,15,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:18:00,14:18:00,200702_02,16,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:19:00,14:19:00,200703_02,17,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:21:00,14:21:00,201081_02,18,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:23:00,14:23:00,200998_02,19,前橋駅,0,0,1
年末・年始_13時55分_系統587,14:26:00,14:26:00,200718_10,20,前橋駅,1,0,1
年末・年始_13時57分_系統268,13:57:00,13:57:00,200718_02,1,渋川駅,0,1,1
年末・年始_13時57分_系統268,13:58:00,13:58:00,200998_01,2,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:00:00,14:00:00,201081_01,3,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:02:00,14:02:00,200703_01,4,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:03:00,14:03:00,200702_01,5,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:04:00,14:04:00,200455_01,6,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:05:00,14:05:00,200379_01,7,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:06:00,14:06:00,201015_01,8,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:07:00,14:07:00,200262_01,9,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:08:00,14:08:00,200142_01,10,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:09:00,14:09:00,200141_01,11,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:10:00,14:10:00,200542_01,12,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:12:00,14:12:00,201071_01,13,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:14:00,14:14:00,200348_01,14,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:15:00,14:15:00,200343_01,15,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:16:00,14:16:00,200722_01,16,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:18:00,14:18:00,200189_01,17,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:20:00,14:20:00,201056_01,18,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:21:00,14:21:00,200872_01,19,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:22:00,14:22:00,200981_01,20,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:23:00,14:23:00,201100_01,21,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:24:00,14:24:00,200153_01,22,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:24:00,14:24:00,200395_01,23,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:25:00,14:25:00,200895_01,24,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:26:00,14:26:00,200985_01,25,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:26:00,14:26:00,200987_01,26,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:27:00,14:27:00,200519_01,27,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:28:00,14:28:00,200017_01,28,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:29:00,14:29:00,200506_01,29,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:31:00,14:31:00,200827_01,30,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:33:00,14:33:00,200730_01,31,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:34:00,14:34:00,200768_01,32,渋川駅,0,0,1
年末・年始_13時57分_系統268,14:37:00,14:37:00,200463_10,33,渋川駅,1,0,1
年末・年始_14時00分_系統265,14:00:00,14:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
年末・年始_14時00分_系統265,14:01:00,14:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:02:00,14:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:04:00,14:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:05:00,14:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:06:00,14:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:07:00,14:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:07:00,14:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:09:00,14:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:10:00,14:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:11:00,14:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:11:00,14:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:12:00,14:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:13:00,14:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:14:00,14:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:15:00,14:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:17:00,14:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時00分_系統265,14:20:00,14:20:00,200273_01,18,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:22:00,14:22:00,200722_02,19,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:23:00,14:23:00,200343_02,20,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:24:00,14:24:00,200348_02,21,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:26:00,14:26:00,201071_02,22,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:28:00,14:28:00,200542_02,23,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:30:00,14:30:00,200141_02,24,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:31:00,14:31:00,200142_02,25,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:33:00,14:33:00,200262_02,26,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:34:00,14:34:00,201015_02,27,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:35:00,14:35:00,200379_02,28,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:36:00,14:36:00,200455_02,29,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:37:00,14:37:00,200702_02,30,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:38:00,14:38:00,200703_02,31,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:40:00,14:40:00,201081_02,32,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:42:00,14:42:00,200998_02,33,前橋駅,0,0,1
年末・年始_14時00分_系統265,14:45:00,14:45:00,200718_10,34,前橋駅,1,0,1
年末・年始_14時10分_系統644,14:10:00,14:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
年末・年始_14時10分_系統644,14:11:00,14:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_14時10分_系統644,14:13:00,14:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_14時10分_系統644,14:15:00,14:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_14時10分_系統644,14:16:00,14:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_14時10分_系統644,14:17:00,14:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_14時10分_系統644,14:18:00,14:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_14時10分_系統644,14:19:00,14:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_14時10分_系統644,14:20:00,14:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_14時10分_系統644,14:21:00,14:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
年末・年始_14時10分_系統644,14:23:00,14:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:24:00,14:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:25:00,14:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:26:00,14:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:27:00,14:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:29:00,14:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:31:00,14:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:32:00,14:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:33:00,14:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:35:00,14:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
年末・年始_14時10分_系統644,14:42:00,14:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
年末・年始_14時20分_系統661,14:20:00,14:20:00,210463_05,1,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,1,1
年末・年始_14時20分_系統661,14:21:00,14:21:00,200007_01,2,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:22:00,14:22:00,200430_01,3,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:23:00,14:23:00,200477_01,4,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:24:00,14:24:00,200476_01,5,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:25:00,14:25:00,200704_02,6,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:26:00,14:26:00,200467_01,7,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:27:00,14:27:00,200466_02,8,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:28:00,14:28:00,200468_02,9,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:33:00,14:33:00,200463_01,10,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:34:00,14:34:00,200768_02,11,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:35:00,14:35:00,200730_02,12,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:37:00,14:37:00,200827_02,13,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:38:00,14:38:00,200506_02,14,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:39:00,14:39:00,200017_02,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:40:00,14:40:00,200519_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:40:00,14:40:00,200987_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:42:00,14:42:00,200985_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:43:00,14:43:00,200895_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:44:00,14:44:00,200395_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:44:00,14:44:00,200153_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:45:00,14:45:00,201100_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:46:00,14:46:00,200981_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:47:00,14:47:00,200872_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:48:00,14:48:00,201056_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:50:00,14:50:00,200189_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:52:00,14:52:00,200722_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:53:00,14:53:00,200343_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:54:00,14:54:00,200348_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:56:00,14:56:00,201071_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,14:58:00,14:58:00,200542_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:00:00,15:00:00,200141_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:01:00,15:01:00,200142_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:03:00,15:03:00,200262_02,34,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:04:00,15:04:00,201015_02,35,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:05:00,15:05:00,200379_02,36,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:06:00,15:06:00,200455_02,37,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:07:00,15:07:00,200702_02,38,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:08:00,15:08:00,200703_02,39,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:10:00,15:10:00,201081_02,40,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:12:00,15:12:00,200998_02,41,けやきウォーク前橋（前橋駅 経由）,0,0,1
年末・年始_14時20分_系統661,15:15:00,15:15:00,200718_04,42,けやきウォーク前橋,0,0,1
年末・年始_14時20分_系統661,15:17:00,15:17:00,200108_01,43,けやきウォーク前橋,0,0,1
年末・年始_14時20分_系統661,15:18:00,15:18:00,200932_01,44,けやきウォーク前橋,0,0,1
年末・年始_14時20分_系統661,15:19:00,15:19:00,200668_01,45,けやきウォーク前橋,0,0,1
年末・年始_14時20分_系統661,15:23:00,15:23:00,200022_01,46,けやきウォーク前橋,1,0,1
年末・年始_14時30分_系統266,14:30:00,14:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
年末・年始_14時30分_系統266,14:31:00,14:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:33:00,14:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:35:00,14:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:36:00,14:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:38:00,14:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:39:00,14:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:40:00,14:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:41:00,14:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:42:00,14:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:43:00,14:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:44:00,14:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:46:00,14:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:48:00,14:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:49:00,14:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:50:00,14:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_14時30分_系統266,14:52:00,14:52:00,200273_01,17,渋川駅,0,0,1
年末・年始_14時30分_系統266,14:55:00,14:55:00,200189_01,18,渋川駅,0,0,1
年末・年始_14時30分_系統266,14:57:00,14:57:00,201056_01,19,渋川駅,0,0,1
年末・年始_14時30分_系統266,14:58:00,14:58:00,200872_01,20,渋川駅,0,0,1
年末・年始_14時30分_系統266,14:59:00,14:59:00,200981_01,21,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:00:00,15:00:00,201100_01,22,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:01:00,15:01:00,200153_01,23,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:01:00,15:01:00,200395_01,24,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:02:00,15:02:00,200895_01,25,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:03:00,15:03:00,200985_01,26,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:03:00,15:03:00,200987_01,27,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:04:00,15:04:00,200519_01,28,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:05:00,15:05:00,200017_01,29,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:06:00,15:06:00,200506_01,30,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:08:00,15:08:00,200827_01,31,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:10:00,15:10:00,200730_01,32,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:11:00,15:11:00,200768_01,33,渋川駅,0,0,1
年末・年始_14時30分_系統266,15:14:00,15:14:00,200463_10,34,渋川駅,1,0,1
年末・年始_14時50分_系統643,14:50:00,14:50:00,201440_01,1,前橋駅（南橘団地・群大病院 経由）,0,1,1
年末・年始_14時50分_系統643,14:55:00,14:55:00,200189_02,2,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,14:57:00,14:57:00,200722_02,3,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,14:58:00,14:58:00,200343_02,4,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,14:59:00,14:59:00,200348_02,5,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:02:00,15:02:00,201185_02,6,前橋駅（南橘団地・群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:05:00,15:05:00,200927_01,7,前橋駅（群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:05:00,15:05:00,200800_02,8,前橋駅（群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:06:00,15:06:00,200928_02,9,前橋駅（群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:08:00,15:08:00,201071_02,10,前橋駅（群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:10:00,15:10:00,200542_02,11,前橋駅（群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:12:00,15:12:00,200141_02,12,前橋駅（群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:13:00,15:13:00,200142_02,13,前橋駅（群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:14:00,15:14:00,200503_01,14,前橋駅（群大病院 経由）,0,0,1
年末・年始_14時50分_系統643,15:16:00,15:16:00,200261_01,15,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:17:00,15:17:00,200503_02,16,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:19:00,15:19:00,200262_02,17,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:20:00,15:20:00,201015_02,18,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:22:00,15:22:00,200379_02,19,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:23:00,15:23:00,200455_02,20,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:25:00,15:25:00,200702_02,21,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:27:00,15:27:00,200703_02,22,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:29:00,15:29:00,201081_02,23,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:31:00,15:31:00,200998_02,24,前橋駅,0,0,1
年末・年始_14時50分_系統643,15:34:00,15:34:00,200718_10,25,前橋駅,1,0,1
年末・年始_14時55分_系統268,14:55:00,14:55:00,200718_02,1,渋川駅,0,1,1
年末・年始_14時55分_系統268,14:56:00,14:56:00,200998_01,2,渋川駅,0,0,1
年末・年始_14時55分_系統268,14:58:00,14:58:00,201081_01,3,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:00:00,15:00:00,200703_01,4,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:01:00,15:01:00,200702_01,5,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:02:00,15:02:00,200455_01,6,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:03:00,15:03:00,200379_01,7,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:04:00,15:04:00,201015_01,8,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:05:00,15:05:00,200262_01,9,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:06:00,15:06:00,200142_01,10,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:07:00,15:07:00,200141_01,11,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:08:00,15:08:00,200542_01,12,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:10:00,15:10:00,201071_01,13,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:12:00,15:12:00,200348_01,14,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:13:00,15:13:00,200343_01,15,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:14:00,15:14:00,200722_01,16,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:16:00,15:16:00,200189_01,17,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:18:00,15:18:00,201056_01,18,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:19:00,15:19:00,200872_01,19,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:20:00,15:20:00,200981_01,20,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:21:00,15:21:00,201100_01,21,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:22:00,15:22:00,200153_01,22,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:22:00,15:22:00,200395_01,23,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:23:00,15:23:00,200895_01,24,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:24:00,15:24:00,200985_01,25,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:24:00,15:24:00,200987_01,26,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:25:00,15:25:00,200519_01,27,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:26:00,15:26:00,200017_01,28,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:27:00,15:27:00,200506_01,29,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:29:00,15:29:00,200827_01,30,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:31:00,15:31:00,200730_01,31,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:32:00,15:32:00,200768_01,32,渋川駅,0,0,1
年末・年始_14時55分_系統268,15:35:00,15:35:00,200463_10,33,渋川駅,1,0,1
年末・年始_15時00分_系統265,15:00:00,15:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
年末・年始_15時00分_系統265,15:01:00,15:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:02:00,15:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:04:00,15:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:05:00,15:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:06:00,15:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:07:00,15:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:07:00,15:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:09:00,15:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:10:00,15:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:11:00,15:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:11:00,15:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:12:00,15:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:13:00,15:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:14:00,15:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:15:00,15:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:17:00,15:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_15時00分_系統265,15:20:00,15:20:00,200273_01,18,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:22:00,15:22:00,200722_02,19,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:23:00,15:23:00,200343_02,20,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:24:00,15:24:00,200348_02,21,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:26:00,15:26:00,201071_02,22,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:28:00,15:28:00,200542_02,23,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:30:00,15:30:00,200141_02,24,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:31:00,15:31:00,200142_02,25,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:33:00,15:33:00,200262_02,26,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:34:00,15:34:00,201015_02,27,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:35:00,15:35:00,200379_02,28,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:36:00,15:36:00,200455_02,29,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:37:00,15:37:00,200702_02,30,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:38:00,15:38:00,200703_02,31,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:40:00,15:40:00,201081_02,32,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:42:00,15:42:00,200998_02,33,前橋駅,0,0,1
年末・年始_15時00分_系統265,15:45:00,15:45:00,200718_10,34,前橋駅,1,0,1
年末・年始_15時00分_系統672,15:00:00,15:00:00,200022_01,1,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,1,1
年末・年始_15時00分_系統672,15:03:00,15:03:00,200668_02,2,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:04:00,15:04:00,200932_02,3,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:05:00,15:05:00,200108_02,4,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:10:00,15:10:00,200718_02,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:11:00,15:11:00,200998_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:13:00,15:13:00,201081_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:15:00,15:15:00,200703_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:16:00,15:16:00,200702_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:18:00,15:18:00,200455_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:19:00,15:19:00,200379_01,11,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:20:00,15:20:00,201015_01,12,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:21:00,15:21:00,200262_01,13,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:22:00,15:22:00,200503_01,14,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:24:00,15:24:00,200261_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:25:00,15:25:00,200503_02,16,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:26:00,15:26:00,200142_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:27:00,15:27:00,200141_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:28:00,15:28:00,200542_01,19,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:30:00,15:30:00,201071_01,20,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:31:00,15:31:00,200928_01,21,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:32:00,15:32:00,200800_01,22,群馬大学荒牧（南橘団地 経由）,0,0,1
年末・年始_15時00分_系統672,15:34:00,15:34:00,200927_01,23,群馬大学荒牧,0,0,1
年末・年始_15時00分_系統672,15:35:00,15:35:00,201185_01,24,群馬大学荒牧,0,0,1
年末・年始_15時00分_系統672,15:39:00,15:39:00,200348_01,25,群馬大学荒牧,0,0,1
年末・年始_15時00分_系統672,15:40:00,15:40:00,200343_01,26,群馬大学荒牧,0,0,1
年末・年始_15時00分_系統672,15:41:00,15:41:00,200722_01,27,群馬大学荒牧,0,0,1
年末・年始_15時00分_系統672,15:44:00,15:44:00,200273_01,28,群馬大学荒牧,1,0,1
年末・年始_15時30分_系統267,15:30:00,15:30:00,200463_01,1,前橋駅,0,1,1
年末・年始_15時30分_系統267,15:31:00,15:31:00,200768_02,2,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:32:00,15:32:00,200730_02,3,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:34:00,15:34:00,200827_02,4,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:35:00,15:35:00,200506_02,5,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:36:00,15:36:00,200017_02,6,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:37:00,15:37:00,200519_02,7,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:37:00,15:37:00,200987_02,8,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:39:00,15:39:00,200985_02,9,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:40:00,15:40:00,200895_02,10,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:41:00,15:41:00,200395_02,11,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:41:00,15:41:00,200153_02,12,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:42:00,15:42:00,201100_02,13,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:43:00,15:43:00,200981_02,14,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:44:00,15:44:00,200872_02,15,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:45:00,15:45:00,201056_02,16,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:47:00,15:47:00,200189_02,17,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:48:00,15:48:00,200722_02,18,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:49:00,15:49:00,200343_02,19,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:50:00,15:50:00,200348_02,20,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:52:00,15:52:00,201071_02,21,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:54:00,15:54:00,200542_02,22,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:56:00,15:56:00,200141_02,23,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:57:00,15:57:00,200142_02,24,前橋駅,0,0,1
年末・年始_15時30分_系統267,15:59:00,15:59:00,200262_02,25,前橋駅,0,0,1
年末・年始_15時30分_系統267,16:00:00,16:00:00,201015_02,26,前橋駅,0,0,1
年末・年始_15時30分_系統267,16:01:00,16:01:00,200379_02,27,前橋駅,0,0,1
年末・年始_15時30分_系統267,16:02:00,16:02:00,200455_02,28,前橋駅,0,0,1
年末・年始_15時30分_系統267,16:03:00,16:03:00,200702_02,29,前橋駅,0,0,1
年末・年始_15時30分_系統267,16:04:00,16:04:00,200703_02,30,前橋駅,0,0,1
年末・年始_15時30分_系統267,16:06:00,16:06:00,201081_02,31,前橋駅,0,0,1
年末・年始_15時30分_系統267,16:08:00,16:08:00,200998_02,32,前橋駅,0,0,1
年末・年始_15時30分_系統267,16:11:00,16:11:00,200718_10,33,前橋駅,1,0,1
年末・年始_15時30分_系統262,15:30:00,15:30:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
年末・年始_15時30分_系統262,15:31:00,15:31:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:33:00,15:33:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:35:00,15:35:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:36:00,15:36:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:38:00,15:38:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:39:00,15:39:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:40:00,15:40:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:41:00,15:41:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:42:00,15:42:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:43:00,15:43:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:44:00,15:44:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:46:00,15:46:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:48:00,15:48:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:49:00,15:49:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:50:00,15:50:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:52:00,15:52:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:54:00,15:54:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:55:00,15:55:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:56:00,15:56:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:57:00,15:57:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:58:00,15:58:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:58:00,15:58:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,15:59:00,15:59:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,16:00:00,16:00:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,16:00:00,16:00:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,16:01:00,16:01:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,16:02:00,16:02:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,16:03:00,16:03:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,16:05:00,16:05:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,16:07:00,16:07:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,16:08:00,16:08:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_15時30分_系統262,16:09:00,16:09:00,200463_06,33,渋川市内循環,0,0,1
年末・年始_15時30分_系統262,16:10:00,16:10:00,200468_01,34,渋川市内循環,0,0,1
年末・年始_15時30分_系統262,16:12:00,16:12:00,200466_01,35,渋川市内循環,0,0,1
年末・年始_15時30分_系統262,16:13:00,16:13:00,200704_01,36,渋川市内循環,0,0,1
年末・年始_15時30分_系統262,16:14:00,16:14:00,200476_02,37,渋川市内循環,0,0,1
年末・年始_15時30分_系統262,16:15:00,16:15:00,200477_02,38,渋川市内循環,0,0,1
年末・年始_15時30分_系統262,16:16:00,16:16:00,200430_02,39,渋川市内循環,0,0,1
年末・年始_15時30分_系統262,16:17:00,16:17:00,200007_02,40,渋川市内循環,0,0,1
年末・年始_15時30分_系統262,16:22:00,16:22:00,210463_10,41,渋川市内循環,1,0,1
年末・年始_15時40分_系統666,15:40:00,15:40:00,200022_01,1,渋川駅（前橋駅 経由）,0,1,1
年末・年始_15時40分_系統666,15:43:00,15:43:00,200668_02,2,渋川駅（前橋駅 経由）,0,0,1
年末・年始_15時40分_系統666,15:44:00,15:44:00,200932_02,3,渋川駅（前橋駅 経由）,0,0,1
年末・年始_15時40分_系統666,15:45:00,15:45:00,200108_02,4,渋川駅（前橋駅 経由）,0,0,1
年末・年始_15時40分_系統666,15:50:00,15:50:00,200718_02,5,渋川駅,0,0,1
年末・年始_15時40分_系統666,15:51:00,15:51:00,200998_01,6,渋川駅,0,0,1
年末・年始_15時40分_系統666,15:53:00,15:53:00,201081_01,7,渋川駅,0,0,1
年末・年始_15時40分_系統666,15:55:00,15:55:00,200703_01,8,渋川駅,0,0,1
年末・年始_15時40分_系統666,15:56:00,15:56:00,200702_01,9,渋川駅,0,0,1
年末・年始_15時40分_系統666,15:57:00,15:57:00,200455_01,10,渋川駅,0,0,1
年末・年始_15時40分_系統666,15:58:00,15:58:00,200379_01,11,渋川駅,0,0,1
年末・年始_15時40分_系統666,15:59:00,15:59:00,201015_01,12,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:00:00,16:00:00,200262_01,13,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:01:00,16:01:00,200142_01,14,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:02:00,16:02:00,200141_01,15,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:03:00,16:03:00,200542_01,16,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:05:00,16:05:00,201071_01,17,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:07:00,16:07:00,200348_01,18,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:08:00,16:08:00,200343_01,19,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:09:00,16:09:00,200722_01,20,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:11:00,16:11:00,200189_01,21,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:13:00,16:13:00,201056_01,22,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:14:00,16:14:00,200872_01,23,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:15:00,16:15:00,200981_01,24,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:16:00,16:16:00,201100_01,25,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:17:00,16:17:00,200153_01,26,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:17:00,16:17:00,200395_01,27,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:18:00,16:18:00,200895_01,28,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:19:00,16:19:00,200985_01,29,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:19:00,16:19:00,200987_01,30,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:20:00,16:20:00,200519_01,31,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:21:00,16:21:00,200017_01,32,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:22:00,16:22:00,200506_01,33,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:24:00,16:24:00,200827_01,34,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:26:00,16:26:00,200730_01,35,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:27:00,16:27:00,200768_01,36,渋川駅,0,0,1
年末・年始_15時40分_系統666,16:30:00,16:30:00,200463_10,37,渋川駅,1,0,1
年末・年始_15時47分_系統261,15:47:00,15:47:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
年末・年始_15時47分_系統261,15:48:00,15:48:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_15時47分_系統261,15:49:00,15:49:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_15時47分_系統261,15:50:00,15:50:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_15時47分_系統261,15:51:00,15:51:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_15時47分_系統261,15:52:00,15:52:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_15時47分_系統261,15:53:00,15:53:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_15時47分_系統261,15:54:00,15:54:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_15時47分_系統261,15:55:00,15:55:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_15時47分_系統261,16:00:00,16:00:00,200463_01,10,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:01:00,16:01:00,200768_02,11,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:02:00,16:02:00,200730_02,12,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:04:00,16:04:00,200827_02,13,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:05:00,16:05:00,200506_02,14,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:06:00,16:06:00,200017_02,15,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:07:00,16:07:00,200519_02,16,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:07:00,16:07:00,200987_02,17,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:09:00,16:09:00,200985_02,18,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:10:00,16:10:00,200895_02,19,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:11:00,16:11:00,200395_02,20,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:11:00,16:11:00,200153_02,21,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:12:00,16:12:00,201100_02,22,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:13:00,16:13:00,200981_02,23,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:14:00,16:14:00,200872_02,24,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:15:00,16:15:00,201056_02,25,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:17:00,16:17:00,200189_02,26,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:18:00,16:18:00,200722_02,27,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:19:00,16:19:00,200343_02,28,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:20:00,16:20:00,200348_02,29,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:22:00,16:22:00,201071_02,30,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:24:00,16:24:00,200542_02,31,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:26:00,16:26:00,200141_02,32,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:27:00,16:27:00,200142_02,33,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:29:00,16:29:00,200262_02,34,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:30:00,16:30:00,201015_02,35,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:31:00,16:31:00,200379_02,36,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:32:00,16:32:00,200455_02,37,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:33:00,16:33:00,200702_02,38,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:34:00,16:34:00,200703_02,39,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:36:00,16:36:00,201081_02,40,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:38:00,16:38:00,200998_02,41,前橋駅,0,0,1
年末・年始_15時47分_系統261,16:41:00,16:41:00,200718_10,42,前橋駅,1,0,1
年末・年始_16時00分_系統581,16:00:00,16:00:00,200273_01,1,前橋駅,0,1,1
年末・年始_16時00分_系統581,16:02:00,16:02:00,200722_02,2,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:03:00,16:03:00,200343_02,3,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:04:00,16:04:00,200348_02,4,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:06:00,16:06:00,201071_02,5,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:08:00,16:08:00,200542_02,6,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:10:00,16:10:00,200141_02,7,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:11:00,16:11:00,200142_02,8,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:13:00,16:13:00,200262_02,9,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:14:00,16:14:00,201015_02,10,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:15:00,16:15:00,200379_02,11,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:16:00,16:16:00,200455_02,12,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:17:00,16:17:00,200702_02,13,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:18:00,16:18:00,200703_02,14,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:20:00,16:20:00,201081_02,15,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:22:00,16:22:00,200998_02,16,前橋駅,0,0,1
年末・年始_16時00分_系統581,16:25:00,16:25:00,200718_10,17,前橋駅,1,0,1
年末・年始_16時05分_系統268,16:05:00,16:05:00,200718_02,1,渋川駅,0,1,1
年末・年始_16時05分_系統268,16:06:00,16:06:00,200998_01,2,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:08:00,16:08:00,201081_01,3,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:10:00,16:10:00,200703_01,4,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:11:00,16:11:00,200702_01,5,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:12:00,16:12:00,200455_01,6,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:13:00,16:13:00,200379_01,7,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:14:00,16:14:00,201015_01,8,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:15:00,16:15:00,200262_01,9,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:16:00,16:16:00,200142_01,10,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:17:00,16:17:00,200141_01,11,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:18:00,16:18:00,200542_01,12,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:20:00,16:20:00,201071_01,13,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:22:00,16:22:00,200348_01,14,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:23:00,16:23:00,200343_01,15,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:24:00,16:24:00,200722_01,16,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:26:00,16:26:00,200189_01,17,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:28:00,16:28:00,201056_01,18,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:29:00,16:29:00,200872_01,19,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:30:00,16:30:00,200981_01,20,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:31:00,16:31:00,201100_01,21,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:32:00,16:32:00,200153_01,22,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:32:00,16:32:00,200395_01,23,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:33:00,16:33:00,200895_01,24,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:34:00,16:34:00,200985_01,25,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:34:00,16:34:00,200987_01,26,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:35:00,16:35:00,200519_01,27,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:36:00,16:36:00,200017_01,28,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:37:00,16:37:00,200506_01,29,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:39:00,16:39:00,200827_01,30,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:41:00,16:41:00,200730_01,31,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:42:00,16:42:00,200768_01,32,渋川駅,0,0,1
年末・年始_16時05分_系統268,16:45:00,16:45:00,200463_10,33,渋川駅,1,0,1
年末・年始_16時18分_系統642,16:18:00,16:18:00,200718_02,1,道の駅まえばし赤城（南橘団地 経由）,0,1,1
年末・年始_16時18分_系統642,16:19:00,16:19:00,200998_01,2,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:21:00,16:21:00,201081_01,3,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:23:00,16:23:00,200703_01,4,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:24:00,16:24:00,200702_01,5,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:26:00,16:26:00,200455_01,6,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:27:00,16:27:00,200379_01,7,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:28:00,16:28:00,201015_01,8,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:29:00,16:29:00,200262_01,9,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:30:00,16:30:00,200142_01,10,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:31:00,16:31:00,200141_01,11,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:32:00,16:32:00,200542_01,12,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:34:00,16:34:00,201071_01,13,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:35:00,16:35:00,200928_01,14,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:36:00,16:36:00,200800_01,15,道の駅まえばし赤城（南橘団地 経由）,0,0,1
年末・年始_16時18分_系統642,16:38:00,16:38:00,200927_01,16,道の駅まえばし赤城,0,0,1
年末・年始_16時18分_系統642,16:39:00,16:39:00,201185_01,17,道の駅まえばし赤城,0,0,1
年末・年始_16時18分_系統642,16:43:00,16:43:00,200348_01,18,道の駅まえばし赤城,0,0,1
年末・年始_16時18分_系統642,16:44:00,16:44:00,200343_01,19,道の駅まえばし赤城,0,0,1
年末・年始_16時18分_系統642,16:45:00,16:45:00,200722_01,20,道の駅まえばし赤城,0,0,1
年末・年始_16時18分_系統642,16:47:00,16:47:00,200189_01,21,道の駅まえばし赤城,0,0,1
年末・年始_16時18分_系統642,16:54:00,16:54:00,201440_01,22,道の駅まえばし赤城,1,0,1
年末・年始_16時25分_系統267,16:25:00,16:25:00,200463_01,1,前橋駅,0,1,1
年末・年始_16時25分_系統267,16:26:00,16:26:00,200768_02,2,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:27:00,16:27:00,200730_02,3,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:29:00,16:29:00,200827_02,4,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:30:00,16:30:00,200506_02,5,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:31:00,16:31:00,200017_02,6,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:32:00,16:32:00,200519_02,7,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:32:00,16:32:00,200987_02,8,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:34:00,16:34:00,200985_02,9,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:35:00,16:35:00,200895_02,10,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:36:00,16:36:00,200395_02,11,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:36:00,16:36:00,200153_02,12,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:37:00,16:37:00,201100_02,13,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:38:00,16:38:00,200981_02,14,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:39:00,16:39:00,200872_02,15,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:40:00,16:40:00,201056_02,16,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:42:00,16:42:00,200189_02,17,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:43:00,16:43:00,200722_02,18,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:44:00,16:44:00,200343_02,19,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:45:00,16:45:00,200348_02,20,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:47:00,16:47:00,201071_02,21,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:49:00,16:49:00,200542_02,22,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:51:00,16:51:00,200141_02,23,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:52:00,16:52:00,200142_02,24,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:54:00,16:54:00,200262_02,25,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:55:00,16:55:00,201015_02,26,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:56:00,16:56:00,200379_02,27,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:57:00,16:57:00,200455_02,28,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:58:00,16:58:00,200702_02,29,前橋駅,0,0,1
年末・年始_16時25分_系統267,16:59:00,16:59:00,200703_02,30,前橋駅,0,0,1
年末・年始_16時25分_系統267,17:01:00,17:01:00,201081_02,31,前橋駅,0,0,1
年末・年始_16時25分_系統267,17:03:00,17:03:00,200998_02,32,前橋駅,0,0,1
年末・年始_16時25分_系統267,17:06:00,17:06:00,200718_10,33,前橋駅,1,0,1
年末・年始_16時30分_系統266,16:30:00,16:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
年末・年始_16時30分_系統266,16:31:00,16:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:33:00,16:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:35:00,16:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:36:00,16:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:37:00,16:37:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:38:00,16:38:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:39:00,16:39:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:40:00,16:40:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:41:00,16:41:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:42:00,16:42:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:43:00,16:43:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:45:00,16:45:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:47:00,16:47:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:48:00,16:48:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:49:00,16:49:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_16時30分_系統266,16:51:00,16:51:00,200273_01,17,渋川駅,0,0,1
年末・年始_16時30分_系統266,16:54:00,16:54:00,200189_01,18,渋川駅,0,0,1
年末・年始_16時30分_系統266,16:56:00,16:56:00,201056_01,19,渋川駅,0,0,1
年末・年始_16時30分_系統266,16:57:00,16:57:00,200872_01,20,渋川駅,0,0,1
年末・年始_16時30分_系統266,16:58:00,16:58:00,200981_01,21,渋川駅,0,0,1
年末・年始_16時30分_系統266,16:59:00,16:59:00,201100_01,22,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:00:00,17:00:00,200153_01,23,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:00:00,17:00:00,200395_01,24,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:01:00,17:01:00,200895_01,25,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:02:00,17:02:00,200985_01,26,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:02:00,17:02:00,200987_01,27,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:03:00,17:03:00,200519_01,28,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:04:00,17:04:00,200017_01,29,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:05:00,17:05:00,200506_01,30,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:07:00,17:07:00,200827_01,31,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:09:00,17:09:00,200730_01,32,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:10:00,17:10:00,200768_01,33,渋川駅,0,0,1
年末・年始_16時30分_系統266,17:13:00,17:13:00,200463_10,34,渋川駅,1,0,1
年末・年始_16時57分_系統262,16:57:00,16:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
年末・年始_16時57分_系統262,16:58:00,16:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:00:00,17:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:02:00,17:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:03:00,17:03:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:05:00,17:05:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:06:00,17:06:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:07:00,17:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:08:00,17:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:09:00,17:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:10:00,17:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:11:00,17:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:13:00,17:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:15:00,17:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:16:00,17:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:17:00,17:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:19:00,17:19:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:21:00,17:21:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:22:00,17:22:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:23:00,17:23:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:24:00,17:24:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:25:00,17:25:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:25:00,17:25:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:26:00,17:26:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:27:00,17:27:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:27:00,17:27:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:28:00,17:28:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:29:00,17:29:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:30:00,17:30:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:32:00,17:32:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:34:00,17:34:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:35:00,17:35:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
年末・年始_16時57分_系統262,17:36:00,17:36:00,200463_06,33,渋川市内循環,0,0,1
年末・年始_16時57分_系統262,17:37:00,17:37:00,200468_01,34,渋川市内循環,0,0,1
年末・年始_16時57分_系統262,17:39:00,17:39:00,200466_01,35,渋川市内循環,0,0,1
年末・年始_16時57分_系統262,17:40:00,17:40:00,200704_01,36,渋川市内循環,0,0,1
年末・年始_16時57分_系統262,17:41:00,17:41:00,200476_02,37,渋川市内循環,0,0,1
年末・年始_16時57分_系統262,17:42:00,17:42:00,200477_02,38,渋川市内循環,0,0,1
年末・年始_16時57分_系統262,17:43:00,17:43:00,200430_02,39,渋川市内循環,0,0,1
年末・年始_16時57分_系統262,17:44:00,17:44:00,200007_02,40,渋川市内循環,0,0,1
年末・年始_16時57分_系統262,17:49:00,17:49:00,210463_10,41,渋川市内循環,1,0,1
年末・年始_17時00分_系統265,17:00:00,17:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
年末・年始_17時00分_系統265,17:01:00,17:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:02:00,17:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:04:00,17:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:05:00,17:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:06:00,17:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:07:00,17:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:07:00,17:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:09:00,17:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:10:00,17:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:11:00,17:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:11:00,17:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:12:00,17:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:13:00,17:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:14:00,17:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:15:00,17:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:17:00,17:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時00分_系統265,17:20:00,17:20:00,200273_01,18,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:22:00,17:22:00,200722_02,19,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:23:00,17:23:00,200343_02,20,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:24:00,17:24:00,200348_02,21,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:26:00,17:26:00,201071_02,22,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:28:00,17:28:00,200542_02,23,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:30:00,17:30:00,200141_02,24,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:31:00,17:31:00,200142_02,25,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:33:00,17:33:00,200262_02,26,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:34:00,17:34:00,201015_02,27,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:35:00,17:35:00,200379_02,28,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:36:00,17:36:00,200455_02,29,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:37:00,17:37:00,200702_02,30,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:38:00,17:38:00,200703_02,31,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:40:00,17:40:00,201081_02,32,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:42:00,17:42:00,200998_02,33,前橋駅,0,0,1
年末・年始_17時00分_系統265,17:45:00,17:45:00,200718_10,34,前橋駅,1,0,1
年末・年始_17時02分_系統641,17:02:00,17:02:00,201440_01,1,前橋駅,0,1,1
年末・年始_17時02分_系統641,17:07:00,17:07:00,200189_02,2,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:09:00,17:09:00,200722_02,3,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:10:00,17:10:00,200343_02,4,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:11:00,17:11:00,200348_02,5,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:13:00,17:13:00,201071_02,6,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:14:00,17:14:00,200542_02,7,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:16:00,17:16:00,200141_02,8,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:17:00,17:17:00,200142_02,9,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:19:00,17:19:00,200262_02,10,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:20:00,17:20:00,201015_02,11,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:22:00,17:22:00,200379_02,12,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:23:00,17:23:00,200455_02,13,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:25:00,17:25:00,200702_02,14,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:27:00,17:27:00,200703_02,15,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:29:00,17:29:00,201081_02,16,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:31:00,17:31:00,200998_02,17,前橋駅,0,0,1
年末・年始_17時02分_系統641,17:34:00,17:34:00,200718_10,18,前橋駅,1,0,1
年末・年始_17時10分_系統668,17:10:00,17:10:00,200022_01,1,南橘団地（前橋駅 経由）,0,1,1
年末・年始_17時10分_系統668,17:13:00,17:13:00,200668_02,2,南橘団地（前橋駅 経由）,0,0,1
年末・年始_17時10分_系統668,17:14:00,17:14:00,200932_02,3,南橘団地（前橋駅 経由）,0,0,1
年末・年始_17時10分_系統668,17:15:00,17:15:00,200108_02,4,南橘団地（前橋駅 経由）,0,0,1
年末・年始_17時10分_系統668,17:20:00,17:20:00,200718_02,5,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:21:00,17:21:00,200998_01,6,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:23:00,17:23:00,201081_01,7,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:25:00,17:25:00,200703_01,8,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:26:00,17:26:00,200702_01,9,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:28:00,17:28:00,200455_01,10,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:29:00,17:29:00,200379_01,11,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:30:00,17:30:00,201015_01,12,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:31:00,17:31:00,200262_01,13,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:32:00,17:32:00,200142_01,14,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:33:00,17:33:00,200141_01,15,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:34:00,17:34:00,200542_01,16,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:36:00,17:36:00,201071_01,17,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:37:00,17:37:00,200928_01,18,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:38:00,17:38:00,200800_01,19,南橘団地,0,0,1
年末・年始_17時10分_系統668,17:41:00,17:41:00,200927_01,20,南橘団地,1,0,1
年末・年始_17時32分_系統261,17:32:00,17:32:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
年末・年始_17時32分_系統261,17:33:00,17:33:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_17時32分_系統261,17:34:00,17:34:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_17時32分_系統261,17:35:00,17:35:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_17時32分_系統261,17:36:00,17:36:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_17時32分_系統261,17:37:00,17:37:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_17時32分_系統261,17:38:00,17:38:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_17時32分_系統261,17:39:00,17:39:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_17時32分_系統261,17:40:00,17:40:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
年末・年始_17時32分_系統261,17:45:00,17:45:00,200463_01,10,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:46:00,17:46:00,200768_02,11,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:47:00,17:47:00,200730_02,12,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:49:00,17:49:00,200827_02,13,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:50:00,17:50:00,200506_02,14,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:51:00,17:51:00,200017_02,15,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:52:00,17:52:00,200519_02,16,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:52:00,17:52:00,200987_02,17,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:54:00,17:54:00,200985_02,18,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:55:00,17:55:00,200895_02,19,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:56:00,17:56:00,200395_02,20,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:56:00,17:56:00,200153_02,21,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:57:00,17:57:00,201100_02,22,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:58:00,17:58:00,200981_02,23,前橋駅,0,0,1
年末・年始_17時32分_系統261,17:59:00,17:59:00,200872_02,24,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:00:00,18:00:00,201056_02,25,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:02:00,18:02:00,200189_02,26,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:03:00,18:03:00,200722_02,27,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:04:00,18:04:00,200343_02,28,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:05:00,18:05:00,200348_02,29,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:07:00,18:07:00,201071_02,30,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:09:00,18:09:00,200542_02,31,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:11:00,18:11:00,200141_02,32,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:12:00,18:12:00,200142_02,33,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:14:00,18:14:00,200262_02,34,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:15:00,18:15:00,201015_02,35,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:16:00,18:16:00,200379_02,36,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:17:00,18:17:00,200455_02,37,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:18:00,18:18:00,200702_02,38,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:19:00,18:19:00,200703_02,39,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:21:00,18:21:00,201081_02,40,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:23:00,18:23:00,200998_02,41,前橋駅,0,0,1
年末・年始_17時32分_系統261,18:26:00,18:26:00,200718_10,42,前橋駅,1,0,1
年末・年始_17時41分_系統266,17:41:00,17:41:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
年末・年始_17時41分_系統266,17:42:00,17:42:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:44:00,17:44:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:46:00,17:46:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:47:00,17:47:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:48:00,17:48:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:49:00,17:49:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:50:00,17:50:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:51:00,17:51:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:52:00,17:52:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:53:00,17:53:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:54:00,17:54:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:56:00,17:56:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:58:00,17:58:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,17:59:00,17:59:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,18:00:00,18:00:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
年末・年始_17時41分_系統266,18:02:00,18:02:00,200273_01,17,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:05:00,18:05:00,200189_01,18,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:07:00,18:07:00,201056_01,19,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:08:00,18:08:00,200872_01,20,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:09:00,18:09:00,200981_01,21,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:10:00,18:10:00,201100_01,22,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:11:00,18:11:00,200153_01,23,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:11:00,18:11:00,200395_01,24,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:12:00,18:12:00,200895_01,25,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:13:00,18:13:00,200985_01,26,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:13:00,18:13:00,200987_01,27,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:14:00,18:14:00,200519_01,28,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:15:00,18:15:00,200017_01,29,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:16:00,18:16:00,200506_01,30,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:18:00,18:18:00,200827_01,31,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:20:00,18:20:00,200730_01,32,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:21:00,18:21:00,200768_01,33,渋川駅,0,0,1
年末・年始_17時41分_系統266,18:24:00,18:24:00,200463_10,34,渋川駅,1,0,1
年末・年始_17時50分_系統528,17:50:00,17:50:00,200927_01,1,前橋駅,0,1,1
年末・年始_17時50分_系統528,17:50:00,17:50:00,200800_02,2,前橋駅,0,0,1
年末・年始_17時50分_系統528,17:51:00,17:51:00,200928_02,3,前橋駅,0,0,1
年末・年始_17時50分_系統528,17:52:00,17:52:00,201071_02,4,前橋駅,0,0,1
年末・年始_17時50分_系統528,17:53:00,17:53:00,200542_02,5,前橋駅,0,0,1
年末・年始_17時50分_系統528,17:55:00,17:55:00,200141_02,6,前橋駅,0,0,1
年末・年始_17時50分_系統528,17:56:00,17:56:00,200142_02,7,前橋駅,0,0,1
年末・年始_17時50分_系統528,17:57:00,17:57:00,200262_02,8,前橋駅,0,0,1
年末・年始_17時50分_系統528,17:58:00,17:58:00,201015_02,9,前橋駅,0,0,1
年末・年始_17時50分_系統528,17:59:00,17:59:00,200379_02,10,前橋駅,0,0,1
年末・年始_17時50分_系統528,18:00:00,18:00:00,200455_02,11,前橋駅,0,0,1
年末・年始_17時50分_系統528,18:02:00,18:02:00,200702_02,12,前橋駅,0,0,1
年末・年始_17時50分_系統528,18:04:00,18:04:00,200703_02,13,前橋駅,0,0,1
年末・年始_17時50分_系統528,18:06:00,18:06:00,201081_02,14,前橋駅,0,0,1
年末・年始_17時50分_系統528,18:08:00,18:08:00,200998_02,15,前橋駅,0,0,1
年末・年始_17時50分_系統528,18:11:00,18:11:00,200718_10,16,前橋駅,1,0,1
年末・年始_17時57分_系統268,17:57:00,17:57:00,200718_02,1,渋川駅,0,1,1
年末・年始_17時57分_系統268,17:58:00,17:58:00,200998_01,2,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:00:00,18:00:00,201081_01,3,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:02:00,18:02:00,200703_01,4,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:03:00,18:03:00,200702_01,5,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:04:00,18:04:00,200455_01,6,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:05:00,18:05:00,200379_01,7,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:06:00,18:06:00,201015_01,8,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:07:00,18:07:00,200262_01,9,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:08:00,18:08:00,200142_01,10,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:09:00,18:09:00,200141_01,11,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:10:00,18:10:00,200542_01,12,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:12:00,18:12:00,201071_01,13,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:14:00,18:14:00,200348_01,14,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:15:00,18:15:00,200343_01,15,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:16:00,18:16:00,200722_01,16,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:18:00,18:18:00,200189_01,17,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:20:00,18:20:00,201056_01,18,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:21:00,18:21:00,200872_01,19,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:22:00,18:22:00,200981_01,20,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:23:00,18:23:00,201100_01,21,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:24:00,18:24:00,200153_01,22,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:24:00,18:24:00,200395_01,23,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:25:00,18:25:00,200895_01,24,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:26:00,18:26:00,200985_01,25,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:26:00,18:26:00,200987_01,26,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:27:00,18:27:00,200519_01,27,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:28:00,18:28:00,200017_01,28,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:29:00,18:29:00,200506_01,29,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:31:00,18:31:00,200827_01,30,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:33:00,18:33:00,200730_01,31,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:34:00,18:34:00,200768_01,32,渋川駅,0,0,1
年末・年始_17時57分_系統268,18:37:00,18:37:00,200463_10,33,渋川駅,1,0,1
年末・年始_18時10分_系統267,18:10:00,18:10:00,200463_01,1,前橋駅,0,1,1
年末・年始_18時10分_系統267,18:11:00,18:11:00,200768_02,2,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:12:00,18:12:00,200730_02,3,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:14:00,18:14:00,200827_02,4,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:15:00,18:15:00,200506_02,5,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:16:00,18:16:00,200017_02,6,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:17:00,18:17:00,200519_02,7,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:17:00,18:17:00,200987_02,8,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:19:00,18:19:00,200985_02,9,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:20:00,18:20:00,200895_02,10,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:21:00,18:21:00,200395_02,11,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:21:00,18:21:00,200153_02,12,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:22:00,18:22:00,201100_02,13,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:23:00,18:23:00,200981_02,14,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:24:00,18:24:00,200872_02,15,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:25:00,18:25:00,201056_02,16,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:27:00,18:27:00,200189_02,17,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:28:00,18:28:00,200722_02,18,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:29:00,18:29:00,200343_02,19,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:30:00,18:30:00,200348_02,20,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:32:00,18:32:00,201071_02,21,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:34:00,18:34:00,200542_02,22,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:36:00,18:36:00,200141_02,23,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:37:00,18:37:00,200142_02,24,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:39:00,18:39:00,200262_02,25,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:40:00,18:40:00,201015_02,26,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:41:00,18:41:00,200379_02,27,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:42:00,18:42:00,200455_02,28,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:43:00,18:43:00,200702_02,29,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:44:00,18:44:00,200703_02,30,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:46:00,18:46:00,201081_02,31,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:48:00,18:48:00,200998_02,32,前橋駅,0,0,1
年末・年始_18時10分_系統267,18:51:00,18:51:00,200718_10,33,前橋駅,1,0,1
年末・年始_18時10分_系統668,18:10:00,18:10:00,200022_01,1,南橘団地（前橋駅 経由）,0,1,1
年末・年始_18時10分_系統668,18:13:00,18:13:00,200668_02,2,南橘団地（前橋駅 経由）,0,0,1
年末・年始_18時10分_系統668,18:14:00,18:14:00,200932_02,3,南橘団地（前橋駅 経由）,0,0,1
年末・年始_18時10分_系統668,18:15:00,18:15:00,200108_02,4,南橘団地（前橋駅 経由）,0,0,1
年末・年始_18時10分_系統668,18:20:00,18:20:00,200718_02,5,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:21:00,18:21:00,200998_01,6,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:23:00,18:23:00,201081_01,7,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:25:00,18:25:00,200703_01,8,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:26:00,18:26:00,200702_01,9,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:28:00,18:28:00,200455_01,10,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:29:00,18:29:00,200379_01,11,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:30:00,18:30:00,201015_01,12,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:31:00,18:31:00,200262_01,13,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:32:00,18:32:00,200142_01,14,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:33:00,18:33:00,200141_01,15,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:34:00,18:34:00,200542_01,16,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:36:00,18:36:00,201071_01,17,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:37:00,18:37:00,200928_01,18,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:38:00,18:38:00,200800_01,19,南橘団地,0,0,1
年末・年始_18時10分_系統668,18:41:00,18:41:00,200927_01,20,南橘団地,1,0,1
年末・年始_18時37分_系統268,18:37:00,18:37:00,200718_02,1,渋川駅,0,1,1
年末・年始_18時37分_系統268,18:38:00,18:38:00,200998_01,2,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:40:00,18:40:00,201081_01,3,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:42:00,18:42:00,200703_01,4,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:43:00,18:43:00,200702_01,5,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:45:00,18:45:00,200455_01,6,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:46:00,18:46:00,200379_01,7,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:47:00,18:47:00,201015_01,8,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:48:00,18:48:00,200262_01,9,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:49:00,18:49:00,200142_01,10,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:50:00,18:50:00,200141_01,11,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:51:00,18:51:00,200542_01,12,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:53:00,18:53:00,201071_01,13,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:55:00,18:55:00,200348_01,14,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:56:00,18:56:00,200343_01,15,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:57:00,18:57:00,200722_01,16,渋川駅,0,0,1
年末・年始_18時37分_系統268,18:59:00,18:59:00,200189_01,17,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:01:00,19:01:00,201056_01,18,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:02:00,19:02:00,200872_01,19,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:03:00,19:03:00,200981_01,20,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:04:00,19:04:00,201100_01,21,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:05:00,19:05:00,200153_01,22,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:05:00,19:05:00,200395_01,23,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:06:00,19:06:00,200895_01,24,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:07:00,19:07:00,200985_01,25,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:07:00,19:07:00,200987_01,26,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:08:00,19:08:00,200519_01,27,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:09:00,19:09:00,200017_01,28,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:10:00,19:10:00,200506_01,29,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:12:00,19:12:00,200827_01,30,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:14:00,19:14:00,200730_01,31,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:15:00,19:15:00,200768_01,32,渋川駅,0,0,1
年末・年始_18時37分_系統268,19:18:00,19:18:00,200463_10,33,渋川駅,1,0,1
年末・年始_18時45分_系統267,18:45:00,18:45:00,200463_01,1,前橋駅,0,1,1
年末・年始_18時45分_系統267,18:46:00,18:46:00,200768_02,2,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:47:00,18:47:00,200730_02,3,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:49:00,18:49:00,200827_02,4,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:50:00,18:50:00,200506_02,5,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:51:00,18:51:00,200017_02,6,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:52:00,18:52:00,200519_02,7,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:52:00,18:52:00,200987_02,8,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:54:00,18:54:00,200985_02,9,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:55:00,18:55:00,200895_02,10,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:56:00,18:56:00,200395_02,11,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:56:00,18:56:00,200153_02,12,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:57:00,18:57:00,201100_02,13,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:58:00,18:58:00,200981_02,14,前橋駅,0,0,1
年末・年始_18時45分_系統267,18:59:00,18:59:00,200872_02,15,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:00:00,19:00:00,201056_02,16,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:02:00,19:02:00,200189_02,17,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:03:00,19:03:00,200722_02,18,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:04:00,19:04:00,200343_02,19,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:05:00,19:05:00,200348_02,20,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:07:00,19:07:00,201071_02,21,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:09:00,19:09:00,200542_02,22,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:11:00,19:11:00,200141_02,23,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:12:00,19:12:00,200142_02,24,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:14:00,19:14:00,200262_02,25,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:15:00,19:15:00,201015_02,26,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:16:00,19:16:00,200379_02,27,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:17:00,19:17:00,200455_02,28,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:18:00,19:18:00,200702_02,29,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:19:00,19:19:00,200703_02,30,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:21:00,19:21:00,201081_02,31,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:23:00,19:23:00,200998_02,32,前橋駅,0,0,1
年末・年始_18時45分_系統267,19:26:00,19:26:00,200718_10,33,前橋駅,1,0,1
年末・年始_19時00分_系統532,19:00:00,19:00:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
年末・年始_19時00分_系統532,19:01:00,19:01:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:03:00,19:03:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:05:00,19:05:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:06:00,19:06:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:07:00,19:07:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:08:00,19:08:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:09:00,19:09:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:10:00,19:10:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:11:00,19:11:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:12:00,19:12:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:13:00,19:13:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:15:00,19:15:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:16:00,19:16:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:17:00,19:17:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
年末・年始_19時00分_系統532,19:19:00,19:19:00,200927_01,16,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:20:00,19:20:00,201185_01,17,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:24:00,19:24:00,200348_01,18,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:25:00,19:25:00,200343_01,19,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:26:00,19:26:00,200722_01,20,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:27:00,19:27:00,200189_01,21,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:29:00,19:29:00,201056_01,22,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:30:00,19:30:00,200872_01,23,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:31:00,19:31:00,200981_01,24,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:32:00,19:32:00,201100_01,25,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:33:00,19:33:00,200153_01,26,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:33:00,19:33:00,200395_01,27,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:34:00,19:34:00,200895_01,28,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:35:00,19:35:00,200985_01,29,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:35:00,19:35:00,200987_01,30,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:36:00,19:36:00,200519_01,31,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:37:00,19:37:00,200017_01,32,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:38:00,19:38:00,200506_01,33,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:39:00,19:39:00,200827_01,34,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:41:00,19:41:00,200730_01,35,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:42:00,19:42:00,200768_01,36,渋川駅,0,0,1
年末・年始_19時00分_系統532,19:45:00,19:45:00,200463_10,37,渋川駅,1,0,1
年末・年始_19時50分_系統268,19:50:00,19:50:00,200718_02,1,渋川駅,0,1,1
年末・年始_19時50分_系統268,19:51:00,19:51:00,200998_01,2,渋川駅,0,0,1
年末・年始_19時50分_系統268,19:53:00,19:53:00,201081_01,3,渋川駅,0,0,1
年末・年始_19時50分_系統268,19:55:00,19:55:00,200703_01,4,渋川駅,0,0,1
年末・年始_19時50分_系統268,19:56:00,19:56:00,200702_01,5,渋川駅,0,0,1
年末・年始_19時50分_系統268,19:58:00,19:58:00,200455_01,6,渋川駅,0,0,1
年末・年始_19時50分_系統268,19:59:00,19:59:00,200379_01,7,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:00:00,20:00:00,201015_01,8,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:01:00,20:01:00,200262_01,9,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:02:00,20:02:00,200142_01,10,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:03:00,20:03:00,200141_01,11,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:04:00,20:04:00,200542_01,12,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:06:00,20:06:00,201071_01,13,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:08:00,20:08:00,200348_01,14,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:09:00,20:09:00,200343_01,15,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:10:00,20:10:00,200722_01,16,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:11:00,20:11:00,200189_01,17,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:13:00,20:13:00,201056_01,18,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:14:00,20:14:00,200872_01,19,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:15:00,20:15:00,200981_01,20,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:16:00,20:16:00,201100_01,21,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:17:00,20:17:00,200153_01,22,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:17:00,20:17:00,200395_01,23,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:18:00,20:18:00,200895_01,24,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:19:00,20:19:00,200985_01,25,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:19:00,20:19:00,200987_01,26,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:20:00,20:20:00,200519_01,27,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:21:00,20:21:00,200017_01,28,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:22:00,20:22:00,200506_01,29,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:23:00,20:23:00,200827_01,30,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:25:00,20:25:00,200730_01,31,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:26:00,20:26:00,200768_01,32,渋川駅,0,0,1
年末・年始_19時50分_系統268,20:29:00,20:29:00,200463_10,33,渋川駅,1,0,1
年末・年始_19時50分_系統267,19:50:00,19:50:00,200463_01,1,前橋駅,0,1,1
年末・年始_19時50分_系統267,19:51:00,19:51:00,200768_02,2,前橋駅,0,0,1
年末・年始_19時50分_系統267,19:52:00,19:52:00,200730_02,3,前橋駅,0,0,1
年末・年始_19時50分_系統267,19:54:00,19:54:00,200827_02,4,前橋駅,0,0,1
年末・年始_19時50分_系統267,19:55:00,19:55:00,200506_02,5,前橋駅,0,0,1
年末・年始_19時50分_系統267,19:56:00,19:56:00,200017_02,6,前橋駅,0,0,1
年末・年始_19時50分_系統267,19:57:00,19:57:00,200519_02,7,前橋駅,0,0,1
年末・年始_19時50分_系統267,19:57:00,19:57:00,200987_02,8,前橋駅,0,0,1
年末・年始_19時50分_系統267,19:59:00,19:59:00,200985_02,9,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:00:00,20:00:00,200895_02,10,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:01:00,20:01:00,200395_02,11,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:01:00,20:01:00,200153_02,12,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:02:00,20:02:00,201100_02,13,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:03:00,20:03:00,200981_02,14,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:04:00,20:04:00,200872_02,15,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:05:00,20:05:00,201056_02,16,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:06:00,20:06:00,200189_02,17,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:07:00,20:07:00,200722_02,18,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:08:00,20:08:00,200343_02,19,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:09:00,20:09:00,200348_02,20,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:10:00,20:10:00,201071_02,21,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:11:00,20:11:00,200542_02,22,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:12:00,20:12:00,200141_02,23,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:13:00,20:13:00,200142_02,24,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:15:00,20:15:00,200262_02,25,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:16:00,20:16:00,201015_02,26,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:16:00,20:16:00,200379_02,27,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:17:00,20:17:00,200455_02,28,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:18:00,20:18:00,200702_02,29,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:19:00,20:19:00,200703_02,30,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:21:00,20:21:00,201081_02,31,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:23:00,20:23:00,200998_02,32,前橋駅,0,0,1
年末・年始_19時50分_系統267,20:26:00,20:26:00,200718_10,33,前橋駅,1,0,1
年末・年始_20時35分_系統532,20:35:00,20:35:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
年末・年始_20時35分_系統532,20:36:00,20:36:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:38:00,20:38:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:40:00,20:40:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:41:00,20:41:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:42:00,20:42:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:43:00,20:43:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:44:00,20:44:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:45:00,20:45:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:46:00,20:46:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:47:00,20:47:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:48:00,20:48:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:50:00,20:50:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:51:00,20:51:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:52:00,20:52:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
年末・年始_20時35分_系統532,20:54:00,20:54:00,200927_01,16,渋川駅,0,0,1
年末・年始_20時35分_系統532,20:55:00,20:55:00,201185_01,17,渋川駅,0,0,1
年末・年始_20時35分_系統532,20:59:00,20:59:00,200348_01,18,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:00:00,21:00:00,200343_01,19,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:01:00,21:01:00,200722_01,20,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:02:00,21:02:00,200189_01,21,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:04:00,21:04:00,201056_01,22,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:05:00,21:05:00,200872_01,23,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:06:00,21:06:00,200981_01,24,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:07:00,21:07:00,201100_01,25,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:08:00,21:08:00,200153_01,26,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:08:00,21:08:00,200395_01,27,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:09:00,21:09:00,200895_01,28,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:10:00,21:10:00,200985_01,29,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:10:00,21:10:00,200987_01,30,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:11:00,21:11:00,200519_01,31,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:12:00,21:12:00,200017_01,32,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:13:00,21:13:00,200506_01,33,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:14:00,21:14:00,200827_01,34,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:16:00,21:16:00,200730_01,35,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:17:00,21:17:00,200768_01,36,渋川駅,0,0,1
年末・年始_20時35分_系統532,21:20:00,21:20:00,200463_10,37,渋川駅,1,0,1
年末・年始_20時35分_系統267,20:35:00,20:35:00,200463_01,1,前橋駅,0,1,1
年末・年始_20時35分_系統267,20:36:00,20:36:00,200768_02,2,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:37:00,20:37:00,200730_02,3,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:39:00,20:39:00,200827_02,4,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:40:00,20:40:00,200506_02,5,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:41:00,20:41:00,200017_02,6,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:42:00,20:42:00,200519_02,7,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:42:00,20:42:00,200987_02,8,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:44:00,20:44:00,200985_02,9,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:45:00,20:45:00,200895_02,10,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:46:00,20:46:00,200395_02,11,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:46:00,20:46:00,200153_02,12,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:47:00,20:47:00,201100_02,13,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:48:00,20:48:00,200981_02,14,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:49:00,20:49:00,200872_02,15,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:50:00,20:50:00,201056_02,16,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:51:00,20:51:00,200189_02,17,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:52:00,20:52:00,200722_02,18,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:53:00,20:53:00,200343_02,19,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:54:00,20:54:00,200348_02,20,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:55:00,20:55:00,201071_02,21,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:56:00,20:56:00,200542_02,22,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:57:00,20:57:00,200141_02,23,前橋駅,0,0,1
年末・年始_20時35分_系統267,20:58:00,20:58:00,200142_02,24,前橋駅,0,0,1
年末・年始_20時35分_系統267,21:00:00,21:00:00,200262_02,25,前橋駅,0,0,1
年末・年始_20時35分_系統267,21:01:00,21:01:00,201015_02,26,前橋駅,0,0,1
年末・年始_20時35分_系統267,21:01:00,21:01:00,200379_02,27,前橋駅,0,0,1
年末・年始_20時35分_系統267,21:02:00,21:02:00,200455_02,28,前橋駅,0,0,1
年末・年始_20時35分_系統267,21:03:00,21:03:00,200702_02,29,前橋駅,0,0,1
年末・年始_20時35分_系統267,21:04:00,21:04:00,200703_02,30,前橋駅,0,0,1
年末・年始_20時35分_系統267,21:06:00,21:06:00,201081_02,31,前橋駅,0,0,1
年末・年始_20時35分_系統267,21:08:00,21:08:00,200998_02,32,前橋駅,0,0,1
年末・年始_20時35分_系統267,21:11:00,21:11:00,200718_10,33,前橋駅,1,0,1
年末・年始_21時24分_系統532,21:24:00,21:24:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
年末・年始_21時24分_系統532,21:25:00,21:25:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:27:00,21:27:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:29:00,21:29:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:30:00,21:30:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:31:00,21:31:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:32:00,21:32:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:33:00,21:33:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:34:00,21:34:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:35:00,21:35:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:36:00,21:36:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:37:00,21:37:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:39:00,21:39:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:40:00,21:40:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:41:00,21:41:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
年末・年始_21時24分_系統532,21:43:00,21:43:00,200927_01,16,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:44:00,21:44:00,201185_01,17,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:48:00,21:48:00,200348_01,18,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:49:00,21:49:00,200343_01,19,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:50:00,21:50:00,200722_01,20,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:51:00,21:51:00,200189_01,21,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:53:00,21:53:00,201056_01,22,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:54:00,21:54:00,200872_01,23,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:55:00,21:55:00,200981_01,24,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:56:00,21:56:00,201100_01,25,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:57:00,21:57:00,200153_01,26,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:57:00,21:57:00,200395_01,27,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:58:00,21:58:00,200895_01,28,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:59:00,21:59:00,200985_01,29,渋川駅,0,0,1
年末・年始_21時24分_系統532,21:59:00,21:59:00,200987_01,30,渋川駅,0,0,1
年末・年始_21時24分_系統532,22:00:00,22:00:00,200519_01,31,渋川駅,0,0,1
年末・年始_21時24分_系統532,22:01:00,22:01:00,200017_01,32,渋川駅,0,0,1
年末・年始_21時24分_系統532,22:02:00,22:02:00,200506_01,33,渋川駅,0,0,1
年末・年始_21時24分_系統532,22:03:00,22:03:00,200827_01,34,渋川駅,0,0,1
年末・年始_21時24分_系統532,22:05:00,22:05:00,200730_01,35,渋川駅,0,0,1
年末・年始_21時24分_系統532,22:06:00,22:06:00,200768_01,36,渋川駅,0,0,1
年末・年始_21時24分_系統532,22:09:00,22:09:00,200463_10,37,渋川駅,1,0,1
特別ダイヤ１_05時50分_系統267,05:50:00,05:50:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_05時50分_系統267,05:51:00,05:51:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,05:52:00,05:52:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,05:54:00,05:54:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,05:55:00,05:55:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,05:56:00,05:56:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,05:57:00,05:57:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,05:57:00,05:57:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,05:59:00,05:59:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:00:00,06:00:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:01:00,06:01:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:01:00,06:01:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:02:00,06:02:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:03:00,06:03:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:04:00,06:04:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:05:00,06:05:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:07:00,06:07:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:08:00,06:08:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:09:00,06:09:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:10:00,06:10:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:12:00,06:12:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:13:00,06:13:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:14:00,06:14:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:15:00,06:15:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:17:00,06:17:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:18:00,06:18:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:18:00,06:18:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:19:00,06:19:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:20:00,06:20:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:21:00,06:21:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:22:00,06:22:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:23:00,06:23:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_05時50分_系統267,06:27:00,06:27:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_06時25分_系統267,06:25:00,06:25:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_06時25分_系統267,06:26:00,06:26:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:27:00,06:27:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:29:00,06:29:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:30:00,06:30:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:31:00,06:31:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:32:00,06:32:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:32:00,06:32:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:34:00,06:34:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:35:00,06:35:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:36:00,06:36:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:36:00,06:36:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:37:00,06:37:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:38:00,06:38:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:39:00,06:39:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:40:00,06:40:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:42:00,06:42:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:43:00,06:43:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:44:00,06:44:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:45:00,06:45:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:47:00,06:47:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:48:00,06:48:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:49:00,06:49:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:50:00,06:50:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:52:00,06:52:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:53:00,06:53:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:53:00,06:53:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:54:00,06:54:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:55:00,06:55:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:56:00,06:56:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:57:00,06:57:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,06:59:00,06:59:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_06時25分_系統267,07:02:00,07:02:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_06時43分_系統267,06:43:00,06:43:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_06時43分_系統267,06:44:00,06:44:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:45:00,06:45:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:47:00,06:47:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:48:00,06:48:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:49:00,06:49:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:50:00,06:50:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:50:00,06:50:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:52:00,06:52:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:53:00,06:53:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:54:00,06:54:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:54:00,06:54:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:55:00,06:55:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:56:00,06:56:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:57:00,06:57:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,06:58:00,06:58:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:00:00,07:00:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:01:00,07:01:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:02:00,07:02:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:03:00,07:03:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:05:00,07:05:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:06:00,07:06:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:07:00,07:07:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:08:00,07:08:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:10:00,07:10:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:11:00,07:11:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:11:00,07:11:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:12:00,07:12:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:13:00,07:13:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:14:00,07:14:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:16:00,07:16:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:18:00,07:18:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_06時43分_系統267,07:21:00,07:21:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_06時47分_系統268,06:47:00,06:47:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_06時47分_系統268,06:48:00,06:48:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:50:00,06:50:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:51:00,06:51:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:51:00,06:51:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:52:00,06:52:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:53:00,06:53:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:54:00,06:54:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:55:00,06:55:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:56:00,06:56:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:57:00,06:57:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,06:58:00,06:58:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:00:00,07:00:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:01:00,07:01:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:02:00,07:02:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:03:00,07:03:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:05:00,07:05:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:07:00,07:07:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:08:00,07:08:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:09:00,07:09:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:10:00,07:10:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:11:00,07:11:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:11:00,07:11:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:12:00,07:12:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:13:00,07:13:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:13:00,07:13:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:14:00,07:14:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:15:00,07:15:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:16:00,07:16:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:17:00,07:17:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:19:00,07:19:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:20:00,07:20:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_06時47分_系統268,07:23:00,07:23:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_07時05分_系統267,07:05:00,07:05:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_07時05分_系統267,07:06:00,07:06:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:07:00,07:07:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:09:00,07:09:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:10:00,07:10:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:11:00,07:11:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:12:00,07:12:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:12:00,07:12:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:14:00,07:14:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:15:00,07:15:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:16:00,07:16:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:16:00,07:16:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:17:00,07:17:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:18:00,07:18:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:19:00,07:19:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:20:00,07:20:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:22:00,07:22:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:23:00,07:23:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:24:00,07:24:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:25:00,07:25:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:27:00,07:27:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:28:00,07:28:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:29:00,07:29:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:30:00,07:30:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:32:00,07:32:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:33:00,07:33:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:33:00,07:33:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:34:00,07:34:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:35:00,07:35:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:36:00,07:36:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:38:00,07:38:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:40:00,07:40:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_07時05分_系統267,07:43:00,07:43:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_07時12分_系統268,07:12:00,07:12:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_07時12分_系統268,07:13:00,07:13:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:15:00,07:15:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:16:00,07:16:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:16:00,07:16:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:17:00,07:17:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:18:00,07:18:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:19:00,07:19:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:20:00,07:20:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:21:00,07:21:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:22:00,07:22:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:23:00,07:23:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:25:00,07:25:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:26:00,07:26:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:27:00,07:27:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:28:00,07:28:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:30:00,07:30:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:32:00,07:32:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:33:00,07:33:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:34:00,07:34:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:35:00,07:35:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:36:00,07:36:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:36:00,07:36:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:37:00,07:37:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:38:00,07:38:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:38:00,07:38:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:39:00,07:39:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:40:00,07:40:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:41:00,07:41:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:42:00,07:42:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:44:00,07:44:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:45:00,07:45:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_07時12分_系統268,07:48:00,07:48:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_07時25分_系統267,07:25:00,07:25:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_07時25分_系統267,07:26:00,07:26:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:27:00,07:27:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:29:00,07:29:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:30:00,07:30:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:31:00,07:31:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:32:00,07:32:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:32:00,07:32:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:34:00,07:34:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:35:00,07:35:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:36:00,07:36:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:36:00,07:36:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:37:00,07:37:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:38:00,07:38:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:39:00,07:39:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:40:00,07:40:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:42:00,07:42:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:43:00,07:43:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:44:00,07:44:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:45:00,07:45:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:47:00,07:47:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:48:00,07:48:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:49:00,07:49:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:50:00,07:50:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:52:00,07:52:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:53:00,07:53:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:53:00,07:53:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:54:00,07:54:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:55:00,07:55:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:56:00,07:56:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,07:58:00,07:58:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,08:00:00,08:00:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_07時25分_系統267,08:03:00,08:03:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_07時30分_系統264,07:30:00,07:30:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
特別ダイヤ１_07時30分_系統264,07:31:00,07:31:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:33:00,07:33:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:35:00,07:35:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:36:00,07:36:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:38:00,07:38:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:39:00,07:39:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:40:00,07:40:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:41:00,07:41:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:42:00,07:42:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:43:00,07:43:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:44:00,07:44:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:46:00,07:46:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:47:00,07:47:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:48:00,07:48:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:49:00,07:49:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:51:00,07:51:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:54:00,07:54:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:56:00,07:56:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:57:00,07:57:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:58:00,07:58:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,07:59:00,07:59:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:00:00,08:00:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:00:00,08:00:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:01:00,08:01:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:02:00,08:02:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:02:00,08:02:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:03:00,08:03:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:04:00,08:04:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:05:00,08:05:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:06:00,08:06:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:08:00,08:08:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:09:00,08:09:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_07時30分_系統264,08:10:00,08:10:00,200463_06,34,渋川市内循環,0,0,1
特別ダイヤ１_07時30分_系統264,08:11:00,08:11:00,200468_01,35,渋川市内循環,0,0,1
特別ダイヤ１_07時30分_系統264,08:13:00,08:13:00,200466_01,36,渋川市内循環,0,0,1
特別ダイヤ１_07時30分_系統264,08:14:00,08:14:00,200704_01,37,渋川市内循環,0,0,1
特別ダイヤ１_07時30分_系統264,08:15:00,08:15:00,200476_02,38,渋川市内循環,0,0,1
特別ダイヤ１_07時30分_系統264,08:16:00,08:16:00,200477_02,39,渋川市内循環,0,0,1
特別ダイヤ１_07時30分_系統264,08:17:00,08:17:00,200430_02,40,渋川市内循環,0,0,1
特別ダイヤ１_07時30分_系統264,08:18:00,08:18:00,200007_02,41,渋川市内循環,0,0,1
特別ダイヤ１_07時30分_系統264,08:23:00,08:23:00,210463_10,42,渋川市内循環,1,0,1
特別ダイヤ１_07時35分_系統528,07:35:00,07:35:00,200927_01,1,前橋駅,0,1,1
特別ダイヤ１_07時35分_系統528,07:35:00,07:35:00,200800_02,2,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:36:00,07:36:00,200928_02,3,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:38:00,07:38:00,201071_02,4,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:39:00,07:39:00,200542_02,5,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:40:00,07:40:00,200141_02,6,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:41:00,07:41:00,200142_02,7,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:43:00,07:43:00,200262_02,8,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:44:00,07:44:00,201015_02,9,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:44:00,07:44:00,200379_02,10,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:45:00,07:45:00,200455_02,11,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:46:00,07:46:00,200702_02,12,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:47:00,07:47:00,200703_02,13,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:49:00,07:49:00,201081_02,14,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:51:00,07:51:00,200998_02,15,前橋駅,0,0,1
特別ダイヤ１_07時35分_系統528,07:54:00,07:54:00,200718_10,16,前橋駅,1,0,1
特別ダイヤ１_07時40分_系統586,07:40:00,07:40:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
特別ダイヤ１_07時40分_系統586,07:41:00,07:41:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_07時40分_系統586,07:43:00,07:43:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_07時40分_系統586,07:45:00,07:45:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_07時40分_系統586,07:46:00,07:46:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_07時40分_系統586,07:47:00,07:47:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_07時40分_系統586,07:48:00,07:48:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_07時40分_系統586,07:49:00,07:49:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_07時40分_系統586,07:50:00,07:50:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_07時40分_系統586,07:51:00,07:51:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_07時40分_系統586,07:53:00,07:53:00,200261_01,11,群馬大学荒牧,0,0,1
特別ダイヤ１_07時40分_系統586,07:54:00,07:54:00,200503_02,12,群馬大学荒牧,0,0,1
特別ダイヤ１_07時40分_系統586,07:55:00,07:55:00,200142_01,13,群馬大学荒牧,0,0,1
特別ダイヤ１_07時40分_系統586,07:56:00,07:56:00,200141_01,14,群馬大学荒牧,0,0,1
特別ダイヤ１_07時40分_系統586,07:57:00,07:57:00,200542_01,15,群馬大学荒牧,0,0,1
特別ダイヤ１_07時40分_系統586,07:59:00,07:59:00,201071_01,16,群馬大学荒牧,0,0,1
特別ダイヤ１_07時40分_系統586,08:00:00,08:00:00,200348_01,17,群馬大学荒牧,0,0,1
特別ダイヤ１_07時40分_系統586,08:01:00,08:01:00,200343_01,18,群馬大学荒牧,0,0,1
特別ダイヤ１_07時40分_系統586,08:02:00,08:02:00,200722_01,19,群馬大学荒牧,0,0,1
特別ダイヤ１_07時40分_系統586,08:05:00,08:05:00,200273_01,20,群馬大学荒牧,1,0,1
特別ダイヤ１_07時45分_系統267,07:45:00,07:45:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_07時45分_系統267,07:46:00,07:46:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:47:00,07:47:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:49:00,07:49:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:50:00,07:50:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:51:00,07:51:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:52:00,07:52:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:52:00,07:52:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:54:00,07:54:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:55:00,07:55:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:56:00,07:56:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:56:00,07:56:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:57:00,07:57:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:58:00,07:58:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,07:59:00,07:59:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:00:00,08:00:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:02:00,08:02:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:03:00,08:03:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:04:00,08:04:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:05:00,08:05:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:07:00,08:07:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:09:00,08:09:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:11:00,08:11:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:12:00,08:12:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:14:00,08:14:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:15:00,08:15:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:16:00,08:16:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:17:00,08:17:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:18:00,08:18:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:19:00,08:19:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:21:00,08:21:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:23:00,08:23:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_07時45分_系統267,08:26:00,08:26:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_07時53分_系統266,07:53:00,07:53:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_07時53分_系統266,07:54:00,07:54:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,07:56:00,07:56:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,07:58:00,07:58:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,07:59:00,07:59:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:01:00,08:01:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:02:00,08:02:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:03:00,08:03:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:04:00,08:04:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:05:00,08:05:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:06:00,08:06:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:07:00,08:07:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:09:00,08:09:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:10:00,08:10:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:11:00,08:11:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:12:00,08:12:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_07時53分_系統266,08:14:00,08:14:00,200273_01,17,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:17:00,08:17:00,200189_01,18,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:19:00,08:19:00,201056_01,19,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:20:00,08:20:00,200872_01,20,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:21:00,08:21:00,200981_01,21,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:22:00,08:22:00,201100_01,22,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:23:00,08:23:00,200153_01,23,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:23:00,08:23:00,200395_01,24,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:24:00,08:24:00,200895_01,25,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:25:00,08:25:00,200985_01,26,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:25:00,08:25:00,200987_01,27,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:26:00,08:26:00,200519_01,28,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:27:00,08:27:00,200017_01,29,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:28:00,08:28:00,200506_01,30,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:29:00,08:29:00,200827_01,31,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:31:00,08:31:00,200730_01,32,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:32:00,08:32:00,200768_01,33,渋川駅,0,0,1
特別ダイヤ１_07時53分_系統266,08:35:00,08:35:00,200463_10,34,渋川駅,1,0,1
特別ダイヤ１_08時05分_系統265,08:05:00,08:05:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_08時05分_系統265,08:06:00,08:06:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:07:00,08:07:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:09:00,08:09:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:10:00,08:10:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:11:00,08:11:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:12:00,08:12:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:12:00,08:12:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:14:00,08:14:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:15:00,08:15:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:16:00,08:16:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:16:00,08:16:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:17:00,08:17:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:18:00,08:18:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:19:00,08:19:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:20:00,08:20:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:22:00,08:22:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時05分_系統265,08:25:00,08:25:00,200273_01,18,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:27:00,08:27:00,200722_02,19,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:28:00,08:28:00,200343_02,20,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:29:00,08:29:00,200348_02,21,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:31:00,08:31:00,201071_02,22,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:33:00,08:33:00,200542_02,23,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:35:00,08:35:00,200141_02,24,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:36:00,08:36:00,200142_02,25,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:38:00,08:38:00,200262_02,26,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:39:00,08:39:00,201015_02,27,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:40:00,08:40:00,200379_02,28,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:41:00,08:41:00,200455_02,29,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:42:00,08:42:00,200702_02,30,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:43:00,08:43:00,200703_02,31,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:45:00,08:45:00,201081_02,32,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:47:00,08:47:00,200998_02,33,前橋駅,0,0,1
特別ダイヤ１_08時05分_系統265,08:50:00,08:50:00,200718_10,34,前橋駅,1,0,1
特別ダイヤ１_08時10分_系統583,08:10:00,08:10:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
特別ダイヤ１_08時10分_系統583,08:12:00,08:12:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
特別ダイヤ１_08時10分_系統583,08:13:00,08:13:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
特別ダイヤ１_08時10分_系統583,08:14:00,08:14:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
特別ダイヤ１_08時10分_系統583,08:17:00,08:17:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
特別ダイヤ１_08時10分_系統583,08:20:00,08:20:00,200927_01,6,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:20:00,08:20:00,200800_02,7,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:21:00,08:21:00,200928_02,8,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:23:00,08:23:00,201071_02,9,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:25:00,08:25:00,200542_02,10,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:27:00,08:27:00,200141_02,11,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:28:00,08:28:00,200142_02,12,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:30:00,08:30:00,200262_02,13,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:31:00,08:31:00,201015_02,14,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:32:00,08:32:00,200379_02,15,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:33:00,08:33:00,200455_02,16,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:34:00,08:34:00,200702_02,17,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:35:00,08:35:00,200703_02,18,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:37:00,08:37:00,201081_02,19,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:39:00,08:39:00,200998_02,20,前橋駅,0,0,1
特別ダイヤ１_08時10分_系統583,08:42:00,08:42:00,200718_10,21,前橋駅,1,0,1
特別ダイヤ１_08時12分_系統261,08:12:00,08:12:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
特別ダイヤ１_08時12分_系統261,08:13:00,08:13:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時12分_系統261,08:14:00,08:14:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時12分_系統261,08:15:00,08:15:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時12分_系統261,08:16:00,08:16:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時12分_系統261,08:17:00,08:17:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時12分_系統261,08:18:00,08:18:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時12分_系統261,08:19:00,08:19:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時12分_系統261,08:20:00,08:20:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時12分_系統261,08:25:00,08:25:00,200463_01,10,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:26:00,08:26:00,200768_02,11,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:27:00,08:27:00,200730_02,12,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:29:00,08:29:00,200827_02,13,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:30:00,08:30:00,200506_02,14,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:31:00,08:31:00,200017_02,15,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:32:00,08:32:00,200519_02,16,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:32:00,08:32:00,200987_02,17,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:34:00,08:34:00,200985_02,18,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:35:00,08:35:00,200895_02,19,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:36:00,08:36:00,200395_02,20,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:36:00,08:36:00,200153_02,21,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:37:00,08:37:00,201100_02,22,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:38:00,08:38:00,200981_02,23,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:39:00,08:39:00,200872_02,24,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:40:00,08:40:00,201056_02,25,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:42:00,08:42:00,200189_02,26,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:43:00,08:43:00,200722_02,27,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:44:00,08:44:00,200343_02,28,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:45:00,08:45:00,200348_02,29,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:47:00,08:47:00,201071_02,30,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:49:00,08:49:00,200542_02,31,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:51:00,08:51:00,200141_02,32,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:52:00,08:52:00,200142_02,33,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:54:00,08:54:00,200262_02,34,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:55:00,08:55:00,201015_02,35,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:56:00,08:56:00,200379_02,36,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:57:00,08:57:00,200455_02,37,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:58:00,08:58:00,200702_02,38,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,08:59:00,08:59:00,200703_02,39,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,09:01:00,09:01:00,201081_02,40,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,09:03:00,09:03:00,200998_02,41,前橋駅,0,0,1
特別ダイヤ１_08時12分_系統261,09:06:00,09:06:00,200718_10,42,前橋駅,1,0,1
特別ダイヤ１_08時13分_系統266,08:13:00,08:13:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_08時13分_系統266,08:14:00,08:14:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:16:00,08:16:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:18:00,08:18:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:19:00,08:19:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:21:00,08:21:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:22:00,08:22:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:23:00,08:23:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:24:00,08:24:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:25:00,08:25:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:26:00,08:26:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:27:00,08:27:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:29:00,08:29:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:30:00,08:30:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:31:00,08:31:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:32:00,08:32:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時13分_系統266,08:34:00,08:34:00,200273_01,17,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:37:00,08:37:00,200189_01,18,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:39:00,08:39:00,201056_01,19,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:40:00,08:40:00,200872_01,20,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:41:00,08:41:00,200981_01,21,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:42:00,08:42:00,201100_01,22,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:43:00,08:43:00,200153_01,23,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:43:00,08:43:00,200395_01,24,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:44:00,08:44:00,200895_01,25,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:45:00,08:45:00,200985_01,26,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:45:00,08:45:00,200987_01,27,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:46:00,08:46:00,200519_01,28,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:47:00,08:47:00,200017_01,29,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:48:00,08:48:00,200506_01,30,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:49:00,08:49:00,200827_01,31,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:51:00,08:51:00,200730_01,32,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:52:00,08:52:00,200768_01,33,渋川駅,0,0,1
特別ダイヤ１_08時13分_系統266,08:55:00,08:55:00,200463_10,34,渋川駅,1,0,1
特別ダイヤ１_08時28分_系統586,08:28:00,08:28:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
特別ダイヤ１_08時28分_系統586,08:29:00,08:29:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_08時28分_系統586,08:31:00,08:31:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_08時28分_系統586,08:33:00,08:33:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_08時28分_系統586,08:34:00,08:34:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_08時28分_系統586,08:36:00,08:36:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_08時28分_系統586,08:37:00,08:37:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_08時28分_系統586,08:38:00,08:38:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_08時28分_系統586,08:39:00,08:39:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_08時28分_系統586,08:40:00,08:40:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_08時28分_系統586,08:42:00,08:42:00,200261_01,11,群馬大学荒牧,0,0,1
特別ダイヤ１_08時28分_系統586,08:43:00,08:43:00,200503_02,12,群馬大学荒牧,0,0,1
特別ダイヤ１_08時28分_系統586,08:44:00,08:44:00,200142_01,13,群馬大学荒牧,0,0,1
特別ダイヤ１_08時28分_系統586,08:45:00,08:45:00,200141_01,14,群馬大学荒牧,0,0,1
特別ダイヤ１_08時28分_系統586,08:46:00,08:46:00,200542_01,15,群馬大学荒牧,0,0,1
特別ダイヤ１_08時28分_系統586,08:48:00,08:48:00,201071_01,16,群馬大学荒牧,0,0,1
特別ダイヤ１_08時28分_系統586,08:49:00,08:49:00,200348_01,17,群馬大学荒牧,0,0,1
特別ダイヤ１_08時28分_系統586,08:50:00,08:50:00,200343_01,18,群馬大学荒牧,0,0,1
特別ダイヤ１_08時28分_系統586,08:51:00,08:51:00,200722_01,19,群馬大学荒牧,0,0,1
特別ダイヤ１_08時28分_系統586,08:54:00,08:54:00,200273_01,20,群馬大学荒牧,1,0,1
特別ダイヤ１_08時40分_系統268,08:40:00,08:40:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_08時40分_系統268,08:41:00,08:41:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:43:00,08:43:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:44:00,08:44:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:44:00,08:44:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:45:00,08:45:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:46:00,08:46:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:47:00,08:47:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:48:00,08:48:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:49:00,08:49:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:50:00,08:50:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:51:00,08:51:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:53:00,08:53:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:54:00,08:54:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:55:00,08:55:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:56:00,08:56:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,08:58:00,08:58:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:00:00,09:00:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:01:00,09:01:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:02:00,09:02:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:03:00,09:03:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:04:00,09:04:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:04:00,09:04:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:05:00,09:05:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:06:00,09:06:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:06:00,09:06:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:07:00,09:07:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:08:00,09:08:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:09:00,09:09:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:10:00,09:10:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:12:00,09:12:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:13:00,09:13:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_08時40分_系統268,09:16:00,09:16:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_08時55分_系統265,08:55:00,08:55:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_08時55分_系統265,08:56:00,08:56:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,08:57:00,08:57:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,08:59:00,08:59:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:00:00,09:00:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:01:00,09:01:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:02:00,09:02:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:02:00,09:02:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:04:00,09:04:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:05:00,09:05:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:06:00,09:06:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:06:00,09:06:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:07:00,09:07:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:08:00,09:08:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:09:00,09:09:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:10:00,09:10:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:12:00,09:12:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_08時55分_系統265,09:15:00,09:15:00,200273_01,18,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:17:00,09:17:00,200722_02,19,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:18:00,09:18:00,200343_02,20,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:19:00,09:19:00,200348_02,21,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:21:00,09:21:00,201071_02,22,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:23:00,09:23:00,200542_02,23,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:25:00,09:25:00,200141_02,24,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:26:00,09:26:00,200142_02,25,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:28:00,09:28:00,200262_02,26,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:29:00,09:29:00,201015_02,27,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:30:00,09:30:00,200379_02,28,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:31:00,09:31:00,200455_02,29,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:32:00,09:32:00,200702_02,30,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:33:00,09:33:00,200703_02,31,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:35:00,09:35:00,201081_02,32,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:37:00,09:37:00,200998_02,33,前橋駅,0,0,1
特別ダイヤ１_08時55分_系統265,09:40:00,09:40:00,200718_10,34,前橋駅,1,0,1
特別ダイヤ１_08時58分_系統264,08:58:00,08:58:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
特別ダイヤ１_08時58分_系統264,08:59:00,08:59:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:01:00,09:01:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:03:00,09:03:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:04:00,09:04:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:06:00,09:06:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:07:00,09:07:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:08:00,09:08:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:09:00,09:09:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:10:00,09:10:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:11:00,09:11:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:12:00,09:12:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:14:00,09:14:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:15:00,09:15:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:16:00,09:16:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:17:00,09:17:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:19:00,09:19:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:22:00,09:22:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:24:00,09:24:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:25:00,09:25:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:26:00,09:26:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:27:00,09:27:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:28:00,09:28:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:28:00,09:28:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:29:00,09:29:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:30:00,09:30:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:30:00,09:30:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:31:00,09:31:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:32:00,09:32:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:33:00,09:33:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:34:00,09:34:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:36:00,09:36:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:37:00,09:37:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_08時58分_系統264,09:38:00,09:38:00,200463_06,34,渋川市内循環,0,0,1
特別ダイヤ１_08時58分_系統264,09:39:00,09:39:00,200468_01,35,渋川市内循環,0,0,1
特別ダイヤ１_08時58分_系統264,09:41:00,09:41:00,200466_01,36,渋川市内循環,0,0,1
特別ダイヤ１_08時58分_系統264,09:42:00,09:42:00,200704_01,37,渋川市内循環,0,0,1
特別ダイヤ１_08時58分_系統264,09:43:00,09:43:00,200476_02,38,渋川市内循環,0,0,1
特別ダイヤ１_08時58分_系統264,09:44:00,09:44:00,200477_02,39,渋川市内循環,0,0,1
特別ダイヤ１_08時58分_系統264,09:45:00,09:45:00,200430_02,40,渋川市内循環,0,0,1
特別ダイヤ１_08時58分_系統264,09:46:00,09:46:00,200007_02,41,渋川市内循環,0,0,1
特別ダイヤ１_08時58分_系統264,09:51:00,09:51:00,210463_10,42,渋川市内循環,1,0,1
特別ダイヤ１_09時00分_系統583,09:00:00,09:00:00,200273_01,1,前橋駅（南橘団地 経由）,0,1,1
特別ダイヤ１_09時00分_系統583,09:02:00,09:02:00,200722_02,2,前橋駅（南橘団地 経由）,0,0,1
特別ダイヤ１_09時00分_系統583,09:03:00,09:03:00,200343_02,3,前橋駅（南橘団地 経由）,0,0,1
特別ダイヤ１_09時00分_系統583,09:04:00,09:04:00,200348_02,4,前橋駅（南橘団地 経由）,0,0,1
特別ダイヤ１_09時00分_系統583,09:07:00,09:07:00,201185_02,5,前橋駅（南橘団地 経由）,0,0,1
特別ダイヤ１_09時00分_系統583,09:10:00,09:10:00,200927_01,6,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:10:00,09:10:00,200800_02,7,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:11:00,09:11:00,200928_02,8,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:13:00,09:13:00,201071_02,9,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:15:00,09:15:00,200542_02,10,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:17:00,09:17:00,200141_02,11,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:18:00,09:18:00,200142_02,12,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:20:00,09:20:00,200262_02,13,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:21:00,09:21:00,201015_02,14,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:22:00,09:22:00,200379_02,15,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:23:00,09:23:00,200455_02,16,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:24:00,09:24:00,200702_02,17,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:25:00,09:25:00,200703_02,18,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:27:00,09:27:00,201081_02,19,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:29:00,09:29:00,200998_02,20,前橋駅,0,0,1
特別ダイヤ１_09時00分_系統583,09:32:00,09:32:00,200718_10,21,前橋駅,1,0,1
特別ダイヤ１_09時10分_系統267,09:10:00,09:10:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_09時10分_系統267,09:11:00,09:11:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:12:00,09:12:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:14:00,09:14:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:15:00,09:15:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:16:00,09:16:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:17:00,09:17:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:17:00,09:17:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:19:00,09:19:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:20:00,09:20:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:21:00,09:21:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:21:00,09:21:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:22:00,09:22:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:23:00,09:23:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:24:00,09:24:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:25:00,09:25:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:27:00,09:27:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:28:00,09:28:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:29:00,09:29:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:30:00,09:30:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:32:00,09:32:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:34:00,09:34:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:36:00,09:36:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:37:00,09:37:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:39:00,09:39:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:40:00,09:40:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:41:00,09:41:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:42:00,09:42:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:43:00,09:43:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:44:00,09:44:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:46:00,09:46:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:48:00,09:48:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_09時10分_系統267,09:51:00,09:51:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_09時17分_系統586,09:17:00,09:17:00,200718_02,1,群馬大学荒牧（群大病院 経由）,0,1,1
特別ダイヤ１_09時17分_系統586,09:18:00,09:18:00,200998_01,2,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_09時17分_系統586,09:20:00,09:20:00,201081_01,3,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_09時17分_系統586,09:22:00,09:22:00,200703_01,4,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_09時17分_系統586,09:23:00,09:23:00,200702_01,5,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_09時17分_系統586,09:24:00,09:24:00,200455_01,6,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_09時17分_系統586,09:25:00,09:25:00,200379_01,7,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_09時17分_系統586,09:26:00,09:26:00,201015_01,8,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_09時17分_系統586,09:27:00,09:27:00,200262_01,9,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_09時17分_系統586,09:28:00,09:28:00,200503_01,10,群馬大学荒牧（群大病院 経由）,0,0,1
特別ダイヤ１_09時17分_系統586,09:30:00,09:30:00,200261_01,11,群馬大学荒牧,0,0,1
特別ダイヤ１_09時17分_系統586,09:31:00,09:31:00,200503_02,12,群馬大学荒牧,0,0,1
特別ダイヤ１_09時17分_系統586,09:32:00,09:32:00,200142_01,13,群馬大学荒牧,0,0,1
特別ダイヤ１_09時17分_系統586,09:33:00,09:33:00,200141_01,14,群馬大学荒牧,0,0,1
特別ダイヤ１_09時17分_系統586,09:34:00,09:34:00,200542_01,15,群馬大学荒牧,0,0,1
特別ダイヤ１_09時17分_系統586,09:36:00,09:36:00,201071_01,16,群馬大学荒牧,0,0,1
特別ダイヤ１_09時17分_系統586,09:37:00,09:37:00,200348_01,17,群馬大学荒牧,0,0,1
特別ダイヤ１_09時17分_系統586,09:38:00,09:38:00,200343_01,18,群馬大学荒牧,0,0,1
特別ダイヤ１_09時17分_系統586,09:39:00,09:39:00,200722_01,19,群馬大学荒牧,0,0,1
特別ダイヤ１_09時17分_系統586,09:42:00,09:42:00,200273_01,20,群馬大学荒牧,1,0,1
特別ダイヤ１_09時30分_系統266,09:30:00,09:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_09時30分_系統266,09:31:00,09:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:33:00,09:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:35:00,09:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:36:00,09:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:38:00,09:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:39:00,09:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:40:00,09:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:41:00,09:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:42:00,09:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:43:00,09:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:44:00,09:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:46:00,09:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:48:00,09:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:49:00,09:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:50:00,09:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時30分_系統266,09:52:00,09:52:00,200273_01,17,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,09:55:00,09:55:00,200189_01,18,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,09:57:00,09:57:00,201056_01,19,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,09:58:00,09:58:00,200872_01,20,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,09:59:00,09:59:00,200981_01,21,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:00:00,10:00:00,201100_01,22,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:01:00,10:01:00,200153_01,23,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:01:00,10:01:00,200395_01,24,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:02:00,10:02:00,200895_01,25,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:03:00,10:03:00,200985_01,26,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:03:00,10:03:00,200987_01,27,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:04:00,10:04:00,200519_01,28,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:05:00,10:05:00,200017_01,29,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:06:00,10:06:00,200506_01,30,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:08:00,10:08:00,200827_01,31,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:10:00,10:10:00,200730_01,32,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:11:00,10:11:00,200768_01,33,渋川駅,0,0,1
特別ダイヤ１_09時30分_系統266,10:14:00,10:14:00,200463_10,34,渋川駅,1,0,1
特別ダイヤ１_09時30分_系統267,09:30:00,09:30:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_09時30分_系統267,09:31:00,09:31:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:32:00,09:32:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:34:00,09:34:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:35:00,09:35:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:36:00,09:36:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:37:00,09:37:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:37:00,09:37:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:39:00,09:39:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:40:00,09:40:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:41:00,09:41:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:41:00,09:41:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:42:00,09:42:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:43:00,09:43:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:44:00,09:44:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:45:00,09:45:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:47:00,09:47:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:48:00,09:48:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:49:00,09:49:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:50:00,09:50:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:52:00,09:52:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:54:00,09:54:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:56:00,09:56:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:57:00,09:57:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,09:59:00,09:59:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,10:00:00,10:00:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,10:01:00,10:01:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,10:02:00,10:02:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,10:03:00,10:03:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,10:04:00,10:04:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,10:06:00,10:06:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,10:08:00,10:08:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_09時30分_系統267,10:11:00,10:11:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_09時47分_系統263,09:47:00,09:47:00,210463_05,1,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_09時47分_系統263,09:48:00,09:48:00,200007_01,2,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,09:49:00,09:49:00,200430_01,3,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,09:50:00,09:50:00,200477_01,4,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,09:51:00,09:51:00,200476_01,5,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,09:52:00,09:52:00,200704_02,6,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,09:53:00,09:53:00,200467_01,7,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,09:54:00,09:54:00,200466_02,8,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,09:55:00,09:55:00,200468_02,9,前橋駅（渋川市内循環・群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:00:00,10:00:00,200463_01,10,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:01:00,10:01:00,200768_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:02:00,10:02:00,200730_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:04:00,10:04:00,200827_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:05:00,10:05:00,200506_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:06:00,10:06:00,200017_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:07:00,10:07:00,200519_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:07:00,10:07:00,200987_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:09:00,10:09:00,200985_02,18,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:10:00,10:10:00,200895_02,19,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:11:00,10:11:00,200395_02,20,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:11:00,10:11:00,200153_02,21,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:12:00,10:12:00,201100_02,22,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:13:00,10:13:00,200981_02,23,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:14:00,10:14:00,200872_02,24,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:15:00,10:15:00,201056_02,25,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:17:00,10:17:00,200189_02,26,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_09時47分_系統263,10:20:00,10:20:00,200273_01,27,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:22:00,10:22:00,200722_02,28,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:23:00,10:23:00,200343_02,29,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:24:00,10:24:00,200348_02,30,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:26:00,10:26:00,201071_02,31,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:28:00,10:28:00,200542_02,32,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:30:00,10:30:00,200141_02,33,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:31:00,10:31:00,200142_02,34,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:33:00,10:33:00,200262_02,35,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:34:00,10:34:00,201015_02,36,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:35:00,10:35:00,200379_02,37,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:36:00,10:36:00,200455_02,38,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:37:00,10:37:00,200702_02,39,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:38:00,10:38:00,200703_02,40,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:40:00,10:40:00,201081_02,41,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:42:00,10:42:00,200998_02,42,前橋駅,0,0,1
特別ダイヤ１_09時47分_系統263,10:45:00,10:45:00,200718_10,43,前橋駅,1,0,1
特別ダイヤ１_09時48分_系統669,09:48:00,09:48:00,200273_01,1,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,1,1
特別ダイヤ１_09時48分_系統669,09:50:00,09:50:00,200722_02,2,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,09:51:00,09:51:00,200343_02,3,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,09:52:00,09:52:00,200348_02,4,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,09:55:00,09:55:00,201185_02,5,けやきウォーク前橋（南橘団地・前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,09:58:00,09:58:00,200927_01,6,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,09:58:00,09:58:00,200800_02,7,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,09:59:00,09:59:00,200928_02,8,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:01:00,10:01:00,201071_02,9,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:03:00,10:03:00,200542_02,10,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:05:00,10:05:00,200141_02,11,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:06:00,10:06:00,200142_02,12,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:08:00,10:08:00,200262_02,13,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:09:00,10:09:00,201015_02,14,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:10:00,10:10:00,200379_02,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:11:00,10:11:00,200455_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:12:00,10:12:00,200702_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:13:00,10:13:00,200703_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:15:00,10:15:00,201081_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:17:00,10:17:00,200998_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_09時48分_系統669,10:20:00,10:20:00,200718_04,21,けやきウォーク前橋,0,0,1
特別ダイヤ１_09時48分_系統669,10:22:00,10:22:00,200108_01,22,けやきウォーク前橋,0,0,1
特別ダイヤ１_09時48分_系統669,10:23:00,10:23:00,200932_01,23,けやきウォーク前橋,0,0,1
特別ダイヤ１_09時48分_系統669,10:24:00,10:24:00,200668_01,24,けやきウォーク前橋,0,0,1
特別ダイヤ１_09時48分_系統669,10:28:00,10:28:00,200022_01,25,けやきウォーク前橋,1,0,1
特別ダイヤ１_10時02分_系統268,10:02:00,10:02:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_10時02分_系統268,10:03:00,10:03:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:05:00,10:05:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:06:00,10:06:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:06:00,10:06:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:07:00,10:07:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:08:00,10:08:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:09:00,10:09:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:10:00,10:10:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:11:00,10:11:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:12:00,10:12:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:13:00,10:13:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:15:00,10:15:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:17:00,10:17:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:18:00,10:18:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:19:00,10:19:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:21:00,10:21:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:23:00,10:23:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:24:00,10:24:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:25:00,10:25:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:26:00,10:26:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:27:00,10:27:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:27:00,10:27:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:28:00,10:28:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:29:00,10:29:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:29:00,10:29:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:30:00,10:30:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:31:00,10:31:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:32:00,10:32:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:34:00,10:34:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:36:00,10:36:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:37:00,10:37:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_10時02分_系統268,10:40:00,10:40:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_10時10分_系統644,10:10:00,10:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
特別ダイヤ１_10時10分_系統644,10:11:00,10:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_10時10分_系統644,10:13:00,10:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_10時10分_系統644,10:15:00,10:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_10時10分_系統644,10:16:00,10:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_10時10分_系統644,10:17:00,10:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_10時10分_系統644,10:18:00,10:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_10時10分_系統644,10:19:00,10:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_10時10分_系統644,10:20:00,10:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_10時10分_系統644,10:21:00,10:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_10時10分_系統644,10:23:00,10:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:24:00,10:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:25:00,10:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:26:00,10:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:27:00,10:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:29:00,10:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:31:00,10:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:32:00,10:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:33:00,10:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:35:00,10:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
特別ダイヤ１_10時10分_系統644,10:42:00,10:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
特別ダイヤ１_10時30分_系統264,10:30:00,10:30:00,200718_02,1,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,1,1
特別ダイヤ１_10時30分_系統264,10:31:00,10:31:00,200998_01,2,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:33:00,10:33:00,201081_01,3,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:35:00,10:35:00,200703_01,4,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:36:00,10:36:00,200702_01,5,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:38:00,10:38:00,200455_01,6,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:39:00,10:39:00,200379_01,7,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:40:00,10:40:00,201015_01,8,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:41:00,10:41:00,200262_01,9,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:42:00,10:42:00,200142_01,10,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:43:00,10:43:00,200141_01,11,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:44:00,10:44:00,200542_01,12,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:46:00,10:46:00,201071_01,13,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:48:00,10:48:00,200348_01,14,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:49:00,10:49:00,200343_01,15,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:50:00,10:50:00,200722_01,16,渋川駅（群馬大学荒牧・渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:52:00,10:52:00,200273_01,17,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:55:00,10:55:00,200189_01,18,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:57:00,10:57:00,201056_01,19,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:58:00,10:58:00,200872_01,20,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,10:59:00,10:59:00,200981_01,21,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:00:00,11:00:00,201100_01,22,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:01:00,11:01:00,200153_01,23,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:01:00,11:01:00,200395_01,24,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:02:00,11:02:00,200895_01,25,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:03:00,11:03:00,200985_01,26,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:03:00,11:03:00,200987_01,27,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:04:00,11:04:00,200519_01,28,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:05:00,11:05:00,200017_01,29,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:06:00,11:06:00,200506_01,30,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:08:00,11:08:00,200827_01,31,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:10:00,11:10:00,200730_01,32,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:11:00,11:11:00,200768_01,33,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_10時30分_系統264,11:12:00,11:12:00,200463_06,34,渋川市内循環,0,0,1
特別ダイヤ１_10時30分_系統264,11:13:00,11:13:00,200468_01,35,渋川市内循環,0,0,1
特別ダイヤ１_10時30分_系統264,11:15:00,11:15:00,200466_01,36,渋川市内循環,0,0,1
特別ダイヤ１_10時30分_系統264,11:16:00,11:16:00,200704_01,37,渋川市内循環,0,0,1
特別ダイヤ１_10時30分_系統264,11:17:00,11:17:00,200476_02,38,渋川市内循環,0,0,1
特別ダイヤ１_10時30分_系統264,11:18:00,11:18:00,200477_02,39,渋川市内循環,0,0,1
特別ダイヤ１_10時30分_系統264,11:19:00,11:19:00,200430_02,40,渋川市内循環,0,0,1
特別ダイヤ１_10時30分_系統264,11:20:00,11:20:00,200007_02,41,渋川市内循環,0,0,1
特別ダイヤ１_10時30分_系統264,11:25:00,11:25:00,210463_10,42,渋川市内循環,1,0,1
特別ダイヤ１_10時30分_系統267,10:30:00,10:30:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_10時30分_系統267,10:31:00,10:31:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:32:00,10:32:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:34:00,10:34:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:35:00,10:35:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:36:00,10:36:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:37:00,10:37:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:37:00,10:37:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:39:00,10:39:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:40:00,10:40:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:41:00,10:41:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:41:00,10:41:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:42:00,10:42:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:43:00,10:43:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:44:00,10:44:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:45:00,10:45:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:47:00,10:47:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:48:00,10:48:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:49:00,10:49:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:50:00,10:50:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:52:00,10:52:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:54:00,10:54:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:56:00,10:56:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:57:00,10:57:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,10:59:00,10:59:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,11:00:00,11:00:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,11:01:00,11:01:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,11:02:00,11:02:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,11:03:00,11:03:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,11:04:00,11:04:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,11:06:00,11:06:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,11:08:00,11:08:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_10時30分_系統267,11:11:00,11:11:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_10時50分_系統643,10:50:00,10:50:00,201440_01,1,前橋駅（南橘団地・群大病院 経由）,0,1,1
特別ダイヤ１_10時50分_系統643,10:55:00,10:55:00,200189_02,2,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,10:57:00,10:57:00,200722_02,3,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,10:58:00,10:58:00,200343_02,4,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,10:59:00,10:59:00,200348_02,5,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:02:00,11:02:00,201185_02,6,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:05:00,11:05:00,200927_01,7,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:05:00,11:05:00,200800_02,8,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:06:00,11:06:00,200928_02,9,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:08:00,11:08:00,201071_02,10,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:10:00,11:10:00,200542_02,11,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:12:00,11:12:00,200141_02,12,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:14:00,11:14:00,200142_02,13,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:15:00,11:15:00,200503_01,14,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_10時50分_系統643,11:17:00,11:17:00,200261_01,15,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:18:00,11:18:00,200503_02,16,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:21:00,11:21:00,200262_02,17,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:22:00,11:22:00,201015_02,18,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:23:00,11:23:00,200379_02,19,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:24:00,11:24:00,200455_02,20,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:25:00,11:25:00,200702_02,21,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:26:00,11:26:00,200703_02,22,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:28:00,11:28:00,201081_02,23,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:30:00,11:30:00,200998_02,24,前橋駅,0,0,1
特別ダイヤ１_10時50分_系統643,11:33:00,11:33:00,200718_10,25,前橋駅,1,0,1
特別ダイヤ１_10時57分_系統268,10:57:00,10:57:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_10時57分_系統268,10:58:00,10:58:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:00:00,11:00:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:02:00,11:02:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:03:00,11:03:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:04:00,11:04:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:05:00,11:05:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:06:00,11:06:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:07:00,11:07:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:08:00,11:08:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:09:00,11:09:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:10:00,11:10:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:12:00,11:12:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:14:00,11:14:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:15:00,11:15:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:16:00,11:16:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:18:00,11:18:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:20:00,11:20:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:21:00,11:21:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:22:00,11:22:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:23:00,11:23:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:24:00,11:24:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:24:00,11:24:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:25:00,11:25:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:26:00,11:26:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:26:00,11:26:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:27:00,11:27:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:28:00,11:28:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:29:00,11:29:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:31:00,11:31:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:33:00,11:33:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:34:00,11:34:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_10時57分_系統268,11:37:00,11:37:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_11時00分_系統663,11:00:00,11:00:00,200463_01,1,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,1,1
特別ダイヤ１_11時00分_系統663,11:01:00,11:01:00,200768_02,2,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:02:00,11:02:00,200730_02,3,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:04:00,11:04:00,200827_02,4,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:05:00,11:05:00,200506_02,5,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:06:00,11:06:00,200017_02,6,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:07:00,11:07:00,200519_02,7,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:07:00,11:07:00,200987_02,8,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:09:00,11:09:00,200985_02,9,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:10:00,11:10:00,200895_02,10,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:11:00,11:11:00,200395_02,11,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:11:00,11:11:00,200153_02,12,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:12:00,11:12:00,201100_02,13,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:13:00,11:13:00,200981_02,14,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:14:00,11:14:00,200872_02,15,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:15:00,11:15:00,201056_02,16,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:17:00,11:17:00,200189_02,17,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:20:00,11:20:00,200273_01,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:22:00,11:22:00,200722_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:23:00,11:23:00,200343_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:24:00,11:24:00,200348_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:26:00,11:26:00,201071_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:28:00,11:28:00,200542_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:30:00,11:30:00,200141_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:31:00,11:31:00,200142_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:33:00,11:33:00,200262_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:34:00,11:34:00,201015_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:35:00,11:35:00,200379_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:36:00,11:36:00,200455_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:37:00,11:37:00,200702_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:38:00,11:38:00,200703_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:40:00,11:40:00,201081_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:42:00,11:42:00,200998_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_11時00分_系統663,11:45:00,11:45:00,200718_04,34,けやきウォーク前橋,0,0,1
特別ダイヤ１_11時00分_系統663,11:47:00,11:47:00,200108_01,35,けやきウォーク前橋,0,0,1
特別ダイヤ１_11時00分_系統663,11:48:00,11:48:00,200932_01,36,けやきウォーク前橋,0,0,1
特別ダイヤ１_11時00分_系統663,11:49:00,11:49:00,200668_01,37,けやきウォーク前橋,0,0,1
特別ダイヤ１_11時00分_系統663,11:53:00,11:53:00,200022_01,38,けやきウォーク前橋,1,0,1
特別ダイヤ１_11時10分_系統584,11:10:00,11:10:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
特別ダイヤ１_11時10分_系統584,11:11:00,11:11:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:13:00,11:13:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:15:00,11:15:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:16:00,11:16:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:18:00,11:18:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:19:00,11:19:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:20:00,11:20:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:21:00,11:21:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:22:00,11:22:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:24:00,11:24:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:25:00,11:25:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:26:00,11:26:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:27:00,11:27:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:28:00,11:28:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:30:00,11:30:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:31:00,11:31:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:32:00,11:32:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_11時10分_系統584,11:34:00,11:34:00,200927_01,19,群馬大学荒牧,0,0,1
特別ダイヤ１_11時10分_系統584,11:35:00,11:35:00,201185_01,20,群馬大学荒牧,0,0,1
特別ダイヤ１_11時10分_系統584,11:39:00,11:39:00,200348_01,21,群馬大学荒牧,0,0,1
特別ダイヤ１_11時10分_系統584,11:40:00,11:40:00,200343_01,22,群馬大学荒牧,0,0,1
特別ダイヤ１_11時10分_系統584,11:41:00,11:41:00,200722_01,23,群馬大学荒牧,0,0,1
特別ダイヤ１_11時10分_系統584,11:44:00,11:44:00,200273_01,24,群馬大学荒牧,1,0,1
特別ダイヤ１_11時17分_系統261,11:17:00,11:17:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
特別ダイヤ１_11時17分_系統261,11:18:00,11:18:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時17分_系統261,11:19:00,11:19:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時17分_系統261,11:20:00,11:20:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時17分_系統261,11:21:00,11:21:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時17分_系統261,11:22:00,11:22:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時17分_系統261,11:23:00,11:23:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時17分_系統261,11:24:00,11:24:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時17分_系統261,11:25:00,11:25:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時17分_系統261,11:30:00,11:30:00,200463_01,10,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:31:00,11:31:00,200768_02,11,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:32:00,11:32:00,200730_02,12,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:34:00,11:34:00,200827_02,13,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:35:00,11:35:00,200506_02,14,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:36:00,11:36:00,200017_02,15,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:37:00,11:37:00,200519_02,16,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:37:00,11:37:00,200987_02,17,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:39:00,11:39:00,200985_02,18,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:40:00,11:40:00,200895_02,19,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:41:00,11:41:00,200395_02,20,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:41:00,11:41:00,200153_02,21,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:42:00,11:42:00,201100_02,22,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:43:00,11:43:00,200981_02,23,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:44:00,11:44:00,200872_02,24,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:45:00,11:45:00,201056_02,25,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:47:00,11:47:00,200189_02,26,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:49:00,11:49:00,200722_02,27,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:50:00,11:50:00,200343_02,28,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:51:00,11:51:00,200348_02,29,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:53:00,11:53:00,201071_02,30,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:55:00,11:55:00,200542_02,31,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:57:00,11:57:00,200141_02,32,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,11:58:00,11:58:00,200142_02,33,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,12:00:00,12:00:00,200262_02,34,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,12:01:00,12:01:00,201015_02,35,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,12:02:00,12:02:00,200379_02,36,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,12:03:00,12:03:00,200455_02,37,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,12:04:00,12:04:00,200702_02,38,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,12:05:00,12:05:00,200703_02,39,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,12:07:00,12:07:00,201081_02,40,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,12:09:00,12:09:00,200998_02,41,前橋駅,0,0,1
特別ダイヤ１_11時17分_系統261,12:12:00,12:12:00,200718_10,42,前橋駅,1,0,1
特別ダイヤ１_11時30分_系統266,11:30:00,11:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_11時30分_系統266,11:31:00,11:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:33:00,11:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:35:00,11:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:36:00,11:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:38:00,11:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:39:00,11:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:40:00,11:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:41:00,11:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:42:00,11:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:43:00,11:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:44:00,11:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:46:00,11:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:48:00,11:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:49:00,11:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:50:00,11:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_11時30分_系統266,11:52:00,11:52:00,200273_01,17,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,11:55:00,11:55:00,200189_01,18,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,11:57:00,11:57:00,201056_01,19,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,11:58:00,11:58:00,200872_01,20,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,11:59:00,11:59:00,200981_01,21,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:00:00,12:00:00,201100_01,22,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:01:00,12:01:00,200153_01,23,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:01:00,12:01:00,200395_01,24,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:02:00,12:02:00,200895_01,25,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:03:00,12:03:00,200985_01,26,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:03:00,12:03:00,200987_01,27,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:04:00,12:04:00,200519_01,28,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:05:00,12:05:00,200017_01,29,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:06:00,12:06:00,200506_01,30,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:08:00,12:08:00,200827_01,31,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:10:00,12:10:00,200730_01,32,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:11:00,12:11:00,200768_01,33,渋川駅,0,0,1
特別ダイヤ１_11時30分_系統266,12:14:00,12:14:00,200463_10,34,渋川駅,1,0,1
特別ダイヤ１_11時57分_系統262,11:57:00,11:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
特別ダイヤ１_11時57分_系統262,11:58:00,11:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:00:00,12:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:02:00,12:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:03:00,12:03:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:05:00,12:05:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:06:00,12:06:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:07:00,12:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:08:00,12:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:09:00,12:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:10:00,12:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:11:00,12:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:13:00,12:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:15:00,12:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:16:00,12:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:17:00,12:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:20:00,12:20:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:22:00,12:22:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:23:00,12:23:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:24:00,12:24:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:25:00,12:25:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:26:00,12:26:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:26:00,12:26:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:27:00,12:27:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:28:00,12:28:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:28:00,12:28:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:29:00,12:29:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:30:00,12:30:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:31:00,12:31:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:33:00,12:33:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:35:00,12:35:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:36:00,12:36:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_11時57分_系統262,12:37:00,12:37:00,200463_06,33,渋川市内循環,0,0,1
特別ダイヤ１_11時57分_系統262,12:38:00,12:38:00,200468_01,34,渋川市内循環,0,0,1
特別ダイヤ１_11時57分_系統262,12:40:00,12:40:00,200466_01,35,渋川市内循環,0,0,1
特別ダイヤ１_11時57分_系統262,12:41:00,12:41:00,200704_01,36,渋川市内循環,0,0,1
特別ダイヤ１_11時57分_系統262,12:42:00,12:42:00,200476_02,37,渋川市内循環,0,0,1
特別ダイヤ１_11時57分_系統262,12:43:00,12:43:00,200477_02,38,渋川市内循環,0,0,1
特別ダイヤ１_11時57分_系統262,12:44:00,12:44:00,200430_02,39,渋川市内循環,0,0,1
特別ダイヤ１_11時57分_系統262,12:45:00,12:45:00,200007_02,40,渋川市内循環,0,0,1
特別ダイヤ１_11時57分_系統262,12:50:00,12:50:00,210463_10,41,渋川市内循環,1,0,1
特別ダイヤ１_11時58分_系統587,11:58:00,11:58:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
特別ダイヤ１_11時58分_系統587,12:00:00,12:00:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_11時58分_系統587,12:01:00,12:01:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_11時58分_系統587,12:02:00,12:02:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_11時58分_系統587,12:04:00,12:04:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_11時58分_系統587,12:06:00,12:06:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_11時58分_系統587,12:08:00,12:08:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_11時58分_系統587,12:10:00,12:10:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_11時58分_系統587,12:11:00,12:11:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_11時58分_系統587,12:13:00,12:13:00,200261_01,10,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:14:00,12:14:00,200503_02,11,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:17:00,12:17:00,200262_02,12,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:18:00,12:18:00,201015_02,13,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:19:00,12:19:00,200379_02,14,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:20:00,12:20:00,200455_02,15,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:21:00,12:21:00,200702_02,16,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:22:00,12:22:00,200703_02,17,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:24:00,12:24:00,201081_02,18,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:26:00,12:26:00,200998_02,19,前橋駅,0,0,1
特別ダイヤ１_11時58分_系統587,12:29:00,12:29:00,200718_10,20,前橋駅,1,0,1
特別ダイヤ１_12時00分_系統663,12:00:00,12:00:00,200463_01,1,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,1,1
特別ダイヤ１_12時00分_系統663,12:01:00,12:01:00,200768_02,2,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:02:00,12:02:00,200730_02,3,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:04:00,12:04:00,200827_02,4,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:05:00,12:05:00,200506_02,5,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:06:00,12:06:00,200017_02,6,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:07:00,12:07:00,200519_02,7,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:07:00,12:07:00,200987_02,8,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:09:00,12:09:00,200985_02,9,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:10:00,12:10:00,200895_02,10,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:11:00,12:11:00,200395_02,11,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:11:00,12:11:00,200153_02,12,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:12:00,12:12:00,201100_02,13,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:13:00,12:13:00,200981_02,14,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:14:00,12:14:00,200872_02,15,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:15:00,12:15:00,201056_02,16,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:17:00,12:17:00,200189_02,17,けやきウォーク前橋（群馬大学荒牧・前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:20:00,12:20:00,200273_01,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:22:00,12:22:00,200722_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:23:00,12:23:00,200343_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:24:00,12:24:00,200348_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:26:00,12:26:00,201071_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:28:00,12:28:00,200542_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:30:00,12:30:00,200141_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:31:00,12:31:00,200142_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:33:00,12:33:00,200262_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:34:00,12:34:00,201015_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:35:00,12:35:00,200379_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:36:00,12:36:00,200455_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:37:00,12:37:00,200702_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:38:00,12:38:00,200703_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:40:00,12:40:00,201081_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:42:00,12:42:00,200998_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時00分_系統663,12:45:00,12:45:00,200718_04,34,けやきウォーク前橋,0,0,1
特別ダイヤ１_12時00分_系統663,12:47:00,12:47:00,200108_01,35,けやきウォーク前橋,0,0,1
特別ダイヤ１_12時00分_系統663,12:48:00,12:48:00,200932_01,36,けやきウォーク前橋,0,0,1
特別ダイヤ１_12時00分_系統663,12:49:00,12:49:00,200668_01,37,けやきウォーク前橋,0,0,1
特別ダイヤ１_12時00分_系統663,12:53:00,12:53:00,200022_01,38,けやきウォーク前橋,1,0,1
特別ダイヤ１_12時10分_系統644,12:10:00,12:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
特別ダイヤ１_12時10分_系統644,12:11:00,12:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_12時10分_系統644,12:13:00,12:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_12時10分_系統644,12:15:00,12:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_12時10分_系統644,12:16:00,12:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_12時10分_系統644,12:17:00,12:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_12時10分_系統644,12:18:00,12:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_12時10分_系統644,12:19:00,12:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_12時10分_系統644,12:20:00,12:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_12時10分_系統644,12:21:00,12:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_12時10分_系統644,12:23:00,12:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:24:00,12:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:25:00,12:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:26:00,12:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:27:00,12:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:29:00,12:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:31:00,12:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:32:00,12:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:33:00,12:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:35:00,12:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
特別ダイヤ１_12時10分_系統644,12:42:00,12:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
特別ダイヤ１_12時30分_系統266,12:30:00,12:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_12時30分_系統266,12:31:00,12:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:33:00,12:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:35:00,12:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:36:00,12:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:38:00,12:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:39:00,12:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:40:00,12:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:41:00,12:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:42:00,12:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:43:00,12:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:44:00,12:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:46:00,12:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:48:00,12:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:49:00,12:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:50:00,12:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_12時30分_系統266,12:52:00,12:52:00,200273_01,17,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,12:55:00,12:55:00,200189_01,18,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,12:57:00,12:57:00,201056_01,19,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,12:58:00,12:58:00,200872_01,20,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,12:59:00,12:59:00,200981_01,21,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:00:00,13:00:00,201100_01,22,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:01:00,13:01:00,200153_01,23,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:01:00,13:01:00,200395_01,24,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:02:00,13:02:00,200895_01,25,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:03:00,13:03:00,200985_01,26,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:03:00,13:03:00,200987_01,27,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:04:00,13:04:00,200519_01,28,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:05:00,13:05:00,200017_01,29,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:06:00,13:06:00,200506_01,30,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:08:00,13:08:00,200827_01,31,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:10:00,13:10:00,200730_01,32,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:11:00,13:11:00,200768_01,33,渋川駅,0,0,1
特別ダイヤ１_12時30分_系統266,13:14:00,13:14:00,200463_10,34,渋川駅,1,0,1
特別ダイヤ１_12時30分_系統267,12:30:00,12:30:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_12時30分_系統267,12:31:00,12:31:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:32:00,12:32:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:34:00,12:34:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:35:00,12:35:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:36:00,12:36:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:37:00,12:37:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:37:00,12:37:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:39:00,12:39:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:40:00,12:40:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:41:00,12:41:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:41:00,12:41:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:42:00,12:42:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:43:00,12:43:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:44:00,12:44:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:45:00,12:45:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:47:00,12:47:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:48:00,12:48:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:49:00,12:49:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:50:00,12:50:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:52:00,12:52:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:54:00,12:54:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:56:00,12:56:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:57:00,12:57:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,12:59:00,12:59:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,13:00:00,13:00:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,13:01:00,13:01:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,13:02:00,13:02:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,13:03:00,13:03:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,13:04:00,13:04:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,13:06:00,13:06:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,13:08:00,13:08:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_12時30分_系統267,13:11:00,13:11:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_12時47分_系統662,12:47:00,12:47:00,200022_01,1,渋川駅（前橋駅・渋川市内循環 経由）,0,1,1
特別ダイヤ１_12時47分_系統662,12:50:00,12:50:00,200668_02,2,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,12:51:00,12:51:00,200932_02,3,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,12:52:00,12:52:00,200108_02,4,渋川駅（前橋駅・渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,12:57:00,12:57:00,200718_02,5,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,12:58:00,12:58:00,200998_01,6,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:00:00,13:00:00,201081_01,7,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:02:00,13:02:00,200703_01,8,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:03:00,13:03:00,200702_01,9,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:05:00,13:05:00,200455_01,10,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:06:00,13:06:00,200379_01,11,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:07:00,13:07:00,201015_01,12,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:08:00,13:08:00,200262_01,13,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:09:00,13:09:00,200142_01,14,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:10:00,13:10:00,200141_01,15,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:11:00,13:11:00,200542_01,16,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:13:00,13:13:00,201071_01,17,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:15:00,13:15:00,200348_01,18,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:16:00,13:16:00,200343_01,19,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:17:00,13:17:00,200722_01,20,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:19:00,13:19:00,200189_01,21,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:21:00,13:21:00,201056_01,22,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:22:00,13:22:00,200872_01,23,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:23:00,13:23:00,200981_01,24,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:24:00,13:24:00,201100_01,25,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:25:00,13:25:00,200153_01,26,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:25:00,13:25:00,200395_01,27,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:26:00,13:26:00,200895_01,28,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:27:00,13:27:00,200985_01,29,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:27:00,13:27:00,200987_01,30,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:28:00,13:28:00,200519_01,31,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:29:00,13:29:00,200017_01,32,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:30:00,13:30:00,200506_01,33,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:32:00,13:32:00,200827_01,34,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:34:00,13:34:00,200730_01,35,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:35:00,13:35:00,200768_01,36,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時47分_系統662,13:36:00,13:36:00,200463_06,37,渋川市内循環,0,0,1
特別ダイヤ１_12時47分_系統662,13:37:00,13:37:00,200468_01,38,渋川市内循環,0,0,1
特別ダイヤ１_12時47分_系統662,13:39:00,13:39:00,200466_01,39,渋川市内循環,0,0,1
特別ダイヤ１_12時47分_系統662,13:40:00,13:40:00,200704_01,40,渋川市内循環,0,0,1
特別ダイヤ１_12時47分_系統662,13:41:00,13:41:00,200476_02,41,渋川市内循環,0,0,1
特別ダイヤ１_12時47分_系統662,13:42:00,13:42:00,200477_02,42,渋川市内循環,0,0,1
特別ダイヤ１_12時47分_系統662,13:43:00,13:43:00,200430_02,43,渋川市内循環,0,0,1
特別ダイヤ１_12時47分_系統662,13:44:00,13:44:00,200007_02,44,渋川市内循環,0,0,1
特別ダイヤ１_12時47分_系統662,13:49:00,13:49:00,210463_10,45,渋川市内循環,1,0,1
特別ダイヤ１_12時50分_系統645,12:50:00,12:50:00,201440_01,1,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,1,1
特別ダイヤ１_12時50分_系統645,12:55:00,12:55:00,200189_02,2,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,12:57:00,12:57:00,200722_02,3,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,12:58:00,12:58:00,200343_02,4,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,12:59:00,12:59:00,200348_02,5,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:02:00,13:02:00,201185_02,6,けやきウォーク前橋（南橘団地・群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:05:00,13:05:00,200927_01,7,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:05:00,13:05:00,200800_02,8,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:06:00,13:06:00,200928_02,9,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:08:00,13:08:00,201071_02,10,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:10:00,13:10:00,200542_02,11,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:12:00,13:12:00,200141_02,12,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:14:00,13:14:00,200142_02,13,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:15:00,13:15:00,200503_01,14,けやきウォーク前橋（群大病院・前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:17:00,13:17:00,200261_01,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:18:00,13:18:00,200503_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:21:00,13:21:00,200262_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:22:00,13:22:00,201015_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:23:00,13:23:00,200379_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:24:00,13:24:00,200455_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:25:00,13:25:00,200702_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:26:00,13:26:00,200703_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:28:00,13:28:00,201081_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:30:00,13:30:00,200998_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_12時50分_系統645,13:33:00,13:33:00,200718_04,25,けやきウォーク前橋,0,0,1
特別ダイヤ１_12時50分_系統645,13:35:00,13:35:00,200108_01,26,けやきウォーク前橋,0,0,1
特別ダイヤ１_12時50分_系統645,13:36:00,13:36:00,200932_01,27,けやきウォーク前橋,0,0,1
特別ダイヤ１_12時50分_系統645,13:37:00,13:37:00,200668_01,28,けやきウォーク前橋,0,0,1
特別ダイヤ１_12時50分_系統645,13:41:00,13:41:00,200022_01,29,けやきウォーク前橋,1,0,1
特別ダイヤ１_12時52分_系統261,12:52:00,12:52:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
特別ダイヤ１_12時52分_系統261,12:53:00,12:53:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時52分_系統261,12:54:00,12:54:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時52分_系統261,12:55:00,12:55:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時52分_系統261,12:56:00,12:56:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時52分_系統261,12:57:00,12:57:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時52分_系統261,12:58:00,12:58:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時52分_系統261,12:59:00,12:59:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時52分_系統261,13:00:00,13:00:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_12時52分_系統261,13:05:00,13:05:00,200463_01,10,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:06:00,13:06:00,200768_02,11,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:07:00,13:07:00,200730_02,12,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:09:00,13:09:00,200827_02,13,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:10:00,13:10:00,200506_02,14,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:11:00,13:11:00,200017_02,15,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:12:00,13:12:00,200519_02,16,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:12:00,13:12:00,200987_02,17,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:14:00,13:14:00,200985_02,18,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:15:00,13:15:00,200895_02,19,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:16:00,13:16:00,200395_02,20,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:16:00,13:16:00,200153_02,21,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:17:00,13:17:00,201100_02,22,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:18:00,13:18:00,200981_02,23,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:19:00,13:19:00,200872_02,24,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:20:00,13:20:00,201056_02,25,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:22:00,13:22:00,200189_02,26,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:23:00,13:23:00,200722_02,27,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:24:00,13:24:00,200343_02,28,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:25:00,13:25:00,200348_02,29,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:27:00,13:27:00,201071_02,30,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:29:00,13:29:00,200542_02,31,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:31:00,13:31:00,200141_02,32,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:32:00,13:32:00,200142_02,33,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:34:00,13:34:00,200262_02,34,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:35:00,13:35:00,201015_02,35,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:36:00,13:36:00,200379_02,36,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:37:00,13:37:00,200455_02,37,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:38:00,13:38:00,200702_02,38,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:39:00,13:39:00,200703_02,39,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:41:00,13:41:00,201081_02,40,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:43:00,13:43:00,200998_02,41,前橋駅,0,0,1
特別ダイヤ１_12時52分_系統261,13:46:00,13:46:00,200718_10,42,前橋駅,1,0,1
特別ダイヤ１_13時10分_系統584,13:10:00,13:10:00,200718_02,1,群馬大学荒牧（群大病院・南橘団地 経由）,0,1,1
特別ダイヤ１_13時10分_系統584,13:11:00,13:11:00,200998_01,2,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:13:00,13:13:00,201081_01,3,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:15:00,13:15:00,200703_01,4,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:16:00,13:16:00,200702_01,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:18:00,13:18:00,200455_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:19:00,13:19:00,200379_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:20:00,13:20:00,201015_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:21:00,13:21:00,200262_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:22:00,13:22:00,200503_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:24:00,13:24:00,200261_01,11,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:25:00,13:25:00,200503_02,12,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:26:00,13:26:00,200142_01,13,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:27:00,13:27:00,200141_01,14,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:28:00,13:28:00,200542_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:30:00,13:30:00,201071_01,16,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:31:00,13:31:00,200928_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:32:00,13:32:00,200800_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_13時10分_系統584,13:34:00,13:34:00,200927_01,19,群馬大学荒牧,0,0,1
特別ダイヤ１_13時10分_系統584,13:35:00,13:35:00,201185_01,20,群馬大学荒牧,0,0,1
特別ダイヤ１_13時10分_系統584,13:39:00,13:39:00,200348_01,21,群馬大学荒牧,0,0,1
特別ダイヤ１_13時10分_系統584,13:40:00,13:40:00,200343_01,22,群馬大学荒牧,0,0,1
特別ダイヤ１_13時10分_系統584,13:41:00,13:41:00,200722_01,23,群馬大学荒牧,0,0,1
特別ダイヤ１_13時10分_系統584,13:44:00,13:44:00,200273_01,24,群馬大学荒牧,1,0,1
特別ダイヤ１_13時30分_系統262,13:30:00,13:30:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
特別ダイヤ１_13時30分_系統262,13:31:00,13:31:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:33:00,13:33:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:35:00,13:35:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:36:00,13:36:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:38:00,13:38:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:39:00,13:39:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:40:00,13:40:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:41:00,13:41:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:42:00,13:42:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:43:00,13:43:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:44:00,13:44:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:46:00,13:46:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:48:00,13:48:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:49:00,13:49:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:50:00,13:50:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:52:00,13:52:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:54:00,13:54:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:55:00,13:55:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:56:00,13:56:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:57:00,13:57:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:58:00,13:58:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:58:00,13:58:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,13:59:00,13:59:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,14:00:00,14:00:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,14:00:00,14:00:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,14:01:00,14:01:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,14:02:00,14:02:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,14:03:00,14:03:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,14:05:00,14:05:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,14:07:00,14:07:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,14:08:00,14:08:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_13時30分_系統262,14:09:00,14:09:00,200463_06,33,渋川市内循環,0,0,1
特別ダイヤ１_13時30分_系統262,14:10:00,14:10:00,200468_01,34,渋川市内循環,0,0,1
特別ダイヤ１_13時30分_系統262,14:12:00,14:12:00,200466_01,35,渋川市内循環,0,0,1
特別ダイヤ１_13時30分_系統262,14:13:00,14:13:00,200704_01,36,渋川市内循環,0,0,1
特別ダイヤ１_13時30分_系統262,14:14:00,14:14:00,200476_02,37,渋川市内循環,0,0,1
特別ダイヤ１_13時30分_系統262,14:15:00,14:15:00,200477_02,38,渋川市内循環,0,0,1
特別ダイヤ１_13時30分_系統262,14:16:00,14:16:00,200430_02,39,渋川市内循環,0,0,1
特別ダイヤ１_13時30分_系統262,14:17:00,14:17:00,200007_02,40,渋川市内循環,0,0,1
特別ダイヤ１_13時30分_系統262,14:22:00,14:22:00,210463_10,41,渋川市内循環,1,0,1
特別ダイヤ１_13時30分_系統267,13:30:00,13:30:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_13時30分_系統267,13:31:00,13:31:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:32:00,13:32:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:34:00,13:34:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:35:00,13:35:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:36:00,13:36:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:37:00,13:37:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:37:00,13:37:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:39:00,13:39:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:40:00,13:40:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:41:00,13:41:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:41:00,13:41:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:42:00,13:42:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:43:00,13:43:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:44:00,13:44:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:45:00,13:45:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:47:00,13:47:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:48:00,13:48:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:49:00,13:49:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:50:00,13:50:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:52:00,13:52:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:54:00,13:54:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:56:00,13:56:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:57:00,13:57:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,13:59:00,13:59:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,14:00:00,14:00:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,14:01:00,14:01:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,14:02:00,14:02:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,14:03:00,14:03:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,14:04:00,14:04:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,14:06:00,14:06:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,14:08:00,14:08:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_13時30分_系統267,14:11:00,14:11:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_13時55分_系統587,13:55:00,13:55:00,200273_01,1,前橋駅（群大病院 経由）,0,1,1
特別ダイヤ１_13時55分_系統587,13:57:00,13:57:00,200722_02,2,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_13時55分_系統587,13:58:00,13:58:00,200343_02,3,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_13時55分_系統587,13:59:00,13:59:00,200348_02,4,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_13時55分_系統587,14:01:00,14:01:00,201071_02,5,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_13時55分_系統587,14:03:00,14:03:00,200542_02,6,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_13時55分_系統587,14:05:00,14:05:00,200141_02,7,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_13時55分_系統587,14:07:00,14:07:00,200142_02,8,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_13時55分_系統587,14:08:00,14:08:00,200503_01,9,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_13時55分_系統587,14:10:00,14:10:00,200261_01,10,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:11:00,14:11:00,200503_02,11,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:14:00,14:14:00,200262_02,12,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:15:00,14:15:00,201015_02,13,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:16:00,14:16:00,200379_02,14,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:17:00,14:17:00,200455_02,15,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:18:00,14:18:00,200702_02,16,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:19:00,14:19:00,200703_02,17,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:21:00,14:21:00,201081_02,18,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:23:00,14:23:00,200998_02,19,前橋駅,0,0,1
特別ダイヤ１_13時55分_系統587,14:26:00,14:26:00,200718_10,20,前橋駅,1,0,1
特別ダイヤ１_13時57分_系統268,13:57:00,13:57:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_13時57分_系統268,13:58:00,13:58:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:00:00,14:00:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:02:00,14:02:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:03:00,14:03:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:04:00,14:04:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:05:00,14:05:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:06:00,14:06:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:07:00,14:07:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:08:00,14:08:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:09:00,14:09:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:10:00,14:10:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:12:00,14:12:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:14:00,14:14:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:15:00,14:15:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:16:00,14:16:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:18:00,14:18:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:20:00,14:20:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:21:00,14:21:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:22:00,14:22:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:23:00,14:23:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:24:00,14:24:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:24:00,14:24:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:25:00,14:25:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:26:00,14:26:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:26:00,14:26:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:27:00,14:27:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:28:00,14:28:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:29:00,14:29:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:31:00,14:31:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:33:00,14:33:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:34:00,14:34:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_13時57分_系統268,14:37:00,14:37:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_14時00分_系統265,14:00:00,14:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_14時00分_系統265,14:01:00,14:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:02:00,14:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:04:00,14:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:05:00,14:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:06:00,14:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:07:00,14:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:07:00,14:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:09:00,14:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:10:00,14:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:11:00,14:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:11:00,14:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:12:00,14:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:13:00,14:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:14:00,14:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:15:00,14:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:17:00,14:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時00分_系統265,14:20:00,14:20:00,200273_01,18,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:22:00,14:22:00,200722_02,19,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:23:00,14:23:00,200343_02,20,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:24:00,14:24:00,200348_02,21,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:26:00,14:26:00,201071_02,22,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:28:00,14:28:00,200542_02,23,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:30:00,14:30:00,200141_02,24,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:31:00,14:31:00,200142_02,25,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:33:00,14:33:00,200262_02,26,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:34:00,14:34:00,201015_02,27,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:35:00,14:35:00,200379_02,28,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:36:00,14:36:00,200455_02,29,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:37:00,14:37:00,200702_02,30,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:38:00,14:38:00,200703_02,31,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:40:00,14:40:00,201081_02,32,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:42:00,14:42:00,200998_02,33,前橋駅,0,0,1
特別ダイヤ１_14時00分_系統265,14:45:00,14:45:00,200718_10,34,前橋駅,1,0,1
特別ダイヤ１_14時10分_系統644,14:10:00,14:10:00,200718_02,1,道の駅まえばし赤城（群大病院 経由）,0,1,1
特別ダイヤ１_14時10分_系統644,14:11:00,14:11:00,200998_01,2,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_14時10分_系統644,14:13:00,14:13:00,201081_01,3,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_14時10分_系統644,14:15:00,14:15:00,200703_01,4,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_14時10分_系統644,14:16:00,14:16:00,200702_01,5,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_14時10分_系統644,14:17:00,14:17:00,200455_01,6,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_14時10分_系統644,14:18:00,14:18:00,200379_01,7,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_14時10分_系統644,14:19:00,14:19:00,201015_01,8,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_14時10分_系統644,14:20:00,14:20:00,200262_01,9,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_14時10分_系統644,14:21:00,14:21:00,200503_01,10,道の駅まえばし赤城（群大病院 経由）,0,0,1
特別ダイヤ１_14時10分_系統644,14:23:00,14:23:00,200261_01,11,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:24:00,14:24:00,200503_02,12,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:25:00,14:25:00,200142_01,13,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:26:00,14:26:00,200141_01,14,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:27:00,14:27:00,200542_01,15,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:29:00,14:29:00,201071_01,16,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:31:00,14:31:00,200348_01,17,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:32:00,14:32:00,200343_01,18,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:33:00,14:33:00,200722_01,19,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:35:00,14:35:00,200189_01,20,道の駅まえばし赤城,0,0,1
特別ダイヤ１_14時10分_系統644,14:42:00,14:42:00,201440_01,21,道の駅まえばし赤城,1,0,1
特別ダイヤ１_14時20分_系統661,14:20:00,14:20:00,210463_05,1,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,1,1
特別ダイヤ１_14時20分_系統661,14:21:00,14:21:00,200007_01,2,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:22:00,14:22:00,200430_01,3,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:23:00,14:23:00,200477_01,4,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:24:00,14:24:00,200476_01,5,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:25:00,14:25:00,200704_02,6,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:26:00,14:26:00,200467_01,7,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:27:00,14:27:00,200466_02,8,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:28:00,14:28:00,200468_02,9,けやきウォーク前橋（渋川市内循環・前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:33:00,14:33:00,200463_01,10,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:34:00,14:34:00,200768_02,11,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:35:00,14:35:00,200730_02,12,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:37:00,14:37:00,200827_02,13,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:38:00,14:38:00,200506_02,14,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:39:00,14:39:00,200017_02,15,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:40:00,14:40:00,200519_02,16,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:40:00,14:40:00,200987_02,17,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:42:00,14:42:00,200985_02,18,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:43:00,14:43:00,200895_02,19,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:44:00,14:44:00,200395_02,20,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:44:00,14:44:00,200153_02,21,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:45:00,14:45:00,201100_02,22,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:46:00,14:46:00,200981_02,23,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:47:00,14:47:00,200872_02,24,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:48:00,14:48:00,201056_02,25,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:50:00,14:50:00,200189_02,26,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:52:00,14:52:00,200722_02,27,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:53:00,14:53:00,200343_02,28,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:54:00,14:54:00,200348_02,29,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:56:00,14:56:00,201071_02,30,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,14:58:00,14:58:00,200542_02,31,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:00:00,15:00:00,200141_02,32,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:01:00,15:01:00,200142_02,33,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:03:00,15:03:00,200262_02,34,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:04:00,15:04:00,201015_02,35,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:05:00,15:05:00,200379_02,36,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:06:00,15:06:00,200455_02,37,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:07:00,15:07:00,200702_02,38,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:08:00,15:08:00,200703_02,39,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:10:00,15:10:00,201081_02,40,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:12:00,15:12:00,200998_02,41,けやきウォーク前橋（前橋駅 経由）,0,0,1
特別ダイヤ１_14時20分_系統661,15:15:00,15:15:00,200718_04,42,けやきウォーク前橋,0,0,1
特別ダイヤ１_14時20分_系統661,15:17:00,15:17:00,200108_01,43,けやきウォーク前橋,0,0,1
特別ダイヤ１_14時20分_系統661,15:18:00,15:18:00,200932_01,44,けやきウォーク前橋,0,0,1
特別ダイヤ１_14時20分_系統661,15:19:00,15:19:00,200668_01,45,けやきウォーク前橋,0,0,1
特別ダイヤ１_14時20分_系統661,15:23:00,15:23:00,200022_01,46,けやきウォーク前橋,1,0,1
特別ダイヤ１_14時30分_系統266,14:30:00,14:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_14時30分_系統266,14:31:00,14:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:33:00,14:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:35:00,14:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:36:00,14:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:38:00,14:38:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:39:00,14:39:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:40:00,14:40:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:41:00,14:41:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:42:00,14:42:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:43:00,14:43:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:44:00,14:44:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:46:00,14:46:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:48:00,14:48:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:49:00,14:49:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:50:00,14:50:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_14時30分_系統266,14:52:00,14:52:00,200273_01,17,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,14:55:00,14:55:00,200189_01,18,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,14:57:00,14:57:00,201056_01,19,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,14:58:00,14:58:00,200872_01,20,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,14:59:00,14:59:00,200981_01,21,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:00:00,15:00:00,201100_01,22,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:01:00,15:01:00,200153_01,23,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:01:00,15:01:00,200395_01,24,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:02:00,15:02:00,200895_01,25,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:03:00,15:03:00,200985_01,26,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:03:00,15:03:00,200987_01,27,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:04:00,15:04:00,200519_01,28,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:05:00,15:05:00,200017_01,29,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:06:00,15:06:00,200506_01,30,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:08:00,15:08:00,200827_01,31,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:10:00,15:10:00,200730_01,32,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:11:00,15:11:00,200768_01,33,渋川駅,0,0,1
特別ダイヤ１_14時30分_系統266,15:14:00,15:14:00,200463_10,34,渋川駅,1,0,1
特別ダイヤ１_14時50分_系統643,14:50:00,14:50:00,201440_01,1,前橋駅（南橘団地・群大病院 経由）,0,1,1
特別ダイヤ１_14時50分_系統643,14:55:00,14:55:00,200189_02,2,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,14:57:00,14:57:00,200722_02,3,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,14:58:00,14:58:00,200343_02,4,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,14:59:00,14:59:00,200348_02,5,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:02:00,15:02:00,201185_02,6,前橋駅（南橘団地・群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:05:00,15:05:00,200927_01,7,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:05:00,15:05:00,200800_02,8,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:06:00,15:06:00,200928_02,9,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:08:00,15:08:00,201071_02,10,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:10:00,15:10:00,200542_02,11,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:12:00,15:12:00,200141_02,12,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:13:00,15:13:00,200142_02,13,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:14:00,15:14:00,200503_01,14,前橋駅（群大病院 経由）,0,0,1
特別ダイヤ１_14時50分_系統643,15:16:00,15:16:00,200261_01,15,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:17:00,15:17:00,200503_02,16,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:19:00,15:19:00,200262_02,17,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:20:00,15:20:00,201015_02,18,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:22:00,15:22:00,200379_02,19,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:23:00,15:23:00,200455_02,20,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:25:00,15:25:00,200702_02,21,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:27:00,15:27:00,200703_02,22,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:29:00,15:29:00,201081_02,23,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:31:00,15:31:00,200998_02,24,前橋駅,0,0,1
特別ダイヤ１_14時50分_系統643,15:34:00,15:34:00,200718_10,25,前橋駅,1,0,1
特別ダイヤ１_14時55分_系統268,14:55:00,14:55:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_14時55分_系統268,14:56:00,14:56:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,14:58:00,14:58:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:00:00,15:00:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:01:00,15:01:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:02:00,15:02:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:03:00,15:03:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:04:00,15:04:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:05:00,15:05:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:06:00,15:06:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:07:00,15:07:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:08:00,15:08:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:10:00,15:10:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:12:00,15:12:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:13:00,15:13:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:14:00,15:14:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:16:00,15:16:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:18:00,15:18:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:19:00,15:19:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:20:00,15:20:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:21:00,15:21:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:22:00,15:22:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:22:00,15:22:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:23:00,15:23:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:24:00,15:24:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:24:00,15:24:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:25:00,15:25:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:26:00,15:26:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:27:00,15:27:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:29:00,15:29:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:31:00,15:31:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:32:00,15:32:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_14時55分_系統268,15:35:00,15:35:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_15時00分_系統672,15:00:00,15:00:00,200022_01,1,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,1,1
特別ダイヤ１_15時00分_系統672,15:03:00,15:03:00,200668_02,2,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:04:00,15:04:00,200932_02,3,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:05:00,15:05:00,200108_02,4,群馬大学荒牧（前橋駅・群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:10:00,15:10:00,200718_02,5,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:11:00,15:11:00,200998_01,6,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:13:00,15:13:00,201081_01,7,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:15:00,15:15:00,200703_01,8,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:16:00,15:16:00,200702_01,9,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:18:00,15:18:00,200455_01,10,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:19:00,15:19:00,200379_01,11,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:20:00,15:20:00,201015_01,12,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:21:00,15:21:00,200262_01,13,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:22:00,15:22:00,200503_01,14,群馬大学荒牧（群大病院・南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:24:00,15:24:00,200261_01,15,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:25:00,15:25:00,200503_02,16,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:26:00,15:26:00,200142_01,17,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:27:00,15:27:00,200141_01,18,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:28:00,15:28:00,200542_01,19,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:30:00,15:30:00,201071_01,20,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:31:00,15:31:00,200928_01,21,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:32:00,15:32:00,200800_01,22,群馬大学荒牧（南橘団地 経由）,0,0,1
特別ダイヤ１_15時00分_系統672,15:34:00,15:34:00,200927_01,23,群馬大学荒牧,0,0,1
特別ダイヤ１_15時00分_系統672,15:35:00,15:35:00,201185_01,24,群馬大学荒牧,0,0,1
特別ダイヤ１_15時00分_系統672,15:39:00,15:39:00,200348_01,25,群馬大学荒牧,0,0,1
特別ダイヤ１_15時00分_系統672,15:40:00,15:40:00,200343_01,26,群馬大学荒牧,0,0,1
特別ダイヤ１_15時00分_系統672,15:41:00,15:41:00,200722_01,27,群馬大学荒牧,0,0,1
特別ダイヤ１_15時00分_系統672,15:44:00,15:44:00,200273_01,28,群馬大学荒牧,1,0,1
特別ダイヤ１_15時00分_系統265,15:00:00,15:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_15時00分_系統265,15:01:00,15:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:02:00,15:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:04:00,15:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:05:00,15:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:06:00,15:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:07:00,15:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:07:00,15:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:09:00,15:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:10:00,15:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:11:00,15:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:11:00,15:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:12:00,15:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:13:00,15:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:14:00,15:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:15:00,15:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:17:00,15:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_15時00分_系統265,15:20:00,15:20:00,200273_01,18,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:22:00,15:22:00,200722_02,19,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:23:00,15:23:00,200343_02,20,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:24:00,15:24:00,200348_02,21,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:26:00,15:26:00,201071_02,22,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:28:00,15:28:00,200542_02,23,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:30:00,15:30:00,200141_02,24,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:31:00,15:31:00,200142_02,25,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:33:00,15:33:00,200262_02,26,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:34:00,15:34:00,201015_02,27,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:35:00,15:35:00,200379_02,28,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:36:00,15:36:00,200455_02,29,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:37:00,15:37:00,200702_02,30,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:38:00,15:38:00,200703_02,31,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:40:00,15:40:00,201081_02,32,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:42:00,15:42:00,200998_02,33,前橋駅,0,0,1
特別ダイヤ１_15時00分_系統265,15:45:00,15:45:00,200718_10,34,前橋駅,1,0,1
特別ダイヤ１_15時30分_系統262,15:30:00,15:30:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
特別ダイヤ１_15時30分_系統262,15:31:00,15:31:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:33:00,15:33:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:35:00,15:35:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:36:00,15:36:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:38:00,15:38:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:39:00,15:39:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:40:00,15:40:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:41:00,15:41:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:42:00,15:42:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:43:00,15:43:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:44:00,15:44:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:46:00,15:46:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:48:00,15:48:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:49:00,15:49:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:50:00,15:50:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:52:00,15:52:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:54:00,15:54:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:55:00,15:55:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:56:00,15:56:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:57:00,15:57:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:58:00,15:58:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:58:00,15:58:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,15:59:00,15:59:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,16:00:00,16:00:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,16:00:00,16:00:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,16:01:00,16:01:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,16:02:00,16:02:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,16:03:00,16:03:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,16:05:00,16:05:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,16:07:00,16:07:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,16:08:00,16:08:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時30分_系統262,16:09:00,16:09:00,200463_06,33,渋川市内循環,0,0,1
特別ダイヤ１_15時30分_系統262,16:10:00,16:10:00,200468_01,34,渋川市内循環,0,0,1
特別ダイヤ１_15時30分_系統262,16:12:00,16:12:00,200466_01,35,渋川市内循環,0,0,1
特別ダイヤ１_15時30分_系統262,16:13:00,16:13:00,200704_01,36,渋川市内循環,0,0,1
特別ダイヤ１_15時30分_系統262,16:14:00,16:14:00,200476_02,37,渋川市内循環,0,0,1
特別ダイヤ１_15時30分_系統262,16:15:00,16:15:00,200477_02,38,渋川市内循環,0,0,1
特別ダイヤ１_15時30分_系統262,16:16:00,16:16:00,200430_02,39,渋川市内循環,0,0,1
特別ダイヤ１_15時30分_系統262,16:17:00,16:17:00,200007_02,40,渋川市内循環,0,0,1
特別ダイヤ１_15時30分_系統262,16:22:00,16:22:00,210463_10,41,渋川市内循環,1,0,1
特別ダイヤ１_15時30分_系統267,15:30:00,15:30:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_15時30分_系統267,15:31:00,15:31:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:32:00,15:32:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:34:00,15:34:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:35:00,15:35:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:36:00,15:36:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:37:00,15:37:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:37:00,15:37:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:39:00,15:39:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:40:00,15:40:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:41:00,15:41:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:41:00,15:41:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:42:00,15:42:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:43:00,15:43:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:44:00,15:44:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:45:00,15:45:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:47:00,15:47:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:48:00,15:48:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:49:00,15:49:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:50:00,15:50:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:52:00,15:52:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:54:00,15:54:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:56:00,15:56:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:57:00,15:57:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,15:59:00,15:59:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,16:00:00,16:00:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,16:01:00,16:01:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,16:02:00,16:02:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,16:03:00,16:03:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,16:04:00,16:04:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,16:06:00,16:06:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,16:08:00,16:08:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_15時30分_系統267,16:11:00,16:11:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_15時40分_系統666,15:40:00,15:40:00,200022_01,1,渋川駅（前橋駅 経由）,0,1,1
特別ダイヤ１_15時40分_系統666,15:43:00,15:43:00,200668_02,2,渋川駅（前橋駅 経由）,0,0,1
特別ダイヤ１_15時40分_系統666,15:44:00,15:44:00,200932_02,3,渋川駅（前橋駅 経由）,0,0,1
特別ダイヤ１_15時40分_系統666,15:45:00,15:45:00,200108_02,4,渋川駅（前橋駅 経由）,0,0,1
特別ダイヤ１_15時40分_系統666,15:50:00,15:50:00,200718_02,5,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,15:51:00,15:51:00,200998_01,6,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,15:53:00,15:53:00,201081_01,7,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,15:55:00,15:55:00,200703_01,8,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,15:56:00,15:56:00,200702_01,9,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,15:57:00,15:57:00,200455_01,10,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,15:58:00,15:58:00,200379_01,11,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,15:59:00,15:59:00,201015_01,12,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:00:00,16:00:00,200262_01,13,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:01:00,16:01:00,200142_01,14,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:02:00,16:02:00,200141_01,15,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:03:00,16:03:00,200542_01,16,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:05:00,16:05:00,201071_01,17,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:07:00,16:07:00,200348_01,18,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:08:00,16:08:00,200343_01,19,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:09:00,16:09:00,200722_01,20,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:11:00,16:11:00,200189_01,21,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:13:00,16:13:00,201056_01,22,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:14:00,16:14:00,200872_01,23,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:15:00,16:15:00,200981_01,24,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:16:00,16:16:00,201100_01,25,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:17:00,16:17:00,200153_01,26,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:17:00,16:17:00,200395_01,27,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:18:00,16:18:00,200895_01,28,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:19:00,16:19:00,200985_01,29,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:19:00,16:19:00,200987_01,30,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:20:00,16:20:00,200519_01,31,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:21:00,16:21:00,200017_01,32,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:22:00,16:22:00,200506_01,33,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:24:00,16:24:00,200827_01,34,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:26:00,16:26:00,200730_01,35,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:27:00,16:27:00,200768_01,36,渋川駅,0,0,1
特別ダイヤ１_15時40分_系統666,16:30:00,16:30:00,200463_10,37,渋川駅,1,0,1
特別ダイヤ１_15時47分_系統261,15:47:00,15:47:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
特別ダイヤ１_15時47分_系統261,15:48:00,15:48:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時47分_系統261,15:49:00,15:49:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時47分_系統261,15:50:00,15:50:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時47分_系統261,15:51:00,15:51:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時47分_系統261,15:52:00,15:52:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時47分_系統261,15:53:00,15:53:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時47分_系統261,15:54:00,15:54:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時47分_系統261,15:55:00,15:55:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_15時47分_系統261,16:00:00,16:00:00,200463_01,10,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:01:00,16:01:00,200768_02,11,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:02:00,16:02:00,200730_02,12,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:04:00,16:04:00,200827_02,13,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:05:00,16:05:00,200506_02,14,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:06:00,16:06:00,200017_02,15,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:07:00,16:07:00,200519_02,16,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:07:00,16:07:00,200987_02,17,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:09:00,16:09:00,200985_02,18,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:10:00,16:10:00,200895_02,19,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:11:00,16:11:00,200395_02,20,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:11:00,16:11:00,200153_02,21,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:12:00,16:12:00,201100_02,22,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:13:00,16:13:00,200981_02,23,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:14:00,16:14:00,200872_02,24,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:15:00,16:15:00,201056_02,25,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:17:00,16:17:00,200189_02,26,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:18:00,16:18:00,200722_02,27,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:19:00,16:19:00,200343_02,28,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:20:00,16:20:00,200348_02,29,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:22:00,16:22:00,201071_02,30,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:24:00,16:24:00,200542_02,31,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:26:00,16:26:00,200141_02,32,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:27:00,16:27:00,200142_02,33,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:29:00,16:29:00,200262_02,34,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:30:00,16:30:00,201015_02,35,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:31:00,16:31:00,200379_02,36,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:32:00,16:32:00,200455_02,37,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:33:00,16:33:00,200702_02,38,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:34:00,16:34:00,200703_02,39,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:36:00,16:36:00,201081_02,40,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:38:00,16:38:00,200998_02,41,前橋駅,0,0,1
特別ダイヤ１_15時47分_系統261,16:41:00,16:41:00,200718_10,42,前橋駅,1,0,1
特別ダイヤ１_16時00分_系統581,16:00:00,16:00:00,200273_01,1,前橋駅,0,1,1
特別ダイヤ１_16時00分_系統581,16:02:00,16:02:00,200722_02,2,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:03:00,16:03:00,200343_02,3,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:04:00,16:04:00,200348_02,4,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:06:00,16:06:00,201071_02,5,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:08:00,16:08:00,200542_02,6,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:10:00,16:10:00,200141_02,7,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:11:00,16:11:00,200142_02,8,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:13:00,16:13:00,200262_02,9,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:14:00,16:14:00,201015_02,10,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:15:00,16:15:00,200379_02,11,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:16:00,16:16:00,200455_02,12,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:17:00,16:17:00,200702_02,13,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:18:00,16:18:00,200703_02,14,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:20:00,16:20:00,201081_02,15,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:22:00,16:22:00,200998_02,16,前橋駅,0,0,1
特別ダイヤ１_16時00分_系統581,16:25:00,16:25:00,200718_10,17,前橋駅,1,0,1
特別ダイヤ１_16時05分_系統268,16:05:00,16:05:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_16時05分_系統268,16:06:00,16:06:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:08:00,16:08:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:10:00,16:10:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:11:00,16:11:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:12:00,16:12:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:13:00,16:13:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:14:00,16:14:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:15:00,16:15:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:16:00,16:16:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:17:00,16:17:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:18:00,16:18:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:20:00,16:20:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:22:00,16:22:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:23:00,16:23:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:24:00,16:24:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:26:00,16:26:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:28:00,16:28:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:29:00,16:29:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:30:00,16:30:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:31:00,16:31:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:32:00,16:32:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:32:00,16:32:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:33:00,16:33:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:34:00,16:34:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:34:00,16:34:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:35:00,16:35:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:36:00,16:36:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:37:00,16:37:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:39:00,16:39:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:41:00,16:41:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:42:00,16:42:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_16時05分_系統268,16:45:00,16:45:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_16時18分_系統642,16:18:00,16:18:00,200718_02,1,道の駅まえばし赤城（南橘団地 経由）,0,1,1
特別ダイヤ１_16時18分_系統642,16:19:00,16:19:00,200998_01,2,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:21:00,16:21:00,201081_01,3,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:23:00,16:23:00,200703_01,4,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:24:00,16:24:00,200702_01,5,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:26:00,16:26:00,200455_01,6,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:27:00,16:27:00,200379_01,7,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:28:00,16:28:00,201015_01,8,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:29:00,16:29:00,200262_01,9,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:30:00,16:30:00,200142_01,10,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:31:00,16:31:00,200141_01,11,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:32:00,16:32:00,200542_01,12,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:34:00,16:34:00,201071_01,13,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:35:00,16:35:00,200928_01,14,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:36:00,16:36:00,200800_01,15,道の駅まえばし赤城（南橘団地 経由）,0,0,1
特別ダイヤ１_16時18分_系統642,16:38:00,16:38:00,200927_01,16,道の駅まえばし赤城,0,0,1
特別ダイヤ１_16時18分_系統642,16:39:00,16:39:00,201185_01,17,道の駅まえばし赤城,0,0,1
特別ダイヤ１_16時18分_系統642,16:43:00,16:43:00,200348_01,18,道の駅まえばし赤城,0,0,1
特別ダイヤ１_16時18分_系統642,16:44:00,16:44:00,200343_01,19,道の駅まえばし赤城,0,0,1
特別ダイヤ１_16時18分_系統642,16:45:00,16:45:00,200722_01,20,道の駅まえばし赤城,0,0,1
特別ダイヤ１_16時18分_系統642,16:47:00,16:47:00,200189_01,21,道の駅まえばし赤城,0,0,1
特別ダイヤ１_16時18分_系統642,16:54:00,16:54:00,201440_01,22,道の駅まえばし赤城,1,0,1
特別ダイヤ１_16時25分_系統267,16:25:00,16:25:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_16時25分_系統267,16:26:00,16:26:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:27:00,16:27:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:29:00,16:29:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:30:00,16:30:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:31:00,16:31:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:32:00,16:32:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:32:00,16:32:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:34:00,16:34:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:35:00,16:35:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:36:00,16:36:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:36:00,16:36:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:37:00,16:37:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:38:00,16:38:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:39:00,16:39:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:40:00,16:40:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:42:00,16:42:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:43:00,16:43:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:44:00,16:44:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:45:00,16:45:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:47:00,16:47:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:49:00,16:49:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:51:00,16:51:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:52:00,16:52:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:54:00,16:54:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:55:00,16:55:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:56:00,16:56:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:57:00,16:57:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:58:00,16:58:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,16:59:00,16:59:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,17:01:00,17:01:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,17:03:00,17:03:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_16時25分_系統267,17:06:00,17:06:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_16時30分_系統266,16:30:00,16:30:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_16時30分_系統266,16:31:00,16:31:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:33:00,16:33:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:35:00,16:35:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:36:00,16:36:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:37:00,16:37:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:38:00,16:38:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:39:00,16:39:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:40:00,16:40:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:41:00,16:41:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:42:00,16:42:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:43:00,16:43:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:45:00,16:45:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:47:00,16:47:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:48:00,16:48:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:49:00,16:49:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_16時30分_系統266,16:51:00,16:51:00,200273_01,17,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,16:54:00,16:54:00,200189_01,18,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,16:56:00,16:56:00,201056_01,19,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,16:57:00,16:57:00,200872_01,20,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,16:58:00,16:58:00,200981_01,21,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,16:59:00,16:59:00,201100_01,22,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:00:00,17:00:00,200153_01,23,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:00:00,17:00:00,200395_01,24,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:01:00,17:01:00,200895_01,25,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:02:00,17:02:00,200985_01,26,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:02:00,17:02:00,200987_01,27,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:03:00,17:03:00,200519_01,28,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:04:00,17:04:00,200017_01,29,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:05:00,17:05:00,200506_01,30,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:07:00,17:07:00,200827_01,31,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:09:00,17:09:00,200730_01,32,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:10:00,17:10:00,200768_01,33,渋川駅,0,0,1
特別ダイヤ１_16時30分_系統266,17:13:00,17:13:00,200463_10,34,渋川駅,1,0,1
特別ダイヤ１_16時57分_系統262,16:57:00,16:57:00,200718_02,1,渋川駅（渋川市内循環 経由）,0,1,1
特別ダイヤ１_16時57分_系統262,16:58:00,16:58:00,200998_01,2,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:00:00,17:00:00,201081_01,3,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:02:00,17:02:00,200703_01,4,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:03:00,17:03:00,200702_01,5,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:05:00,17:05:00,200455_01,6,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:06:00,17:06:00,200379_01,7,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:07:00,17:07:00,201015_01,8,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:08:00,17:08:00,200262_01,9,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:09:00,17:09:00,200142_01,10,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:10:00,17:10:00,200141_01,11,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:11:00,17:11:00,200542_01,12,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:13:00,17:13:00,201071_01,13,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:15:00,17:15:00,200348_01,14,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:16:00,17:16:00,200343_01,15,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:17:00,17:17:00,200722_01,16,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:19:00,17:19:00,200189_01,17,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:21:00,17:21:00,201056_01,18,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:22:00,17:22:00,200872_01,19,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:23:00,17:23:00,200981_01,20,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:24:00,17:24:00,201100_01,21,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:25:00,17:25:00,200153_01,22,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:25:00,17:25:00,200395_01,23,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:26:00,17:26:00,200895_01,24,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:27:00,17:27:00,200985_01,25,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:27:00,17:27:00,200987_01,26,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:28:00,17:28:00,200519_01,27,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:29:00,17:29:00,200017_01,28,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:30:00,17:30:00,200506_01,29,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:32:00,17:32:00,200827_01,30,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:34:00,17:34:00,200730_01,31,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:35:00,17:35:00,200768_01,32,渋川駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_16時57分_系統262,17:36:00,17:36:00,200463_06,33,渋川市内循環,0,0,1
特別ダイヤ１_16時57分_系統262,17:37:00,17:37:00,200468_01,34,渋川市内循環,0,0,1
特別ダイヤ１_16時57分_系統262,17:39:00,17:39:00,200466_01,35,渋川市内循環,0,0,1
特別ダイヤ１_16時57分_系統262,17:40:00,17:40:00,200704_01,36,渋川市内循環,0,0,1
特別ダイヤ１_16時57分_系統262,17:41:00,17:41:00,200476_02,37,渋川市内循環,0,0,1
特別ダイヤ１_16時57分_系統262,17:42:00,17:42:00,200477_02,38,渋川市内循環,0,0,1
特別ダイヤ１_16時57分_系統262,17:43:00,17:43:00,200430_02,39,渋川市内循環,0,0,1
特別ダイヤ１_16時57分_系統262,17:44:00,17:44:00,200007_02,40,渋川市内循環,0,0,1
特別ダイヤ１_16時57分_系統262,17:49:00,17:49:00,210463_10,41,渋川市内循環,1,0,1
特別ダイヤ１_17時00分_系統265,17:00:00,17:00:00,200463_01,1,前橋駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_17時00分_系統265,17:01:00,17:01:00,200768_02,2,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:02:00,17:02:00,200730_02,3,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:04:00,17:04:00,200827_02,4,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:05:00,17:05:00,200506_02,5,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:06:00,17:06:00,200017_02,6,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:07:00,17:07:00,200519_02,7,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:07:00,17:07:00,200987_02,8,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:09:00,17:09:00,200985_02,9,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:10:00,17:10:00,200895_02,10,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:11:00,17:11:00,200395_02,11,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:11:00,17:11:00,200153_02,12,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:12:00,17:12:00,201100_02,13,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:13:00,17:13:00,200981_02,14,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:14:00,17:14:00,200872_02,15,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:15:00,17:15:00,201056_02,16,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:17:00,17:17:00,200189_02,17,前橋駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時00分_系統265,17:20:00,17:20:00,200273_01,18,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:22:00,17:22:00,200722_02,19,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:23:00,17:23:00,200343_02,20,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:24:00,17:24:00,200348_02,21,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:26:00,17:26:00,201071_02,22,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:28:00,17:28:00,200542_02,23,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:30:00,17:30:00,200141_02,24,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:31:00,17:31:00,200142_02,25,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:33:00,17:33:00,200262_02,26,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:34:00,17:34:00,201015_02,27,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:35:00,17:35:00,200379_02,28,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:36:00,17:36:00,200455_02,29,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:37:00,17:37:00,200702_02,30,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:38:00,17:38:00,200703_02,31,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:40:00,17:40:00,201081_02,32,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:42:00,17:42:00,200998_02,33,前橋駅,0,0,1
特別ダイヤ１_17時00分_系統265,17:45:00,17:45:00,200718_10,34,前橋駅,1,0,1
特別ダイヤ１_17時02分_系統641,17:02:00,17:02:00,201440_01,1,前橋駅,0,1,1
特別ダイヤ１_17時02分_系統641,17:07:00,17:07:00,200189_02,2,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:09:00,17:09:00,200722_02,3,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:10:00,17:10:00,200343_02,4,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:11:00,17:11:00,200348_02,5,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:13:00,17:13:00,201071_02,6,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:14:00,17:14:00,200542_02,7,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:16:00,17:16:00,200141_02,8,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:17:00,17:17:00,200142_02,9,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:19:00,17:19:00,200262_02,10,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:20:00,17:20:00,201015_02,11,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:22:00,17:22:00,200379_02,12,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:23:00,17:23:00,200455_02,13,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:25:00,17:25:00,200702_02,14,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:27:00,17:27:00,200703_02,15,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:29:00,17:29:00,201081_02,16,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:31:00,17:31:00,200998_02,17,前橋駅,0,0,1
特別ダイヤ１_17時02分_系統641,17:34:00,17:34:00,200718_10,18,前橋駅,1,0,1
特別ダイヤ１_17時10分_系統668,17:10:00,17:10:00,200022_01,1,南橘団地（前橋駅 経由）,0,1,1
特別ダイヤ１_17時10分_系統668,17:13:00,17:13:00,200668_02,2,南橘団地（前橋駅 経由）,0,0,1
特別ダイヤ１_17時10分_系統668,17:14:00,17:14:00,200932_02,3,南橘団地（前橋駅 経由）,0,0,1
特別ダイヤ１_17時10分_系統668,17:15:00,17:15:00,200108_02,4,南橘団地（前橋駅 経由）,0,0,1
特別ダイヤ１_17時10分_系統668,17:20:00,17:20:00,200718_02,5,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:21:00,17:21:00,200998_01,6,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:23:00,17:23:00,201081_01,7,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:25:00,17:25:00,200703_01,8,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:26:00,17:26:00,200702_01,9,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:28:00,17:28:00,200455_01,10,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:29:00,17:29:00,200379_01,11,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:30:00,17:30:00,201015_01,12,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:31:00,17:31:00,200262_01,13,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:32:00,17:32:00,200142_01,14,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:33:00,17:33:00,200141_01,15,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:34:00,17:34:00,200542_01,16,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:36:00,17:36:00,201071_01,17,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:37:00,17:37:00,200928_01,18,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:38:00,17:38:00,200800_01,19,南橘団地,0,0,1
特別ダイヤ１_17時10分_系統668,17:41:00,17:41:00,200927_01,20,南橘団地,1,0,1
特別ダイヤ１_17時32分_系統261,17:32:00,17:32:00,210463_05,1,前橋駅（渋川市内循環 経由）,0,1,1
特別ダイヤ１_17時32分_系統261,17:33:00,17:33:00,200007_01,2,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_17時32分_系統261,17:34:00,17:34:00,200430_01,3,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_17時32分_系統261,17:35:00,17:35:00,200477_01,4,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_17時32分_系統261,17:36:00,17:36:00,200476_01,5,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_17時32分_系統261,17:37:00,17:37:00,200704_02,6,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_17時32分_系統261,17:38:00,17:38:00,200467_01,7,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_17時32分_系統261,17:39:00,17:39:00,200466_02,8,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_17時32分_系統261,17:40:00,17:40:00,200468_02,9,前橋駅（渋川市内循環 経由）,0,0,1
特別ダイヤ１_17時32分_系統261,17:45:00,17:45:00,200463_01,10,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:46:00,17:46:00,200768_02,11,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:47:00,17:47:00,200730_02,12,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:49:00,17:49:00,200827_02,13,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:50:00,17:50:00,200506_02,14,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:51:00,17:51:00,200017_02,15,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:52:00,17:52:00,200519_02,16,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:52:00,17:52:00,200987_02,17,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:54:00,17:54:00,200985_02,18,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:55:00,17:55:00,200895_02,19,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:56:00,17:56:00,200395_02,20,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:56:00,17:56:00,200153_02,21,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:57:00,17:57:00,201100_02,22,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:58:00,17:58:00,200981_02,23,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,17:59:00,17:59:00,200872_02,24,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:00:00,18:00:00,201056_02,25,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:02:00,18:02:00,200189_02,26,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:03:00,18:03:00,200722_02,27,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:04:00,18:04:00,200343_02,28,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:05:00,18:05:00,200348_02,29,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:07:00,18:07:00,201071_02,30,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:09:00,18:09:00,200542_02,31,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:11:00,18:11:00,200141_02,32,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:12:00,18:12:00,200142_02,33,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:14:00,18:14:00,200262_02,34,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:15:00,18:15:00,201015_02,35,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:16:00,18:16:00,200379_02,36,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:17:00,18:17:00,200455_02,37,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:18:00,18:18:00,200702_02,38,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:19:00,18:19:00,200703_02,39,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:21:00,18:21:00,201081_02,40,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:23:00,18:23:00,200998_02,41,前橋駅,0,0,1
特別ダイヤ１_17時32分_系統261,18:26:00,18:26:00,200718_10,42,前橋駅,1,0,1
特別ダイヤ１_17時41分_系統266,17:41:00,17:41:00,200718_02,1,渋川駅（群馬大学荒牧 経由）,0,1,1
特別ダイヤ１_17時41分_系統266,17:42:00,17:42:00,200998_01,2,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:44:00,17:44:00,201081_01,3,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:46:00,17:46:00,200703_01,4,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:47:00,17:47:00,200702_01,5,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:48:00,17:48:00,200455_01,6,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:49:00,17:49:00,200379_01,7,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:50:00,17:50:00,201015_01,8,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:51:00,17:51:00,200262_01,9,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:52:00,17:52:00,200142_01,10,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:53:00,17:53:00,200141_01,11,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:54:00,17:54:00,200542_01,12,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:56:00,17:56:00,201071_01,13,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:58:00,17:58:00,200348_01,14,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,17:59:00,17:59:00,200343_01,15,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,18:00:00,18:00:00,200722_01,16,渋川駅（群馬大学荒牧 経由）,0,0,1
特別ダイヤ１_17時41分_系統266,18:02:00,18:02:00,200273_01,17,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:05:00,18:05:00,200189_01,18,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:07:00,18:07:00,201056_01,19,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:08:00,18:08:00,200872_01,20,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:09:00,18:09:00,200981_01,21,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:10:00,18:10:00,201100_01,22,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:11:00,18:11:00,200153_01,23,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:11:00,18:11:00,200395_01,24,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:12:00,18:12:00,200895_01,25,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:13:00,18:13:00,200985_01,26,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:13:00,18:13:00,200987_01,27,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:14:00,18:14:00,200519_01,28,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:15:00,18:15:00,200017_01,29,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:16:00,18:16:00,200506_01,30,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:18:00,18:18:00,200827_01,31,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:20:00,18:20:00,200730_01,32,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:21:00,18:21:00,200768_01,33,渋川駅,0,0,1
特別ダイヤ１_17時41分_系統266,18:24:00,18:24:00,200463_10,34,渋川駅,1,0,1
特別ダイヤ１_17時50分_系統528,17:50:00,17:50:00,200927_01,1,前橋駅,0,1,1
特別ダイヤ１_17時50分_系統528,17:50:00,17:50:00,200800_02,2,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,17:51:00,17:51:00,200928_02,3,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,17:52:00,17:52:00,201071_02,4,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,17:53:00,17:53:00,200542_02,5,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,17:55:00,17:55:00,200141_02,6,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,17:56:00,17:56:00,200142_02,7,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,17:57:00,17:57:00,200262_02,8,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,17:58:00,17:58:00,201015_02,9,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,17:59:00,17:59:00,200379_02,10,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,18:00:00,18:00:00,200455_02,11,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,18:02:00,18:02:00,200702_02,12,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,18:04:00,18:04:00,200703_02,13,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,18:06:00,18:06:00,201081_02,14,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,18:08:00,18:08:00,200998_02,15,前橋駅,0,0,1
特別ダイヤ１_17時50分_系統528,18:11:00,18:11:00,200718_10,16,前橋駅,1,0,1
特別ダイヤ１_17時57分_系統268,17:57:00,17:57:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_17時57分_系統268,17:58:00,17:58:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:00:00,18:00:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:02:00,18:02:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:03:00,18:03:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:04:00,18:04:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:05:00,18:05:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:06:00,18:06:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:07:00,18:07:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:08:00,18:08:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:09:00,18:09:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:10:00,18:10:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:12:00,18:12:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:14:00,18:14:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:15:00,18:15:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:16:00,18:16:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:18:00,18:18:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:20:00,18:20:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:21:00,18:21:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:22:00,18:22:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:23:00,18:23:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:24:00,18:24:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:24:00,18:24:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:25:00,18:25:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:26:00,18:26:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:26:00,18:26:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:27:00,18:27:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:28:00,18:28:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:29:00,18:29:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:31:00,18:31:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:33:00,18:33:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:34:00,18:34:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_17時57分_系統268,18:37:00,18:37:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_18時10分_系統668,18:10:00,18:10:00,200022_01,1,南橘団地（前橋駅 経由）,0,1,1
特別ダイヤ１_18時10分_系統668,18:13:00,18:13:00,200668_02,2,南橘団地（前橋駅 経由）,0,0,1
特別ダイヤ１_18時10分_系統668,18:14:00,18:14:00,200932_02,3,南橘団地（前橋駅 経由）,0,0,1
特別ダイヤ１_18時10分_系統668,18:15:00,18:15:00,200108_02,4,南橘団地（前橋駅 経由）,0,0,1
特別ダイヤ１_18時10分_系統668,18:20:00,18:20:00,200718_02,5,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:21:00,18:21:00,200998_01,6,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:23:00,18:23:00,201081_01,7,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:25:00,18:25:00,200703_01,8,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:26:00,18:26:00,200702_01,9,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:28:00,18:28:00,200455_01,10,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:29:00,18:29:00,200379_01,11,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:30:00,18:30:00,201015_01,12,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:31:00,18:31:00,200262_01,13,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:32:00,18:32:00,200142_01,14,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:33:00,18:33:00,200141_01,15,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:34:00,18:34:00,200542_01,16,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:36:00,18:36:00,201071_01,17,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:37:00,18:37:00,200928_01,18,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:38:00,18:38:00,200800_01,19,南橘団地,0,0,1
特別ダイヤ１_18時10分_系統668,18:41:00,18:41:00,200927_01,20,南橘団地,1,0,1
特別ダイヤ１_18時10分_系統267,18:10:00,18:10:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_18時10分_系統267,18:11:00,18:11:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:12:00,18:12:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:14:00,18:14:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:15:00,18:15:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:16:00,18:16:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:17:00,18:17:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:17:00,18:17:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:19:00,18:19:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:20:00,18:20:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:21:00,18:21:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:21:00,18:21:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:22:00,18:22:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:23:00,18:23:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:24:00,18:24:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:25:00,18:25:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:27:00,18:27:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:28:00,18:28:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:29:00,18:29:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:30:00,18:30:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:32:00,18:32:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:34:00,18:34:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:36:00,18:36:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:37:00,18:37:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:39:00,18:39:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:40:00,18:40:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:41:00,18:41:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:42:00,18:42:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:43:00,18:43:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:44:00,18:44:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:46:00,18:46:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:48:00,18:48:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_18時10分_系統267,18:51:00,18:51:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_18時37分_系統268,18:37:00,18:37:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_18時37分_系統268,18:38:00,18:38:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:40:00,18:40:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:42:00,18:42:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:43:00,18:43:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:45:00,18:45:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:46:00,18:46:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:47:00,18:47:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:48:00,18:48:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:49:00,18:49:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:50:00,18:50:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:51:00,18:51:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:53:00,18:53:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:55:00,18:55:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:56:00,18:56:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:57:00,18:57:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,18:59:00,18:59:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:01:00,19:01:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:02:00,19:02:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:03:00,19:03:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:04:00,19:04:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:05:00,19:05:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:05:00,19:05:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:06:00,19:06:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:07:00,19:07:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:07:00,19:07:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:08:00,19:08:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:09:00,19:09:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:10:00,19:10:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:12:00,19:12:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:14:00,19:14:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:15:00,19:15:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_18時37分_系統268,19:18:00,19:18:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_18時45分_系統267,18:45:00,18:45:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_18時45分_系統267,18:46:00,18:46:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:47:00,18:47:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:49:00,18:49:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:50:00,18:50:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:51:00,18:51:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:52:00,18:52:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:52:00,18:52:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:54:00,18:54:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:55:00,18:55:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:56:00,18:56:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:56:00,18:56:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:57:00,18:57:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:58:00,18:58:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,18:59:00,18:59:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:00:00,19:00:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:02:00,19:02:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:03:00,19:03:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:04:00,19:04:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:05:00,19:05:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:07:00,19:07:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:09:00,19:09:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:11:00,19:11:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:12:00,19:12:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:14:00,19:14:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:15:00,19:15:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:16:00,19:16:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:17:00,19:17:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:18:00,19:18:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:19:00,19:19:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:21:00,19:21:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:23:00,19:23:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_18時45分_系統267,19:26:00,19:26:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_19時00分_系統532,19:00:00,19:00:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
特別ダイヤ１_19時00分_系統532,19:01:00,19:01:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:03:00,19:03:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:05:00,19:05:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:06:00,19:06:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:07:00,19:07:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:08:00,19:08:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:09:00,19:09:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:10:00,19:10:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:11:00,19:11:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:12:00,19:12:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:13:00,19:13:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:15:00,19:15:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:16:00,19:16:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:17:00,19:17:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_19時00分_系統532,19:19:00,19:19:00,200927_01,16,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:20:00,19:20:00,201185_01,17,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:24:00,19:24:00,200348_01,18,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:25:00,19:25:00,200343_01,19,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:26:00,19:26:00,200722_01,20,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:27:00,19:27:00,200189_01,21,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:29:00,19:29:00,201056_01,22,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:30:00,19:30:00,200872_01,23,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:31:00,19:31:00,200981_01,24,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:32:00,19:32:00,201100_01,25,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:33:00,19:33:00,200153_01,26,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:33:00,19:33:00,200395_01,27,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:34:00,19:34:00,200895_01,28,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:35:00,19:35:00,200985_01,29,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:35:00,19:35:00,200987_01,30,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:36:00,19:36:00,200519_01,31,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:37:00,19:37:00,200017_01,32,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:38:00,19:38:00,200506_01,33,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:39:00,19:39:00,200827_01,34,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:41:00,19:41:00,200730_01,35,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:42:00,19:42:00,200768_01,36,渋川駅,0,0,1
特別ダイヤ１_19時00分_系統532,19:45:00,19:45:00,200463_10,37,渋川駅,1,0,1
特別ダイヤ１_19時50分_系統267,19:50:00,19:50:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_19時50分_系統267,19:51:00,19:51:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,19:52:00,19:52:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,19:54:00,19:54:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,19:55:00,19:55:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,19:56:00,19:56:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,19:57:00,19:57:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,19:57:00,19:57:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,19:59:00,19:59:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:00:00,20:00:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:01:00,20:01:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:01:00,20:01:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:02:00,20:02:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:03:00,20:03:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:04:00,20:04:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:05:00,20:05:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:06:00,20:06:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:07:00,20:07:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:08:00,20:08:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:09:00,20:09:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:10:00,20:10:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:11:00,20:11:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:12:00,20:12:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:13:00,20:13:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:15:00,20:15:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:16:00,20:16:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:16:00,20:16:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:17:00,20:17:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:18:00,20:18:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:19:00,20:19:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:21:00,20:21:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:23:00,20:23:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_19時50分_系統267,20:26:00,20:26:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_19時50分_系統268,19:50:00,19:50:00,200718_02,1,渋川駅,0,1,1
特別ダイヤ１_19時50分_系統268,19:51:00,19:51:00,200998_01,2,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,19:53:00,19:53:00,201081_01,3,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,19:55:00,19:55:00,200703_01,4,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,19:56:00,19:56:00,200702_01,5,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,19:58:00,19:58:00,200455_01,6,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,19:59:00,19:59:00,200379_01,7,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:00:00,20:00:00,201015_01,8,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:01:00,20:01:00,200262_01,9,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:02:00,20:02:00,200142_01,10,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:03:00,20:03:00,200141_01,11,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:04:00,20:04:00,200542_01,12,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:06:00,20:06:00,201071_01,13,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:08:00,20:08:00,200348_01,14,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:09:00,20:09:00,200343_01,15,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:10:00,20:10:00,200722_01,16,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:11:00,20:11:00,200189_01,17,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:13:00,20:13:00,201056_01,18,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:14:00,20:14:00,200872_01,19,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:15:00,20:15:00,200981_01,20,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:16:00,20:16:00,201100_01,21,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:17:00,20:17:00,200153_01,22,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:17:00,20:17:00,200395_01,23,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:18:00,20:18:00,200895_01,24,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:19:00,20:19:00,200985_01,25,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:19:00,20:19:00,200987_01,26,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:20:00,20:20:00,200519_01,27,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:21:00,20:21:00,200017_01,28,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:22:00,20:22:00,200506_01,29,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:23:00,20:23:00,200827_01,30,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:25:00,20:25:00,200730_01,31,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:26:00,20:26:00,200768_01,32,渋川駅,0,0,1
特別ダイヤ１_19時50分_系統268,20:29:00,20:29:00,200463_10,33,渋川駅,1,0,1
特別ダイヤ１_20時35分_系統267,20:35:00,20:35:00,200463_01,1,前橋駅,0,1,1
特別ダイヤ１_20時35分_系統267,20:36:00,20:36:00,200768_02,2,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:37:00,20:37:00,200730_02,3,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:39:00,20:39:00,200827_02,4,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:40:00,20:40:00,200506_02,5,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:41:00,20:41:00,200017_02,6,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:42:00,20:42:00,200519_02,7,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:42:00,20:42:00,200987_02,8,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:44:00,20:44:00,200985_02,9,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:45:00,20:45:00,200895_02,10,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:46:00,20:46:00,200395_02,11,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:46:00,20:46:00,200153_02,12,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:47:00,20:47:00,201100_02,13,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:48:00,20:48:00,200981_02,14,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:49:00,20:49:00,200872_02,15,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:50:00,20:50:00,201056_02,16,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:51:00,20:51:00,200189_02,17,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:52:00,20:52:00,200722_02,18,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:53:00,20:53:00,200343_02,19,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:54:00,20:54:00,200348_02,20,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:55:00,20:55:00,201071_02,21,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:56:00,20:56:00,200542_02,22,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:57:00,20:57:00,200141_02,23,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,20:58:00,20:58:00,200142_02,24,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,21:00:00,21:00:00,200262_02,25,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,21:01:00,21:01:00,201015_02,26,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,21:01:00,21:01:00,200379_02,27,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,21:02:00,21:02:00,200455_02,28,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,21:03:00,21:03:00,200702_02,29,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,21:04:00,21:04:00,200703_02,30,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,21:06:00,21:06:00,201081_02,31,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,21:08:00,21:08:00,200998_02,32,前橋駅,0,0,1
特別ダイヤ１_20時35分_系統267,21:11:00,21:11:00,200718_10,33,前橋駅,1,0,1
特別ダイヤ１_20時35分_系統532,20:35:00,20:35:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
特別ダイヤ１_20時35分_系統532,20:36:00,20:36:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:38:00,20:38:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:40:00,20:40:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:41:00,20:41:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:42:00,20:42:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:43:00,20:43:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:44:00,20:44:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:45:00,20:45:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:46:00,20:46:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:47:00,20:47:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:48:00,20:48:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:50:00,20:50:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:51:00,20:51:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:52:00,20:52:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_20時35分_系統532,20:54:00,20:54:00,200927_01,16,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,20:55:00,20:55:00,201185_01,17,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,20:59:00,20:59:00,200348_01,18,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:00:00,21:00:00,200343_01,19,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:01:00,21:01:00,200722_01,20,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:02:00,21:02:00,200189_01,21,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:04:00,21:04:00,201056_01,22,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:05:00,21:05:00,200872_01,23,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:06:00,21:06:00,200981_01,24,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:07:00,21:07:00,201100_01,25,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:08:00,21:08:00,200153_01,26,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:08:00,21:08:00,200395_01,27,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:09:00,21:09:00,200895_01,28,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:10:00,21:10:00,200985_01,29,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:10:00,21:10:00,200987_01,30,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:11:00,21:11:00,200519_01,31,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:12:00,21:12:00,200017_01,32,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:13:00,21:13:00,200506_01,33,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:14:00,21:14:00,200827_01,34,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:16:00,21:16:00,200730_01,35,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:17:00,21:17:00,200768_01,36,渋川駅,0,0,1
特別ダイヤ１_20時35分_系統532,21:20:00,21:20:00,200463_10,37,渋川駅,1,0,1
特別ダイヤ１_21時24分_系統532,21:24:00,21:24:00,200718_02,1,渋川駅（南橘団地 経由）,0,1,1
特別ダイヤ１_21時24分_系統532,21:25:00,21:25:00,200998_01,2,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:27:00,21:27:00,201081_01,3,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:29:00,21:29:00,200703_01,4,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:30:00,21:30:00,200702_01,5,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:31:00,21:31:00,200455_01,6,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:32:00,21:32:00,200379_01,7,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:33:00,21:33:00,201015_01,8,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:34:00,21:34:00,200262_01,9,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:35:00,21:35:00,200142_01,10,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:36:00,21:36:00,200141_01,11,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:37:00,21:37:00,200542_01,12,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:39:00,21:39:00,201071_01,13,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:40:00,21:40:00,200928_01,14,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:41:00,21:41:00,200800_01,15,渋川駅（南橘団地 経由）,0,0,1
特別ダイヤ１_21時24分_系統532,21:43:00,21:43:00,200927_01,16,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:44:00,21:44:00,201185_01,17,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:48:00,21:48:00,200348_01,18,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:49:00,21:49:00,200343_01,19,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:50:00,21:50:00,200722_01,20,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:51:00,21:51:00,200189_01,21,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:53:00,21:53:00,201056_01,22,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:54:00,21:54:00,200872_01,23,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:55:00,21:55:00,200981_01,24,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:56:00,21:56:00,201100_01,25,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:57:00,21:57:00,200153_01,26,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:57:00,21:57:00,200395_01,27,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:58:00,21:58:00,200895_01,28,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:59:00,21:59:00,200985_01,29,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,21:59:00,21:59:00,200987_01,30,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,22:00:00,22:00:00,200519_01,31,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,22:01:00,22:01:00,200017_01,32,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,22:02:00,22:02:00,200506_01,33,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,22:03:00,22:03:00,200827_01,34,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,22:05:00,22:05:00,200730_01,35,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,22:06:00,22:06:00,200768_01,36,渋川駅,0,0,1
特別ダイヤ１_21時24分_系統532,22:09:00,22:09:00,200463_10,37,渋川駅,1,0,1`,R9=[],h4=Tn.split(`
`);for(let _=1;_<h4.length;_++){const e=h4[_].split(","),t={route_id:e[0],service_id:e[1],date:e[2],exception_type:e[3]};R9.push(t)}const Z3=[],m4=Mn.split(`
`);for(let _=1;_<m4.length;_++){const e=m4[_].split(","),t={route_id:e[0],service_id:e[1],trip_id:e[2],trip_headsign:e[3],block_id:e[4],trip_short_name:e[5],direction_id:e[6],shape_id:e[7]};Z3.push(t)}const J3=Z3.map(_=>_.trip_id),Q0=Array.from({length:5},()=>[]);Z3.forEach(_=>{const e=_.service_id;e==="平日"?Q0[0].push(_):e==="土曜"?Q0[1].push(_):e==="日祝"?Q0[2].push(_):e==="特別ダイヤ１"?Q0[3].push(_):e==="年末・年始"&&Q0[4].push(_)});const r1=[],v4=In.split(`
`);for(let _=1;_<v4.length;_++){const e=v4[_].split(","),t={stop_id:e[0],stop_code:e[1],stop_name:e[2],stop_desc:e[3],stop_lat:e[4],stop_lon:e[5],zone_id:e[6],stop_url:e[7],location_type:e[8],platform_code:e[9],parent_station:e[10]};r1.push(t)}const B9=[],y4=Dn.split(`
`);for(let _=1;_<y4.length;_++){const e=y4[_].split(","),t={trip_id:e[0],arrival_time:e[1],departure_time:e[2],stop_id:e[3],stop_sequence:e[4],stop_headsign:e[5],pickup_type:e[6],drop_off_type:e[7],timepoint:e[8]};B9.push(t)}const j9=Array.from({length:J3.length},()=>[]);B9.forEach(_=>{const e=J3.findIndex(t=>_.trip_id===t);j9[e].push(_)});const q3=L0(new Date),O9=Array.from(new Set(r1.map(_=>_.stop_name))),b3=L0(""),L6=L0(_=>{const e=_(b3);return e===""?"前橋駅":e}),_7=L0(""),z6=L0(_=>{const e=_(_7);return e===""?"群馬大学荒牧":e}),F9=L0(_=>{const e=_(q3),t=e.getFullYear().toString(),n=(i=e)=>i.getMonth()+1>=10?(i.getMonth()+1).toString():"0"+(i.getMonth()+1).toString(),r=(i=e)=>i.getMonth()+1>=10?(i.getMonth()+1).toString():"0"+(i.getMonth()+1).toString(),l=t+n+r,o=R9.find(i=>i.date===l&&i.exception_type==="1");return o?o.service_id:e.getDay()===6?"土曜":e.getDay()===0?"日祝":"平日"}),Rn=L0(_=>{const e=_(F9);var t=[];if(e==="平日")var t=Q0[0];else if(e==="土曜")var t=Q0[1];else if(e==="日祝")var t=Q0[2];else if(e==="特別ダイヤ１")var t=Q0[3];else if(e==="年末・年始")var t=Q0[4];else console.log("ダイヤが見つかりません");return t}),U9=L0(_=>{const e=_(L6);return r1.filter(n=>n.stop_name===e)}),H9=L0(_=>{const e=_(z6);return r1.filter(n=>n.stop_name===e)}),$9=O9.map(_=>r1.find(e=>e.stop_name===_)).filter(Boolean),e7=[],u5=$9.filter(_=>_!==void 0);for(let _=1;_<$9.length;_++){const e=u5[_],t=[];for(let n=1;n<u5.length;n++){const r=u5[n];if(r!==e){const l=(Number(r.stop_lat)-Number(e.stop_lat))**2,o=(Number(r.stop_lon)-Number(e.stop_lon))**2,i=l+o;t.push({name:r.stop_name,distance:i})}}t.sort((n,r)=>n.distance-r.distance),e7.push([e.stop_name,t[0].name,t[1].name])}const V9=L0(_=>{const e=_(L6),t=e7.find(l=>l[0]===e)||[],n=r1.filter(l=>l.stop_name===t[1]),r=r1.filter(l=>l.stop_name===t[2]);return[n,r]}),K9=L0(_=>{const e=_(z6),t=e7.find(l=>l[0]===e)||[],n=r1.filter(l=>l.stop_name===t[1]),r=r1.filter(l=>l.stop_name===t[2]);return[n,r]}),Bn=L0(_=>{const e=_(U9),t=_(H9),n=_(V9).flat(),r=_(K9).flat();return[...e,...t,...n,...r]}),jn=L0(_=>{const e=_(q3),t=_(U9),n=_(H9),r=_(V9),l=_(K9),o=[...j9],i=[...J3],u=_(Rn),c=a=>a>=10?a.toString():"0"+a.toString(),m=Number(e.getHours().toString()+c(e.getMinutes())+c(e.getSeconds())),h=t.map(a=>a.stop_id),p=n.map(a=>a.stop_id),y=[];let S=null;for(let a=0;a<u.length;a++){const s=u[a],f=i.findIndex(F=>F===s.trip_id),v=o[f];let x=!1,z=!1,P={route_id:"",trip_id:"",arrival_time:"",departure_time:"",stop_id:"",stop_sequence:"",stop_headsign:"",pickup_type:"",drop_off_type:"",timepoint:""},I={route_id:"",trip_id:"",arrival_time:"",departure_time:"",stop_id:"",stop_sequence:"",stop_headsign:"",pickup_type:"",drop_off_type:"",timepoint:""};for(let F=0;F<v.length&&y.length<5;F++){let d=Number(v[F].departure_time.split(":").join(""));if(x===!1&&h.includes(v[F].stop_id)&&d>=m&&(x=!0,P=v[F]),x===!0&&p.includes(v[F].stop_id)){z=!0,I=v[F];break}}x===!0&&z===!0&&(y.length===1&&(S=a),y.push([s,P,I]))}let A=y.map(a=>a[0].trip_id);const O=(a,s)=>{const f=a.map(P=>P.stop_id),v=s.map(P=>P.stop_id),x=S===null?0:S-3,z=S===null?u.length:S-S+5;for(let P=x;P<z;P++){const I=u[P],F=i.findIndex(N=>N===I.trip_id),d=o[F];let k=!1,R=!1,T={route_id:"",trip_id:"",arrival_time:"",departure_time:"",stop_id:"",stop_sequence:"",stop_headsign:"",pickup_type:"",drop_off_type:"",timepoint:""},L={route_id:"",trip_id:"",arrival_time:"",departure_time:"",stop_id:"",stop_sequence:"",stop_headsign:"",pickup_type:"",drop_off_type:"",timepoint:""};for(let N=0;N<d.length;N++){let E=Number(d[N].departure_time.split(":").join(""));if(k===!1&&f.includes(d[N].stop_id)&&E>=m&&(k=!0,T=d[N]),k===!0&&v.includes(d[N].stop_id)){R=!0,L=d[N];break}}k===!0&&R===!0&&!A.includes(I.trip_id)&&y.push([I,T,L]),A=y.map(N=>N[0].trip_id)}};return O(t,l[0]),O(r[0],n),O(t,l[1]),O(r[1],n),O(r[0],l[0]),O(r[1],l[1]),y.sort((a,s)=>Number(a[1].departure_time.split(":").join(""))-Number(s[1].departure_time.split(":").join(""))),y.length>5&&y.filter((a,s)=>s<5),y}),g4=({value:_,onChange:e})=>{const t=O9;return j.jsx("div",{children:j.jsx("select",{value:_,onChange:e,children:t.map((n,r)=>j.jsx("option",{value:n,children:n},r))})})},On=()=>{const _=E1(L6),e=r_(b3),t=E1(z6),n=r_(_7),r=()=>{let l=_;e(t),n(l)};return j.jsx("button",{onClick:r,children:"↑↓"})},Fn=()=>{const _=E1(L6),e=r_(b3),t=o=>{e(o.target.value)},n=E1(z6),r=r_(_7),l=o=>r(o.target.value);return j.jsxs("div",{children:[j.jsx(g4,{value:_,onChange:t}),j.jsx(On,{}),j.jsx(g4,{value:n,onChange:l})]})},Un=({TripAndTimes:_})=>{const e=_[0],t=_[1],n=_[2],r=E1(Bn),l=o=>{const i=r.find(u=>o===u.stop_id);return i?i.stop_name:""};return j.jsxs("div",{children:[j.jsx("hr",{}),j.jsx("p",{children:e.trip_headsign}),j.jsx("p",{children:t.departure_time+" "+l(t.stop_id)}),j.jsx("p",{children:n.arrival_time+" "+l(n.stop_id)})]})},Hn=()=>{const _=E1(jn),e=()=>_.map((t,n)=>j.jsx(Un,{TripAndTimes:t},n));return j.jsx("div",{children:e()})},$n=()=>{const[_,e]=zn(q3),t=()=>e(new Date),n=["(日)","(月)","(火)","(水)","(木)","(金)","(土)"],r=E1(F9),l=_.getMonth()+1+"月"+_.getDate()+"日"+n[_.getDay()]+_.getHours()+"時"+_.getMinutes()+"分("+r+"ダイヤ)",[o,i]=y0.useState(_.getMonth()+1),[u,c]=y0.useState(_.getDate()),[m,h]=y0.useState(_.getHours()),[p,y]=y0.useState(_.getMinutes()),[S,A]=y0.useState(_.getSeconds()),O=()=>e(new Date(new Date().getFullYear(),o-1,u,m,p,S));return j.jsxs("div",{children:[j.jsx("h2",{children:"現在日時"}),j.jsx("p",{children:l}),j.jsx("button",{onClick:t,children:"現在の日時に合わせる"}),j.jsx("div",{}),j.jsx("input",{type:"number",value:o,onChange:a=>i(parseInt(a.target.value))}),j.jsx("span",{children:"月"}),j.jsx("input",{type:"number",value:u,onChange:a=>c(parseInt(a.target.value))}),j.jsx("span",{children:"日"}),j.jsx("input",{type:"number",value:m,onChange:a=>h(parseInt(a.target.value))}),j.jsx("span",{children:"時"}),j.jsx("input",{type:"number",value:p,onChange:a=>y(parseInt(a.target.value))}),j.jsx("span",{children:"分"}),j.jsx("input",{type:"number",value:S,onChange:a=>A(parseInt(a.target.value))}),j.jsx("span",{children:"秒"}),j.jsx("div",{}),j.jsx("button",{onClick:O,children:"指定の日時に合わせる"})]})};function Vn(){return j.jsxs("div",{children:[j.jsx($n,{}),j.jsx(Fn,{}),j.jsx(Hn,{})]})}s5.createRoot(document.getElementById("root")).render(j.jsx(L4.StrictMode,{children:j.jsx(Vn,{})}));
