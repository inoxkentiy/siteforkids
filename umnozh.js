function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let rndInt = randomIntFromInterval(0, 15)
let rndInt2 = randomIntFromInterval(0, 18)

let rndnm = randomIntFromInterval(13, 30)
let rndnm2 = randomIntFromInterval(5, 25)
let hi = rndInt * rndInt2

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
sans =  $('#sans')
thans = $('#thans')
console.log(rndInt)
    firstnum.append(`${rndInt}`)
    plus.append(`*`)
    secnum.append(`${rndInt2}`)
    rovno.append(`=`)
    let first_answer,second_answer,third_answer
    let n=Math.floor(Math.random()*3)
    switch (n+1) {
        case 1:
        console.log( '1-случай' ); 
            fans.append(`<div id=${first_answer} onclick='checkAnswer(${hi}, ${hi})'><h2>${hi.toFixed(2)}</h2></div>`)
            sans.append(`<div id=${second_answer} onclick='checkAnswer(${hi}, ${rndnm})'><h2>${rndnm.toFixed(2)}</h2></div>`)
            thans.append(`<div id=${third_answer} onclick='checkAnswer(${hi}, ${rndnm2})'><h2>${rndnm2.toFixed(2)}</h2></div>`)
            break;
        
        case 2:
            first_answer=$('#sans')
            second_answer=$('#fans')
            third_answer=$('#thans')
            console.log( '2-случай' );
            fans.append(`<div id=${second_answer} onclick='checkAnswer(${hi}, ${rndnm})'><h2>${rndInt.toFixed(2)}</h2></div>`)
            sans.append(`<div id=${first_answer} onclick='checkAnswer(${hi}, ${hi})'><h2>${hi.toFixed(2)}</h2></div>`)
            thans.append(`<div id=${third_answer} onclick='checkAnswer(${hi}, ${rndnm2})'><h2>${rndnm2.toFixed(2)}</h2></div>`)
        break;
        case 3:
            first_answer=$('#fans')
            second_answer=$('#thans')
            third_answer=$('#sans')
            console.log( '3-случай' );
            fans.append(`<div id=${third_answer} onclick='checkAnswer(${hi}, ${rndnm2})'><h2>${rndInt.toFixed(2)}</h2></div>`)
            sans.append(`<div id=${second_answer} onclick='checkAnswer(${hi}, ${rndnm})'><h2>${rndInt2.toFixed(2)}</h2></div>`)
            thans.append(`<div id=${first_answer} onclick='checkAnswer(${hi}, ${hi})'><h2>${hi.toFixed(2)}</h2></div>`)
        break;
    } 

    function checkAnswer(answer, variant){
        if(variant == answer){
             Swal.fire({
                title: 'Молодец!',
                text: 'Правильный ответ.Продолжай в том же духе.',
                imageUrl: 'http://masha-imedved.ru/uploads/posts/2013-09/1379419159_5-vesna.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
            setTimeout(function () {
                location.reload();
            }, 1500);

            solArray.push(`${rndInt}*${rndInt2}=${hi}`)
            counter1++;
            counter1 = localStorage.setItem("counter1", JSON.stringify(counter1))
            solArray = localStorage.setItem("solArray", JSON.stringify(solArray))
        }
        else{
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
            solArray2.push(`${rndInt}*${rndInt2}=${rndnm}`)
            counter2++;
            counter2 = localStorage.setItem("counter2", JSON.stringify(counter2))
            console.log(solArray2)
            solArray2 = localStorage.setItem("solArray2", JSON.stringify(solArray2))
        }
    }
