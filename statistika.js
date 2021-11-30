let resultBlock = $("#resultBlock")
let resultBlock_neprav = $("#resultBlock_neprav")
let counter1 = JSON.parse(localStorage.getItem("counter1"))
let counter2 = JSON.parse(localStorage.getItem("counter2"))
let solArray = JSON.parse(localStorage.getItem("solArray"))
let solArray2 = JSON.parse(localStorage.getItem("solArray2"))

resultBlock.append(`<div>Количество правильных ответов: ${counter1}</div>`)
solArray.map(item => {
  resultBlock.append(`<div>${item}<br></div>`)
})

resultBlock_neprav.append(`<div>Количество неправильных ответов: ${counter2}</div>`)
solArray2.map(item => {
  resultBlock_neprav.append(`<div>${item}<br></div`)
})
let deleteBtn = document.querySelector("#deleteBtn")
deleteBtn.addEventListener('click', () => {
  localStorage.clear();
  location.reload()
})
