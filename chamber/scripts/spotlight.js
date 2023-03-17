fetch('./data.json')
    .then((response) => response.json())
    .then((data) => displayDirectory(data));

    const displayDirectory = (data) => {
        const test = data.filter(item => ["Gold", "Silver"].includes(item.membership));

        const businesses = [];
        const random1 = getRandomInt(test.length);
        businesses[0] = test[random1];
        delete test[random1];

        const random2 = getRandomInt(test.length);
        businesses[1] = test[random2];
        delete test[random2];

        const random3 = getRandomInt(test.length);
        businesses[2] = test[random3];

        const cards = document.querySelector('.spotlight'); // select the output container element

        businesses.forEach((directory) => {
            // Create elements to add to the div.grid element
            let card = document.createElement('section');
            let portrait = document.createElement('img');
            let name = document.createElement('p');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let url = document.createElement('p');

            // Build the p content to show the business name
            name.textContent = directory.name;
    
            // Build the p content to show the business address
            address.textContent = directory.address;

            // Build the p content to show the phone
            phone.textContent = directory.phone;
    
            // Build the p content to show the website url
            url.textContent = directory.website;
    
            // Build the image portrait by setting all the relevant attribute
            portrait.setAttribute('src', directory.image);
            portrait.setAttribute('alt', `Portait of ${directory.name}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '100');
            portrait.setAttribute('height', '100');
    
            // Append the section(card) with the created elements
            card.appendChild(portrait);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(url);
          
    
            cards.appendChild(card); 
        }) // end of forEach loop
    } // end of function expression

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }