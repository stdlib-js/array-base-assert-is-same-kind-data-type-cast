// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return Object.keys(Object(e))}var r=void 0!==Object.keys,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function i(){return t&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString,a=Object.prototype.hasOwnProperty;function o(e,r){return null!=e&&a.call(e,r)}var c,s="function"==typeof Symbol?Symbol:void 0,u="function"==typeof s?s.toStringTag:"",l=i()?function(e){var r,t,i;if(null==e)return n.call(e);t=e[u],r=o(e,u);try{e[u]=void 0}catch(r){return n.call(e)}return i=n.call(e),r?e[u]=t:delete e[u],i}:function(e){return n.call(e)};function p(e){return"[object Arguments]"===l(e)}c=function(){return p(arguments)}();var f=c,g="function"==typeof Object.defineProperty?Object.defineProperty:null,d=Object.defineProperty;function h(e){return"number"==typeof e}function w(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function b(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+w(n):w(n)+e,i&&(e="-"+e)),e}var m=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function y(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!h(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=b(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=b(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===v.call(e.specifier)?v.call(t):m.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function x(e){return"string"==typeof e}var E=Math.abs,k=String.prototype.toLowerCase,S=String.prototype.toUpperCase,V=String.prototype.replace,j=/e\+(\d)$/,I=/e-(\d)$/,T=/^(\d+)$/,$=/^(\d+)e/,F=/\.0$/,_=/\.0*e/,O=/(\..*[^0])0*e/;function A(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!h(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":E(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=V.call(t,O,"$1e"),t=V.call(t,_,"e"),t=V.call(t,F,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=V.call(t,j,"e+0$1"),t=V.call(t,I,"e-0$1"),e.alternate&&(t=V.call(t,T,"$1."),t=V.call(t,$,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===S.call(e.specifier)?S.call(t):k.call(t)}function C(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function R(e,r,t){var i=r-e.length;return i<0?e:e=t?e+C(i):C(i)+e}var Z=String.fromCharCode,P=isNaN,W=Array.isArray;function L(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,t,i,n,a,o,c,s,u;if(!W(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(x(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=L(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,P(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,P(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=y(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!P(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=P(a)?String(i.arg):Z(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=A(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=b(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=R(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function U(e){var r,t,i,n;for(t=[],n=0,i=G.exec(e);i;)(r=e.slice(n,G.lastIndex-i[0].length)).length&&t.push(r),t.push(X(i)),n=G.lastIndex,i=G.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function M(e){return"string"==typeof e}function B(e){var r,t;if(!M(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[U(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return N.apply(null,r)}var z,Y=Object.prototype,H=Y.toString,D=Y.__defineGetter__,K=Y.__defineSetter__,q=Y.__lookupGetter__,J=Y.__lookupSetter__;z=function(){try{return g({},"x",{}),!0}catch(e){return!1}}()?d:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===H.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(q.call(e,r)||J.call(e,r)?(i=e.__proto__,e.__proto__=Y,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&D&&D.call(e,r,t.get),o&&K&&K.call(e,r,t.set),e};var Q=z;function ee(e,r,t){Q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function re(e){return"string"==typeof e}var te=String.prototype.valueOf,ie=i();function ne(e){return"object"==typeof e&&(e instanceof String||(ie?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object String]"===l(e)))}function ae(e){return re(e)||ne(e)}function oe(e){return"number"==typeof e}ee(ae,"isPrimitive",re),ee(ae,"isObject",ne);var ce=Number,se=ce.prototype.toString,ue=i();function le(e){return"object"==typeof e&&(e instanceof ce||(ue?function(e){try{return se.call(e),!0}catch(e){return!1}}(e):"[object Number]"===l(e)))}function pe(e){return oe(e)||le(e)}function fe(e){return e!=e}function ge(e){return oe(e)&&fe(e)}function de(e){return le(e)&&fe(e.valueOf())}function he(e){return ge(e)||de(e)}ee(pe,"isPrimitive",oe),ee(pe,"isObject",le),ee(he,"isPrimitive",ge),ee(he,"isObject",de);var we=Number.POSITIVE_INFINITY,be=ce.NEGATIVE_INFINITY,me=Math.floor;function ve(e){return e<we&&e>be&&me(r=e)===r;var r}function ye(e){return oe(e)&&ve(e)}function xe(e){return le(e)&&ve(e.valueOf())}function Ee(e){return ye(e)||xe(e)}ee(Ee,"isPrimitive",ye),ee(Ee,"isObject",xe);var ke=Object.prototype.propertyIsEnumerable,Se=!ke.call("beep","0");function Ve(e,r){var t;return null!=e&&(!(t=ke.call(e,r))&&Se&&ae(e)?!ge(r=+r)&&ye(r)&&r>=0&&r<e.length:t)}var je=Array.isArray?Array.isArray:function(e){return"[object Array]"===l(e)},Ie=Math.floor,Te=f?p:function(e){return null!==e&&"object"==typeof e&&!je(e)&&"number"==typeof e.length&&(r=e.length,Ie(r)===r)&&e.length>=0&&e.length<=4294967295&&o(e,"callee")&&!Ve(e,"callee");var r},$e=Array.prototype.slice;function Fe(e){return"number"==typeof e}function _e(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Oe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+_e(n):_e(n)+e,i&&(e="-"+e)),e}var Ae=String.prototype.toLowerCase,Ce=String.prototype.toUpperCase;function Re(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Fe(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Oe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Oe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ce.call(e.specifier)?Ce.call(t):Ae.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ze(e){return"string"==typeof e}var Pe=Math.abs,We=String.prototype.toLowerCase,Le=String.prototype.toUpperCase,Ne=String.prototype.replace,Ge=/e\+(\d)$/,Xe=/e-(\d)$/,Ue=/^(\d+)$/,Me=/^(\d+)e/,Be=/\.0$/,ze=/\.0*e/,Ye=/(\..*[^0])0*e/;function He(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Fe(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Pe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ne.call(t,Ye,"$1e"),t=Ne.call(t,ze,"e"),t=Ne.call(t,Be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ne.call(t,Ge,"e+0$1"),t=Ne.call(t,Xe,"e-0$1"),e.alternate&&(t=Ne.call(t,Ue,"$1."),t=Ne.call(t,Me,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Le.call(e.specifier)?Le.call(t):We.call(t)}function De(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ke(e,r,t){var i=r-e.length;return i<0?e:e=t?e+De(i):De(i)+e}var qe=String.fromCharCode,Je=isNaN,Qe=Array.isArray;function er(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function rr(e){var r,t,i,n,a,o,c,s,u;if(!Qe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ze(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=er(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Je(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Je(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Re(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Je(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Je(a)?String(i.arg):qe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=He(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Oe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ke(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var tr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ir(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function nr(e){var r,t,i,n;for(t=[],n=0,i=tr.exec(e);i;)(r=e.slice(n,tr.lastIndex-i[0].length)).length&&t.push(r),t.push(ir(i)),n=tr.lastIndex,i=tr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function ar(e){return"string"==typeof e}function or(e){var r,t;if(!ar(e))throw new TypeError(or("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[nr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return rr.apply(null,r)}function cr(e){return null!==e&&"object"==typeof e}ee(cr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(or("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!je(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(cr));var sr=Ve((function(){}),"prototype"),ur=!Ve({toString:null},"toString"),lr=Math.floor;function pr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&(r=e.length,lr(r)===r)&&e.length>=0&&e.length<=9007199254740991;var r}function fr(e){return"number"==typeof e}function gr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function dr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+gr(n):gr(n)+e,i&&(e="-"+e)),e}var hr=String.prototype.toLowerCase,wr=String.prototype.toUpperCase;function br(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!fr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=dr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=dr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===wr.call(e.specifier)?wr.call(t):hr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function mr(e){return"string"==typeof e}var vr=Math.abs,yr=String.prototype.toLowerCase,xr=String.prototype.toUpperCase,Er=String.prototype.replace,kr=/e\+(\d)$/,Sr=/e-(\d)$/,Vr=/^(\d+)$/,jr=/^(\d+)e/,Ir=/\.0$/,Tr=/\.0*e/,$r=/(\..*[^0])0*e/;function Fr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!fr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":vr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Er.call(t,$r,"$1e"),t=Er.call(t,Tr,"e"),t=Er.call(t,Ir,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Er.call(t,kr,"e+0$1"),t=Er.call(t,Sr,"e-0$1"),e.alternate&&(t=Er.call(t,Vr,"$1."),t=Er.call(t,jr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===xr.call(e.specifier)?xr.call(t):yr.call(t)}function _r(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Or(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_r(i):_r(i)+e}var Ar=String.fromCharCode,Cr=isNaN,Rr=Array.isArray;function Zr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Pr(e){var r,t,i,n,a,o,c,s,u;if(!Rr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(mr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Zr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Cr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Cr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=br(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Cr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Cr(a)?String(i.arg):Ar(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Fr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=dr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Or(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Lr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Nr(e){var r,t,i,n;for(t=[],n=0,i=Wr.exec(e);i;)(r=e.slice(n,Wr.lastIndex-i[0].length)).length&&t.push(r),t.push(Lr(i)),n=Wr.lastIndex,i=Wr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Gr(e){return"string"==typeof e}function Xr(e){var r,t;if(!Gr(e))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Nr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Pr.apply(null,r)}function Ur(e,r,t){var i,n;if(!pr(e)&&!re(e))throw new TypeError(Xr("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(i=e.length))return-1;if(3===arguments.length){if(!ye(t))throw new TypeError(Xr("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else(n=i+t)<0&&(n=0)}else n=0;if(he(r)){for(;n<i;n++)if(he(e[n]))return n}else for(;n<i;n++)if(e[n]===r)return n;return-1}var Mr=/./;function Br(e){return"boolean"==typeof e}var zr=Boolean,Yr=Boolean.prototype.toString,Hr=i();function Dr(e){return"object"==typeof e&&(e instanceof zr||(Hr?function(e){try{return Yr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===l(e)))}function Kr(e){return Br(e)||Dr(e)}function qr(e){return"number"==typeof e}function Jr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Qr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Jr(n):Jr(n)+e,i&&(e="-"+e)),e}ee(Kr,"isPrimitive",Br),ee(Kr,"isObject",Dr);var et=String.prototype.toLowerCase,rt=String.prototype.toUpperCase;function tt(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!qr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Qr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Qr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===rt.call(e.specifier)?rt.call(t):et.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function it(e){return"string"==typeof e}var nt=Math.abs,at=String.prototype.toLowerCase,ot=String.prototype.toUpperCase,ct=String.prototype.replace,st=/e\+(\d)$/,ut=/e-(\d)$/,lt=/^(\d+)$/,pt=/^(\d+)e/,ft=/\.0$/,gt=/\.0*e/,dt=/(\..*[^0])0*e/;function ht(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!qr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":nt(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ct.call(t,dt,"$1e"),t=ct.call(t,gt,"e"),t=ct.call(t,ft,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ct.call(t,st,"e+0$1"),t=ct.call(t,ut,"e-0$1"),e.alternate&&(t=ct.call(t,lt,"$1."),t=ct.call(t,pt,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ot.call(e.specifier)?ot.call(t):at.call(t)}function wt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function bt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+wt(i):wt(i)+e}var mt=String.fromCharCode,vt=isNaN,yt=Array.isArray;function xt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Et(e){var r,t,i,n,a,o,c,s,u;if(!yt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(it(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=xt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,vt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,vt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=tt(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!vt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=vt(a)?String(i.arg):mt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ht(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Qr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=bt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var kt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function St(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Vt(e){var r,t,i,n;for(t=[],n=0,i=kt.exec(e);i;)(r=e.slice(n,kt.lastIndex-i[0].length)).length&&t.push(r),t.push(St(i)),n=kt.lastIndex,i=kt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function jt(e){return"string"==typeof e}function It(e){var r,t;if(!jt(e))throw new TypeError(It("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Vt(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Et.apply(null,r)}function Tt(){return new Function("return this;")()}var $t="object"==typeof self?self:null,Ft="object"==typeof window?window:null,_t="object"==typeof globalThis?globalThis:null,Ot=function(e){if(arguments.length){if(!Br(e))throw new TypeError(It("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Tt()}if(_t)return _t;if($t)return $t;if(Ft)return Ft;throw new Error("unexpected error. Unable to resolve global object.")}(),At=Ot.document&&Ot.document.childNodes,Ct=Int8Array;function Rt(){return/^\s*function\s*([^(]*)/i}var Zt=/^\s*function\s*([^(]*)/i;function Pt(e){var r,t,i,n;if(("Object"===(t=l(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Zt.exec(i.toString()))return r[1]}return cr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}ee(Rt,"REGEXP",Zt);var Wt="function"==typeof Mr||"object"==typeof Ct||"function"==typeof At?function(e){return Pt(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Pt(e).toLowerCase():r};function Lt(e){return e.constructor&&e.constructor.prototype===e}var Nt,Gt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Xt="undefined"==typeof window?void 0:window,Ut=function(){var e;if("undefined"===Wt(Xt))return!1;for(e in Xt)try{-1===Ur(Gt,e)&&o(Xt,e)&&null!==Xt[e]&&"object"===Wt(Xt[e])&&Lt(Xt[e])}catch(e){return!0}return!1}(),Mt="undefined"!=typeof window,Bt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Nt=r?function(){return 2!==(e(arguments)||"").length}(1,2)?function(r){return Te(r)?e($e.call(r)):e(r)}:e:function(e){var r,t,i,n,a,c,s;if(n=[],Te(e)){for(s=0;s<e.length;s++)n.push(s.toString());return n}if("string"==typeof e){if(e.length>0&&!o(e,"0"))for(s=0;s<e.length;s++)n.push(s.toString())}else{if(0==(i="function"==typeof e)&&!cr(e))return n;t=sr&&i}for(a in e)t&&"prototype"===a||!o(e,a)||n.push(String(a));if(ur)for(r=function(e){if(!1===Mt&&!Ut)return Lt(e);try{return Lt(e)}catch(e){return!1}}(e),s=0;s<Bt.length;s++)c=Bt[s],r&&"constructor"===c||!o(e,c)||n.push(String(c));return n};var zt=Nt;function Yt(e){return"function"===Wt(e)}var Ht,Dt=Object,Kt=Object.getPrototypeOf;Ht=Yt(Object.getPrototypeOf)?Kt:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===l(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var qt=Ht,Jt=Object.prototype;function Qt(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!je(e)}(e)&&(r=function(e){return null==e?null:(e=Dt(e),qt(e))}(e),!r||!o(e,"constructor")&&o(r,"constructor")&&Yt(r.constructor)&&"[object Function]"===l(r.constructor)&&o(r,"isPrototypeOf")&&Yt(r.isPrototypeOf)&&(r===Jt||function(e){var r;for(r in e)if(!o(e,r))return!1;return!0}(e)))}function ei(e){return"number"==typeof e}function ri(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ti(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ri(n):ri(n)+e,i&&(e="-"+e)),e}var ii=String.prototype.toLowerCase,ni=String.prototype.toUpperCase;function ai(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ei(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ti(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ti(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ni.call(e.specifier)?ni.call(t):ii.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function oi(e){return"string"==typeof e}var ci=Math.abs,si=String.prototype.toLowerCase,ui=String.prototype.toUpperCase,li=String.prototype.replace,pi=/e\+(\d)$/,fi=/e-(\d)$/,gi=/^(\d+)$/,di=/^(\d+)e/,hi=/\.0$/,wi=/\.0*e/,bi=/(\..*[^0])0*e/;function mi(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ei(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ci(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=li.call(t,bi,"$1e"),t=li.call(t,wi,"e"),t=li.call(t,hi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=li.call(t,pi,"e+0$1"),t=li.call(t,fi,"e-0$1"),e.alternate&&(t=li.call(t,gi,"$1."),t=li.call(t,di,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ui.call(e.specifier)?ui.call(t):si.call(t)}function vi(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function yi(e,r,t){var i=r-e.length;return i<0?e:e=t?e+vi(i):vi(i)+e}var xi=String.fromCharCode,Ei=isNaN,ki=Array.isArray;function Si(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Vi(e){var r,t,i,n,a,o,c,s,u;if(!ki(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(oi(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Si(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ei(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ei(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ai(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ei(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ei(a)?String(i.arg):xi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=mi(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ti(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=yi(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var ji=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ii(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ti(e){var r,t,i,n;for(t=[],n=0,i=ji.exec(e);i;)(r=e.slice(n,ji.lastIndex-i[0].length)).length&&t.push(r),t.push(Ii(i)),n=ji.lastIndex,i=ji.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function $i(e){return"string"==typeof e}function Fi(e){var r,t;if(!$i(e))throw new TypeError(Fi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ti(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Vi.apply(null,r)}var _i=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Oi(){return _i.slice()}var Ai={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Ci(){var e;return 0===arguments.length?Ai.all.slice():(e=Ai[arguments[0]])?e.slice():[]}function Ri(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Zi(e,r,t){Q(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}ee(Ci,"enum",Ri),function(e,r){var t,i,n;for(t=zt(r),n=0;n<t.length;n++)Zi(e,i=t[n],r[i])}(Ci,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Pi={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Wi(){return{bool:Pi.bool,int8:Pi.int8,uint8:Pi.uint8,uint8c:Pi.uint8c,int16:Pi.int16,uint16:Pi.uint16,int32:Pi.int32,uint32:Pi.uint32,int64:Pi.int64,uint64:Pi.uint64,float32:Pi.float32,float64:Pi.float64,complex64:Pi.complex64,complex128:Pi.complex128,binary:Pi.binary,generic:Pi.generic,notype:Pi.notype,userdefined_type:Pi.userdefined_type}}ee(Oi,"enum",Wi),function(e,r){var t,i,n;for(t=zt(r),n=0;n<t.length;n++)Zi(e,i=t[n],r[i])}(Oi,Wi());var Li=function(e,r){var t,i,n,a,c,s,u,l=!0;if(!cr(e))throw new TypeError(Fi("invalid argument. First argument must be an object (except null). Value: `%s`.",e));if(arguments.length>1){if(!Qt(r))throw new TypeError(Fi("invalid argument. Options argument must be an object. Value: `%s`.",r));if(o(r,"duplicates")&&!Br(l=r.duplicates))throw new TypeError(Fi("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",l))}if(i=(t=zt(e)).length,c={},l)for(u=0;u<i;u++)o(c,a=e[n=t[u]])?(s=c[a],je(s)?c[a].push(n):c[a]=[s,n]):c[a]=n;else for(u=0;u<i;u++)c[e[n=t[u]]]=n;return c}(Wi(),{duplicates:!1}),Ni=Wi();function Gi(e){var r=typeof e;return"string"===r?function(e){var r=Ni[e];return"number"==typeof r?r:null}(e)?e:null:"number"===r?function(e){var r=Li[e];return"string"==typeof r?r:null}(e):null}var Xi,Ui={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,generic:1}};function Mi(){var e,r,t,i,n,a,o,c,s;for(t={},r=(e=zt(Ui)).length,s=0;s<r;s++){for(n=e[s],o=Ui[n],i={},c=0;c<r;c++)i[a=e[c]]=o[a];t[n]=i}return t}function Bi(){var e,r,t,i,n,a,o,c,s;for(t={},r=(e=zt(Ui)).length,s=0;s<r;s++){for(n=e[s],o=Ui[n],i=[],c=0;c<r;c++)1===o[a=e[c]]&&i.push(a);t[n]=i}return t}var zi=function(e){return 0===arguments.length?Mi():(void 0===Xi&&(Xi=Bi()),e=Gi(e),o(Xi,e)?Xi[e].slice():null)}();return function(e,r){return e===r||zi[e][r]>0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isSameKindCast=r();
//# sourceMappingURL=browser.js.map
