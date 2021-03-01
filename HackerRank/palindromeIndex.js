function palindromeIndex(s) {
  if (s == s.split("").reverse().join("")) {return -1}
  let counter = 0;
  let saved = 0;
  let n = s;

  for (let i=0; i<Math.ceil(n.length/2); i++){
    if (n[i]!==n[n.length-1-i]){
      if(n[i+1]==n[n.length-1-i]){
        counter++
        saved = i
        }
      else if (n[i]==n[n.length-2-i]){
        counter++
        saved = n.length-1-i
        }
      else{counter = 2}
      n=n.slice(0, saved)+n.slice(saved+1, n.length);
    }
  }
  if (counter > 1) {
    counter = 0;
    for (let i=0; i<Math.ceil(s.length/2); i++){
      if (s[i]!==s[s.length-1-i]){
        if (s[i]==s[s.length-2-i]){
          counter++
          saved = s.length-1-i
        }
        else if(s[i+1]==s[s.length-1-i]){
          counter++
          saved = i
        }
        else {return -1}
        s=s.slice(0, saved)+s.slice(saved+1, s.length);
      }
    }
  }
  return saved
}