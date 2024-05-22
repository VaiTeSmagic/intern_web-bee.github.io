document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([56.7478606,37.2002305], 15); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 21,
    }).addTo(map);

    var marker = L.marker([56.7478606,37.2002305]).addTo(map); 

    var loadingIndicator = document.querySelector('.loading'); 
    loadingIndicator.style.display = 'none'; 

    var mapContainer = document.querySelector('.map');
    mapContainer.style.height = '400px';

    map.on('tilesloaded', function () { 
        loadingIndicator.style.display = 'none'; 
        mapContainer.style.height = '';
    });
});
