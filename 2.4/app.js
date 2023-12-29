// let titleProject = 'Оценка стоимости';
// let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
let screenPrice = 5000;
let percentage = 10;
// let fullPrice = 100000;
// let responsive = true;





let titleProject = prompt('Название проекта?')
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue);

let responsive = prompt('нужен ли респонсивный сайт?')
console.log(responsive);

let service1 = prompt('Какой сервис нужен?')
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?')
console.log(servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice);

let servicePercentPrice = +(fullPrice * (percentage / 100))
console.log(servicePercentPrice, 'Процент подрядчику');

let servicePercentResult = fullPrice - servicePercentPrice
console.log(servicePercentResult, 'Итоговая сумма')


if (fullPrice > 50000) {
    console.log('Сделаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log('Сделаем скидку 5%');
} else if (fullPrice < 20000 && fullPrice < 0) {
    console.log('Без скидки')
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так')
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Равенство');
}
