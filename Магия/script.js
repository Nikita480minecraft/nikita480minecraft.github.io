// Массив возможных ответов духа
const responses = [
    "Да, это неизбежно.",
    "Нет, этого не случится.",
    "Возможно, но не скоро.",
    "Тени прошлого скрывают ответ...",
    "Духи молчат... попробуйте позже.",
    "Ваша судьба в ваших руках.",
    "Опасность рядом — будьте бдительны.",
    "Светлое будущее ждёт вас.",
    "Тайна останется тайной.",
    "Ответ скрыт в ваших снах.",
    "Это принесёт вам удачу.",
    "Остерегайтесь обмана.",
    "Путь будет трудным, но вы справитесь.",
    "Любовь найдёт вас в неожиданный момент.",
    "Боги смеются над вашим вопросом...",
    "Может быть",
    "Тебе повезло",
    "Тебя ждёт испытание",
    "Будет непростой период в жизни",
    "Да",
    "Нет",
    "Прошлое может всё расказать",
    "Это может произойти скоро"
];

// Получаем элементы DOM
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const responseArea = document.getElementById('responseArea');
const responseText = document.getElementById('responseText');

// Функция для получения случайного ответа
function getRandomResponse() {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Обработчик клика по кнопке
askButton.addEventListener('click', function() {
    // Проверяем, введён ли вопрос
    if (questionInput.value.trim() === '') {
        alert('Задайте вопрос, прежде чем спрашивать духа!');
        return;
    }
    
    // Показываем область с ответом
    responseArea.classList.remove('hidden');
    
    // Анимация "размышления духа" (имитация задержки)
    responseText.textContent = 'Дух размышляет...';
    
    setTimeout(function() {
        // Выводим случайный ответ
        responseText.textContent = getRandomResponse();
    }, 1500); // Задержка 1.5 секунды
});

// Также обрабатываем нажатие Enter в поле ввода
questionInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        askButton.click();
    }
});


