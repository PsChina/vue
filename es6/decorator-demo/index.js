!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,r;function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i,u,l,a,c,f,p=function(e){e.isMyClass=function(t){return t instanceof e},e.prototype.author="PsChina"}((i=(r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type="myClass"}var t,n,r;return t=e,(n=[{key:"getType",value:function(){return this.type}}])&&o(t.prototype,n),r&&o(t,r),e}()).prototype,u="getType",l=[function(e,t,n){return console.log(e,t,n),n.writable=!1,n}],a=Object.getOwnPropertyDescriptor(r.prototype,"getType"),c=r.prototype,f={},Object.keys(a).forEach(function(e){f[e]=a[e]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=l.slice().reverse().reduce(function(e,t){return t(i,u,e)||e},f),c&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(c):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(i,u,f),f=null),n=r))||n;var s=new p;console.log(p.isMyClass(s),s,s.author),s.getType=function(){},console.log(s.getType.toString())}]);