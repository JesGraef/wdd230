const t = 35;
const s = 3.5;

document.querySelector('#temperature').textContent = `${t}\u00B0C`;
document.querySelector('#speed').textContent = s;

let f = "N/A";
if (t <= 50 && s > 3.0) {
    f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s  ** 0.16
}

document.querySelector('#chill').textContent = Math.round(f);    

