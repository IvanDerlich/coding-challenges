// https://leetcode.com/contest/biweekly-contest-79/problems/sender-with-largest-word-count/

var largestWordCount = function (messages, senders) {
  // console.log(messages, "---", senders);
  const wordLengthBySender = {}
  for(let i = 0; i < messages.length; i++){   
    // console.log(messages[i])
    const spaces = (messages[i].match(/ /g)||[]).length
    //console.log("spaces", spaces)
    // console.log("----")
    // wordLength.push(spaces + 1)
    if(wordLengthBySender[senders[i]])
        wordLengthBySender[senders[i]] += spaces + 1
    else wordLengthBySender[senders[i]] = spaces + 1    
    
  }
  console.log(wordLengthBySender)
  const longest = Object.keys(wordLengthBySender)
    .reduce((a, b) => {
        // console.log(a,b)
        if (wordLengthBySender[a] > wordLengthBySender[b]){
            return a
        } else if (wordLengthBySender[a] < wordLengthBySender[b]) {
            return b
        }
        return a > b ? a : b
    });
  // console.log(longest)
  return longest

};

messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"]
senders = ["Alice","userTwo","userThree","Alice"]

// let value = largestWordCount(messages, senders)
// console.log(value)

messages = ["How is leetcode for everyone","Leetcode is useful for practice"]
senders = ["Bob","Charlie"]
// value = largestWordCount(messages, senders)
// console.log(value)

messages = [
    "tP x M VC h lmD","D X XF w V",
    "sh m Pgl",
    "pN pa",
    "C SL m G Pn v",
    "K z UL B W ee",
    "Yf yo n V U Za f np",
    "j J sk f qr e v t",
    "L Q cJ c J Z jp E",
    "Be a aO",
    "nI c Gb k Y C QS N",
    "Yi Bts",
    "gp No g s VR", 
    "py A S sNf",
    "ZS H Bi De dj dsh",
    "ep MA KI Q Ou"
]
senders = ["OXlq","IFGaW","XQPeWJRszU","Gb","HArIr","Gb","FnZd","FnZd","HArIr","OXlq","IFGaW","XQPeWJRszU","EMoUs","Gb","EMoUs","EMoUs"]
value = largestWordCount(messages, senders)
console.log(value)