
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let rndInt = randomIntFromInterval(0, 15)
let rndInt2 = randomIntFromInterval(0, 18)

let rndnm = randomIntFromInterval(13, 30)
let rndnm2 = randomIntFromInterval(5, 25)
let hi = rndInt - rndInt2

solArray = JSON.parse(localStorage.getItem("solArray"))
if (solArray === null) {
    solArray = []
}
solArray2 = JSON.parse(localStorage.getItem("solArray2"))
if (solArray2 === null) {
    solArray2 = []
}


counter1 = JSON.parse(localStorage.getItem("counter1"))
counter2 = JSON.parse(localStorage.getItem("counter2"))

firstnum = $('#firstnum')
secnum = $('#secondnum')
rovno = $('#rovno')
plus = $('#plus')
fans = $('#fans')
sans = $('#sans')
thans = $('#thans')
firstnum.append(`${rndInt}`)
plus.append(`-`)
secnum.append(`${rndInt2}`)
rovno.append(`=`)
fans.append(`<h2>${hi}</h2>`)
sans.append(`<h2>${rndnm}</h2>`)
thans.append(`<h2>${rndnm2}</h2>`)

function lola() {
    Swal.fire({
        title: 'Молодец!',
        text: 'Правильный ответ.Продолжай в том же духе.',
        imageUrl: 'http://masha-imedved.ru/uploads/posts/2013-09/1379419159_5-vesna.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',


    }
    );
    setTimeout(function () {
        location.reload();
    }, 1500);

    solArray.push(`${rndInt}-${rndInt2}=${hi}`)
    counter1++;
    counter1 = localStorage.setItem("counter1", JSON.stringify(counter1))
    solArray = localStorage.setItem("solArray", JSON.stringify(solArray))
}

function nelola() {
    Swal.fire({
        title: 'Ошибка!',
        text: 'Не расстраивайся и подумай еще раз,у тебя получится.',
        imageUrl: 'https://sun9-6.userapi.com/wDBM70kjcBbMSzp6qz6LvYVm4hcjpHZ-jADClQ/ap-Gu31vi_k.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image'
    });
    setTimeout(function () {
        location.reload();
    }, 1500);
    solArray2.push(`${rndInt}-${rndInt2}=${rndnm}`)
    counter2++;
    counter2 = localStorage.setItem("counter2", JSON.stringify(counter2))
    console.log(solArray2)
    solArray2 = localStorage.setItem("solArray2", JSON.stringify(solArray2))

}