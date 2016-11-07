function translatePigLatin(str) {
  pre = str.match(/[^(a|e|i|o|u)]*/)[0];
  after = str.match(/[(a|e|i|o|u)].*/)[0];
  if(pre.length===0){
    return after+"way";
  } else{
    return after+pre+"ay";
  }
}

translatePigLatin("algorithm");
