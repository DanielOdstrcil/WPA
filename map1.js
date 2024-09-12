// map.js
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([49.8175, 15.472], 7); // Změňte souřadnice a zoom podle potřeby

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Přidejte značky pro národní parky s nadmořskou výškou
    L.marker([50.652, 14.189]).addTo(map).bindPopup('České Švýcarsko<br>Nadm. výška: 160 m');
    L.marker([49.067, 13.133]).addTo(map).bindPopup('Šumava<br>Nadm. výška: 1378 m');
    L.marker([50.726, 15.741]).addTo(map).bindPopup('Krkonoše<br>Nadm. výška: 1602 m');
    L.marker([48.748, 15.838]).addTo(map).bindPopup('Podyjí<br>Nadm. výška: 324 m');
    // Přidejte další značky podle potřeby

});
