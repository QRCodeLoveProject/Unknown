document.addEventListener('DOMContentLoaded', function() {
    var modale = document.getElementById('benvenutoModale');
    var chiudiButton = document.querySelector('.chiudi');
    var corpo = document.querySelector('body'); // o seleziona un contenitore specifico

    // Mostra il modale e applica l'effetto sfocatura all'apertura della pagina
    modale.style.display = "block";
    corpo.classList.add('blur-effect');

    // Chiudi il modale e rimuovi l'effetto sfocatura quando l'utente clicca su (x)
    chiudiButton.addEventListener('click', function() {
        modale.style.display = 'none';
        corpo.classList.remove('blur-effect');
    });
});
