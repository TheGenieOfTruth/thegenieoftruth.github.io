console.log("TheGenieOfTruth Toolkit initialized!")
chrome.identity.getProfileUserInfo(function(a){alert(JSON.stringify(a))})
