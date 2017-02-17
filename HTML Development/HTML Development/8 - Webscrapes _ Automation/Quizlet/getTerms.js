function extract(){
var arr = document.getElementsByClassName("term")
for(i=0;i<arr.length;i++){
  console.log(arr[i].children[1].children[0].children[0].innerHTML + " | " + arr[i].children[1].children[1].children[0].innerHTML)
}
}