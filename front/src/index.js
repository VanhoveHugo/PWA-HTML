async function load() {
    if (navigator.onLine) {
        console.log('You are online');
    } else {
        console.log('You are offline');
    }

    const load = loader();
    const scoreEl = document.getElementById('score');
    scoreEl.appendChild(load);
}