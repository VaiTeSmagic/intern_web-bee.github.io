document.addEventListener("DOMContentLoaded", function() {
    // Загрузить страницу Activity по умолчанию при загрузке страницы
    loadPage('/main.html');

    // Найти все ссылки в меню
    var links = document.querySelectorAll('.menu-link');

    // Обработать клик на каждой ссылке
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменить стандартное поведение перехода по ссылке

            // Получить адрес, на который указывает ссылка
            var url = this.getAttribute('href');

            // Удалить класс activity-menu у всех пунктов меню
            document.querySelectorAll('.menu-item').forEach(function(item) {
                item.classList.remove('activity-menu');
            });

            // Добавить класс activity-menu к текущему пункту меню
            this.parentNode.classList.add('activity-menu');

            // Загрузить содержимое страницы
            loadPage(url);
        });
    });

    // Функция для загрузки содержимого страницы по указанному URL
    function loadPage(url) {
        // Загрузить содержимое страницы с помощью AJAX
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Поместить содержимое страницы в контейнер main
                document.getElementById('content').innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    
        // Удалить класс activity-menu у всех пунктов меню
        document.querySelectorAll('.menu-item').forEach(function (item) {
            item.classList.remove('activity-menu');
        });
    
        // Добавить класс activity-menu к текущему пункту меню
        document.querySelector('a[href="' + url + '"]').parentNode.classList.add('activity-menu');
    }
});