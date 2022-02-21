# План подготовки к собеседования

## Просмотр видео-собеседование

вебдев [веб-дев](https://www.youtube.com/watch?v=ycYp7CYOnO0&list=PLNkWIWHIRwMFSLI9wBuHxuGI5lAZ7QNUg&index=3).  
hr-позвонит [hr-позвонит](https://www.youtube.com/results?search_query=hr+%D0%BF%D0%BE%D0%B7%D0%B2%D0%BE%D0%BD%D0%B8%D1%82)  
Подготовка к собеседованию по JavaScript в
2021.[Подготовка к собеседованию по JavaScript в 2021.](https://www.youtube.com/watch?v=H5wnkRJBfA8).

## Сайты тренажеры

[js-тренажор](https://github.com/lydiahallie/javascript-questions).

## Решение задач/практика

codewars 
freecodecamp // ES6,  
Regular Expressions/  
Debugging/  
Basic Data Structures/  
Basic Algorithm Scripting/  
Object Oriented Programming/
Functional Programming/  
Intermediate Algorithm Scripting/  
JavaScript Algorithms and Data Structures Projects

## Проработка видеособеседований из инкубатора

собесы [собесы](https://www.youtube.com/playlist?list=PLbLBXDhswD1d7VtWt6_mqMQ0i5JtHooFQ)

## Книги

YDKJS - get started v2 на русском  
YDKJS - scopes and closures   
YDKJS - про приведение типов

## Статьи

[Ликбез из тачилы ](https://www.youtube.com/playlist?list=PLcvhF2Wqh7DMGR08yA6oNKJ7WCM0tGd4z)  
[Собес Дена Абрамова](https://www.youtube.com/watch?v=XEt09iK8IXs&t=647s)  
[Как работает JavaScript: массивы и хэш-таблицы](https://nuancesprog.ru/p/14613/)  
[Front-end. Вопросы на собеседовании](https://github.com/YauhenKavalchuk/interview-questions)
[300+ ВОПРОСОВ ПО JAVASCRIPT НА СОБЕСЕДОВАНИИ](https://itvdn.com/ru/blog/article/300-js)    
[70 ВОПРОСОВ ПО JAVASCRIPT НА СОБЕСЕДОВАНИИ](https://habr.com/ru/post/486820/)    
[35 ВОПРОСОВ ПО JAVASCRIPT НА СОБЕСЕДОВАНИИ](https://habr.com/ru/post/578370/)    
[Яндекс-фронтенд](https://www.youtube.com/c/%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4/videos)    
[33 Concepts Every JavaScript Developer Should Know](https://github.com/leonardomso/33-js-concepts).  
[proto and prototype](https://www.youtube.com/watch?v=b55hiUlhAzI&list=RDCMUCTW0FUhT0m-Bqg2trTbSs0g&start_radio=1&rv=b55hiUlhAzI&t=3)
.  
SOLID  
OOP  
eventloop with raf   
http/dns patterns  
proto and prototype

## Алгосы

??

# Собеседование

1) Приветсвие кондидата
2) Обговорить план собеседования:
2a) Я рассказываю о компании и кого мы ищем
2b) Кандидат рассказывает про  себя и свой опыт
2c) Поговорим про опыт кандидата/технологии

Какой опыт на React/JS/TS.
Какими технологиями пользовался?
Настраивал ли вебпак?
С какими стейт-менеджерами работал






2d) Задача на JS - вопросы
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
2332
110011
54322345
For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).
Return "Not valid" if the input is not an integer or less than 0.

function palindrome(num) {
  if (typeof num !== 'number' || num < 0) return 'Not valid'
  return String(num).split('').reverse().join('') === String(num)
}

Какие существуют типы данных в JS?
Как проверить, является ли объект массивом?
Сравните ключевые слова var, let, const.
Что такое деструктуризация?
Для чего предназначены методы setTimeout и setInterval, есть ли они в JS? // j,mzcuybnm
Сравните подходы работы с асинхронным кодом: сallbacks vs promises vs async / await.
Назовите методы массивов, какие помните, и скажите, для чего они нужны.
Опишите назначение и принципы работы с коллекциями Map и Set.
Что означает глубокая (deep) и поверхностная (shallow) копия объекта? Как сделать каждую из них? structuredClone/stringify/object.assign/spread
Какая разница между декларацией функции (function declaration) и функциональным выражением (function expression)?Что такое анонимная функция?
Расскажите о стрелочных функциях (arrow function). В чем заключаются отличия стрелочных функций от обычных?
Что такое и для чего используют IIFE (Immediately Invoked Function Expression)
Что такое hoisting, как он работает для переменных и функций?
Что такое замыкание (closure) и какие сценарии его использования?
Как вы понимаете замыкания?
Что такое рекурсия?
Что означает ключевое слово this?
Что такое потеря контекста, когда происходит и как ее предотвратить?
Методы функций bind / call / apply - зачем и в чем разница?
Что такое Garbage Collector?
Что такое Promise? 
Расскажите о последовательном и параллельном выполнении асинхронных функций
В чем преимущества генераторов?
Что такое чистая функция?
Что такое Евентлуп?
Что такое RAF?
Что такое прототип и для чего он нужен?

2g) Задачка на React 
const func = async () => {
  const rep = await fetch("https://api.publicapis.org/entries");
  const result = await rep.json();
  return result;
};
  <!-- fetchData = async () => { -->
    let arr = [];
    for (let i = 0; i < 10; i++) {
      const timeStaert = new Date().getTime()
      await func();
      const dateEnd = new Date().getTime()
      arr.push(dateEnd-timeStaert);
    }
  <!-- }; -->

html {
  font-family: sans-serif;
  margin: 0.5rem;
}
h1 {
  text-align: center;
}
.reuired_list {
  background-color: khaki;
}
.form_container {
  text-align: center;
}
span {
  display: inline-block;
}
.input {
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: space-between;
}
.result_block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

import "./styles.css";
import FormContainer from "./Component";

export default function App() {
  return (
    <div className="App">
      <h1>Форма запросов</h1>
      <ul className="reuired_list">
        <li>Форма должна иметь возможность делать запросы на любой адрес</li>
        <li>Форма должна вывести среднее время ответа</li>
        <li>Форма должна вывести самый быстрый и самый медленный запрос</li>
        <li>Форма должна вывести количество удачных запросов</li>
        <li>
          Форма должна вывести количество не удачных запросов,если таковые будут
        </li>
        <li>Простая валидация на адрес запроса</li>
        <li>Простая валидация на количество запросов</li>
        <li>url для примера:"https://api.publicapis.org/entries"</li>
        <li>Необходимо выполнить рефакторинг компонента</li>
      </ul>
      <div className="form_container">
        <FormContainer />
      </div>
    </div>
  );
}


import React from "react";

class FormContainer extends React.Component {
  state = {
    amount: 0
  };
  inputOne = () => {};
  inputTwo = () => {};
  button = () => {};

  render() {
    return (
      <>
        <div className="input">
          <label for="amount">Введите количество запросов </label>
          <input type="number" name="amount" />
        </div>
        <div className="input">
          <label for="adress">Введите адрес </label>
          <input type="text" name="adress" />
        </div>
        <div className="result_block">
          <span>Среднее время ответа: мс</span>
          <span>Самый быстрый запрос : мс</span>
          <span>Самый медленный запрос : мс</span>
          <span>Количество удачных запросов :</span>
          <span>Количество не удачных запросов :</span>
        </div>
        <button>Сделать запрос</button>
      </>
    );
  }
}

export default FormContainer;



2f) Поговорим про React/TS/другие библиотеки {
Ознакомлены ли вы с хуками? В чем их преимущества? Приходилось ли делать свои и с какой целью?
Знакомы ли вы с фрагментами и порталами? Зачем они нужны?
Когда и для чего используют рефы?
В чем разница useRef и useState?
Какие вы знаете методы жизненного цикла компонента?
В каком методе жизненного цикла компонента лучше делать запросы на сервер? Почему?
В каком методе жизненного цикла компонента лучше делать подписку и отписку от листенера? Почему? Зачем отписываться?
Был ли опыт работы с контекстом? Когда его стоит использовать
В чем особенность PureComponent?
В чем видите преимущества библиотеки React?
Что такое Virtual DOM и Shadow DOM?
Зачем в списках ключи? Можно ли делать ключами индексы элементов массива? Когда это оправдано?
Приходилось ли вам настраивать проект React с нуля? С помощью каких инструментов вы это делали?
Что самое сложное вам приходилось реализовывать с помощью React?
Что такое TS?
Что такое Generics?
Разница между any и unknown?
Что такое type guard?
Чем различаются ключевые слова interface и type в TypeScript?
}



2h) Общие
Как обрабатываются ошибки? В каком случае можно перезаписать return в функции?
Какие методики отпимизации приложения и метрики вы знаете?
Что вы знаете про доступность?
Как клиент взаимодействует с сервером? - socet/rest/graphql/sse/long poling
Что значит HTTP?
Какие методы HTTP-запросов вы знаете?
Какая разница HTTP vs HTTPS? 
Какие знаете коды ответа (состояния) HTTP?
Что такое Cross-Origin Resource Sharing?
Что такое cookie?
Чем JS отличается при работе на front-end и back-end?
Что такое REST?
Объяснить понятие мутабельность/иммутабельность? Какие типы являются мутабельными и наоборот?
Как искать ошибки в коде? Используете ли вы дебаггер?
Назовите способы хранения данных в браузере.
Какие паттерны знаете и используете в работе?
Что такое ci/cd
Для чего нужен package-lock.json?
Можете ли вы описать суть методологии git flow/Trunk Based в двух словах?
SOLID

 WebWorkers
 ServiceWorkers
 SSR/SSG/CSR/SPA/PWA
 Что такое микросервисы?
 Что знаете про тестирование? Какие типы тестов есть? Что такое пирамида тестирования? Как и что тестируете?
 Подходы: {
     TDD -это методология разработки ПО, которая основывается на повторении коротких циклов разработки:
         изначально пишется тест, покрывающий желаемое изменение, затем пишется программный код,
         который реализует желаемое поведение системы и позволит пройти написанный тест. 
         Затем проводится рефакторинг написанного кода с постоянной проверкой прохождения тестов.
    BDD — behaviour-driven development — это разработка, основанная на описании поведения. 
         Определенный человек(или люди) пишет описания вида "я как пользователь хочу когда нажали кнопку пуск
         тогда показывалось меню как на картинке" (там есть специально выделенные ключевые слова).
         Программисты давно написали специальные тулы, которые подобные описания переводят в тесты (иногда совсем прозрачно для программиста). А дальше классическая разработка с тестами.
 
     DDD - это набор принципов и схем, направленных на создание оптимальных систем объектов.
         Процесс разработки сводится к созданию программных абстракций, которые называются моделями предметных областей.
         В эти модели входит бизнес-логика, устанавливающая связь между реальными условиями области применения продукта и кодом.
 }
 С чего начинается создание фичи/компонента/проекта
 Как выбирать библиотеки?


// Задачи 

Василий Кузенков  10:38 PM
### buildQueryString  https://ru.hexlet.io/challenges/js_collections_query_string_exercise
```
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров:
import bqs from ‘../buildQueryString.js’;
bqs({ per: 10, page: 1 });
// page=1&per=10
Имена параметров в выходной строке должны располагаться в алфавитном порядке (то есть их нужно отсортировать)
```
### summaryRanges https://ru.hexlet.io/challenges/js_arrays_summary_ranges_exercise
```
Реализуйте и экспортируйте по умолчанию функцию, которая находит в массиве непрерывные возрастающие последовательности чисел и возвращает массив с их перечислением.
Примеры
summaryRanges([]);
// []
summaryRanges([1]);
// []
summaryRanges([1, 2, 3]);
// [‘1->3’]
summaryRanges([0, 1, 2, 4, 5, 7]);
// [‘0->2’, ‘4->5’]
summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]);
// [‘110->112’, ‘-5->-4’]
```
### formattedTime https://ru.hexlet.io/challenges/intro_to_programming_time_exercise
```
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм. Если количество минут содержит больше 24 часов (1 суток), то функция возвращает время, прошедшее с полуночи последних суток.
Примеры:
formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34
formattedTime(1504); // 01:04
Подсказки
Используйте функцию Math.floor(number) для округления до нижней границы.
```
### sameParityFilter https://ru.hexlet.io/challenges/js_functions_same_parity_exercise
```
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива.
Примеры
sameParity([-1, 0, 1, -3, 10, -2]); // [-1, 1, -3]
sameParity([2, 0, 1, -3, 10, -2]); // [2, 0, 10, -2]
sameParity([]); // []
```
### flatten https://ru.hexlet.io/challenges/js_trees_flatten_exercise
```
Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.
Для решения задачи нельзя использовать готовые методы для выравнивания массивов.
Примеры
const list = [1, 2, [3, 5], [[4, 3], 2]];
flatten(list); // [1, 2, 3, 5, 4, 3, 2]
Подсказки
Array.isArray - проверяет, является ли элемент массивом.
```
### promisify https://ru.hexlet.io/challenges/js_asynchronous_programming_promisify_exercise
```
promisify.js
Реализуйте и экспортируйте по умолчанию функцию, которая “промисифицирует” асинхронные функции с колбеками.
import promisify from ‘../promisify.js’;
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const filepath = ‘/tmp/myfile’;
writeFile(filepath, ‘content’)
  .then(() => readFile(filepath))
  .then(console.log);
Реализация этой функции опирается на тот факт, что колбек в асинхронных функциях всегда передается последним параметром.
Подсказка
Вам понадобятся rest и spread операторы
```
ru.hexlet.ioru.hexlet.io
Сборщик строки запроса
JS: Коллекции: Query String (строка запроса) - часть адреса страницы в интернете содержащая константы и их значения. Она начинается после вопросительного знака и идет до конца адреса. Пример: # query string: page=5 https://ru.hexlet.io/blog?page=5 Если параметров несколько, то они отделяются амперсандом & # query string: page=5&per=10 https://ru.hexlet.io/blog?per=10&page=5 buildQueryString.js Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров: import bqs from '../buildQueryString.js'; bqs({ per: 10, page: 1 }); // page=1&per=10 Имена параметров в выходной строке должны распо… Show more
https://ru.hexlet.io/challenges/js_collections_query_string_exercise

ru.hexlet.ioru.hexlet.io
Список диапазонов
JS: Массивы: solution.js Реализуйте и экспортируйте по умолчанию функцию, которая находит в массиве непрерывные возрастающие последовательности чисел и возвращает массив с их перечислением. Примеры summaryRanges([]); // [] summaryRanges([1]); // [] summaryRanges([1, 2, 3]); // ['1->3'] summaryRanges([0, 1, 2, 4, 5, 7]); // ['0->2', '4->5'] summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]); // ['110->112', '-5->-4']
https://ru.hexlet.io/challenges/js_arrays_summary_ranges_exercise

ru.hexlet.ioru.hexlet.io
Форматированное время
Введение в программирование: formattedTime.js Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм. Если количество минут содержит больше 24 часов (1 суток), то функция возвращает время, прошедшее с полуночи последних суток. Примеры: formattedTime(5); // 00:05 formattedTime(15); // 00:15 formattedTime(60); // 01:00 formattedTime(67); // 01:07 formattedTime(175); // 02:55 formattedTime(600); // 10:00 formattedTime(754); // 12:34 formattedTime(1504); // 01:04 Подсказки Используйте функцию Math.floor(number) для округления до нижней границы.
https://ru.hexlet.io/challenges/intro_to_programming_time_exercise

ru.hexlet.ioru.hexlet.io
Одинаковая четность
JS: Функции: sameParityFilter.js Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. Примеры sameParity([-1, 0, 1, -3, 10, -2]); // [-1, 1, -3] sameParity([2, 0, 1, -3, 10, -2]); // [2, 0, 10, -2] sameParity([]); // []
https://ru.hexlet.io/challenges/js_functions_same_parity_exercise

ru.hexlet.ioru.hexlet.io
Выравнивание (Массив)
JS: Деревья: flatten.js Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив. Для решения задачи нельзя использовать готовые методы для выравнивания массивов. Примеры const list = [1, 2, [3, 5], [[4, 3], 2]]; flatten(list); // [1, 2, 3, 5, 4, 3, 2] Подсказки Array.isArray - проверяет, является ли элемент массивом.













