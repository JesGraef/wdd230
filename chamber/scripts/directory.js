fetch('./data.json')
    .then((response) => response.json())
    .then((data) => displayDirectory(data));

    const displayDirectory = (data) => {
        const cards = document.querySelector('div.grid'); // select the output container element
    
        data.forEach((directory) => {
            // Create elements to add to the div.grid element
            let card = document.createElement('section');
            let portrait = document.createElement('img');
            // let name = document.createElement('p');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let url = document.createElement('p');

            // // Build the p content to show the business name
            // name.textContent = directory.name;
    
            // Build the p content to show the business address
            address.textContent = directory.address;

            // Build the p content to show the phone
            phone.textContent = directory.name;
    
            // Build the p content to show the website url
            url.textContent = directory.address;
    
            // Build the image portrait by setting all the relevant attribute
            portrait.setAttribute('src', directory.image);
            portrait.setAttribute('alt', `Portait of ${directory.name}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '100');
            portrait.setAttribute('height', '100');
    
            // Append the section(card) with the created elements
            card.appendChild(portrait);
            // card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(url);
          
    
            cards.appendChild(card);  
        }) // end of forEach loop
    } // end of function expression


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
