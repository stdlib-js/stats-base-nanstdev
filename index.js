// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(r,e,t){var l,c,d,_;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),d="get"in t,_="set"in t,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&a&&a.call(r,e,t.get),_&&u&&u.call(r,e,t.set),r},d=e()?l:c,_=function(r,e,t){d(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},p=Math.floor,y=function r(e,t,n,o,a){var u,i,f,l,c,d,_,y,s,b,v,N,j,m;if(u=a,e<8){for(v=0,N=0,m=0;m<e;m++)(j=n[u])==j&&(v+=j,N+=1),u+=o;return t[0]+=v,t[1]+=N,t}if(e<=128){for(i=0,f=0,l=0,c=0,d=0,_=0,y=0,s=0,N=0,b=e%8,m=0;m<e-b;m+=8)(j=n[u])==j&&(i+=j,N+=1),(j=n[u+=o])==j&&(f+=j,N+=1),(j=n[u+=o])==j&&(l+=j,N+=1),(j=n[u+=o])==j&&(c+=j,N+=1),(j=n[u+=o])==j&&(d+=j,N+=1),(j=n[u+=o])==j&&(_+=j,N+=1),(j=n[u+=o])==j&&(y+=j,N+=1),(j=n[u+=o])==j&&(s+=j,N+=1),u+=o;for(v=i+f+(l+c)+(d+_+(y+s));m<e;m++)(j=n[u])==j&&(v+=j,N+=1),u+=o;return t[0]+=v,t[1]+=N,t}return N=p(e/2),r(N-=N%8,t,n,o,u)+r(e-N,t,n,o,u+N*o)},s=y,b=[0,0],v=y,N=[0,0],j=function(r,e,t,n){var o,a,u,i,f,l,c,d,_;if(r<=0)return NaN;if(1===r||0===n)return(c=t[0])==c&&r-e>0?0:NaN;if(a=n<0?(1-r)*n:0,b[0]=0,b[1]=0,s(r,b,t,n,a),(i=(d=b[1])-e)<=0)return NaN;for(o=b[0]/d,u=0,f=0,_=0;_<r;_++)(c=t[a])==c&&(u+=(l=c-o)*l,f+=l),a+=n;return u/i-f/d*(f/i)};_(j,"ndarray",(function(r,e,t,n,o){var a,u,i,f,l,c,d,_,p;if(r<=0)return NaN;if(1===r||0===n)return(d=t[o])==d&&r-e>0?0:NaN;if(N[0]=0,N[1]=0,v(r,N,t,n,o),(f=(_=N[1])-e)<=0)return NaN;for(a=N[0]/_,u=o,i=0,l=0,p=0;p<r;p++)(d=t[u])==d&&(i+=(c=d-a)*c,l+=c),u+=n;return i/f-l/_*(l/f)}));var m=j,g=Math.sqrt,h=m,w=g,O=m.ndarray,P=g,T=function(r,e,t,n){return w(h(r,e,t,n))};_(T,"ndarray",(function(r,e,t,n,o){return P(O(r,e,t,n,o))}));var x=T;function E(r,e,t,n){return x(r,e,t,n)}return _(E,"ndarray",(function(r,e,t,n,o){return x.ndarray(r,e,t,n,o)})),E},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).nanstdev=e();
//# sourceMappingURL=index.js.map
