fetch('./data.json')
    .then((response) => response.json())
    .then((data) => displayDirectory(data));

    const displayDirectory = (data) => {
        const cards = document.querySelector('div#cards'); // select the output container element
    
        data.forEach((directory) => {
            // Create elements to add to the div.cards element
            let card = document.createElement('section');
            let portrait = document.createElement('img');
            let name = document.createElement('p');
            let address = document.createElement('p');

            // Build the p content to show the birthdate
            name.textContent = directory.name;
    
            // Build the p content to show the birthdate
            address.textContent = directory.address;
    
            // Build the image portrait by setting all the relevant attribute
            portrait.setAttribute('src', directory.image);
            portrait.setAttribute('alt', `Portait of ${directory.name}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');
    
            // Append the section(card) with the created elements
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(portrait);
    
            cards.appendChild(card);    
        }) // end of forEach loop
    } // end of function expression

    