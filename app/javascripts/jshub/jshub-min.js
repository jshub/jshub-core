"use strict";(function(){var d=null,c=document;function b(){if(b.done){return;}b.done=true;if(d){clearInterval(d);}jsHub.trigger("data-capture-start");jsHub.trigger("page-view");jsHub.trigger("data-capture-complete");}if(c.addEventListener){c.addEventListener("DOMContentLoaded",b,false);}else{if(c.attachEvent){c.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");var a=c.getElementById("__ie_onload");a.onreadystatechange=function(){if(this.readyState==="complete"){b();}};}else{if(/WebKit/i.test(navigator.userAgent)){d=setInterval(function(){if(/loaded|complete/.test(c.readyState)){b();}},50);}}}})();