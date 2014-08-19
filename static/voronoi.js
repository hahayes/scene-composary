
var Mail = {

    init: function() {
        this.checkForMail(); // will call updateData
    },
    
    checkForMail: function () {
        $.ajax({ 
            dataType: "json",
            url: "/cgi-bin/check_email.py",
            success: function(data) { console.log("checked email.") },
            type: "POST" });
    },

};

$(document).ready(function (){
    Mail.init();
    // window.setInterval("Mail.checkForMail();", 60 * 1 * 1000);
});
