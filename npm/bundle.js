(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.inspetor=t():e.inspetor=t()}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=function(){function e(){this.isConfigured=!1}return e.sharedInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.setupInspetor=function(e,t,r,n,a){void 0===n&&(n=!1),void 0===a&&(a=!1);var s=n?o.stagingPostPath:o.prodPostPath,c=a?"test.com":o.defaultCollectorURL,i=this.checkBeaconAPI?"beacon":"post";this.setupTracker(e,t,s,c,i,r),this.isConfigured=!0},e.prototype.setupSnowplow=function(){this.createSnowplow(o.snowplowTrackerUrl,o.snowplowGlobalName)},e.prototype.createSnowplow=function(e,t){if(!window[t]){window.GlobalSnowplowNamespace=window.GlobalSnowplowNamespace||[],window.GlobalSnowplowNamespace.push(t),window[t]=function(){(window[t].q=window[t].q||[]).push(arguments)},window[t].q=window[t].q||[];var r=document.createElement("script"),o=document.getElementsByTagName("script")[0];r.async=!0,r.src=e,o.parentNode.insertBefore(r,o)}},e.prototype.setupTracker=function(e,t,r,n,a,s){window[o.snowplowGlobalName]("newTracker",t,n,{appId:e,platform:"web",encodeBase64:o.defaultBase64Option,respectDoNotTrack:!1,stateStorageStrategy:o.defaultStorage,bufferSize:1,forceSecureTracker:o.defaultProtocolType,eventMethod:a,postPath:r,contexts:{webPage:!0,performanceTiming:!1,gaCookies:!0,geolocation:s}})},e.prototype.checkBeaconAPI=function(){return!!navigator.sendBeacon},e}();t.SnowplowManager=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultBase64Option=!0,t.defaultCollectorURL="ppt.useinspetor.com/",t.stagingPostPath="post-staging",t.prodPostPath="post",t.defaultProtocolType=!0,t.defaultStorage="localStorage",t.snowplowTrackerUrl="https://inspetor-static-js.s3-sa-east-1.amazonaws.com/prod/inspetor-js-asset/2.10.2/inspetor-asset.min.js",t.snowplowGlobalName="spInspetor",t.inspetorAuthSchema="iglu:com.inspetor/inspetor_auth_frontend/jsonschema/1-0-0",t.inspetorPassRecoverySchema="iglu:com.inspetor/inspetor_pass_recovery_frontend/jsonschema/1-0-0",t.inspetorSaleSchema="iglu:com.inspetor/inspetor_sale_frontend/jsonschema/1-0-0",t.inspetorItemTransferSchema="iglu:com.inspetor/inspetor_transfer_frontend/jsonschema/1-0-0",t.inspetorAccountSchema="iglu:com.inspetor/inspetor_account_frontend/jsonschema/1-0-0",t.inspetorEventSchema="iglu:com.inspetor/inspetor_event_frontend/jsonschema/1-0-0",t.inspetorContextSchema="iglu:com.inspetor/inspetor_context/jsonschema/1-0-0"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r(3);o.SnowplowManager.sharedInstance().setupSnowplow(),t.default=n.Inspetor},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(4),n=function(){function e(){}return e.sharedInstance=function(){return e.clientInstance||(e.clientInstance=new o.InspetorClient),e.clientInstance},e}();t.Inspetor=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),n=r(0),a=r(6),s=function(){function e(){this.resource=new a.InspetorResource}return e.prototype.setup=function(e,t,r,o,a){if(void 0===o&&(o=!1),void 0===a&&(a=!1),!this.isValid(e,t))throw new Error("InspetorError - 9002 - appId or/and trackerName are not valid");n.SnowplowManager.sharedInstance().setupInspetor(e,t,r,o,a)},e.prototype.isConfigured=function(){return!!n.SnowplowManager.sharedInstance().isConfigured},e.prototype.trackAccountCreation=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAction(t,o.accountActions.create)},e.prototype.trackAccountDeletion=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAction(t,o.accountActions.delete)},e.prototype.trackAccountUpdate=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAction(t,o.accountActions.update)},e.prototype.trackEventCreation=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackEventAction(t,o.eventAction.create)},e.prototype.trackEventDeletion=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackEventAction(t,o.eventAction.delete)},e.prototype.trackEventUpdate=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackEventAction(t,o.eventAction.update)},e.prototype.trackItemTransferCreation=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackItemTransferAction(t,o.transferActions.create)},e.prototype.trackItemTransferUpdate=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackItemTransferAction(t,o.transferActions.updateStatus)},e.prototype.trackLogin=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAuthAction(t,o.authActions.login)},e.prototype.trackLogout=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackAccountAuthAction(t,o.authActions.logout)},e.prototype.trackPasswordRecovery=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackPasswordRecoveryAction(t,o.passRecoveryActions.recovery)},e.prototype.trackPasswordReset=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackPasswordRecoveryAction(t,o.passRecoveryActions.reset)},e.prototype.trackSaleCreation=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackSaleAction(t,o.saleActions.create)},e.prototype.trackSaleUpdate=function(e){if(!this.isConfigured())throw new Error("InspetorError - 9001 - appId and trackerName are required parameters");var t=this.createBaseType(e);this.resource.trackSaleAction(t,o.saleActions.update)},e.prototype.getInspetorTimestamp=function(){return(new Date).toISOString().split(".")[0]+"+00:00"},e.prototype.createBaseType=function(e){var t={};return t.id=btoa(e),t.timestamp=btoa(this.getInspetorTimestamp()),t},e.prototype.isValid=function(e,t){return!(!e||!t)&&!!this.isValidTrackerName(t)},e.prototype.isValidTrackerName=function(e){var t=e.split(".");if(t.length<2)return!1;var r=!0;return t.forEach(function(e){e.length<=1&&(r=!1)}),!!r},e}();t.InspetorClient=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.create="account_create",e.update="account_update",e.delete="account_delete"}(t.accountActions||(t.accountActions={})),function(e){e.create="event_create",e.update="event_update",e.delete="event_delete"}(t.eventAction||(t.eventAction={})),function(e){e.login="account_login",e.logout="account_logout"}(t.authActions||(t.authActions={})),function(e){e.reset="password_reset",e.recovery="password_recovery"}(t.passRecoveryActions||(t.passRecoveryActions={})),function(e){e.create="sale_create",e.update="sale_update"}(t.saleActions||(t.saleActions={})),function(e){e.create="transfer_create",e.updateStatus="transfer_update_status"}(t.transferActions||(t.transferActions={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=function(){function e(){this.tracker=window[o.snowplowGlobalName]}return e.prototype.trackAccountAction=function(e,t){var r={};r.account_id=e.id,r.account_timestamp=e.timestamp;var n=this.createData(o.inspetorAccountSchema,r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackAccountAuthAction=function(e,t){var r={};r.auth_account_id=e.id,r.auth_timestamp=e.timestamp;var n=this.createData(o.inspetorAuthSchema,r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackEventAction=function(e,t){var r={};r.event_id=e.id,r.event_timestamp=e.timestamp;var n=this.createData(o.inspetorEventSchema,r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackPasswordRecoveryAction=function(e,t){var r={};r.pass_recovery_email=e.id,r.pass_recovery_timestamp=e.timestamp;var n=this.createData(o.inspetorPassRecoverySchema,r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackSaleAction=function(e,t){var r={};r.sale_id=e.id,r.sale_timestamp=e.timestamp;var n=this.createData(o.inspetorSaleSchema,r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.trackItemTransferAction=function(e,t){var r={};r.transfer_id=e.id,r.transfer_timestamp=e.timestamp;var n=this.createData(o.inspetorItemTransferSchema,r);this.tracker("trackSelfDescribingEvent",n,this.createContext(t))},e.prototype.createData=function(e,t){return{schema:e,data:t}},e.prototype.createContext=function(e){return[{schema:o.inspetorContextSchema,data:{action:e}}]},e}();t.InspetorResource=n}]).default});
},{}],2:[function(require,module,exports){
var inspetor = require("../node_modules/inspetor-js/inspetor.min.js");

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

},{"../node_modules/inspetor-js/inspetor.min.js":1}]},{},[2]);
