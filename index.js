// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=t?e+i(n):i(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!t(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function y(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":c(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=u.call(i,b,"$1e"),i=u.call(i,v,"e"),i=u.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,d,"e-0$1"),e.alternate&&(i=u.call(i,g,"$1."),i=u.call(i,h,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===l.call(e.specifier)?l.call(i):p.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,x=Array.isArray;function k(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,i,n,o,c,p,l,u,f,d,g,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,l=0;l<e.length;l++)if("string"==typeof(i=e[l]))c+=i;else{if(r=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=y(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,d=i.width,g=i.padRight,h=void 0,(h=d-f.length)<0?f:f=g?f+m(h):m(h)+f)),c+=i.arg||"",p+=1}return c}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,i,a;for(t=[],a=0,i=N.exec(e);i;)(r=e.slice(a,N.lastIndex-i[0].length)).length&&t.push(r),t.push(j(i)),a=N.lastIndex,i=N.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var $=Object.prototype,F=$.toString,I=$.__defineGetter__,A=$.__defineSetter__,C=$.__lookupGetter__,R=$.__lookupSetter__,O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(C.call(e,r)||R.call(e,r)?(i=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&I&&I.call(e,r,t.get),o&&A&&A.call(e,r,t.set),e};function P(e,r,t){O(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=Math.floor,G=128;function W(e,r,t,i,a){var n,o,s,c,p,l,u,f,d,g,h,w,v,b;if(n=a,e<8){for(h=0,w=0,b=0;b<e;b++)(v=t[n])==v&&(h+=v,w+=1),n+=i;return r[0]+=h,r[1]+=w,r}if(e<=G){for(o=0,s=0,c=0,p=0,l=0,u=0,f=0,d=0,w=0,g=e%8,b=0;b<e-g;b+=8)(v=t[n])==v&&(o+=v,w+=1),(v=t[n+=i])==v&&(s+=v,w+=1),(v=t[n+=i])==v&&(c+=v,w+=1),(v=t[n+=i])==v&&(p+=v,w+=1),(v=t[n+=i])==v&&(l+=v,w+=1),(v=t[n+=i])==v&&(u+=v,w+=1),(v=t[n+=i])==v&&(f+=v,w+=1),(v=t[n+=i])==v&&(d+=v,w+=1),n+=i;for(h=o+s+(c+p)+(l+u+(f+d));b<e;b++)(v=t[n])==v&&(h+=v,w+=1),n+=i;return r[0]+=h,r[1]+=w,r}return w=Z(e/2),W(w-=w%8,r,t,i,n)+W(e-w,r,t,i,n+w*i)}var L=[0,0];function M(e,r,t,i){var a,n,o,s,c,p,l,u,f;if(e<=0)return NaN;if(1===e||0===i)return(l=t[0])==l&&e-r>0?0:NaN;if(n=i<0?(1-e)*i:0,L[0]=0,L[1]=0,W(e,L,t,i,n),(s=(u=L[1])-r)<=0)return NaN;for(a=L[0]/u,o=0,c=0,f=0;f<e;f++)(l=t[n])==l&&(o+=(p=l-a)*p,c+=p),n+=i;return o/s-c/u*(c/s)}var U=[0,0];P(M,"ndarray",(function(e,r,t,i,a){var n,o,s,c,p,l,u,f,d;if(e<=0)return NaN;if(1===e||0===i)return(u=t[a])==u&&e-r>0?0:NaN;if(U[0]=0,U[1]=0,W(e,U,t,i,a),(c=(f=U[1])-r)<=0)return NaN;for(n=U[0]/f,o=a,s=0,p=0,d=0;d<e;d++)(u=t[o])==u&&(s+=(l=u-n)*l,p+=l),o+=i;return s/c-p/f*(p/c)}));const{ndarray:X}=M;var q=Math.sqrt;function z(e,r,t,i){return q(M(e,r,t,i))}P(z,"ndarray",(function(e,r,t,i,a){return q(X(e,r,t,i,a))}));const{ndarray:B}=z;function D(e,r,t,i){return z(e,r,t,i)}return P(D,"ndarray",(function(e,r,t,i,a){return B(e,r,t,i,a)})),D},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanstdev=r();
//# sourceMappingURL=index.js.map
