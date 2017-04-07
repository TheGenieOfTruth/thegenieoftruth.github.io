document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#thing').addEventListener('click', function(){
  	chrome.tabs.create({url:"https://www.google.com"})
  });
});