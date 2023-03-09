async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,US&units=imperial&appid=d5ff9422b0221d7c0207bd4aa38a8886';
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const t = data.main.temp;
    // const s = data.wind.speed;
    
    document.querySelector('#temperature').textContent = `${Math.round(t)}\u00B0C`;
    document.querySelector('#tempdesc').textContent = data.weather[0].description.toUpperCase();
    document.querySelector('#humidity').textContent = data.main.humidity;
    // document.querySelector('#weatherPic').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // document.querySelector('#speed').textContent = s;
}

apiFetch();

