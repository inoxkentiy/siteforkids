let resultBlock = $("#resultBlock")
let resultBlock_neprav = $("#resultBlock_neprav")
let counter1 = JSON.parse(localStorage.getItem("counter1"))
let counter2 = JSON.parse(localStorage.getItem("counter2"))
let solArray = JSON.parse(localStorage.getItem("solArray"))
// solArray.map(item => {
//   console.log(solArray)
// })
resultBlock.append(`<div>${counter1}</div>`)
resultBlock_neprav.append(`<div>${counter2}</div>`)

let deleteBtn = document.querySelector("#deleteBtn")
deleteBtn.addEventListener('click', () => {
  localStorage.removeItem("solArray")
  localStorage.removeItem("counter1")
  localStorage.removeItem("counter2")
})
// let resultBlock = $("#resultBlock_neprav")