parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
function e(){var e=document.getElementById("visitCount");e.innerHTML=123;var t="https://study-sheekswallow.c9users.io:8082/.netlify/functions/visit";console.log("visit",t),fetch(t).then(function(e){return e.json()}).then(function(t){e.innerHTML="res.status"}).catch(function(e){return console.error("Error:",e)})}function t(){var e=document.getElementById("createFolderInput"),t=document.getElementById("createFolderMsg"),n={foldername:e.value};fetch("/dropbox/createfolder",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json; charset=utf-8"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){t.innerHTML=e.status}).catch(function(e){return console.error("Error:",e)})}e(),document.getElementById("createFolderSubmit").addEventListener("click",function(e){e.preventDefault(),t()});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/homepage.e31bb0bc.map