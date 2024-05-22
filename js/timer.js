var startTime = localStorage.getItem('startTime');

// Проверяем, есть ли сохраненное время старта в localStorage
if (!startTime) {
    // Если нет, устанавливаем текущее время как время старта
    startTime = Date.now();
    localStorage.setItem('startTime', startTime);
} else {
    // Если есть, удаляем его (обнуляем таймер)
    localStorage.removeItem('startTime');
    // Устанавливаем текущее время как время старта
    startTime = Date.now();
    localStorage.setItem('startTime', startTime);
}

function updateTimer() {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;
    
    var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);
    
    document.getElementById('timer').innerText = hours + ':' + minutes + ':' + seconds;
}

setInterval(updateTimer, 1000);