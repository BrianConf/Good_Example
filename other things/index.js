
let Cursor_Pos = 1
let word = 'BRIAN'
let submit = false
let submitIndex = 0
let deleted = false
const buttons = Array.from(document.getElementsByClassName('button'))

let getElementFunction = function(value){
  let element = "answerButton" + String(value)
  return document.getElementById(element)
}

let assessAnswer = function(){

  let gottenLetters = []
  let n = 0
  for(let i = (submitIndex - 4); i <= submitIndex; i++){
    let assessPosition = getElementFunction(i)
    let assessLetter = assessPosition.innerText
    gottenLetters[n] = assessLetter;
    n++
  }

  let gottenWord = gottenLetters.join('')

  console.log('gotten', gottenWord)
  n = submitIndex - 4
  for( let i = 0; i < 5; i++){

    let assessPosition = getElementFunction(n)
    n++
    for(let j = 0; j < word.length; j ++){
      if(word[j] == gottenWord[i] && j === i ){
        assessPosition.style.backgroundColor = 'rgb(0, 255, 0)'
        break
      }
      else if(word[j] == gottenWord[i]){
        assessPosition.style.backgroundColor = 'rgb(250,218,94)'
        break
      }
      else{
        assessPosition.style.backgroundColor = 'rgb(105,105,105)'
      }

    }
  }
}

buttons.map(button => {

  button.addEventListener('click', (e) => {

    if(Cursor_Pos >= 31){
      alert('Game__Over')
    }
    else{

      let addPosition = getElementFunction(Cursor_Pos);
    
    let curpos = Cursor_Pos;
    curpos--

    switch (e.target.innerText) {
      case 'we':
        if((curpos)%5 != 0 && curpos !== 0) {
          alert('please enter five letters and press enter')
        }
        else{
          // check condition and get results

          submit = true
          submitIndex = curpos
          assessAnswer()
        }
        
      break
      case '←':
      
      if(submitIndex >= curpos){
        alert('error deleting submited word')
      }
      else{
        Cursor_Pos = Cursor_Pos - 1
        addPosition = getElementFunction(Cursor_Pos);
        addPosition.innerText = '\xa0'
        deleted = true
      }
      break
      default:
      
        if((curpos)%5 === 0 && curpos !==0 && submit === false && deleted === false) {
          alert('please enter five letters and press enter 2')
        }
        else{
          addPosition.innerText = e.target.innerText
          Cursor_Pos++
        }
        submit = false
        deleted = false
      break
    }
    }
  })
})
