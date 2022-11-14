const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased =  tutorials.map(function(tutorial){
//   return tutorial = tutorial.charAt(0).toUpperCase() + tutorial.slice(1).toLowerCase()

// })

const titleCased = () => {
  return tutorials.map(function(tutorial){
    const splitTutorial = tutorial.split(" ")
    const finalArry = []
    for (let wordTutorial of splitTutorial){
      wordTutorial = wordTutorial.charAt(0).toUpperCase() + wordTutorial.slice(1)
      finalArry.push(wordTutorial)
    }
    console.log(finalArry.join(" "));
    return finalArry.join(" ")


})
}

titleCased()