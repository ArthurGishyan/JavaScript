const quizData = [
    { 
        q: "Новый уровень! Как проверить, является ли значение 'чистым' NaN (Not-a-Number), если NaN === NaN возвращает false?", 
        options: ["Использовать typeof", "Вызвать Number.isNaN(value)", "Сравнить через == вместо ===", "Использовать typeof value === 'NaN'"], 
        correct: 1, explanation: "В JS NaN не равен сам себе. Надежный способ проверки — метод Number.isNaN(). Глобальная функция isNaN() работает хуже, так как пытается преобразовать строки в числа."
    },
    { 
        q: "В чем разница между операторами || (ИЛИ) и ?? (Nullish Coalescing)?", 
        options: ["|| работает только со строками", "?? реагирует только на null и undefined, а || реагирует на любые 'ложные' значения (0, '', false)", "Они абсолютно идентичны", "?? это побитовый оператор"], 
        correct: 1, explanation: "Если у тебя есть переменная `let count = 0;`, выражение `count || 10` вернет 10 (так как 0 — это false). А вот `count ?? 10` вернет 0, потому что ?? пропускает только null и undefined."
    },
    { 
        q: "Как быстро удалить все дубликаты из массива [1, 2, 2, 3] без циклов?", 
        options: ["Использовать [...new Set(arr)]", "Вызвать arr.unique()", "arr.filter(duplicates)", "Использовать arr.splice()"], 
        correct: 0, explanation: "Объект Set может хранить только уникальные значения. Передав в него массив, мы уничтожаем дубликаты, а спред-оператор (...) разворачивает Set обратно в массив."
    },
    { 
        q: "Что делает метод e.preventDefault() в обработчике событий браузера?", 
        options: ["Останавливает всплытие события вверх по DOM-дереву", "Отменяет стандартное поведение браузера (например, переход по ссылке или перезагрузку при отправке формы)", "Удаляет элемент из HTML", "Блокирует клики мышкой по всей странице"], 
        correct: 1, explanation: "preventDefault отменяет действие по умолчанию. А вот для остановки всплытия события используется e.stopPropagation()."
    },
    { 
        q: "Что произойдет, если мы сделаем JSON.stringify({ a: 1, b: undefined, c: function(){} }) ?", 
        options: ["Строка '{\"a\":1,\"b\":undefined}'", "Произойдет ошибка конвертации", "Строка '{\"a\":1}'", "Строка '{\"a\":1,\"b\":null}'"], 
        correct: 2, explanation: "Формат JSON не поддерживает функции и undefined. При конвертации объекта в JSON-строку свойства с такими значениями просто молча игнорируются и удаляются."
    },
    { 
        q: "Как сработает опциональная цепочка с массивом: arr?.[0] ?", 
        options: ["Выдаст синтаксическую ошибку", "Вернет первый элемент, а если массива arr не существует — безопасно вернет undefined", "Создаст массив, если его нет", "Вернет null"], 
        correct: 1, explanation: "Опциональная цепочка ?. отлично работает не только с объектами, но и с массивами arr?.[index] и вызовами функций func?.()."
    },
    { 
        q: "В чем разница между Object.keys(obj) и циклом for...in ?", 
        options: ["Разницы нет", "Object.keys возвращает только собственные ключи объекта, а for...in перебирает еще и унаследованные ключи из прототипа", "for...in работает только с массивами", "Object.keys возвращает значения, а не ключи"], 
        correct: 1, explanation: "for...in заглядывает в 'генетику' объекта (его прототип), поэтому при его использовании часто делают проверку obj.hasOwnProperty(key)."
    },
    { 
        q: "Всплывают ли классы (class User {}) так же, как функции (function User() {})?", 
        options: ["Да, они идентичны под капотом", "Нет, классы не всплывают вообще", "Они всплывают, но находятся во Временной Мертвой Зоне (TDZ), их нельзя использовать до объявления", "Всплывают только методы класса"], 
        correct: 2, explanation: "Подобно let и const, классы поднимаются движком, но остаются недоступными до строки, где они физически написаны. Попытка создать new User() до объявления класса выдаст ошибку."
    },
    { 
        q: "Деструктуризация с остатком: `const { a, ...rest } = { a: 1, b: 2, c: 3 };` Чему равен rest?", 
        options: ["Массиву [2, 3]", "Объекту { b: 2, c: 3 }", "Числу 5", "undefined"], 
        correct: 1, explanation: "При деструктуризации объектов rest-оператор собирает все оставшиеся нераспакованные свойства в новый объект."
    },
    { 
        q: "Что делает метод массива .flat() ?", 
        options: ["Сортирует массив", "Удаляет все нули и undefined", "Разглаживает вложенные массивы (например, [1, [2, 3]] превратит в [1, 2, 3])", "Очищает массив"], 
        correct: 2, explanation: "Метод flat() 'выравнивает' многомерные массивы. По умолчанию он разглаживает только 1 уровень вложенности, но можно передать глубину (например, arr.flat(Infinity))."
    },
    { 
        q: "В строгом режиме ('use strict') внутри обычной функции (не метода) this будет равен...", 
        options: ["window", "undefined", "null", "Самому объекту функции"], 
        correct: 1, explanation: "Без строгого режима this 'свободной' функции ссылается на глобальный объект window. Строгий режим запрещает это поведение в целях безопасности, делая this равным undefined."
    },
    { 
        q: "Что такое Event Delegation (Делегирование событий)?", 
        options: ["Передача события с одного сервера на другой", "Назначение одного обработчика на родителя вместо того, чтобы вешать сотни обработчиков на каждого потомка", "Запрет на выполнение события", "Создание пользовательских CustomEvent"], 
        correct: 1, explanation: "Благодаря 'всплытию' событий мы можем повесить один слушатель на <ul id='list'>, и через e.target понимать, по какому именно <li> кликнули. Это сильно экономит память."
    },
    { 
        q: "Будет ли ошибка: `const arr = [1]; arr.push(2);` ?", 
        options: ["Да, const запрещает любые изменения", "Да, нужно использовать let", "Нет, const защищает только саму ссылку на массив, а мутировать его содержимое можно", "Ошибки не будет, но элемент не добавится"], 
        correct: 2, explanation: "Константа не позволяет переназначить саму переменную (arr = [3]). Но объекты и массивы внутри const остаются 'открытыми' для изменения их внутренностей."
    },
    { 
        q: "Что делает блок .finally() в Промисах?", 
        options: ["Прерывает цепочку", "Выполняется ТОЛЬКО в случае успеха", "Выполняется ВСЕГДА, независимо от того, успехом (then) или ошибкой (catch) завершился промис", "Возвращает финальный результат"], 
        correct: 2, explanation: "finally() идеально подходит для очистки: например, чтобы скрыть иконку загрузки (loader) вне зависимости от того, удалось загрузить данные или произошел сбой сети."
    },
    { 
        q: "Поймает ли try...catch ошибку из setTimeout?", 
        options: ["Да, всегда", "Только если это SyntaxError", "Нет, try...catch работает синхронно и к моменту срабатывания таймера уже завершит свою работу", "Да, если обернуть таймер в Promise"], 
        correct: 2, explanation: "Обычный try...catch не ловит ошибки, которые происходят асинхронно позже. Чтобы поймать ошибку внутри таймера, try...catch должен находиться ВНУТРИ самой функции таймера."
    },
    { 
        q: "Что значит звездочка в объявлении функции: `function* myFunc() {}` ?", 
        options: ["Это асинхронная функция", "Это функция-генератор, которая может приостанавливать свое выполнение (yield) и отдавать значения по одному", "Это устаревший синтаксис", "Это приватная функция"], 
        correct: 1, explanation: "Генераторы позволяют 'ставить функцию на паузу' с помощью слова yield, а затем возобновлять с помощью .next(), возвращая по одному значению за раз."
    },
    { 
        q: "Можно ли использовать await вне async функции?", 
        options: ["Никогда", "Только внутри классов", "Да, в современных модулях ES (type='module') поддерживается 'Top-level await'", "Да, если обернуть в скобки"], 
        correct: 2, explanation: "Раньше await работал ТОЛЬКО внутри async. Сейчас стандарт обновился, и на самом верхнем уровне файла-модуля (без оборачивания в функции) await тоже работает."
    },
    { 
        q: "В чем разница между WeakMap и обычным Map?", 
        options: ["WeakMap работает медленнее", "Ключами в WeakMap могут быть ТОЛЬКО объекты. Если на этот объект нет других ссылок, сборщик мусора автоматически удалит его и из WeakMap", "Разницы нет", "WeakMap не поддерживает методы get и set"], 
        correct: 1, explanation: "WeakMap предотвращает утечки памяти. Если ты сохранил в WeakMap DOM-элемент как ключ, а потом удалил его со страницы, он автоматически исчезнет и из WeakMap."
    },
    { 
        q: "Как импортировать переменную, если она была экспортирована по умолчанию (`export default value`)?", 
        options: ["import { value } from './file.js'", "import * as value from './file.js'", "import value from './file.js' (без фигурных скобок)", "require('./file.js')"], 
        correct: 2, explanation: "Экспорты по умолчанию (default) импортируются без фигурных скобок, и при импорте ты можешь назвать эту переменную любым именем."
    },
    { 
        q: "Каким будет значение this внутри обработчика события, назначенного через addEventListener (если это обычная функция, не стрелочная)?", 
        options: ["window", "Сам DOM-элемент, на котором висит обработчик", "undefined", "Объект события (Event)"], 
        correct: 1, explanation: "Под капотом браузер вызывает функцию-обработчик как метод элемента: `button.onclick()`. Поэтому this указывает на сам DOM-элемент (кнопку)."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let mistakes = []; // МАССИВ ДЛЯ ЗАПИСИ ОШИБОК

const startBtn = document.getElementById('start-btn');
const modal = document.getElementById('quiz-modal');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress');

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    modal.style.display = 'flex';
    mistakes = []; // Сбрасываем ошибки при новом старте
    loadQuestion();
});

