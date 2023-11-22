import example from './../img/grass.png';
import styles from './../styles/main.scss';

// создание свойства класса без конструктора
class Game {
    name = 'Misha Developer'
}
const myGame = new Game()

// создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myGame.game}.`

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересно12!'

// добавляем заголовок в DOM
const root = document.querySelector('#root')
root.append(heading)