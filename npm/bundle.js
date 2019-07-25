(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.inspetor=t():e.inspetor=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n,o,a,c,s,i,p="spInspetor",u=function(){function e(){this.isConfigured=!1}return e.sharedInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.setupInspetor=function(e,t,r,n,o){void 0===n&&(n=!1),void 0===o&&(o=!1);var a=n?"post-staging":"post",c=o?"test.com":"ppt.useinspetor.com/",s=this.checkBeaconAPI?"beacon":"post";this.setupTracker(e,t,a,c,s,r),this.isConfigured=!0},e.prototype.setupSnowplow=function(){this.createSnowplow("https://inspetor-static-js.s3-sa-east-1.amazonaws.com/dev/inspetor-min.js",p)},e.prototype.createSnowplow=function(e,t){if(!window[t]){window.GlobalSnowplowNamespace=window.GlobalSnowplowNamespace||[],window.GlobalSnowplowNamespace.push(t),window[t]=function(){(window[t].q=window[t].q||[]).push(arguments)},window[t].q=window[t].q||[];var r=document.createElement("script"),n=document.getElementsByTagName("script")[0];r.async=!0,r.src=e,n.parentNode.insertBefore(r,n)}},e.prototype.setupTracker=function(e,t,r,n,o,a){window[p]("newTracker",t,n,{appId:e,platform:"web",encodeBase64:!0,respectDoNotTrack:!1,stateStorageStrategy:"localStorage",bufferSize:1,forceSecureTracker:!0,eventMethod:o,postPath:r,contexts:{webPage:!0,performanceTiming:!1,gaCookies:!0,geolocation:a}})},e.prototype.checkBeaconAPI=function(){return!!navigator.sendBeacon},e}();!function(e){e.create="account_create",e.update="account_update",e.delete="account_delete"}(n||(n={})),function(e){e.create="event_create",e.update="event_update",e.delete="event_delete"}(o||(o={})),function(e){e.login="account_login",e.logout="account_logout"}(a||(a={})),function(e){e.reset="password_reset",e.recovery="password_recovery"}(c||(c={})),function(e){e.create="sale_create",e.update="sale_update"}(s||(s={})),function(e){e.create="transfer_create",e.updateStatus="transfer_update_status"}(i||(i={}));var d=function(){function e(){this.tracker=window[p]}return e.prototype.trackAccountAction=function(e,t){var r={};r.account_id=e.id,r.account_timestamp=e.timestamp;var n=this.createData("iglu:com.inspetor/inspetor_account_frontend/jsonschema/1-0-0",r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackAccountAuthAction=function(e,t){var r={};r.auth_account_id=e.id,r.auth_timestamp=e.timestamp;var n=this.createData("iglu:com.inspetor/inspetor_auth_frontend/jsonschema/1-0-0",r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackEventAction=function(e,t){var r={};r.event_id=e.id,r.event_timestamp=e.timestamp;var n=this.createData("iglu:com.inspetor/inspetor_event_frontend/jsonschema/1-0-0",r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackPasswordRecoveryAction=function(e,t){var r={};r.pass_recovery_email=e.id,r.pass_recovery_timestamp=e.timestamp;var n=this.createData("iglu:com.inspetor/inspetor_pass_recovery_frontend/jsonschema/1-0-0",r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackSaleAction=function(e,t){var r={};r.sale_id=e.id,r.sale_timestamp=e.timestamp;var n=this.createData("iglu:com.inspetor/inspetor_sale_frontend/jsonschema/1-0-0",r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackItemTransferAction=function(e,t){var r={};r.transfer_id=e.id,r.transfer_timestamp=e.timestamp;var n=this.createData("iglu:com.inspetor/inspetor_transfer_frontend/jsonschema/1-0-0",r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.createData=function(e,t){return{schema:e,data:t}},e.prototype.createContext=function(e){return[{schema:"iglu:com.inspetor/inspetor_context/jsonschema/1-0-0",data:{action:e}}]},e}(),f=function(){function e(){this.resource=new d}return e.prototype.configure=function(e,t,r,n,o){void 0===n&&(n=!1),void 0===o&&(o=!1),u.sharedInstance().setupInspetor(e,t,r,n,o)},e.prototype.isConfigured=function(){return!!u.sharedInstance().isConfigured},e.prototype.trackAccountCreation=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAction(t,n.create)},e.prototype.trackAccountDeletion=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAction(t,n.delete)},e.prototype.trackAccountUpdate=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAction(t,n.update)},e.prototype.trackEventCreation=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackEventAction(t,o.create)},e.prototype.trackEventDeletion=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackEventAction(t,o.delete)},e.prototype.trackEventUpdate=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackEventAction(t,o.update)},e.prototype.trackItemTransferCreation=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackItemTransferAction(t,i.create)},e.prototype.trackItemTransferUpdate=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackItemTransferAction(t,i.updateStatus)},e.prototype.trackLogin=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAuthAction(t,a.login)},e.prototype.trackLogout=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAuthAction(t,a.logout)},e.prototype.trackPasswordRecovery=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackPasswordRecoveryAction(t,c.recovery)},e.prototype.trackPasswordReset=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackPasswordRecoveryAction(t,c.reset)},e.prototype.trackSaleCreation=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackSaleAction(t,s.create)},e.prototype.trackSaleUpdate=function(e){if(!u.sharedInstance().isConfigured)throw new Error("InspetorError - 9001 - and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackSaleAction(t,s.update)},e.prototype.getInspetorTimestamp=function(){return(new Date).toISOString().split(".")[0]+"+00:00"},e.prototype.createBaseType=function(e){var t={};return t.id=btoa(e),t.timestamp=btoa(this.getInspetorTimestamp()),t},e}(),h=function(){function e(){}return e.sharedInstance=function(){return e.clientInstance||(e.clientInstance=new f),e.clientInstance},e}();u.sharedInstance().setupSnowplow();t.default=h}]).default});
},{}],2:[function(require,module,exports){
var inspetor = require("inspetor");

inspetor.sharedInstance().setup("123", "inspetor.js.demo-npm", false, true);

//Need to put the functions in the window so we can access them from the html 
window.trackLogin =  function() {
    inspetor.sharedInstance().trackLogin('123');
}

window.trackLogout =  function() {
    inspetor.sharedInstance().trackLogout('123');
}
window.trackAccountCreation =  function() {
    inspetor.sharedInstance().trackAccountCreation('123');
}

window.trackAccountUpdate =  function() {
    inspetor.sharedInstance().trackAccountUpdate('123');
}
window.trackAccountDeletion =  function() {
    inspetor.sharedInstance().trackAccountDeletion('123');
}

window.trackPasswordRecovery =  function() {
    inspetor.sharedInstance().trackPasswordRecovery('email@recovery.com');
}

window.trackPasswordReset =  function() {
    inspetor.sharedInstance().trackPasswordReset('email@reset.com');
}

window.trackItemTransferCreation =  function() {
    inspetor.sharedInstance().trackItemTransferCreation('123');

}
window.trackItemTransferUpdate =  function() {
    inspetor.sharedInstance().trackItemTransferUpdate('123');
}

window.trackEventCreation =  function() {
    inspetor.sharedInstance().trackEventCreation('123');
}

window.trackEventUpdate =  function() {
    inspetor.sharedInstance().trackEventUpdate('123');
}

window.trackEventDeletion =  function() {
    inspetor.sharedInstance().trackEventDeletion('123');
}

window.trackSaleCreation =  function() {
    inspetor.sharedInstance().trackSaleCreation('123');

}
window.trackSaleUpdate =  function() {
    inspetor.sharedInstance().trackSaleUpdate('123');
}

window.trackAll =  function() {
    inspetor.sharedInstance().trackLogin('123');
    inspetor.sharedInstance().trackLogout('123');
    inspetor.sharedInstance().trackAccountCreation('123');
    inspetor.sharedInstance().trackAccountUpdate('123');
    inspetor.sharedInstance().trackAccountDeletion('123');
    inspetor.sharedInstance().trackPasswordRecovery('email@recovery.com');
    inspetor.sharedInstance().trackPasswordReset('email@reset.com');
    inspetor.sharedInstance().trackItemTransferCreation('123');
    inspetor.sharedInstance().trackItemTransferUpdate('123');
    inspetor.sharedInstance().trackEventCreation('123');
    inspetor.sharedInstance().trackEventUpdate('123');
    inspetor.sharedInstance().trackEventDeletion('123');
    inspetor.sharedInstance().trackSaleCreation('123');
    inspetor.sharedInstance().trackSaleUpdate('123');
    console.log("All trackers were called");
}

},{"inspetor":1}]},{},[2]);
