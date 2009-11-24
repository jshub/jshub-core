"use strict";YUI.add("hub",function(a){(function(){var d=this,c,b=function(){var i={},f=[],j=function(k,l){this.token=k;this.callback=l;},e=function(k,m,l){this.type=k;this.timestamp=l||c.safe.getTimestamp();this.data=m;},h=function(){var k=function(n,p){n=n.split(",");for(var o=0;o<n.length;o++){if(p===a.Lang.trim(n[o])){return true;}}return false;},m=function(n,p){var o=a.Lang.trim(p.event_visibility);if(o===undefined||o===""||o==="*"){return true;}return k(o,n);},l=function(o,p){var n={};a.Object.each(p,function(s,r){if(/_visibility$/.test(r)===false){var q=p[r+"_visibility"];if(typeof q!=="string"||q===""||q==="*"||k(q,o)){n[r]=s;}}});return n;};this.dispatch=function(o,t,s,r){var n,q,p;if(m(t.token,s)){q=l(t.token,s);n=new e(o,q,r);p=t.callback(n);if(p){a.mix(s,p);}}};},g=new h();this.bind=function(k,m,p){var o=i[k],n,l;if("undefined"===typeof o){o=[];}for(n=false,l=0;l<o.length;l++){if(o[l].token===m){o[l].callback=p;n=true;break;}}if(!n){o.push(new j(m,p));}i[k]=o;};this.trigger=function(s,q,t){q=q||{};var n=(i[s]||[]);var u,m,l=(i["*"]||[]),r,p;for(r=0;r<l.length;r++){m=l[r];u=false;for(p=0;p<n.length;p++){if(n[p].token===m.token){u=true;}}if(!u){n.push(m);}}for(var o=0;o<n.length;o++){g.dispatch(s,n[o],q,t);}if(s==="plugin-initialization-start"){f.push(q);}};this.getPluginInfo=function(){var o=[],k;for(k=0;k<f.length;k++){var l=f[k],n={};for(var m in l){if(typeof l[m]==="string"||typeof l[m]==="number"){n[m]=l[m];}}o.push(n);}return o;};};c=d.jsHub=new b();c.safe=function(f){var e;if("document"===f){e={location:{hash:document.location.hash,host:document.location.host,hostname:document.location.hostname,href:document.location.href,pathname:document.location.pathname,port:document.location.port,protocol:document.location.protocol,search:document.location.search},title:document.title,referrer:(document.referrer===null)?"":document.referrer,cookies:document.cookies,domain:"Unsafe property"};}else{e={};}return e;};c.safe.getTimestamp=function(){return new Date().getTime();};})();},"2.0.0",{requires:["yui"],after:["yui"]});