var version = "1.1";
// Load the API
// Define control functions
function makeKongAPI() {
    function logError() {
        console.error("Failure to load Kongregate API");
        console.error(
            "Preview the game on Kongregate to avoid this error.");
    };
    this.get = function() {
            try {
                if (typeof parent.kongregate === 'undefined') {
                    throw "APIUndefinedException";
                }
                return (parent.kongregate);
            } catch (e) {
                if (e = "APIUndefinedException") {
                    logError();
                    console.error("Failed to load Kongregate API");
                }
                return -1;
            }
        },
        this.init = function() {
            try {
                parent.kongregate.services.connect();
                console.log("Kongregate API successfully loaded");
            } catch (e) {
                console.error("Failure to load Kongregate API:");
                console.error("You are not playing on Kongregate");
                return -1;
            }
        }
    this.submit = function(statname, statvalue) {
        try {
            kongregate = this.get();
            kongregate.stats.submit(statname, statvalue);
            return 1;
        } catch (e) {
            logError();
            return -1;
        }
    }.bind(this)
    this.username = function() {
        // Returns a string of the username, or empty string if there's an exception
        try {
            return kongGetAPI().services.getUsername();
        } catch (e) {
            logError();
            return false
        }
    };
    this.id = function() {
        try {
            var id = kongGetAPI().services.getUserID();
            console.log(id);
            if (id == 0) {
                return false
            } else {
                return id;
            }
        } catch (e) {
            logError();
            return false;
        }
    }
    this.guest = function() {
        try {
            if (kongGetAPI().services.isGuest()) {
                //Guest
                return 1;
            } else {
                //User
                return 0;
            }
        } catch (e) {
            logError();
            //NOT ON KONGREGATE
            return -1;
        }
    };
    this.register = function() {
        // Shows a kongregate registration box
        try {
            if (kongIsGuest()) {
                kongGetAPI().services.showRegistrationBox();
                return 1;
            } else {
                return 0;
            }
        } catch (e) {
            logError();
            return -1;
        }
    }
    this.message = function(message, username) {
        // Displays chat message
        try {
            kongGetAPI().chat.displayMessage(message, username);
        } catch (e) {
            logError();
            return -1;
        }
    }
    this.clearMessages = function() {
        // Clears messages in Kongregate Chat Window, returns true
        try {
            kongGetAPI().chat.clearMessages();
            return 1;
        } catch (e) {
            logError();
            return -1;
        }
    }
    this.newTab = function(name, description, size) {
        /*
	arg0 - Name of the tab (word in tab itself)
	arg1 - Description of the tab
	arg2 - Relative size of the canvas, 0 being the smallest, 1 being the largest (default 0.5)
	*/
        try {
            kongGetAPI().chat.showTab(name, descrption, {
                'size': size
            });
            return 1;
        } catch (e) {
            logError();
            return -1;
        }
    }
    this.closeTab = function() {
        // Closes the tab opened by kongChatShowTab()
        try {
            kongGetAPI().chat.closeTab();
            return 1;
        } catch (e) {
            logError();
            return -1;
        }
    }
}
var kong = new makeKongAPI()
/*
METHOD        DESCRIPTION                                                PARAMETERS
get           Gets the API object                                        None
init          Initializes the API                                        None
submit        Submits a statistic.                                       statname, statvalue
username      Returns the user's username, if not a user, returns false  None
id            Returns user id. Returns false if there is none.           None
guest         True if guest, false if user, -1 if not on site            None
register      Shows the register dialog                                  None
message       Messages in the chat window                                message, username
clearMessages Clears messages in the chat window                         None
newTab        For the chat API, creates a new tab                        name, description, size
closeTab      For the chat API, closes chat tabs created                 None
*/
