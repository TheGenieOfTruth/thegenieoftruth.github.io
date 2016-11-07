function save(name,value){
    chrome.storage.local.set({name:value});
}
function load(code){
    chrome.storage.local.get( function(items) {
        code(items)
    })}
/*
Load with:
load( function(items) {
    //Do something with items
})
Because asynch function crap hates us all
*/
save({keyName: "value"})
load( function(items) {
    document.getElementById("yas").innerHTML = JSON.stringify(items)
})
console.log(window.location.href)
