let gameBotFunction = function () {
    function randomGenerate(min, max) {
        return Math.round(Math.random() * (max - min)) + min
    }


    let mysteryNumber = randomGenerate(1, 100)
    let answerNum = ''
    let tries = 3


    const checkIsNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    }


    return function getResult() {
        answerNum = prompt('Угадайте число от 1 до 100')

        if (answerNum === null) {
            alert('Вы завершили игру')
            return
        }

        while (!checkIsNumber(answerNum) || answerNum.trim() === '') {
            alert('Вы ввели не число')
            answerNum = prompt('Угадайте число от 1 до 100')
        }

        answerNum = Number(answerNum)


        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше: ' + 'Осталось попыток: ' + tries)
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше: ' + 'Осталось попыток: ' + tries)
        } else if (mysteryNumber === answerNum) {
            const isUserWantNewGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще раз?')
            if (isUserWantNewGame) {
                tries = 3
                mysteryNumber = randomGenerate(1, 100)
            } else {
                tries = 0
            }
        }

        if (tries > 0) {
            tries--
            getResult();
        } else {
            const maybeAgain = confirm('Попыток больше нет, игра окончена. Хотели бы сыграть еще раз?')
            if (maybeAgain) {
                tries = 3
                getResult();
            } else {
                alert('Вы завершили игру')
                return
            }
        }
    }
}

let launchGameBot = gameBotFunction()
launchGameBot()