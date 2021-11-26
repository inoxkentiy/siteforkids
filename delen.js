function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let rndInt = randomIntFromInterval(0, 15)
let rndInt2 = randomIntFromInterval(0, 18)

let rndnm = randomIntFromInterval(13, 30)
let rndnm2 = randomIntFromInterval(5, 25)
let hi = rndInt / rndInt2

firstnum = $('#firstnum')
secnum = $('#secondnum')
rovno = $('#rovno')
plus = $('#plus')
fans = $('#fans')
sans = $('#sans')
thans = $('#thans')
firstnum.append(`${rndInt}`)
plus.append(`:`)
secnum.append(`${rndInt2}`)
rovno.append(`=`)
fans.append(`<h2>${hi}</h2>`)
sans.append(`<h2>${rndnm}</h2>`)
thans.append(`<h2>${rndnm2}</h2>`)
console.log(hi)
function lola() {
    Swal.fire({
        title: 'Молодец!',
        text: 'Правильный ответ.Продолжай в том же духе.',
        imageUrl: 'http://masha-imedved.ru/uploads/posts/2013-09/1379419159_5-vesna.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image'
    }
    );
    setTimeout(function () {
        location.reload();
    }, 4000);
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
}