function loadQuestion() {
    const currentData = quizData[currentQuestionIndex];
    
    progressText.innerText = `Вопрос ${currentQuestionIndex + 1} из ${quizData.length}`;
    progressText.style.color = "#aaaaaa";
    
    questionText.innerText = currentData.q;
    optionsContainer.innerHTML = '';

    currentData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerText = option;
        
        button.addEventListener('click', (e) => checkAnswer(e.target, index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(clickedButton, selectedIndex) {
    const currentData = quizData[currentQuestionIndex];
    const correctIndex = currentData.correct;
    
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.classList.add('disabled'));
    
    if (selectedIndex === correctIndex) {
        clickedButton.classList.add('correct');
        score++;
        progressText.innerText = "✅ Верно!";
        progressText.style.color = "#4caf50";
    } else {
        clickedButton.classList.add('wrong');
        allButtons[correctIndex].classList.add('correct'); 
        progressText.innerText = "❌ Ошибка!";
        progressText.style.color = "#f44336";
        
        // --- ЗАПИСЫВАЕМ ОШИБКУ В МАССИВ ---
        mistakes.push({
            question: currentData.q,
            userAnswer: currentData.options[selectedIndex],
            correctAnswer: currentData.options[correctIndex],
            explanation: currentData.explanation
        });
    }

    // Автоматический переход через 1 секунду
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1200);
}

function showResults() {
    progressText.innerText = "🎉 Тест завершен!";
    progressText.style.color = "#bb86fc";
    questionText.innerText = `Итоговый счет: ${score} из ${quizData.length}`;
    
    let message = score === quizData.length 
        ? "Идеально! Ошибок нет вообще! 🏆" 
        : "Отличная работа! Давай разберем ошибки ниже. 👇";

    // --- ГЕНЕРИРУЕМ СПИСОК ОШИБОК ДЛЯ ВЫВОДА ---
    let mistakesHTML = '';
    
    if (mistakes.length > 0) {
        mistakesHTML = `
            <div style="text-align: left; margin-top: 20px; max-height: 350px; overflow-y: auto; padding-right: 10px;">
                <h3 style="color: #ffb74d; margin-top: 0;">Твои ошибки:</h3>
        `;
        
        mistakes.forEach((m, i) => {
            mistakesHTML += `
                <div style="background: #2a2a2a; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #f44336;">
                    <p style="margin: 0 0 10px 0; color: #fff; font-size: 15px;"><strong>${i+1}. ${m.question}</strong></p>
                    <p style="margin: 0 0 5px 0; color: #f44336; font-size: 14px;">❌ <strong>Твой ответ:</strong> ${m.userAnswer}</p>
                    <p style="margin: 0 0 10px 0; color: #4caf50; font-size: 14px;">✅ <strong>Правильный:</strong> ${m.correctAnswer}</p>
                    <p style="margin: 0; color: #aaaaaa; font-size: 13px; line-height: 1.4;"><em>💡 Разбор: ${m.explanation}</em></p>
                </div>
            `;
        });
        
        mistakesHTML += `</div>`;
    }

    // Выводим сообщение и список ошибок (если есть)
    optionsContainer.innerHTML = `<p style="font-size: 18px; color: #ffffff;">${message}</p>` + mistakesHTML;
    
    // Кнопка рестарта
    const restartBtn = document.createElement('button');
    restartBtn.id = 'start-btn';
    restartBtn.innerText = 'Пройти еще раз';
    restartBtn.style.marginTop = '20px';
    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        mistakes = []; // Обязательно чистим массив ошибок!
        loadQuestion();
    });
    optionsContainer.appendChild(restartBtn);
}