async function getAllData() {
  let response = await fetch('day6.txt')
  let data = await response.text()
  return data
}

function splitIntoIndividuals(data) {
  let groupedOutput = data.split("\n\n")
  let groupedResponses = groupedOutput.map(group => group.replaceAll("\n",","))
  let individualResponses = groupedResponses.map(group => group.split(","))
  //console.log(individualResponses[0])
  return individualResponses
}

function checkForCommonAnswers(array) {
  let alphabet = ["a","b", "c", "d","e","f","g", "h", "i","j","k","l", "m", "n","o","p","q", "r", "s","t","u","v", "w", "x","y","z"]
  let results =[]
  for (i=0; i<alphabet.length;i++){
    if ((array.filter(item => item.includes(alphabet[i])).length) === array.length) {
    results.push(alphabet[i])
    } 
  } 
  //console.log(results.length)
  return results.length
}

// let blah = [ 'cady', 'ipldcyf', 'xybgcd', 'gcdy', 'dygbc' ]
// checkforCommonAnswers(blah)

function checkAllResults (array) {
  let commonAnswers = array.map(answer => checkForCommonAnswers(answer))
  console.log(commonAnswers)
  console.log(`Length: ${commonAnswers.length}`)
  return commonAnswers
}

// let arrayOfArray2 = [[ 'cady', 'ipldcyf', 'xybgcd', 'gcdy', 'dygbc' ], ["rwhvugmspoyzfbnlcxqtdj",
// "avqdpntxrclufbjswgzh","qbvwgzpfsrjtdxnculh","jhrpclwdxgqibfsntzuv"], ["a"], ["bd", "a"]]

// let arrayOfArray =[ ["abc"], ["a", "b", "c"], ["ab", "ac"], ["a", "a", "a","a"], ["b"] ]

// checkAllResults(arrayOfArray)

function breakIntoGroups(data) {
  let groupedOutput = data.split("\n\n")
  let groupResponses = groupedOutput.map(group => group.replaceAll("\n",""))
  return groupResponses
}

function removeDuplicateCharacters(string) {
  return string
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
}

function unDupeGroups(array) {
  let stringUniqueLengths = (array.map(string => removeDuplicateCharacters(string).length))
  return stringUniqueLengths
}

function countUp(array) {
  let total = array.reduce((acc, total) => {
    return total + acc
  },0)

  console.log(total)
}
//countUp(checkAllResults(arrayOfArray))

getAllData().then(splitIntoIndividuals).then(checkAllResults).then(countUp)



//getAllData().then(breakIntoGroups).then(unDupeGroups).then(countUp)