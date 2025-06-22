"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(g,u){
var p=require('@stdlib/stats-base-nanstdevpn/dist').ndarray;function y(e,r,a,t,c){return p(e,r,a,t,c)}u.exports=y
});var v=n(function(h,i){
var f=require('@stdlib/strided-base-stride2offset/dist'),x=s();function l(e,r,a,t){return x(e,r,a,t,f(e,t))}i.exports=l
});var q=n(function(j,o){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),O=s();m(d,"ndarray",O);o.exports=d
});var R=q();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
