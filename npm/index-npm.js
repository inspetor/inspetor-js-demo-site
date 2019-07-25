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
