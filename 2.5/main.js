let screenPrice = 5000
let percentage = 10
let allServicePrices;
let newTitle = "";
let titleProject;
let screensValue;
let responsive;



const asking = function () {
    titleProject = prompt('Название проекта?')
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
    responsive = prompt('нужен ли респонсивный сайт?')
}
asking()



let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')



let getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

function getFullPrice() {
    return screenPrice + allServicePrices
}

function getServicePercentPrices() {
    return fullPrice - (fullPrice / 100 * percentage)
}

function getTitle() {
    return titleProject.replace(titleProject[0], titleProject[0].toUpperCase())
}



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



allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
newTitle = getTitle()
getRollbackMessage()

console.log(titleProject)
console.log(screensValue)
console.log(responsive)
console.log(Math.ceil(servicePercentPrice))
console.log(service1)
console.log(servicePrice1)
console.log(service2)
console.log(servicePrice2)








// document.write(`<p>
//                     Название проекта: ${getTitle()},<br>
//                     Стоимость дополнительных услуг: ${allServicePrices},<br>
//                     Полная стоимость проекта: ${fullPrice},<br>
//                     Стоимость сайта за вычетом процента подрядчику: ${Math.round(servicePercentPrice)}
//                 </p>`)

