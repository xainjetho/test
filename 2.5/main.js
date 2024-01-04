let screenPrice = 5000;
let percentage = 10;
let titleProject = prompt('Название проекта?')
let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
let responsive = prompt('нужен ли респонсивный сайт?')

let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')


let getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}
let allServicePrices = getAllServicePrices()

function getFullPrice() {
    return screenPrice + allServicePrices
}
let fullPrice = getFullPrice()

function getTitle() {
    return titleProject = titleProject.replace(titleProject[0], titleProject[0].toUpperCase())
}

function getServicePercentPrices() {
    return fullPrice - (fullPrice / 100 * percentage)
}
let servicePercentPrice = getServicePercentPrices()


function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log('Сделаем скидку 10%');
    } else if (fullPrice > 20000 && fullPrice < 40000) {
        console.log('Сделаем скидку 5%');
    } else if (fullPrice < 20000 && fullPrice > 0) {
        console.log('Без скидки')
    } else if (fullPrice < 0) {
        console.log('Что-то пошло не так')
    } else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
        console.log('Равенство');
    }
}
getRollbackMessage()


document.write(`<p>
                    Название проекта: ${getTitle()},<br> 
                    Стоимость дополнительных услуг: ${allServicePrices},<br> 
                    Полная стоимость проекта: ${fullPrice},<br>
                    Стоимость сайта за вычетом процента подрядчику: ${Math.round(servicePercentPrice)}
                </p>`)

