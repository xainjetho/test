let screenPrice;
let percentage = 10
let allServicePrices;
let newTitle = "";
let titleProject;
let screensValue;
let responsive;
let service1;
let service2;



const checkIsNumber = function (x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}



const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какая нужна дополнительная услуга?')
        } else if (i === 1) {
            service2 = prompt('Какая нужна дополнительная услуга?')
        }

        let priceExtraService = '';

        while (!checkIsNumber(priceExtraService) || priceExtraService.trim() === '' || priceExtraService === null) {
            priceExtraService = prompt('Сколько это будет стоить?')
        }
        sum = sum + Number(priceExtraService)
    }
    return sum
}



const asking = function () {
    titleProject = prompt('Название проекта?')
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
    screenPrice = prompt('Сколько это будет стоить?')
    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколько это будет стоить?')
    }
    screenPrice = Number(screenPrice)
    responsive = prompt('Нужен ли адаптивный сайт?')
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

const getPersentageMessage = function (price) {
    if (price > 50000) {
        return 'Сделаем скидку 10%'
    } else if (price > 20000 && price < 40000) {
        return 'Сделаем скидку 5%'
    } else if (price < 20000 && price > 0) {
        return 'Без скидки'
    } else if (price < 0) {
        return 'Что-то пошло не так'
    } else if (price === 0 || price === 20000 || price === 50000) {
        return 'Равенство'
    }
}



asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
newTitle = getTitle()

console.log(newTitle)
console.log(allServicePrices)
console.log(fullPrice)
console.log(Math.ceil(servicePercentPrice))
console.log(getPersentageMessage(fullPrice))