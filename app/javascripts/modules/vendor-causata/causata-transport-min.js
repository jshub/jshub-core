"use strict";YUI.add("causata-transport",function(a){(function(){var d={name:"Causata Transport Plugin",version:0.1,vendor:"Causata Inc"},e=["page-view","product-view","authentication","checkout"],c="causata",f=function(j){var i="<%= server_url %>",k="<%= account_id %>",h={timestamp:j.timestamp,"event-type":j.type,attributes:[]};for(var l in j.data){if("string"===typeof j.data[l]||"number"===typeof j.data[l]){h.attributes.push({name:l,value:j.data[l]});}}jsHub.safe.toJSONString=function(m){if(a.JSON){return a.JSON.stringify(m,null,2);}};var g={sender:d.name+" v"+d.version,event:jsHub.safe.toJSONString(h)};jsHub.dispatchViaForm("POST",i,g);};for(var b=0;b<e.length;b++){jsHub.bind(e[b],"causata",f);}jsHub.trigger("plugin-initialization-complete",d);})();},"2.0.0",{requires:["hub","form-transport","json-stringify"],after:["hub","form-transport","json-stringify"]});