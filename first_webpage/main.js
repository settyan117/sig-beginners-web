const clock = document.getElementById('clock');
setInterval(() => {
    clock.innerHTML = (new Date()).toISOString();
}, 1000);